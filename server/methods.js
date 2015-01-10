Meteor.methods({


    scrapeCat: function() {


        var cheerio = Meteor.npmRequire('cheerio');
        var http = Meteor.npmRequire('http');
        var request = Meteor.npmRequire('request');

        url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=tc';
        request(url, Meteor.bindEnvironment(function(error, response, html) {

            var $ = cheerio.load(html);




            link = [];
            $('h2.esc-lead-article-title').filter(function() {


                link.push($(this).children().attr('href'))



            })

            ScrapedLinks.insert({
                scraped: link
            }, console.log("got the links"))

        }));
    }
});