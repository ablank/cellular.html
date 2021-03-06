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
* Auto invoke
*/
function(){
// Scroll to page anchors.
jQuery('a[href^="#"]').on("click",function(a){var b=jQuery(this).attr("href");a.preventDefault(),jQuery("html, body").stop().animate({scrollTop:jQuery(b).offset().top},1500)})}(),/**
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
* Reset scroll timer
*/
b.scrolltimer=function(a,c,d){window.clearTimeout(b.state.scrolltimer),b.state.scrolltimer=window.setTimeout(function(){a.removeClass(c+" "+d)},2e3)},/**
*
* @param {string} href
* @param {string} title
* @param {array} classes
* @returns {string}
*/
b.buttonize=function(b,c,d){var e=a("<a />").attr("href",b).attr("title",c).text(c).classify(d);return a(this).append(e)},/**
* Set state on window resize
*/
b.windowstate=b.debounce(function(){var a=b.state.breakpoint;b.state.breakpoint=b.breakpoint().type,jQuery("body").removeClass(a).addClass(b.state.breakpoint)},100),/**
* Set state on document scroll
*/
b.scrollstate=b.debounce(function(c,d){var e=jQuery("body"),f="scrolled";b.state.scrolltop=a(document).scrollTop(),e.attr("data-scrolltop",b.state.scrolltop),
// Detect if page is scrolled
b.state.scrolltop<10?e.removeClass(f):e.addClass(f)},0,!0),function(){
// Get initial state
b.windowstate(),b.scrollstate(),
// Update state on user interaction
jQuery(window).on("resize",b.windowstate),jQuery(document).on("scroll",b.scrollstate)}(),b.jAccordion=function(a){var c=jQuery.extend({active:0,// Index value of initial content to display.
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
return c.pselect="."+c.pclass,d.showContent=function(a){c.single?(a.siblings().find(c.pselect).slideUp(c.duration,c.easing),a.activate().find(c.pselect).slideDown(c.duration,c.easing)):a.toggleClass(b.opts.activeclass).find(c.pselect).slideToggle(c.duration,c.easing)},d.style=function(a){a.once("jAccordion",function(){a.find("> li").each(function(){var a=jQuery(this);a.kidWrap(),a.children().eq(0).addClass("title"),a.children().eq(1).classify([b.opts.cclass,"panel"]),a.find(c.pselect).hide(),a.find(".title").click(function(b){b.preventDefault(),d.showContent(a)})})})},d.init=function(){var a=jQuery(this);
// Generate markup for accordion
d.style(a),
//Set default content
d.showContent(a.children().eq(c.active))},this.each(d.init)},b.jCard=function(a){var b=jQuery.extend({cclass:"jCard"},a),c={};return c.init=function(){var a=jQuery(this);a.once(b.cclass,function(){var c=a.find("a").eq(0),d=c.attr("href");if(void 0!==d){var e=jQuery('<a href="'+d+'" />').classify([b.cclass+"-wrap",c.attr("class")?c.attr("class"):null]);
// .data(a.data());
a.wrap(e).find("h2, h3").addClass("title")}}),a.on("mouseenter touchstart",function(){jQuery(this).activate()}).on("mouseleave touchend",function(){jQuery(this).deactivate()})},this.each(c.init)},/**
* jMmenu: Hamburger menu for mobile devices
*/
b.jMmenu=function(a){var c=jQuery.extend({breakpoint:b.opts.breakpoint,// Window breakpoint trigger: 'mobile', 'narrow', 'default', 'large'
parent:jQuery("body"),// Parent element used to attach menu
cclass:"jMmenu",// Menu class to test
triggertext:"Menu",animateclass:"slide-right",// Type of animation
throttle:101},a),d={};return d.mediaQuery=b.debounce(function(a,e){if(c.breakpoint===b.state.breakpoint){var f=a.children([0]),g=null;e.mmenu=!0,c.parent.addClass(c.animateclass),c.triggertext&&(g='<span class="'+c.cclass+'-triggertext">'+c.triggertext+"</span>"),a.addClass(c.cclass+"-trigger").append(g),f.addClass(c.cclass+"-menu").prependTo(c.parent)}else e.mmenu=!1,e.active=!1,c.parent.removeClass(c.cclass+"-active "+c.cclass+"-inactive "+c.animateclass),a.attr("aria-label","Menu").removeClass(c.cclass+"-trigger"),jQuery("."+c.cclass+"-menu").removeClass(c.cclass+"-menu").prependTo(a),jQuery("."+c.cclass+"-triggertext").remove();d.trigger(a,e)},c.throttle),d.trigger=function(a,b){var d=[c.cclass+"-active",c.cclass+"-inactive"];b.active?(a.activate().attr("aria-label","Close Menu"),jQuery("."+c.cclass+"-menu").addClass("active"),c.parent.addClass(d[0]).removeClass(d[1])):(a.deactivate().attr("aria-label","Open Menu"),jQuery("."+c.cclass+"-menu").removeClass("active"),b.mmenu&&c.parent.addClass(d[1]).removeClass(d[0]))},d.init=function(){var a=jQuery(this),b={active:!1,mmenu:!1};d.mediaQuery(a,b),jQuery(window).on("resize",function(){d.mediaQuery(a,b)}),a.on("click",function(){
//console.log(this);
b.mmenu&&(b.active=!b.active,d.trigger(a,b))}),jQuery(document).on("keyup",function(c){b.active===!0&&27===c.which&&(c.preventDefault(),b.active=!1,d.trigger(a,b))})},this.each(d.init)},b.jModal=function(a){var b=jQuery.extend({cclass:"jModal"},a),c={};/**
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
* Init jModal
*/
return c.trigger=function(a){jQuery("."+b.cclass+"-overlay"),jQuery('<div class="'+b.cclass+'-window">').append('<span class="control close" aria-label="Close" />')},c.style=function(a){$jQuery.once("jModal",function(){var a=jQuery('<div class="'+b.cclass+'-overlay">').append('<div class="'+b.cclass+'-window" />').append('<span class="control close" aria-label="Close" />');jQuery("body").append(a)})},c.init=function(){var a=jQuery(this),b={active:!1};
// Generate markup for modal
c.style(a),c.events(a,b)},this.each(c.init)},/**
* jScrolli : Content carousel/slider
*/
b.jScrolli=function(c){var d=a.extend({cclass:"jScrolli",// Object class selector
active:0,// Index of initially selected slide
//width: "100%", // 'auto' or '[value]', i.e. '300px'
height:"auto",// 'auto' or '[value]', i.e. '300px'
controls:{showmarkers:!0,showcontrols:!0,keyboard:!0,swipe:!0,autoplay:!0,pauseonhover:!0,autodim:!0,delay:1.4,// Time (seconds) to wait before dimming.
text:{next:"Next",prev:"Prev",pause:"Pause",play:"Play"}},transition:{pause:5},caption:{enable:!0,autohide:!1,selector:"p"}},c),e={};/**
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
* Reset autoplay timer.
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
c.parent().addClass(g).on(b.transitionend(),function(){jQuery(this).removeClass(g)}),
// Update the marker
d.controls.showmarkers&&e.mark(c,f),
// Update the caption
d.caption.enable&&e.caption(h,f),
// Reset the autoplay timer
d.controls.autoplay&&e.updateinterval(c,f)}},e.mark=function(a,b){a.siblings().find(".marker").eq(b.current).activate()},e.caption=function(c,e){var f=c.parent().parent(),g=f.find("> .caption p");
// Get current slide's caption
e.caption=f.find(d.caption.selector).eq(e.current).text(),g.on(b.transitionend(),function(){
// Update the active caption
a(this).text(e.caption)})},e.updateinterval=function(a,b){d.controls.autoplay&&!b.paused&&(clearInterval(b.interval),b.interval=setInterval(function(){b.current=b.next,e.go(b.current,a,b)},1e3*d.transition.pause))},e.events=function(a,b){var c=(a.siblings(".controls"),a.parent());
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
d.controls.keyboard&&jQuery(document).on("keyup",function(c){var d=[37,// left
39];if(-1!==d.indexOf(c.which)){switch(c.preventDefault(),b.paused=!1,c.which){case 37:b.current=b.prev;break;case 39:b.current=b.next}e.go(b.current,a,b)}})},e.setheight=function(a,b){jQuery(document).ready(function(){"auto"===d.height?a.find("> li").each(function(){var a=this.clientHeight;a>b.maxheight&&(b.maxheight=a)}):b.maxheight=d.height,a.height(b.maxheight)})},e.style=function(a,c){var f=a.find("> li");if(a.addClass(b.opts.cclass).wrap('<div class="'+b.opts.cclass+" "+d.cclass+'-wrap" />'),f.addClass("slide").each(function(){jQuery(this).children().wrapAll('<div class="content cell" />')}),e.setheight(a,c),d.controls.showmarkers){for(var g=jQuery('<ul class="markers"/>'),h=0;h<f.length;h+=1)g.append('<li class="marker" data-href="'+h+'">'+(h+1)+"</li>");a.after(g),e.mark(a,c)}if(d.caption.enable&&(a.find(d.caption.selector).hide(),a.after('<div class="caption"><p/></div>')),d.controls.showcontrols){var i,j=[e.button(d.controls.text.prev),e.button(d.controls.text.next)];for(i=0;i<j.length;i+=1)a.parent().prepend(j[i])}},e.init=function(){var a=jQuery(this),b={active:!0,paused:!1,count:a.find("> li").length-1,
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
e.updateinterval(a,b)},this.each(e.init)},b.jSocial=function(b){var c=document.title,d=a("link[rel='canonical']")?a("link[rel='canonical']").attr("href"):window.location,e=jQuery.extend({showshare:!0,showfollow:!1,sharetitle:"Share this page",followtitle:"Follow Us",buttonclass:"social",share:["facebook","digg","google","twitter","linkedin","pinterest","reddit","stumbleupon","tumblr"],sharelinks:{facebook:{title:"Facebook",url:"http://facebook.com/sharer/sharer.php?u="+d},digg:{title:"Digg",url:"http://digg.com/submit?url="+d+"&title="+c},google:{title:"Google",url:"https://plus.google.com/share?url="+d},twitter:{title:"Twitter",url:"https://twitter.com/intent/tweet?url="+d+"&text="+c},linkedin:{title:"LinkedIn",url:"http://linkedin.com/shareArticle?url="+d+"&title="+c},pinterest:{title:"Pinterest",url:"http://pinterest.com/pin/create/bookmarklet/?url="+d+"&description="+c},reddit:{title:"Reddit",url:"http://reddit.com/submit?url="+d+"&title="+c},stumbleupon:{title:"StumbleUpon",url:"http://www.stumbleupon.com/submit?url="+d+"&title="+c},tumblr:{title:"Tumblr",url:"https://www.tumblr.com/widgets/share/tool?canonicalUrl="+d+"&title="+c}},follow:{facebook:{title:"Facebook",url:"https://facebook.com"},google:{title:"Google",url:"https://plus.google.com"},twitter:{title:"Twitter",url:"https://twitter.com"},linkedin:{title:"LinkedIn",url:"https://linkedin.com"},pinterest:{title:"Pinterest",url:"https://pinterest.com"},yelp:{title:"Yelp",url:"https://yelp.com"}}},b),f={};/**
* Generate markup for buttons.
*
* @param object $obj
*/
/**
* Init jSocial
*/
return f.style=function(b){b.once("jSocial",function(){if(e.showshare){var c=a('<div class="jSocial-share" />'),d="";0!==e.sharetitle.length&&(c.append('<span class="title">'+e.sharetitle+"</span>"),d=e.sharetitle+" on "),e.share.map(function(a){c.buttonize(e.sharelinks[a].url,d+e.sharelinks[a].title,[e.sharelinks[a].title.toLowerCase(),e.buttonclass,"icon"])}),b.append(c)}if(e.showfollow){var f=a('<div class="jSocial-follow" />'),g="";0!==e.followtitle.length&&(f.append('<span class="title">'+e.followtitle+"</span>"),g=e.followtitle+" on "),a.each(e.follow,function(){f.buttonize(this.url,g+this.title,[this.title.replace(/ /g,"").toLowerCase(),e.buttonclass,"icon"])}),b.append(f)}})},f.init=function(){
// Generate markup for links.
f.style(jQuery(this))},this.each(f.init)},/**
* jTabs : Tabify a list of content
*/
b.jTabs=function(a){var b=jQuery.extend({active:0,// Array index of initially active tab
orient:"horizontal",// || "vertical"
cclass:"jTabs"},a),c={};/**
*
*
* @param object $obj
* @param object li
*/
/**
* Init jTabs
*/
return c.showContent=function(a,b){var c=b.find(".content"),d=a.parent().find(".panel-content");b.activate(),d.fadeOut("normal",function(){jQuery(this).html(c.html()).fadeIn("normal")})},c.init=function(){var a=jQuery(this),d=a.find("> li"),e=jQuery("<div/>").classify([b.orient,b.cclass+"-wrap"]),f='<div class="panel"><div class="panel-content" /></div>';a.once(b.cclass,function(){a.wrap(e).after(f),d.each(function(){var a=jQuery(this);a.addClass("tab").kidWrap(),
//Set 1st child as title
a.children().eq(0).addClass("title"),
//Set wrapper as content
a.children().eq(1).addClass("content").hide()})}),
//Add classes/functions to each panel
d.each(function(){var b=jQuery(this);b.click(function(d){d.preventDefault(),c.showContent(a,b)})}),
//Set default content
c.showContent(a,d.eq([b.active]))},this.each(c.init)},b.jTooltip=function(a){var b=jQuery.extend({trigger:"jTooltip-trigger",// Class used to trigger tooltip.
triggerbtn:"jTooltip-trigger-btn",// OR false, used to trigger tooltip
triggerbtntext:"About this",cclass:"jTooltip-tooltip",dataattr:"data-tooltip",bindto:"btn",// OR 'event' OR {}
wrap:!0,offsetX:10,offsetY:5},a),c={};/**
* Generate markup for buttons.
*
* @param object $obj
*/
/**
* Init jSocial
*/
return c.style=function(a,c){var d=jQuery("<div>"+a.attr(b.dataattr)+"</div>");if(b.wrap&&a.wrap('<div class="'+b.cclass+'-wrap" />'),d.classify([b.cclass]),a.after(d),b.triggerbtn!==!1){var e=jQuery('<span aria-label="'+b.triggerbtntext+'" />');e.classify([b.trigger,b.triggerbtn]).prop("tabindex",a.prop("tabindex")),a.before(e)}else a.addClass(b.trigger);c(a)},c.events=function(a){jQuery("."+b.trigger).on("mouseenter focus",function(a){var c=jQuery(this),d=c.nextAll("."+b.cclass+":first"),e={},f={};switch(b.bindto){case"event":f={top:parseInt(a.clientY)+b.offsetY+"px",left:parseInt(a.clientX)+b.offsetX+"px"};break;case"btn":e=this.getBoundingClientRect(),f={top:e.top+c.height()/2+b.offsetY+"px",left:e.left+c.width()+b.offsetX+"px"};break;default:case{}:e={}.getBoundingClientRect(),f={top:e.top+c.height()/2+b.offsetY+"px",left:e.left+c.width()/2+b.offsetX+"px"}}d.css(f).activate()}).on("mouseleave blur",function(a){jQuery(this).nextAll("."+b.cclass+":first").deactivate()})},c.init=function(){c.style(jQuery(this),c.events)},this.each(c.init)},b.jZoom=function(a){var b=jQuery.extend({cclass:"jZoom",trigger:"jZoom",offsetX:"1em",offsetY:"1em"},a),c={};/**
*
*
* @param object $obj
*/
/**
* Init jTabs
*/
return c.showZoom=function(a){},c.closeZoom=function(){},c.updateZoom=function(a){var b=(a.prop("x"),a.prop("y"));console.log(b)},c.style=function(a){a.once(b.cclass,function(){jQuery(this).wrap('<span class="'+b.cclass+'-wrap" />').after('<span class="'+b.cclass+'-trigger">Zoom Image</span>').after('<span class="'+b.cclass+'-window">')})},c.events=function(a){var d=a.parent().find("."+b.cclass+"-window");a.on("click",function(a){a.preventDefault(),d.activate()}),d.on("mouseleave blur",function(){d.deactivate()}),d.on("mousedown",c.updateZoom(a))},c.init=function(){var a=jQuery(this);c.style(a),
//Set default content
c.events(a)},this.each(c.init)},jQuery.fn.extend(b)}(jQuery),b["true"]=a}({},function(){return this}());