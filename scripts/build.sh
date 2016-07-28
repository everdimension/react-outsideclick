#!/bin/bash

rm -rf dist
./node_modules/.bin/webpack
./node_modules/.bin/webpack --output-filename=dist/ReactOutsideClick.min.js --optimize-minimize

rm -rf lib
./node_modules/.bin/babel src --out-dir lib
