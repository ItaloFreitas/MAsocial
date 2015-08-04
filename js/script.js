var app = angular.module('masocial', ['ngRoute']).config(function($routeProvider) {
	
	$routeProvider
	.when('/ponstagens',{
			templateUrl:'postagens.html',
			controller:'poctrl'
	});
})


app.controller('ctrl', function ($scope, $http) {

	$scope.enviar = function (){
			$http.get('http://localhost/server/json.php?callback=JSON_CALLBACK').success(function(data){
				$scope.dados = data;
				$scope.$apply;
			console.log("ok");

		});
	}

});

app.controller('poctrl', function($scope, $http){

	

});