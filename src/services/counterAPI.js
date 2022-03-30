import axios from 'axios'

export default {
  fetchCount: () => axios({
    method: 'GET',
    url: 'http://localhost/myData.json',
    headers: {
      'Content-Type': 'application/json'
    },
    cancelToken: axios.CancelToken.source().token
  })
}
