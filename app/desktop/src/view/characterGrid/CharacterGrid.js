Ext.define('ExtSample.view.characterGrid.CharacterGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'main-grid',
    tile: 'Another visualization of the data',
    bind: {
        store: '{Characters}'
    },
    columns: [{
        text: 'Character Name',
        dataIndex: 'name'
    }, {
        text: 'Character Description',
        dataIndex: 'description'
    }]
})