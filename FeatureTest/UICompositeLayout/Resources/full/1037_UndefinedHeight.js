// Create a view and do not set the height and set the top to 5 and bottom to 10, call height value(static/dynamic) 

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
	top: 5,
	bottom: 10
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Yellow view should be 5 units from the top and is: '+ view.top +' Yellow view should be 10 units from the bottom and is: '+ view.bottom+ '\nYellow view dynamic height value should be: '+ win.rect.y + '+' + win.rect.height + '-'+ view.top + '-' + view.bottom + '=' + view.size.height+'\nStatic height value should be undefined and is:' + view.height;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);