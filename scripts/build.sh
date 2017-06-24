#!/bin/bash

webpack -p --config webpack.production.js
cordova run android
