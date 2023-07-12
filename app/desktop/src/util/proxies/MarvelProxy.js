Ext.define('ExtSample.util.proxies.MarvelProxy', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.marvel',
    pageParam: 'offset',
    filterParam: '',
    startParam: '',
    limitParam: 'limit',
    sortParam: 'order',
    directionParam: 'dir',
    queryParam: 'q',
    cacheString: 't',
    noCache: false,
    timeout: 120000,	
    headers: {
        'Content-Type': 'application/json'
    },
    reader: {
        type: 'json',
        rootProperty: 'data.results',
        totalProperty: 'data.total',
    },
    /**
     * @protected
     * @method buildUrl
     */
    buildUrl: function (request) {
        const  me = this;
        const _params = request._params;
        _params.apikey ='eac6875213f85574c0a00896af7bc7fa';
        _params.hash ='ba6fd71f448d925f41916a592a47ed66';
        _params.ts = 1000;
        _params.offset = 100; //!_params.offset || _params.offset < 2 ? 0 : (_params.offset-1) * _params.limit;
        return me.callParent([request]);
    }
});
