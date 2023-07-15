Ext.define('ExtSample.view.characterDataView.CharacterDataViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.character-data-view',
	onEnter: function (window, textarea) {
		this.getViewModel().set('record.description', textarea.getValue());
	}
});