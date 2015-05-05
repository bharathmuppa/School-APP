define(['jquery', 'backbone','underscore','text!template/LoginForm.html','text!template/defaultNavbar.html'],
                function($,Backbone,_,loginPageTemplate,defnavbar)
                  { 
                      
                    var list={};
                    var LoginPageView=Backbone.View.extend({
                                                            el : $('#content'),
                                                            id : 'login-page',
      
                                      initialize : function() {
                                                                },
        
                                      render: function(){
                                                     
                                                       var compiledTemplate1=_.template(defnavbar);
                                                        $("nav").html(compiledTemplate1);
                                                      
                                                      
                                                        var compiledTemplate = _.template(loginPageTemplate);
                                                        $("#abtus").removeClass("active");
                                                        $("#abtus a").removeClass("active");
					                                    $("#contactus").removeClass("active");
					                                    $("#contactus a").removeClass("active");
														$("#home").addClass("active");
															$("#home a").addClass("active");
                                                        this.$el.append(compiledTemplate);
                                                        },
            
                                                 events:{
                                                             "click #dub":"performvalidate",
                                                             
                                                        },
                                                        
                                            
                                             performvalidate:function(e){
                                                                    var st=$("#user").val();
          	                                                         var pd=$("#pwd").val();
          
                                                                  $.ajax({
             	url:"logger.json",
             	method:"GET",
              
               dataType:"json",
               success:function(data){ 
               //	res=dta;
               
               var n=data.logdetails.length;
                var flag=0;
               for(var i=0;i<n;i++)
                 {
                  
                 	//alert(i);
                 	//alert(data.logdetails[i].username);
                 	if(data.logdetails[i].username==st&&data.logdetails[i].password==pd)
                 	 {
                 	 	flag=1;
                 	 	
                 	 	localStorage.setItem("user", st);
                 	 	window.location.href = 'index.html#home';
                 	 	break;
                 	  
                 	 }
                }
                if(flag!=1)
                  {
                  	 alert("invalid");
                  }
              
               },//sucss
               error:function(xhr,status,error){
               alert("error connecting json");
               
                  }
                 
             });
             
                                                                }//end of perform validate 
                                                });//end of extend
	return LoginPageView;
   });
