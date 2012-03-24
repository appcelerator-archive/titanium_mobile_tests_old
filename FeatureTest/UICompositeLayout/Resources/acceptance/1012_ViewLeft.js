// Create a view and retrieve its left value 
// View should be shifted 10 system units to the right
var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'red',
	left: 10
})

var label = Ti.UI.createLabel({
	text: 'view.left value should be 10 and is: ' + view.left +' The red view should be shifted 10 system units from the left and is: ' + view.left,
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

win.add(view);
win.add(label);
