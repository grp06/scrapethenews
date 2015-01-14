
if (Meteor.isClient) {




    Template.health.helpers({
        returnLinks: function() {
            //var links = ScrapedLinks.find({}).fetch()
            //var linkArray = links[0].scraped;
            //var fun = linkArray[0]

            return ScrapedLinks.find({category: "health" }, {sort: {timestamp: -1}, limit: 24})

        },
        returnCount: function(){
            return ScrapedLinks.find({category: "health"}).count()

            

        }

    })

    Template.health.events({
        'click .delete': function () {
        var healthRecords = ScrapedLinks.find({category: "health"}).fetch();
        var totalRecords = ScrapedLinks.find({category: "health"}).count();

/*  
//Trying to delete the oldest records and leave the oldest 24

        var toDelete = totalRecords - 24;

            for (i = 0; i < toDelete; i++) {
                ScrapedLinks.remove({
                    _id: healthRecords[i]._id
                })
            
            }   
  */
        }
    });








}






















