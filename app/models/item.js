import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    price: DS.attr(),
    description: DS.attr(),
    quantity: DS.attr(),
    favourite: DS.attr()
});
