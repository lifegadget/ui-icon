# [ui-icon](https://github.com/lifegadget/ui-icon) ![ ](https://travis-ci.org/lifegadget/ui-icon.svg) [![npm version](https://badge.fury.io/js/ui-icon.svg)](http://badge.fury.io/js/ui-icon)  [![Code Climate](https://codeclimate.com/github/lifegadget/ui-icon/badges/gpa.svg)](https://codeclimate.com/github/lifegadget/ui-icon)
> FontAwesome icons with Ember flare

## Install ##

````bash
ember install ui-icon
````

> Note: this *will* install both [FontAwesome](http://fortawesome.github.io/Font-Awesome/) and [Animate.css](http://daneden.github.io/animate.css/) (see dependencies section) but you can configure how much you use them (including not at all)

## Usage ##


````hbs
  Full Syntax
  {{ui-icon icon='facebook-square'}}

  Shortened Syntax
  {{icon-facebook}}
````

For more details on the syntax check out the interactive demo:

> [ui-icon demo](https://ui-icon.firebaseio.com)


## Configuration ##

By default this addon will add all the font and CSS requirements for [**font-awesome**](http://fortawesome.github.io/Font-Awesome/) and it will minimally add the "attention-getters" CSS from [**animate.css**](http://daneden.github.io/animate.css/). You might say, "hey that's perfect" and of course that's what we *thought* you'd say so that is our default. You may, however, go whatever path you choose ... you reckless sailor.


### FontAwesome ###

If you've already loaded the CSS/Fonts for FontAwesome and you'd like us to stay out of that business, modify your `Brocfile` like so:

```javascript
// in your path/to/app/Brocfile.js

var app = new EmberApp({
  'ui-icon': {
    'fa': false
  }
});
```

Ok, the addon will still be inserting `fa` and `fa-[fontName]` classes based on your usage but if you want you can also specify a "font-family", so for instance:

````handlebars
 {{ui-icon family='glyph' icon='file'}}
````

this should then output the classes: `glyph` and `glyph-file` instead of the typical `fa` and `fa-file`. Happy? If not then please turn yourself in ... you are officially miserable.

### Animations ###

As already mentioned the default is to include what **animate.css** calls *attention seekers*. These are:

- bounce
- flash
- pulse
- rubberBand
- shake
- swing
- tada
- wobble

You can take what you're given and no one would fault you but if you're fiercely independant (as many folks who build *ambitious apps* are) you have options. These options take two different forms:

- **Operation** - whatever you specify can be *added* to what we default to or **overwritten**
- **Animations** - you can specify a list of animation to include ... these will be either:
    - other animations from animate.css library
    - your own animations

Let's assume that you want to add two additional annimations: "lightSpeedIn" from annimate.css and "foobar" your own animation. Here's how you'd do it:

```javascript
// in your path/to/app/Brocfile.js

var app = new EmberApp({
  'ui-icon': {
    'animateOperation': 'append',
    'animate': ['lightspeed/lightSpeedIn.css','/foobar.css']
  }
});
```

> Note: if you have your own animations then you'll create a directory off of `/app` called "ui-icon" and then put your CSS files in there.
>

### Logs ###
By default, this addon will briefly communicate its configuration setup when either `ember serve` or `ember build` is run. This is to remind you of
the configuration but if this is unwanted verbosity you can turn it off with:

```javascript
// in your path/to/app/Brocfile.js

var app = new EmberApp({
  'ui-icon': {
    'quiet': true
  }
});
````

## Dependencies ##

- FontAwesome - this is the fountain of icon-awesomeness
- Annimate.css - a great set of libraries, this is not a strict dependency but you'd be crazy not to want it :)

FontAwesome is the sole dependency for this repo to work but it was designed to play nicely with Twitter's Bootstrap as well.

## Version Compatibility

This may very well work with older version of Ember and Ember-CLI but it was intended for:

- Ember 1.11.0+
- Ember-CLI 0.2.2+

## Repo Contribution

We are open to your creative suggestions but please move past the "idea" stage
and send us a PR so we can incorporate your ideas without killing ourselves. :)

## Licensing

This component is free to use under the MIT license:

Copyright (c) 2015 LifeGadget Ltd

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
