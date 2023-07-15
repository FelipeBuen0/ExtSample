Ext.define('ExtSample.view.main.MainViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.main-view',
	bindings: {
		onSearchChange: '{searchField}'
	},
	initViewModel: function (viewModel) {
		console.log('Viewmodel: ', viewModel);
	},
	onChildDataviewTap: function (button) {

	},
	onSearchChange: function (newValue, oldValue) {
		if (!Ext.isDefined(oldValue)) {
            return;
        }
		const me = this;
		Ext.defer(me.onFilterByName, 1000, me, [newValue]);
	},
	onFilterByName: function (options) {
		const me = this;
		const Characters = me.getViewModel().getStore('Characters');
	 	Characters.clearFilter();
		if (Ext.isString(options) && options.length >= 1) {
			const regex = new RegExp(options, 'i');
			Characters.filterBy((r) => {
				return regex.test(r.get('name'));
			});
			return true;
		}
	}
})
