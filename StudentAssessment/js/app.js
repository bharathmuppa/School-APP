define(['router'],function(Router){
	var initialize = function(){
	                              localStorage.clear();
		                          Router.initialize();
	                           };
	return{
		
		initialize: initialize
	};
});
