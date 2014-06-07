module.exports = function(_top,_textlbl, _left,_width,_toptbl) {
	var view_contain = Titanium.UI.createView({
		top : _top,
		width : _width,
		height : Ti.App.size(100),
		backgroundColor :Ti.App.Color.gray,
		left : _left
	});
	var line_view=Ti.UI.createView({
		right:0,
		backgroundColor:Ti.App.Color.superwhite,
		height:Ti.App.size(100),
		top:0,
		width:Ti.App.size(2)
	});
	view_contain.add(line_view);
	var lblfirst = Titanium.UI.createLabel({
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(30)
		},
		text : _textlbl,
		left : Ti.App.size(20),
		id:"MB"
	});
	view_contain.add(lblfirst);
	var arrowup = Titanium.UI.createImageView({
		backgroundImage : '/assets/images/icon/arrow-top_white.png',
		width : Ti.App.size(40),
		height : Ti.App.size(25),
		top : Ti.App.size(20),
		right : Ti.App.size(10)
	});
	view_contain.add(arrowup);
	var arrowdown = Titanium.UI.createImageView({
		backgroundImage : '/assets/images/icon/arrow-bottom_white.png',
		width : Ti.App.size(40),
		height : Ti.App.size(25),
		bottom : Ti.App.size(20),
		right : Ti.App.size(10)
	});
	view_contain.add(arrowdown);
	view_contain.getLblFirst = function() {
		return lblfirst;
	};
	//
	var tableview = Ti.UI.createTableView({
		separatorColor : Ti.App.Color.nauden,
		top : _toptbl,
		width : _width,
		left : _left,
		right : Ti.App.size(25),
		visible : false,
		backgroundColor : Ti.App.Color.magenta,
		zIndex : 10,
		borderColor : Ti.App.Color.nauden,
		borderWidth : 1,
		showVerticalScrollIndicator : 'true',
		scrollable : true,
		height : Ti.UI.SIZE
	});
	// view_contain.add(tableview);
	view_contain.setTable = function(_tinh) {
		var data = [];
		for (var i = 0; i < _tinh.length; i++) {
			var rowTbl = Ti.UI.createTableViewRow({
				height : Ti.App.size(93),
				left : Ti.App.size(20),
				top : Ti.App.size(26),
				width : _width,
				tenrow : _tinh[i].name,
				id:_tinh[i].id
			});
			var tinhthanh = Ti.UI.createLabel({
				color : Ti.App.Color.nauden,
				font : {
					fontSize : Ti.App.size(30)
				},
				text : _tinh[i].name,
				backgroundSelectedColor : 'yellow',
				left : Ti.App.size(20),
			});

			rowTbl.add(tinhthanh);
			data.push(rowTbl);
		}
		tableview.setData(data);
	};
	view_contain.getTableView = function() {
		return tableview;
	};

	return view_contain;
};
