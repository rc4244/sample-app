import Controller from '@ember/controller';

export default Controller.extend({
    init() {
        this._super(...arguments);
    },
    activate() {
        this.set('cartTotal', updateCartTotal(this.get('model')));
    },
    actions: {
        removeFromCart(cartItem) {
            let self = this;
            self.store.findRecord('cart', cartItem.id, { backgroundReload: false }).then(function (cartItem) {
                cartItem.destroyRecord().then(() => {
                    self.set('cartTotal', updateCartTotal(self.get('model')));
                }) // => DELETE to /carts/1
            });
        }
    }
});

function updateCartTotal (model) {
    let total = 0;
    model.forEach(item => {
        total = total + (item.price || 0);
    });
    return total;
}
