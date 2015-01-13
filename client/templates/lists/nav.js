   if(Meteor.isClient){

    Template.nav.events({
        'click .technology': function() {
            var category = "technology";
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=tc&tbs=qdr:h5';
            Meteor.call('scrapeCat', url, category, function(error, result) {
                
            });

        
    },
        'click .business': function() {
            var category = "business";

       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=b';
            Meteor.call('scrapeCat', url, category, function(error, result) {
                //do something?
            });

            
        },
        'click .science': function() {
            var category = "science";
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=snc';
            Meteor.call('scrapeCat', url, category, function(error, result) {
                //do something?
            });

            
        },
        'click .entertainment': function() {
            var category = "entertainment";
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=e';
            Meteor.call('scrapeCat', url, category, function(error, result) {
                //do something?
            });

            
        },
        'click .health': function() {
            var category = "health";
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=m';
            Meteor.call('scrapeCat', url, category, function(error, result) {
                //do something?
            });

            
        },
        'click .world': function() {
            var category = "world";
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=w';
            Meteor.call('scrapeCat', url, category, function(error, result) {
                //do something?
            });

            
        },
        'click .sports': function() {
            var category = "sports";
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=s';
            Meteor.call('scrapeCat', url, category, function(error, result) {
                //do something?
            });

            
        },
        
    

    })

}