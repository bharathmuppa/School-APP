define(['jquery', 'backbone','underscore','text!template/ContactUs.html'],
                function($,Backbone,_,ContactTemplate)
                  { 
                      
                    var list={};
                    var ContactView=Backbone.View.extend({
                                                            el : $('#content'),
                                                            id : 'Contact-page',
      
                                      initialize : function() {
                                                                },
        
                                      render: function(){
                                                        
                                                       
                                                        var compiledTemplate = _.template(ContactTemplate);
                                                        this.$el.append(compiledTemplate);
                                                        $("#home").removeClass("active");
                                                        $("#home a").removeClass("active");
														$("#abtus").removeClass("active");
														$("#abtus a").removeClass("active");
														$("#contactus").addClass("active");
														$("#contactus a").addClass("active");
                                                        }
            
                                                  
                                                });//end of extend
    return ContactView;
   });
