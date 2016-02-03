import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ordinal-scale-sandbox', 'Integration | Component | ordinal scale sandbox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ordinal-scale-sandbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#scales/ordinal-scale-sandbox}}
      template block text
    {{/scales/ordinal-scale-sandbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
