// ==UserScript==
// @name RedirectorJS
// @namespace https://github.com/t3dium/RedirectorJS
// @version 1.1
// @description	A simple js script to redirect websites to their privacy respecting & ad free frontend.
// @run-at document-start
// @match *://*.instagram.com/*
// @match *://*.twitter.com/*
// @match *://*.reddit.com/*
// @match *://*.youtube.com/*
// @match *://translate.google.com/*
// @match *://*.wikipedia.org/*
// @match *://*.imgur.com/*
// ==/UserScript==

function redirectInstagram() {
  if (window.location.pathname.indexOf("/p/") == 0) {
    window.stop();
    location.hostname = 'bibliogram.art';
  } else if (window.location.pathname == "/") {
    window.stop();
    location.hostname = 'bibliogram.art';
  } else {
    let oldUrlPath  = window.location.pathname;
    let newURL  = window.location.protocol + "//" + "bibliogram.art" + "/u" + oldUrlPath + window.location.search + window.location.hash;

    window.location.replace (newURL);
  }
}

function redirectwiki() {
	window.stop();
	location.hostname = "wikiless.org";
}

function redirectimgur() {
	window.stop();
	location.hostname = "rimgo.pussthecat.org";
}

function redirectTwitter() {
	window.stop();
	location.hostname = "nitter.42l.fr";
}

function redirecttranslate() {
	window.stop();
	location.hostname = "translate.metalune.xyz/";
}

function redirectYoutube() {
  if (window.location.pathname.indexOf("results?search_query") == 1) {
    window.stop();
    location.hostname = "vid.puffyan.us";
    window.location.replace("results?search_query", "search?q");
  } else {
    window.stop();
    location.hostname = "vid.puffyan.us";
  }

}

var urlHostname = window.location.hostname;

switch (urlHostname) {
	case "www.instagram.com":
	  redirectInstagram();
	  break;

	case "en.wikipedia.org":
	  redirectwiki();
	  break;

	case "www.wikipedia.org":
	  redirectwiki();
	  break;

	case "translate.google.com":
	  redirecttranslate();
	  break;

	case "twitter.com":
	  redirectTwitter();
	  break;

	case "mobile.twitter.com":
	  redirectTwitter();
	  break;

	case "www.youtube.com":
	  redirectYoutube();
	  break;

	case "m.youtube.com":
	  redirectYoutube();
	  break;

  case "imgur.com":
	  redirectimgur();
	  break;

  case "i.imgur.com":
	  redirectimgur();
	  break;
}
