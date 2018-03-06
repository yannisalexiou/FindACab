Ext.define('FindACab.model.Cab', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'name', type: 'string' },
            { name: 'coordinates', type: 'auto' },
            { name: 'latitude', mapping: 'coordinates.latitude' },
            { name: 'longitude', mapping: 'coordinates.longitude' },
            { name: 'address1', type: 'string' },
            { name: 'phone', type: 'string' },
            { name: 'state', type: 'string' },
            { name: 'zip_code', type: 'string' },
            { name: 'city', type: 'string' },
            { name: 'userinput', type: 'string' },
            { name: 'country', type: 'string' },
            { name: 'rating', type: 'auto' },
            { name: 'distance', type: 'float' }

        ]
    }
});
