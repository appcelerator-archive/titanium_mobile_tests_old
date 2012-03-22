// Create multiple views on top of each other, call the zIndex of each 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view1 = Ti.UI.createView({backgroundColor:'red', zIndex:0, height: 50, width: 50, top: 10});
var view2 = Ti.UI.createView({backgroundColor:'orange',zIndex:1, height: 50, width: 50, top: 20});
var view3 = Ti.UI.createView({backgroundColor:'yellow',zIndex:2, height: 50, width: 50, top: 30});
var view4 = Ti.UI.createView({backgroundColor:'green', zIndex:3, height: 50, width: 50, top: 40});
var view5 = Ti.UI.createView({backgroundColor:'blue', zIndex:4, height: 50, width: 50, top: 50});


var label = Ti.UI.createLabel({
	text: 'zIndex Value: ' + view1.zIndex + view2.zIndex + view3.zIndex + view4.zIndex + view5.zIndex + ' Pass if it is 01234',
	top: 100,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

win.add(view5);
win.add(view4);
win.add(view3);
win.add(view2);
win.add(view1);
win.add(label);
