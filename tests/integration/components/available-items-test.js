import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | available-items', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('products', []);
    await render(hbs`{{available-items products= products}}`);

    assert.equal(this.element.textContent.trim(), 'Featured Products');

    // Template block usage:
    this.set('products', []);
    await render(hbs`
      {{#available-items products= products}}
      {{/available-items}}
    `);

    assert.equal(this.element.textContent.trim(), 'Featured Products');
  });
});
