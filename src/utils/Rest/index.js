import axios from 'axios'

export default {
  post: function (url) {
    axios.post(url)
  },
  get: function (url) {
    axios.get(url)
  }
}
