
if (Meteor.isClient) {




    Template.health.helpers({
        returnLinks: function() {
            //var links = ScrapedLinks.find({}).fetch()
            //var linkArray = links[0].scraped;
            //var fun = linkArray[0]

            return ScrapedLinks.find({category: "health" }, {sort: {timestamp: -1}, limit: 24})

        },
        returnCount: function(){
            ScrapedLinks.find({category: "health"}).count()

        }

    })


    


}

















