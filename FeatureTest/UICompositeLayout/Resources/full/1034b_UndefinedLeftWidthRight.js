//Create a view and do not set the left and set right to 80 and width to 120, call left value (static/dynamic) 

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
	width: 120,
	right: 80
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Yellow view should be 80 units from the right and is:'+ view.right +'\nYellow view width should be 120 and is: '+ view.width + '\nStatic left value should be undefined and is: ' + view.left;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);