
if [ -d "dist" ]
then
  rm -f dist/*
else
  mkdir dist
fi

# minify and combine JS
# this is simple, we find all .mjs files (such as src/main.mjs), then we cut off the `src/` portion
# and then cut off the `.mjs` section
# then run it through terser to minify it
find src -name "*.mjs" -not -name "*.test.mjs" | cut -c 5- | cut -d '.' -f 1 | xargs -I % sh -c './node_modules/.bin/terser --compress --mangle --output dist/%.mjs src/%.mjs'

# copy the css library
cp ./node_modules/@ajusa/lit/dist/* dist

## copy the rows and trie JSON from the data module
cp ../data/rows.* dist
cp ../data/trie.* dist

# build and minify the index.html
node ./posthtml.js

# gzip it all the way to 9
gzip -9 -k -f dist/*
