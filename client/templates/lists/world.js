
if (Meteor.isClient) {




    Template.world.helpers({
        returnLinks: function() {
            //var links = ScrapedLinks.find({}).fetch()
            //var linkArray = links[0].scraped;
            //var fun = linkArray[0]

            return ScrapedLinks.find({category: "world" }, {sort: {timestamp: -1}, limit: 24})

        },
        returnCount: function(){
            return ScrapedLinks.find({category: "world"}).count()

        }

    })


}

















