// Create two view and do not set the Zindex create view 1 and view 2   
// View should display 2 on top of 1  

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
var view1 = Ti.UI.createView({
	backgroundColor: 'blue',
	top: 20,
	left: 20,
	height: 40,
	width: 40
});

var view2 = Ti.UI.createView({
	backgroundColor: 'orange',
	top: 40,
	left: 40,
	height: 40,
	width: 40
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Pass if the orange view is on top of the blue view';
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view1);
win.add(view2);
win.add(label);