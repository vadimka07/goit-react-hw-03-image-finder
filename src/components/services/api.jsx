import axios from "axios";


const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22770048-68f29ae7be79c027fc88359a9';


const instance = axios.create( {
    baseURL: BASE_URL,
    params: {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
    }
} );

export async function getImagesList( { queryString, page = 1, per_page = 12 } ) {
    const { data } = await instance.get( '', { params: { q: queryString, page, per_page } } );
    return data;
}