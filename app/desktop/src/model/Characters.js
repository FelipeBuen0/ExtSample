Ext.define('ExtSample.model.Characters', {
    extend: 'ExtSample.model.Base',
    alias: 'Characters',
    fields: [{
        name: 'name',
        type: 'string'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'modified',
        type: 'date'
    }, {
        name: 'thumbnailPath',
        type: 'string',
        mapping: 'thumbnail.path'
    }, {
        name: 'thumbnailExtension',
        type: 'string',
        mapping: 'thumbnail.extension'
    }, {
        name: 'comicsCount',
        type: 'int',
        mapping: 'comics.available'
    }, {
        name: 'seriesCount',
        type: 'int',
        mapping: 'series.available'
    }, {
        name: 'storiesCount',
        type: 'int',
        mapping: 'stories.available'
    }, {
        name: 'eventsCount',
        type: 'int',
        mapping: 'events.available'
    }, {
        name: 'urlsTransformed',
        type: 'string',
        mapping: function (data) {
            return data.urls.map((r)=> `<a href="${r.url}" target="_blank">${r.type}<a/>`).join('<BR/>');
        }
    }]
});