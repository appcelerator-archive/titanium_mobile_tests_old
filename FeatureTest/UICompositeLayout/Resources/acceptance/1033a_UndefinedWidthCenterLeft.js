// Create a view and do not set the width and set left to 5 and center.x to 10, call width value (static/dynamic) 

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
	left: 5,
	center: {x:10}
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Yellow view.left value should be 5 and is: '+ view.left + '\nYellow view dynamic width value should be 10 and is ' + view.size.width +'\nStatic width value should be undefined and is:' + view.width;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);