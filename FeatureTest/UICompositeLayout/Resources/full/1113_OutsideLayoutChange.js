// Create a view where a layout request is made before startLayout() and after finishLayout() 
// The red square should remain the same

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var button = Ti.UI.createButton({
	title: 'No Change',
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
	
	view.top = 300;
	
	view.startLayout();
	view.finishLayout();
	
	view.left = 200;
	
});