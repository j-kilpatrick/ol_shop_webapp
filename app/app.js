'use strict';

var app = angular.module('shopApp',['ui.router']);

app.config(function($stateProvider, $httpProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/shop');

	$stateProvider
	
  .state('login',{
   url:'/login',
   templateUrl:'site/partials/sign-in.html',
   controller:'loginCtrl as ctrl',
  })
  .state('admin.add_product',{
    url:'/add_product',
    controller:'addProductCtrl as ctrl',
    templateUrl:'site/partials/admin-products.html'
  })
  .state('admin',{
    url:'/admin',
    templateUrl:'site/partials/admin.html',
    controller:'adminCtrl as ctrl',
  })
  .state('shop',{
    url:'/shop',
    templateUrl:'site/partials/home.html',
    controller:'shopCtrl as ctrl',
  })
  .state('shop.cart',{
      url: '/cart',
      templateUrl: "site/partials/cart.html",
      controller:'shopCtrl as ctrl',
  })
  .state('shop.product',{
      url: '/product',
      templateUrl: "site/partials/product.html",
      controller:'shopCtrl as ctrl',
  })
;

	$httpProvider.interceptors.push(function(){
       return {
           request: function(config) {
               return config;
           },
           response: function(response) {
               var auth_token = response.headers('authentication');
               if(localStorage.authToken == undefined && auth_token != null){
               	localStorage.authToken = auth_token;
               }
               return response;
           }
       }
   });
});
