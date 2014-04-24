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

	return sv.ui.ViewTong;
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
	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		// width : Ti.App.widthScreen,
		// height : Ti.App.heightScreen,
		top : Ti.App.size(120),
		left : 0
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
	
	for(var i=0;i<sv.vari.SoTinTuc;i++){
		sv.arr.ViewTinTuc[i] = Ti.UI.createView({
			backgroundColor : Ti.App.Color.magenta,
			height : sv.vari.HeightView,
			left : 0,
			right : 0,
			top : sv.vari.TopView + i * sv.vari.HeightView + i * Ti.App.size(30) - Ti.App.size(120),
			borderWidth : Ti.App.size(1),
			borderColor : Ti.App.Color.magenta
		});
	}

	createUI_Event(sv);
// 
	// var IconLeft = Win.getIconLeft();
	// var IconRight = Win.getIconRight();
	// var LabelHeader = Win.getLabelHeader();
	// IconLeft.image = '/assets/images/icon/menu.png';
	// Win.getLabelHeader().text = 'Tin Tức';
// 
	// IconLeft.addEventListener('click', sv.fu.eventClickIconLeft);
	// IconRight.addEventListener('click', sv.fu.eventClickIconRight);

	sv.ui.ViewTong.add(sv.ui.BGHeader);

	sv.ui.BGHeader.add(sv.ui.ViewTinHot);

	sv.ui.ViewTinHot.add(sv.ui.LabelTinHot);
}

function RemoveAllEventListener(sv) {
	var IconLeft = Win.getIconLeft();
	var IconRight = Win.getIconRight();
	var LabelHeader = Win.getLabelHeader();

	IconLeft.removeEventListener('click', sv.fu.eventClickIconLeft);
	IconRight.removeEventListener('click', sv.fu.eventClickIconRight);

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
		var NewView = new (require('ui/WindowMain'))();
		Win.add(NewView);
		Win.remove(sv.ui.ViewTong);
		RemoveAllEventListener(sv);
	};

	sv.fu.eventClickIconRight = function(e) {
		alert('Click ');
	};
}

