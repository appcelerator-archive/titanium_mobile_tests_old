// Create a table view on a parent that takes the whole screen 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if table view fills the screen',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});

var data = [{title:"Row 1"},{title:"Row 2"}];

var table = Titanium.UI.createTableView({
	data:data,
	top: 50
});
win.add(table);
win.add(label);
