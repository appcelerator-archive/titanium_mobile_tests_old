//Create a Ti.UI.View and do not set center.x, call center.x value (static/dynamic) 

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
	label.text = 'View Dynamic CenterX value: '+ centerX +'\n Static CenterX Value is undefined:' + view.center.x;
});

win.add(view);
win.add(label);