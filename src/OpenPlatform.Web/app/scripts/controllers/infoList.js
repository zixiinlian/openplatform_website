//'use strict';
ManagementApp.controller('infoList',function($scope,$http){
	$http.get('scripts/datas/infoList.json')
	.success(function(data){
		$scope.infoList = data.list;
		$scope.setDomModel($scope.infoList,$('.info-tab'))
	})
	$scope.setDomModel = function(list, parent){
		var $parent = $('<ul/>');
			for (var i in list) {
				var $li = $('<li/>');
				for (var j in list[i]) {
					if (list[i][j] instanceof Object) {
						var $ul = $('<ul/>');
						$ul.appendTo($li);
						arguments.callee(list[i][j], $ul)
					} else {
						$li.append('<a href="'+list[i].url+'">'+list[i][j]+'</a>').appendTo(parent)
						
					}
				}
				$parent.append($li)
			}
			parent.append($parent)
	}
	
	
	$scope.clickVal = function(){
		$scope.showV = !$scope.showV;
	};
	
})

