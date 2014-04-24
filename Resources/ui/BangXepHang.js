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
		top : Ti.App.size(120),
		left : 0
	});

	sv.ui.ViewToolBar = Ti.UI.createView({
		backgroundImage : '/assets/images/icon/header.jpg',
		width : Ti.App.WidthScreen,
		height : Ti.App.size(35),
		top : Ti.App.size(0),
		left : Ti.App.size(0),
		borderWidth : Ti.App.size(1),
		borderColor : Ti.App.Color.magenta
	});

	//createUI_Event(sv);


	sv.ui.ViewTong.add(sv.ui.ViewToolBar);

}

function RemoveAllEventListener(sv) {
	sv.vari = null;
	sv.arr = null;
	sv.ui = null;
	sv.fu = null;
	sv.test = null;
	sv = null;
}

function createUI_Event(sv) {
	sv.fu = {};

	sv.fu.eventClickIconLeft = function(e) {
		var NewView = new (require('ui/Home'))();
		Win.add(NewView);
		Win.remove(sv.ui.ViewTong);
		RemoveAllEventListener(sv);
	};

	sv.fu.eventClickIconRight = function(e) {
		alert('Click ');
	};

}
