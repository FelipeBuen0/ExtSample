Ext.define('ExtSample.model.Base', {
    extend: 'Ext.data.Model',
    fields: [{
        name: '{entityName}Id',
        type: 'int'
    }],
    schema: {
        namespace: 'ExtSample.model',
        proxy: {
            type: 'marvel',
            //url: 'http://gateway.marvel.com:80/v1/public/{entityName:lowercase}',
            url: ' http://localhost:5216/v1/public/{entityName:lowercase}'
        }
    }
});