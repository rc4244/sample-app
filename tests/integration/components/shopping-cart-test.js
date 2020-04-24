import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | shopping-cart', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    let item1 = EmberObject.create({
      title: 'test-title-1',
      item_id: 1,
      price: 10,
      quantity: 1
    });
    let item2 = EmberObject.create({
      title: 'test-title-2',
      item_id: 2,
      price: 10,
      quantity: 1
    });
    this.items = [item1, item2];
  });

  test('should display cart items', async function(assert) {
    await render(hbs`{{shopping-cart items=items}}`);
    assert.equal(this.element.querySelectorAll('.cart-item').length, 2, 'should display cart items');
  });

  test('Should display cart total when items are present', async function(assert) {
    await render(hbs`{{shopping-cart items=items}}`);
    assert.ok(this.element.querySelector('.cart-total').textContent.includes("20"), 'should display total correctly');
  });
});
