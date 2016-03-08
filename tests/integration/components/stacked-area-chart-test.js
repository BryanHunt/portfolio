import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stacked-area-chart', 'Integration | Component | stacked area chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stacked-area-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#stacked-area-chart}}
      template block text
    {{/stacked-area-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
