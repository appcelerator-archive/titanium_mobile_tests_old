// Description: Create a rect of width and height of 50 and call getWidth and getHeight : 

var win = Ti.UI.currentWindow;

var rectTest = Ti.UI.createRect({left: 50,top: 50, right: 100, bottom: 100});
var height = rectTest.getHeight();
var width = rectTest.getWidth();

var result = Ti.UI.createLabel({
	top: 20,
	text:"Width: " + width + "\nHeight: " + height + "\nWidth and Height should return the value of 50"
});

win.add(result);
win.add(rectTest);

