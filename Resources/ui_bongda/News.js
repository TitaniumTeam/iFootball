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

	sv.vari.SoTinTuc = 7;
	sv.vari.TopView = Ti.App.size(235);
	sv.vari.HeightView = Ti.App.size(235);

	sv.arr.ViewTinTuc = [];
	sv.arr.AnhTinTuc = [];
	sv.arr.TenTinTuc = [];
	sv.arr.ThoiGianTinTuc = [];
	sv.arr.TTTinTuc = [];
	sv.arr.eventClickViewTinTuc = [];
}

function createUI(sv) {
	sv.ui.Window = Ti.UI.createWindow({
		navBarHidden : true,
		keepScreenOn : true,
		top : 0,
		orientationModes : [Ti.UI.PORTRAIT],

	});

	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		// width : Ti.App.widthScreen,
		// height : Ti.App.heightScreen,
		top : Ti.App.size(120),
		left : 0
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
		text : 'TIN TỨC',
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.BGHeader = Ti.UI.createView({
		backgroundImage : '/assets/images/1/BGHeader.jpeg',
		right : Ti.App.size(0),
		height : Ti.App.size(285),
		top : Ti.App.size(0),
		left : 0
	});

	sv.ui.ViewTinHot = Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		right : Ti.App.size(0),
		left : Ti.App.size(0),
		height : Ti.App.size(120),
		bottom : Ti.App.size(0),
		opacity : 0.8
	});

	sv.ui.LabelTinHot = Ti.UI.createLabel({
		text : 'Juventus vừa thông báo rằng chỉ sau một lượt đấu nữa sẽ là vô địch',
		font : {
			fontSize : Ti.App.size(24),
			fontFamily : 'Aria',
			fontWeight : 'bold',
			textAlign : 'center'
		},
		color : Ti.App.Color.white,
		left : Ti.App.size(40),
		right : Ti.App.size(40)
	});

	sv.ui.ViewListTinTuc = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(285),
		left : 0,
		right : 0
	});

	for (var i = 0; i < sv.vari.SoTinTuc; i++) {
		sv.arr.ViewTinTuc[i] = Ti.UI.createView({
			backgroundColor : Ti.App.Color.magenta,
			height : sv.vari.HeightView,
			left : 0,
			right : 0,
			top : Ti.App.size(235 * i),
			borderWidth : Ti.App.size(1),
			borderColor : Ti.App.Color.nauden
		});

		sv.arr.AnhTinTuc[i] = Ti.UI.createImageView({
			image : '/assets/images/1/BGHeader.jpeg',
			top : Ti.App.size(30),
			left : Ti.App.size(40),
			right : Ti.App.size(420),
			bottom : Ti.App.size(30),
		});

		sv.arr.TenTinTuc[i] = Ti.UI.createLabel({
			text : 'Juventus vừa thông báo rằng chỉ sau một lượt đấu nữa sẽ là vô địch',
			font : {
				fontSize : Ti.App.size(22),
				fontFamily : 'Aria',
				fontWeight : 'bold',
				textAlign : 'left'
			},
			color : Ti.App.Color.nauden,
			left : Ti.App.size(320),
			right : Ti.App.size(40),
			top : Ti.App.size(30),
			bottom : Ti.App.size(130)
		});

		sv.arr.ThoiGianTinTuc[i] = Ti.UI.createLabel({
			text : '20/03 14/04/2014',
			font : {
				fontSize : Ti.App.size(14),
				fontFamily : 'Aria',
				textAlign : 'left'
			},
			color : Ti.App.Color.nauden,
			left : Ti.App.size(320),
			right : Ti.App.size(40),
			top : Ti.App.size(110),
			bottom : Ti.App.size(100)
		});

		sv.arr.TTTinTuc[i] = Ti.UI.createLabel({
			text : 'Juventus vừa thông báo rằng chỉ sau một lượt đấu nữa sẽ là vô địch',
			font : {
				fontSize : Ti.App.size(18),
				fontFamily : 'Aria',
				textAlign : 'left'
			},
			color : Ti.App.Color.nauden,
			left : Ti.App.size(320),
			right : Ti.App.size(40),
			top : Ti.App.size(145),
			bottom : Ti.App.size(30)
		});
	}

	createUI_Event(sv);

	for (var i = 0; i < sv.vari.SoTinTuc; i++) {
		sv.arr.ViewTinTuc[i].addEventListener('click', sv.arr.eventClickViewTinTuc[i]);
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

	sv.ui.ViewTong.add(sv.ui.BGHeader);
	sv.ui.ViewTong.add(sv.ui.ViewListTinTuc);

	sv.ui.BGHeader.add(sv.ui.ViewTinHot);

	sv.ui.ViewTinHot.add(sv.ui.LabelTinHot);

	for (var i = 0; i < sv.vari.SoTinTuc; i++) {
		sv.ui.ViewListTinTuc.add(sv.arr.ViewTinTuc[i]);

		sv.arr.ViewTinTuc[i].add(sv.arr.AnhTinTuc[i]);
		sv.arr.ViewTinTuc[i].add(sv.arr.TenTinTuc[i]);
		sv.arr.ViewTinTuc[i].add(sv.arr.ThoiGianTinTuc[i]);
		sv.arr.ViewTinTuc[i].add(sv.arr.TTTinTuc[i]);
	}
}

function createUI_Event(sv) {
	sv.fu = {};

	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.Window.close();
	};

	for (var i = 0; i < sv.vari.SoTinTuc; i++) {
		sv.arr.eventClickViewTinTuc[i] = function() {
			var newWindow = new (require('/ui_bongda/NewsContent'))();
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

		for (var i = 0; i < sv.vari.SoTinTuc; i++) {
			sv.arr.ViewTinTuc[i].removeEventListener('click', sv.arr.eventClickViewTinTuc[i]);
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
