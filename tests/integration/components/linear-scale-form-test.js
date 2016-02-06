import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('linear-scale-form', 'Integration | Component | linear scale form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{linear-scale-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#linear-scale-form}}
      template block text
    {{/linear-scale-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
