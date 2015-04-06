module.exports = {
	description: 'Installs FontAwesome and animate.css via bower',
	
	normalizeEntityName: function() {
		// this prevents an error when the entityName is
		// not specified (since that doesn't actually matter
		// to us
	},
  
	afterInstall: function() {
    this.addBowerPackageToProject('fontawesome');
		return this.addBowerPackageToProject('animate.css');
	}
};
