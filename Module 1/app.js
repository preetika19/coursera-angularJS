(function (){
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {

		$scope.checkLunchItems = function () {
			if ($scope.lunchItems === undefined || $scope.lunchItems === ""){
				$scope.message = "Please enter data first";
			}
			else {
				console.log($scope.lunchItems);
				var dishes = $scope.lunchItems.split(',');
				var count=0;
				for ( var i=0; i<dishes.length; i++){
					if (dishes[i] === undefined || dishes[i] === " " || dishes[i] === ""){
						continue;
					}
					else {
						count++;
					}
				}
				if (count > 3){
					$scope.message = "Too much";
				}
				else {
					$scope.message = "Enjoy!";
				}
			}
		};
	}
})();