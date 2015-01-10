
ScrapedLinks = new Mongo.Collection("scrapedLinks");

if (Meteor.isClient) {

    Template.all.events({

        'click .scrape': function() {

            Meteor.call('scrapeDog', function(error, result) {
                console.log('dog')
            });


        },
        'click .cat': function() {
            Meteor.call('scrapeCat', function(error, result) {
                console.log('cat')
            });
        }


    })


}