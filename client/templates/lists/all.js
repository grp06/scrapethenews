ScrapedLinks = new Mongo.Collection("scrapedLinks");

if (Meteor.isClient) {

    Template.all.helpers({
        returnTechLinks: function() {
            //var links = ScrapedLinks.find({}).fetch()
            //var linkArray = links[0].scraped;
            //var fun = linkArray[0]


            var scraped = ScrapedLinks.find({}).fetch()

            var uniqueLinks = _(scraped).chain()
                .pluck('scraped')
                .flatten()
                .uniq().compact().value();

            return uniqueLinks

        }
    })

    Template.all.events({

        'click .scrape': function() {
            ts = ScrapedLinks.find({}, {fields: {scraped: 0}}).fetch();

            console.log(ts.length);

            for (i = 0; i < (ts.length); i++) {
                ScrapedLinks.remove({
                    _id: ts[i]._id
                })

            }

            Meteor.call('scrapeCat', function(error, result) {
                console.log('cat')
            });
        }


    })


}