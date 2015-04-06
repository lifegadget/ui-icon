/* jshint node: true */
'use strict';

module.exports = {
  name: 'ui-icon',
	description: 'Ember flare for FontAwesome love',
	included: function(app) {
		this._super.included(app);
    // specific to this addon
    app.import('vendor/ui-icon/ui-icon.css');
    // font-awesome
    app.import('bower_components/fontawesome/css/font-awesome.css');
    app.import('bower_components/fontawesome/fonts/fontawesome-webfont.eot',{destDir: 'fonts'});
    app.import('bower_components/fontawesome/fonts/fontawesome-webfont.svg',{destDir: 'fonts'});
    app.import('bower_components/fontawesome/fonts/fontawesome-webfont.ttf',{destDir: 'fonts'});
    app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff',{destDir: 'fonts'});
    app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff2',{destDir: 'fonts'});
    app.import('bower_components/fontawesome/fonts/FontAwesome.otf',{destDir: 'fonts'});
    // annimate.css
    app.import('bower_components/animate.css/source/_base.css');
    app.import('bower_components/animate.css/source/attention_seekers/bounce.css');
    app.import('bower_components/animate.css/source/attention_seekers/flash.css');
    app.import('bower_components/animate.css/source/attention_seekers/pulse.css');
    app.import('bower_components/animate.css/source/attention_seekers/rubberBand.css');
    app.import('bower_components/animate.css/source/attention_seekers/shake.css');
    app.import('bower_components/animate.css/source/attention_seekers/swing.css');
    app.import('bower_components/animate.css/source/attention_seekers/tada.css');
    app.import('bower_components/animate.css/source/attention_seekers/wobble.css');
	}
};
