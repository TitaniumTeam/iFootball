module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		taobien(sv);
		tao_ui(sv);
		removeAllEvent(sv);
		setkq(sv);
	})();
	return sv;
};

function taobien(sv) {
	sv.vari.thongke2 = require('/ui_soxo/WindowChoose');
	sv.arr.datarow = [];
	sv.arr.height = [Ti.App.size(120), Ti.App.size(200)];
	sv.arr.dayso1 = ['12', '12', '12', '12', '12', '12', '12', '12', '12'];
	sv.arr.param = ['09808', '09808', '09808', '09808', '09808', '09990', '09788', '04358', '09899', '09111', '0978', '0435', '0981', '0911', '0978', '0435', '0981', '0911', '0978', '0435', '091', '091', '097', '04', '09', '01', '09'];
}

/*
 * khoi tao ui
 */
function tao_ui(sv) {
	sv.ui.ViewTong = Titanium.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		top : 0,
		lef : 0,
		backgroundColor : 'transparent'
	});
	sv.ui.ViewHeader2 = Ti.UI.createLabel({
		width : Ti.App.size(720),
		height : Ti.App.size(70),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : 0,
		top : 0,
		touchEnabled : false,
		text : 'Xổ xố miền Bắc ngày 22-5-2014 (Hà Nội)',
		font : {
			fontSize : Ti.App.size(30)
		},
		textAlign : 'center',
		color : 'black'
	});
	sv.ui.ViewTong.add(sv.ui.ViewHeader2);
	sv.ui.View_icon_search = Titanium.UI.createView({
		width : Ti.App.size(125),
		height : Ti.App.size(125),
		left : Ti.App.size(10),
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
		opacity : 0.5,
		backgroundColor : 'green',
		borderRadius : 5,
		zIndex : 10,
		top : Ti.App.size(70)
	});
	sv.ui.icon_search = Titanium.UI.createImageView({
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		backgroundImage : '/assets/images/icon/icon-search.png',
		touchEnabled : false
	});
	sv.ui.View_icon_search.add(sv.ui.icon_search);
	sv.ui.ViewTong.add(sv.ui.View_icon_search);
	sv.ui.scrollView = Ti.UI.createScrollView({
		top : Ti.App.size(70),
		width : Ti.App.size(720),
		left : 0,
		right : 0,
		layout : 'vertical',
		horizontalWrap : false,
		scrollType : 'vertical',
		backgroundColor : Ti.App.Color.superwhite,
		showHorizontalScrollIndicator : false,
		showVerticalScrollIndicator : true,
		disableBounce : true,
		horizontalBounce : true,
		height : Ti.UI.FILL
	});
	sv.ui.ViewTong.add(sv.ui.scrollView);
	////
	sv.ui.bangkq = bangketqua();
	sv.ui.scrollView.add(sv.ui.bangkq);
	sv.ui.vDaysove = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(300),
		backgroundColor : 'transparent'
	});
	sv.ui.lbl_dsve = Ti.UI.createLabel({
		width : Ti.App.size(200),
		height : Ti.App.size(60),
		left : Ti.App.size(20),
		text : 'Dãy số về',
		top : Ti.App.size(20),
		font : {
			fontSize : Ti.App.size(30)
		},
		color : Ti.App.Color.nauden,
		textAlign : 'left'
	});
	sv.ui.vDaysove.add(sv.ui.lbl_dsve);
	sv.ui.vConsove = Ti.UI.createView({
		width : Ti.App.size(680),
		height : Ti.App.size(240),
		top : Ti.App.size(80),
		left : Ti.App.size(20),
		right : Ti.App.size(20)
	});
	sv.ui.vDaysove.add(sv.ui.vConsove);

	for (var i = 0; i < 9; i++) {
		sv.ui.rowc1 = rowchild(0, Ti.App.size(75 * i), Ti.App.size(68), Ti.App.size(68), false, true, setbg(i, 5));
		sv.ui.rowc1.setText(sv.arr.dayso1[i]);
		sv.ui.vConsove.add(sv.ui.rowc1);
	}
	for (var i = 0; i < 9; i++) {
		sv.ui.rowc2 = rowchild(Ti.App.size(75), Ti.App.size(75 * i), Ti.App.size(68), Ti.App.size(68), false, true, false);
		sv.ui.rowc2.setText(sv.arr.dayso1[i]);
		sv.ui.vConsove.add(sv.ui.rowc2);
	}
	for (var i = 0; i < 9; i++) {
		sv.ui.rowc3 = rowchild(Ti.App.size(150), Ti.App.size(75 * i), Ti.App.size(68), Ti.App.size(68), false, true, false);
		sv.ui.rowc3.setText(sv.arr.dayso1[i]);
		sv.ui.vConsove.add(sv.ui.rowc3);
	}
	sv.ui.scrollView.add(sv.ui.vDaysove);
	////
	sv.ui.vdau_sau = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(70),
	});

	sv.ui.lbl_dsve_saudau = Ti.UI.createLabel({
		width : Ti.App.size(70),
		height : Ti.App.size(70),
		left : Ti.App.size(20),
		text : 'Số đầu',
		top : 0,
		font : {
			fontSize : Ti.App.size(20)
		},
		color : Ti.App.Color.nauden,
		textAlign : 'left'
	});
	sv.ui.vdau_sau.add(sv.ui.lbl_dsve_saudau);
	sv.ui.lbl_dsve_sau = Ti.UI.createLabel({
		width : Ti.App.size(70),
		height : Ti.App.size(70),
		left : Ti.App.size(120),
		text : 'Số sau',
		top : 0,
		font : {
			fontSize : Ti.App.size(20)
		},
		color : Ti.App.Color.nauden,
		textAlign : 'left'
	});
	sv.ui.vdau_sau.add(sv.ui.lbl_dsve_sau);
	sv.ui.scrollView.add(sv.ui.vdau_sau);
	////
	for (var i = 0; i < 8; i++) {
		sv.ui.vds_sovesau = Ti.UI.createView({
			width : Ti.App.size(670),
			height : Ti.App.size(70),
			left : Ti.App.size(20),
			// top : Ti.App.size(75) * i,
			borderColor : Ti.App.Color.magenta,
			borderWidth : 1,
			borderRadius : 2
		});
		sv.ui.space = Ti.UI.createView({
			width : Ti.App.size(670),
			height : Ti.App.size(5),
			left : Ti.App.size(20),
		});
		for (var j = 0; j < 4; j++) {
			sv.ui.rowchild_vds = rowchild(Ti.App.size(1), setleft(j, 0), Ti.App.size(67), Ti.App.size(67), false, false, false, setbg(j, 0));
			sv.ui.rowchild_vds.setText(sv.arr.dayso1[0]);
			sv.ui.vds_sovesau.add(sv.ui.rowchild_vds);

		}
		sv.ui.scrollView.add(sv.ui.space);
		sv.ui.scrollView.add(sv.ui.vds_sovesau);
	}

	;
	////
	createUI_Event(sv);
	sv.ui.scrollView.addEventListener('scroll', sv.fu.evt_scroll);
	sv.ui.View_icon_search.addEventListener('click', sv.fu.evt_search_icon);
};
function createUI_Event(sv) {
	sv.fu.evt_scroll = function(e) {
		sv.ui.View_icon_search.top = (e.y) / 4;
	};
	sv.fu.evt_search_icon = function(e) {
		sv.vari.view_thongke2 = new sv.vari.thongke2();
		sv.ui.ViewTong.removeAllChildren();
		sv.ui.ViewTong.add(sv.vari.view_thongke2.ui.ViewTong);
	};
};
function setkq(sv) {
	sv.setParam = function(param) {
		sv.ui.bangkq.setKQ(param);
	};
}

