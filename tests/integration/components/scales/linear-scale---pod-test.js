import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('scales/linear-scale---pod', 'Integration | Component | scales/linear scale   pod', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{scales/linear-scale---pod}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#scales/linear-scale---pod}}
      template block text
    {{/scales/linear-scale---pod}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
