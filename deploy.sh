#! /bin/bash

# Build project
yarn build

# Add only dist folder
git add dist

git commit -m "Built prod files"

git subtree push --prefix dist origin gh-pages

