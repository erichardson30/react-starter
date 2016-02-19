import axios from 'axios';
import { hostURL } from '../config';

export default {
    async getData() {
        let result = [];

        try {
            const response = await axios.get(hostURL + '/posts');
            if (response.status !== 200) {
                result = false;

            } else {
                result = response.data;
                return result;
            }
        } catch (err) {
            console.log(err);
            result = false;
        }
        return result;
    }
}
