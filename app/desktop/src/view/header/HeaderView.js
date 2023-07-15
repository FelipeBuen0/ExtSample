Ext.define('ExtSample.view.header.HeaderView', {
	extend: 'Ext.Container',
	xtype: 'header-view',
	cls: 'header-view',
	scrollable: 'y',
	items: [{
		xtype: 'component',
		html: '<h1>MARVEL CHARACTERS</h1>',
		cls: 'main-header'
	}, {
        xtype: 'textfield',
        flex: 1,
        margin: '0 32 0 32',
        placeholder: 'Procure aqui...',
        cls: 'search-field',
		bind: {
            value: '{searchField}'
        }
    }]
});