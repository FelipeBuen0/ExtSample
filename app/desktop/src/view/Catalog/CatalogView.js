Ext.define('ExtSample.view.Catalog.CatalogView', {
	extend: 'Ext.Container',
	xtype: 'catalog-view',
	cls: 'catalog-view',
	controller: 'catalog-view',
	viewModel: 'catalog-view',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'image',
        cls: 'image-container',
        margin: 4,
        bind: {
            src: '{record.thumbnail.path}.{record.thumbnail.extension}'
        }
    }, {
        xtype: 'component',
        bind: {
            html: '{record.name:ellipsis("18")}'
        }
    }, {
        xtype: 'component',
        html: '<hr>'
    }, {
        xtype: 'component',
        bind: {
            html: '{record.description:ellipsis("128")}'
        },
    }, {
        xtype: 'component',
        bind: {
            html: '<h3>CONFIDENTIAL</h3>',
            hidden: '{record.description}'
        },
    }]
});