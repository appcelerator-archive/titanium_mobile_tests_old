// Create a view and do not set the left and set center.x to 80 and width to 120, call left value (static/dynamic) 

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
	center: {x:80},
	width: 120
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'View Dynamic Left value: '+view.rect.x + '=20' +'\n Static Left Value is undefined:' + view.left;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);