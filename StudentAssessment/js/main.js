require.config({
	             paths:{
	                 	jquery : 'libs/jquery/jquery-min',
	                   	underscore : 'libs/underscore/underscore-min',
	                  	backbone :  'libs/backbone/backbone',
                        template : '../template'        
                       }  
               });
 
 
 
 require(['jquery','app'],function($, App){
                                         
	                                        App.initialize();
                                           }
        );
