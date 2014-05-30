module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		taobien(sv);
		tao_ui(sv);
		setParam(sv);
	})();
	return sv;
};

function taobien(sv) {
	sv.arr.height = [Ti.App.size(120), Ti.App.size(200)];
	sv.vari.bangkq = require('/ui_soxo/bangketquasx');
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
	sv.ui.ViewHeader = Ti.UI.createLabel({
		width : Ti.App.size(720),
		height : Ti.App.size(70),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : 0,
		top : 0,
		touchEnabled : false,
		font : {
			fontSize : Ti.App.size(30)
		},
		textAlign : 'center',
		color : 'black'
	});
	sv.ui.ViewTong.add(sv.ui.ViewHeader);
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
	sv.ui.bangkq = new sv.vari.bangkq(1);
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
		// sv.ui.rowc1.setText(sv.arr.dayso1[i]);
		sv.ui.vConsove.add(sv.ui.rowc1);
	}
	for (var i = 0; i < 9; i++) {
		sv.ui.rowc2 = rowchild(Ti.App.size(75), Ti.App.size(75 * i), Ti.App.size(68), Ti.App.size(68), false, true, false);
		// sv.ui.rowc2.setText(sv.arr.dayso1[i]);
		sv.ui.vConsove.add(sv.ui.rowc2);
	}
	for (var i = 0; i < 9; i++) {
		sv.ui.rowc3 = rowchild(Ti.App.size(150), Ti.App.size(75 * i), Ti.App.size(68), Ti.App.size(68), false, true, false);
		// sv.ui.rowc3.setText(sv.arr.dayso1[i]);
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
			// sv.ui.rowchild_vds.setText(sv.arr.dayso1[0]);
			sv.ui.vds_sovesau.add(sv.ui.rowchild_vds);

		}
		sv.ui.scrollView.add(sv.ui.space);
		sv.ui.scrollView.add(sv.ui.vds_sovesau);
	}

	;
};
function setParam(sv) {
	sv.setParam = function(param) {
		sv.ui.bangkq.setKQ(param);
	};
}

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

