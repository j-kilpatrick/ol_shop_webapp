'use strict';

var app = angular.module('shopApp',['ui.router',]);

app.config(function($stateProvider, $httpProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('shop',{
		url:'/',
		templateUrl:'',
		controller:'',
	});

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
