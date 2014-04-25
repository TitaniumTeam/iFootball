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
		createRemove(sv);
	})();

	return sv;
};
function tao_bien(sv) {
	sv.vari = {};
	sv.arr = {};
	sv.arr.param1 = [{
		thoigian : '22:10',
		ngay : '22/7',
		tendoi1 : 'Manchester United',
		tendoi2 : 'Chealse',
		tyle : ['0', '1', '1/4'],
		ck : ['0.93', '0.97']
	}, {
		thoigian : '20:10',
		ngay : '21/7',
		tendoi1 : 'Manchester City',
		tendoi2 : 'Liverpool',
		tyle : ['0', '1', '1/4'],
		ck : ['0.93', '0.97']
	}, {
		thoigian : '22:10',
		ngay : '22/7',
		tendoi1 : 'Manchester United',
		tendoi2 : 'Chealse',
		tyle : ['0', '1', '1/4'],
		ck : ['0.93', '0.97']
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
	sv.ui.vThongtinTD = require('/ui/vThongTinTD');
	sv.ui.ViewTong = Ti.UI.createScrollView({
		showVerticalScrollIndicator : 'true',
		top : 0,
		left : 0,
		width : Ti.App.size(720),
	});

	for (var i = 0; i < sv.arr.data.length; i++) {
		sv.ui.row = Ti.UI.createTableViewRow({
			expanded : false,
			height : sv.vari.row_height,
			width : Ti.App.size(720),
			backgroundColor : Ti.App.Color.magenta,
			id : i,
			backgroundSelectedColor : null,
			backgroundFocusedColor : null,
			backgroundFocusedImage : null,
		});

		sv.ui.ViewChua = Ti.UI.createView({
			height : Ti.UI.FILL,
			width : Ti.App.size(720),
			backgroundSelectedColor : null,
			backgroundFocusedColor : null,
			backgroundFocusedImage : null,
		});
		sv.ui.row.add(sv.ui.ViewChua);

		sv.ui.viewRow = Ti.UI.createView({
			height : sv.vari.row_height - 1,
			top : 0,
			width : Ti.App.size(720),
			borderColor : Ti.App.Color.xanhnhat,
			borderWidth : set_border(i, sv),
			left : 0,
			bottom : 1,
			backgroundSelectedColor : null,
			backgroundFocusedColor : null,
			backgroundFocusedImage : null,
		});
		sv.ui.ViewChua.add(sv.ui.viewRow);
		sv.ui.lbl_tennc = Ti.UI.createLabel({
			height : Ti.UI.SIZE,
			left : Ti.App.size(120),
			text : sv.arr.data[i].title,
			width : Ti.App.size(720),
			font : {
				fontSize : Ti.App.size(30)
			}
		});
		sv.ui.viewRow.add(sv.ui.lbl_tennc);
		sv.ui.lbl_co = Titanium.UI.createImageView({
			width : Ti.App.size(65),
			height : Ti.App.size(45),
			image : 'assets/images/icon/0' + (i + 1) + '.png',
			left : Ti.App.size(40)
		});
		sv.ui.viewRow.add(sv.ui.lbl_co);
		sv.ui.lbl_tyle = Titanium.UI.createLabel({
			width : Ti.App.size(95),
			height : Ti.App.size(100),
			text : 'Ty le',
			font : {
				fontSize : Ti.App.size(25)
			},
			left : Ti.App.size(475)
		});
		sv.ui.viewRow.add(sv.ui.lbl_tyle);
		sv.ui.lbl_ck = Titanium.UI.createLabel({
			width : Ti.App.size(70),
			height : Ti.App.size(100),
			left : Ti.App.size(570),
			text : 'C/K',
			font : {
				fontSize : Ti.App.size(25)
			},
		});
		sv.ui.viewRow.add(sv.ui.lbl_ck);
		sv.ui.arrow = Titanium.UI.createImageView({
			width : Ti.App.size(20),
			height : Ti.App.size(40),
			backgroundImage : 'assets/images/icon/arrow-left.png',
			transform : sv.vari.trans2,
			top : Ti.App.size(20),
			left : Ti.App.size(650)
		});
		sv.ui.viewRow.add(sv.ui.arrow);
		//////////////
		sv.ui.viewBack = Ti.UI.createView({
			left : 0,
			height : Ti.App.size(570),
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
			// bottom:1
		});
		sv.ui.ViewChua.add(sv.ui.viewBack);
		for ( j = 0; j < 3; j++) {
			sv.ui.vThongtin = new sv.ui.vThongtinTD(1, Ti.App.size(190) * j, sv.arr.param1[j], null, setbd(j));
			sv.ui.viewBack.add(sv.ui.vThongtin);
		};
		tao_event(sv);
		sv.ui.row.addEventListener('click', sv.fu.event_clickrow);
		sv.arr.rows.push(sv.ui.row);
		sv.arr.arrow.push(sv.ui.arrow);
	}

	sv.ui.tbl = Ti.UI.createTableView({
		data : sv.arr.rows,
		height : Ti.UI.FILL,
		width : Ti.App.size(720),
		top : 0,
		separatorColor : 'transparent',
		backgroundColor : Ti.App.Color.magenta,
		backgroundSelectedColor : null,
		backgroundFocusedColor : null,
		backgroundFocusedImage : null,
	});
	sv.ui.ViewTong.add(sv.ui.tbl);
};
function tao_event(sv) {
	sv.fu = {};
	sv.fu.event_clickrow = function(e) {
		if (e.row.expanded) {
			e.row.setHeight(Ti.App.size(100));
			e.row.expanded = false;
			sv.arr.arrow[e.row.id].transform = sv.vari.trans2;
			sv.arr.arrow[e.row.id].top = Ti.App.size(25);

		} else {
			e.row.setHeight(Ti.App.size(670));
			e.row.expanded = true;
			sv.arr.arrow[e.row.id].transform = sv.vari.trans1;
			sv.arr.arrow[e.row.id].top = Ti.App.size(20);
		}
	};
};
function set_border(i, sv) {
	if (i == 0 || i % 2 == 0 || i == (sv.arr.data.length - 1)) {
		return 1;
	} else {
		return 0;
	}
};
function setbd(i) {
	if (i == 0 || i == 2) {
		return false;
	} else {
		return true;
	}
};
function createRemove(sv) {
	sv.removeAllEvent = function() {
		for (var i = 0; i < sv.arr.data.length; i++) {
			sv.ui.row.addEventListener('click', sv.fu.event_clickrow);
		}
		Ti.API.info('remove event thong tin tran dau');
	};
}