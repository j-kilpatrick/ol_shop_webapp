app.controller('shopCtrl',shopCtrl);

function shopCtrl(productSrv, $state) {
	console.log("Shop control!");
	var ctrl = this;
	ctrl.$state = $state;
	ctrl.productSrv = productSrv;
	ctrl.products = productSrv.products;
	
	ctrl.categories = ctrl.productSrv.categories;
	console.log(ctrl.categories)


	ctrl.filter = "";
	



	ctrl.showProductsByCat = function(cat){
		var ctrl = this;
		ctrl.filter = cat;

		console.log(ctrl.filter)
	}

};

// show product only when : 
// ng-show="ctrl.filter.showPrductByCat(product)"
// set category through ng-click in menu.