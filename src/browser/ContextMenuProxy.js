module.exports = {
    open: function (successCallback, errorCallback, para) {
        /* Vars */
        var title = para.title;
        var items = para.items;
        var contextmenu_wrapper = document.createElement('div');
        contextmenu_wrapper.setAttribute('id', 'cordova-context-menu-wrapper');
        var contextmenu = document.createElement('div');
        contextmenu.setAttribute('id', 'cordova-context-menu');
        
        /* Logic */
        for(var n = 0; items.length > n; n++) {
            var item = items[n];
            
            var entry = document.createElement('div');
            entry.setAttribute('class', 'cordova-context-menu-entry');
            entry.innerText = item.title;
            contextmenu.appendChild(entry);
        }
        
        var style = document.createElement('style');
        style.innerText = '#cordova-context-menu-wrapper{z-index:9999999999999;position:fixed;top:0;right:0;bottom:25px;width:100vw;height:100vh;margin:0 auto;padding:0;background:rgba(0,0,0,.55)}#cordova-context-menu{display:block;overflow:scroll;overflow-x:hidden;position:absolute;right:0;bottom:25px;left:0;width:100%;max-width:460px;height:auto;max-height:330px;margin:auto;background:#4b4b4b;border:2px solid rgba(125,125,125)}#cordova-context-menu .cordova-context-menu-entry{display:block;height:60px;width:100%;padding:0 20px;font-size:16px;line-height:60px;color:#fff;cursor:pointer}#cordova-context-menu .cordova-context-menu-entry:hover{background:rgba(255,255,255,.15)}';
        
        contextmenu_wrapper.appendChild(style);
        contextmenu_wrapper.appendChild(contextmenu);
        document.getElementsByTagName('body')[0].appendChild(contextmenu_wrapper);
    }
};
