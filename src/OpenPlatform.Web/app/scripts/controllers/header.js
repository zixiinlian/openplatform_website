'use strict';

ManagementApp.controller('HeaderController', function($scope, dialogs) {

			$scope.login = function() {
				var dlg = dialogs.create('app/views/login.html', 'LoginController', {}, {
					key: false,
					back: 'static'
				});
				dlg.result.then(function(name) {
					console.log("success");
				}, function() {
					console.log("error");
				});
			};

			$scope.register = function() {
				var dlg = dialogs.create('app/views/register.html', 'RegisterController', {}, {
					key: false,
					back: 'static'
				});
				dlg.result.then(function(name) {
					console.log("success");
				}, function() {
					console.log("error");
				});
			};

	})
	.controller('LoginController', function($scope, $http, $modalInstance, data) {
		$scope.user = {
			name: ''
		};

		$scope.cancel = function() {
			$modalInstance.dismiss('canceled');
		};

		$scope.save = function() {
			var data = {
				userName: 'Test1',
				userType: '沪江用户',
				mail: '835dsfsdf',
				name: '沪江用户',
				isActive: true
			};

			$http.post('/api/Users/', data).success(function(response) {
				console.log(response);
			});

			$modalInstance.close();
		};

		$scope.hitEnter = function(evt) {

		};
	})
	.controller('RegisterController', function($scope, $http, $modalInstance, data) {
		$scope.user = {
			name: ''
		};

		$scope.cancel = function() {
			$modalInstance.dismiss('canceled');
		};

		$scope.save = function() {
			var data = {
				userName: 'Test1',
				userType: '沪江用户',
				mail: '835dsfsdf',
				name: '沪江用户',
				isActive: true
			};

			$http.post('/api/Users/', data).success(function(response) {
				console.log(response);
			});

			$modalInstance.close();
		};

		$scope.hitEnter = function(evt) {

		};
	});