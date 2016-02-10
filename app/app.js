'use strict';

var app = angular.module('shopApp',['ui.router',]);

app.config(function($stateProvider, $httpProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('shop',{
		url:'/shop',
		templateUrl:'site/partials/shop-main.html',
		controller:'shopApp as ctrl',
	})
  .state('admin',{
    url:'/admin',
    templateUrl:'site/partials/admin.html',
    controller:'shopApp as ctrl',
  })
  .state('login',{
   url:'/login',
   templateUrl:'site/partials/login.html',
   controller:'shopApp as ctrl',
 })

//  .otherwise('shop',{
//    url:'/shop',
//    templateUrl:'site/partials/shop-main.html',
 //   controller:'ShopCtrl as ctrl',
//  })
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
