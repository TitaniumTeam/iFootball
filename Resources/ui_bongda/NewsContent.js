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

function createVariable(sv) {
	sv.vari.SoDoi = 20;
}

function createUI(sv) {

	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : 0,
		left : 0
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
		height : Ti.App.size(405),
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
		//text : 'Juventus vừa thông báo rằng chỉ sau một lượt đấu nữa sẽ là vô địch',
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

	sv.ui.ViewDocBao = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(405),
		width : Ti.App.size(720)
	});

	sv.ui.webview = Ti.UI.createWebView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		showScrollbars : false,
		scalesPageToFit : true,
		touchEnabled : true,
		enableZoomControls : false,
	});
	createUI_Event(sv);

	sv.ui.ViewLabelHeader.add(sv.ui.LabelHeader);

	sv.ui.ViewTong.add(sv.ui.BGHeader);
	sv.ui.ViewTong.add(sv.ui.ViewDocBao);

	sv.ui.BGHeader.add(sv.ui.ViewTinHot);

	sv.ui.ViewTinHot.add(sv.ui.LabelTinHot);

}

function createUI_Event(sv) {

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.ViewIconLeft.removeEventListener('click', sv.fu.eventClickIconLeft);

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};

}
