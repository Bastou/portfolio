#!/bin/bash
# TODO: wip
echo 'Starting dev server & assets watcher'
hugo server | parallel cd themes/portfolio;gulp;