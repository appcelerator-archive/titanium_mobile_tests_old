// Create a view and retrieve its size value
// Get correct value for the view size in system units

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
	backgroundColor: 'green'
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'View Size values: '+view.size.width+' by '+view.size.height+'\nPass if values are returned';
	win.addEventListener('postlayout', layoutHandler);
});

view.add(label);
win.add(view);