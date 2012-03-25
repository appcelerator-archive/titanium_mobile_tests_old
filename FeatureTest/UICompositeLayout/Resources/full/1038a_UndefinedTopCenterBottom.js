//Create a view and do not set the top and set center.y to 50 and bottom to 200, call top value (static/dynamic)

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
	center: {y:50},
	bottom: 200
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Yellow view.center value should be 50 and is: '+ view.center.y +'\nYellow view dynamic top value should be negative: '+ view.rect.y + '\nStatic top value should be undefined and is: ' + view.top;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);