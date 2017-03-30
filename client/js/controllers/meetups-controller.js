 var app = angular.module('myapp',[]);
 	
 	app.controller('meetupsController',function($scope){
 		
 		$scope.meetups = [
 			{name : "1 meet"},
 			{name : "2 meet"},
 			{name : "3 meet"}
 		]

 		$scope.createMeetup = function(){
 		$scope.meetups.push({name:$scope.meetupName});
 		$scope.meetupName = '';
 	    }

});

 	
