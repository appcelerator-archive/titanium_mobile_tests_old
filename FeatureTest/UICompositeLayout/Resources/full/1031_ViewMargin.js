







/**
 * MARGIN WILL WILL NOT IMPLEMENTED FOR 2.0; will not be testing
 */

// Create a view and set margin to 10 for top/left/right/bottom
// View should contain 10 unit margin

var win = Ti.UI.currentWindow;

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});
var view = Ti.UI.createView({
	backgroundColor: 'yellow'
});

var innerView = Ti.UI.createView({
	backgroundColor: 'green',
	margin: 10
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'View Margin value: '+innerView.margin+'\nPass if value is: 10';
	win.addEventListener('postlayout', layoutHandler);
});

view.add(innerView);
win.add(view);
win.add(label);