const axios = require('axios');

const api = {
    async getUser(userResponses) {
        try { let response = await axios

            // sample URL: https://api.github.com/users/AF-cmdZ
            .get(`https://api.github.com/users/${userResponses.username}`);
            return response.data;
    } catch (err) {
        console.log(err);
    }
}
};

module.exports = api;