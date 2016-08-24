#/bin/bash

mkdir tmp
cd tmp
wget -O wordpress.tar.gz https://wordpress.org/latest.tar.gz

tar -xvzf wordpress.tar.gz
mv wordpress ..

cd ..
npm install
