#!/usr/bin/env bash

node ./extract-wikipedia-data.js

gzip -9 -k -f trie.json
gzip -9 -k -f rows.json
