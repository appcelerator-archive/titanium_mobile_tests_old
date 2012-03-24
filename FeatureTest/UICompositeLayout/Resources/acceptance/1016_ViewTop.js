// Create a view and set its top value to 10
// View should be shifted 10 system units down
var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'red',
	top: 10
})

var label = Ti.UI.createLabel({
	text: 'view.top value should be 10 and is: ' + view.top + '\nThe red view should be shifted 10 system units from the top and is: ' + view.top,
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

win.add(view);
win.add(label);
