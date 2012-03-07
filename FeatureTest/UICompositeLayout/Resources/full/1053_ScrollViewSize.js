// Create a Label with scroll view and do not put any content 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: 200,
	color: 'black'
});

var label2 = Ti.UI.createLabel({
	color: 'red'
})
var scrollView = Titanium.UI.createScrollView({
    contentHeight:'auto',
    contentWidth:'auto',
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
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