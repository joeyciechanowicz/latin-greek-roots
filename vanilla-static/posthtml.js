const {readFileSync, writeFileSync} = require('fs');
const posthtml = require('posthtml');

const html = readFileSync('src/index.html', 'utf8');

const posthtmlPlugins = [
	require('posthtml-cache')(/* options */),
	require('htmlnano')({
		removeComments: true, // Disable the module "removeComments"
		collapseWhitespace: 'conservative' // Pass options to the module "collapseWhitespace"
	})
];

const postHtmlOptions = {
	// See PostHTML docs
};

posthtml(posthtmlPlugins)
	.process(html, postHtmlOptions)
	.then(result => {
		writeFileSync('dist/index.html', result.html);
	});
