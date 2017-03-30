 var app = angular.module('myapp',[]);
 	
 	app.controller('meetupsController',function($scope){
 		$scope.meetupsCount = 10;

 		$scope.meetups = [
 			{name : "1 meet"},
 			{name : "2 meet"},
 			{name : "3 meet"}
 		]
 	});

