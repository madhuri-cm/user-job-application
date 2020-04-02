import axios from 'axios';

export default axios.create({
  baseURL: `dct-application-form.herokuapp.com`
});