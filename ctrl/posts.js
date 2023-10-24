const axios = require('axios');

const arr = [
    {id: 1, title: 'title 1', text: "text 1"},
    {id: 2, title: 'title 2', text: "text 2"},
    {id: 3, title: 'title 3', text: "text 3"},
    {id: 4, title: 'title 4', text: "text 4"},
]

const axiosData = async (id) => {
    const url = `https://swapi.dev/api/people/${id}/`;
    const res = await axios.get(url);
    if (res.status === false) {
        return false
    }
    else {
        return res.data;
    }
}

module.exports = {
    axiosData
}
