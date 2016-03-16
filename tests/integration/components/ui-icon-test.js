import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-icon', 'Integration | Component | ui icon', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{ui-icon}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#ui-icon}}
      template block text
    {{/ui-icon}}
  `);

  assert.equal(this.$().text().trim(), '');
});

test('just <i> element normally', function(assert) {

  this.render(hbs`{{ui-icon}}`);

  assert.equal(this.$('i').length, 1);
  assert.equal(this.$('span').length, 0);

});

test('wrapped in a <span> when height is explicit', function(assert) {
  this.render(hbs`{{ui-icon height='2rem'}}`);
  assert.equal(this.$('i').length, 1);
  assert.equal(this.$('span').length, 1);
});

test('wrapped in a <span> when padding is set', function(assert) {
  this.render(hbs`{{ui-icon 'cog' padding='15px'}}`);
  assert.equal(this.$('i').length, 1);
  assert.equal(this.$('span').length, 1);
});
