'use strict';

var app = angular.module('shopApp',['ui.router',]);

app.config(function($stateProvider, $httpProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/shop');

	$stateProvider
	.state('shop',{
		url:'/shop',
		templateUrl:'site/partials/shop-main.html',
		controller:'shopCtrl as ctrl',
	})
  .state('admin',{
    url:'/admin',
    templateUrl:'site/partials/admin.html',
    controller:'adminCtrl as ctrl',
  })
  .state('login',{
   url:'/login',
   templateUrl:'site/partials/login.html',
   controller:'loginCtrl as ctrl',
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
