// Create a view and do not set the left and set center.x to 80 and right to 120, call left value (static/dynamic) 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: 200,
	width: 300,
	color: 'black'
});
var view = Ti.UI.createView({
	backgroundColor: 'yellow',
	center: {x:80},
	right: 120
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'View Dynamic Left value: '+view.rect.left +'\n Static Left Value is undefined:' + view.left;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);