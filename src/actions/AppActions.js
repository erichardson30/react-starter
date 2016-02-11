import alt from '../core/alt';
import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com';
class AppActions {
    constructor() {
        // put auto generate actions here
    }

    getData() {
        try {
            let response = axios.get(url + '/posts').then((response) => {
                    console.log(response.data);
                    this.getDataSuccess(response.data);
                });
            } catch (err) {
                console.log(err)
            }
    }
    getDataSuccess(data) {
        return data;
    }
}
export default (alt.createActions(AppActions));
