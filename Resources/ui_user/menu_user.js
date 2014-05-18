module.exports = function() {
	var sv = {};
	sv.ui = {};
	sv.vari = {};
	sv.arr = {};
	sv.fu = {};
	(function() {
		tao_bien(sv);
		tao_ui(sv);
		tao_event(sv);
		remove_event(sv);
	})();
	return sv;
};
///tao bien
function tao_bien(sv) {
	sv.vari.SoLuongMenu = 2;
	sv.arr.ParamTen = ['Thông tin cá nhân', 'Thay đổi thông tin'];
	sv.arr.ParamIcon = ['/assets/images/icon/user-icon.png'];
	sv.arr.eventClickViewMenu = [];
	sv.arr.ViewMenu = [];
	sv.arr.ViewTenMenu = [];
	sv.arr.TenMenu = [];
	sv.arr.IconMenu = [];
	sv.vari.LeftMenu = Ti.App.size(40);
	sv.vari.TopMenu = Ti.App.size(20);
};

/// tao ui
function tao_ui(sv) {
	sv.ui.winView3 = Ti.UI.createScrollView({
		top : 0,
		height : Ti.App.size(1088),
		backgroundColor : Ti.App.Color.magenta,
		bottom : Ti.App.size(192)
	});
	sv.ui.ViewTong = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.UI.FILL,
		backgroundColor : 'transparent',
		top : 0,
		bottom : Ti.App.size(212)
	});

	for (var i = 0; i < sv.vari.SoLuongMenu; i++) {

		if ((i % 2) == 0) {
			sv.arr.ViewMenu[i] = Ti.UI.createView({
				width : Ti.App.size(300),
				height : Ti.App.size(300),
				backgroundColor : Ti.App.Color.white,
				left : sv.vari.LeftMenu,
				top : sv.vari.TopMenu,
				backgroundSelectedColor : Ti.App.Color.xanhnhat
			});
			sv.vari.LeftMenu = Ti.App.size(40 + ((i + 1) % 2) * 40 + ((i + 1) % 2) * 300);
		} else {
			sv.arr.ViewMenu[i] = Ti.UI.createView({
				width : Ti.App.size(300),
				height : Ti.App.size(300),
				backgroundColor : Ti.App.Color.white,
				left : sv.vari.LeftMenu,
				top : sv.vari.TopMenu,
				backgroundSelectedColor : Ti.App.Color.xanhnhat
			});
			sv.vari.TopMenu = Ti.App.size(20 + ((i + 1) / 2) * 300 + ((i + 1) / 2) * 20);
			sv.vari.LeftMenu = Ti.App.size(40 + ((i + 1) % 2) * 40 + ((i + 1) % 2) * 300);
		}

		sv.arr.IconMenu[i] = Ti.UI.createImageView({
			width : Ti.App.size(180),
			top : Ti.App.size(20),
			height : Ti.App.size(180),
			left : Ti.App.size(60),
			image : sv.arr.ParamIcon[0],
			touchEnabled : false
		});

		sv.arr.ViewTenMenu[i] = Ti.UI.createView({
			width : Ti.App.size(300),
			top : Ti.App.size(225),
			height : Ti.App.size(75),
			left : Ti.App.size(0),
			touchEnabled : false
		});

		sv.arr.TenMenu[i] = Ti.UI.createLabel({
			text : sv.arr.ParamTen[i],
			color : Ti.App.Color.nauden,
			font : {
				fontSize : Ti.App.size(30)
			},
			touchEnabled : false
		});

	}

	tao_event(sv);

	for (var i = 0; i < sv.vari.SoLuongMenu; i++) {
		sv.arr.ViewMenu[i].addEventListener('click', sv.arr.eventClickViewMenu[i]);
	}

	for (var i = 0; i < sv.vari.SoLuongMenu; i++) {
		sv.ui.ViewTong.add(sv.arr.ViewMenu[i]);
		sv.arr.ViewMenu[i].add(sv.arr.IconMenu[i]);
		sv.arr.ViewMenu[i].add(sv.arr.ViewTenMenu[i]);
		sv.arr.ViewTenMenu[i].add(sv.arr.TenMenu[i]);
	}
	sv.ui.winView3.add(sv.ui.ViewTong);
};
function tao_event(sv) {
	for (var i = 0; i < sv.vari.SoLuongMenu; i++) {
		if (i == 0) {
			sv.arr.eventClickViewMenu[i] = function(e) {
				var newWindow = new (require('ui_user/Info'))();
				newWindow.open();
			};
		}

		if (i == 1) {
			sv.arr.eventClickViewMenu[i] = function(e) {
				var newWindow = new (require('ui_user/ThongTinCaNhan'))();
				newWindow.open();
			};
		}

	}
};
function remove_event(sv) {
	sv.removeAllEvent = function(e) {
		sv.removeAllEvent = function(e) {
			for (var i = 0; i < sv.vari.SoLuongMenu; i++) {
				sv.arr.ViewMenu[i].removeEventListener('click', sv.arr.eventClickViewMenu[i]);
			}
			Ti.API.info('Đã remove xong');
		};
	};
};
