cordova.commandProxy.add("ContextMenu", {
    open: function (successCallback, errorCallback, para) {
        var title = para.title;
        var items = para.items;
        var pos = {x: para.x, y: para.y};
        
        var contextMenu = new Windows.UI.Popups.PopupMenu();
        for(var n = 0; items.length > n; n++) {
            var item = items[n];
            
            contextMenu.commands.append(new Windows.UI.Popups.UICommand(item.title, null, n+1));
        }
        
        contextMenu.showAsync(pos).done(function (invokedCommand) {
            if (invokedCommand !== null) {
                successCallback(items[invokedCommand.id-1].id);
            } else {
                errorCallback('dismissed');
            }
        });
    }
});
