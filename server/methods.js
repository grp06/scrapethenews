Meteor.methods({


    scrapeCat: function() {


        var cheerio = Meteor.npmRequire('cheerio');
        var http = Meteor.npmRequire('http');
        var request = Meteor.npmRequire('request');

        url = 'http://news.google.com/news/section?pz=1&cf=all&ned=us&topic=tc';
        request(url, Meteor.bindEnvironment(function(error, response, html) {

            var $ = cheerio.load(html);


            $('h2.esc-lead-article-title').filter(function() {

                var link = $(this).children().attr('href')
                var time = moment().format('MMMM Do YYYY, h:mm:ss a')
                ScrapedLinks.insert({
                    scraped: link, 
                    time: time
                }, console.log("got the links"))


            })



        }));
    }
});