angular.module('ListApp')
.service('ListService', function ($q,$http,API) {

    function List(){
      return $http.get(API.getList()).then(function(response){
        return response.data
      });
    }

    return {
      List:  List
    }

  });