//Create a view and do not set the top and set center.y to 200 and height to 50, call top value (static/dynamic)

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
	height: 50,
	center: {y:200}
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Yellow view dynamic top value should be 175 and is: '+ view.rect.y + '\nStatic top value should be undefined and is: ' + view.top;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);