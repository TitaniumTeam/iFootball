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
		backgroundColor : Ti.App.Color.red_press
	});
	sv.ui.circle = Titanium.UI.createView({
		backgroundImage : '/assets/images/icon/xxxjav.png',
		top : Ti.App.size(60),
		width : Ti.App.size(320),
		height : Ti.App.size(320),
		zIndex : 10
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
		// top : Ti.App.size(260),
		color : Ti.App.Color.superwhite,
		top : Ti.App.size(400)
	});
	sv.vari.db = Ti.Database.open('userinfo');
	sv.vari.sql=sv.vari.db.execute("SELECT * FROM SaveInfo");
	if(sv.vari.sql.isValidRow()){
		sv.ui.LabelName.text=sv.vari.sql.fieldByName("username");
		sv.vari.sql.close();
		sv.vari.db.close();
	}
	else{
		sv.ui.LabelName.text="USER FREE";
	}
	sv.ui.LabelThongTin = Ti.UI.createLabel({
		text : 'Siêu pro vừa đi chơi - ID: 9999999999',
		font : {
			fontSize : Ti.App.size(25),
		},
		top : Ti.App.size(450),
		color : Ti.App.Color.superwhite
	});

	sv.ui.ViewBut = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-5.png',
		top : Ti.App.size(450),
		right : Ti.App.size(25),
		left : Ti.App.size(665),
	});

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
	sv.ui.circle.add(sv.ui.Avatar);
	sv.ui.ViewTong.add(sv.ui.LabelName);
	sv.ui.ViewTong.add(sv.ui.LabelThongTin);
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
	nap_xu(sv);
	createUI_Event(sv);
	sv.ui.Row2.addEventListener('click', sv.fu.event_consodachoi);
	sv.ui.Row3.addEventListener('click', sv.fu.event_lichsugiaodich);
	sv.ui.Row1.addEventListener('click', sv.fu.event_napxu);
}

function createUI_Event(sv) {
	sv.fu.event_napxu = function(e) {
		sv.vari.PopUpNapTien = new (require('/ui_user/PopUpNapTien'))();
		sv.vari.PopUpNapTien.open();
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
