import http from './common_http';
import IFetchData from '../types/IFetchData';
import ICategoryData from '../types/ICategoryData';
const API_KEY = process.env.REACT_APP_API_KEY
class DataSercice {
    getTrendings() {
        return http.get<Array<IFetchData>>(`/trending?api_key=${API_KEY}`);
    }
    getCategories(){
        return http.get<Array<ICategoryData>>(`/categories?api_key=${API_KEY}`)
    }
}

export default new DataSercice();
