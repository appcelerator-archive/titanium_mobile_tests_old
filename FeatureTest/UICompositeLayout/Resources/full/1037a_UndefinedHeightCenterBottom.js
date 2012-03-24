//Create a view and do not set the height and set the center.y to 5 and bottom to 10, call height value(static/dynamic) 

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
	bottom: 10,
	center: {y:5}
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Yellow view should be 10 units from the bottom and is: '+ view.bottom + '\nYellow view dynamic height value should be: 2*('+ win.rect.y + '+' + win.rect.height + '-' + view.bottom +'-'+ view.center.y + ') = ' + view.size.height+'\nStatic height value should be undefined and is: ' + view.height;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);