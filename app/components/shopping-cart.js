import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.set('errors', []);
    },
    didRender() {
        this._super(...arguments);
        this.set('cartTot', updateTotal(this.get('items')));
    },
    actions: {
        removeItem (item) {
            this.get('removeItem')(item);
            updateTotal(this.get('items'));
        }
    }
});

function updateTotal (items) {
    let total = 0;
    if (items) {
        items.forEach(item => {
            total = total + (item.price || 0);
        });
    }
    return total;
}
