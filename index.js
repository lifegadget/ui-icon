/* jshint node: true */
'use strict';
var merge = require('merge');

module.exports = {
  name: 'ui-icon',
	description: 'Ember flare for FontAwesome love',
	included: function(app, parentAddon) {
		this._super.included(app);
    const target = (parentAddon || app);
    const bower = target.bowerDirectory;
    const options = typeof app.options === 'object' ? app.options : {};
    const addonConfig = options['ui-icon'] || {};

    var o = merge(
      { fa: true, quiet: false },
      addonConfig
    );
    // specific to this addon
    app.import('vendor/ui-icon/ui-icon.css');
    if(o.fa) {
      // font-awesome
      target.import(bower + '/fontawesome/css/font-awesome.css', {overwrite: true});
      target.import(bower + '/fontawesome/fonts/fontawesome-webfont.eot',{destDir: 'fonts', overwrite: true});
      target.import(bower + '/fontawesome/fonts/fontawesome-webfont.svg',{destDir: 'fonts', overwrite: true});
      target.import(bower + '/fontawesome/fonts/fontawesome-webfont.ttf',{destDir: 'fonts', overwrite: true});
      target.import(bower + '/fontawesome/fonts/fontawesome-webfont.woff',{destDir: 'fonts', overwrite: true});
      target.import(bower + '/fontawesome/fonts/fontawesome-webfont.woff2',{destDir: 'fonts', overwrite: true});
      target.import(bower + '/fontawesome/fonts/FontAwesome.otf',{destDir: 'fonts', overwrite: true});
    }

    if (app.registry.availablePlugins['ember-cli-sass']) {

    } else {

    }

  }
};
