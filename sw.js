/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-2f029cf4c539c78e5de5.js"
  },
  {
    "url": "app-be5b95f2ecb473202fcd.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-632a50a46c9afc03ae2b.js"
  },
  {
    "url": "index.html",
    "revision": "bd9f1f107a49c4a992422f6c0f88a836"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f0e823e707f3e6ae353a199fa1cb34f2"
  },
  {
    "url": "0-f0dfe50ea2d0fca2cf9b.js"
  },
  {
    "url": "component---src-templates-index-js-fd10334d9bb6946d789c.js"
  },
  {
    "url": "static/d/166/path---index-6a9-4ESTbP1Ibn6YP2Fj8rs5bb9Pbk.json",
    "revision": "f1c7bbcfcdb29453c3373ede0258ee19"
  },
  {
    "url": "component---src-pages-404-js-cac8e9a59dba1e1613dc.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.json",
    "revision": "57d01dabcd6cdfd50dbacdefe6c15454"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "af1fa3c13c6ede516cdf7794f1df8960"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});