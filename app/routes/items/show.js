import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return Promise.all([
            this.store.findRecord('item', params.id),
            this.store.findAll('cart')
        ]).then(response => {
            return { item: response[0], cart: response[1] };
        });
    }
});
