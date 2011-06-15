var win = Ti.UI.currentWindow;
// create table view data object
var data = [
/*	{title:'Example', hasChild:true, url:'./full/example.js'}*/
	{title:'1025_ViewDefault', hasChild:true, url:'./full/1025_ViewDefault.js'},
	{title:'1026_ViewError', hasChild:true, url:'./full/1026_ViewError.js'},
	{title:'1028_ViewPadding', hasChild:true, url:'./full/1028_ViewPadding.js'},
	{title:'1029_ViewPaddingDifferent', hasChild:true, url:'./full/1029_ViewPaddingDifferent.js'},
	{title:'1031_ViewMargin', hasChild:true, url:'./full/1031_ViewMargin.js'},
	{title:'1032_ViewMarginDifferent', hasChild:true, url:'./full/1032_ViewMarginDifferent.js'},
	{title:'1036_UndefinedRight', hasChild:true, url:'./full/1036_UndefinedRight.js'},
	{title:'1037_UndefinedHeight', hasChild:true, url:'./full/1037_UndefinedHeight.js'},
	{title:'1038_UndefinedTop', hasChild:true, url:'./full/1038_UndefinedTop.js'},
	{title:'1039_UndefinedCenterY', hasChild:true, url:'./full/1039_UndefinedCenterY.js'},
	{title:'1040_UndefinedBottom', hasChild:true, url:'./full/1040_UndefinedBottom.js'},
	{title:'1041_UndefinedZIndex', hasChild:true, url:'./full/1041_UndefinedZIndex.js'},
	{title:'1045_CenterXPrecedenceInvalid', hasChild:true, url:'./full/1045_CenterXPrecedenceInvalid.js'},
	{title:'1049_CenterYPrecedenceInvalid', hasChild:true, url:'./full/1049_CenterYPrecedenceInvalid.js'},
	{title:'1052_ScrollViewContentWidthHeightAuto', hasChild:true, url:'./full/1052_ScrollViewContentWidthHeightAuto.js'},
	{title:'1081a_FillWebViewLarge', hasChild:true, url:'./full/1081a_FillWebViewLarge.js'}

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