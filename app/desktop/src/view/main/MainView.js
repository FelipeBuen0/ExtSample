Ext.define('ExtSample.view.main.MainView', {
	extend: 'Ext.Container',
	xtype: 'main-view',
	cls: 'main-view',
	controller: 'main-view',
	viewModel: 'main-view',
	scrollable: 'y',
	items: [{
		xtype: 'header-view'
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
			xtype: 'character-data-view',
			cls: 'character-data-view',
			viewModel: true
		},
		listeners: {
			childtap: 'onChildDataviewTap'
		}
	}, {
		xtype: 'main-grid'
	}]
});