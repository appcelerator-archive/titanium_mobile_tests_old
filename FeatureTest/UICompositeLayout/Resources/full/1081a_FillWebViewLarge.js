//	Create a web view on a parent that takes the whole screen   

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if web view fills the screen',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

var webview = Ti.UI.createWebView({url:'http://www.appcelerator.com'});

var view = Ti.UI.createView()

view.add(webview);

win.add(view);
win.add(label);
