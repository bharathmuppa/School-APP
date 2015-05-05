define(['jquery', 'underscore', 'backbone', 'text!template/assessment.html'], function($, _, backbone, assessmentTemplate) {

	var assessview=backbone.View.extend({

	el:$('#content'),
	initialize:function(){
	var template=_.template(assessmentTemplate);
	this.$el.append(template);
	},
	events:{
	"click #tenth":"tenthdata",
	"click #ninth":"ninthdata"
	},

	tenthdata:function() {
		var tentharray=[];
		if(localStorage.getItem("statusForPage")==1){
		if(localStorage.getItem("data")==null){
		$.ajax({
			
			url : "students.json",
			method : "GET",
			dataType : "json",
			success : function(data){
                
				var length=data.studentDetails.length;
				
					for(var i=0;i<length;i++)
					{		
						if(data.studentDetails[i].clas=="tenth" && data.studentDetails[i].status=="no")
						{	
						tentharray.push(data.studentDetails[i]);
						localStorage.setItem("data",JSON.stringify(tentharray));
						
						window.location.href='index.html#details';
						}
						else{
							//alert("not tenth");
						}
						
					}
				
					

			}, //sucss
			error : function(xhr, status, error) {
				console.log(error.message);

			}
		});//end of ajax call in tentjh function
		
		}//end of if statement
				else{
				var dat=JSON.parse(localStorage.getItem("data"));
			alert(JSON.stringify(dat));	
	
							for(var i=0;i<dat.length;i++)
							{	
									
								if(dat[i].clas=="tenth" && dat[i].status=="no")
								{	
								tentharray.push(dat[i]);
								localStorage.setItem("data",JSON.stringify(tentharray));
								
								window.location.href='index.html#details';
								}//end of if loop in tenth /else/for
								else{
									//alert("not tenth");
								}
								
							}	//end of for loop
				}//end of else statement
		}//end of if function checkinf for path
		else{
				        window.location.href='index.html#detailstable';
								
								
							
		}
	},
	ninthdata:function() {
		
		var nintharray=[];
		if(localStorage.getItem("statusForPage")==1){
		if(localStorage.getItem("data")==null){
		$.ajax({
			
			url : "students.json",
			method : "GET",
			dataType : "json",
			success : function(data){
                
				var length=data.studentDetails.length;
				
					for(var i=0;i<length;i++)
					{		
						if(data.studentDetails[i].clas=="ninth" && data.studentDetails[i].status=="no")
						{	
						nintharray.push(data.studentDetails[i]);
						localStorage.setItem("data",JSON.stringify(nintharray));
						
						window.location.href='index.html#details';
						}
						else{
							//alert("not tenth");
						}
						
					}//end of for
				
					

			}, //sucss
			error : function(xhr, status, error) {
				console.log(error.message);

			}//end of error
		});//end of ajax
       }//end of if loop in ninth function
           else{
				var dat=JSON.parse(localStorage.getItem("data"));
			
	
							for(var i=0;i<dat.length;i++)
							{	
									
								if(dat[i].clas=="ninth" && dat[i].status=="no")
								{	
								tentharray.push(dat[i]);
								localStorage.setItem("data",JSON.stringify(nintharray));
								
								window.location.href='index.html#details';
								}//end of if loop in tenth /else/for
								else{
									//alert("not tenth");
								}
								
							}	//end of for loop
				}//end of else statement
				}//end of if for path selection
				else{
					
	        window.location.href='index.html#detailstable';
								
								
							
		}
	}//end of ninth function
});//end of extend
	return assessview;
});