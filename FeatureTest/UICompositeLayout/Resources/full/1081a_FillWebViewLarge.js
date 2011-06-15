//	Create a web view on a parent that takes the whole screen   

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if web view fills the screen',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});

var webview = Ti.UI.createWebView({url:'http://www.appcelerator.com'});

var view = Ti.UI.createView()

view.add(webview);

win.open({modal:true});
win.add(view);
win.add(label);
