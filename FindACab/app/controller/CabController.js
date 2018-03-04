Ext.define('FindACab.controller.CabController', {
    extend: 'Ext.app.Controller',

    config: {
      models: ['Cab'],
      stores: ['Cabs'],
      refs: {
        //Referecens to view components
        main: 'main'
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
      var a = Ext.ComponentQuery.query('mainview').length;
      var b = Ext.ComponentQuery.query('mainview');
      var c = this.getMain();
      console.log("On init app found "
            + a
            + " mainviews: ",
            b);
        console.log("On init app found the reference: ",
            c);
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
      //A good place to run any logic that has to run after the app UI is initialized
      var a = Ext.ComponentQuery.query('mainview').length;
      var b = Ext.ComponentQuery.query('mainview');
      var c = this.getMain();
      console.log("On launch app found "
            + a
            + " mainviews: ",
            b);
        console.log("On launch app found the reference: ",
            c);
    }
});
