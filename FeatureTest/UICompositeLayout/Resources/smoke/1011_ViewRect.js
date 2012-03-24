// Create a view and retrieve its rect value
// Get correct value for the view rect in system units

var win = Ti.UI.currentWindow;

var label = Ti.UI.createLabel({
	text: 'View Rect values are... not available ',
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
	var rect = win.rect;
	label.text = 'View Rect values are, x: '+rect.x+' y: '+rect.y+
					' width: '+rect.width+' height: '+rect.height+
					'\nPass if values are returned';
	win.addEventListener('postlayout', layoutHandler);
});

view.add(label);
win.add(view);