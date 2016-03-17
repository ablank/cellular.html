/**
 * Cellular utility functions
 */

/**
 * Get the breakpoints specified in CSS
 */
cellular.breakpoint = function () {
  var content = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content');

  return {
    size: content.match(/\d/g).join(""),
    type: content.match(/\w*[^\"\'](?=-)/g).join("")
  };
};

/**
 * Add active class to element, remove active class from element siblings
 */
cellular.activate = function (theclass) {
  theclass = theclass ? theclass : cellular.opts.activeclass;

  return this.each(function () {
    var $t = jQuery(this);

    if (!$t.hasClass(theclass)) {
      $t.addClass(theclass)
              .siblings().removeClass(theclass);
    }
  });
};

/**
 * Remove 'active' class
 */
cellular.deactivate = function (theclass) {
  theclass = theclass ? theclass : cellular.opts.activeclass;

  return this.each(function () {
    jQuery(this).removeClass(theclass);
  });
};

/**
 * Wrap element's children after 1st child
 */
cellular.kidWrap = function () {

  return this.each(function () {
    var $t = jQuery(this);

    if ($t.children().length > 1) {
      $t.children(':gt(0)').wrapAll('<div>');
    }
  });
};

/**
 * Add array of classes to element
 */
cellular.classify = function ($array) {

  return this.each(function () {
    jQuery(this).addClass($array.join(' '));
  });
};

/**
 * Debounce fn borrowed from Underscore.js
 */
cellular.debounce = function (func, wait, immediate) {
  var timeout;

  return function () {
    var context = this,
            args = arguments,
            later = function () {
              timeout = null;
              if (!immediate) {
                func.apply(context, args);
              }
            },
            callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

/**
 * Detect css transition end event.
 * @see Function from David Walsh: http://davidwalsh.name/css-animation-callback
 */
cellular.transitionend = function () {
  var t,
          el = document.createElement("test"),
          transitions = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };

  for (t in transitions) {
    if (el.style[t] !== undefined) {

      return transitions[t];
    }
  }
};

/**
 * Set state on window resize
 */
cellular.windowstate = cellular.debounce(function () {
  var ob = cellular.state.breakpoint;

  cellular.state.breakpoint = cellular.breakpoint().type;
  jQuery('body').removeClass(ob)
          .addClass(cellular.state.breakpoint);
}, 500);

/**
 * Set state on document scroll
 */
cellular.scrollstate = cellular.debounce(function (e, y) {
  var el = jQuery('body'),
          cclass = 'scrolled',
          uc = cclass + '-up',
          dc = cclass + '-down',
          //y = cellular.state.scrolltop,
          scrolltimeout = null;

  cellular.state.scrolltop = $(document).scrollTop();
  cellular.scrolltimer(el, uc, dc);
  // Detect if page is scrolled
  if (cellular.state.scrolltop < 5) {
    el.removeClass(cclass);
  } else {
    el.addClass(cclass);
  }
  /*
   // Detect scroll direction
   if (cellular.state.scrolltop > y) { // scroll down
   if (!el.hasClass(dc)) {
   el.removeClass(uc)
   .addClass(dc);
   }
   } else if (cellular.state.scrolltop < y) { // scroll up
   if (!el.hasClass(uc)) {
   el.removeClass(dc)
   .addClass(uc);
   }
   }
   */
}, 0, true);

/**
 * Reset scroll timer
 */
cellular.scrolltimer = function (el, uc, dc) {
  window.clearTimeout(cellular.state.scrolltimer);
  cellular.state.scrolltimer = window.setTimeout(function () {
    el.removeClass(uc + ' ' + dc);
  }, 2000);
};

/*
 cellular.autodimension = function ($obj, dimension) {
 return this.each(function () {
 var $t = jQuery(this),
 max = 0;


 if ($obj === 'auto') {
 $t.height(state.maxheight);
 } else {
 $t.height(o.size.height);
 }
 });
 };
 */

/**
 *
 * @param {string} href
 * @param {string} title
 * @param {array} classes
 * @returns {string}
 */
cellular.buttonize = function (href, title, classes) {
  var btn = $('<a />')
          .attr('href', href)
          .attr('title', title)
          .text(title)
          .classify(classes);

  return $(this).append(btn);
};

