// Create a table view row on a parent that takes the whole screen 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if table view row width fills and height sizes to the content',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});
var table = Titanium.UI.createTableView({
	top: 50
});
win.add(table);

var row = Titanium.UI.createTableViewRow();
var row1 = Titanium.UI.createTableViewRow();
var row2 = Titanium.UI.createTableViewRow();
var row3 = Titanium.UI.createTableViewRow();

var view1 = Titanium.UI.createView({backgroundColor:'red',width:50,height:20});
var view2 = Titanium.UI.createView({backgroundColor:'red',width:50,height:50});
var view3 = Titanium.UI.createView({backgroundColor:'red',width:50,height:100});

row1.add(view1);
row2.add(view2);
row3.add(view3);
table.appendRow(row);
table.appendRow(row1);
table.appendRow(row2);
table.appendRow(row3);

win.add(label);