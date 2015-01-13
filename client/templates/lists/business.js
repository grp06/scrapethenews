
if (Meteor.isClient) {




    Template.business.helpers({
        returnLinks: function() {
            //var links = ScrapedLinks.find({}).fetch()
            //var linkArray = links[0].scraped;
            //var fun = linkArray[0]

            return ScrapedLinks.find({category: "business" }, {sort: {timestamp: -1}, limit: 24})

        },
        returnCount: function(){
            return ScrapedLinks.find({category: "business"}).count()

        }

    })

    Template.all.events({
        'click .3hrs': function(){

        }

    })

    


}

















