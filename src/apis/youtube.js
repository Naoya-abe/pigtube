import axios from 'axios';

const KEY = process.env.REACT_APP_YOUTUBE_APIKEY;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY,
  },
});
