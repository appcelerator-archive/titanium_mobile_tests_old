//Create a view and do not set the top and set center.y to 200 and height to 50, call top value (static/dynamic)

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
	height: 50,
	center: {y:200}
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'View Dynamic Top value: '+ view.rect.top + '=175' + '\n Static Height Value is undefined:' + view.top;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);