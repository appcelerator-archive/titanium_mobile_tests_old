//Create a view and do not set the top and set height to 100 and bottom to 200, call top value (static/dynamic) 

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
	bottom: 200,
	height: 100
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Yellow view should be 200 units from the bottom and is: '+ view.bottom +'\nYellow view dynamic top value: '+ view.rect.y + '\nStatic top value should be undefined and is: ' + view.top;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);