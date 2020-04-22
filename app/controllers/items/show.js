import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addToCart(param) {
            let cart_item = {
                item_id: param.id,
                quantity: 1,
                price: param.price
            }
            let store = this.store;

            store.query('cart', {
                item_id: param.id
            }).then(function (item) {
                if (item.get('length') > 0) {
                    //item already present update quantity and price
                    let cartItem = item.findBy('item_id', cart_item.item_id);
                    if (cartItem) {
                        cartItem.set('quantity', cartItem.quantity + 1);
                        cartItem.set('price', cartItem.price + cart_item.price);
                    } else {
                        let newRecord = store.createRecord('cart', cart_item);
                    // Save the record to the API endpoint specified in adapters/application.js
                    newRecord.save();
                    }
                } else {
                    //add item to shopping cart
                    // create a record in Ember Data (locally, would not survive page refresh)
                    let newRecord = store.createRecord('cart', cart_item);
                    // Save the record to the API endpoint specified in adapters/application.js
                    newRecord.save();
                }

            });
        }
    }
});
