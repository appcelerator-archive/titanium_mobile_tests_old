// Create a view with center.x to 20 and right to 100 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'yellow',
	center: {x:20},
	right: 100
});

var label = Ti.UI.createLabel({
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});


win.addEventListener('open', function(e){
	label.text = 'TBD';
});

win.add(view);
win.add(label);