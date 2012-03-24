// Create a view and retrieve its left value 
// View should be shifted 10 system units to the left
var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'red',
	right: 10
})

var label = Ti.UI.createLabel({
	text: 'view.right value should be 10 and is: ' + view.right + ' \nThe red view should be shifted 10 system units from the right and is :' + view.right,
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

win.add(view);
win.add(label);
