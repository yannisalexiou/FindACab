Ext.define('FindACab.store.Cabs', {
  extend: 'Ext.data.Store',
  requires: ['Ext.data.proxy.JsonP'],
  //Everyting inside config, I can call it wih get e.x. getModel()
  config: {
    model: 'FindACab.model.Cab',
    autoLoad: false,
    proxy: {
      type: 'ajax',
      withCredentials: true,
      useDefaultXhrHeader: false,
      //Cache all the responses
      noCache: false,
      url: 'http://localhost:3000/yelp',
      //url: 'https://api.yelp.com/v3/businesses/search?term=Taxi&location=Amsterdam%20NL',
      reader: {
        type: 'json',
        rootProperty: 'businesses'
      }
    }
  }
});
