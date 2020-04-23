import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        handleFilterEntry() {
            if (this.value !== '') {
                this.set('model', this.store.query('item', { title: this.value }));
            } else {
                this.set('model', this.store.findAll('item'));
            }
        }
    }
});
