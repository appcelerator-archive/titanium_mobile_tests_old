// Create a view with height of 10 and set top to 10 and bottom to 15 then call the view.size.height value 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'yellow',
	top: 10,
	bottom: 15,
	height: 10
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
	label.text = 'Yellow view.height value should be 10 and is: '+view.size.height+'\nYellow view should be 10 units from the top and is: ' + view.top;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);