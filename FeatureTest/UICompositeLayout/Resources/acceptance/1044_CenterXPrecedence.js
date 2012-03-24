// Create a view with center.x to 100 and right to 50 added to a parent of width and height of 200 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';


var view = Ti.UI.createView({
	height: 200,
	width:200,
	backgroundColor: 'yellow'
})
var viewChild = Ti.UI.createView({
	backgroundColor: 'red',
	center: {x:100},
	right: 50
});

var label = Ti.UI.createLabel({
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});


win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Red view.width value should be 100 and is: '+viewChild.size.width+'\nThe red view should be verically centered within the yellow view';
	win.addEventListener('postlayout', layoutHandler);
});
view.add(viewChild);
win.add(view);
win.add(label);