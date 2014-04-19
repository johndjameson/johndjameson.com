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
      count = Dribbble.s.shotCount,
      shot,
      str = '',
      $grid = $('.js-dribbble').find('.grid');

    for (var i = 0; i < count; i++) {
      shot = Dribbble.s.json.shots[i];
      console.log(shot);
      str +=
        '<div class="grid-box grid-box--1of2 grid-box--l--1of' + count + '">' +
          '<a class="unstyledLink" href="' + shot.url + '">'+
            '<div class="thumbnail">' +
              '<img class="thumbnail-image" src="' + shot.image_400_url + '">' +
              '<div class="thumbnail-content">' +
                '<span class="thumbnail-title">' + shot.title + '</span>' +
              '</div>'+
            '</div>' +
          '</a>' +
        '</div>';
    }

    $grid.append(str);
  }
};

$(function(){
  Dribbble.init();
});

