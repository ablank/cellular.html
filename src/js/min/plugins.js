!function(a,b){/**
 * @file
 * Call javascript plugins used in theme.
 */
!function(a){var b={cellularui:{jAccordion:!0,jCard:!0,jMmenu:!0,jModal:!0,jScrolli:!0,jSocial:!0,jTabs:!0,jTooltip:!0,jZoom:!0},backstretch:!1,flowtype:!1,freetile:!1,parallax:!1,smoove:!1};
// CellularUI functions.
b.cellularui.jAccordion===!0&&a(".jAccordion").jAccordion({duration:500,// Duration of transition.
easing:"swing",// Type of easing.
single:!1}),b.cellularui.jCard===!0&&a(".jCard, .card").jCard({cclass:"jCard"}),b.cellularui.jMmenu===!0&&a("#nav").jMmenu({
// Window breakpoint trigger:
// "breakpoint": cellular.opts.breakpoint, // "mobile"
cclass:"jMmenu",// default class added to menu.
// Classes added for styling- CSS classes control position & animation.
// <element class="$type-$direction">
animateclass:"slide-down"}),b.cellularui.jModal===!0&&a(".jCard").jCard({cclass:"jCard"}),b.cellularui.jTabs===!0&&(a(".jTabs").jTabs({active:0,// Array index of initially active content.
orient:"horizontal"}),a(".jTabs-vertical").jTabs({active:0,// Array index of initially active content.
orient:"vertical"})),b.cellularui.jScrolli===!0&&a(".jScrolli").jScrolli(),b.cellularui.jSocial===!0&&a(".jSocial").jSocial({showshare:!0,showfollow:!1,sharetitle:"Share this page",followtitle:"Follow Us",buttonclass:"social",share:["facebook","digg","google","twitter","linkedin","pinterest","reddit","stumbleupon","tumblr"],follow:{facebook:{title:"Facebook",url:"https://facebook.com"},google:{title:"Google",url:"https://plus.google.com"},linkedin:{title:"LinkedIn",url:"https://linkedin.com"},twitter:{title:"Twitter",url:"https://twitter.com"},yelp:{title:"Yelp",url:"https://yelp.com"}}}),b.cellularui.jTooltip===!0&&a("[data-tooltip]").jTooltip(),b.cellularui.jZoom===!0&&a(".jZoom").jZoom(),
// Backstretch functions.
b.backstretch===!0&&a.backstretch(["http://lorempixel.com/800/600/abstract/1","http://lorempixel.com/800/600/abstract/2","http://lorempixel.com/800/600/abstract/3"],{duration:3e3,fade:750}),
// Flowtype functions.
b.flowtype===!0&&a("#content-wrap").flowtype({minimum:400,maximum:800,minFont:12,maxFont:40,fontRatio:45}),
// Freetile functions.
b.freetile===!0&&a(".view-content").freetile({selector:".views-row",animate:!0,
// containerAnimate: true,
elementDelay:0}),
// jParallax functions.
b.parallax===!0&&a(".parallax").parallax({xparallax:!1,yparallax:!0,freezeClass:"freeze",decay:.4}),
// Smoove functions.
b.smoove===!0&&a(".smoove").smoove({offset:"20%",
// skew: "20deg",
// moveX: "15%",
moveY:"20%"})}(jQuery),b["true"]=a}({},function(){return this}());