//	Create a scroll view on a parent that takes the whole screen
// This test is meant for iOS small form factor

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

if(Ti.Platform.osname === 'android') {
	var text = 'This test is not for ' + Ti.Platform.osname + '.\nRun 1082a instead.';
	var notLabel = Ti.UI.createLabel({
		color:'black',
		text:text,
		height: Ti.UI.SIZE,
		width: Ti.UI.SIZE
	});
	
	win.add(notLabel);
}
else {
	var label = Ti.UI.createLabel({
		text: 'Pass if you can scroll all the way down\nand to the right and see "END"',
		top: 20,
		left: 10,
		height: Ti.UI.SIZE,
		width: Ti.UI.SIZE,
		color: 'black'
	});
	
	var label2 = Ti.UI.createLabel({
		text: 'END',
		top: 1950,
		left: 730,
		height: Ti.UI.SIZE,
		width: Ti.UI.SIZE,
		color: 'black'
	});
	
	var scrollView = Titanium.UI.createScrollView({
	    contentWidth:'auto',
	    contentHeight:'auto',
	    top:0,
	    showVerticalScrollIndicator:true,
	    showHorizontalScrollIndicator:true
	});
	var view = Ti.UI.createView({
	    backgroundColor:'#336699',
	    width:800,
	    height:2000
	});
	
	view.add(label);
	view.add(label2);
	scrollView.add(view);
	win.add(scrollView);
}