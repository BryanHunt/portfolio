import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('xyplot-sandbox', 'Integration | Component | xyplot sandbox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{xyplot-sandbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#xyplot-sandbox}}
      template block text
    {{/xyplot-sandbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
