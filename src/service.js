import axios from 'axios';

const API_URL = 'http://localhost:8081/rest';

class Service {

    get() {
        console.log("axios-get()");
        return axios.get(`${API_URL}/testget`);
    }
}
export default new Service();