module.exports = function() {
	var sv = {};
	sv.ui = {};
	sv.vari = {};
	sv.arr = {};
	sv.fu = {};
	(function() {
		tao_ui(sv);
		tao_event(sv);
		remove_event(sv);
	})();
	return sv;
};
/// tao ui
function tao_ui(sv) {
	sv.ui.viewsoxo = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.UI.FILL,
		backgroundColor : 'transparent'
	});

	sv.ui.v_luachon = Ti.UI.createView({
		width : Ti.App.size(320),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : Ti.App.size(20),
		top : Ti.App.size(20)
	});
	sv.ui.lbl_luachon = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Lựa chọn',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(50)
		}
	});
	sv.ui.v_luachon.add(sv.ui.lbl_luachon);
	sv.ui.viewsoxo.add(sv.ui.v_luachon);

	sv.ui.v_ketqua = Ti.UI.createView({
		width : Ti.App.size(320),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : Ti.App.size(360),
		top : Ti.App.size(20)
	});
	sv.ui.lbl_ketqua = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Kết quả sổ xố',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(50)
		}
	});
	sv.ui.v_ketqua.add(sv.ui.lbl_ketqua);
	sv.ui.viewsoxo.add(sv.ui.v_ketqua);

	sv.ui.view_thongke1 = Ti.UI.createView({
		width : Ti.App.size(320),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : Ti.App.size(20),
		top : Ti.App.size(340)
	});
	sv.ui.lbl_daysolauve = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Dãy số lâu về',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(50)
		}
	});
	sv.ui.view_thongke1.add(sv.ui.lbl_daysolauve);
	sv.ui.viewsoxo.add(sv.ui.view_thongke1);
	//
	sv.ui.view_thongke2 = Ti.UI.createView({
		width : Ti.App.size(320),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : Ti.App.size(360),
		top : Ti.App.size(340)
	});
	sv.ui.lbl_daysohayve = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Dãy số hay về',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(50)
		}
	});
	sv.ui.view_thongke2.add(sv.ui.lbl_daysohayve);
	sv.ui.viewsoxo.add(sv.ui.view_thongke2);
	//
	sv.ui.view_thongke3 = Ti.UI.createView({
		width : Ti.App.size(320),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : Ti.App.size(20),
		top : Ti.App.size(660)
	});
	sv.ui.lbl_caudangan = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Cầu đang ăn',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(50)
		}
	});
	sv.ui.view_thongke3.add(sv.ui.lbl_caudangan);
	sv.ui.viewsoxo.add(sv.ui.view_thongke3);

	///
	sv.ui.view_Vip = Ti.UI.createView({
		width : Ti.App.size(320),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : Ti.App.size(20),
		top : Ti.App.size(660)
	});
	sv.ui.lbl_vip = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Xem số VIP',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(50)
		}
	});
	sv.ui.view_Vip.add(sv.ui.lbl_caudangan);
	sv.ui.viewsoxo.add(sv.ui.view_Vip);
	// sv.ui.winView1.add(sv.ui.viewsoxo);
	tao_event(sv);
	sv.ui.v_luachon.addEventListener('click', sv.fu.evt_luachon);
	sv.ui.v_ketqua.addEventListener('click', sv.fu.evt_kqsx);
	sv.ui.view_thongke1.addEventListener('click', sv.fu.evt_thongke1);
};
function tao_event(sv) {
	sv.fu = {};
	//
	sv.fu.evt_thongke1 = function(e) {
		sv.ui.wdSup = new (require('/ui_soxo/WindowSupport'));
	};
	///
	sv.fu.evt_luachon = function(e) {
		sv.ui.wdchoose = new (require('/ui_soxo/WindowChoose'));
	};
	sv.fu.evt_kqsx = function(e) {
		sv.ui.wdKQSX = new (require('/ui_soxo/WindowKQSX'));
		sv.ui.wdKQSX.ui.windowkqsx.open();
		
	};
};
function remove_event(sv) {
	sv.removeAllEvent = function(e) {
		sv.ui.v_luachon.removeEventListener('click', sv.fu.evt_luachon);
		sv.ui.v_ketqua.removeEventListener('click', sv.fu.evt_kqsx);
	};
};
