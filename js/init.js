$(document).ready(function() {
  $(".button-collapse").sideNav()
  $(".parallax").parallax()

  $(window).scroll(function(event) {
    var yOffset = window.pageYOffset
    var breakpoint = $("#index-banner").height()
    if (yOffset > breakpoint) $("#top-menu").addClass("nav-white")
    else $("#top-menu").removeClass("nav-white")
  })

  $(document).on("scroll", onScroll)

  //smoothscroll
  $('a[href^="#"]').on("click", function(e) {
    e.preventDefault()
    $(document).off("scroll")

    $("a").each(function() {
      $(this).removeClass("active")
    })
    $(this).addClass("active")

    var target = this.hash, menu = target
    $target = $(target)
    $("html, body").stop().animate({
      scrollTop: $target.offset().top + 2
    }, 500, "swing", function() {
      window.location.hash = target
      $(document).on("scroll", onScroll)
    })
  })
})

function onScroll(event) {
  var scrollPos = $(document).scrollTop()
  $(".nav-wrapper a").each(function() {
    try {
      var currLink = $(this)
      var refElement = $(currLink.attr("href"))
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".nav-wrapper ul li a").removeClass("active")
        currLink.addClass("active")
      } else {
        currLink.removeClass("active")
      }
    } catch (e) {}
  })
}
