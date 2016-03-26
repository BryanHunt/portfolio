import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('scales/linear-scale', 'Integration | Component | scales/linear scale', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{scales/linear-scale}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#scales/linear-scale}}
      template block text
    {{/scales/linear-scale}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
