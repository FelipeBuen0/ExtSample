Ext.define('ExtSample.view.main.MainView', {
	extend: 'Ext.Container',
	xtype: 'main-view',
	controller: 'main-view',
	viewModel: 'main-view',
	scrollable: 'y',
	items: [{
		xtype: 'component',
		html: '<h1>MARVEL CHARACTERS</h1>',
		cls: 'main-header'
	}, {
		xtype: 'component',
		html: '<hr>'
	}, {
		xtype: 'componentdataview',
		reference: 'dataView',
		bind: {
			store: '{Characters}'
		},
		layout: {
			type: 'hbox',
			align: 'start',
			pack: 'center',
			wrap: true
		},
		itemConfig: {
			xtype: 'catalog-view',
			cls: 'component-data-view-container',
			viewModel: true
		},
		listeners: {
			childtap: 'onChildDataviewTap'
		}
	}]
});