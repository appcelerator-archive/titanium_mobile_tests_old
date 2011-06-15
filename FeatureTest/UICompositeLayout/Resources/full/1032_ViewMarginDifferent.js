// Create a view and set margin to 1/2/3/4 for top/left/right/bottom
// View should contain 1/2/3/4 for the margin

var win = Ti.UI.currentWindow;

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

var innerView = Ti.UI.createView({
	backgroundColor: 'green',
	margin: {top:1, left:2, right:3, bottom:4}
});

win.addEventListener('open', function(e){
	label.text = 'View margin values\n'+
				'Top: '+view.margin.top+'\n'+
				'Left: '+view.margin.left+'\n'+
				'Right: '+view.margin.right+'\n'+
				'Bottom: '+view.margin.bottom+'\n'+
				'Pass if values are: 1/2/3/4';
});

view.add(innerView);
win.add(view);
win.add(label);