function removeAllEvent(sv) {
	sv.removeAllEvent = function(e) {
		sv.ui.scrollView.removeEventListener('scroll', sv.fu.evt_scroll);
	};
};
function setbg(i, _bg) {
	if (i == _bg) {
		return true;
	} else
		return false;
};
function setleft(j, _left) {
	if (j == _left) {
		return Ti.App.size(1);
	} else
		return Ti.App.size(74 * j);
};

function bangketqua() {
	var h1 = Ti.App.size(120);
	var h2 = Ti.App.size(200);
	var w1 = Ti.App.size(680);
	var l1 = Ti.App.size(20);
	var l2 = Ti.App.size(10);
	var t1 = Ti.App.size(20);
	var t2 = Ti.App.size(105);
	var data_lbl = [];
	var viewchua = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(1160),
		top : 0,
		backgroundColor : Ti.App.Color.superwhite,
		left : 0
	});
	var viewche1 = Ti.UI.createView({
		left : 0,
		backgroundColor : Ti.App.Color.superwhite,
		zIndex : 10,
		width : Ti.App.size(30),
		height : Ti.App.size(1160),
	});
	viewchua.add(viewche1);
	var viewche2 = Ti.UI.createView({
		right : 0,
		backgroundColor : Ti.App.Color.superwhite,
		zIndex : 10,
		width : Ti.App.size(30),
		height : Ti.App.size(1160),
	});
	viewchua.add(viewche2);
	///giai dac biet
	var view1 = Ti.UI.createView({
		top : 0,
		height : h1,
		width : w1,
		left : l1,
	});
	viewchua.add(view1);

	var lblgiai1 = Ti.UI.createLabel({
		left : l2,
		text : 'Đặc biệt',
		color : Ti.App.Color.red,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left'
	});
	view1.add(lblgiai1);
	data_lbl.push(Ti.UI.createLabel({
		width : Ti.App.size(500),
		height : Ti.App.size(65),
		backgroundColor : Ti.App.Color.red,
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(50),
			fontWeight : 'bold'
		},
		left : Ti.App.size(200),
		textAlign : 'center'
	}));
	view1.add(data_lbl[0]);
	///giai nhat
	var view2 = Ti.UI.createView({
		top : h1,
		height : h1,
		width : w1,
		left : l1,
		borderColor : Ti.App.Color.magenta,
		borderWidth : 1
	});
	viewchua.add(view2);
	var lblgiai2 = Ti.UI.createLabel({
		left : l2,
		text : 'Nhất',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left'
	});
	view2.add(lblgiai2);

	data_lbl.push(Ti.UI.createLabel({
		width : Ti.App.size(500),
		height : Ti.App.size(65),
		backgroundColor : Ti.App.Color.nauden,
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(50),
		},
		left : Ti.App.size(200),
		textAlign : 'center'
	}));
	view2.add(data_lbl[1]);

	///giai nhi
	var view3 = Ti.UI.createView({
		top : Ti.App.size(120 * 2),
		height : h1,
		width : w1,
		left : l1,
	});
	viewchua.add(view3);
	var lblgiai3 = Ti.UI.createLabel({
		left : l2,
		text : 'Nhì',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left'
	});
	view3.add(lblgiai3);
	view3.add(line(t1, Ti.App.size(425)));

	data_lbl.push(lblketqua(Ti.App.size(250)));
	data_lbl.push(lblketqua(Ti.App.size(510)));
	view3.add(data_lbl[2]);
	view3.add(data_lbl[3]);
	///giai ba
	var view4 = Ti.UI.createView({
		top : Ti.App.size(120 * 3),
		height : h2,
		width : w1,
		left : l1,
		borderColor : Ti.App.Color.magenta,
		borderWidth : 1
	});
	viewchua.add(view4);
	var lblgiai4 = Ti.UI.createLabel({
		left : l2,
		text : 'Ba',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left',
		top : t1
	});
	view4.add(lblgiai4);
	view4.add(line(t1, Ti.App.size(340)));
	view4.add(line(t1, Ti.App.size(515)));
	view4.add(line(t2, Ti.App.size(340)));
	view4.add(line(t2, Ti.App.size(515)));

	data_lbl.push(lblketqua(Ti.App.size(190), t1));
	data_lbl.push(lblketqua(Ti.App.size(375), t1));
	data_lbl.push(lblketqua(Ti.App.size(545), t1));
	data_lbl.push(lblketqua(Ti.App.size(190), t2));
	data_lbl.push(lblketqua(Ti.App.size(375), t2));
	data_lbl.push(lblketqua(Ti.App.size(545), t2));
	view4.add(data_lbl[4]);
	view4.add(data_lbl[5]);
	view4.add(data_lbl[6]);
	view4.add(data_lbl[7]);
	view4.add(data_lbl[8]);
	view4.add(data_lbl[9]);

	///giai tu
	var view5 = Ti.UI.createView({
		top : Ti.App.size(120 * 3 + 200),
		height : h1,
		width : w1,
		left : l1,
	});
	viewchua.add(view5);
	var lblgiai5 = Ti.UI.createLabel({
		left : l2,
		text : 'Tư',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left'
	});
	view5.add(lblgiai5);
	view5.add(line(t1, Ti.App.size(305)));
	view5.add(line(t1, Ti.App.size(430)));
	view5.add(line(t1, Ti.App.size(560)));

	data_lbl.push(lblketqua(Ti.App.size(195)));
	data_lbl.push(lblketqua(Ti.App.size(315)));
	data_lbl.push(lblketqua(Ti.App.size(448)));
	data_lbl.push(lblketqua(Ti.App.size(575)));
	view5.add(data_lbl[10]);
	view5.add(data_lbl[11]);
	view5.add(data_lbl[12]);
	view5.add(data_lbl[13]);

	///giai nam
	var view6 = Ti.UI.createView({
		top : Ti.App.size(120 * 4 + 200),
		height : h2,
		width : w1,
		left : l1,
		borderColor : Ti.App.Color.magenta,
		borderWidth : 1
	});
	viewchua.add(view6);
	var lblgiai6 = Ti.UI.createLabel({
		left : l2,
		text : 'Năm',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left',
		top : t1
	});
	view6.add(lblgiai6);
	view6.add(line(t1, Ti.App.size(340)));
	view6.add(line(t1, Ti.App.size(515)));
	view6.add(line(t2, Ti.App.size(340)));
	view6.add(line(t2, Ti.App.size(515)));

	data_lbl.push(lblketqua(Ti.App.size(190), t1));
	data_lbl.push(lblketqua(Ti.App.size(375), t1));
	data_lbl.push(lblketqua(Ti.App.size(545), t1));
	data_lbl.push(lblketqua(Ti.App.size(190), t2));
	data_lbl.push(lblketqua(Ti.App.size(375), t2));
	data_lbl.push(lblketqua(Ti.App.size(545), t2));
	view6.add(data_lbl[14]);
	view6.add(data_lbl[15]);
	view6.add(data_lbl[16]);
	view6.add(data_lbl[17]);
	view6.add(data_lbl[18]);
	view6.add(data_lbl[19]);
	///giai sau
	var view7 = Ti.UI.createView({
		top : Ti.App.size(120 * 4 + 2 * 200),
		height : h1,
		width : w1,
		left : l1,
	});
	viewchua.add(view7);
	var lblgiai7 = Ti.UI.createLabel({
		left : l2,
		text : 'Sáu',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left'
	});
	view7.add(lblgiai7);
	view7.add(line(t1, Ti.App.size(340)));
	view7.add(line(t1, Ti.App.size(515)));

	data_lbl.push(lblketqua(Ti.App.size(200), t1));
	data_lbl.push(lblketqua(Ti.App.size(390), t1));
	data_lbl.push(lblketqua(Ti.App.size(560), t1));
	view7.add(data_lbl[20]);
	view7.add(data_lbl[21]);
	view7.add(data_lbl[22]);

	///giai bay
	var view8 = Ti.UI.createView({
		top : Ti.App.size(120 * 5 + 2 * 200),
		height : h1,
		width : w1,
		left : l1,
		borderColor : Ti.App.Color.magenta,
		borderWidth : 1
	});
	viewchua.add(view8);
	var lblgiai8 = Ti.UI.createLabel({
		left : l2,
		text : 'Bảy',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left'
	});
	view8.add(lblgiai8);
	view8.add(line(t1, Ti.App.size(285)));
	view8.add(line(t1, Ti.App.size(425)));
	view8.add(line(t1, Ti.App.size(565)));

	data_lbl.push(lblketqua(Ti.App.size(195)));
	data_lbl.push(lblketqua(Ti.App.size(330)));
	data_lbl.push(lblketqua(Ti.App.size(470)));
	data_lbl.push(lblketqua(Ti.App.size(595)));
	view8.add(data_lbl[23]);
	view8.add(data_lbl[24]);
	view8.add(data_lbl[25]);
	view8.add(data_lbl[26]);
	///////
	viewchua.setKQ = function(param) {
		for (var i = 0; i < param.length; i++) {
			data_lbl[i].text = param[i];
		}

	};

	/////
	return viewchua;
};
function line(_top, _left) {
	var line = Ti.UI.createView({
		width : 1,
		height : Ti.App.size(68),
		backgroundColor : Ti.App.Color.xanhnhat,
		top : _top,
		left : _left
	});
	return line;
};
function lblketqua(_left, _top) {
	var lbl = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(45)
		},
		// top : _top,
		left : _left,
		// text : 'test'
	});
	lbl.top = _top;
	return lbl;
};
function currDate() {
	var currTime = new Date();
	var ngay = currTime.getDate();
	var thang = currTime.getMonth() + 1;
	var nam = currTime.getFullYear();
	var currdate = ngay + '/' + thang + '/' + nam;
	return currdate;
}

function rowchild(_top, _left, _width, _height, _visible, _border, _bg, _border2) {
	var view_contain = Ti.UI.createView({
		width : _width,
		height : _height,
		top : _top,
		left : _left,
	});
	var line_doc = Ti.UI.createView({
		width : 1,
		height : Ti.App.size(70),
		right : 0,
		backgroundColor : Ti.App.Color.magenta,
		visible : _visible
	});
	view_contain.add(line_doc);
	var lbl_kq = Ti.UI.createLabel({
		color : Ti.App.Color.nauden,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(40)
		}
	});
	view_contain.add(lbl_kq);
	view_contain.setColor_Line = function(_color) {
		line_doc.backgroundColor = _color;
	};
	if (_border == true) {
		view_contain.borderColor = 'black';
		view_contain.borderRadius = 3;
		view_contain.borderWidth = 1;
	};
	if (_border2 == true) {
		view_contain.borderWidth = 1;
		view_contain.borderColor = 'black';
	};
	if (_bg == true) {
		view_contain.backgroundColor = Ti.App.Color.red;
		lbl_kq.color = Ti.App.Color.superwhite;
	}
	view_contain.setText = function(_conso) {
		lbl_kq.text = _conso;
	};
	return view_contain;
};
