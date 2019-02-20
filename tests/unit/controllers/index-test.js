import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:index');
    assert.ok(controller);
  });

  test('should update showModal toggleModal action', function(assert) {
    assert.expect(2);

    // get the controller instance
    let controller = this.owner.lookup('controller:index');

    // check the properties before the action is triggered
    assert.equal(controller.get('showModal'), false, 'showModal initialized');

    // trigger the action on the controller by using the `send` method,
    // passing in any params that our action may be expecting
    controller.send('toggleModal', 'true');

    // finally we assert that our values have been updated
    // by triggering our action.
    assert.equal(controller.get('showModal'), 'true', 'showModal updated');
  });

  test('should add or remove product from cart ', function(assert) {
    assert.expect(6);

    // get the controller instance
    let controller = this.owner.lookup('controller:index');

    // check the properties before the action is triggered
    

    assert.notEqual(controller.get('availableProducts').length, 0, 'Products are available');
    assert.equal(controller.get('addedProducts').length, 0, 'no products added in cart');

    // trigger the action on the controller by using the `send` method,
    // passing in any params that our action may be expecting
    let intialLength= controller.get('availableProducts').length;
    controller.send('addOrRemove', controller.get('availableProducts')[2], 'add');

    // finally we assert that our values have been updated
    // by triggering our action.
    assert.equal(controller.get('availableProducts').length, intialLength-1, 'Products removed from list');
    assert.equal(controller.get('addedProducts').length, 1, 'products added in cart');

    controller.send('addOrRemove', controller.get('addedProducts')[0], 'remove');

    // finally we assert that our values have been updated
    // by triggering our action.
    assert.equal(controller.get('availableProducts').length, intialLength, 'Products added back to list');
    assert.equal(controller.get('addedProducts').length, 0, 'products removed from cart');
  });


});
