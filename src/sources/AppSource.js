import Api from '../services/Api';
import AppActions from '../actions/AppActions';

let AppSource = {
    fetchData() {
        return {
            async remote(state) {
                return Api.getData()
            },

            shouldFetch(state) {
                return (state.data.length == 0);
            },
            success: AppActions.getData
        }
    }
};

export default AppSource;
