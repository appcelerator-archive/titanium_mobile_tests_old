// Create a view and set its width value to 10
// View width should be 10 system units

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
	width: 10
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'View Width value: '+view.width+'\nPass if value is: 10';
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);