angular.module('List.controllers', [])

.controller('ListCtrl', function($rootScope, $state, $localstorage, $ionicLoading, ListService, $scope, $ionicPlatform, $ionicHistory, $ionicModal) {
	$ionicPlatform.ready(function(){
		try{
			$ionicHistory.clearHistory
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			
			
			$scope.items = [];
			
			$scope.LoadList = function(){
				$ionicLoading.show();	
				ListService.List().then(function (data) {
					$ionicLoading.hide();
					if(data){
						$scope.items=data;
					}else{
						$scope.showAlert(data.msg);
					}
				});	
				$ionicLoading.hide();
			};
			
			$scope.LoadList();
			
			$scope.data = {
				showDelete: false
			};
  
			$scope.edit = function(item) {
				alert('Edit Item: ' + item.id);
			};
		
			$scope.share = function(item) {
				alert('Share Item: ' + item.id);
			};
  
			$scope.moveItem = function(item, fromIndex, toIndex) {
				$scope.items.splice(fromIndex, 1);
				$scope.items.splice(toIndex, 0, item);
			};
  
			$scope.onItemDelete = function(item) {
				$scope.items.splice($scope.items.indexOf(item), 1);
			};
			
			$ionicModal.fromTemplateUrl('templates/additem.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(additem) {
				$scope.additem = additem;
			});
			$scope.openModaladditem = function() {
				$scope.additem.show();
			};
			$scope.closeModaladditem = function() {
				$scope.additem.hide();
			};
			
			$scope.additem={
				"userId": 1,
				"id": "",
				"title": "",
				"body": ""
			};
			
			$scope.additemlist=function(){
				if($scope.additem.title=="" || $scope.additem.title==undefined || $scope.additem.title=='undefined'){
					alert("Please Fill the Title");
					return false;
				}
				if($scope.additem.body=="" || $scope.additem.body==undefined || $scope.additem.body=='undefined'){
					alert("Please Fill the Description");
					return false;
				}
				$scope.items.push($scope.additem);
				$scope.additem.hide();
			};
		}
		catch(err){
			console.log(err.message);
		}
	});
});
