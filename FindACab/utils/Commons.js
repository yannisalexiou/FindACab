Ext.define('Utils.Commons', {
  //I can use statics from anywhere in my by calling
  // Utils.Common.YELP_API
  statics: {
    //YELP_API: 'http://api.yelp.com/business_review_search?',
    YELP_API: 'https://api.yelp.com/v3/businesses/search?',
    YELP_API_KEY: 'Bearer E78OpTY4CjF69i0nQOujAmLYhQ35q35MMnkPsOHMQpH1t-XcL7pYhtutw208uM7TnPUhGYVvmyhqodkR-uX_Nz37fR102sTk9ilPgTMlRRcwn4HEHO0g4psKNxOdWnYx',
    YELP_CLIENT_ID: 'Mbl3vtJwKs5nYYj0A_simw',
    //YELP_KEY: 'ftPpQUCgfSA3yV98-uJn9g',
    YELP_TERM: 'Taxi',
    LOCATION: 'Amsterdam NL',

    getUrl: function () {
      return this.YELP_API + "term=" + this.YELP_TERM +
      "&ywsid=" + THIS.YELP_KEY + "&location=" + this.LOCATION;
    }
  }
})
