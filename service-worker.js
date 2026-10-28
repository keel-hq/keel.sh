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
    "revision": "2f385c1b355e0f79f838b5dd6ea8165a"
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
    "url": "assets/js/10.0199c940.js",
    "revision": "7301a57f980e2e412f5f7c8548ceaea7"
  },
  {
    "url": "assets/js/2.6325bd1c.js",
    "revision": "f071acb76bdbafe1766be7dde0e0ed4f"
  },
  {
    "url": "assets/js/3.3918a260.js",
    "revision": "8fff4e5913674c04618edac2065f99a8"
  },
  {
    "url": "assets/js/4.09f3d2e8.js",
    "revision": "805b56b8bfeed59c3882e8985a566927"
  },
  {
    "url": "assets/js/5.59349796.js",
    "revision": "d6ee6074bb3e34e8aac8409f0323a96e"
  },
  {
    "url": "assets/js/6.50f5db40.js",
    "revision": "a0ec469ec23c6815f37fc65e835b4de8"
  },
  {
    "url": "assets/js/7.3312f9cc.js",
    "revision": "f9b464c3a1f3a75499e2d96a4cc5881f"
  },
  {
    "url": "assets/js/8.0a6cd191.js",
    "revision": "4e064b916b51f26c17f600e3322d233f"
  },
  {
    "url": "assets/js/9.6a65e049.js",
    "revision": "20f456617fcebee7b8f3a9cea6c89d07"
  },
  {
    "url": "assets/js/app.890dc28d.js",
    "revision": "1be1ae84430c916045838fd981b6e892"
  },
  {
    "url": "docs/external-auth-proxy.html",
    "revision": "dd4ead40e35be3869ac5a40d1eaa82b2"
  },
  {
    "url": "docs/index.html",
    "revision": "0148a098e960d315bb3ea38c3a51541f"
  },
  {
    "url": "examples/index.html",
    "revision": "b4027b75ecee052b5b986c01ca4cbda2"
  },
  {
    "url": "img/apple-touch-icon.png",
    "revision": "0cea0792606028b014c9287631734f11"
  },
  {
    "url": "img/docs/approvals.png",
    "revision": "9b18873fabca4ab140c273bffcd7cb6b"
  },
  {
    "url": "img/docs/external-auth-proxy-dashboard.png",
    "revision": "78b2b90c02fb68aefa0cdc36f8ade278"
  },
  {
    "url": "img/docs/external-auth-proxy-login.png",
    "revision": "08c48029bbd8bb6f7ccfeb5114a4273b"
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
    "url": "img/docs/ui-approvals.png",
    "revision": "a83992cb654e4acc34a08116d805a18f"
  },
  {
    "url": "img/docs/ui-audit-logs.png",
    "revision": "fa17ba6dc680e486f8276be8144149d4"
  },
  {
    "url": "img/docs/ui-tracked-images.png",
    "revision": "91e5b004c6a485f7d356a2f192bf6625"
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
    "url": "img/favicon-16x16.png",
    "revision": "85097d469cfa6822bf60153afa7cb054"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "530f2f6637f370047075cbc4084397dc"
  },
  {
    "url": "img/keel_high_level.png",
    "revision": "d8533a1ee65feb5668ac9bdaa4864ddd"
  },
  {
    "url": "img/keel_ui.png",
    "revision": "7802975f3fb3044a498e8ca4a57d2fe9"
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
    "revision": "f609ddf396e20bc7d7adf547faf1ee90"
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
