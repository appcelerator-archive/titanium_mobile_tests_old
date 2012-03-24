// Create a view and do not set the width and set left to 5 and right to 10, call width value (static/dynamic) 

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
	right: 10
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'View dynamic width value is '+ win.size.width +'-'+ view.left + '-' + view.right + ' = ' + view.size.width+'\n Static Width Value should be undefined and is: ' + view.width;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);