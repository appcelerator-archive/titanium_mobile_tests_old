// Create a view and retrieve its rect value
// Get correct value for the view rect in system units

var win = Ti.UI.currentWindow;

var label = Ti.UI.createLabel({
	text: 'View Rect values are... not available ',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});
var view = Ti.UI.createView({
	backgroundColor: 'green'
});

win.addEventListener('open', function(e){
	var rect = win.rect;
	label.text = 'View Rect values are, top: '+rect.top+' left: '+rect.left+
					'right: '+rect.right+' bottom: '+rect.bottom+
					'\nPass if values are returned';
});

view.add(label);
win.add(view);