/**
 * @author Natalie Huynh
 */
// Create a label with text "Testing Default" and do not set the left, right, top, bottom, center, width and height value and call the default value for all (Static Value) 
// Label should size to content and value should all be undefined 

var win = Ti.UI.currentWindow;

var label = Ti.UI.createLabel({
	text: 'View should all be undefined ',
	top: 20,
	left: 10,
/*	height: 40,*/
	width: 300,
	color: 'black'
});

var labelTest = Ti.UI.createLabel({
	text: 'Testing Default',
	color: 'black',
	backgroundColor: 'red'
})

var view = Ti.UI.createView({
	backgroundColor: 'green'
});

win.addEventListener('open', function(e){
	label.text = 'left: '+labelTest.left+'\n'+
			'right: '+labelTest.right+'\n'+
			'top: '+labelTest.top+'\n'+
			'bottom: '+labelTest.bottom+'\n'+
			'center: x'+labelTest.center.x+' y: '+labelTest.center.y+'\n'+
			'width: '+labelTest.width+'\n'+
			'height: '+labelTest.height+'\n\n'+
			'Pass if all values are undefined';
});


win.add(view);
win.add(label);
win.add(labelTest);
