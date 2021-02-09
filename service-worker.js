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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d0197a2913a430a25956213e32fd6c69"
  },
  {
    "url": "assets/css/0.styles.638fa3f5.css",
    "revision": "e8ae5260496c0d33b7059bcaee3264d8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.157bace8.js",
    "revision": "f071acb76bdbafe1766be7dde0e0ed4f"
  },
  {
    "url": "assets/js/3.3918a260.js",
    "revision": "8fff4e5913674c04618edac2065f99a8"
  },
  {
    "url": "assets/js/4.8b2316bd.js",
    "revision": "ad09acf1734a12d552048366c6d52a4a"
  },
  {
    "url": "assets/js/5.59349796.js",
    "revision": "d6ee6074bb3e34e8aac8409f0323a96e"
  },
  {
    "url": "assets/js/6.36d2b034.js",
    "revision": "ee3f3e04f18c56270118b7d88a930b16"
  },
  {
    "url": "assets/js/7.37c34bee.js",
    "revision": "733bbbd3a5bcc5a71f1a78ea37523077"
  },
  {
    "url": "assets/js/8.fdc54102.js",
    "revision": "b1298c2a98d9ad1daac208686f4be05f"
  },
  {
    "url": "assets/js/9.0164cc35.js",
    "revision": "526468ce8062c14500b0852ffdb7d50d"
  },
  {
    "url": "assets/js/app.b7bac443.js",
    "revision": "1e1fb2f65df4227fe95f34583aaa81e7"
  },
  {
    "url": "docs/index.html",
    "revision": "2b50ad7b69b2f8f17ebb1f33ad04d9ef"
  },
  {
    "url": "examples/index.html",
    "revision": "9b8b5870d00351580d98be1d7c3cd83b"
  },
  {
    "url": "img/docs/approvals.png",
    "revision": "70cd79690c0bd156fd60fa6bc9fb227f"
  },
  {
    "url": "img/docs/mattermost-configuration.png",
    "revision": "ec3da758e1a390286b8c36a7d6ff32f1"
  },
  {
    "url": "img/docs/mattermost-icon-username.png",
    "revision": "85f5056f2898683a92eef57082d88aa3"
  },
  {
    "url": "img/docs/mattermost-notification.png",
    "revision": "0458f73822003cdd94b0efc0e3d525f9"
  },
  {
    "url": "img/docs/mattermost-webhooks.png",
    "revision": "6180f9b2345fe44f923e8d659c52ecdb"
  },
  {
    "url": "img/docs/notify-per-chart.png",
    "revision": "e8af30a1e09377c8ce0d17be5b57790d"
  },
  {
    "url": "img/docs/notify-per-deployment.png",
    "revision": "4fdf361f0d467c261d28787a0dd8f133"
  },
  {
    "url": "img/docs/slack-bot-name.png",
    "revision": "8bf28966565f4666dc21a5089e8da27b"
  },
  {
    "url": "img/docs/slack-bots.png",
    "revision": "55dcbba729e64ab7b74d8f8133b59bf7"
  },
  {
    "url": "img/docs/slack-notifications.png",
    "revision": "0e6fed4688df892b2d90a13545ede92d"
  },
  {
    "url": "img/examples/configure-autobuild.png",
    "revision": "6d0f96928ac08b622837e60498d45f4f"
  },
  {
    "url": "img/examples/docker-build-config.png",
    "revision": "76c6a38212db92e629a9d7717dd3ab79"
  },
  {
    "url": "img/examples/dockerhub-webhook.png",
    "revision": "5ec464d082c645b588d3bafd9a88edaf"
  },
  {
    "url": "img/examples/force-workflow.png",
    "revision": "1b53975fda037888af129a2ba8982221"
  },
  {
    "url": "img/examples/keel-quick-start.png",
    "revision": "aae9e2997e396e15248eaa69a23a7541"
  },
  {
    "url": "img/examples/whr-dockerhub-relayed.png",
    "revision": "98c939f78d5a3efcde27f6f62a8856fe"
  },
  {
    "url": "img/keel_high_level.png",
    "revision": "d8533a1ee65feb5668ac9bdaa4864ddd"
  },
  {
    "url": "img/keel_ui.png",
    "revision": "71a9783344090102dc408a78ff55bae6"
  },
  {
    "url": "img/logo_small.png",
    "revision": "f9f595a928d090e168d35707d1a8f8fc"
  },
  {
    "url": "img/logo.png",
    "revision": "fcc544ab74c3128a2cb92582f291ea15"
  },
  {
    "url": "index.html",
    "revision": "9bced4fcb518759423d32cfe4ee38851"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
