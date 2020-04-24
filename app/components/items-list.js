import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.itemsToBeDisplayed = this.items;
        this.showFav = false;
    },
    actions: {
        onInputChanged() {
            if (this.value) {
                let filteredItems = this.items.filter((item) => {
                    return item.title.indexOf(this.value) !== -1 && item.favourite === this.showFav;
                });
                this.set('itemsToBeDisplayed', filteredItems);
            } else {
                let filteredItems = this.items.filter((item) => {
                    return item.favourite === this.showFav;
                });
                this.set('itemsToBeDisplayed', filteredItems);
            }
        },
        onFavouriteChanged(value) {
            this.set('showFav', value);
            this.send('onInputChanged');
        }
    }
});
