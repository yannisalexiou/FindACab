Ext.define('FindACab.controller.CabController', {
    extend: 'Ext.app.Controller',

    config: {
      models: ['Cab'],
      stores: ['Cabs'],
      markers: [],
      refs: {
        //Referecens to view components
        main: 'mainview',

        titlebar: 'overview titlebar',
        overview: 'overview',
        detailView: 'detailView'
      },
      control: {
        //Dispatches events that belong to certain view compontents to custom methods
        'mainview': {
          initialize: 'onInitMain',
        },

        'button[action=press]': {
          tap: 'onTapMain'
        },

        'overview toolbar button': {
          filtermame: 'setFilterName',
          filterdistance: 'setFilterDistance'
        },

        'map': {
          maprender: 'loadMarkers'
        },

        'overview': {
          select: 'prefillDetail'
        },

        'detailView button[action=close]': {
          close: 'onDetailClose'
        }

      }
    },

    onInitMain: function () {
      console.log("Initialize mainview");
    },

    onTapMain: function () {
      console.log("Tapped a button in mainview");
    },

    onCabStoreLoad: function (record, success, operation) {
      console.log("onCabStoreLoad");
      console.log(records.getData());
      Ext.Viewport.unmask();
    },

    setFilterName: function() {
     Ext.getStore('Cabs').sort('name');
     Ext.getStore('Cabs').load();
    },

    setFilterDistance: function() {
     Ext.getStore('Cabs').sort('distance');
     Ext.getStore('Cabs').load();
   },

   setTitleCount: function(count) {
      var t = Ext.String.format('Cabs ({0})', count);
      this.getTitlebar().setTitle(t);
    },

    loadMapElements: function () {
      var me = this;
      Ext.getStore('Cabs').load(function(item) {
        var count = Ext.getStore('Cabs').getCount();
        var lat = item[0].get('coordinates'); //latitude
        var lng = item[0].get('coordinates'); //longitude
        var position = new google.maps.LatLng(lat,lng);
        var map = Ext.ComponentQuery.query('map')[0];
        map.getMap().setCenter(position); //6

        me.loadMarkers(map, map.getMap()); //7
        me.setTitleCount(count); //8
      });
    },

    removeMarkers: function() {
        var me = this,
            markers = me.getMarkers(),
            total = markers.length;

        for (var i = 0; i < total; i++) {
            markers[i].setMap(null); //10
        }
        markers.splice(0, total);
        me.setMarkers(markers);
    },

    loadMarkers: function(comp, map) {
      var me = this,
          store = Ext.getStore('Cabs'),
          markers = me.getMarkers(),
          gm = comp.getMap(),
          list = me.getOverview();

      //clear markers when stored
      if (markers.length > 0) me.removeMarkers(); //11

      store.each(function(item, index, length) {
        var latlng = new google.maps.LatLng(item.get('latitude'),
            item.get('longitude')); //12

        //center the map based on the latlng of the first item.
        if (index === 0) comp.setMapCenter(latlng); //13

        var marker = new google.maps.Marker({ //14
            map: gm,
            position: latlng,
            icon: 'resources/images/marker.png'
        });
        markers.push(marker);

        google.maps.event.addListener(marker, 'click', function() { //15
            var i = store.indexOf(item);
            list.select(i);
        });

        me.setMarkers(markers); //16
      });
    },

    prefillDetail: function (list, record) {
      console.log("prefillDetail");
      this.getDetailView().getLayout().setAnimation({
        type: 'slide',
        direction: 'up'
      });
      this.getDetailView().setActiveItem(1);
      this.getDetailView().getActiveItem().setData(record.getData());
    },

    onDetailClose: function () {
      console.log("onDetailClose");
      this.getDetailView().getLayout().setAnimation({
        type: 'slide',
        direction: 'down'
      });
      this.getDetailView().setActiveItem(0);
      this.getOverview().deselectAll();
    },


    //Init method is called during the application initialization
    init: function () {
      var itemsWithQueryNameMainview = Ext.ComponentQuery.query('mainview').length;
      var referenceNameWithNameMainview = Ext.ComponentQuery.query('mainview');
      var getterOfAReferenceMain = this.getMain();
      console.log("On init app found "
            + itemsWithQueryNameMainview
            + " mainviews: ",
            referenceNameWithNameMainview);
      console.log("On init app found the reference: ",
          getterOfAReferenceMain);

          // Ext.Viewport.mask({
          //       xtype: 'loadmask',
          //       message: 'loading...'
          //   });

            Ext.getStore('Cabs').load();
            Ext.getStore('Cabs').addListener('load',
                this.onCabsStoreLoad,
                this);

      this.loadMapElements();
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
      //A good place to run any logic that has to run after the app UI is initialized
      var itemsWithQueryNameMainview = Ext.ComponentQuery.query('mainview').length;
      var referenceNameWithNameMainview = Ext.ComponentQuery.query('mainview');
      var getterOfAReferenceMain = this.getMain();
      console.log("On launch app found "
            + itemsWithQueryNameMainview
            + " mainviews: ",
            referenceNameWithNameMainview);
      console.log("On launch app found the reference: ",
          getterOfAReferenceMain);

    }
});
