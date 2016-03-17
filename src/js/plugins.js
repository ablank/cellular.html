/**
 * @file
 * Call javascript plugins used in theme.
 */

(function ($) {
  var plugins = {
    cellularui: {
      jAccordion: true,
      jBlocklink: true,
      jMmenu: true,
      jTabs: true,
      jScrolli: true,
      jSocial: true
    },
    backstretch: false,
    flowtype: false,
    freetile: false,
    parallax: false,
    smoove: false
  };

  // CellularUI functions.
  if (plugins.cellularui.jAccordion === true) {

    $('.jAccordion').jAccordion({
      duration: 500, // Duration of transition.
      easing: "swing", // Type of easing.
      single: false // Allow multiple panels to be opened or only 1?
    });
  }

  if (plugins.cellularui.jBlocklink === true) {
    $('.jBlocklink').jBlocklink({
      cclass: "jBlocklink-link" // Class to add to wrapper link for styling.
    });
  }

  if (plugins.cellularui.jMmenu === true) {
    $('#nav').jMmenu({
      // Window breakpoint trigger:
      // "breakpoint": cellular.opts.breakpoint, // "mobile"
      cclass: "jMmenu", // default
      // Classes added for styling- CSS classes control position & animation.
      // <element class="$type-$direction">
      type: "push",
      direction: "down"
    });
  }

  if (plugins.cellularui.jTabs === true) {
    $('.jTabs').jTabs({
      active: 0, // Array index of initially active content.
      orient: "horizontal" // || "vertical"
    });
    $('.jTabs-vertical').jTabs({
      active: 0, // Array index of initially active content.
      orient: "vertical" //
    });
  }

  if (plugins.cellularui.jScrolli === true) {
    $('.jScrolli').jScrolli();
    /*
     $('.jScrolli').jScrolli({
     cclass: 'jScrolli', // Object class selector
     active: 0, // Index of initially selected slide
     height: 'auto', // 'auto' or '[value]', i.e. '300px'
     controls: {
     showcontrols: true,
     keyboard: true,
     swipe: true,
     showmarkers: true,
     autoplay: false,
     pauseonhover: true,
     text: {
     next: 'Next',
     prev: 'Prev',
     pause: 'Pause'
     }
     },
     transition: {
     pause: 5 // Time (seconds) to pause between slides.
     //speed: 500 // Animation speed (milliseconds).
     },
     caption: {
     enable: true,
     autohide: false,
     selector: '.caption' // 'auto' or '.selector' used to generate caption
     },
     autodim: true,
     delay: 1.4 // Time (seconds) to wait before dimming.
     });*/
  }

  if (plugins.cellularui.jSocial === true) {
    $('.jSocial').jSocial({
      showshare: true,
      showfollow: true,
      sharetitle: "Share this page",
      followtitle: "Follow Us",
      buttonclass: "social",
      share: [
        'facebook',
        'digg',
        'google',
        'twitter',
        'linkedin',
        'pinterest',
        'reddit',
        'stumbleupon',
        'tumblr'
      ],
      follow: {
        facebook: {
          title: "Facebook",
          url: "https://facebook.com"
        },
        google: {
          title: "Google",
          url: "https://plus.google.com"
        },
        linkedin: {
          title: "LinkedIn",
          url: "https://linkedin.com"
        },
        twitter: {
          title: "Twitter",
          url: "https://twitter.com"
        },
        yelp: {
          title: "Yelp",
          url: "https://yelp.com"
        }
      }
    });
  }

  // Backstretch functions.
  if (plugins.backstretch === true) {
    $.backstretch([
      "http://lorempixel.com/800/600/abstract/1",
      "http://lorempixel.com/800/600/abstract/2",
      "http://lorempixel.com/800/600/abstract/3"
    ], {
      duration: 3000,
      fade: 750
    });
  }

  // Flowtype functions.
  if (plugins.flowtype === true) {
    $('#content-wrap').flowtype({
      minimum: 400,
      maximum: 800,
      minFont: 12,
      maxFont: 40,
      fontRatio: 45
    });
  }

  // Freetile functions.
  if (plugins.freetile === true) {
    $('.view-content').freetile({
      selector: '.views-row',
      animate: true,
      // containerAnimate: true,
      elementDelay: 0
    });
  }

  // jParallax functions.
  if (plugins.parallax === true) {
    $('.parallax').parallax({
      xparallax: false,
      yparallax: true,
      freezeClass: "freeze",
      decay: 0.4
    });
  }

  // Smoove functions.
  if (plugins.smoove === true) {
    $('.smoove').smoove({
      offset: "20%",
      // skew: "20deg",
      // moveX: "15%",
      moveY: "20%"
    });
  }

})(jQuery);
