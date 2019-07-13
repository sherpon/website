#!/usr/bin/env sh

echo "Start build for production";

./node_modules/.bin/webpack --mode production \
  --env.ENVIRONMENT=production \
  --env.ENV_FILE_PATH=$ADMIN_PRODUCTION_ENV