Ext.define('ExtSample.view.characterDataView.CharacterViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.character-data-view',
	onEnter: function (window, textarea) {
		this.getViewModel().set('record.description', textarea.getValue());
	}
});