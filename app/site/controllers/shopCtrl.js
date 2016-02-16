app.controller('shopCtrl',shopCtrl);

function shopCtrl(productSrv, $state) {
	console.log("Shop control!");
	var ctrl = this;
	ctrl.$state = $state;
	ctrl.productSrv = productSrv;
	ctrl.products = productSrv.products;
	
	ctrl.categories = ctrl.productSrv.categories;

	ctrl.filter = productSrv.filter;
	

};

// show product only when : 
// ng-show="ctrl.filter.showPrductByCat(product)"
// set category through ng-click in menu.