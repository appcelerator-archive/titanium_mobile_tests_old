// Create a view and set its height value
// Get correct value for the view height in the system units

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});
var view = Ti.UI.createView({
	backgroundColor: 'green',
	height: 10
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Green view.height value should be 10 and is: '+view.height;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);