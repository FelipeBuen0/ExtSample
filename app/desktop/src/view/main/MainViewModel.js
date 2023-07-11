Ext.define('ExtSample.view.main.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.main-view',
  data: {
    record: null
  },
  stores: {
      Characters: {
          model: 'ExtSample.model.Characters',
		      autoLoad: true
      }
  }
})
