app.controller('adminCtrl',adminCtrl);

function adminCtrl(productSrv, $state) {
	console.log("Admin control!");
	var ctrl = this;
	ctrl.$state = $state;
	ctrl.productSrv = productSrv;
//	ctrl.products = products;
};