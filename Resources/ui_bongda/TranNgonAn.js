module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		tao_bien(sv);
		tao_ui(sv);
	})();

	return sv.ui.Window;
};
function tao_bien(sv) {
	sv.vari = {};
	sv.arr = {};
	sv.arr.param1 = [{
		thoigian : '22:10',
		san : 'My dinh',
		tendoi1 : 'Manchester United',
		tendoi2 : 'Chealse',
		tengiai : 'V-League'
	}, {
		thoigian : '22:10',
		san : 'My dinh',
		tendoi1 : 'Manchester United',
		tendoi2 : 'Chealse',
		tengiai : 'V-League'
	}, {
		thoigian : '22:10',
		san : 'My dinh',
		tendoi1 : 'Manchester United',
		tendoi2 : 'Chealse',
		tengiai : 'V-League'
	}];
	sv.arr.data = [{
		title : 'Premier League',
	}, {
		title : 'Bundesliga',
	}, {
		title : 'V - League',
	}, {
		title : 'Korea League',
	}, {
		title : 'League 1',
	}];
	sv.arr.rows = [];
	sv.vari.row_height = Ti.App.size(100);
	sv.arr.arrow = [];
	sv.vari.trans = Titanium.UI.create2DMatrix();
	sv.vari.trans1 = sv.vari.trans.rotate(90);
	sv.vari.trans2 = sv.vari.trans.rotate(270);
};
function tao_ui(sv) {
	sv.ui.vThongtinTD = require('/ui_bongda/vTranngonan');

	sv.ui.Window = Ti.UI.createWindow({
		//backgroundColor : Ti.App.Color.nauden,
		navBarHidden : true,
		keepScreenOn : true,
		top : 0,
	});

	sv.ui.ViewTong = Ti.UI.createScrollView({
		backgroundColor : 'transparent',
		top : Ti.App.size(120),
		left : 0,
		showVerticalScrollIndicator : 'true',
		contentHeight : Ti.UI.FILL,
		height : Ti.UI.FILL
	});

	sv.ui.ViewHeader = Ti.UI.createView({
		backgroundColor : Ti.App.Color.red,
		width : Ti.App.WidthScreen,
		height : Ti.App.size(120),
		top : 0
	});

	sv.ui.ViewIconLeft = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.App.size(120),
		left : Ti.App.size(0),
		top : Ti.App.size(0)
	});

	sv.ui.IconLeft = Ti.UI.createImageView({
		image : '/assets/images/icon/arrow.png',
		top : Ti.App.size(35),
		left : Ti.App.size(30),
		right : Ti.App.size(30),
		bottom : Ti.App.size(35)
	});

	sv.ui.ViewLabelHeader = Ti.UI.createView({
		height : Ti.App.size(120),
		top : Ti.App.size(0),
		left : Ti.App.size(120),
		right : Ti.App.size(120)
	});

	sv.ui.LabelHeader = Ti.UI.createLabel({
		text : 'TRẬN NGON ĂN',
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	for (var i = 0; i < sv.arr.data.length; i++) {
		sv.ui.row = Ti.UI.createTableViewRow({
			expanded : false,
			height : sv.vari.row_height,
			width : Ti.App.size(720),
			backgroundColor : Ti.App.Color.magenta,
			id : i,
			backgroundSelectedColor : 'transparent',
			backgroundFocusedColor : 'transparent',
			backgroundFocusedImage : 'transparent',
		});

		sv.ui.ViewChua = Ti.UI.createView({
			height : Ti.UI.FILL,
			width : Ti.App.size(720),
			backgroundSelectedColor : 'transparent',
			backgroundFocusedColor : 'transparent',
			backgroundFocusedImage : 'transparent',
		});

		sv.ui.viewRow = Ti.UI.createView({
			height : sv.vari.row_height,
			top : 0,
			width : Ti.App.size(720),
			borderColor : Ti.App.Color.xanhnhat,
			borderWidth : set_border(i, sv),
			left : 0,
			bottom : 1,
			backgroundSelectedColor : 'transparent',
			backgroundFocusedColor : 'transparent',
			backgroundFocusedImage : 'transparent',
		});
		sv.ui.lbl_tennc = Ti.UI.createLabel({
			// height : Ti.UI.SIZE,
			left : Ti.App.size(120),
			text : sv.arr.data[i].title,
			width : Ti.App.size(720),
			font : {
				fontSize : Ti.App.size(30)
			},
			color : 'black'
		});

		sv.ui.lbl_co = Titanium.UI.createImageView({
			width : Ti.App.size(65),
			height : Ti.App.size(45),
			image : '/assets/images/icon/0' + (i + 1) + '.png',
			left : Ti.App.size(40)
		});

		sv.ui.lbl_tyle = Titanium.UI.createLabel({
			width : Ti.App.size(95),
			// height : Ti.App.size(100),
			text : 'Tỷ lệ',
			font : {
				fontSize : Ti.App.size(25)
			},
			left : Ti.App.size(475),
			color : 'black'
		});

		sv.ui.lbl_ck = Titanium.UI.createLabel({
			width : Ti.App.size(70),
			// height : Ti.App.size(100),
			left : Ti.App.size(570),
			text : 'C/K',
			font : {
				fontSize : Ti.App.size(25)
			},
			color : 'black'
		});

		sv.ui.arrow = Titanium.UI.createImageView({
			width : Ti.App.size(20),
			height : Ti.App.size(40),
			image : '/assets/images/icon/arrow-left.png',
			transform : sv.vari.trans2,
			top : Ti.App.size(20),
			left : Ti.App.size(650)
		});

		//////////////
		sv.ui.viewBack = Ti.UI.createView({
			left : 0,
			height : Ti.App.size(870),
			top : sv.vari.row_height,
			width : Ti.App.size(720),
			backgroundGradient : {
				type : 'linear',
				colors : [{
					color : Ti.App.Color.superwhite,
					position : 0.5
				}, {
					color : Ti.App.Color.superwhite,
					position : 0.50
				}]
			},
			bottom : 1
		});
		sv.ui.row.add(sv.ui.viewRow);
		sv.ui.viewRow.add(sv.ui.lbl_tennc);
		sv.ui.viewRow.add(sv.ui.lbl_co);
		sv.ui.viewRow.add(sv.ui.lbl_tyle);
		sv.ui.viewRow.add(sv.ui.lbl_ck);
		sv.ui.viewRow.add(sv.ui.arrow);
		sv.ui.row.add(sv.ui.viewBack);
		for ( j = 0; j < 3; j++) {
			sv.ui.vThongtin = new sv.ui.vThongtinTD(Ti.App.size(290 * j), sv.arr.param1[j]);
			sv.ui.viewBack.add(sv.ui.vThongtin);
		};
		sv.arr.rows.push(sv.ui.row);
		sv.arr.arrow.push(sv.ui.arrow);
	}
	tao_event(sv);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);

	sv.ui.ViewIconLeft.addEventListener('click', sv.fu.eventClickIconLeft);

	sv.ui.Window.add(sv.ui.ViewHeader);
	sv.ui.Window.add(sv.ui.ViewTong);

	sv.ui.ViewHeader.add(sv.ui.ViewIconLeft);
	sv.ui.ViewHeader.add(sv.ui.ViewLabelHeader);

	sv.ui.ViewIconLeft.add(sv.ui.IconLeft);
	sv.ui.ViewLabelHeader.add(sv.ui.LabelHeader);

	for (var i = 0; i < sv.arr.data.length; i++) {
		sv.arr.rows[i].addEventListener('click', sv.fu.event_clickrow[i]);
	}
	sv.ui.tbl = Ti.UI.createTableView({
		data : sv.arr.rows,
		// height : Ti.UI.FILL,
		width : Ti.App.size(720),
		top : 0,
		separatorColor : 'transparent',
		backgroundColor : Ti.App.Color.magenta,
	});
	sv.ui.ViewTong.add(sv.ui.tbl);

	// for (var i = 0; i < sv.arr.data.length; i++) {
	//
	// }
};
function tao_event(sv) {
	sv.fu = {};

	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.Window.close();
	};

	sv.fu.event_clickrow = [];
	for (var i = 0; i < sv.arr.data.length; i++) {
		sv.fu.event_clickrow[i] = function(e) {
			if (e.row.expanded) {
				e.row.setHeight(Ti.App.size(100));
				e.row.expanded = false;
				sv.arr.arrow[e.row.id].transform = sv.vari.trans2;
				sv.arr.arrow[e.row.id].top = Ti.App.size(25);

			} else {
				e.row.setHeight(Ti.App.size(970));
				e.row.expanded = true;
				sv.arr.arrow[e.row.id].transform = sv.vari.trans1;
				sv.arr.arrow[e.row.id].top = Ti.App.size(20);
			}
		};
	}

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.ViewIconLeft.removeEventListener('click', sv.fu.eventClickIconLeft);

		for (var i = 0; i < sv.arr.data.length; i++) {
			sv.arr.rows[i].expanded = false;
			sv.arr.arrow[i].transform = sv.vari.trans2;
			sv.arr.arrow[i].top = Ti.App.size(25);
			sv.arr.rows[i].setHeight(Ti.App.size(100));
			sv.arr.rows[i].removeEventListener('click', sv.fu.event_clickrow[i]);
		}

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};

};
function set_border(i, sv) {
	if (i == 0 || i % 2 == 0 || i == (sv.arr.data.length - 1)) {
		return 1;
	} else {
		return 0;
	}
};

