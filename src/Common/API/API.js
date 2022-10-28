import axios from 'axios';

const url = 'https://la-backend-server.herokuapp.com/api';

const API = {
    fetchPosts: function () {
        return axios.get(`${url}/blog/`);
    },
    fetchById: function (id) {
        console.log(`${url}/blog/${id}`)
        return axios.get(`${url}/blog/${id}`);
    }
}

export default API;
