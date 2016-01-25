import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('linear-scale-sandbox', 'Integration | Component | linear scale sandbox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{linear-scale-sandbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#linear-scale-sandbox}}
      template block text
    {{/linear-scale-sandbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
