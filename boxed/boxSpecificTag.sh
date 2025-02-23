#!/bin/bash
set -e

srcTag=$1
targetTag=$2

tempbranch=$srcTag
tempbranch+="_branch"

git checkout main

git branch -d $tempbranch || true
git push origin -d $tempbranch || true
git push --delete origin $targetTag || true
git tag --delete $targetTag || true

git checkout -b $tempbranch tags/$srcTag

mv .github .github_original
git checkout main -- .github
git checkout main -- boxed
git add .
git commit -m "integrate main branch changes"

git push -u origin $tempbranch

git tag $targetTag
git push origin --tags

git checkout main

git branch -d $tempbranch
git push origin -d $tempbranch
