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

            return ScrapedLinks.find({}, {sort: {timestamp: -1}, limit: 500})

        },
        returnCount: function(){
            return ScrapedLinks.find({}).count()

        }

    })

}

















