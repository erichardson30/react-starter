import alt from '../core/alt';
import AppActions from '../actions/AppActions';

class AppStore {
    constructor() {
        this.bindActions(AppActions);
        this.loading = false;
        this.data = [];
        this.error = null
    }

    onGetDataSuccess(data) {
        this.data = data;
    }
}

export default alt.createStore(AppStore, 'AppStore');
