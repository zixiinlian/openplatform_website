'use strict';

ManagementApp.controller('UserController', function($scope, $http, dialogs) {
		$http.get('/api/Users/').success(function(data) {
			var dataItem = [];

			$scope.tabledata = [];

			for (var i = 0; i < data.length; i++) {
				dataItem = [data[i].id, data[i].userName, data[i].isActive, new Date(data[i].createdAt).toLocaleString(), new Date(data[i].lastLoginAt).toLocaleString()];
				$scope.tabledata.push(dataItem);
			};

			$scope.thNameData = ["用户编号", "用户名", "是否有效", "创建时间", "登陆时间", "操作"];

			$scope.deleteUser = function() {
				var dlg = dialogs.confirm('Please Confirm', 'Is this awesome or what?',{
					width: 200
				});
				dlg.result.then(function(btn) {
					$scope.confirmed = 'You thought this quite awesome!';
				}, function(btn) {
					$scope.confirmed = 'Shame on you for not thinking this is awesome!';
				});
			};

			$scope.addUser = function() {
				var dlg = dialogs.create('app/views/addUser.html', 'addUserController', {}, {
					key: false,
					back: 'static'
				});
				dlg.result.then(function(name) {
					console.log("success");
				}, function() {
					console.log("error");
				});
			};
		});
	})
	.controller('addUserController', function($scope, $modalInstance, data) {
		$scope.user = {
			name: ''
		};

		$scope.cancel = function() {
			// $modalInstance.dismiss('canceled');
		}; // end cancel

		$scope.save = function() {
			// $modalInstance.close($scope.user.name);
		}; // end save

		$scope.hitEnter = function(evt) {
			// if (angular.equals(evt.keyCode, 13) && !(angular.equals($scope.name, null) || angular.equals($scope.name, '')))
			// $scope.save();
		};
	});