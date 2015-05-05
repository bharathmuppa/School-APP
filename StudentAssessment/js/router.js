define([
	'jquery',
	'underscore',
	'backbone',
    'views/loginview',
    'views/aboutus',
    'views/contactus',
    'views/Home',
    'views/assessmentPage',
    'views/detailsView',
    'views/dataViewUpdated'
       ],
         
          function($,_,Backbone,loginpage,AbtUs,ContUs,homepage,assessmentView,detailsView,dataUp)
            { 
                var myviews=[];
                var mainRouter=Backbone.Router.extend({
                                                         routes:
                                                              {
                                                              	
                                                                "login" : "loginpage",
                                                                "home":"homepage",
                                                                "Aboutus" :  "AbtUs",
                                                                "ContactUs" : "ContUs",
                                                                "assessmentTable":"assessfunction",
                                                                "logout":"logoutProcess",
                                                                "details":"detailscollect",
                                                                "detailstable":"activeData",
                                                                "*path" : "defaultRoute"
	                                                           },
	                                                           logoutProcess:function(){
	                                                           	//alert("in logout");
	                                                           	$(myviews).each(function(ind,val){
				                                                                                                val.undelegateEvents();
			                                                                                                     val.$el.removeData().unbind();
				                                                                                                val.$el.empty();
				                                                                                                myviews.pop(val);   
		                                  	                                                            });
	                                                           	var logoutview=new loginpage();
                                                                                
																				localStorage.removeItem("user");
                                                                                  logoutview.render();
                                                                                
                                                                                  myviews.push(logoutview);
	                                                           	
	                                                           },
	                                                           assessfunction:function(actions){
                                                                	
                                                                	                            $(myviews).each(function(ind,val){
				                                                                                                val.undelegateEvents();
			                                                                                                     val.$el.removeData().unbind();
				                                                                                                val.$el.empty();
				                                                                                                myviews.pop(val);   
		                                  	                                                            });
                                                                   
                                                                                
                                                                                  var assessview=new assessmentView();
                                                                                 

                                                                                 
                                                                                 
                                                                                  myviews.push(assessview);
                                                        },
                                                        activeData:function(actions){
                                                                	
                                                                	                            $(myviews).each(function(ind,val){
				                                                                                                val.undelegateEvents();
			                                                                                                     val.$el.removeData().unbind();
				                                                                                                val.$el.empty();
				                                                                                                myviews.pop(val);   
		                                  	                                                            });
                                                                   
                                                                                
                                                                                  var actdat=new dataUp();
                                                                                 

                                                                                 
                                                                                 
                                                                                  myviews.push(actdat);
                                                        },
                                                        detailscollect:function(actions){
                                                        	$(myviews).each(function(ind,val){
				                                                                                                val.undelegateEvents();
			                                                                                                     val.$el.removeData().unbind();
				                                                                                                val.$el.empty();
				                                                                                                myviews.pop(val);   
		                                  	                                                            });
                                                                   
                                                                                    
                                                                                  var detailView=new detailsView();
                                                                                 

                                                                             
                                                                                 
                                                                                  myviews.push(detailView);
                                                        	
                                                        },
	                                                    homepage:function(actions){
                                                             
        	                                                                           $(myviews).each(function(ind,val){
				                                                                                                val.undelegateEvents();
			                                                                                                     val.$el.removeData().unbind();
				                                                                                                val.$el.empty();
				                                                                                                myviews.pop(val);   
		                                  	                                                            });
                                                                   
                                                                                
                                                                                  var homeview=new homepage();
                                                                                 

                                                                                 
                                                                                 
                                                                                  myviews.push(homeview);
                                                        }
           
           
	                                                   });

                  var initialize=function(){
                                            var routeobj=new mainRouter;
                                            routeobj.on('route:defaultRoute',function(actions){
                                                               
        	                                                                           $(myviews).each(function(ind,val){
				                                                                                                val.undelegateEvents();
			                                                                                                     val.$el.removeData().unbind();
				                                                                                                val.$el.empty();
				                                                                                                myviews.pop(val);   
		                                  	                                                            });
                                                                   

                                                                                  var logview=new loginpage();
                                                                                

                                                                                  logview.render();
                                                                                
                                                                                  myviews.push(logview);
                                                        });
           
                                             routeobj.on("route:AbtUs",function(actions){
         	                                                                          
         	                                                                          $(myviews).each(function(ind,val){
				                                                                                                    val.undelegateEvents();
				                                                                                                    val.$el.removeData().unbind();
				                                                                                                    val.$el.empty();
				                                                                                                    myviews.pop(val);
			                                                                                           });
         	                                                                          var aboutpage=new AbtUs();
         	                                                                          aboutpage.render(); 
         	                                                                          myviews.push(aboutpage);
                                                    });  
           
                                               routeobj.on("route:ContUs",function(actions){
                                                                                       console.log("routed to contact us page");
                                                                                       $(myviews).each(function(ind,val){
                                                                                                                val.undelegateEvents();
                                                                                                                val.$el.removeData().unbind();
                                                                                                                val.$el.empty();
                                                                                                                myviews.pop(val);
                                                                                                        });
                                                                                       var contacts=new ContUs();
                                                                                      contacts.render(); 
                                                                                      myviews.push(contacts);
                                               });
       
                                              Backbone.history.start();
                            };
     
      return{
             initialize : initialize
        };
    });