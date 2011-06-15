// Create a view and set its top value to 10
// View should be shifted 10 system units down
var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'red',
	top: 10
})

var label = Ti.UI.createLabel({
	text: 'view.top: ' + view.top + ' The red view should be shifted 10 system units down',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});

win.add(view);
win.add(label);
