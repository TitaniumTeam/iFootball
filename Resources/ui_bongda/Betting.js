module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		tao_bien(sv);
		tao_ui(sv);
	})();

	return sv.ui.Window;
};
function tao_bien(sv) {
	sv.vari = {};
	sv.arr = {};
	sv.vari.view_keo = require('/ui_bongda/view_keo');
	sv.arr.BtCaCuoc = [];
	sv.arr.LbCaCuoc = [];
	sv.arr.eventClickBtCaCuoc = [];
	sv.arr.param1 = [{
		tg : 55,
		tendoi : ["Manchester", "Chealse"],
		tyle1 : ["1.5", "1.09", "0.84"],
		tyle2 : ["1.5", "1.09", "0.84", "u"],
		tyle3 : ["1.5", "1.09", "0.84"]
	}, {
		tg : 55,
		tendoi : ["Manchester", "Chealse"],
		tyle1 : ["1.5", "1.09", "0.84"],
		tyle2 : ["1.5", "1.09", "0.84", "u"],
		tyle3 : ["1.5", "1.09", "0.84"]
	}, {
		tg : 55,
		tendoi : ["Manchester", "Chealse"],
		tyle1 : ["1.5", "1.09", "0.84"],
		tyle2 : ["1.5", "1.09", "0.84", "u"],
		tyle3 : ["1.5", "1.09", "0.84"]
	}];
};
function tao_ui(sv) {
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
		backgroundColor : Ti.App.Color.red,
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
		text : 'CÁ CƯỢC',
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.vChua = Ti.UI.createView({
		top : Ti.App.size(20),
		left : 0,
		right : 0,
		backgroundColor : 'transparent',
		height : Ti.UI.SIZE
	});
	for (var i = 0; i < 3; i++) {
		sv.arr.BtCaCuoc[i] = Ti.UI.createView({
			backgroundColor : Ti.App.Color.xanhnhat,
			top : Ti.App.size(500 * i + 375),
			height : Ti.App.size(100),
			right : Ti.App.size(40),
			left : Ti.App.size(40)
		});

		sv.arr.LbCaCuoc[i] = Ti.UI.createLabel({
			text : 'CÁ CƯỢC NGAY',
			font : {
				fontSize : Ti.App.size(35),
				fontFamily : 'Aria',
			},
			color : Ti.App.Color.white,
		});

	}

	createUI_Event(sv);

	for (var i = 0; i < 3; i++) {
		sv.arr.BtCaCuoc[i].addEventListener('click', sv.arr.eventClickBtCaCuoc[i]);
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

	sv.ui.ViewTong.add(sv.ui.vChua);
	for (var i = 0; i < 3; i++) {
		sv.ui.vTong = new sv.vari.view_keo(Ti.App.size(500 * i));
		sv.ui.vTong.setParam(sv.arr.param1[i]);
		sv.ui.vChua.add(sv.ui.vTong);
		sv.ui.vChua.add(sv.arr.BtCaCuoc[i]);
		sv.arr.BtCaCuoc[i].add(sv.arr.LbCaCuoc[i]);
	};
}

function createUI_Event(sv) {
	sv.fu = {};

	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.Window.close();
	};

	for (var i = 0; i < 3; i++) {
		sv.arr.eventClickBtCaCuoc[i] = function() {
			var newWindow = new (require('ui_bongda/BettingContent'))();
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
		for (var i = 0; i < 3; i++) {
			sv.arr.BtCaCuoc[i].removeEventListener('click', sv.arr.eventClickBtCaCuoc[i]);
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

