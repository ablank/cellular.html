!function(a,b){/**
* @file
* CellularUI Javascript Library
* 
* @author Adam Blankenship <i.adambear@gmail.com>
* 
* @see http://live-cellular.gotpantheon.com/cellular-ui
*/
!function(a){var b={};b.opts={cclass:"cellular",activeclass:"active",breakpoint:"window_mobile"},b.state={breakpoint:0,scrolltop:0,scrolltimer:0},/**
* Cellular utility functions
*/
/**
* Get the breakpoints specified in CSS
*/
b.breakpoint=function(){var a=window.getComputedStyle(document.querySelector("body"),":before").getPropertyValue("content");return{size:a.match(/\d/g).join(""),type:a.match(/\w*[^\"\'](?=-)/g).join("")}},/**
* Add active class to element, remove active class from element siblings
*/
b.activate=function(a){return a=a?a:b.opts.activeclass,this.each(function(){var b=jQuery(this);b.hasClass(a)||b.addClass(a).siblings().removeClass(a)})},/**
* Remove 'active' class
*/
b.deactivate=function(a){return a=a?a:b.opts.activeclass,this.each(function(){jQuery(this).removeClass(a)})},/**
* Wrap element's children after 1st child
*/
b.kidWrap=function(){return this.each(function(){var a=jQuery(this);a.children().length>1&&a.children(":gt(0)").wrapAll("<div>")})},/**
* Add array of classes to element
*/
b.classify=function(a){return this.each(function(){jQuery(this).addClass(a.join(" "))})},/**
* Debounce fn borrowed from Underscore.js
*/
b.debounce=function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)},h=c&&!d;clearTimeout(d),d=setTimeout(g,b),h&&a.apply(e,f)}},/**
* Detect css transition end event.
* @see Function from David Walsh: http://davidwalsh.name/css-animation-callback
*/
b.transitionend=function(){var a,b=document.createElement("test"),c={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(a in c)if(void 0!==b.style[a])return c[a]},/**
* Set state on window resize
*/
b.windowstate=b.debounce(function(){var a=b.state.breakpoint;b.state.breakpoint=b.breakpoint().type,jQuery("body").removeClass(a).addClass(b.state.breakpoint)},500),/**
* Set state on document scroll
*/
b.scrollstate=b.debounce(function(c,d){var e=jQuery("body"),f="scrolled",g=f+"-up",h=f+"-down";b.state.scrolltop=a(document).scrollTop(),b.scrolltimer(e,g,h),
// Detect if page is scrolled
b.state.scrolltop<5?e.removeClass(f):e.addClass(f)},0,!0),/**
* Reset scroll timer
*/
b.scrolltimer=function(a,c,d){window.clearTimeout(b.state.scrolltimer),b.state.scrolltimer=window.setTimeout(function(){a.removeClass(c+" "+d)},2e3)},/*
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
b.buttonize=function(b,c,d){var e=a("<a />").attr("href",b).attr("title",c).text(c).classify(d);return a(this).append(e)},function(){
// Get initial state
b.windowstate(),b.scrollstate(),
// Update state on user interaction
a(window).on("resize",b.windowstate),a(document).on("scroll",b.scrollstate)}(),b.jAccordion=function(a){var c=jQuery.extend({active:0,// Index value of initial content to display.
duration:500,// Duration of transition.
easing:"swing",// Type of easing.
single:!1,// Allow multiple panels to be opened or only 1?
pclass:"panel"},a),d={};/**
* The <li> object to show.
*
* @param object li
*  $('<li>')
*/
/**
* Generate markup for controls & other elements.
*
* @param object $obj
*/
/**
* Init jAccordion
*/
return c.pselect="."+c.pclass,d.showContent=function(a){c.single?(a.siblings().find(c.pselect).slideUp(c.duration,c.easing),a.activate().find(c.pselect).slideDown(c.duration,c.easing)):a.toggleClass(b.opts.activeclass).find(c.pselect).slideToggle(c.duration,c.easing)},d.style=function(a){a.once("jAccordion",function(){a.addClass(b.opts.cclass).find("> li").each(function(){var a=jQuery(this);a.kidWrap(),a.children().eq(0).addClass("title"),a.children().eq(1).classify([b.opts.cclass,"panel"]),a.find(c.pselect).hide(),a.find(".title").click(function(b){b.preventDefault(),d.showContent(a)})})})},d.init=function(){var a=jQuery(this);
// Generate markup for accordion
d.style(a),
//Set default content
d.showContent(a.children().eq(c.active))},this.each(d.init)},b.jBlocklink=function(a){var c=jQuery.extend({cclass:"jBlocklink-link"},a),d={};return d.init=function(){var a=jQuery(this);a.once(c.cclass,function(){var d=a.find("a").eq(0),e=d.attr("href");if(void 0!==e){var f=jQuery('<a href="'+e+'" />');f.classify([b.opts.cclass,c.cclass,d.attr("class")?d.attr("class"):null]),
// .data(a.data());
a.wrap(f).find("h2, h3").addClass("title")}}),a.on("mouseenter touchstart",function(){jQuery(this).activate()}).on("mouseleave touchend",function(){jQuery(this).deactivate()})},this.each(d.init)},/**
* jEqualheight: Set children to equal height
*/
b.jEqualheight=function(a){/*
var array = [267, 306, 108];
var largest = Math.max.apply(Math, array); // 306
*/
var b=(jQuery.extend({},a),{});return b.init=function(){var a=jQuery(this),b=a.find(">*"),c=0;b.each(function(){$t=jQuery(this),$t.height()>c&&(c=$t.height()),$t.height(c)})},this.each(b.init)},/**
* jMmenu: Hamburger menu for mobile devices
*/
b.jMmenu=function(a){var c=jQuery.extend({breakpoint:b.opts.breakpoint,// Window breakpoint trigger: 'mobile', 'narrow', 'default', 'large'
parent:jQuery("body"),// Parent element used to attach menu
cclass:"jMmenu",// Menu class to test
type:"slide",// Type of animation
direction:"right"},a),d={};return d.mediaQuery=b.debounce(function(a,e){if(c.breakpoint===b.state.breakpoint){var f=a.children([0]);e.mmenu=!0,c.parent.addClass(c.type+"-"+c.direction),f.addClass(c.cclass).prependTo(c.parent),d.trigger(a,e)}},500),d.trigger=function(a,b){var d=[c.cclass+"-active",c.cclass+"-inactive"];b.active?(a.activate(),c.parent.addClass(d[0]).removeClass(d[1])):(a.deactivate(),c.parent.addClass(d[1]).removeClass(d[0]))},d.init=function(){var a=jQuery(this),b={active:!1,mmenu:!1};d.mediaQuery(a,b),jQuery(window).on("resize",function(){d.mediaQuery(a,b)}),a.on("click",function(){b.mmenu&&(b.active=!b.active,d.trigger(a,b))})},this.each(d.init)},/**
* jScrolli : Content carousel/slider
*/
b.jScrolli=function(c){var d=a.extend({cclass:"jScrolli",// Object class selector
active:0,// Index of initially selected slide
//width: "100%", // 'auto' or '[value]', i.e. '300px'
height:"auto",// 'auto' or '[value]', i.e. '300px'
controls:{showmarkers:!0,showcontrols:!0,keyboard:!0,swipe:!0,autoplay:!0,pauseonhover:!0,autodim:!0,delay:1.4,// Time (seconds) to wait before dimming.
text:{next:"Next",prev:"Prev",pause:"Pause",play:"Play"}},transition:{pause:5},caption:{enable:!0,autohide:!1,selector:".caption"}},c),e={};/**
* Format html buttons for controls.
*
* @param string $text
* @returns string
*/
/**
* Update next/prev slides.
*
* @param object state
*/
/**
* Activate selected slide & corresponding marker.
*
* @param int index
* @param object $obj
* @param object state
*/
/**
* Update the current marker.
*/
/**
* Update slide caption
*/
/**
* Add event listeners
*
* @param {type} $obj
* @param {type} state
*/
/**
* Set height explicitly to prevent 'jumping' content.
*
* @param object $obj
* @param object state
*/
/**
* Generate markup for controls & other elements.
*
* @param object $obj
* @param object state
*/
/**
* Init jScrolli
*/
return e.button=function(a){return'<a class="control '+a.toLowerCase()+'">'+a+"</a>"},e.normalize=function(a){a.prev=a.current-1,a.next=a.current+1,a.prev<0&&(a.prev=a.count),a.next>a.count&&(a.next=0)},e.go=function(a,c,f){if(!f.paused){var g="transition",h=c.find(".slide");f.current=parseInt(a),
// Normalize state
e.normalize(f),
// Update classes on slides for css transition
jQuery(h[f.prev]).activate("previous"),jQuery(h[f.next]).activate("next"),jQuery(h[a]).activate(),
// Listen for transition to complete & update classes
c.parent().addClass(g).one(b.transitionend(),function(){jQuery(this).removeClass(g)}),
// Update the marker
d.controls.showmarkers&&e.mark(c,f),
// Update the caption
d.caption.enable&&e.caption(h,f),
// Reset the autoplay timer
d.controls.autoplay&&e.updateinterval(c,f)}},e.mark=function(a,b){a.siblings().find(".marker").eq(b.current).activate()},e.caption=function(a,b){var c=a.parent().parent(),e=c.find("> .caption p");
// Get current slide's caption
b.caption=c.find(d.caption.selector).eq(b.current).text(),
// Update the active caption
e.text(b.caption)},e.updateinterval=function(a,b){d.controls.autoplay&&!b.paused&&(clearInterval(b.interval),b.interval=setInterval(function(){b.current=b.next,e.go(b.current,a,b)},1e3*d.transition.pause))},e.events=function(a,b){var c=(a.siblings(".controls"),a.parent());
// Link markers to respective slides
d.controls.showmarkers&&a.siblings().find(".marker").on("click",function(){b.current=jQuery(this).attr("data-href"),b.paused=!1,e.go(b.current,a,b)}),
// Previous
c.find(".prev").on("click",function(c){b.current=b.prev,b.paused=!1,e.go(b.current,a,b)}),
// Next
c.find(".next").on("click",function(c){b.current=b.next,b.paused=!1,e.go(b.current,a,b)}),/*
// Play/Pause
wrap.find('.pause').on('click', function (e) {
jQuery(this).activate('play')
.deactivate('pause')
.text('Play');
state.paused = true;
clearInterval(state.interval);
console.log(state.paused);
});
wrap.find('.play').on('click', function (e) {
jQuery(this).activate('pause')
.deactivate('play')
.text('Pause');
state.paused = false;
fn.updateinterval($obj, state);
console.log(state.paused);
});
*/
// Pause/showcontrols
c.on({mouseover:function(){b.active=!0,d.controls.pauseonhover&&(b.paused=!0),d.controls.autodim&&(c.activate(),window.clearTimeout(c.timeout))},mouseout:function(){b.active=!1,d.controls.pauseonhover&&(b.paused=!1),d.controls.autodim&&(c.timeout=window.setTimeout(function(){c.deactivate()},1e3*d.controls.delay))}}),
// Keyboard
d.controls.keyboard&&jQuery(document).on("keyup",function(c){
// console.log(e.which);
var d=[37,// left
39];if(-1!==d.indexOf(c.which)){switch(c.preventDefault(),b.paused=!1,c.which){case 37:b.current=b.prev;break;case 39:b.current=b.next}e.go(b.current,a,b)}})},e.setheight=function(a,b){jQuery(window).on("load",function(){"auto"===d.height?a.find(".content").each(function(){var a=jQuery(this).height();a>b.maxheight&&(b.maxheight=a)}):b.maxheight=d.height,a.height(b.maxheight)})},e.style=function(a,c){var f=a.find("> li");if(a.addClass(b.opts.cclass).wrap('<div class="'+b.opts.cclass+" "+d.cclass+'-wrap" />'),f.addClass("slide").each(function(){jQuery(this).children().wrapAll('<div class="content cell" />')}),e.setheight(a,c),d.controls.showmarkers){for(var g=jQuery('<ul class="markers"/>'),h=0;h<f.length;h+=1)g.append('<li class="marker" data-href="'+h+'">'+(h+1)+"</li>");a.after(g),e.mark(a,c)}if(d.caption.enable&&(/*
if (o.caption.selector === 'auto') {
// o.caption.selector = what?
}
else {
$obj.find(o.caption.selector).hide();
}
*/
a.find(d.caption.selector).hide(),a.after('<div class="caption"><p/></div>')),d.controls.showcontrols){var i,j=[e.button(d.controls.text.prev),e.button(d.controls.text.next)];for(ij=0;i<j.length;i+=1)a.parent().prepend(j[i])}},e.init=function(){var a=jQuery(this),b={active:!0,paused:!1,count:a.find("> li").length-1,
//height: o.height ? o.height : fn.setheight($obj, state),
width:d.width?d.width:a.width(),maxheight:0,interval:0,controls:0,caption:jQuery(d.caption.selector).html(),current:d.active?d.active:0};
// o.caption.selector = o.caption.selector === 'auto' ? '[title]' : o.caption.selector;
// Add markup
a.once(d.cclass,function(){e.style(a,b)}),
// Add Event Listeners
e.events(a,b),
// Activate 1st slide
e.go(b.current,a,b),
// Start autoplay
e.updateinterval(a,b)},this.each(e.init)},b.jSocial=function(b){var c=document.title,d=a("link[rel='canonical']")?a("link[rel='canonical']").attr("href"):window.location,e=jQuery.extend({showshare:!0,showfollow:!0,sharetitle:"Share this page",followtitle:"Follow Us",buttonclass:"social",share:["facebook","digg","google","twitter","linkedin","pinterest","reddit","stumbleupon","tumblr"],sharelinks:{facebook:{title:"Facebook",url:"http://facebook.com/sharer/sharer.php?u="+d},digg:{title:"Digg",url:"http://digg.com/submit?url="+d+"&title="+c},google:{title:"Google",url:"https://plus.google.com/share?url="+d},twitter:{title:"Twitter",url:"https://twitter.com/intent/tweet?url="+d+"&text="+c},linkedin:{title:"LinkedIn",url:"http://linkedin.com/shareArticle?url="+d+"&title="+c},pinterest:{title:"Pinterest",url:"http://pinterest.com/pin/create/bookmarklet/?url="+d+"&description="+c},reddit:{title:"Reddit",url:"http://reddit.com/submit?url="+d+"&title="+c},stumbleupon:{title:"StumbleUpon",url:"http://www.stumbleupon.com/submit?url="+d+"&title="+c},tumblr:{title:"Tumblr",url:"https://www.tumblr.com/widgets/share/tool?canonicalUrl="+d+"&title="+c}},follow:{facebook:{title:"Facebook",url:"https://facebook.com"},google:{title:"Google",url:"https://plus.google.com"},twitter:{title:"Twitter",url:"https://twitter.com"},linkedin:{title:"LinkedIn",url:"https://linkedin.com"},pinterest:{title:"Pinterest",url:"https://pinterest.com"},yelp:{title:"Yelp",url:"https://yelp.com"}}},b),f={};/**
* Generate markup for buttons.
*
* @param object $obj
*/
/**
* Init jSocial
*/
return f.style=function(b){b.once("jSocial",function(){if(e.showshare){var c=a('<div class="jSocial-share" />');0!==e.sharetitle.length&&c.append("<h3>"+e.sharetitle+"</h3>"),e.share.map(function(a){c.buttonize(e.sharelinks[a].url,e.sharetitle+" on "+e.sharelinks[a].title,[e.sharelinks[a].title.toLowerCase(),e.buttonclass,"icon"])}),b.append(c)}if(e.showfollow){var d=a('<div class="jSocial-follow" />');0!==e.followtitle.length&&d.append("<h3>"+e.followtitle+"</h3>"),a.each(e.follow,function(){d.buttonize(this.url,e.followtitle+" on "+this.title,[this.title.replace(/ /g,"").toLowerCase(),e.buttonclass,"icon"])}),b.append(d)}})},f.init=function(){
// Generate markup for links.
f.style(jQuery(this))},this.each(f.init)},/**
* jTabs : Tabify a list of content
*/
b.jTabs=function(a){var c=jQuery.extend({active:0,// Array index of initially active tab
orient:"horizontal",// || "vertical"
cclass:"jTabs"},a),d={};/**
*
*
* @param object $obj
* @param object li
*/
/**
* Init jTabs
*/
return d.showContent=function(a,b){var c=b.find(".content"),d=a.parent().find(".panel-content");b.activate(),d.fadeOut("normal",function(){jQuery(this).html(c.html()).fadeIn("normal")})},d.init=function(){var a=jQuery(this),e=a.find("> li"),f=jQuery("<div/>").classify([b.opts.cclass,c.orient,c.cclass+"-wrap"]),g='<div class="panel"><div class="panel-content" /></div>';a.once(c.cclass,function(){a.wrap(f).after(g),e.each(function(){var a=jQuery(this);a.addClass("tab").kidWrap(),
//Set 1st child as title
a.children().eq(0).addClass("title"),
//Set wrapper as content
a.children().eq(1).addClass("content").hide()})}),
//Add classes/functions to each panel
e.each(function(){var b=jQuery(this);b.click(function(c){c.preventDefault(),d.showContent(a,b)})}),
//Set default content
d.showContent(a,e.eq([c.active]))},this.each(d.init)},jQuery.fn.extend(b)}(jQuery),b["true"]=a}({},function(){return this}());