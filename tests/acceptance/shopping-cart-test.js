import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | shopping cart', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /shopping-cart', async function(assert) {
    await visit('/shopping-cart');

    assert.equal(currentURL(), '/shopping-cart');
  });

  test('should show no items message when no items are added to cart', async function (assert) {
    await visit('/shopping-cart');
    assert.ok(this.element.querySelector('.no-items').textContent.includes("No items were added to cart!"), 'should no items message when cart is empty');
  });

  test('should list all cart items.', async function(assert) {
    this.server.createList('cart', 5);
    await visit('/shopping-cart');
    assert.equal(this.element.querySelectorAll('.cart-item').length, 5, 'should display 5 cart items');
  });

  test('Should display cart total when items are present', async function(assert) {
    this.server.createList('cart', 5);
    await visit('/shopping-cart');
    assert.ok(this.element.querySelector('.cart-total').textContent.includes("Total"), 'should display total correctly');
  });

  test('should remove element from cart when delete icon is pressed ', async function(assert) {
    this.server.createList('cart', 5);
    await visit('/shopping-cart');
    assert.equal(this.element.querySelectorAll('.cart-item').length, 5, 'should display 5 cart items');
    await click('.delete-item-1');
    assert.equal(this.element.querySelectorAll('.cart-item').length, 4, 'should display 4 cart items after 1 is deleted');
  });
});
