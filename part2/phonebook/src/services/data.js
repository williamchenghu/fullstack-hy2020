import axios from 'axios';

const baseURL = 'http://localhost:3001/persons';
const source = axios.CancelToken.source();

const getAll = () => {
  const request = axios.get(baseURL, { cancelToken: source.token });
  return request
    .then((response) => response.data)
    .catch((error) => {
      axios.isCancel(error)
        ? console.log('Fetching phonebook data is cancelled')
        : alert(error);
    });
};

const create = (newObject) => {
  const request = axios.post(baseURL, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject);
  return request.then((response) => response.data);
};

const cancelToken = () => source.cancel();

export default { getAll, create, update, cancelToken };
