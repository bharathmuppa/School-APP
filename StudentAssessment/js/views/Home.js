define(['jquery','backbone','underscore','text!template/Home.html','text!template/navbar.html','text!template/assessment.html'],function($,Backbone,_,homepage,navbar,assessTemplate){
	
			var homeView=Backbone.View.extend({
				             el:$('#content'),
				             
				             initialize:function(){
				             	
				             	 var compiledTemplate1 = _.template(navbar);
				             	  $('nav').html(compiledTemplate1);
				             	       var compiledTemplate2 = _.template(homepage);
                                                       this.$el.append(compiledTemplate2);
                                                        $("#abtus").removeClass("active");
                                                        $("#abtus a").removeClass("active");
														$("#logout").removeClass("active");
														$("#logout a").removeClass("active");
														
				             	         },
				             	         
				             events:{
				             	"click #assess":"goToAssessmentPage",
				             	"click #details":"goTodetailsPage"
				             },	         
				             	goToAssessmentPage:function(){
				             		localStorage.setItem("statusForPage",1);
				             	
				             			window.location.href = 'index.html#assessmentTable';

				             	},
				             	goTodetailsPage:  function(){
				             		localStorage.setItem("statusForPage",2);
				             		
				             			window.location.href = 'index.html#assessmentTable';

				             	},       
                             			            
			              });	
			              
			              return homeView;			
			});
