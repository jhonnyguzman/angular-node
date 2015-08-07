angular.module('myProductsApp')
	.controller('myProductAppCtrl',['$http','$location',function ($http,$location) {
		var vm = this;

		vm.show_element_status = false;
		vm.products = {};
		vm.new_product = {};

		//get all products of backend
		$http.get("/api/products").success(function(respond){
            console.log("res:", respond);
            vm.products = respond;
        });

		//save an product in backend
		vm.save = function(){
			$http.post("/api/product/save", vm.new_product)
            .success(function(res){
              
              console.log(res);
              vm.show_element_status = true;
              vm.status_data = res.status_data

              if(vm.status_data.status){
              	console.log(vm.status_data.status);
              	$location.path("/");
              }
            }); 
		}

		vm.showProduct = function(_id){
			$location.path("product/"+_id);
		}
       
	}])
	.controller('myProductAppViewCtrl', ['$http','$location','$routeParams', function($http, $location,$routeParams){
		var vm = this;

		vm.show_element_status = false;
		vm.new_comment = {};
		vm.new_comment.product_id = $routeParams.id; //get product id
		vm.comments = {};

		//get single product of backend
		$http.get("/api/product/" + $routeParams.id).success(function(respond){
            console.log("res:", respond);
            vm.product = respond;
            
        });

		//save comment in backend
        vm.saveComment = function(){
        	$http.post("/api/comment/save", vm.new_comment)
            .success(function(res){

              console.log(res);
              vm.show_element_status = true;
              vm.status_data = res.status_data

              if(vm.status_data.status){
              	vm.product = res.product;
              	vm.new_comment.text = "";
              }
            }); 
        }
			
	}])
	;