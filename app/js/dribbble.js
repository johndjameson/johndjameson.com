var Dribbble = {
  s: {
    apiURL: '/includes/dribbble.php',
    json: {},
    shotCount: 4
  },

  init: function() {
    Dribbble.requestJSON();
  },

  requestJSON: function() {
    $.getJSON(Dribbble.s.apiURL, function(json) {
      Dribbble.s.json = json;
    }).done(Dribbble.jsonCallback);
  },

  jsonCallback: function() {
    Dribbble.prepareDocument();
    Dribbble.appendToDocument();
  },

  prepareDocument: function() {
    var $dribbble = $('.js-dribbble');

    $dribbble.addClass('row');
    $dribbble.addClass('mbl');
    $dribbble.html(
      '<div class="cell">' +
        '<h2 class="tac">Latest from Dribbble</h2>' +
        '<div class="grid"></div>' +
      '</div>'
    );
  },

  appendToDocument: function() {
    var
      shots = Dribbble.s.json.shots,
      count = Dribbble.s.shotCount,
      str = '',
      $grid = $('.js-dribbble').find('.grid');

    for (var i = 0; i < count; i++) {
      console.log(shots[i]);
      str +=
        '<div class="grid-box grid-box--1of' + count + '">' +
          '<img src="' + shots[i].image_400_url + '">' +
          '<p class="tac mbf">' + shots[i].title + '</p>' +
        '</div>';
    }

    $grid.append(str);
  }
};

$(function(){
  Dribbble.init();
});

