import axios from 'axios';
const KEY = 'AIzaSyC_eenqdJKBuG-wx4nWt-XJm-ey_lUgP9g';

export default axios.create({

  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part:'snippet',
    maxResults: 10,
    key: KEY
  }

})