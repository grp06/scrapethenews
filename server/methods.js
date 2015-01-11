Meteor.methods({


    scrapeCat: function(url) {


        var cheerio = Meteor.npmRequire('cheerio');
        var http = Meteor.npmRequire('http');
        var request = Meteor.npmRequire('request');

        request(url, Meteor.bindEnvironment(function(error, response, html) {

            var $ = cheerio.load(html);

            var i = 0;
            $('h2.esc-lead-article-title').filter(function() {

                link = $(this).children().attr('href')
                var time = moment().format('MMMM Do YYYY, h:mm:ss a')
                i = i + 1
                if (i < 21) {
                    ScrapedLinks.insert({
                        link: link,
                        title: null,
                        description: null,
                        pic: null,
                        number: i
                    })
                }

            })

            var f = 0
            $('h2.esc-lead-article-title').filter(function() {
                title = $(this).children().children().text()
                f = f + 1
                if (f < 21) {
                    ScrapedLinks.update({number: f}, {$set: {title: title}})
                }

            })
            var d = 0
			$('.esc-lead-snippet-wrapper').filter(function() {
                description = $(this).text()
                d = d + 1
                if (d < 21) {

                    ScrapedLinks.update({number: d}, {$set: {description: description}})
                }

            })
            var h = 0
            $('.esc-thumbnail-image').filter(function() {
                var picBefore = $(this).attr('src');
                console.log(picBefore);
                var http = "http:";
                var pic = http.concat(picBefore)
                console.log(pic)



                
                h = h + 1
                if (h < 21) {
                    ScrapedLinks.update({number: h}, {$set: {pic: pic}}, console.log('done'))
                }

            })

            



        }));
    }
});



