Ext.define('FindACab.store.Cabs', {
  extend: 'Ext.data.Store',
  //Everyting inside config, I can call it wih get e.x. getModel()
  config: {
    model: 'FindACab.model.Cab',
    autoLoad: true,
    proxy: {
      type: 'ajax',
      url: 'data/data.json',
      reader: {
        type: 'json',
        rootProperty: 'businesses'
      }
    }
  }
});
