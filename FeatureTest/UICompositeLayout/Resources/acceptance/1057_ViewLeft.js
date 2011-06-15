// Create a view and retrieve its left value 
var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'red',
	left: 10
})

var label = Ti.UI.createLabel({
	text: 'There red view should be shifted 10 units to the left',
	top: 20,
	height: 40
});

win.add(view);
win.add(label);
