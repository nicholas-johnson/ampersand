(function($){
  $.fn.ampersand = function(ampClass) {
    if (ampClass === undefined) {
      ampClass = "ampersand";
    }
    var get_contents = function(el) {
      $(el).contents().each(function(i,el) {
        if (el.nodeType === 3) {
          if (el.textContent) {
            el.textContent = el.textContent.replace(/&/g, "#ampersandmarker#")
          } else if (el.text) /* IE */ {
            el.text = el.text.replace(/&/g, "#ampersandmarker#")
          }
        } else if (el.nodeType === 1) {
          get_contents(el);
        }
      });
    }
    $(this).each(function(i, el) {
      get_contents(el); /* Walk the dom finding only ampersands in text nodes. Don't bother splitting them. */
      el.innerHTML = el.innerHTML.replace(/#ampersandmarker#/g, "<span class='"+ampClass+"'>&amp;</span>") /* replace the markers. */
    });
    return this;
  };
})(jQuery);;