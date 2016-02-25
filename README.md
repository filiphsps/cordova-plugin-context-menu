# cordova-plugin-context-menu
[cordova-plugin-context-menu on NPM](https://www.npmjs.com/package/cordova-plugin-context-menu)


## Platforms
* Windows 10 Build 10240+

## Installation
```
cordova plugin add cordova-plugin-context-menu --save
```

## Methods
Open a context menu at x,y
```javascript
var entries = [];
entries.push({
    title: 'Entry 1',
    id: 'test'
});
entries.push({
    title: 'Entry 2',
    id: 'foo'
});
entries.push({
    title: '',
    id: '',
    isSeparator: true
});
entries.push({
    title: 'Entry 3',
    id: 'bar'
});

var context = {
    title: 'Title',
    items: entries,
    x: 0,
    y: 0
}
ContextMenu.open(context, function (ele) {
    console.log('You clicked the entry with an id of ' + ele);
}););
```

## License
MIT
