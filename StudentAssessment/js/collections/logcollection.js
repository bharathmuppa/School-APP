define([
	 'jquery',
	 'backbone',
	 'underscore',
	 'models/logmodel',
	 'collections/logcollection'
	 
],function($,Backbone,_,logModel,lc){
	
	 var logcollection=Backbone.Collection.extend({
	 	model : logModel,
	   
	    initialize : function(){
	    	
	    	
	    } , 
	    render:function()
	    {
	    
	    },
	    
	
	 });
 return logcollection;
});


