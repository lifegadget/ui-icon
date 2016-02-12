import Ember from 'ember';
import layout from '../templates/components/ui-icon';
const { keys, create } = Object; // jshint ignore:line
const {computed, observer, $, A, run, on, typeOf, debug, defineProperty, get, set, inject, isEmpty} = Ember;  // jshint ignore:line

const icon = Ember.Component.extend({
  layout: layout,
  tagName: 'i',
  classNames: ['ui-icon'],
  classNameBindings: ['fontFamily','_fw', '_icon', '_classSize', 'spin:fa-spin', 'pulse:fa-pulse', 'border:fa-border', 'muted', 'cursor'],
  attributeBindings: ['_style:style'],
  fontFamily: 'fa',
  fw: true,
  _fw: Ember.on('init', computed('fw', function() {
    let fw = this.get('fw');
    let fontFamily = this.get('fontFamily');
    return fw ? `${fontFamily}-fw` : null;
  })),
  _icon: computed('icon', function() {
    let family = this.get('fontFamily');
    let icon = this.get('icon');
    return icon ? `${family}-${icon}` : null;
  }),
  color: null,
  border: false,
  circular: false,
  padded: false,
  _circular: observer('circular', function() {
    let circular = this.get('circular');
    let padded = this.get('padded');
    if(circular) {
      if(Number(padded) !== padded) {
        padded = padded ? 10 : 0;
      }
      run.next( ()=> {
        let height = this.$().height();
        this.set('_styleWidth', height + padded + 'px');
        this.set('_styleHeight', height + padded + 'px');
        this.set('_stylePadTop', padded/2 + 'px');
        this.set('_stylePadLeft', (padded/2)*(1/3) + 'px');
        this.set('_styleBorderRadius', '50%');
        this.set('_styleTextAlign', 'center');
      });
    }
  }),
  size: null, // set by container
  _classSize: null,
  _styleFontSize: null,
  _styleBorderRadius: null,
  _styleWidth: null,
  _styleHeight: null,
  _stylePadLeft: null,
  _stylePadTop: null,
  _sizeObserver: observer('size', function() {
    let size = String(this.get('size'));
    if(size.substr(-2) === 'pt' || size.substr(-2) === 'em' || size.substr(-1) === '%') {
      this.set('_styleFontSize',size);
    } else if (size && size === 'lg') {
      this.set('_classSize', 'fa-lg');
    } else if (size && size.substr(-1) === 'x') {
      // fontsize multiplier
      let factor = size.substr(0,size.length - 1);
      if (factor > 10) {
        console.log('ui-icon has styling options up to 10x, not as high as %s. If you need bigger sizing use an explicit pixel size(px) or state a percentage number rather than a multiplier', factor);
      }
      if(factor) {
        this.set('_classSize', `scale-${factor}x`);
      }
    } // end scale factor
  }),
  value: null, // values are passed by an action
  _value: computed('value', 'elementId', function() {
    let { value, elementId } = this.getProperties('value','elementId');
    return value !== null ? value : elementId;
  }),
  click: function(evt) {
    if(typeOf(this.attrs.onClick) === 'function') {
      this.attrs.onClick({
        event: evt,
        object: this,
        style: 'closure'
      });
    } else {
      this.sendAction('onClick', {
        event: evt,
        object: this,
        style: 'classic'
      });
    }
  },

  tooltip: false,
  tooltipPlacement: 'top',
  tooltipDelay: 500,
  tooltipHtml: true,
  tooltipTrigger: 'hover',
  tooltipTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  _tooltipInit: Ember.on('init', function() {
    let tooltip = this.get('tooltip');
    if(tooltip) {
      let {
        tooltipPlacement: placement,
        tooltipDelay: delay,
        tooltipHtml: html,
        tooltipTrigger: trigger,
        tooltipTemplate: template} = this.getProperties('tooltipPlacement', 'tooltipDelay','tooltipHtml','tooltipTrigger','tooltipTemplate');
      Ember.run.schedule('afterRender', () => {
        try {
          this.$().tooltip({
            title: tooltip,
            delay: delay,
            html: html,
            trigger: trigger,
            placement: placement,
            template: template
          });
        } catch (e) {
          console.log('There was a problem setting up the tooltip on [' + this.get('elementId') + '], ensure Bootstrap\'s JS is included in the vendor JS.\n%o',e);
        }
      });
    }
  }),
  _style: Ember.computed('_styleWidth', '_styleFontSize', '_styleTextAlign', '_stylePadTop', '_stylePadLeft', '_styleBorderRadius','_styleFontSize', 'color', function() {
    const propMap = [
      {key: '_styleWidth', value: 'width'},
      {key: '_styleHeight', value: 'height'},
      {key: 'color', value: 'color'},
      {key: 'background', value: 'background-color'},
      {key: '_styleBorderRadius', value: 'border-radius'},
      {key: '_styleTextAlign', value: 'text-align'},
      {key: '_stylePadTop', value: 'padding-top'},
      {key: '_stylePadLeft', value: 'padding-left'},
      {key: '_styleFontSize', value: 'font-size'}
    ];
    let style = '';
    propMap.forEach( (item) => {
      let styleProperty = this.get(item.key);
      if(styleProperty) {
        style = style + `;${item.value}:${styleProperty}`;
      }
    });

    return Ember.String.htmlSafe(style);
  }),

  _init: Ember.on('willRender', function() {
    this._circular();
    this._sizeObserver();
  })

});
icon.reopenClass({
  positionalParams: ['icon']
});
export default icon;
