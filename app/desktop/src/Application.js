Ext.define('ExtSample.Application', {
  extend: 'Ext.app.Application',
  name: 'ExtSample',
  requires: ['ExtSample.*'],

  launch: function () {
    Ext.Viewport.add([{xtype: 'main-view'}])
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload()
        }
      }
    )
  }
})
