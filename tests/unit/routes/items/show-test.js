import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import {
  click,
  currentURL,
  visit
} from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Unit | Route | items/show', function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:items/show');
    assert.ok(route);
  });

  test('should show details for a specific item', async function(assert) {
    this.server.createList('item', 10);
    await visit('/');
    await click(".item1");
    assert.equal(currentURL(), '/items/1', "should navigate to show route");
    assert.ok(this.element.querySelector('.item-title').textContent.includes("Item"), 'should list item title');
    assert.ok(this.element.querySelector('.item-description'), 'should list a description of the item');
  });

  test('should set the item as favourite on clicking the fav button', async function(assert) {
    this.server.createList('item', 10);
    await visit('/items/1');
    assert.notOk(this.element.querySelector('.fav-btn').classList.contains("favourite-item"), 'should have favourite-item class');
    await click(".fav-btn");
    assert.ok(this.element.querySelector('.fav-btn').classList.contains("favourite-item"), 'should have favourite-item class');
  });


});
