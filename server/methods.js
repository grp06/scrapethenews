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
            $('.esc-thumbnail-image-wrapper').filter(function() {

                var img4before = $(this).children().attr('src');
                var img16before = $(this).children().attr('imgsrc');

                var http = "http:";

                if(img4before === undefined){
                    console.log('undefined')
                } else {

                var img4 = http.concat(img4before);
                imageArray.push(img4)


                }

                if(img16before === undefined){
                    console.log('undefined')
                } else {
                var img16 = http.concat(img16before);
                imageArray.push(img16)

                }


          

            



            });
            var sourceArray = [];
            $('.al-attribution-cell.source-cell').filter(function() {

              sourceArray.push($(this).text());


            });
            var timestampArray = [];
            $('.al-attribution-timestamp').filter(function() {

              timestampArray.push($(this).text());


            });



 
            //console.log(linkArray)
            //console.log(titleArray)
            //console.log(descriptionArray)
            console.log(imageArray)
            //console.log(sourceArray);
            //console.log(timestampArray);



            for(i = 0; i < 20; i++){
                ScrapedLinks.insert({
                    link: linkArray[i],
                    title: titleArray[i],
                    description: descriptionArray[i],
                    imageUrl: imageArray[i],
                    source: sourceArray[i],
                    timestamp: timestampArray[i]
                });


            }



        } else {
        	console.log(error)
        }}));
    }
});



