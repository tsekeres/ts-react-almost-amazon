import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getAuthors = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addAuthor = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/authors.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios
        .patch(`${dbURL}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors().then((authorsArray) => resolve(authorsArray));
        });
    }).catch((error) => reject(error));
});

export default addAuthor;
