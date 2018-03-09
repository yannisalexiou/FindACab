Ext.define('FindACab.view.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    requires: [
      'FindACab.view.Overview',
      'FindACab.view.DetailView',
      'FindACab.view.RatingChart'
    ],
    // config: {
    //   layout: 'hbox',
    //   items: [{
    //     xtype: 'overview',
    //     flex: 1,
    //     store: 'Cabs'
    //   }, {
    //     xtype: 'detailView',
    //     flex: 3
    //   }]
    // },

    config: {
      layout: 'hbox'
    },

    constructor: function (config) {
      debugger;
      console.log("constructor");
      this.callParent(arguments);
    },

    initialize: function (arguments) {
      console.log("Component Main initialized");
      // console.log("Config: ", config);
      var newItems = [{
        xtype: 'overview',
        flex: 1,
        store: 'Cabs'
      }, {
        xtype: 'detailView',
        flex: 3
      }]
      this.add(newItems);
      this.callParent(arguments);
    }
});
