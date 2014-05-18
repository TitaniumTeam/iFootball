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
		width : Ti.App.size(330),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.superwhite,
		left : Ti.App.size(20),
		top : Ti.App.size(20),
		backgroundSelectedColor:'blue'
	});
	sv.ui.lbl_luachon = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Xem kết quả',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		bottom : Ti.App.size(30),
		touchEnabled:false
	});
	sv.ui.v_luachon.add(sv.ui.lbl_luachon);
	sv.ui.viewsoxo.add(sv.ui.v_luachon);
	sv.ui.icon_luachon = Titanium.UI.createImageView({
		image : '/assets/images/icon/icon-soxo.png',
		width : Ti.App.size(120),
		height : Ti.App.size(130),touchEnabled:false
	});
	sv.ui.v_luachon.add(sv.ui.icon_luachon);
	////
	sv.ui.v_ketqua = Ti.UI.createView({
		width : Ti.App.size(330),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.superwhite,
		left : Ti.App.size(370),
		top : Ti.App.size(20),backgroundSelectedColor:'blue'
	});
	sv.ui.lbl_ketqua = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Kết quả trực tiếp',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},bottom : Ti.App.size(30),
		touchEnabled:false
	});
	sv.ui.v_ketqua.add(sv.ui.lbl_ketqua);
	sv.ui.viewsoxo.add(sv.ui.v_ketqua);
	sv.ui.icon_ketqua = Titanium.UI.createImageView({
		image : '/assets/images/icon/icon-soxo.png',
		width : Ti.App.size(120),
		height : Ti.App.size(130),
		touchEnabled:false
	});
	sv.ui.v_ketqua.add(sv.ui.icon_ketqua);
/////
	sv.ui.view_thongke1 = Ti.UI.createView({
		width : Ti.App.size(330),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.superwhite,
		left : Ti.App.size(20),
		top : Ti.App.size(340),backgroundSelectedColor:'blue'
	});
	sv.ui.lbl_daysolauve = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Dãy số lâu về',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},bottom : Ti.App.size(30),
		touchEnabled:false
	});
	sv.ui.view_thongke1.add(sv.ui.lbl_daysolauve);
	sv.ui.viewsoxo.add(sv.ui.view_thongke1);
	
	sv.ui.icondslauve = Titanium.UI.createImageView({
		image : '/assets/images/icon/icon-soxo.png',
		width : Ti.App.size(120),
		height : Ti.App.size(130),
		touchEnabled:false
	});
	sv.ui.view_thongke1.add(sv.ui.icondslauve);
	//
	sv.ui.view_thongke2 = Ti.UI.createView({
		width : Ti.App.size(330),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.superwhite,
		left : Ti.App.size(370),
		top : Ti.App.size(340),backgroundSelectedColor:'blue'
	});
	sv.ui.lbl_daysohayve = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Dãy số hay về',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},bottom : Ti.App.size(30),
		touchEnabled:false
	});
	sv.ui.view_thongke2.add(sv.ui.lbl_daysohayve);
	sv.ui.viewsoxo.add(sv.ui.view_thongke2);
	sv.ui.icondshayve = Titanium.UI.createImageView({
		image : '/assets/images/icon/icon-soxo.png',
		width : Ti.App.size(120),
		height : Ti.App.size(130),
		touchEnabled:false
	});
	sv.ui.view_thongke2.add(sv.ui.icondshayve);
	
	//
	sv.ui.view_thongke3 = Ti.UI.createView({
		width : Ti.App.size(330),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.superwhite,
		left : Ti.App.size(20),
		top : Ti.App.size(660),backgroundSelectedColor:'blue'
	});
	sv.ui.lbl_caudangan = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Cầu đang ăn',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},bottom : Ti.App.size(30),
		touchEnabled:false
	});
	sv.ui.view_thongke3.add(sv.ui.lbl_caudangan);
	sv.ui.viewsoxo.add(sv.ui.view_thongke3);
