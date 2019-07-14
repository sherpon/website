#!/usr/bin/env sh

echo "Start build for production";

webpack --mode production \
  --env.ENVIRONMENT=production \
  --env.ENV_FILE_PATH=$PWD/env/production.env 