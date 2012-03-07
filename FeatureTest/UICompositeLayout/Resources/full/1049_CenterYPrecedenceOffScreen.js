// Create a view with center.y to 20 and bottom to 100 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	height: 200,
	width:200,
	backgroundColor: 'yellow'
})
var viewChild = Ti.UI.createView({
	backgroundColor: 'red',
	center: {y:20},
	bottom: 100
});
var label = Ti.UI.createLabel({
	top: 20,
	left: 10,
	height: 60,
	width: 300,
	color: 'black'
});


win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Will be controlled by the parent view and bottom value is ignored';
	win.addEventListener('postlayout', layoutHandler);
});
view.add(viewChild);
win.add(view);
win.add(label);