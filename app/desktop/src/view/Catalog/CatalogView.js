Ext.define('ExtSample.view.Catalog.CatalogView', {
	extend: 'Ext.Container',
	xtype: 'catalog-view',
	controller: 'catalog-view',
	viewModel: 'catalog-view',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'container',
        flex: 1,
        layout: 'center',
        items: [{
            margin: 4,
            xtype: 'image',
            cls: 'image-container',
            bind: {
                src: '{record.thumbnail.path}.{record.thumbnail.extension}'
            }
        }]
	}, {
        xtype: 'component',
        html: '<hr>'
	}, {
        xtype: 'container',
        layout: {
            type: 'hbox',
            align: 'stretch',
            pack: 'start'
        },
        items: [{
            xtype: 'component',
            bind: {
                html: '{record.name:ellipsis("18")}'
            },
            flex: 1
        }, {
            xtype: 'checkbox',
            bind: {
                checked: '{record.isChecked}'
            }
        }]
    }]
});