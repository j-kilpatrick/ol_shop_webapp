app.controller('addProductCtrl',addProductCtrl);

function addProductCtrl($stateParams,api,productSrv){
	var ctrl = this
	ctrl.productSrv = productSrv;
	ctrl.products = productSrv.products;

	ctrl.categories = [
		{label:'Skateboard',value:'Skateboard'},
		{label:'Longboard',value:'Longboard'},
	];
	
	ctrl.product = {};
	ctrl.product_update_btn = 'Update Product';
	ctrl.product_delete_btn = 'Remove Product';

	if($stateParams.productId != undefined){
		productSrv.getProduct($stateParams.productId)
		.then(function(res){
			console.log(res);
			ctrl.product = res.data.product;

			//TODO #2 set category based on edit form based on 
			//product category
			
			for(var category in ctrl.categories){
			if(ctrl.product.category == ctrl.category[category].value){

		}
	}


})
}
}

addProductCtrl.prototype.addProduct = function(){
	var ctrl = this;
	
	console.log("product add function works")	
	
	var product = {
		name: ctrl.name,
		category: ctrl.category,
		image: ctrl.image,
		price: ctrl.price,
		description: ctrl.description,
		status: true,
	}

	console.log(product)
	ctrl.productSrv.addProduct(product);

}


// addProductCtrl.prototype.updateProduct = function(){
// 	var ctrl = this;
// addProductCtrl.prototype.updateProduct = function(){
// 	var ctrl = this;


// 	//TODO #2
// 	//create product object, pass to plugin service
// 	//Update text in button


// addProductCtrl.prototype.deleteProduct = function(){
// 	var ctrl = this;
// 	ctrl.product_update_btn = "updating";
// 	ctrl.productSrv.updateProduct(ctrl.product, ctrl.product.id);
// }


// addProductCtrl.prototype.deleteProduct = function(){
// 	var ctrl = this;

// 	//TODO #2
// 	//remove product, pass to plugin service
// 	//update text in button

// 	ctrl.product.product_delete_btn = "Deleting";
// 	ctrl.productSrv.deleteProduct(ctrl.product.id);
// }
