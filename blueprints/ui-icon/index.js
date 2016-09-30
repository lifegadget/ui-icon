module.exports = {
	description: 'Installs FontAwesome via Bower',

	normalizeEntityName() {
		// this prevents an error when the entityName is
		// not specified (since that doesn't actually matter
		// to us
	},

	afterInstall() {
    return this.addBowerPackagesToProject([
      { name: 'fontawesome', target: '^4.6.3' }
    ]);
	}
};

