$(window).scroll(function(){"use strict";$(window).scrollTop()>200?$(".navbar.navbar-fixed-top").addClass("scroll-fixed-navbar"):$(".navbar.navbar-fixed-top").removeClass("scroll-fixed-navbar")}),$(document).ready(function(){"use strict";$(".navbar-nav li a").click(function(){$("#navigation-menu").css("height","1px").removeClass("in").addClass("collapse"),$("#navigation-menu").removeClass("open")})}),$(document).ready(function(){"use strict";$("#slides").superslides({play:6e3,animation:"fade",pagination:!0})}),$(document).ready(function(){"use strict";$(".animated").appear(function(){var e=$(this),a=e.data("animation");if(!e.hasClass("visible")){var o=e.data("animation-delay");o?setTimeout(function(){e.addClass(a+" visible")},o):e.addClass(a+" visible")}})}),$(document).ready(function(){"use strict";$.scrollUp=function(e){var a={scrollName:"scrollUp",topDistance:600,topSpeed:800,animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollText:"",activeOverlay:!1},o=$.extend({},a,e),t="#"+o.scrollName;$("<a/>",{id:o.scrollName,href:"#top",title:o.scrollText}).appendTo("body"),o.scrollImg||$(t).text(o.scrollText),$(t).css({display:"none",position:"fixed","z-index":"2147483647"}),o.activeOverlay&&($("body").append("<div id='"+o.scrollName+"-active'></div>"),$(t+"-active").css({position:"absolute",top:o.topDistance+"px",width:"100%","border-top":"1px dotted "+o.activeOverlay,"z-index":"2147483647"})),$(window).scroll(function(){switch(o.animation){case"fade":$($(window).scrollTop()>o.topDistance?$(t).fadeIn(o.animationInSpeed):$(t).fadeOut(o.animationOutSpeed));break;case"slide":$($(window).scrollTop()>o.topDistance?$(t).slideDown(o.animationInSpeed):$(t).slideUp(o.animationOutSpeed));break;default:$($(window).scrollTop()>o.topDistance?$(t).show(0):$(t).hide(0))}}),$(t).click(function(e){$("html, body").animate({scrollTop:0},o.topSpeed),e.preventDefault()})},$.scrollUp()}),$(document).ready(function(){var e=parseInt($("#navigation-menu").height());$(window).scroll(function(){var a=parseInt($(this).scrollTop());$(".navbar-nav > li > a").each(function(){var o=$(this).attr("href"),t=parseInt($(o).offset().top);a>=t-e-300&&($(".selected-nav").removeClass("selected-nav"),$(".navbar-nav > li > a[href="+o+"]").addClass("selected-nav"))});var o=parseInt($(document).height())-parseInt($(window).height());(a===o||a>=o)&&($(".selected-nav").removeClass("selected-nav"),$("navbar-nav > li > a:last").addClass("selected-nav"))})}),$(document).ready(function(){"use strict";$.fn.scrollTo=function(e){var a={offset:-60,speed:"slow",override:null,easing:null};return e&&(e.override&&(e.override=-1!==override("#")?e.override:"#"+e.override),$.extend(a,e)),this.each(function(e,o){$(o).click(function(e){var t;null!==$(o).attr("href").match(/#/)&&(e.preventDefault(),t=a.override?a.override:$(o).attr("href"),history.pushState?(history.pushState(null,null,t),$("html,body").stop().animate({scrollTop:$(t).offset().top+a.offset},a.speed,a.easing)):$("html,body").stop().animate({scrollTop:$(t).offset().top+a.offset},a.speed,a.easing,function(e){window.location.hash=t}))})})},$("#GoToHome, #GoToAbout, #GoToFeatures, #GoToWorks, #GoToTeam, #GoToPricing, #GoToBlog, #GoToContacts, #GoToJobForm").scrollTo({speed:1500})}),$(document).ready(function(){$("#contact-form").validate({rules:{first_name:{required:!0,minlength:1,maxlength:16},email:{required:!0,email:!0},subject:{required:!0,minlength:4,maxlength:24},message:{required:!0,minlength:2}},messages:{first_name:{required:"Please enter no more than (1) characters"},email:{required:"We need your email address to contact you",email:"Your email address must be in the format of name@domain.com"},message:{required:"Please enter no more than (2) characters"}}})});