// Note: use javascriptobfuscator.com.  If you use obfuscator.io, set reserved names to ^br and ^sp because the onclick=br and onclick=sp lines break if you don't


// For Exit Link Tracking
// var xmlhttp=false;
// if (!xmlhttp && typeof XMLHttpRequest!='undefined') {try {xmlhttp = new XMLHttpRequest();} catch (e) {xmlhttp=false;}}
// if (!xmlhttp && window.createRequest) {try {xmlhttp = window.createRequest();} catch (e) {xmlhttp=false;}}
// function exitLink(e){xmlhttp.open("GET", "/_exit_link.cfm?d="+e.href,true);xmlhttp.send(null);return true;}
// function br(){var b=this.id.slice(2,this.id.length);xmlhttp.open("POST", "/brec.cfm?b="+b,true);xmlhttp.send(null);return true;}
// function sp(){var sp=this.id.slice(2,this.id.length);xmlhttp.open("POST", "/_sprec.cfm?sp="+sp,true);xmlhttp.send(null);return true;}



// Add onclick listener to banners and sponsors
// var links=document.getElementsByTagName('a');
// for(var i=0;i<links.length;i++){
// 	if(links[i].id.indexOf("bn")==0){
// 		links[i].onclick = br;
// 	}else if(links[i].id.indexOf("sp")==0){
// 		links[i].onclick = sp;
// 	}
// };

// Left Nav/Search bar moving JS and Banner swapping
// var mb_menu_pos = -275;
// var mb_pj_pos = -275;
// var site_pos = 0;
// var searchTop = -30;

// if (document.addEventListener) {
// 	document.addEventListener("DOMContentLoaded", pc_init, false);
// }
// else {
// 	console.log('здесь: //window.onload = pc_init;');
// }



// Top Nav Sticky trigger code
// window.onscroll = function() {stickyNavCheck()};
// var siteStrip = document.getElementById("top-of-site"); 
// // Get the navbar strip
// var navStrip = document.getElementById("top-nav-strip"); // Get the navbar links only
// var navIsSticky = false;

// function stickyNavCheck() {
// 	//console.log("el",siteStrip.getBoundingClientRect().top);

// 	var isDp = window.matchMedia("screen and (min-width: 1024px)").matches;

// 	if(isDp){
// 		var trigOffset = -38;

//   		if (siteStrip.getBoundingClientRect().top < trigOffset){ 
// 			  // mobile is -94, dp is -165
//   			if(!navIsSticky){
//   				navStrip.classList.add("sticky");
//   				document.getElementById("nav-main-links").classList.add("sticky");
//   				document.getElementById("dp-main-logo").classList.add("hide");
//   				document.getElementById("dp-main-logo-sticky").classList.remove("hide");
//   				document.getElementById("dp-search-sticky").classList.remove("hide");
//   				navIsSticky = 1;
// 			}
// 		}
// 		else if(navIsSticky){
// 			navStrip.classList.remove("sticky");
// 			document.getElementById("nav-main-links").classList.remove("sticky");
//   			document.getElementById("dp-main-logo").classList.remove("hide");
//   			document.getElementById("dp-main-logo-sticky").classList.add("hide");
//   			document.getElementById("dp-search-sticky").classList.add("hide");
//   			navIsSticky = 0;
// 		}
// 	}
// }

// function pc_init() {
// 	// Install click handlers
// 	//document.getElementById("menuHamburger").addEventListener("click", toggleMenu);

// 	//var mb = window.matchMedia("screen and (max-width: 767px)"); // set to tablet max-width media query value
// 	//mb.addListener(updateBanLocs); // Attach listener function on state changes
// 	//var tb = window.matchMedia("screen and (min-width: 768px) and (max-width:1023px)"); // set to tablet max-width media query value
// 	//tb.addListener(updateBanLocs); // Attach listener function on state changes
// 	//updateBanLocs(mb,tb);

// 	var mqls = [
// 	    window.matchMedia("screen and (max-width: 767px)"),
// 	    window.matchMedia("screen and (min-width: 768px) and (max-width:1023px)")
// 	]
// 	for (var i=0; i<mqls.length; i++){ // loop through queries
// 	    mqls[i].addListener(updateBanLocs); // call handler function whenever the media query is triggered
// 	}
// 	updateBanLocs(); // call handler function explicitly at run time

