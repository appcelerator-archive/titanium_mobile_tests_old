// Description: Create a normal rect with height and width of 10: 

var win = Ti.UI.currentWindow;

var rectTest = Ti.UI.createRect({left:50,top:50,right:60,bottom:60});
var result = Ti.UI.createLabel({
	top: 20,
	text:"Should create a rect with height and width of 10 "
});

win.add(result);
win.add(rectTest);
