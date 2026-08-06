# Contributing to keel.sh

This repository contains the source of [keel.sh](https://keel.sh), a
[VuePress](https://v1.vuepress.vuejs.org/) site. The pages live in:

* `README.md` - homepage
* `docs/` - the guide
* `examples/` - examples
* `.vuepress/` - site configuration and static assets

## Running it locally

```bash
make install   # npm ci
make dev       # http://localhost:8080
```

To reproduce exactly what CI builds:

```bash
make build     # output goes into ./dist (git ignored)
```

VuePress 1.x is built on webpack 4, which needs `NODE_OPTIONS=--openssl-legacy-provider`
on modern Node.js versions. The `make` targets set it for you.

## Deployments

Deployments are automated. Every push to `master` runs
[`.github/workflows/deploy.yml`](workflows/deploy.yml), which builds the
site and force-pushes `dist/` to the `gh-pages` branch that GitHub Pages serves
(including the `keel.sh` CNAME). Pull requests run the same build without
deploying, so a broken build is caught before it is merged.

The workflow can also be triggered manually from the Actions tab
("Build & deploy website" -> "Run workflow") if the site ever needs to be
rebuilt without a new commit.
