// Create a text field on a parent that is width and height constrained 
// See that the text field sizes itself accordingly 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if Section 1 has 1 row, Section 2 has 2 rows , and Section 3 has 3 rows',
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

var section = Titanium.UI.createTableViewSection();
section.headerTitle = "Section 1";
var row1 = Titanium.UI.createTableViewRow({title:"Hello 1"});
section.add(row1);

var section2 = Titanium.UI.createTableViewSection();
section2.headerTitle = "Section 2";
var row3 = Titanium.UI.createTableViewRow({title:"Hello 1"});
var row4 = Titanium.UI.createTableViewRow({title:"Hello 2"});

section2.add(row3);
section2.add(row4);

var section3 = Titanium.UI.createTableViewSection();
section3.headerTitle = "Section 2";
var row6 = Titanium.UI.createTableViewRow({title:"Hello 1"});
var row7 = Titanium.UI.createTableViewRow({title:"Hello 2"});
var row8 = Titanium.UI.createTableViewRow({title:"Hello 2"});

section3.add(row6);
section3.add(row7);
section3.add(row8);

var tableView = Ti.UI.createTableView({
	top: 70,
	data: [section, section2, section3]
});


/*view1.add(bb1);
view2.add(bb2);
view3.add(bb3);*/

/*win.add(view1);
win.add(view2);
win.add(view3);*/
win.add(tableView);
win.add(label);