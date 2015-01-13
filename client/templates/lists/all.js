ScrapedLinks = new Mongo.Collection("scrapedLinks");

if (Meteor.isClient) {


Template.all.rendered = function(){
  this.$('.ui.dropdown').dropdown();
}


    Template.all.helpers({
        returnLinks: function() {
            //var links = ScrapedLinks.find({}).fetch()
            //var linkArray = links[0].scraped;
            //var fun = linkArray[0]


            return ScrapedLinks.find({}).fetch()






        },

    })

    Template.all.events({

        'click .scrape': function() {
            ts = ScrapedLinks.find({}, {
                fields: {
                    scraped: 0
                }
            }).fetch();

            console.log(ts.length);

            for (i = 0; i < (ts.length); i++) {
                ScrapedLinks.remove({
                    _id: ts[i]._id
                })

            }
            var category = $('.item')
                //var numberOfArticles = $(".numberOfArticles").val();

            var category = Session.get('selectedCategory');

            Meteor.call('scrapeCat', function(error, result) {
                //do something?
            });
        },
        'click .3hrs': function(){

        }

    })

    Template.nav.events({
        'click .technology': function() {
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=tc&tbs=qdr:h5';
            Meteor.call('scrapeCat', url, function(error, result) {
                console.log(error)
            });
			ts = ScrapedLinks.find({}).fetch(); for (i = 0; i < (ts.length); i++) {ScrapedLinks.remove({_id: ts[i]._id})

        }
    },
        'click .business': function() {
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=b';
            Meteor.call('scrapeCat', url,  function(error, result) {
                //do something?
            });
			ts = ScrapedLinks.find({}).fetch(); for (i = 0; i < (ts.length); i++) {ScrapedLinks.remove({_id: ts[i]._id})

            }
        },
        'click .science': function() {
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=snc';
            Meteor.call('scrapeCat', url,  function(error, result) {
                //do something?
            });
			ts = ScrapedLinks.find({}).fetch(); for (i = 0; i < (ts.length); i++) {ScrapedLinks.remove({_id: ts[i]._id})

            }
        },
        'click .entertainment': function() {
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=e';
            Meteor.call('scrapeCat', url,  function(error, result) {
                //do something?
            });
			ts = ScrapedLinks.find({}).fetch(); for (i = 0; i < (ts.length); i++) {ScrapedLinks.remove({_id: ts[i]._id})

            }
        },
        'click .health': function() {
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=m';
            Meteor.call('scrapeCat', url,  function(error, result) {
                //do something?
            });
			ts = ScrapedLinks.find({}).fetch(); for (i = 0; i < (ts.length); i++) {ScrapedLinks.remove({_id: ts[i]._id})

            }
        },
        'click .world': function() {
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=w';
            Meteor.call('scrapeCat', url,  function(error, result) {
                //do something?
            });
			ts = ScrapedLinks.find({}).fetch(); for (i = 0; i < (ts.length); i++) {ScrapedLinks.remove({_id: ts[i]._id})

            }
        },
        'click .sports': function() {
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=s';
            Meteor.call('scrapeCat', url,  function(error, result) {
                //do something?
            });
			ts = ScrapedLinks.find({}).fetch(); for (i = 0; i < (ts.length); i++) {ScrapedLinks.remove({_id: ts[i]._id})

            }
        },
        'click .business': function() {
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=b';
            Meteor.call('scrapeCat', url,  function(error, result) {
                //do something?
            });
			ts = ScrapedLinks.find({}).fetch(); for (i = 0; i < (ts.length); i++) {ScrapedLinks.remove({_id: ts[i]._id})

            }
        },
        'click .business': function() {
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=b';
            Meteor.call('scrapeCat', url,  function(error, result) {
                //do something?
            });
			ts = ScrapedLinks.find({}).fetch(); for (i = 0; i < (ts.length); i++) {ScrapedLinks.remove({_id: ts[i]._id})

            }
        },
        'click .business': function() {
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=b';
            Meteor.call('scrapeCat', url,  function(error, result) {
                //do something?
            });
			ts = ScrapedLinks.find({}).fetch(); for (i = 0; i < (ts.length); i++) {ScrapedLinks.remove({_id: ts[i]._id})

            }
        },
        'click .business': function() {
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=b';
            Meteor.call('scrapeCat', url,  function(error, result) {
                //do something?
            });
			ts = ScrapedLinks.find({}).fetch(); for (i = 0; i < (ts.length); i++) {ScrapedLinks.remove({_id: ts[i]._id})

            }
        },
        'click .business': function() {
       		var url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=b';
            Meteor.call('scrapeCat', url,  function(error, result) {
                //do something?
            });
			ts = ScrapedLinks.find({}).fetch(); for (i = 0; i < (ts.length); i++) {ScrapedLinks.remove({_id: ts[i]._id})

            }
        },
    

    })


}

















