import DS from 'ember-data';

export default DS.Model.extend({
    item_id: DS.attr(),
    quantity: DS.attr(),
    price: DS.attr(),
    title: DS.attr()
});
