# -------------------------------------
#   Setup
#   -> Namespace setup
# -------------------------------------

@Sidenotes ?= {}

# -------------------------------------
#   Sidenotes
#   -> Converts post footnotes to sidenotes
# -------------------------------------

Sidenotes = do ->

  els =
    post: $('.post')
    markers: $('[id^="fnref"]')
    footnotes: $('.footnotes').find('p')

  init = ->
    createSidenotes()
    toggleNotes()

  createSidenotes = ->
    els.markers.parent().wrap('<div class="post-subject"></div>')

    for index in [0...els.markers.length]
      content = $(els.footnotes[index])
                .html()
                .replace(/&nbsp;<a href=.#fn.*<\/a>/, '')

      $($('.post-subject')[index])
        .append("<aside class='post-sidenote' role='complementary'><p>#{content}</p></aside>")

  toggleNotes = ->
    if (els.footnotes.length > 0) and (els.markers.length > 0)
      els.post.addClass('has-sidenotes')

  init: init

#-------------------------------------
#  Document Ready
#-------------------------------------

jQuery ($) ->

  Sidenotes.init()
