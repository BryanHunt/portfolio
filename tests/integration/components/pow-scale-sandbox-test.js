import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pow-scale-sandbox', 'Integration | Component | pow scale sandbox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{pow-scale-sandbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#pow-scale-sandbox}}
      template block text
    {{/pow-scale-sandbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
