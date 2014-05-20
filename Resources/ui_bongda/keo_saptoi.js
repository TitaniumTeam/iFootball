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
	sv.arr.param1 = [{
		tg : 55,
		tendoi : ["Manchester", "Chealse"],
		tyle1 : ["1.5", "1.09", "0.84"],
		tyle2 : ["1.5", "1.09", "0.84", "u"],
		tyle3 : ["1.5", "1.09", "0.84"]
	}];
	sv.arr.param2 = [{
		tg : 15,
		tendoi : ["Liverpool", "Ha Noi T&T"],
		tyle1 : ["1.5", "1.09", "0.84"],
		tyle2 : ["1.5", "1.09", "0.84", "u"],
		tyle3 : ["1.5", "1.09", "0.84"]
	}];
	sv.arr.param3 = [{
		tg : 45,
		tendoi : ["RealMarid", "Becelona"],
		tyle1 : ["1.5", "1.09", "0.84"],
		tyle2 : ["1.5", "1.09", "0.84", "u"],
		tyle3 : ["1.5", "1.09", "0.84"]
	}];
	sv.arr.dataVTong = [];

};
function tao_ui(sv) {

	sv.ui.Window = Ti.UI.createWindow({
		//backgroundColor : Ti.App.Color.nauden,
		navBarHidden : true,
		keepScreenOn : true,
		top : 0,
		orientationModes : [Ti.UI.PORTRAIT],
	});

	sv.ui.ViewTong = Titanium.UI.createView({
		top : Ti.App.size(120),
		left : 0,
		width : Ti.App.size(720),
		height : Ti.UI.SIZE
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
		text : 'KÈO',
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.vHeader = Titanium.UI.createView({
		top : 0,
		left : 0,
		width : Ti.App.size(720),
		height : Ti.App.size(118),
		backgroundColor : 'red'
	});
	sv.ui.ngay = Ti.UI.createView({
		top : Ti.App.size(28),
		width : Ti.App.size(640),
		height : Ti.App.size(80),
		borderColor : Ti.App.Color.superwhite,
		borderWidth : 1,
		borderRadius : 3,
		backgroundColor : 'transparent'
	});
	sv.ui.vHeader.add(sv.ui.ngay);
	sv.ui.lbl_hqa = Ti.UI.createLabel({
		backgroundColor : 'transparent',
		text : 'Hôm qua',
		backgroundSelectedColor : Ti.App.Color.superwhite,
		color : Ti.App.Color.superwhite,
		textAlign : 'center',
		width : Ti.App.size(220),
		left : 0,
		font : {
			fontSize : Ti.App.size(30)
		},
		height : Ti.App.size(80),
		highlightedColor : 'yellow'
	});
	sv.ui.ngay.add(sv.ui.lbl_hqa);

	sv.ui.lbl_hnay = Ti.UI.createLabel({
		backgroundColor : Ti.App.Color.superwhite,
		text : 'Hôm nay',
		backgroundSelectedColor : Ti.App.Color.superwhite,
		color : Ti.App.Color.nauden,
		textAlign : 'center',
		width : Ti.App.size(220),
		left : Ti.App.size(220),
		font : {
			fontSize : Ti.App.size(30)
		},
		height : Ti.App.size(80),
		highlightedColor : 'yellow'
	});
	sv.ui.ngay.add(sv.ui.lbl_hnay);

	sv.ui.lbl_mai = Ti.UI.createLabel({
		backgroundColor : 'transparent',
		text : 'Ngày mai',
		backgroundSelectedColor : Ti.App.Color.superwhite,
		color : Ti.App.Color.superwhite,
		textAlign : 'center',
		width : Ti.App.size(220),
		font : {
			fontSize : Ti.App.size(30)
		},
		right : 0,
		height : Ti.App.size(80),
		highlightedColor : 'yellow'
	});
	sv.ui.ngay.add(sv.ui.lbl_mai);

	sv.ui.ViewTong.add(sv.ui.vHeader);

	////////
	sv.ui.scrollview = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(118),
		left : 0,
		showVerticalScrollIndicator : true,
		layout : 'vertical',
		height : Ti.UI.FILL,
		width : Ti.UI.FILL
	});
	sv.ui.ViewTong.add(sv.ui.scrollview);
	sv.ui.vChua = Ti.UI.createView({
		top : Ti.App.size(20),
		left : 0,
		right : 0,
		backgroundColor : 'transparent',
		height : Ti.UI.FILL,
		width : Ti.UI.FILL
	});
	sv.ui.scrollview.add(sv.ui.vChua);
	for (var i = 0; i < 10; i++) {
		sv.ui.vTong = new sv.vari.view_keo(Ti.App.size(400 * i));
		sv.ui.vChua.add(sv.ui.vTong);
		sv.arr.dataVTong.push(sv.ui.vTong);
		sv.arr.dataVTong[i].setParam(sv.arr.param2[0]);
	};
	tao_event(sv);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);

	sv.ui.ViewIconLeft.addEventListener('click', sv.fu.eventClickIconLeft);

	sv.ui.Window.add(sv.ui.ViewHeader);
	sv.ui.Window.add(sv.ui.ViewTong);

	sv.ui.ViewHeader.add(sv.ui.ViewIconLeft);
	sv.ui.ViewHeader.add(sv.ui.ViewLabelHeader);

	sv.ui.ViewIconLeft.add(sv.ui.IconLeft);
	sv.ui.ViewLabelHeader.add(sv.ui.LabelHeader);

	sv.ui.lbl_hnay.addEventListener('click', sv.fu.evt_clickhnay);
	sv.ui.lbl_mai.addEventListener('click', sv.fu.evt_click_mai);
	sv.ui.lbl_hqa.addEventListener('click', sv.fu.evt_clickhqua);
}

function tao_event(sv) {
	sv.fu = {};

	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.Window.close();
	};

	sv.fu.evt_clickhqua = function(e) {
		set_mau(sv.ui.lbl_hqa, sv.ui.lbl_hnay, sv.ui.lbl_mai);
		for (var i = 0; i < 1; i++) {
			sv.arr.dataVTong[i].setParam(sv.arr.param1[0]);
		};

	};
	sv.fu.evt_clickhnay = function(e) {
		set_mau(sv.ui.lbl_hnay, sv.ui.lbl_hqa, sv.ui.lbl_mai);
		for (var i = 0; i < 10; i++) {
			sv.arr.dataVTong[i].setParam(sv.arr.param2[0]);
		}
	};
	sv.fu.evt_click_mai = function(e) {
		set_mau(sv.ui.lbl_mai, sv.ui.lbl_hnay, sv.ui.lbl_hqa);
		for (var i = 0; i < 10; i++) {
			sv.arr.dataVTong[i].setParam(sv.arr.param3[0]);
		};
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.ViewIconLeft.removeEventListener('click', sv.fu.eventClickIconLeft);

		sv.ui.lbl_hnay.removeEventListener('click', sv.fu.evt_clickhnay);
		sv.ui.lbl_mai.removeEventListener('click', sv.fu.evt_click_mai);
		sv.ui.lbl_hqa.removeEventListener('click', sv.fu.evt_clickhqua);

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};

}

function set_mau(a, b, c) {
	a.backgroundColor = Ti.App.Color.superwhite;
	a.color = Ti.App.Color.nauden;
	b.backgroundColor = 'transparent';
	b.color = Ti.App.Color.superwhite;
	c.backgroundColor = 'transparent';
	c.color = Ti.App.Color.superwhite;
}

