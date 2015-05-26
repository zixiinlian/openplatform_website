'use strict';

ManagementApp.directive('treenav', function(){
	
	return{
		restrict:'E',
		replace: true,
		transclude: false,
		scope: false,
		controller:'infoList'
	};
});