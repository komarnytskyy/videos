import axios from 'axios';

const KEY = 'AIzaSyCDn0y-3KdP9hKCo8Tnfc1ODjNTg890Txw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
})
