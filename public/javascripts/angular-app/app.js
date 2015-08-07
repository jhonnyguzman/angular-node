"use strict"

//init angular app 
angular.module("myProductsApp",["ngRoute"])
	.config(function($routeProvider){

	        $routeProvider
	            .when("/", {
	                controller: "myProductAppCtrl",
	                controllerAs: "vm",
	                templateUrl: "/javascripts/angular-app/templates/list_products.html"
	            })
	            .when("/product/new", {
	                controller: "myProductAppCtrl",
	                controllerAs: "vm",
	                templateUrl: "/javascripts/angular-app/templates/new_product.html"
	            })
	            .when("/product/:id", {
	                controller: "myProductAppViewCtrl",
	                controllerAs: "vm",
	                templateUrl: "/javascripts/angular-app/templates/show_product.html"
	            })
	            .otherwise({
			        redirectTo: "/"
			    });
	    });


