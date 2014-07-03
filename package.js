Package.describe({
  summary: 'Rangy packaged for Meteor'
});

Package.on_use(function (api) {

	var path = Npm.require('path');
	var assetPath = path.join('lib/rangy/dev/uncompressed/');
	var assetFiles = [
		assetPath + 'rangy-core.js',
		assetPath + 'rangy-selectionsaverestore.js',
		assetPath + 'rangy-cssclassapplier.js',
		assetPath + 'rangy-highlighter.js',
		assetPath + 'rangy-serializer.js',
		assetPath + 'rangy-textrange.js'
	];
	api.add_files(assetFiles, 'client');		
});