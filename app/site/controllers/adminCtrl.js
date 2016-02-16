app.controller('adminCtrl',adminCtrl);

function adminCtrl(productSrv, $state, $scope) {
	console.log("Admin control!");
	var ctrl = this;
	ctrl.$state = $state;
	ctrl.$scope = $scope;
	ctrl.productSrv = productSrv;
	ctrl.products = productSrv.products;
	ctrl.productSrv.getProducts();
	console.log(ctrl.products);


	//Product Test
	ctrl.label = 0;
	ctrl.price = 0;
	ctrl.i = 0;

	//Login check (later)




	//watch for updates to products object

	$scope.$watch(function(){
    	return productSrv.products;
	}, function (newValue) {
		if(productSrv.products.length > 0){
		    ctrl.products = productSrv.products;
		    ctrl.is_products = true;
		}
	});

	ctrl.editProduct = function(product){
		ctrl.$state.go('admin.edit_product',{productId:product.id});
	}

	ctrl.prodTest = function(item){
		var item = {};
		
		item.i = ctrl.i;
		item.label = ctrl.label;
		item.price = ctrl.price;
		item.image = "";

		item.i += 1;
		item.imgnum = function(i) {
			if (i % 2 === 1){
				return 3;
			} else {
				return 1;
			}
		};
		item.img = item.imgnum(item.i);
		item.label += 3;
		item.price += 50;
		item.image = "assets/img/item-" + item.img + ".jpg"

		console.log(item);

		ctrl.i += 1;
		ctrl.label += 3;
		ctrl.price += 50;

		ctrl.products.push(item);
		productSrv.products.push(item);
		console.log(ctrl.products);
	}

	ctrl.logout = function(){
		localStorage.removeItem('authToken');
		ctrl.$state.go('auth');
	};


}


