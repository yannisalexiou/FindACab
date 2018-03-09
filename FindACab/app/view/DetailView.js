Ext.define('FindACab.view.DetailView', {
  extend: 'Ext.Container',
  xtype: 'detailView',
  requires: [
      'Ext.TitleBar',
      'Ext.Button',
      'Ext.layout.Card',
      'Ext.Map',
      'FindACab.view.RatingChart' //<1>
  ],
  config: {
    layout: 'card',
    items: [{
        xtype: 'titlebar',
        ui: 'light',
        docked: 'top',
        title: 'FindACab',
        items: [{
            iconCls: 'settings',
            itemId: 'settingsbtn',
            ui: 'plain',
            align: 'right'
        }]
      },
      {
        xtype: 'map',
        mapOptions: {
          overviewMapControl: false,
          panControl: false,
          rotateControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          zoom : 12,
          mapTypeId : google.maps.MapTypeId.ROADMAP
        },
        useCurrentLocation: false
      }, {
        padding: '20',
        cls: 'taxitpl',
        tpl: Ext.create('Ext.XTemplate', '<h1>{name}</h1>' +
            '<address>{address1}<br/>' +
            '{zip} {city} {state_code} {country_code}' +
            '</address>' +
            '<a href="tel:{phone}" class="x-button callnow">' +
            'Call now: {phone} </a><p>Distance: {distance}</p>'),

        items: [{
            docked: 'right',
            xtype: 'button',
            action: 'close',
            cls: 'closebtn',
            iconCls: 'delete',
            padding: 20,
            height: 50,
            handler: function() {
                this.fireEvent('close');
            },
            ui: 'plain'
        }, {
            docked: 'bottom',
            xtype: 'ratingchart', //<2>
            height: '30%', //<3>
        }, { //<4>
            docked: 'bottom',
            xtype: 'component',
            html: '<h1>User Rating:</h1>',
            padding: '0 20'
        }],
      }
    ]
  }


  // config: {
  //   layout: 'card'
  // },
  //
  // constructor: function (config) {
  //   console.log("constructor");
  //
  //   var newItems = [{
  //       xtype: 'titlebar',
  //       ui: 'light',
  //       docked: 'top',
  //       title: 'FindACab',
  //       items: [{
  //           iconCls: 'settings',
  //           itemId: 'settingsbtn',
  //           ui: 'plain',
  //           align: 'right'
  //       }]
  //     },
  //     {
  //       xtype: 'map',
  //       mapOptions: {
  //         overviewMapControl: false,
  //         panControl: false,
  //         rotateControl: false,
  //         streetViewControl: false,
  //         mapTypeControl: false,
  //         zoom : 12,
  //         mapTypeId : google.maps.MapTypeId.ROADMAP
  //       },
  //       useCurrentLocation: false
  //     }, {
  //       padding: '20',
  //       cls: 'taxitpl',
  //       tpl: Ext.create('Ext.XTemplate', '<h1>{name}</h1>' +
  //           '<address>{address1}<br/>' +
  //           '{zip} {city} {state_code} {country_code}' +
  //           '</address>' +
  //           '<a href="tel:{phone}" class="x-button callnow">' +
  //           'Call now: {phone} </a><p>Distance: {distance}</p>'),
  //
  //       items: [{
  //           docked: 'right',
  //           xtype: 'button',
  //           action: 'close',
  //           cls: 'closebtn',
  //           iconCls: 'delete',
  //           padding: 20,
  //           height: 50,
  //           handler: function() {
  //               this.fireEvent('close');
  //           },
  //           ui: 'plain'
  //       }, {
  //           docked: 'bottom',
  //           xtype: 'ratingchart', //<2>
  //           height: '30%', //<3>
  //       }, { //<4>
  //           docked: 'bottom',
  //           xtype: 'component',
  //           html: '<h1>User Rating:</h1>',
  //           padding: '0 20'
  //       }],
  //     }
  //   ]
  //
  //   this.config['items'] = newItems;
  //   console.log("Config: ", this.config);
  //
  //   this.callParent(arguments);
  // },
  //
  // initialize: function () {
  //   console.log("View DetailView initialize");
  //   this.callParent(arguments);
  // }
});
