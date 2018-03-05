Ext.define('FindACab.store.Cabs', {
  extend: 'Ext.data.Store',
  requires: ['Ext.data.proxy.JsonP'],
  //Everyting inside config, I can call it wih get e.x. getModel()
  config: {
    model: 'FindACab.model.Cab',
    autoLoad: false,
    proxy: {
      type: 'jsonp',
      // withCredentials: true,
      //useDefaultXhrHeader: false,
      //cors: true,
      method: 'GET',
      //Cache all the responses
      noCache: false,
      url: Utils.Commons.YELP_API,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With, Authorization',
        // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Authorization': Utils.Commons.YELP_API_KEY
      },
      extraParams: {
        term: Utils.Commons.YELP_TERM,
        location: Utils.Commons.LOCATION
      },
      reader: {
        type: 'json',
        rootProperty: 'businesses'
      }
    }
  }
});
