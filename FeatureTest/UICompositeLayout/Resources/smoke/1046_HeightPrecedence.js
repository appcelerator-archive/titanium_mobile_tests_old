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
	label.text = 'View Height value: '+view.size.height+'\nPass if the value is 10 and \n10 units down from the top';
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);