module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		// createVariable(sv);
		create_ui(sv);
	})();

	return sv.ui.windowkqsx;
};
/**
 * Khởi tạo biến
 */
function createVariable(sv) {
}

function create_ui(sv) {
	sv.ui.windowkqsx = Titanium.UI.createWindow({
		navBarHidden : true
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
		right : Ti.App.size(120),
	});
	sv.ui.LabelHeader = Ti.UI.createLabel({
		text : 'LỊCH SỬ GIAO DỊCH',
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.superwhite,
	});

	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		// width : Ti.App.widthScreen,
		height : Ti.UI.FILL,
		top : Ti.App.size(120),
		left : 0
	});

	//Tao view Truong
	sv.ui.ViewTruong = Ti.UI.createView({
		top : Ti.App.size(0),
		width : Ti.App.WidthScreen,
		height : Ti.App.size(80),
	});

	sv.ui.TT = Ti.UI.createView({
		top : Ti.App.size(25),
		bottom : Ti.App.size(25),
		right : Ti.App.size(620),
		left : Ti.App.size(0),
	});

	sv.ui.LabelTT = Ti.UI.createLabel({
		text : 'TT',
		font : {
			fontSize : Ti.App.size(26),
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.Line1 = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(20),
		bottom : Ti.App.size(20),
		right : Ti.App.size(618),
		width : Ti.App.size(2),
	});
	sv.ui.XU = Titanium.UI.createView({
		top : Ti.App.size(25),
		bottom : Ti.App.size(25),
		right : Ti.App.size(420),
		left : Ti.App.size(98),
	});
	sv.ui.LabelXu = Ti.UI.createLabel({
		text : 'Xu',
		font : {
			fontSize : Ti.App.size(26),
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.Line2 = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(20),
		bottom : Ti.App.size(20),
		left : Ti.App.size(300),
		width : Ti.App.size(2),
	});
	sv.ui.DAUSO = Ti.UI.createView({
		top : Ti.App.size(25),
		bottom : Ti.App.size(25),
		right : Ti.App.size(232),
		left : Ti.App.size(298),
	});

	sv.ui.LabelDauSo = Ti.UI.createLabel({
		text : 'Đầu số',
		font : {
			fontSize : Ti.App.size(26),
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.Line3 = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(20),
		bottom : Ti.App.size(20),
		right : Ti.App.size(230),
		width : Ti.App.size(2),
	});

	sv.ui.TG = Ti.UI.createView({
		top : Ti.App.size(25),
		bottom : Ti.App.size(25),
		right : Ti.App.size(0),
		left : Ti.App.size(490),
	});

	sv.ui.LabelTG = Ti.UI.createLabel({
		text : 'Thời gian',
		font : {
			fontSize : Ti.App.size(26),
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.ViewLine = Ti.UI.createView({
		height : Ti.App.size(2),
		top : Ti.App.size(80),
		backgroundColor : Ti.App.Color.nauden,
	});

	//Tao table view

	sv.ui.ViewDanhSach = Ti.UI.createTableView({
		backgroundColor : Ti.App.Color.magenta,
		separatorColor : 'transparent',
		top : Ti.App.size(82),
		bottom : Ti.App.size(120),
		left : 0,
		right : 0
	});

	createUI_Event(sv);
	sv.ui.windowkqsx.addEventListener('open', sv.fu.event_openwin);
	sv.ui.windowkqsx.addEventListener('close', sv.fu.event_closewin);
	sv.ui.ViewIconLeft.addEventListener('click', sv.fu.event_btnclose);

	sv.ui.windowkqsx.add(sv.ui.ViewTong);
	sv.ui.windowkqsx.add(sv.ui.ViewHeader);

	sv.ui.ViewTong.add(sv.ui.ViewTruong);
	sv.ui.ViewTong.add(sv.ui.ViewLine);
	sv.ui.ViewTong.add(sv.ui.ViewDanhSach);

	sv.ui.ViewTruong.add(sv.ui.TT);
	sv.ui.ViewTruong.add(sv.ui.Line1);
	sv.ui.ViewTruong.add(sv.ui.DAUSO);
	sv.ui.ViewTruong.add(sv.ui.Line2);
	sv.ui.ViewTruong.add(sv.ui.TG);
	sv.ui.TT.add(sv.ui.LabelTT);
	sv.ui.DAUSO.add(sv.ui.LabelDauSo);
	sv.ui.TG.add(sv.ui.LabelTG);
	sv.ui.XU.add(sv.ui.LabelXu);
	sv.ui.ViewTruong.add(sv.ui.Line3);
	sv.ui.ViewTruong.add(sv.ui.XU);

	sv.ui.ViewHeader.add(sv.ui.ViewIconLeft);
	sv.ui.ViewHeader.add(sv.ui.ViewLabelHeader);
	sv.ui.ViewLabelHeader.add(sv.ui.LabelHeader);
	sv.ui.ViewIconLeft.add(sv.ui.IconLeft);

}

function createUI_Event(sv) {
	sv.fu.event_btnclose = function(e) {
		sv.ui.windowkqsx.close();
	};
	sv.fu.event_openwin = function(e) {
		Ti.API.info('open');
	};
	sv.fu.event_closewin = function(e) {
		sv.ui.windowkqsx.removeEventListener('open', sv.fu.event_openwin);
		sv.ui.windowkqsx.removeEventListener('close', sv.fu.event_closewin);
		sv.ui.ViewIconLeft.removeEventListener('click', sv.fu.event_btnclose);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
	};
}

