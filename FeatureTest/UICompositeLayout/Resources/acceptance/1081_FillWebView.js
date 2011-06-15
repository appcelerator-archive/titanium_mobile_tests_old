// Create a web view on a parent that is 50x50 and 100x100 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if web view loads and a black border is displayed',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});

var webview = Ti.UI.createWebView({url:'http://www.appcelerator.com'});
var webview2 = Ti.UI.createWebView({url:'http://www.appcelerator.com'});

var border1 = Ti.UI.createView({
	top:60,
	height:52,
	width:52,
	backgroundColor: 'black'
})

var border2 = Ti.UI.createView({
	top: 130,
	height: 102,
	width: 102,
	backgroundColor: 'black'
})

var view = Ti.UI.createView({
	top:1,
	height: 50,
	width: 50
})

var view2 = Ti.UI.createView({
	top:1,
	height: 100,
	width: 100
})


view.add(webview);
view2.add(webview2);
win.open({modal:true});
border1.add(view);
border2.add(view2);

win.add(border1);
win.add(border2);
win.add(label);
