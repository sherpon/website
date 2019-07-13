#!/usr/bin/env sh

echo "Installing firebase-tools":
npm install -g firebase-tools

echo "Deploying to production":
firebase deploy --only hosting:website -P production --token $FIREBASE_DEPLOY_TOKEN
