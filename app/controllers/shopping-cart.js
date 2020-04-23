import Controller from '@ember/controller';

export default Controller.extend({
    init() {
        this._super(...arguments);
    },
    actions: {
        removeFromCart(cartItem) {
            let self = this;
            self.store.findRecord('cart', cartItem.id, { backgroundReload: false }).then(function (cartItem) {
                cartItem.destroyRecord(); //DELETE  /carts/1
            });
        }
    }
});

