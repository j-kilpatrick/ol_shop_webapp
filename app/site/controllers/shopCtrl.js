app.controller('shopCtrl',shopCtrl);

function shopCtrl(productSrv, $state, $scope) {
	console.log("Shop control!");
	var ctrl = this;
	ctrl.$state = $state;
	ctrl.productSrv = productSrv;
	ctrl.products = productSrv.products;
	ctrl.product = productSrv.product;
};