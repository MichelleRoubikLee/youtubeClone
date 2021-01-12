import axios from 'axios';
import apiKey from '../config/default';

export default axios.create({

  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part:'snippet',
    type: 'video',
    maxResults: 3,
    key: apiKey
  }

})