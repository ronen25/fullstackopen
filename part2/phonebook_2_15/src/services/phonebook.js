const axios = require('axios');

const BASE_URL = 'http://localhost:3001/persons';

const getAllData = () => {
  return axios.get(BASE_URL).then((response) => response.data);
};

const addNewPerson = (person) => {
  return axios.post(BASE_URL, person).then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${BASE_URL}/${id}`).then((response) => response.data);
};

export { getAllData, addNewPerson, deletePerson };
