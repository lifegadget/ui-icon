import Ember from 'ember';
import { v4 } from 'ember-uuid';
const htmlSafe = Ember.String.htmlSafe;

export function icon(params, hash = {}) {
  const id = v4();
  const family = hash.family || 'fa';
  const fw = hash.fw || true;
  const fwClass = fw ? ` ${family}-fw` : '';
  const icon = params[0];
  if(!icon) {
    console.warn('{{icon}} helper called with no icon value');
  }
  const { pointer, cursor } = hash;
  const role = hash.role ? hash.role : pointer || cursor === 'pointer' ? 'link' : 'img';
  const stylist = (params) => {
    const styleBindings = Ember.A([
      'fontSize', 'color', 'width', 'height', 'padding',
      'borderRadius', 'background', 'fontWeight', 'border',
      'opacity', 'cursor'
    ]);
    const dasherize = thingy => {
      return thingy ? Ember.String.dasherize(thingy) : thingy;
    };

    return Object.keys(params)
      .filter(i => styleBindings.includes(i))
      .map(i => {
        const name = dasherize(i);
        const value = params[i];
        return value ? `${name}: ${value}` : '';
      })
      .join('; ');
  };
  const style = stylist(Ember.assign({}, hash, {
    fontSize: hash.size,
    cursor: pointer ? 'pointer' : null,
    opacity: hash.muted ? 0.5 : null
  }));
  const labeledBy = hash.labledBy ? hash.labeledBy : (icon || String()).split('-')[0];
  const passedInClass = hash.class ? ` ${hash.class}` : '';
  return htmlSafe(
    `<i
      id=${id}
      class="ui-icon ${family} ${family}-${icon}${fwClass}${passedInClass}"
      style="${style}"
      role="${role}"
      aria-labeledBy="${labeledBy}"
      aria-describedBy="${hash.describedBy}"
    ></i>`);
}

export default Ember.Helper.helper(icon);
