var win = Ti.UI.currentWindow;
win.backgroundColor = 'green';

var label = Ti.UI.createLabel({
	text: 'This is an example'
});

win.add(label);
