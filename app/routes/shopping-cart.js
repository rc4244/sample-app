import Route from '@ember/routing/route';
import { tryInvoke } from '@ember/utils';

export default Route.extend({
    model() {
        return this.store.findAll('cart');
    },
    activate() {
        tryInvoke(this.get('controller'), 'activate');
    }
});
