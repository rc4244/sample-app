import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addToCart(param) {
            let cart_item = {
                item_id: param.id,
                quantity: 1,
                price: param.price
            }

            // create a record in Ember Data (locally, would not survive page refresh)
            let newRecord = this.store.createRecord('cart', cart_item);
            // Save the record to the API endpoint specified in adapters/application.js
            newRecord.save();
        }
    }
});
