// Create a view and retrieve its left value 
var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'red',
	right: 10
})

var value = view.right;

var label = Ti.UI.createLabel({
	text: 'view.right: ' + value + ' The red view should be shifted 10 units to the right',
	top: 20,
	height: 40
});

win.add(view);
win.add(label);
