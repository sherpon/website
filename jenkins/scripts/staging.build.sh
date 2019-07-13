#!/usr/bin/env sh

echo "Start build for staging";

./node_modules/.bin/webpack --mode production \
  --env.ENVIRONMENT=staging \
  --env.ENV_FILE_PATH=$SHERPON_WEBSITE_STAGING_ENV 