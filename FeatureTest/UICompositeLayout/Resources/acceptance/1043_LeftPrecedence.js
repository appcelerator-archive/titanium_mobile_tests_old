// Create a view with left to 10 and center.x to 30 and right to 100 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'yellow',
	left: 10,
	center: {x:30},
	right: 100
});

var label = Ti.UI.createLabel({
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});


win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Yellow view.width value should be 40 and is: ' + view.size.width + '\nYellow view should be shifted 10 units from the left and is: '+ view.left;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);