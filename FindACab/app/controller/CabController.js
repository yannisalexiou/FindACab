Ext.define('FindACab.controller.CabController', {
    extend: 'Ext.app.Controller',

    config: {
      models: ['Cab'],
      stores: ['Cabs'],
      refs: {
        //Referecens to view components
        main: 'mainview'
      },
      control: {
        //Dispatches events that belong to certain view compontents to custom methods
        'mainview': {
          initialize: 'onInitMain',
        },
        'button[action=press]': {
          tap: 'onTapMain'
        }
      }
    },

    onInitMain: function () {
      console.log("Initialize mainview");
    },

    onTapMain: function () {
      console.log("Tapped a button in mainview");
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
