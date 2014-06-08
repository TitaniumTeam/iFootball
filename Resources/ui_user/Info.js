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

	return sv;
};
/**
 * Khởi tạo biến
 */
function createVariable(sv) {
	sv.vari.consodachoi = new (require('/ui_user/ConSoDaChoi'))();
	sv.vari.lichsugiaodich = new (require('/ui_user/LichSuGiaoDich'))();
	sv.arr.naptien = ["Nạp tiền bằng mã thẻ", "Nạp tiền bằng sms", "Thoát"];
	sv.vari.PopUpNapTien = require('/ui_user/PopUpNapTien');
}

function createUI(sv) {

	sv.ui.ViewTong = Titanium.UI.createView({
		top : Ti.App.size(0),
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
	sv.ui.circle = Titanium.UI.createView({
		backgroundImage : '/assets/images/icon/xxxjav.png',
		top : Ti.App.size(30),
		width : Ti.App.size(320),
		height : Ti.App.size(320),
	});
	sv.ui.Avatar = Ti.UI.createImageView({
		image : '/assets/images/icon/avatar-defaut.png',
		height : Ti.App.size(150),
		width : Ti.App.size(150),
		zIndex : 10
	});

	sv.ui.LabelName = Ti.UI.createLabel({
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.superwhite,
		top : Ti.App.size(350),
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});
	sv.ui.LabelThongTin = Ti.UI.createLabel({
		font : {
			fontSize : Ti.App.size(25),
		},
		top : Ti.App.size(400),
		color : Ti.App.Color.superwhite,
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});
	sv.ui.LabelThongTin_Tien = Ti.UI.createLabel({
		font : {
			fontSize : Ti.App.size(25),
		},
		top : Ti.App.size(450),
		color : Ti.App.Color.superwhite,
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});
	sv.vari.db = Ti.Database.open('userinfo');
	sv.vari.sql = sv.vari.db.execute("SELECT * FROM SaveInfo");
	sv.ui.LabelName.text = sv.vari.sql.fieldByName("username");

	if (sv.vari.sql.fieldByName("type") == "1") {
		sv.ui.LabelThongTin.text = "Tài khoản VIP ";
		sv.ui.LabelThongTin_Tien.text = "Số tiền trong tài khoản :" + sv.vari.sql.fieldByName("balance");
	} else {
		sv.ui.LabelThongTin.text = "Tài khoản thường";
		sv.ui.LabelThongTin_Tien.text = "Số tiền trong tài khoản :" + sv.vari.sql.fieldByName("balance");
	}

	sv.vari.sql.close();
	sv.vari.db.close();
	sv.ui.ViewBut = Titanium.UI.createView({
		top : Ti.App.size(400),
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
		width : Ti.App.size(100),
		height : Ti.App.size(80),
		backgroundColor : 'transparent',
		right : Ti.App.size(20)
	});
	sv.ui.iconBut = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-5.png',
		width : Ti.App.size(30),
		height : Ti.App.size(30),
		touchEnabled : false
	});
	sv.ui.ViewBut.add(sv.ui.iconBut);
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
	/////
	sv.ui.opt_dialog = Titanium.UI.createOptionDialog({
		title : "Lựa chọn cách thức",
		options : sv.arr.naptien
	});
	/////
	sv.ui.scrollview.add(sv.ui.ViewUngDung);
	sv.ui.ViewTong.add(sv.ui.scrollview);
	sv.ui.ViewTong.add(sv.ui.viewAvatar);
	sv.ui.circle.add(sv.ui.Avatar);
	sv.ui.ViewTong.add(sv.ui.LabelName);
	sv.ui.ViewTong.add(sv.ui.LabelThongTin);
	sv.ui.ViewTong.add(sv.ui.LabelThongTin_Tien);
	sv.ui.ViewTong.add(sv.ui.ViewBut);
	sv.ui.ViewTong.add(sv.ui.circle);
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
	createUI_Event(sv);
	sv.ui.Row2.addEventListener('click', sv.fu.event_consodachoi);
	sv.ui.Row3.addEventListener('click', sv.fu.event_lichsugiaodich);
	sv.ui.Row1.addEventListener('click', sv.fu.event_napxu);
	sv.ui.Row5.addEventListener('click', sv.fu.event_nangcapvip);
	sv.ui.opt_dialog.addEventListener('click', sv.fu.event_optiondialog);
	sv.ui.ViewBut.addEventListener('click', sv.fu.event_changeinfo);
}

function createUI_Event(sv) {
	sv.fu.event_changeinfo = function(e) {
		sv.vari.changeinfo = new (require('/ui_user/Change_pass'));
		sv.ui.ViewTong.removeAllChildren();
		sv.ui.ViewTong.add(sv.vari.changeinfo.ui.ViewTong);
	};
	sv.fu.event_nangcapvip = function(e) {
		sv.vari.popup_vip = new (require('/ui_user/PopUpNangCap'))();
		sv.vari.popup_vip.open({
			modal : Ti.Platform.osname == 'android' ? true : false
		});
	};
	sv.fu.event_napxu = function(e) {
		sv.ui.opt_dialog.show();
	};
	sv.fu.event_optiondialog = function(e) {
		if (e.index == 0) {
			sv.vari.wdnaptien = new sv.vari.PopUpNapTien();
			sv.vari.wdnaptien.open({
				modal : Ti.Platform.osname == 'android' ? true : false
			});
			Ti.API.info('click' + e.index);
			// sv.vari.PopUpNapTien = new (require('/ui_user/PopUpNapTien'))();
			// sv.vari.PopUpNapTien.open({
			// modal : Ti.Platform.osname == 'android' ? true : false
			// });
		}
		if (e.index == 1) {
			var showSmsDialog = new (require('/ui-controller/showSmsDialog'))('88xx', "NAPXU");
		}
		if (e.index == 2) {
			sv.ui.opt_dialog.hide();
		}
	};
	sv.fu.event_consodachoi = function(e) {
		sv.ui.ViewTong.removeAllChildren();
		remove_sukien(sv);
		sv.ui.ViewTong.add(sv.vari.consodachoi.ui.ViewTong);
	};
	sv.fu.event_lichsugiaodich = function(e) {
		sv.ui.ViewTong.removeAllChildren();
		remove_sukien(sv);
		sv.ui.ViewTong.add(sv.vari.lichsugiaodich.ui.ViewTong);
	};
	sv.fu.event_openwin = function(e) {
		Ti.API.info('open info');
	};
	sv.fu.event_closewin = function(e) {
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
	};
}

function remove_sukien(sv) {
	sv.ui.Row2.removeEventListener('click', sv.fu.event_consodachoi);
	sv.ui.Row3.removeEventListener('click', sv.fu.event_lichsugiaodich);
	sv.ui.Row1.removeEventListener('click', sv.fu.event_napxu);
	Ti.API.info('Closed window, sv=' + sv);
};

