// Create a Search Bar on a parent that is width and height constrained 
// See that the Search Bar sizes itself accordingly 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if Search Bar are as wide enough to fit in view (green)',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

var width1 = (Ti.Platform.osname !== 'iphone' && Ti.Platform.osname !== 'ipad') ? 180 : 120;

var view1 = Ti.UI.createView({
	height: 50,
	width: width1,
	top: 80,
	backgroundColor: 'green'
});

var sb1 = Titanium.UI.createSearchBar({
    barColor:'#000', 
    showCancel:true
});

var width2 = (Ti.Platform.osname !== 'iphone' && Ti.Platform.osname !== 'ipad') ? 230 : 180;

var view2 = Ti.UI.createView({
	height: 70,
	width: width2,
	top: 140,
	backgroundColor: 'green'
});

var sb2 = Titanium.UI.createSearchBar({
    barColor:'#000', 
    showCancel:true
});

var view3 = Ti.UI.createView({
	height: 70,
	width: Ti.UI.Fill,
	top: 220,
	backgroundColor: 'green'
});

var sb3 = Titanium.UI.createSearchBar({
    barColor:'#000', 
    showCancel:true
});

view1.add(sb1);
view2.add(sb2);
view3.add(sb3);

win.add(view1);
win.add(view2);
win.add(view3);
win.add(label);