var app = angular.module('Sounder',[]);

app.controller('FormController',['$scope', '$filter', function($scope, $filter) {
	var updateClock = function () {
		$scope.clock = new Date();
	};
	setInterval(function () {
		$scope.$apply(updateClock);/*
		$scope.clock = $filter('date:"fullDate"')(new Date());*/
	}, 1000);
	updateClock();
}]);