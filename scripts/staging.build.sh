#!/usr/bin/env sh

echo "Start build for staging";

webpack --mode production \
  --env.ENVIRONMENT=staging \
  --env.ENV_FILE_PATH=$PWD/env/staging.env 