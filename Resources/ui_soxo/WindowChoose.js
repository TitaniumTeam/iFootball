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
	sv.arr = {};
	sv.arr.tinhthanh = ['HÀ NỘI', 'HỒ CHÍ MINH', 'HẢI DƯƠNG', 'HÀ NỘI', 'HỒ CHÍ MINH', 'HẢI DƯƠNG', 'HÀ NỘI', 'HỒ CHÍ MINH', 'HẢI DƯƠNG'];
	sv.arr.ngay = ['6/9/2014', '1/1/2014'];
	// sv.arr.pickerdata = [];
	// for (var i = 0; i < 8; i++) {
	// sv.arr.pickerdata.push(sv.ui.pickerrow = Ti.UI.createPickerRow({
	// title : sv.arr.tinhthanh[i],
	// val : i
	// }));
	// }
};
/*khoi tao UI
 */
function tao_ui(sv) {
	sv.ui.windowkqsx = Titanium.UI.createWindow({
		backgroundColor : Ti.App.Color.magenta,
		navBarHidden : true,
		keepScreenOn : true,
		top : 0,
		orientationModes : [Ti.UI.PORTRAIT],

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
		text : 'LỰA CHỌN',
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
	sv.ui.ViewTong = Titanium.UI.createView({
		width : Ti.App.size(720),
		height : Ti.UI.SIZE,
		left : 0,
		top : Ti.App.size(120),
		backgroundColor : 'transparent'
	});
	sv.ui.windowkqsx.add(sv.ui.ViewTong);
	sv.ui.lbl_info = Ti.UI.createLabel({
		width : Ti.App.size(720),
		height : Ti.App.size(100),
		text : 'Hãy chọn tỉnh thành mà bạn muốn xem kết quả',
		color : 'black',
		font : {
			fontSize : Ti.App.size(30)
		},
		textAlign : 'center',
		top : Ti.App.size(20)
	});
	sv.ui.btn_xemkq = Ti.UI.createLabel({
		width : Ti.App.size(670),
		height : Ti.App.size(100),
		backgroundColor : Ti.App.Color.gray,
		text : 'Xem kết quả',
		left : Ti.App.size(25),
		right : Ti.App.size(25),
		top : Ti.App.size(600),
		color : Ti.App.Color.superwhite,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(50)
		},
	});
	// sv.ui.picker = Ti.UI.createPicker({
	// top : Ti.App.size(250),
	// selectionIndicator : true,
	// width:Ti.App.size(500)
	// });
	// sv.ui.picker.add(sv.arr.pickerdata);
	// sv.ui.windowkqsx.add(sv.ui.picker);
	sv.vari.arrow = require('/ui_soxo/vArrow');
	sv.ui.arrow1 = new sv.vari.arrow(Ti.App.size(250));
	sv.ui.varrow11 = sv.ui.arrow1.getvArrow1();
	sv.ui.varrow12 = sv.ui.arrow1.getvArrow2();
	///
	sv.ui.arrow2 = new sv.vari.arrow(Ti.App.size(380));
	sv.ui.varrow21 = sv.ui.arrow2.getvArrow1();
	sv.ui.varrow22 = sv.ui.arrow2.getvArrow2();
	///
	sv.vari.combobox = require('/ui_soxo/ComboBox');
	sv.ui.view_choose = new sv.vari.combobox(Ti.App.size(250), Ti.App.size(345), 'Tỉnh thành', Ti.App.size(585));

	sv.ui.view_choose1 = new sv.vari.combobox(Ti.App.size(380), Ti.App.size(475), 'Ngày', Ti.App.size(585));
	sv.ui.view_choose.setTable(sv.arr.tinhthanh);
	sv.ui.view_choose1.setTable(sv.arr.ngay);
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.lblfirst1 = sv.ui.view_choose1.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.table_view1 = sv.ui.view_choose1.getTableView();
	///

	sv.ui.ViewTong.add(sv.ui.arrow1);
	sv.ui.ViewTong.add(sv.ui.arrow2);
	sv.ui.ViewTong.add(sv.ui.view_choose);
	sv.ui.ViewTong.add(sv.ui.view_choose1);
	sv.ui.ViewTong.add(sv.ui.table_view);
	sv.ui.ViewTong.add(sv.ui.table_view1);
	sv.ui.ViewTong.add(sv.ui.btn_xemkq);
	sv.ui.ViewTong.add(sv.ui.lbl_info);
	//////
	tao_event(sv);
	sv.ui.arrow1.addEventListener('click', sv.fu.event_click_view);
	sv.ui.arrow2.addEventListener('click', sv.fu.event_click_view1);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.view_choose1.addEventListener('click', sv.fu.event_click_view1);
	sv.ui.table_view1.addEventListener('click', sv.fu.event_clicktbl1);
	sv.ui.ViewIconLeft.addEventListener('click', sv.fu.event_btnclose);
	sv.ui.windowkqsx.addEventListener('open', sv.fu.event_openwin);
	sv.ui.windowkqsx.addEventListener('close', sv.fu.event_closewin);

	sv.ui.btn_xemkq.addEventListener('click', function() {
		sv.ui.wdKQSX = new (require('/ui_soxo/WindowKQSX'));
		sv.ui.wdKQSX.ui.windowkqsx.open();
	});
	//////

};
function tao_event(sv) {
	sv.fu = {};
	sv.fu.event_btnclose = function(e) {
		sv.ui.windowkqsx.close();
	};
	sv.fu.event_click_view = function(e) {
		view_click(sv.ui.table_view, sv.ui.table_view1);
	};
	sv.fu.event_clicktbl = function(e) {
		tbl_click(e, sv.ui.lblfirst, sv.ui.table_view);
	};
	sv.fu.event_click_view1 = function(e) {
		view_click(sv.ui.table_view1, sv.ui.table_view);
	};
	sv.fu.event_clicktbl1 = function(e) {
		tbl_click(e, sv.ui.lblfirst1, sv.ui.table_view1);
	};
	sv.fu.event_openwin = function(e) {
		Ti.API.info('open');
	};
	sv.fu.event_closewin = function(e) {
		sv.ui.arrow1.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.arrow2.removeEventListener('click', sv.fu.event_click_view1);
		sv.ui.view_choose.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.table_view.removeEventListener('click', sv.fu.event_clicktbl);
		sv.ui.view_choose1.removeEventListener('click', sv.fu.event_click_view1);
		sv.ui.table_view1.removeEventListener('click', sv.fu.event_clicktbl1);
		sv.ui.ViewIconLeft.removeEventListener('click', sv.fu.event_btnclose);
		sv.ui.windowkqsx.removeEventListener('open', sv.fu.event_openwin);
		sv.ui.windowkqsx.removeEventListener('close', sv.fu.event_closewin);

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
	};
}

function tbl_click(e, _lbl, _tbl) {
	_lbl.text = e.row.tenrow;
	_tbl.visible = false;
}

function view_click(_tbl1, _tbl2) {
	_tbl1.visible = true;
	_tbl2.visible = false;
}

