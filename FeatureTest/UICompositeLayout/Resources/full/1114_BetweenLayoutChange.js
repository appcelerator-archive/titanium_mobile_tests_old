// Create a view where only one layout request is made between the startLayout() and finishLayout() call even though there are multiple invalid property changes
// The red square should be closer to the left hand corner

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var button = Ti.UI.createButton({
	title: 'One Change',
	top: 20,
	width: 100,
	height:50
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