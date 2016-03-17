cellular.jSocial = function (opts) {
  var tit = document.title,
          page = $("link[rel='canonical']") ? $("link[rel='canonical']").attr('href') : window.location;
  var o = jQuery.extend({
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
    sharelinks: {
      facebook: {
        title: "Facebook",
        url: "http://facebook.com/sharer/sharer.php?u=" + page
      },
      digg: {
        title: "Digg",
        url: "http://digg.com/submit?url=" + page + "&title=" + tit
      },
      google: {
        title: "Google",
        url: "https://plus.google.com/share?url=" + page
      },
      twitter: {
        title: "Twitter",
        url: "https://twitter.com/intent/tweet?url=" + page + "&text=" + tit
      },
      linkedin: {
        title: "LinkedIn",
        url: "http://linkedin.com/shareArticle?url=" + page + "&title=" + tit
      },
      pinterest: {
        title: "Pinterest",
        url: "http://pinterest.com/pin/create/bookmarklet/?url=" + page + "&description=" + tit
      },
      reddit: {
        title: "Reddit",
        url: "http://reddit.com/submit?url=" + page + "&title=" + tit
      },
      stumbleupon: {
        title: "StumbleUpon",
        url: "http://www.stumbleupon.com/submit?url=" + page + "&title=" + tit
      },
      tumblr: {
        title: "Tumblr",
        url: "https://www.tumblr.com/widgets/share/tool?canonicalUrl=" + page + "&title=" + tit
      }
    },
    follow: {
      facebook: {
        title: "Facebook",
        url: "https://facebook.com"
      },
      google: {
        title: "Google",
        url: "https://plus.google.com"
      },
      twitter: {
        title: "Twitter",
        url: "https://twitter.com"
      },
      linkedin: {
        title: "LinkedIn",
        url: "https://linkedin.com"
      },
      pinterest: {
        title: "Pinterest",
        url: "https://pinterest.com"
      },
      yelp: {
        title: "Yelp",
        url: "https://yelp.com"
      }
    }
  }, opts),
          fn = {};
  /**
   * Generate markup for buttons.
   *
   * @param object $obj
   */
  fn.style = function ($obj) {
    $obj.once('jSocial', function () {

      if (o.showshare) {
        var sWrap = $('<div class="jSocial-share" />');

        if (o.sharetitle.length !== 0) {
          sWrap.append('<h3>' + o.sharetitle + '</h3>');
        }

        o.share.map(function (i) {
          sWrap.buttonize(o.sharelinks[i].url, o.sharetitle + ' on ' + o.sharelinks[i].title, [o.sharelinks[i].title.toLowerCase(), o.buttonclass, 'icon']);
        });

        $obj.append(sWrap);
      }

      if (o.showfollow) {
        var fWrap = $('<div class="jSocial-follow" />');

        if (o.followtitle.length !== 0) {
          fWrap.append('<h3>' + o.followtitle + '</h3>');
        }

        $.each(o.follow, function () {
          fWrap.buttonize(this.url, o.followtitle + ' on ' + this.title, [this.title.replace(/ /g, '').toLowerCase(), o.buttonclass, 'icon']);
        });

        $obj.append(fWrap);
      }

    });
  };

  /**
   * Init jSocial
   */
  fn.init = function () {
    // Generate markup for links.
    fn.style(jQuery(this));
  };

  return this.each(fn.init);
};