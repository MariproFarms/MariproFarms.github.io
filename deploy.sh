#!/usr/bin/env sh

# abort on errors
set -e

# build

npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.mariprofarms.com' > CNAME

echo 'initing...'
git init

echo 'adding...'

git add -A

echo 'committing...'

git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:MariproFarms/MariproFarms.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>

echo 'pushing...'
git push -f git@github.com:MariproFarms/maripro.git master


cd -