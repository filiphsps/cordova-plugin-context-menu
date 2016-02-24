cordova.commandProxy.add("ContextMenu", {
    open: function (successCallback, errorCallback, para) {
        var title = para.title;
        var items = para.items;
        
        for(var n = 0; items.length > n; n++) {
            var item = items[n];
            
            //TODO
        }
    }
});
