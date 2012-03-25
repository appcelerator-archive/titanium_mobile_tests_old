// Create a Label with scroll view and do not put any content 
// Test case is invalid on Android: https://jira.appcelerator.org/browse/TIMOB-7817

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

var label2 = Ti.UI.createLabel({
	backgroundColor:'red'
});

var scrollView = Titanium.UI.createScrollView({
    contentHeight:'auto',
    contentWidth:'auto',
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true,
    width:Ti.UI.SIZE,
    height:Ti.UI.SIZE
});

var view = Titanium.UI.createView();

label2.add(scrollView);
win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Scroll View height: ' + scrollView.size.height + ' width: ' + scrollView.size.width;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(label2);
win.add(view);
view.add(label);