Ext.define('FindACab.view.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    requires: [
      'FindACab.view.Overview',
      'FindACab.view.DetailView',
      'FindACab.view.RatingChart'
    ],
    config: {
      layout: 'hbox',
      items: [{
        xtype: 'overview',
        flex: 1,
        store: 'Cabs'
      }, {
        xtype: 'detailView',
        flex: 3
      }]
    },

    // config: {
    //   layout: 'hbox'
    // },

    // constructor: function (config) {
    //   console.log("constructor");
    //
    //   var newItems = [{
    //     xtype: 'overview',
    //     flex: 1,
    //     store: 'Cabs'
    //   }, {
    //     xtype: 'detailView',
    //     flex: 3
    //   }]
    //
    //   this.config['items'] = newItems;
    //   console.log("Config: ", this.config);
    //
    //   this.callParent(arguments);
    // },
    //
    // initialize: function () {
    //   console.log("Component Main initialized");
    //   this.callParent(arguments);
    // }
});
