#!/bin/sh

mkdir -p /output

if (! -d src) then
	git clone https://github.com/$REPO src
	cd src
else
	cd src; git pull
fi

hugo
rm -rf /output/*
cp -R public/* /output