// 	var old_mb = window.matchMedia("screen and (max-width:1306px)");
// 	old_mb.addListener(updateOldBanLocs); // Attach listener function on state changes
// 	updateOldBanLocs(); // call handler function explicitly at run time

// 	stickyNavCheck(); // see if sticky top needs to be moved
// }

// function updateBanLocs() {

// 	var isMb = window.matchMedia("screen and (max-width: 767px)").matches;
// 	var isTb = window.matchMedia("screen and (min-width: 768px) and (max-width:1023px)").matches;
// 	var isDp = window.matchMedia("screen and (min-width: 1024px)").matches;

// 	bIds = [10,7,8,9,3];
// 	for (var i=0; i < bIds.length; i++) { // loop through each banner type
// 	    var b_mb = document.getElementById("b_"+bIds[i]+"_mb");
// 	    var b_tb = document.getElementById("b_"+bIds[i]+"_tb");
// 	    var b_dp = document.getElementById("b_"+bIds[i]+"_dp");

// 		if (isMb && b_mb) { // set mb if exists
// 			if(b_dp && b_dp.innerHTML.length > 0) b_mb.innerHTML = b_dp.innerHTML;
// 			if(b_tb && b_tb.innerHTML.length > 0) b_mb.innerHTML = b_tb.innerHTML;
// 			if(b_tb) b_tb.innerHTML = '';
// 			if(b_dp) b_dp.innerHTML = '';
// 		} else if (isTb) { // set tb if exists
// 			if(b_tb && b_dp && b_dp.innerHTML.length > 0) b_tb.innerHTML = b_dp.innerHTML;
// 			if(b_tb && b_mb && b_mb.innerHTML.length > 0) b_tb.innerHTML = b_mb.innerHTML;
// 			if(!b_tb && b_mb && b_dp && b_dp.innerHTML.length > 0) b_mb.innerHTML = b_dp.innerHTML; // special no b_tb exist case stick in b_mb
// 			if(b_tb && b_mb) b_mb.innerHTML = '';
// 			if(b_dp) b_dp.innerHTML = '';
// 		} else if(b_dp) { // set dp if exists
// 			if(b_mb && b_mb.innerHTML.length > 0) b_dp.innerHTML = b_mb.innerHTML;
// 			if(b_tb && b_tb.innerHTML.length > 0) b_dp.innerHTML = b_tb.innerHTML;
// 			if(b_tb) b_tb.innerHTML = '';
// 			if(b_mb) b_mb.innerHTML = '';
// 		}
// 	}
// }

// function updateOldBanLocs() {

// 	var mb = window.matchMedia("screen and (max-width:1306px)").matches;

// 	bIds = [10,7,8];
// 	for (var i=0; i < bIds.length; i++) { // loop through each banner type
// 	    var b_mb = document.getElementById("b_"+bIds[i]+"_mb");
// 	    var b_dp = document.getElementById("b_"+bIds[i]+"_dp_old");

// 		if (mb && b_mb) { // set mb if exists
// 			if(b_dp && b_dp.innerHTML.length > 0) b_mb.innerHTML = b_dp.innerHTML;
// 			if(b_dp) b_dp.innerHTML = '';
// 		} else if(b_dp) { // set dp if exists
// 			if(b_mb && b_mb.innerHTML.length > 0) b_dp.innerHTML = b_mb.innerHTML;
// 			if(b_mb) b_mb.innerHTML = '';
// 		}
// 	}
// }


// function toggleMenu(e){
// 	var d = document.getElementById("mb-nav-icon");
// 	if (d.className == "") {
// 		d.className += "open";

// 		window.scrollTo(0, 0); // force page to top, in case of sticky

// 		// Turn on overlay to dim page
// 		document.getElementById("main-site-overlay").style.display="block";
// 		document.getElementById("main-site-overlay").addEventListener("click", toggleMenu);
// 		slide(e,true);

