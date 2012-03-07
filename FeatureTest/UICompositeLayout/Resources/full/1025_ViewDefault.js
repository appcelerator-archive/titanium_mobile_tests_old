// Create a view and do not set the left, right, top, bottom, center, width and height value 
//and call the default value for all
// View should fill the window and value should be returned

var win = Ti.UI.currentWindow;

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
/*	height: 40,*/
	width: 300,
	color: 'black'
});
var view = Ti.UI.createView({
	backgroundColor: 'green'
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'left: '+view.left+'\n'+
			'right: '+view.right+'\n'+
			'top: '+view.top+'\n'+
			'bottom: '+view.bottom+'\n'+
			'center: ' + view.center +'\n'+
			'width: '+view.width+'\n'+
			'height: '+view.height+'\n\n'+
			'Pass if view fills window and all values are undefined';
	win.addEventListener('postlayout', layoutHandler);
});


win.add(view);
win.add(label);