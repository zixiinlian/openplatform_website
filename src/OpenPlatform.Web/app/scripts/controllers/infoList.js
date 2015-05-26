//'use strict';
ManagementApp.controller('infoList',function($scope,$http){
	$http.get('app/scripts/datas/infoList.js')
	.success(function(data){
		$scope.infoList = data.list;
		$scope.setDomModel($scope.infoList,$('.info-tab .panel-body'));
		$scope.toggleFn()
	})
	$scope.setDomModel = function(list, parent){
		var liInner;
			for (var i in list) {
				var $li = $('<li></li>');
				for (var j in list[i]) {
					if (list[i][j] instanceof Object) {
						var $ul = $('<ul class="subList"></ul>');
						$ul.appendTo($li);
						arguments.callee(list[i][j], $ul)
					} else {
						if(list[i].url){
							liInner = '<a href="'+list[i].url+'">'+list[i].name+'</a>'
						}else{
							liInner = '<div class="tree-head"><i class="icon-open"></i>' + list[i].name + '</div>'
						}
						$li.html(liInner).appendTo(parent)
					}
				}
			}
	}
	$scope.toggleFn = function(){
//		$('.tree .tree-head i').addClass('icon-open');
		$('.tree i').eq(0).addClass('icon-close');
		$('.tree i').eq(1).addClass('icon-close');
		$('.tree .tree-head').click(function(){
			$(this).next('.subList').show();
			$(this).parent().siblings().children('.subList').hide();
			if($(this).next().css('display') == 'block'){
				$(this).children('i').addClass('icon-close').removeClass('icon-open');
				$(this).parent().siblings().children('.tree-head').children('i').removeClass('icon-close').addClass('icon-open')
			}
		})
		$('.tree ul  li').addClass('icon-zcontact')
	}
	
	
	
})

