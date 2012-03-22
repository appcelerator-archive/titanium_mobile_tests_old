// Create a text field on a parent that is width and height constrained 
// See that the text field sizes itself accordingly 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if text fields (yellow) are as wide enough to handle the text in them, but not outside the view (green)',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

var view1 = Ti.UI.createView({
	height: 30,
	width: 60,
	top: 80,
	backgroundColor: 'green'
});

var sb1 = Titanium.UI.createSearchBar({
    barColor:'#000', 
    showCancel:true
});


var view2 = Ti.UI.createView({
	height: 50,
	width: 120,
	top: 140,
	backgroundColor: 'green'
});

var sb2 = Titanium.UI.createSearchBar({
    barColor:'#000', 
    showCancel:true
});

var view3 = Ti.UI.createView({
	height: 70,
	width: 180,
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