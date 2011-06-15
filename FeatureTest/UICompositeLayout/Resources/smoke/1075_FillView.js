// Create a view on a parent that takes the whole screen
// See that the view fills the screen

var win = Ti.UI.currentWindow;
win.backgroundColor = 'red';

var label = Ti.UI.createLabel({
	text: 'Green screen = Pass \n Any Red = Fail',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});
var view = Ti.UI.createView({
	backgroundColor: 'green'
});

view.add(label);
win.add(view);
