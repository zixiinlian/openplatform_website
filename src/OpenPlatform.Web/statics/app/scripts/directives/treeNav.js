//'use strict';

ManagementApp.directive('treenav', function(){
	
	return{
		restrict:'E',
//		templateUrl:'views/treeNav.html',
		replace: true,
		transclude: false,
		scope: false,
		controller:'infoList'
		//setDomModel(,$('.info-tab'))
//		template:$scope.setDomModel($scope.infoList,$('.info-tab'))
		
		
	};
});