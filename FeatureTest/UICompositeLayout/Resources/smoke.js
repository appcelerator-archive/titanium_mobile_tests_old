var win = Ti.UI.currentWindow;
// create table view data object
var data = [
/*	{title:'Example', hasChild:true, url:'./smoke/example.js'},*/
	
	{title:'1010_ViewSize', hasChild:true, url:'./smoke/1010_ViewSize.js'},
	{title:'1011_ViewRect', hasChild:true, url:'./smoke/1011_ViewRect.js'},
	{title:'1033_UndefinedWidth', hasChild:true, url:'./smoke/1033_UndefinedWidth.js'},
	{title:'1042_WidthPrecedence', hasChild:true, url:'./smoke/1042_WidthPrecedence.js'},
	{title:'1046_HeightPrecedence', hasChild:true, url:'./smoke/1046_HeightPrecedence.js'},
	{title:'1050_ScrollViewContentWidthAuto', hasChild:true, url:'./smoke/1050_ScrollViewContentWidthAuto.js'},
	{title:'1064_SizeButton', hasChild:true, url:'./smoke/1064_SizeButton.js'},
	{title:'1075_FillView', hasChild:true, url:'./smoke/1075_FillView.js'},
	{title:'1105_zIndexZero', hasChild:true, url:'/smoke/1105_zIndexZero.js'}

	
	
/*	{title:'1007_RectNormal', hasChild:true, url:'./smoke/1007_RectNormal.js'},
	{title:'1018_RectInsetXPositive', hasChild:true, url:'./smoke/1018_RectInsetXPositive.js'},
	{title:'1019_RectInsetXNegative', hasChild:true, url:'./smoke/1019_RectInsetXNegative.js'},
	{title:'1020_RectInsetYPositive', hasChild:true, url:'./smoke/1020_RectInsetYPositive.js'},
	{title:'1021_RectInsetYNegative', hasChild:true, url:'./smoke/1021_RectInsetYNegative.js'},*/
];



// create table view
var tableView = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableView.addEventListener('click', function(e)
{
	if (e.rowData.url)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.url,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});

// add table view to the window
win.add(tableView);