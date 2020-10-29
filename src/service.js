import axios from 'axios';

const API_URL = 'http://localhost:8081/rest';

class Service {
    
    getNextStep() {
        console.log("axios -> /nextStep");
        return axios.get(`${API_URL}/nextStep`);
    }

    getDefaultGrid() {
        console.log("axios -> /getDefaultGrid");
        return axios.get(`${API_URL}/getDefaultGrid`);
    }

    startGame() {
        console.log("axios -> /startGame");
        return axios.get(`${API_URL}/startGame`);
    }

    isGameRunning() {
        console.log("axios -> /isGameRunning");
        return axios.get(`${API_URL}/isGameRunning`);
    }

    setRules(rules) {
        console.log("axios -> /setRules"); 
        return axios.put(`${API_URL}/setRules`, rules);
    }

    addRule(rule) {
        console.log("axios -> /addRule " + rule); 
        return axios.put(`${API_URL}/addRule/${rule}`);
    }

    deleteRule(rule) {
        console.log("axios -> /deleteRule " + rule); 
        return axios.delete(`${API_URL}/deleteRule/${rule}`);
    }

    doesRuleExist(rule) {
        console.log("axios -> /doesRuleExist");
        return axios.get(`${API_URL}/doesRuleExist/${rule}`);
    }

    getRules() {
        console.log("axios -> /getRules");
        return axios.get(`${API_URL}/getRules`);
    }

    setPattern(pattern) {
        console.log("axios -> /setPattern " + pattern); 
        return axios.put(`${API_URL}/setPattern/${pattern}`);
    }

    getPattern() {
        console.log("axios -> /getPattern");
        return axios.get(`${API_URL}/getPattern`);
    }
}

export default new Service();