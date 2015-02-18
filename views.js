//Model View
var MovieView = Backbone.View.extend({
  template: _.template($('#alumniTmpl').html()),//why do we need .html() at the end
  tagName: 'article',
  initialize: function () {
    console.log('MovieView initialized');
  },
  events: {

  }

});

// Collection View

var CollectionView = Backbone.View.extend({
  el: $('section'),
  initialize: function () {
    console.log('CollectionView initialized');
  },
  events: {

  }
});
