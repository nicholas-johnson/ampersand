(function($){
  $.fn.ampersand = function() {
    $(this).each(function(i, el) {
      el.innerHTML = el.innerHTML.replace("&amp;", "<span class='ampersand'>&amp;</span>")
    });
    return this;
  };
})(jQuery);;