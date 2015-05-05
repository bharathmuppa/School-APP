define([
	'jquery',
	'backbone',
	'underscore',
//	'models/default/default.js'
],
function($,Backbone,_){
	var regModel=Backbone.Model.extend({
	 defaults: 
	   {
	    username:"",
	    password:"",
	    cpassword:"",
	    gender:"",
	    country:""
	    	 
	   },
	   initialize:function(){
	   	alert("in reg model");
	   },
	   render :function(){
	   	alert("in render");
	   	alert("username:"+this.get("username")+"password"+this.get("password")+"gender"+this.get("gender")+"country :"+this.get("country"));
	   	
	   },
		
 });
 return regModel;
});