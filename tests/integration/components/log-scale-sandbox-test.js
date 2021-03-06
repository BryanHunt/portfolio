import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('log-scale-sandbox', 'Integration | Component | log scale sandbox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{log-scale-sandbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#log-scale-sandbox}}
      template block text
    {{/log-scale-sandbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
