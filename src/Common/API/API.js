import axios from 'axios';

const url = 'https://la-backend-server.herokuapp.com/api';

const API = {
    fetchPosts: function () {
        return axios.get(`${url}/blog/`);
    },
    fetchById: function (id) {
        return axios.get(`${url}/blog/${id}`);
    },
    fetchWikiMenu: function () {
        return axios.get(`${url}/blog/byGenre/World%20Building`);
    },
    fetchTukrenWords: function () {
        return axios.get(`${url}/tukren`);
    }
}

export default API;
