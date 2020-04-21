import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    title(i) {
        return `Item ${i}`;
      },
    
      price() {
        let min = 10;
        let max = 200;
    
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
    
     quantity () {
        let min = 10;
        let max = 500;
    
        return Math.floor(Math.random() * (max - min + 1)) + min + " gm";
     },

     description () {
            return "Some description about the item";
     }
});
