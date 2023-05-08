import axios from 'axios';

axios.defaults.baseURL = 'https://64594dab8badff578e0a558e.mockapi.io/';

export const fetchUsers = async () => {
  const { data } = await axios.get('users');
  return data;
};
