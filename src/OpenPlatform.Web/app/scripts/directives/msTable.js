'use strict';

ManagementApp.directive('msTable', function(){
	return{
		restrict:'E',
		templateUrl: 'app/views/table.html',
		replace: true,
		transclude: false,
		scope: false
	};
});