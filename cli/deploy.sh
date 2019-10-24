#!/bin/bash

TARGETUSER=lop
TARGETHOST=legendarytech.co
TARGETPATH=/home/lop/legendarytech.co
rsync -az --no-perms --exclude=".git*" --exclude="node_modules" ./ $TARGETUSER@$TARGETHOST:$TARGETPATH

ssh $TARGETUSER@$TARGETHOST "cd $TARGETPATH && yarn install --no-progress && yarn build"
