define(['jquery','backbone','underscore','text!template/dataTable2.html','libs/data-tables.min'],function($,Backbone,_,dataTablesTemplate,dataTable){
	var datacollect=Backbone.View.extend({
	
	el:$('#content'),
	
	initialize:function(){
		
	activeArray=[];
	var act;
	if(localStorage.getItem("data")==null){
          
          
          	alert("you have no records to see go to assessment page for assess studenets");
           window.location.href='index.html#home';
          }
          else{
          	var dat=JSON.parse(localStorage.getItem("data"));
         for(var i=0;i<dat.length;i++)
							{	
										
								if(dat[i].status=="yes")
								{	
									
								activeArray.push(dat[i]);
								
								
								
								}//end of if loop in tenth /else/for
								else{
									//alert("not tenth");
								}
								
							}	//end of for loop
				}			localStorage.setItem("Activedata",JSON.stringify(activeArray));
							act=JSON.parse(localStorage.getItem("Activedata"));
	       var compiledTemplate = _.template(dataTablesTemplate);
			$("#content").html(compiledTemplate);
			$table = '<table cellpadding="0" cellspacing="0" border="1" class="dataactive"style="width: 85%;"></table>';
			$($table).appendTo('#tableContainer');
				
			var oTable = $("#tableContainer .dataactive").dataTable({
				"aaData" : act,
				"aoColumns" : [{
					"mDataProp" : "name",
					"sTitle":"NAME"
				}, {
					"mDataProp" : "clas",
					"sTitle":"class"
				}, {
					"mDataProp" : "status",
					"sTitle":"assessmentStatus"
				}, {
					"mDataProp" : "teacher",
					"sTitle":"teacher"
				},
				{		"mDataProp" : "marks",
					   "sTitle": "marks",
					   "bSortable": false
				            
				}]
			});
   $("#content").append("<br><button id="+"homepag"+" >Go back to Home</button>")
	},//end of initilaize
	events:
	{
		"click #homepag" :"gotoHome"
	},
	gotoHome:function(){
		window.location.href="index.html#home";
	}
	});//end of extennd
	return datacollect;
	});// end of define