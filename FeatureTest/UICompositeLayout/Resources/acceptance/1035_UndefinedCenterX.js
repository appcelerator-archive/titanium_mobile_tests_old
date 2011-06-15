// Create a view and do not set center.x, call center.x value
// View should be full screen and return the center horizontal point

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: 200,
	width: 300,
	color: 'black'
});
var view = Ti.UI.createView({
	backgroundColor: 'yellow'
});

win.addEventListener('open', function(e){
	centerX = (view.rect.left + (view.size.width/2));
	label.text = 'View Center.x: '+centerX+'\n'+
				'Pass if Center.x is returned\n'+
				'and yellow view fills the window';
});

win.add(view);
win.add(label);