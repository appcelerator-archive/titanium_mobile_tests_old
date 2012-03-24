// Changing a view's property using one request for a single layout
// The red squre should become a rectangle and move closer to the left-hand corner

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var button = Ti.UI.createButton({
	title: 'Change',
	top: 20,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE
});
win.add(button)

var view = Ti.UI.createView({
	backgroundColor: 'red',
	height: 50,
	width: 50,
	top: 200
})
win.add(view)

button.addEventListener('click', function() {
	view.startLayout();
	
	view.width = 200;
	view.height = 30;
	
	view.finishLayout();
});
