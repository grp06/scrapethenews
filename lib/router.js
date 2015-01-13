Router.configure({
  layoutTemplate: 'layout',
   notFoundTemplate: 'notFound',

});

Router.route('/all', {name: 'all'});

Router.route('/technology', {name: 'technology'});

Router.route('/business', {name: 'business'});

Router.route('/science', {name: 'science'});

Router.route('/entertainment', {name: 'entertainment'});

Router.route('/health', {name: 'health'});

Router.route('/world', {name: 'world'});

Router.route('/sports', {name: 'sports'});
