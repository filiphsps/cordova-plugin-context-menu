function scalePos(X, Y, W, H) {
    var zoom = document.documentElement.msContentZoomFactor;
    return {
        x: (X + document.documentElement.scrollLeft - window.pageXOffset) * zoom,
        y: (Y + document.documentElement.scrollTop - window.pageYOffset) * zoom,
        width: W * zoom,
        height: H * zoom
    };
}

cordova.commandProxy.add("ContextMenu", {
    open: function (successCallback, errorCallback, para) {
        var title = para.title;
        var items = para.items;
        var pos = scalePos(para.x, para.y, para.width, para.height);
        
        var contextMenu = new Windows.UI.Popups.PopupMenu();
        for(var n = 0; items.length > n; n++) {
            var item = items[n];
            
            contextMenu.commands.append(new Windows.UI.Popups.UICommand(item.title, null, n+1));
        }
        
        menu.showForSelectionAsync(pos.done(function (invokedCommand) {
            if (invokedCommand !== null) {
                successCallback(items[invokedCommand.id-1].id);
            } else {
                errorCallback('dismissed');
            }
        }));
    }
});
