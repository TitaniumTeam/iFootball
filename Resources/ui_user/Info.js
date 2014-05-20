module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv);
	})();

	return sv.ui.windowkqsx;
};
/**
 * Khởi tạo biến
 */
function createVariable(sv) {
	sv.vari.consodachoi = new (require('/ui_user/ConSoDaChoi'));
	sv.vari.lichsugiaodich = new (require('/ui_user/LichSuGiaoDich'));
	sv.arr.datanapxu = [];
	sv.arr.event_napxu = [];
	sv.arr.title = [{
		title : 'Nạp 1000 xu',
		id : 0
	}, {
		title : 'Nạp 5000 xu',
		id : 1
	}, {
		title : 'Nạp 10000 xu',
		id : 2
	}];
}

function createUI(sv) {
	sv.ui.windowkqsx = Titanium.UI.createWindow({
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

	sv.ui.windowkqsx.add(sv.ui.ViewHeader);
	sv.ui.ViewHeader.add(sv.ui.ViewIconLeft);

	sv.ui.ViewIconLeft.add(sv.ui.IconLeft);

	sv.ui.ViewTong = Titanium.UI.createView({
		top : Ti.App.size(120),
		left : 0,
		width : Ti.App.size(720),
		height : Ti.UI.FILL,
	});
	sv.ui.scrollview = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(500),
		left : 0,
		width : Ti.App.size(720),
		height : Ti.UI.FILL,
		showVerticalScrollIndicator : true
	});

	sv.ui.viewAvatar = Titanium.UI.createView({
		top : 0,
		left : 0,
		height : Ti.App.size(500),
		backgroundColor : Ti.App.Color.red
	});
	sv.ui.circle = Titanium.UI.createImageView({
		image : '/assets/images/icon/xxxjav.png',
		top : Ti.App.size(60),
		width : Ti.App.size(420),
		height : Ti.App.size(420),
		left : Ti.App.size(150),
		zIndex : 10
	});
	sv.ui.Avatar = Ti.UI.createImageView({
		image : '/assets/images/icon/avatar-defaut.png',
		top : Ti.App.size(45),
		// right : Ti.App.size(250),
		left : Ti.App.size(265),
		//bottom : Ti.App.size(280),
		height : Ti.App.size(190),
		width : Ti.App.size(190),
		zIndex : 10
	});
	sv.ui.LabelName = Ti.UI.createLabel({
		text : 'LinhSon93',
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold',
		},
		// top : Ti.App.size(260),
		bottom : Ti.App.size(0),
		color : Ti.App.Color.superwhite,
		top : Ti.App.size(20)
	});

	sv.ui.LabelThongTin = Ti.UI.createLabel({
		text : 'Siêu pro vừa đi chơi - ID: 9999999999',
		font : {
			fontSize : Ti.App.size(25),
		},
		top : Ti.App.size(300),
		bottom : Ti.App.size(170),
		color : Ti.App.Color.superwhite
	});

	sv.ui.ViewBut = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-5.png',
		top : Ti.App.size(325),
		right : Ti.App.size(25),
		left : Ti.App.size(665),
		bottom : Ti.App.size(145),
	});

	sv.ui.ViewThongSo = Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		opacity : 0.3,
		height : Ti.App.size(120),
		bottom : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
		top : Ti.App.size(380),
		zIndex : 0
	});
	sv.ui.Viewcontain = Ti.UI.createView({
		height : Ti.App.size(120),
		bottom : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
		top : Ti.App.size(380),
		zIndex : 1,
		backgroundColor : 'transparent'
	});
	sv.ui.vThongso1 = Titanium.UI.createView({
		width : Ti.App.size(235),
		height : Ti.App.size(120),
		left : 0,
		top : 0
	});
	sv.ui.Viewcontain.add(sv.ui.vThongso1);
	sv.ui.lbltest = Titanium.UI.createLabel({
		text : "Tỷ lệ trúng loto",
		color : Ti.App.Color.white,
		font : {
			fontSize : Ti.App.size(25)
		},
		top : Ti.App.size(10),
		textAlign : 'center'
	});
	sv.ui.lbl_tyle = Titanium.UI.createLabel({
		top : Ti.App.size(60),
		backgroundColor : Ti.App.Color.nauden,
		borderRadius : 5,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(25)
		},
		text : '20%',
		color : Ti.App.Color.superwhite,
		width : Ti.App.size(135),
		height : Ti.App.size(40)
	});
	sv.ui.vThongso1.add(sv.ui.lbltest);
	sv.ui.vThongso1.add(sv.ui.lbl_tyle);
	//
	sv.ui.vThongso2 = Titanium.UI.createView({
		width : Ti.App.size(235),
		height : Ti.App.size(120),
		left : Ti.App.size(235),
		top : 0
	});
	sv.ui.Viewcontain.add(sv.ui.vThongso2);
	sv.ui.lbl_soxu = Titanium.UI.createLabel({
		text : "Số xu hiện tại",
		color : Ti.App.Color.white,
		font : {
			fontSize : Ti.App.size(25)
		},
		top : Ti.App.size(10),
		textAlign : 'center'
	});
	sv.ui.lbl_xu = Titanium.UI.createLabel({
		top : Ti.App.size(60),
		backgroundColor : Ti.App.Color.nauden,
		borderRadius : 5,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(25)
		},
		text : '10.000Xu',
		color : Ti.App.Color.superwhite,
		width : Ti.App.size(135),
		height : Ti.App.size(40)
	});
	sv.ui.vThongso2.add(sv.ui.lbl_soxu);
	sv.ui.vThongso2.add(sv.ui.lbl_xu);
	//
	sv.ui.vThongso3 = Titanium.UI.createView({
		width : Ti.App.size(235),
		height : Ti.App.size(120),
		left : Ti.App.size(470),
		top : 0
	});
	sv.ui.Viewcontain.add(sv.ui.vThongso3);
	sv.ui.tyletrungdb = Titanium.UI.createLabel({
		text : "Tỷ lệ trúng đặc biệt",
		color : Ti.App.Color.white,
		font : {
			fontSize : Ti.App.size(25)
		},
		top : Ti.App.size(10),
		textAlign : 'center'
	});
	sv.ui.tyle_db = Titanium.UI.createLabel({
		top : Ti.App.size(60),
		backgroundColor : Ti.App.Color.nauden,
		borderRadius : 5,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(25)
		},
		text : '0%',
		color : Ti.App.Color.superwhite,
		width : Ti.App.size(135),
		height : Ti.App.size(40)
	});
	sv.ui.vThongso3.add(sv.ui.tyletrungdb);
	sv.ui.vThongso3.add(sv.ui.tyle_db);

	//tao view ung dung
	sv.ui.ViewUngDung = Ti.UI.createView({
		height : Ti.UI.SIZE,
		top : 0,
		left : Ti.App.size(20),
		right : Ti.App.size(20),
	});

	sv.ui.UngDung = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		height : Ti.App.size(495),
		top : Ti.App.size(35),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
		borderWidth : Ti.App.size(1),
		borderColor : Ti.App.Color.magenta,
	});

	sv.ui.Row1 = Ti.UI.createView({
		borderWidth : Ti.App.size(1),
		borderColor : Ti.App.Color.magenta,
		height : Ti.App.size(99),
		top : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
	});

	sv.ui.ViewIconRow1 = Ti.UI.createView({
		bottom : Ti.App.size(0),
		top : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(580),
	});

	sv.ui.IconRow1 = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-info-1.png',
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(40),
		right : Ti.App.size(40),
	});

	sv.ui.LabelRow1 = Ti.UI.createLabel({
		text : 'Nạp Xu',
		font : {
			fontSize : Ti.App.size(20),
			textAlign : 'left',
			fontFamily : 'Aria'
		},
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(100),
		right : Ti.App.size(0),
		color : 'black'
	});

	sv.ui.Row2 = Ti.UI.createView({
		borderWidth : Ti.App.size(1),
		borderColor : Ti.App.Color.magenta,
		height : Ti.App.size(99),
		top : Ti.App.size(99),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
	});

	sv.ui.ViewIconRow2 = Ti.UI.createView({
		bottom : Ti.App.size(0),
		top : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(580),
	});

	sv.ui.IconRow2 = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-info-2.png',
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(30),
		right : Ti.App.size(30),
	});

	sv.ui.LabelRow2 = Ti.UI.createLabel({
		text : 'Con số đã chơi',
		font : {
			fontSize : Ti.App.size(20),
			textAlign : 'left',
			fontFamily : 'Aria'
		},
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(100),
		right : Ti.App.size(0),
		color : 'black'
	});

	sv.ui.Row3 = Ti.UI.createView({
		borderWidth : Ti.App.size(1),
		borderColor : Ti.App.Color.magenta,
		height : Ti.App.size(99),
		top : Ti.App.size(198),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
	});

	sv.ui.ViewIconRow3 = Ti.UI.createView({
		bottom : Ti.App.size(0),
		top : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(580),
	});

	sv.ui.IconRow3 = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-info-3.png',
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(30),
		right : Ti.App.size(30),
	});

	sv.ui.LabelRow3 = Ti.UI.createLabel({
		text : 'Lịch sử giao dịch',
		font : {
			fontSize : Ti.App.size(20),
			textAlign : 'left',
			fontFamily : 'Aria'
		},
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(100),
		right : Ti.App.size(0),
		color : 'black'
	});

	sv.ui.Row4 = Ti.UI.createView({
		borderWidth : Ti.App.size(1),
		borderColor : Ti.App.Color.magenta,
		height : Ti.App.size(99),
		top : Ti.App.size(297),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
	});

	sv.ui.ViewIconRow4 = Ti.UI.createView({
		bottom : Ti.App.size(0),
		top : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(580),
	});

	sv.ui.IconRow4 = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-info-4.png',
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(30),
		right : Ti.App.size(30),
	});

	sv.ui.LabelRow4 = Ti.UI.createLabel({
		text : 'Hòm thư',
		font : {
			fontSize : Ti.App.size(20),
			textAlign : 'left',
			fontFamily : 'Aria'
		},
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(100),
		right : Ti.App.size(0),
		color : 'black'
	});

	sv.ui.Row5 = Ti.UI.createView({
		borderWidth : Ti.App.size(1),
		borderColor : Ti.App.Color.magenta,
		height : Ti.App.size(99),
		top : Ti.App.size(396),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
	});

	sv.ui.ViewIconRow5 = Ti.UI.createView({
		bottom : Ti.App.size(0),
		top : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(580),
	});

	sv.ui.IconRow5 = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-info-5.png',
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(30),
		right : Ti.App.size(30),
	});

	sv.ui.LabelRow5 = Ti.UI.createLabel({
		text : 'Nâng cấp tài khoản VIP',
		font : {
			fontSize : Ti.App.size(20),
			textAlign : 'left',
			fontFamily : 'Aria'
		},
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(100),
		right : Ti.App.size(0),
		color : 'black'
	});

	sv.ui.scrollview.add(sv.ui.ViewUngDung);
	sv.ui.ViewTong.add(sv.ui.scrollview);
	sv.ui.ViewTong.add(sv.ui.viewAvatar);
	// sv.ui.viewAvatar.add(sv.ui.Avatar);
	sv.ui.viewAvatar.add(sv.ui.LabelName);
	sv.ui.viewAvatar.add(sv.ui.LabelThongTin);
	sv.ui.viewAvatar.add(sv.ui.ViewBut);
	sv.ui.viewAvatar.add(sv.ui.ViewThongSo);
	sv.ui.viewAvatar.add(sv.ui.Viewcontain);
	sv.ui.ViewUngDung.add(sv.ui.UngDung);

	sv.ui.UngDung.add(sv.ui.Row1);
	sv.ui.UngDung.add(sv.ui.Row2);
	sv.ui.UngDung.add(sv.ui.Row3);
	sv.ui.UngDung.add(sv.ui.Row4);
	sv.ui.UngDung.add(sv.ui.Row5);

	sv.ui.Row1.add(sv.ui.ViewIconRow1);
	sv.ui.Row1.add(sv.ui.LabelRow1);

	sv.ui.Row2.add(sv.ui.ViewIconRow2);
	sv.ui.Row2.add(sv.ui.LabelRow2);

	sv.ui.Row3.add(sv.ui.ViewIconRow3);
	sv.ui.Row3.add(sv.ui.LabelRow3);

	sv.ui.Row4.add(sv.ui.ViewIconRow4);
	sv.ui.Row4.add(sv.ui.LabelRow4);

	sv.ui.Row5.add(sv.ui.ViewIconRow5);
	sv.ui.Row5.add(sv.ui.LabelRow5);

	sv.ui.ViewIconRow1.add(sv.ui.IconRow1);
	sv.ui.ViewIconRow2.add(sv.ui.IconRow2);
	sv.ui.ViewIconRow3.add(sv.ui.IconRow3);
	sv.ui.ViewIconRow4.add(sv.ui.IconRow4);
	sv.ui.ViewIconRow5.add(sv.ui.IconRow5);
	sv.ui.windowkqsx.add(sv.ui.ViewTong);
	sv.ui.windowkqsx.add(sv.ui.circle);
	nap_xu(sv);
	sv.ui.windowkqsx.add(sv.ui.view_napxu);
	createUI_Event(sv);
	sv.ui.ViewIconLeft.addEventListener('click', sv.fu.event_btnclose);
	sv.ui.windowkqsx.addEventListener('open', sv.fu.event_openwin);
	sv.ui.windowkqsx.addEventListener('close', sv.fu.event_closewin);
	sv.ui.Row2.addEventListener('click', sv.fu.event_consodachoi);
	sv.ui.Row3.addEventListener('click', sv.fu.event_lichsugiaodich);
	sv.ui.Row1.addEventListener('click', sv.fu.event_napxu);
}

