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

	return sv.ui.Window;
};
/**
 * Khởi tạo biến
 */
function createVariable(sv) {
	sv.vari = {};
	sv.arr = {};

	sv.vari.SoGiai = 7;
	sv.vari.TopView = Ti.App.size(160);
	sv.vari.HeightView = Ti.App.size(120);
	sv.vari.LeftView = Ti.App.size(40);
	sv.vari.RightView = Ti.App.size(40);

	sv.arr.ViewDoi = [];
	sv.arr.LogoDoi = [];
	sv.arr.TenNuoc = [];
	sv.arr.LbTenNuoc = [];
	sv.arr.TenGiai = [];
	sv.arr.LbTenGiai = [];
	sv.arr.eventClickViewDoi = [];
	sv.arr.madoi = [];
}

function createUI(sv) {

	sv.ui.Window = Ti.UI.createWindow({
		//backgroundColor : Ti.App.Color.nauden,
		navBarHidden : true,
		keepScreenOn : true,
		top : 0,
	});

	sv.ui.ViewTong = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(120),
		left : 0,
		showVerticalScrollIndicator : 'true'
	});

	sv.ui.ViewHeader = Ti.UI.createView({
		backgroundImage : '/assets/images/icon/header.jpg',
		width : Ti.App.WidthScreen,
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
		text : 'BẢNG XẾP HẠNG',
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	for (var i = 0; i < sv.vari.SoGiai; i++) {
		sv.arr.ViewDoi[i] = Ti.UI.createView({
			backgroundColor : Ti.App.Color.white,
			height : sv.vari.HeightView,
			left : sv.vari.LeftView,
			right : sv.vari.RightView,
			top : Ti.App.size(40 + (120 * i) + (30 * i)), //+ Ti.App.size() +  Ti.App.size(),
			borderWidth : 1,
			borderColor : Ti.App.Color.magenta
		});

		sv.arr.LogoDoi[i] = Ti.UI.createImageView({
			borderWidth : 1,
			borderColor : Ti.App.Color.magenta,
			image : '/assets/images/icon/0' + (i + 1) + '.png',
			//backgroundImage : '/assets/images/icon/0' + i + 1 + '.png',
			top : Ti.App.size(0),
			left : Ti.App.size(0),
			width : sv.vari.HeightView,
			height : sv.vari.HeightView
		});

		sv.arr.TenNuoc[i] = Ti.UI.createView({
			top : Ti.App.size(0),
			right : Ti.App.size(0),
			left : sv.vari.HeightView,
			height : Ti.App.size(120 / 2)
		});

		sv.arr.LbTenNuoc[i] = Ti.UI.createLabel({
			text : '',
			font : {
				fontSize : Ti.App.size(32),
				fontWeight : 'bold',
				fontFamily : 'Aria'
			},
			color : 'black',
			left : Ti.App.size(30),
		});

		sv.arr.TenGiai[i] = Ti.UI.createView({
			bottom : Ti.App.size(0),
			right : Ti.App.size(0),
			left : sv.vari.HeightView,
			height : Ti.App.size(120 / 2)
		});

		sv.arr.LbTenGiai[i] = Ti.UI.createLabel({
			text : '',
			font : {
				fontSize : Ti.App.size(32),
				fontFamily : 'Aria'
			},
			color : 'black',
			left : Ti.App.size(30),
		});
	}

	createUI_Event(sv);

	for (var i = 0; i < sv.vari.SoGiai; i++) {
		sv.arr.ViewDoi[i].addEventListener('click', sv.arr.eventClickViewDoi[i]);
	}

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);

	sv.ui.ViewIconLeft.addEventListener('click', sv.fu.eventClickIconLeft);

	sv.ui.Window.add(sv.ui.ViewHeader);
	sv.ui.Window.add(sv.ui.ViewTong);

	sv.ui.ViewHeader.add(sv.ui.ViewIconLeft);
	sv.ui.ViewHeader.add(sv.ui.ViewLabelHeader);

	sv.ui.ViewIconLeft.add(sv.ui.IconLeft);
	sv.ui.ViewLabelHeader.add(sv.ui.LabelHeader);

	for (var i = 0; i < sv.vari.SoGiai; i++) {
		sv.arr.madoi[i] = i;
		sv.ui.ViewTong.add(sv.arr.ViewDoi[i]);
		sv.ui.ViewTong.removeViewDoi = function() {
			return sv.arr.ViewDoi[i].addEventListener('click', sv.arr.eventClickViewDoi[i]);
			;
		};

		sv.arr.ViewDoi[i].add(sv.arr.LogoDoi[i]);
		sv.arr.ViewDoi[i].add(sv.arr.TenNuoc[i]);
		sv.arr.ViewDoi[i].add(sv.arr.TenGiai[i]);

		sv.arr.TenNuoc[i].add(sv.arr.LbTenNuoc[i]);
		sv.arr.TenGiai[i].add(sv.arr.LbTenGiai[i]);

		if (i == 0) {
			sv.arr.LbTenNuoc[i].text = 'Anh';
			sv.arr.LbTenGiai[i].text = 'Premier League';
		}
		if (i == 1) {
			sv.arr.LbTenNuoc[i].text = 'Anh1';
			sv.arr.LbTenGiai[i].text = 'Premier League';
		}
		if (i == 2) {
			sv.arr.LbTenNuoc[i].text = 'Anh2';
			sv.arr.LbTenGiai[i].text = 'Premier League';
		}
		if (i == 3) {
			sv.arr.LbTenNuoc[i].text = 'Anh3';
			sv.arr.LbTenGiai[i].text = 'Premier League';
		}
		if (i == 4) {
			sv.arr.LbTenNuoc[i].text = 'Anh4';
			sv.arr.LbTenGiai[i].text = 'Premier League';
		}
		if (i == 5) {
			sv.arr.LbTenNuoc[i].text = 'Anh5';
			sv.arr.LbTenGiai[i].text = 'Premier League';
		}
		if (i == 6) {
			sv.arr.LbTenNuoc[i].text = 'Anh6';
			sv.arr.LbTenGiai[i].text = 'Premier League';
		}
	}
}

function createUI_Event(sv) {
	sv.fu = {};

	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.Window.close();
	};

	for (var i = 0; i < sv.vari.SoGiai; i++) {
		sv.arr.eventClickViewDoi[i] = function() {
			var newWindow = new (require('ui_bongda/BangXepHang'))();
			newWindow.open();
		};
	}

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.ViewIconLeft.removeEventListener('click', sv.fu.eventClickIconLeft);
		for (var i = 0; i < sv.vari.SoGiai; i++) {
			sv.arr.ViewDoi[i].addEventListener('click', sv.arr.eventClickViewDoi[i]);
		}

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};
}

