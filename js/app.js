var app = angular.module('Sounder',[]);

app.controller('FormController',['$scope',function($scope) {
	var updateClock = function () {
		$scope.clock = new Date();
	};
	setInterval(function () {
		$scope.$apply(updateClock);
	}, 1000);
	updateClock();
}]);