// *************************************
//
//   Application
//   -> Compendium
//
// *************************************

// -------------------------------------
//   Helpers
// -------------------------------------

// ----- For Each ----- //

var forEach = function(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

// ----- Randomize ----- //

var getRandomItem = function(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// -------------------------------------
//   Services
// -------------------------------------

var stickerNode = function() {
  var stickerNode = document.querySelectorAll('.js-heroSticker');

  forEach(stickerNode, function(index, node) {
    node.innerHTML = getRandomItem([
      'Amper&shy;sands',
      'Cool Code',
      'Font Stuff',
      'SVG Maybe',
      'Style Sheets'
    ]);
  });
}

// -------------------------------------
//   Document Ready
// -------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  stickerNode();
});

// -------------------------------------
//   Inbox
// -------------------------------------

// ...
