// Create a view and set its bottom value to 10
// View should be shifted 10 system units up
var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'red',
	bottom: 10
})

var label = Ti.UI.createLabel({
	text: 'view.bottom value should be 10 and is: ' + view.bottom +'\nThe red view should be shifted 10 system units from the bottom and is: ' + view.bottom,
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

win.add(view);
win.add(label);
