Meteor.methods({


    scrapeCat: function(url) {


        var cheerio = Meteor.npmRequire('cheerio');
        var request = Meteor.npmRequire('request');

        request(url, Meteor.bindEnvironment(function(error, response, html) {
  			if (!error && response.statusCode == 200) {

            var $ = cheerio.load(html);

            var linkArray = [];
            $('h2.esc-lead-article-title').filter(function() {

               linkArray.push($(this).children().attr('href'));


            });
            var titleArray = [];
            $('h2.esc-lead-article-title').filter(function() {

                titleArray.push($(this).children().children().text())


            });
            var descriptionArray = [];
            $('.esc-lead-snippet-wrapper').filter(function() {

                descriptionArray.push($(this).text())


            });
            var imageArray = [];
            $('.esc-thumbnail-image').filter(function() {

                var imgBefore = $(this).attr('src');
                var http = "http:";
                var img = http.concat(imgBefore);

                imageArray.push(img)



            });
            var sourceArray = [];
            $('.al-attribution-cell.source-cell').filter(function() {

              sourceArray.push($(this).text());


            });



 
            //console.log(linkArray)
            //console.log(titleArray)
            //console.log(descriptionArray)
            //console.log(imageArray)
            console.log(sourceArray)


            for(i = 0; i < 20; i++){
                ScrapedLinks.insert({
                    link: linkArray[i],
                    title: titleArray[i],
                    description: descriptionArray[i],
                    imageUrl: imageArray[i],
                    source: sourceArray[i]
                });


            }



        } else {
        	console.log(error)
        }}));
    }
});



