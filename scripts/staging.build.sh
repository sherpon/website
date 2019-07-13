#!/usr/bin/env sh

echo "copy postcss.config.js file into the node_modules":
cp "./src/styles/postcss.config.js" "./node_modules/grapesjs/dist/css/postcss.config.js"

echo "Start build for staging";

webpack --mode production \
  --env.ENVIRONMENT=staging \
  --env.ENV_FILE_PATH=$PWD/env/staging.env 