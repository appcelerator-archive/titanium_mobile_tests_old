//Create a view and do not set the height and set the center.y to 5 and bottom to 10, call height value(static/dynamic) 

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
	bottom: 10,
	center: {y:5}
});

win.addEventListener('open', function(e){
	label.text = 'View Dynamic Height value: '+ view.rect.bottom +'-'+ view.rect.top + '=' + view.size.height+'\n Static Height Value is undefined:' + view.height;
});

win.add(view);
win.add(label);