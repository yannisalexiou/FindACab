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

    initialize: function () {
      console.log("Component Main initialized");
      this.callParent();
    }
});
