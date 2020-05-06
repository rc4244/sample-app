import DS from 'ember-data';

export default DS.Model.extend({
    item_id: DS.attr('number'),
    quantity: DS.attr('number'),
    price: DS.attr('number'),
    title: DS.attr('string')
});
