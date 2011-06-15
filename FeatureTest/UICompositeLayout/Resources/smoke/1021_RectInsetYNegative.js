// Create a rect and set the y value to a negative number and x to zero 

var win = Ti.UI.currentWindow;

var rect = Ti.UI.createRect({left:0, top:0, width:0, height:-20});

win.add(rect);