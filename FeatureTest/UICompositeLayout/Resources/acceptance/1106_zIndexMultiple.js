// Create multiple views on top of each other, call the zIndex of each 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view1 = Ti.UI.createView({backgroundColor:'red'});
var view2 = Ti.UI.createView({backgroundColor:'orange'});
var view3 = Ti.UI.createView({backgroundColor:'yellow'});
var view4 = Ti.UI.createView({backgroundColor:'green'});
var view5 = Ti.UI.createView({backgroundColor:'blue'});


var label = Ti.UI.createLabel({
	text: 'zIndex Value: ' + view1.zIndex + view2.zIndex + view3.zIndex + view4.zIndex + view5.zIndex + ' Pass if it is 01234',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});

win.add(view1);
win.add(view2);
win.add(view3);
win.add(view4);
win.add(view5);
win.add(label);
