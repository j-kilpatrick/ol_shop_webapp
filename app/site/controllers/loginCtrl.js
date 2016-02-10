app.controller('loginCtrl',loginCtrl);

function loginCtrl(productSrv, $state) {
	console.log("Login control!");
	var ctrl = this;
	ctrl.$state = $state;
	ctrl.productSrv = productSrv;
	ctrl.products = products;
};