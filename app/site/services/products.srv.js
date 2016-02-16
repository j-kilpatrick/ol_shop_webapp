app.service('productSrv',ProductService);

function ProductService($state,api){
	//dependencies
	this.api = api;
	this.state = $state;
	this.categories = [
		{label:'Skateboards',value:'cat1'},
		{label:'Cruisers',value:'cat2'},
		{label:'Longboards',value:'cat3'}
	];
	this.filter = headerCtrl.filter
	this.products = [
		{"name":"The Six", "image":"/assets/img/1.png", "description":"", "category":"Skateboard", "price":120,
		"quantity":1},
		{"name":"The Vancouver", "image":"/assets/img/2.png", "description":"", "category":"Skateboard", "price":120,
		"quantity":1},
		{"name":"The Francisco", "image":"/assets/img/3.png", "description":"", "category":"Skateboard", "price":120,
		"quantity":1},
		{"name":"The Scotia", "image":"/assets/img/4.png", "description":"", "category":"Skateboard", "price":120,
		"quantity":1},
		{"name":"The Alberta", "image":"/assets/img/9.png", "description":"", "category":"Skateboard", "price":120,
		"quantity":1},
		{"name":"The Alps", "image":"/assets/img/6.png", "description":"", "category":"Skateboard", "price":120,
		"quantity":1},
		{"name":"The Mansfield", "image":"/assets/img/13.png", "description":"", "category":"Longboard", "price":120,
		"quantity":1},
		{"name":"The Monreal", "image":"/assets/img/16.png", "description":"", "category":"Longboard", "price":120,
		"quantity":1},
		{"name":"The Monaco", "image":"/assets/img/15.png", "description":"", "category":"Longboard", "price":120,
		"quantity":1}
	];
}



ProductService.prototype.getProducts = function(){
	var _this = this;
	return this.api.request('/products',{},'GET')
	.then(function(res){
		//success promise
		console.log(res);
		_this.products = res.data.products;
		return res.data.products;
	},function(res){
		//error promise
		console.log(res);
		return;
	})
}

ProductService.prototype.addProduct = function(product){
	var _this = this;
	_this.api.request('/products',product,'POST')
	.then(function(res){
		console.log(res);
		if(res.status === 200){
			//product was added successfully
			_this.products.push(res.data.product);
			//_this.state.go('admin');
		}
	})
}

// ProductService.prototype.updateProduct = function(product,productId){
// 	var _this = this;
// 	this.api.request('/products/'+productId,product,'PUT')
// 	.then(function(res){
// 		console.log(res);
// 		if(res.status === 200){
// 			//product was updated successfully
// 			_this.updateProductList(product,productId);
// 			_ 
// 		}
// 	})
// }

// ProductService.prototype.deleteProduct = function(productId){
// 	var _this = this;
// 	this.api.request('/products/'+productId,{},'DEL')
// 	.then(function(res){
// 		console.log(res);
// 		if(res.status === 200){
// 			//product was deleted successfully
// 			_this.removeProduct(productId);
// 			
			
// 		}
// 	})
// }

ProductService.prototype.getProduct = function(productId){
	var _this = this
	return this.api.request('/products/'+productId,{},'GET');
}

// ProductService.prototype.updateProductList = function(product,productId){
// 	for(index in this.products){
// 		if(this.products[index].id == productId){
// 			this.products[index].name = product.name;
// 			this.products[index].image = product.image;
// 			this.products[index].description = product.description;
// 			this.products[index].category = product.category;
// 			this.products[index].price = product.price;
// 			this.products[index].quantity = product.quantity;
// 		}
// 	}
// }

// ProductService.prototype.removeProduct = function(productId){
// 	for(index in this.products){
// 		if(this.products[index].id == productId){
// 			delete this.products[index];
// 		}
// 	}
// }