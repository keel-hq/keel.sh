install:
	npm ci

dev:
	NODE_OPTIONS=--openssl-legacy-provider npm run dev

# Deployment is handled by .github/workflows/deploy.yml on every push to master,
# this target is only here to reproduce the CI build locally.
build:
	NODE_OPTIONS=--openssl-legacy-provider npm run build
