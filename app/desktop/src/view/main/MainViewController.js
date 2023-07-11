Ext.define('ExtSample.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.main-view',
  initViewModel: function (viewModel) {
    console.log('Viewmodel: ', viewModel);
  },
  onChildDataviewTap: function (button) {
      
  }
})