sv.ui.icon_caudangan = Titanium.UI.createImageView({
		image : '/assets/images/icon/icon-soxo.png',
		width : Ti.App.size(120),
		height : Ti.App.size(130),
		touchEnabled:false
	});
	sv.ui.view_thongke3.add(sv.ui.icon_caudangan);
	///
	sv.ui.view_Vip = Ti.UI.createView({
		width : Ti.App.size(330),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.superwhite,
		left : Ti.App.size(370),
		top : Ti.App.size(660),backgroundSelectedColor:'blue'
	});
	sv.ui.lbl_vip = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Thống kê',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},bottom : Ti.App.size(30),
		touchEnabled:false
	});
	sv.ui.view_Vip.add(sv.ui.lbl_vip);
	sv.ui.viewsoxo.add(sv.ui.view_Vip);
	
	sv.ui.icon_vip = Titanium.UI.createImageView({
		image : '/assets/images/icon/icon-soxo.png',
		width : Ti.App.size(120),
		height : Ti.App.size(130),
		touchEnabled:false
	});
	sv.ui.view_Vip.add(sv.ui.icon_vip);
	
		sv.ui.view_soicau = Ti.UI.createView({
		width : Ti.App.size(330),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.superwhite,
		left : Ti.App.size(20),
		top : Ti.App.size(980),backgroundSelectedColor:'blue'
	});
	sv.ui.lbl_soicau = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Soi cầu',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},bottom : Ti.App.size(30),
		touchEnabled:false
	});
	sv.ui.view_soicau.add(sv.ui.lbl_soicau);
	sv.ui.viewsoxo.add(sv.ui.view_soicau);
	
	sv.ui.icon_soicau = Titanium.UI.createImageView({
		image : '/assets/images/icon/icon-soxo.png',
		width : Ti.App.size(120),
		height : Ti.App.size(130),
		touchEnabled:false
	});
	sv.ui.view_soicau.add(sv.ui.icon_soicau);
	
	
		sv.ui.view_somo = Ti.UI.createView({
		width : Ti.App.size(330),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.superwhite,
		left : Ti.App.size(370),
		top : Ti.App.size(980),backgroundSelectedColor:'blue'
	});
	sv.ui.lblsomo = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Sổ mơ',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},bottom : Ti.App.size(30),
		touchEnabled:false
	});
	sv.ui.view_somo.add(sv.ui.lblsomo);
	sv.ui.viewsoxo.add(sv.ui.view_somo);
	
	sv.ui.icon_somo = Titanium.UI.createImageView({
		image : '/assets/images/icon/icon-soxo.png',
		width : Ti.App.size(120),
		height : Ti.App.size(130),
		touchEnabled:false
	});
	sv.ui.view_somo.add(sv.ui.icon_somo);
	
	// sv.ui.winView1.add(sv.ui.viewsoxo);
	tao_event(sv);
	sv.ui.v_luachon.addEventListener('click', sv.fu.evt_luachon);
	sv.ui.v_ketqua.addEventListener('click', sv.fu.evt_kqsx);
	sv.ui.view_thongke1.addEventListener('click', sv.fu.evt_thongke1);
	sv.ui.view_Vip.addEventListener('click', sv.fu.evt_vip);
	sv.ui.view_soicau.addEventListener('click',sv.fu.evt_d);
	sv.ui.view_somo.addEventListener('click',sv.fu.evt_d);
	sv.ui.view_thongke2.addEventListener('click',sv.fu.evt_d);
	sv.ui.view_thongke3.addEventListener('click',sv.fu.evt_d);
};
function tao_event(sv) {
	sv.fu = {};
	//
	sv.fu.evt_d=function(e){
		alert('Đang xây dựng');
	};
	sv.fu.evt_vip = function(e) {
		sv.ui.wdRT = new (require('/ui_soxo/WindowRealTime'));
		sv.ui.wdRT.ui.Viewtong.open();
	};
	//
	sv.fu.evt_thongke1 = function(e) {
		sv.ui.wdSup = new (require('/ui_soxo/WindowSupport'));
		sv.ui.wdSup.ui.windowkqsx.open();
	};
	///
	sv.fu.evt_luachon = function(e) {
		sv.ui.wdchoose = new (require('/ui_soxo/WindowChoose'));
		sv.ui.wdchoose.ui.windowkqsx.open();
	};
	sv.fu.evt_kqsx = function(e) {
		sv.ui.wdRT = new (require('/ui_soxo/WindowRealTime'));
		sv.ui.wdRT.ui.Viewtong.open();
		// sv.ui.wdKQSX = new (require('/ui_soxo/WindowKQSX'));
		// sv.ui.wdKQSX.ui.windowkqsx.open();

	};
};
function remove_event(sv) {
	sv.removeAllEvent = function(e) {
		sv.ui.v_luachon.removeEventListener('click', sv.fu.evt_luachon);
		sv.ui.v_ketqua.removeEventListener('click', sv.fu.evt_kqsx);
	};
};
