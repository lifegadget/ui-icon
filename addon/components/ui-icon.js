import Ember from 'ember';
import layout from '../templates/components/ui-icon';
import SharedStylist from 'ember-cli-stylist/mixins/shared-stylist';
const { keys, create } = Object; // jshint ignore:line
const {computed, observer, $, A, run, on, typeOf, debug, defineProperty, get, set, inject, isEmpty} = Ember;  // jshint ignore:line

const icon = Ember.Component.extend(SharedStylist, {
  layout: layout,
  tagName: '',
  init() {
    this._super(...arguents);
    if(!this.get('elementId')) {
      this.set('elementId', 'ember-' + Math.random().toString(36).substr(2, 9));
    }
  },

  styleBindings: ['fontSize', 'color', 'width', 'height', 'padding','borderRadius', 'background', 'fontWeight', 'border', 'opacity', 'cursor'],
  fontFamily: 'fa',
  role: undefined,
  _role: computed('role', function() {
    const {role, pointer, cursor} = this.getProperties('role', 'pointer', 'cursor');

    if (role) {
      return role;
    } else {
      return pointer || cursor === 'pointer' ? 'link' : 'img';
    }
  }),
  labeledBy: undefined,
  _labeledBy: computed('labeledBy', function() {
    const {labeledBy, icon} = this.getProperties('labeledBy', 'icon');

    return labeledBy ? labeledBy : (icon || String()).split('-')[0];
  }),
  fw: true,
  _fw: computed('fw', function() {
    let fw = this.get('fw');
    let fontFamily = this.get('fontFamily');
    return fw ? ` ${fontFamily}-fw` : null;
  }),
  _icon: computed('icon', function() {
    let family = this.get('fontFamily');
    let icon = this.get('icon');
    return icon ? ` ${family}-${icon}` : null;
  }),
  spin: null,
  _spin: computed('spin', function() {
    return this.get('spin') ? ` ${this.get('fontFamily')}-spin` : '';
  }),
  pulse: null,
  _pulse: computed('pulse', function() {
    return this.get('pulse') ? ` ${this.get('fontFamily')}-pulse` : '';
  }),
  size: computed.alias('fontSize'),
  color: null,
  border: false,
  circular: false,
  padded: false,
  value: null, // values are passed by an action
  _value: computed('value', 'elementId', function() {
    let { value, elementId } = this.getProperties('value','elementId');
    return value !== null ? value : elementId;
  }),

  mood: null,
  _mood: computed('mood', function() {
    const {mood} = this.getProperties('mood');
    return mood ? ` text-${mood}` : '';
  }),

  opacity: computed('muted', {
    set(_, value) {
      return value;
    },
    get() {
      return this.get('muted') ? 0.5 : 1;
    }
  }),
  _pointer: computed('pointer', function() {
    const pointer = this.get('pointer');
    if(typeOf(pointer) === 'boolean' && pointer) {
      return ' pointer';
    } else {
      return '';
    }
  }),

  actions: {
    onClick: function(evt) {
      if(typeOf(this.attrs.onClick) === 'function') {
        this.attrs.onClick({
          event: evt,
          object: this,
          value: get(this, 'value'),
          style: 'closure'
        });
      } else {
        this.sendAction('onClick', {
          event: evt,
          object: this,
          value: get(this, 'value'),
          style: 'classic'
        });
      }
    },
  }

});

icon.reopenClass({
  positionalParams: ['icon']
});
icon[Ember.NAME_KEY] = 'ui-icon';
export default icon;
