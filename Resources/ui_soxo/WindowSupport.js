module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_bien(sv);
		tao_ui(sv);
	})();
	return sv;
};
//tao bien
function tao_bien(sv) {
	// sv.arr = {};
	sv.arr.ngay1 = ['6/9/2014', '1/1/2014'];
	sv.arr.ngay2 = ['6/9/2014', '1/1/2014'];
	sv.arr.ngay3 = ['6/9/2014', '1/1/2014'];
	sv.arr.params = [{
		nhip : '2',
		giai : 'G5',
		ngay : '1/1/2014'
	}, {
		nhip : '2',
		giai : 'G5',
		ngay : '1/1/2014'
	}, {
		nhip : '2',
		giai : 'G5',
		ngay : '1/1/2014'
	}];
	sv.arr.datatbl = [];
}

/*khoi tao UI
 */
function tao_ui(sv) {
	sv.ui.windowkqsx = Titanium.UI.createWindow({
		backgroundColor:Ti.App.Color.magenta,
		navBarHidden:true
	});
	sv.ui.ViewHeader = Ti.UI.createView({
		backgroundColor : Ti.App.Color.red,
		width : Ti.App.size(720),
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
		text : 'DÃY SỐ LÂU VỀ',
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.superwhite,
	});

	sv.ui.windowkqsx.add(sv.ui.ViewHeader);
	sv.ui.ViewHeader.add(sv.ui.ViewIconLeft);
	sv.ui.ViewHeader.add(sv.ui.ViewLabelHeader);

	sv.ui.ViewIconLeft.add(sv.ui.IconLeft);
	sv.ui.ViewLabelHeader.add(sv.ui.LabelHeader);

	sv.ui.scrollView = Ti.UI.createScrollView({
		top : Ti.App.size(120),
		width : Ti.App.size(720),
		left : 0,
		right : 0,
		layout : 'vertical',
		horizontalWrap : false,
		scrollType : 'vertical',
		backgroundColor : 'transparent',
		showHorizontalScrollIndicator : false,
		showVerticalScrollIndicator : true,
		disableBounce : true,
		horizontalBounce : true,
	});
	sv.ui.windowkqsx.add(sv.ui.scrollView);
	//
	/*view tong1
	 */
	sv.ui.vTong1 = Titanium.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(720),
		left : 0,
		right : 0
	});
	sv.vari.arrow = require('/ui_soxo/vArrow');
	sv.vari.combobox = require('/ui_soxo/ComboBox');
	sv.ui.arrow1 = new sv.vari.arrow(Ti.App.size(90));
	sv.ui.varrow11 = sv.ui.arrow1.getvArrow1();
	sv.ui.varrow12 = sv.ui.arrow1.getvArrow2();
	sv.ui.vTong1.add(sv.ui.arrow1);
	///
	sv.ui.arrow2 = new sv.vari.arrow(Ti.App.size(200));
	sv.ui.varrow21 = sv.ui.arrow2.getvArrow1();
	sv.ui.varrow22 = sv.ui.arrow2.getvArrow2();
	sv.ui.vTong1.add(sv.ui.arrow2);
	///////
	sv.ui.view_choose = new sv.vari.combobox(Ti.App.size(90), Ti.App.size(185), 'Từ ngày', Ti.App.size(585));
	sv.ui.view_choose1 = new sv.vari.combobox(Ti.App.size(200), Ti.App.size(295), 'Đến ngày', Ti.App.size(585));
	sv.ui.view_choose2 = new sv.vari.combobox(Ti.App.size(310), Ti.App.size(405), 'Bộ số', Ti.App.size(670));
	sv.ui.view_choose.setTable(sv.arr.ngay1);
	sv.ui.view_choose1.setTable(sv.arr.ngay2);
	sv.ui.view_choose2.setTable(sv.arr.ngay3);
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.lblfirst1 = sv.ui.view_choose1.getLblFirst();
	sv.ui.lblfirst2 = sv.ui.view_choose2.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.table_view1 = sv.ui.view_choose1.getTableView();
	sv.ui.table_view2 = sv.ui.view_choose2.getTableView();

	sv.ui.vTong1.add(sv.ui.view_choose);
	sv.ui.vTong1.add(sv.ui.table_view);
	sv.ui.vTong1.add(sv.ui.view_choose1);
	sv.ui.vTong1.add(sv.ui.table_view1);
	sv.ui.vTong1.add(sv.ui.view_choose2);
	sv.ui.vTong1.add(sv.ui.table_view2);
	///
	sv.ui.btn_xemkq = Ti.UI.createLabel({
		width : Ti.App.size(670),
		height : Ti.App.size(100),
		backgroundColor : Ti.App.Color.gray,
		text : 'Xem kết quả',
		left : Ti.App.size(25),
		right : Ti.App.size(20),
		color : Ti.App.Color.superwhite,
		textAlign : 'center',
		top : Ti.App.size(465),
		font : {
			fontSize : Ti.App.size(50)
		},
		backgroundSelectedImage : Ti.App.Color.superwhite,
		backgroundFocusedImage : Ti.App.Color.superwhite,
	});
	sv.ui.lbl_thongke = Titanium.UI.createLabel({
		top : Ti.App.size(600),
		width : Ti.App.size(670),
		height : Ti.App.size(70),
		backgroundColor : 'pink',
		text : 'Thống kê bộ số XX về 23 lần',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(30)
		},
		left : Ti.App.size(25),
		textAlign : 'center'
	});
	sv.ui.vTong1.add(sv.ui.btn_xemkq);
	sv.ui.vTong1.add(sv.ui.lbl_thongke);
	sv.ui.scrollView.add(sv.ui.vTong1);
	///////

	sv.ui.demuc = Titanium.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(80),
		backgroundColor : Ti.App.Color.superwhite,
		left : 0,
		right : 0
	});

	// sv.ui.rowchild = require('/ui_soxo/RowChild');
	sv.ui.rowc1 = rowchild(0, 0, Ti.App.size(220), Ti.App.size(80),true);
	sv.ui.rowc1.setColor_Line(Ti.App.Color.nauden);
	sv.ui.rowc1.setText('Số nhịp');
	sv.ui.rowc2 = rowchild(0, Ti.App.size(220), Ti.App.size(270), Ti.App.size(80), true);
	sv.ui.rowc2.setColor_Line(Ti.App.Color.nauden);
	sv.ui.rowc2.setText('Về giải');
	sv.ui.rowc3 = rowchild(0, Ti.App.size(490), Ti.App.size(230), Ti.App.size(80), false);
	sv.ui.rowc3.setColor_Line(Ti.App.Color.nauden);
	sv.ui.rowc3.setText('Ngày');
	sv.ui.demuc.add(sv.ui.rowc1);
	sv.ui.demuc.add(sv.ui.rowc2);
	sv.ui.demuc.add(sv.ui.rowc3);
	sv.ui.scrollView.add(sv.ui.demuc);
	///
	/*
	* View tong2
	*/
	sv.ui.vTong2 = Titanium.UI.createView({
		width : Ti.App.size(720),
		// height : Ti.App.size(720),
		left : 0,
		right : 0,
		height : Ti.UI.FILL,
	});
	sv.ui.tblDayso = Ti.UI.createTableView({
		width : Ti.App.size(720),
		backgroundColor : 'transparent',
		separatorColor : Ti.App.Color.nauden,
		left : 0,
		right : Ti.App.size(16),
		top : Ti.App.size(10),
		height : Ti.UI.SIZE,
	});

	for (var i = 0; i < (sv.arr.params.length); i++) {
		sv.ui.row = Ti.UI.createTableViewRow({
			height : Ti.App.size(80),
			width : Ti.App.size(720),
		});
		sv.ui.lblnhip = Ti.UI.createLabel({
			width : Ti.App.size(220),
			left : 0,
			text : sv.arr.params[i].nhip,
			color : Ti.App.Color.nauden,
			font : {
				fontSize : Ti.App.size(40)
			},
			textAlign : 'center'
		});
		sv.ui.row.add(sv.ui.lblnhip);
		sv.ui.lblgiai = Ti.UI.createLabel({
			width : Ti.App.size(270),
			left : Ti.App.size(220),
			text : sv.arr.params[i].giai,
			color : Ti.App.Color.nauden,
			font : {
				fontSize : Ti.App.size(40)
			},
			textAlign : 'center'
		});
		sv.ui.row.add(sv.ui.lblgiai);
		sv.ui.lblngayve = Ti.UI.createLabel({
			width : Ti.App.size(230),
			left : Ti.App.size(490),
			text : sv.arr.params[i].ngay,
			color : Ti.App.Color.nauden,
			font : {
				fontSize : Ti.App.size(40)
			},
			textAlign : 'center'
		});
		sv.ui.row.add(sv.ui.lblngayve);

		sv.arr.datatbl.push(sv.ui.row);
	};
	sv.ui.tblDayso.setData(sv.arr.datatbl);
	sv.ui.vTong2.add(sv.ui.tblDayso);
	sv.ui.scrollView.add(sv.ui.vTong2);

	// sv.ui.ViewTong.add(sv.ui.scrollView);
	//////
	tao_event(sv);
	sv.ui.arrow1.addEventListener('click', sv.fu.event_click_view);
	sv.ui.arrow2.addEventListener('click', sv.fu.event_click_view1);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.view_choose1.addEventListener('click', sv.fu.event_click_view1);
	sv.ui.table_view1.addEventListener('click', sv.fu.event_clicktbl1);
	sv.ui.view_choose2.addEventListener('click', sv.fu.event_click_view2);
	sv.ui.table_view2.addEventListener('click', sv.fu.event_clicktbl2);
	sv.ui.ViewIconLeft.addEventListener('click', sv.fu.event_closewin);

	sv.ui.windowkqsx.addEventListener('open', sv.fu.event_openwin);
	sv.ui.windowkqsx.addEventListener('close', sv.fu.event_close);
	//////

};
function tao_event(sv) {
	sv.fu.event_closewin = function(e) {
		sv.ui.windowkqsx.close();
	};
	sv.fu.event_openwin = function(e) {
		Ti.API.info('open win');
	};
	sv.fu.event_close = function(e) {
		sv.ui.arrow1.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.arrow2.removeEventListener('click', sv.fu.event_click_view1);
		sv.ui.view_choose.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.table_view.removeEventListener('click', sv.fu.event_clicktbl);
		sv.ui.view_choose1.removeEventListener('click', sv.fu.event_click_view1);
		sv.ui.table_view1.removeEventListener('click', sv.fu.event_clicktbl1);
		sv.ui.view_choose2.removeEventListener('click', sv.fu.event_click_view2);
		sv.ui.table_view2.removeEventListener('click', sv.fu.event_clicktbl2);
		sv.ui.ViewIconLeft.removeEventListener('click', sv.fu.event_closewin);
		sv.ui.windowkqsx.removeEventListener('open', sv.fu.event_openwin);
		sv.ui.windowkqsx.removeEventListener('close', sv.fu.event_close);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
	};
	sv.fu.event_click_view = function(e) {
		view_click(sv.ui.table_view, sv.ui.table_view1, sv.ui.table_view2);
	};
	sv.fu.event_clicktbl = function(e) {
		tbl_click(e, sv.ui.lblfirst, sv.ui.table_view);
	};
	sv.fu.event_click_view1 = function(e) {
		view_click(sv.ui.table_view1, sv.ui.table_view2, sv.ui.table_view);
	};
	sv.fu.event_clicktbl1 = function(e) {
		tbl_click(e, sv.ui.lblfirst1, sv.ui.table_view1);
	};
	sv.fu.event_click_view2 = function(e) {
		view_click(sv.ui.table_view2, sv.ui.table_view1, sv.ui.table_view);
	};
	sv.fu.event_clicktbl2 = function(e) {
		tbl_click(e, sv.ui.lblfirst2, sv.ui.table_view2);
	};
}

function tbl_click(e, _lbl, _tbl) {
	_lbl.text = e.row.tenrow;
	_tbl.visible = false;
}

function view_click(_tbl1, _tbl2, _tbl3) {
	_tbl1.visible = true;
	_tbl2.visible = false;
	_tbl3.visible = false;
}
function rowchild(_top, _left, _width, _height, _visible, _border, _bg, _border2){
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
	
	view_contain.setText=function(_conso){
		lbl_kq.text=_conso;
	};
	return view_contain;
};

