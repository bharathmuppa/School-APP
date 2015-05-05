define(['jquery','backbone','underscore','text!template/dataTable2.html','text!template/randomAssess.html','libs/data-tables.min'],function($,Backbone,_,dataTablesTemplate,assesstable,dataTable){
	var datacollect=Backbone.View.extend({
	
	el:$('#content'),
	
	initialize:function(){
	
          var dat=JSON.parse(localStorage.getItem("data"));
          /*var compiledTemplate = _.template(dataTablesTemplate, {	
	                                                                   "dt":dat	
																}); 
				$("#content").html(compiledTemplate);
	              */
	       var compiledTemplate = _.template(dataTablesTemplate);
			$("#content").html(compiledTemplate);
			$table = '<table cellpadding="0" cellspacing="0" border="1" class="bharath" style="width: 85%;"></table>';
			$($table).appendTo('#tableContainer');
				
			var oTable = $("#tableContainer .bharath").dataTable({
				"aaData" : dat,
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

	},//end of initilaize
	
	
	  events:{
			"click table.dataTable .sorting_1":"assessStudent"
			
	     	},
	
	  assessStudent:function(e){
	  	var a,b;
			var dat=JSON.parse(localStorage.getItem("data"));
			var x= $(e.target).text();
			e.preventDefault();
			
		    for(var i=0;i<dat.length;i++){
			
	        	if(dat[i].name==x){
			
                        wordsList=[];
			                    $.ajax({
			                	url : "words.json",
								method : "GET",
								dataType : "json",
								success : function(data){
										var length=data.list.length;
			
										for(var i=0;i<length;i++)
										{		
										//alert(data.list[i]);
										wordsList.push(data.list[i]);
										}
			
										localStorage.setItem("wordsDB",JSON.stringify(wordsList));

									}, //sucss
								error : function(xhr, status, error) {
									console.log(error.message);
	
									}//err end
		
								});//end of ajax call
			
					localStorage.setItem("currentStudent",JSON.stringify(dat[i]));
					var curstu=JSON.parse(localStorage.getItem("currentStudent"));
					var wordsList1=JSON.parse(localStorage.getItem("wordsDB"));
					
					var compiledTemplate1 = _.template(assesstable,{
																	"retrieve":curstu,
																	"words":wordsList1
											});
				
					$("#content").html(compiledTemplate1);
				
					for(var j=0;j<wordsList1.length;j++){
					$("#wordsplace").append("<button class="+"initial"+" value="+JSON.stringify(wordsList1[j])+" > "+JSON.stringify(wordsList1[j])+" </button>");
				
			

       				
			}//end of for loop		
					
			
				$("#wordsplace").append("<br><br><center><input type="+"submit"+ " class="+"submit"+" id="+"wordsubmit"+" value="+"Submit"+"></input></center>");
				$("button").click(function(a){
    						// Define the Dialog and its properties.
       						if(!($(a.currentTarget).hasClass("correct")||$(a.currentTarget).hasClass("wrong"))){
   	    							$("#correctdiv").html("have the student said the right answer?");
    	  						    $("#correctdiv").dialog({
           				                resizable: false,
            							modal: true,
            							title: "Answer",
            							height: 250,
            							width: 400,
            							buttons: {
                									"Correct": function () {
                    								$(this).dialog('close');
                 								    callback(true,a);
                										},
                    								"wrong": function () {
                    								$(this).dialog('close');
                    								callback(false,a);
                										}
            									}
        					});  
    					}//end of if loop of checking the class of  corect or wrong
   					 else{
    						$("#correctdiv").html("want to change the previous option for this word?");
       	    				$("#correctdiv").dialog({
            								resizable: false,
            								modal: true,
            								title: "Answer",
            								height: 250,
            								width: 400,
            								buttons: {
       											     "yes": function () {
            												$("#correctdiv").html("have the student said the right answer?");
                    										$(this).dialog('close');
                   											 $("#correctdiv").dialog({
                    										resizable: false,
                    										modal: true,
                    										title: "Answer",
                    										height: 250,
                    										width: 400,
                    										buttons: {
                         										  "Correct": function () {
                           												 $(this).dialog('close');
                            											 if($(a.currentTarget).hasClass("correct")){
                            													alert("you already assigned it as correct");
                            												}//end of if loop in correct of yes func
                            											else{
                            												$(a.currentTarget).removeClass("wrong");
                            												$(a.currentTarget).addClass("correct");    
      							  											var res1=$('input').val();
        																	res1++;
        																	$("input:text").val(res1);
                           												 }
                               							          },//end of correct button functionality
                          							             "wrong": function () {
                          								            	$(this).dialog('close');
                         												if($(a.currentTarget).hasClass("wrong")){
                            												alert("you already assigned it as wrong");
                           										 			}//end of if in wrong
                            											else{
                            												$(a.currentTarget).removeClass("correct");
                            												$(a.currentTarget).addClass("wrong");    
      							 											 var res1=$('input').val();
        																		res1--;
        																	$("input:text").val(res1);
                            												}
                    											      }//end of wrong button function
                  												  }//end of button property
               								  });  //end of dilog function  
            				 },//end of yes when opted for re verify the answer
            							"no": function () {
                						$(this).dialog('close');
                
            							}//end of no when opted for re verify the answer
             
                            }//end of butons
                          }); //end of dilog in else function
                       }//end of else loop 
                    });//end of click function of jquery
    

                       function callback(value,a) {
                                         if (value) {
    		                                 $(a.currentTarget).addClass("correct");
        									 var res1=$('input').val();
        									 res1++;
        									 $("input:text").val(res1);
       										}//end of if in call back function
                                          else {
                                               $(a.currentTarget).addClass("wrong"); 
                                         }//end of else in callback function
							}// end of call back function
				
				$(".submit").click(function(b){
					var x=$(".correct").length;
					var y=$(".wrong").length;
					var z=x+y;
					if(z==wordsList1.length){
							
							//$("#correctdiv").html("<p>All the questions have been answered,marks obtained are :"+$('input').val()+"</p><br> <p>if you want add any grace marks you can enter here in input box</p><br><br><br><br><center></center>");
			       
			        curstu.marks=$('input').val();	
			        curstu.status="yes";
			         dat[i].marks=$('input').val();	
			        dat[i].status="yes";
			        localStorage.setItem("currentStudent",JSON.stringify(curstu));
			         localStorage.setItem("data",JSON.stringify(dat));			
                     window.location.href = 'index.html#home';
					}
					else{
						alert("complete all the words to assess");
					}
				});
				break;
			}//end of if statement 
		}//end of for loop for student curent
	  },//end of assess function
  });//end of extend
return datacollect;	
});
