// Description: Test that you can create a rect with top,bottom,left,right being at 0: 

var win = Ti.UI.currentWindow;

var rectZero = Ti.UI.createRect({left:0, top:0, right:0, bottom:0});
var result = Ti.UI.createLabel({
	top: 20,
	text:"Should not see anything on screen"
});

win.add(result);
win.add(rectZero);
