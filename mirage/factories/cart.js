import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    title() {
        return `Item ${Math.random().toString(36).substring(7)}`;
    },

    price() {
       return 100;
    },

    quantity() {
        const quantities = [1, 2, 3, 4];
        return quantities[Math.floor(Math.random() * quantities.length)];
    },

    item_id(i) {
        return i;
    }
});
