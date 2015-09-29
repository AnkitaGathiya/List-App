angular.module('ListApp').constant("API",{
	baseURL:"http://jsonplaceholder.typicode.com/posts",
 
	getList:function(){
		return this.baseURL;
	}
});