function createUI_Event(sv) {
	sv.fu.event_napxu = function(e) {
		sv.ui.view_napxu.visible = true;
	};
	sv.fu.event_consodachoi = function(e) {
		sv.vari.consodachoi.open();
	};
	sv.fu.event_lichsugiaodich = function(e) {
		sv.vari.lichsugiaodich.open();
	};
	sv.fu.event_btnclose = function(e) {
		sv.ui.windowkqsx.close();
	};
	sv.fu.event_openwin = function(e) {
		Ti.API.info('open info');
	};
	sv.fu.event_closewin = function(e) {
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

function nap_xu(sv) {
	sv.ui.view_napxu = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.UI.FILL,
		zIndex : 10,
		top : 0,
		left : 0,
		backgroundColor : 'transparent'
	});
	sv.ui.view_napxu.visible = false;
	sv.ui.view_napxu.add(Ti.UI.createView({
		width : '100%',
		height : '100%',
		zIndex : 0,
		backgroundColor : Ti.App.Color.nauden,
		opacity : 0.4
	}));
	sv.ui.vTong = Ti.UI.createView({
		width : Ti.App.size(700),
		height : Ti.UI.SIZE,
		zIndex : 10,
		backgroundColor : Ti.App.Color.superwhite
	});
	sv.ui.label = Ti.UI.createLabel({
		backgroundColor : Ti.App.Color.magenta,
		left : 0,
		width : Ti.UI.FILL,
		height : Ti.App.size(150),
		top : 0,
		color : Ti.App.Color.nauden,
		textAlign : 'center',
		text : 'Ban muon nap',
		font : {
			fontSize : Ti.App.size(40)
		}
	});
	sv.ui.vTong.add(sv.ui.label);
	for (var i = 0; i < 3; i++) {
		sv.ui.rows = Titanium.UI.createTableViewRow({
			title : sv.arr.title[i].title,
			id : sv.arr.title[i].id,
			height : Ti.App.size(50),
			backgroundColor : Ti.App.Color.xanhnhat,
			selected : false,
		});
		sv.arr.datanapxu.push(sv.ui.rows);
	}

	sv.ui.table_napxu = Titanium.UI.createTableView({
		data : sv.arr.datanapxu,
		top : Ti.App.size(150),
		height : Ti.UI.SIZE,
		separatorColor : Ti.App.Color.nauden
	});
	sv.ui.table_napxu.addEventListener('click', function(e) {
		if (e.rowData.selected) {
			e.row.hasCheck = false;
			Ti.API.info('row has click');
		} else {
			Titanium.API.info('not selected clicked');
			e.row.hasCheck = true;
		}
		e.rowData.selected = !e.rowData.selected;
	});
	sv.ui.vTong.add(sv.ui.table_napxu);
	sv.ui.view_napxu.add(sv.ui.vTong);
};
