// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('ListApp', ['ionic', 'List.controllers'])

.run(function($rootScope, $ionicPlatform, $localstorage, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})
.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
})
.factory('$localstorage', ['$window', function($window) {
	return {
	set: function(key, value) {
	 $window.localStorage[key] = value;
	},
	get: function(key, defaultValue) {
	 return $window.localStorage[key] || defaultValue;
	},
	setObject: function(key, value) {
	 $window.localStorage[key] = JSON.stringify(value);
	},
	getObject: function(key) {
	 return JSON.parse($window.localStorage[key] || '{}');
	}
	}
}])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

  // setup an abstract state for the tabs directive

	.state('List', {
		url: '/List',
		templateUrl: 'templates/list.html',
        controller: 'ListCtrl'
	})
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/List');

});
