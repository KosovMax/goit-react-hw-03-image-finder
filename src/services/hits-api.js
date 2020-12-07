import axios from 'axios';

const API_KEY = '19319242-70903095163a85f904f3acecb';

// axios.defaults.headers.common['Authorization'] = 'Bearer 19319242-70903095163a85f904f3acecb';

const fetchHits = ({ searchQuery = '',  page = 1, perPage = 12}) =>{

    return axios
        .get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
        .then(response => response.data.hits)

}

export default { fetchHits }