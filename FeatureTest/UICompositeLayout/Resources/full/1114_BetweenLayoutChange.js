// CURRENTLY INVALID TEST FOR SDK BUILD 2.0.0.v20120323221800; STILL IN DEPRECATION CYCLE
// Create a view where only one layout request is made between the startLayout() and finishLayout() call even though there are multiple invalid property changes
// The red square should be closer to the left hand corner

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var button = Ti.UI.createButton({
	title: 'One Change',
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
	
	view.bottom = 50;
	
	view.startLayout();
	
	view.center = {x: 9, y: 10};
	
	view.finishLayout();
	
	view.right = 30;
	
});