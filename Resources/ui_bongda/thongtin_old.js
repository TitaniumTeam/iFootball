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

	return sv;
};
function tao_bien(sv) {
	sv.vari.viewTTTD = require('/ui_bongda/viewTTTD');
	sv.vari.bxh = require('/ui_bongda/BangXepHang');
	sv.vari.TTTD_cuthe = require('/ui_bongda/ThongTinTranDau_CuThe');
	sv.arr.trandau = [];
	sv.arr.trandau.id;
	sv.arr.param = [];
	sv.arr.param[0] = [{
		matchid : 11,
		date : '22:10 - 22/7',
		ownerName : 'Manchester United',
		guestName : 'Chealse',
	}, {
		matchid : 52,
		date : '22:10 - 22/7',
		ownerName : 'Manchester United',
		guestName : 'Chealse',
	}, {
		matchid : 23,
		date : '22:10 - 22/7',
		ownerName : 'Manchester United',
		guestName : 'Chealse',
		result : '10-11'
	}, {
		matchid : 54,
		date : '22:10 - 22/7',
		ownerName : 'Manchester United',
		guestName : 'Chealse',
		result : '10-11'
	}];
	sv.arr.param[1] = [{
		matchid : 85,
		date : '19:10 - 22/7',
		ownerName : 'LiverPool',
		guestName : 'Arsnal',
		result : '1-1'
	}, {
		matchid : 61,
		date : '2:13 - 22/7',
		ownerName : 'ManCity',
		guestName : 'Hòa Phát HN',
		result : '0-11'
	}];
	sv.arr.param[2] = [{
		matchid : 76,
		date : '18:00 - 22/7',
		ownerName : 'Barca',
		guestName : 'RealMarid',
		result : '1-6'
	}];
	sv.arr.param[3] = [{}];
	sv.arr.data = [{
		title : 'Premier League',
		id : 1
	}, {
		title : 'Bundesliga',
		id : 2
	}, {
		title : 'V - League',
		id : 3
	}, {
		title : 'Korea League',
		id : 4
	}];
	sv.arr.rows = [];
	sv.arr.viewrows = [];
	sv.arr.viewarrows = [];
	sv.vari.row_height = Ti.App.size(100);
	sv.arr.arrow = [];

	sv.arr.mangid = [];

	sv.vari.trans = Titanium.UI.create2DMatrix();
	sv.vari.trans1 = sv.vari.trans.rotate(90);
	sv.vari.trans2 = sv.vari.trans.rotate(270);

	///event
	sv.arr.event_clickrow = [];
	sv.arr.event_clickGD = [];
	sv.arr.dodai = [];
	sv.arr.event_clickthongtin = [];
};
function tao_ui(sv) {

	sv.ui.ViewTong = Ti.UI.createScrollView({
		backgroundColor : 'transparent',
		top : 0,
		left : 0,
		showVerticalScrollIndicator : 'true',
		height : Ti.UI.FILL,
		contentHeight : Ti.UI.FILL,
	});
	for (var i = 0; i < sv.arr.data.length; i++) {
		sv.ui.row = Ti.UI.createTableViewRow({
			height : set_height(sv.arr.param[i]),
			width : Ti.App.size(720),
			backgroundColor : Ti.App.Color.magenta,
		});

		sv.ui.ViewChua = Ti.UI.createView({
			height : Ti.UI.FILL,
			width : Ti.App.size(720),
		});

		sv.ui.viewRow = Ti.UI.createView({
			height : sv.vari.row_height,
			top : 0,
			width : Ti.App.size(720),
			// borderColor : Ti.App.Color.xanhnhat,
			// borderWidth : set_border(i, sv),
			left : 0,
		});
		sv.ui.viewGD = Titanium.UI.createView({
			height : sv.vari.row_height,
			top : 0,
			width : Ti.App.size(610),
			left : 0,
			backgroundColor : 'transparent',
			backgroundSelectedColor : Ti.App.Color.xanhnhat,
			idGD : i
		});
		sv.ui.lbl_tennc = Ti.UI.createLabel({
			left : Ti.App.size(120),
			text : sv.arr.data[i].title,
			width : Ti.App.size(720),
			font : {
				fontSize : Ti.App.size(30),
				fontWeight : 'bold'
			},
			color : 'black',
			touchEnabled : false
		});

		sv.ui.lbl_co = Titanium.UI.createImageView({
			width : Ti.App.size(65),
			height : Ti.App.size(45),
			image : '/assets/images/icon/0' + (i + 1) + '.png',
			left : Ti.App.size(40),
			touchEnabled : false
		});
		sv.ui.viewArow = Titanium.UI.createView({
			width : Ti.App.size(110),
			height : sv.vari.row_height,
			backgroundColor : 'transparent',
			backgroundSelectedColor : Ti.App.Color.xanhnhat,
			right : 0,
			top : 0,
			expanded : false,
			id : i
		});
		sv.ui.arrow = Titanium.UI.createImageView({
			width : Ti.App.size(20),
			height : Ti.App.size(40),
			image : '/assets/images/icon/arrow-left.png',
			transform : sv.vari.trans2,
			touchEnabled : false
		});

		//////////////
		sv.ui.viewBack = Ti.UI.createView({
			left : 0,
			height : height_viewback(sv.arr.param[i]),
			top : sv.vari.row_height,
			width : Ti.App.size(720),
			backgroundGradient : {
				type : 'linear',
				colors : [{
					color : Ti.App.Color.superwhite,
					position : 0.5
				}, {
					color : Ti.App.Color.superwhite,
					position : 0.5
				}]
			},
			// bottom:1
		});
		sv.ui.row.add(sv.ui.ViewChua);
		sv.ui.ViewChua.add(sv.ui.viewRow);

		sv.ui.viewGD.add(sv.ui.lbl_tennc);
		sv.ui.viewGD.add(sv.ui.lbl_co);

		sv.ui.viewArow.add(sv.ui.arrow);
		sv.ui.viewRow.add(sv.ui.viewGD);
		sv.ui.viewRow.add(sv.ui.viewArow);
		sv.ui.ViewChua.add(sv.ui.viewBack);
		for ( j = 0; j < sv.arr.param[i].length; j++) {
			sv.ui.vThongtinTD = new sv.vari.viewTTTD();
			sv.ui.vThongtinTD.setParam(Ti.App.size(140 * j), sv.arr.param[i][j]);
			sv.ui.vThongtinTD.setTuVan(false);
			sv.ui.viewBack.add(sv.ui.vThongtinTD.ui.Vcontent);
			sv.arr.trandau.push(sv.ui.vThongtinTD.ui.Viewthongtin);
		}
		sv.arr.viewrows.push(sv.ui.viewGD);
		sv.arr.viewarrows.push(sv.ui.viewArow);
		sv.arr.rows.push(sv.ui.row);
		sv.arr.arrow.push(sv.ui.arrow);
	}

	// }
	// }
	tao_event(sv);
	for (var i = 0; i < sv.arr.data.length; i++) {
		sv.arr.viewarrows[i].addEventListener('click', sv.arr.event_clickrow[i]);
	}
	for (var i = 0; i < sv.arr.data.length; i++) {
		sv.arr.viewrows[i].addEventListener('click', sv.arr.event_clickGD[i]);
	}
	for (var j = 0; j < sv.arr.trandau.length; j++) {
		sv.arr.trandau[j].addEventListener('click', sv.arr.event_clickthongtin[j]);
	}
	//

	sv.ui.tbl = Ti.UI.createTableView({
		data : sv.arr.rows,
		// height : Ti.UI.FILL,
		width : Ti.App.size(720),
		top : 0,
		separatorColor : Ti.App.Color.xanhnhat,
		backgroundColor : Ti.App.Color.magenta,
	});
	sv.ui.ViewTong.add(sv.ui.tbl);

};
function tao_event(sv) {
	///event vao thong tin tran dau
	for (var j = 0; j < sv.arr.trandau.length; j++) {
		sv.arr.event_clickthongtin[j] = function(e) {
			Ti.API.info('length' + sv.arr.mangid[j]);
			sv.ui.TTTD = new sv.vari.TTTD_cuthe();
			sv.ui.ViewTong.removeAllChildren();
			sv.ui.ViewTong.add(sv.ui.TTTD.ui.ViewTong);
		};

	}

	for (var i = 0; i < sv.arr.data.length; i++) {
		sv.arr.event_clickrow[i] = function(e) {
			if (e.source.expanded) {
				e.source.expanded = false;
				sv.arr.rows[e.source.id].setHeight(set_height(sv.arr.param[e.source.id]));
				sv.arr.arrow[e.source.id].transform = sv.vari.trans2;
				sv.arr.arrow[e.source.id].top = Ti.App.size(25);
				for (var j = 0; j < sv.arr.data.length; j++) {
					if (j != (e.source.id)) {
						sv.arr.rows[j].expanded = false;
						sv.arr.rows[j].setHeight(set_height(sv.arr.param[j]));
						sv.arr.arrow[j].transform = sv.vari.trans2;
						sv.arr.arrow[j].top = Ti.App.size(25);
					}
				}
			} else {
				e.source.expanded = true;
				sv.arr.rows[e.source.id].setHeight(Ti.App.size((sv.arr.param[e.source.id].length) * 140 + 100));
				sv.arr.arrow[e.source.id].transform = sv.vari.trans1;
				sv.arr.arrow[e.source.id].top = Ti.App.size(20);
				for (var j = 0; j < sv.arr.data.length; j++) {
					if (j != (e.source.id)) {
						sv.arr.rows[j].expanded = false;
						sv.arr.arrow[j].transform = sv.vari.trans2;
						sv.arr.arrow[j].top = Ti.App.size(25);
						sv.arr.rows[j].setHeight(Ti.App.size(100));
					};
				}
			}

		};

	}

	for (var i = 0; i < sv.arr.data.length; i++) {
		sv.arr.event_clickGD[i] = function(e) {
			Ti.API.info('thu tu ' + e.source.idGD);
			sv.vari.view_bxh = new sv.vari.bxh();
			sv.ui.ViewTong.removeAllChildren();
			sv.ui.ViewTong.add(sv.vari.view_bxh.ui.ViewTong);
		};
	}
};
function set_border(i, sv) {
	if (i == 0 || i % 2 == 0 || i == (sv.arr.data.length - 1)) {
		return 1;
	} else {
		return 0;
	}
};
function set_height(sotran) {
	if ((sotran.length) == 1) {
		return Ti.App.size(240);
	} else {
		return Ti.App.size(380);
	}
};
function height_viewback(sotran) {
	if ((sotran.length) == 1) {
		return Ti.App.size(140);
	} else {
		return Ti.App.size((sotran.length) * 140);
	}

};