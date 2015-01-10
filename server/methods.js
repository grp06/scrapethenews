Meteor.methods({


    scrapeCat: function() {


        var cheerio = Meteor.npmRequire('cheerio');
        var http = Meteor.npmRequire('http');
        var request = Meteor.npmRequire('request');

        url = 'https://news.google.com/news/section?pz=1&cf=all&q=SpaceX';
        request(url, Meteor.bindEnvironment(function(error, response, html) {

            var $ = cheerio.load(html);

            var i = 0;
            $('h2.esc-lead-article-title').filter(function() {

                var link = $(this).children().attr('href')
                var time = moment().format('MMMM Do YYYY, h:mm:ss a')
                i = i + 1
                if (i < 6) {
                    ScrapedLinks.insert({
                        scraped: link,
                        time: time
                    }, console.log(i))
                }

            })



        }));
    }
});