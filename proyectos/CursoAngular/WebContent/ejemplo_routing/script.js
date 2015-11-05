
var app = angular.module("miApp", ['ngRoute']);

app.config(function($routeProvider) {
	console.info($routeProvider);
	$routeProvider.when("/", {
		templateUrl: 'pages/home.html',
		controller: "miController"
	})
	.when("/acerca", {
		templateUrl: 'pages/acerca.html',
		controller: "aboutController"
	})	
	.when("/contacto", {
		templateUrl: 'pages/contactos.html',
		controller: "contactosController"
	})
	.otherwise({redirectTo: "/"});

});

app.controller("miController", function($scope){
	$scope.mensaje="Hola Mundo!";
});

app.controller("aboutController", function($scope){
	$scope.mensaje="about";
});

app.controller("contactosController", function($scope){
	$scope.mensaje="contactos";
});