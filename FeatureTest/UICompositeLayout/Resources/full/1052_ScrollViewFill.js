//Create a Ti.UI.View with scroll view and do not put any content 

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

var scrollView = Titanium.UI.createScrollView({
    contentHeight:'auto',
    contentWidth:'auto',
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});

var view = Ti.UI.createView();

var view2 = Ti.UI.createView({
	backgroundColor:'red'
})

scrollView.add(view2);

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Scroll View height: ' + scrollView.size.height + ' width: ' + scrollView.size.width;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(scrollView);
win.add(view)
view.add(label);