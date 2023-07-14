Ext.define('ExtSample.view.characterDataView.CharacterDataView', {
	extend: 'Ext.Container',
	xtype: 'character-data-view',
	controller: 'character-data-view',
	viewModel: 'character-data-view',
    cls: 'character-data-view',
    height: '635',
    layout: {
        type: 'vbox',
        align: 'middle'
    },
    items: [{
        xtype: 'image',
        cls: 'image-container',
        bind: {
            src: '{record.thumbnail.path}.{record.thumbnail.extension}'
        }
    }, {
        xtype: 'component',
        cls: 'character-name', 
        bind: {
            html: '{record.name}'
        }
    }, {
        xtype: 'component',
        html: '<hr>'
    }, {
        xtype: 'container',
        cls: 'description',
        height: 180,
        items: [{
            xtype: 'component',
            bind: {
                html: '<strong>Description:</strong><br>{record.description:ellipsis("282")}'
            }
        }, {
            xtype: 'textareafield',
            label: 'Escreva uma descrição para o personagem',
            width: '100%',
            keyMap: {
                ENTER: 'onEnter'
            },
            flex: 1,
            bind: {
                hidden: '{record.description}'
            }
        }]
    }, {
        xtype: 'component',
        html: 'Data provided by Marvel. © 2023 MARVEL',
        cls: 'copyright-marvel'
    }]
});