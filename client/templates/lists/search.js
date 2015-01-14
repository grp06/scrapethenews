if (Meteor.isClient) {




    Template.search.events({
        'keyup .search': function(e) {
            if (e.which === 13) {

                var topic = $('.search').val();
                
            }
        }
    })
}