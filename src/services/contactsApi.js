import axios from 'axios';

// axios.defaults.baseURL = 'https://phonebook--api.herokuapp.com';

axios.defaults.baseURL = 'http://localhost:3000';
export async function fetchContacts() {
  const { data } = await axios.get('/contacts');

  return data.data.contacts;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);

  return data.data.result;
}

export async function dltContact(_id) {
  await axios.delete(`/contacts/${_id}`);
  return _id;
}
