//Create a view with top to 10 and center.y to 30 and bottom to 100 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'yellow',
	top: 10,
	center: {y:30},
	bottom: 100
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
	label.text = 'Yellow view.height value should be 40 and is: '+view.size.height+'\nYellow view.center.y value should be 30 and is: '+ view.center.y + '\nYellow view should be shifted 10 units from the top and is: '+ view.top;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);