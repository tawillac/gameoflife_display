import axios from 'axios';

const API_URL = 'http://localhost:8081/rest';

class Service {

    getNextStep() {
        console.log("axios -> /nextStep");
        return axios.get(`${API_URL}/nextStep`);
    }

    startGame() {
        console.log("axios -> /startGame");
        return axios.get(`${API_URL}/startGame`);
    }

    isGameRunning() {
        console.log("axios -> /isGameRunning");
        return axios.get(`${API_URL}/isGameRunning`);
    }
}
export default new Service();