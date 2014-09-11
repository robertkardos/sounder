app.controller('FormController',['$scope', '$filter', function($scope, $filter) {
	var updateClock = function () {
		$scope.clock = new Date();
	};

	$scope.strings = ['kalacs', 'asd', 'qwe', '12452352', 'qweasd', 'bcvbccac', 'cctttka'];
	$scope.isNaN = function (str) {
		return str.isNaN();
	}


	setInterval(function () {
		$scope.$apply(updateClock);
		$scope.clock = new Date();
	}, 1000);
	updateClock();
}]);


