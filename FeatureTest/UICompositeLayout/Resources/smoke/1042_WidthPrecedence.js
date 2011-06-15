// Create a view with width of 10 and set left to 10 and right to 15 then call the view.size.width value 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'yellow',
	left: 10,
	right: 15,
	width: 10
});

var label = Ti.UI.createLabel({
	top: 20,
	left: 10,
	height: 60,
	width: 300,
	color: 'black'
});


win.addEventListener('open', function(e){
	label.text = 'View Width value: '+view.size.width+'\nPass if the value is 10 and \n10 units shifted to the right';
});

win.add(view);
win.add(label);