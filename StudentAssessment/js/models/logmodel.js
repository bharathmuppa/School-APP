define([
	 'jquery',
	 'underscore',
	 'backbone',
	 'models/default/default',
	 'collections/logcollection',
	
],
function($,_,Backbone,build,logcol) {
	var logModel=Backbone.Model.extend({
	   defaults:
	    {
	    	 username:"",
	    	 password:""
	    },
	    initialize:function(){
	    	
	    	//this.set({name:s});
	    	alert("ijiii");
	    	//alert("name"+this.get("username"));
	    	
	    },
	    render:function(){
	    	alert("name"+this.get("username")+ "pwd"+this.get("password"));
	    	
	    }	
	   
	});
	return logModel;
});
