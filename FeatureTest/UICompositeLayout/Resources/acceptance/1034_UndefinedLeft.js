// Create a view and do not set the left and set center.x to 80 and width to 120, call left value (static/dynamic) 

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
	backgroundColor: 'yellow',
	center: {x:80},
	width: 120
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Yellow view dynamic left value should be 20 and is: '+view.rect.x +'\nStatic left value should be undefined and is: ' + view.left;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);