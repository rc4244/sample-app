import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import {
  click,
  currentURL,
  visit
} from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Unit | Route | index', function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index');
    assert.ok(route);
  });

  test('should show items as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/items', 'should redirect automatically');
  });

  test('should list all available items.', async function(assert) {
    this.server.createList('item', 10);
    await visit('/');
    assert.equal(this.element.querySelectorAll('.item').length, 10, 'should display 10 items');
  });

  test('should show details for a specific rental', async function(assert) {
    this.server.createList('item', 10);
    await visit('/');
    await click(".item1");
    assert.equal(currentURL(), '/items/1', "should navigate to show route");
    assert.ok(this.element.querySelector('.item-title').textContent.includes("Item"), 'should list item title');
    assert.ok(this.element.querySelector('.item-description'), 'should list a description of the item');
  });
});
