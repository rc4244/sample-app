import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return `Item ${Math.random().toString(36).substring(7)}`;
  },

  price() {
    let min = 10;
    let max = 200;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  quantity() {
    const quantities = ['1 kg', '500 gm', '2 kg', '5 kg', '200 gm', '100 gm'];
    return quantities[Math.floor(Math.random() * quantities.length)];
  },

  description() {
    return "Some description about the item";
  },

  favourite() {
    return false;
  }
});
