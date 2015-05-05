define(['jquery', 'backbone', 'underscore', 'text!template/Aboutus.html','text!template/defaultNavbar.html','text!template/navbar.html'], function($, Backbone, _,aboutus,defnavbar,navbar) {
	
	var Dispalyview = Backbone.View.extend({
		el : $("#content"),
		id : "display",
		initialize : function() {
			

		},
		render : function() {
			 if(localStorage.getItem("user")==null){
			 	alert("befiore login");
                                                       var compiledTemplate1=_.template(defnavbar);
                                                        $("nav").html(compiledTemplate1);
                                                        $("#contactus").removeClass("active");
														$("#contactus a").removeClass("active");
                                                       }
                                                       else{
                                                       	alert("after login");
                                                       	var compiledTemplate2=_.template(navbar);
                                                        $("nav").html(compiledTemplate2);
                                                        $("#logout").removeClass("active");
														$("#logout a").removeClass("active");
                                                       }
					var compiledTemplate = _.template(aboutus);
					$("#content").html(compiledTemplate);
					$("#home").removeClass("active");
					$("#home a").removeClass("active");
					
					$("#abtus").addClass("active");
					$("#abtus a").addClass("active");
					
				},
				error : function(xhr, status, error) {
					console.log(error.message);

				}
			});		
	return Dispalyview;
});