// 	} else{
// 		d.className = "";
// 		// Bind click to overlay for turning off menu when not clicking nav
// 		document.getElementById("main-site-overlay").style.display="none";
// 		document.getElementById("main-site-overlay").removeEventListener("click", toggleMenu);
// 		slide(e,false);
// 	}
// }


// function slide(e,open) {
// 	var menu = document.getElementById("mb-menu-top");
// 	var site = document.getElementById("main-site-wrap");

// 	// make sure all sub menus are close when opening/closing main mobile menu
// 	document.getElementById("mb-menu-pj").style.transform = "";
// 	document.getElementById("mb-menu-top10").style.transform = "";
// 	document.getElementById("mb-menu-buy").style.transform = "";
// 	document.getElementById("mb-menu-review").style.transform = "";
// 	document.getElementById("mb-menu-news").style.transform = "";

// 	if(open){
// 		site.style.cssText = "transform: translateX(275px);position:fixed !important;";
// 		menu.style.cssText = "transform: translateX(275px)";
// 	} else{
// 		site.style.cssText = "";
// 		menu.style.cssText = "";
// 	}
// }
// function slideSubMenu(el,open) {
// 	var menu = document.getElementById(el);
// 	if(open){
// 		document.getElementById("mb-menu-top").style.cssText = "transform: translateX(275px);";//opacity:0.5;background-color:#808080;";
// 		menu.style.transform = "translateX(275px)";
// 	} else{
// 		document.getElementById("mb-menu-top").style.cssText = "transform: translateX(275px);"; // close pj and only show top menu
// 		menu.style.transform = "";
// 	}
// }
// function mbMenuAcc(elOpen,elClose,open) {
// 	var openMenu = document.getElementById(elOpen);
// 	var closeMenu = document.getElementById(elClose);
// 	if(open){
// 		openMenu.style.display = "none";
// 		closeMenu.style.display = "block";
// 	} else{
// 		openMenu.style.display = "block";
// 		closeMenu.style.display = "none";
// 	}
// }

// function toggleSearch(){
// 	var mag = document.getElementById("searchBtn");
// 	var ovr = document.getElementById("main-site-overlay");
// 	var nav = document.getElementById("top-nav-strip");
// 	var site = document.getElementById("main-site-wrap");
// 	var mbStrip = document.getElementById("top-nav-wrapper-mobile");
// 	var searchStrip = document.getElementById("top-nav-strip-mb-search");

// 	if (mag.className == "search-mag") {
// 		mag.className += " op";

// 		ovr.style.display="block";
// 		ovr.addEventListener("click", toggleSearch);
// 		nav.style.cssText="z-index:12;";
// 		mbStrip.style.display="none";
// 		searchStrip.style.display="flex";
// 		site.style.cssText = "position:fixed !important;";
// 		document.getElementById("gsc-i-id2").focus();
// 	} else{
// 		mag.className = "search-mag";
// 		ovr.style.display="none";
// 		ovr.removeEventListener("click", toggleSearch);
// 		nav.style.cssText="";
// 		mbStrip.style.display="flex";
// 		searchStrip.style.display="none";
// 		site.style.cssText = "";
// 	}
// }
// function stickyDpSearch(){
// 	//document.html.style.cssText = "scroll-behavior:auto;";
// 	window.scrollTo(0, 0);
// 	document.getElementById("gsc-i-id1").focus();
// }

// function windowpopper(earl, nw_width, nw_height) {
// 	if (earl.substr(earl.length-3,3) == 'cfm' ) {
// 		earl = earl + '?return_target=' + window.name;
// 	} else {
// 		earl = earl + '&return_target=' + window.name;
// 	}
// 	window.open(earl, 'PopupWindow', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,titlebar=no,width=' + nw_width + ',height=' + nw_height);
// }

function readCookie(name){
	return(document.cookie.match('(^|; )'+name+'=([^;]*)')||0)[2];
}

// function dynBanCpClick(el){
// 	var cpid = el.getAttribute("data-cp").slice(2,el.getAttribute("data-cp").length);
// 	xmlhttp.open("POST","_cp_rec.cfm?ban=1&cp_id="+cpid,true);xmlhttp.send(null);

// 	window.open(el.getAttribute("data-dest"), '_blank');return true;
// }