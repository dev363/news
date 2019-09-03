import axios from 'axios';

class NewsAPI {
    constructor(title, author) {
        this.BaseUrl = "https://newsapi.org/v2/";
        this.ApiKey = "ad23f24f6762478995a4f62590458e25";
    }

    TopHeadlines = async()=> {
        const res = await axios.get(`${this.BaseUrl}top-headlines?country=in&apiKey=${this.ApiKey}&pageSize=50`);
        return res;
    }

    NewsCategoryWise = async(categoty, limit)=> {
        const res = await axios.get(`${this.BaseUrl}top-headlines?country=in&category=${categoty}&apiKey=${this.ApiKey}&pageSize=${limit}`);
        return res;
    }

    NewsQuery = async(query, limit)=> {
        const res = await axios.get(`${this.BaseUrl}top-headlines?country=in&q=${query}&apiKey=${this.ApiKey}&pageSize=${limit}`);
        return res;
    }
}
const NEWSAPI = new NewsAPI()
export {NEWSAPI};





// export function foo() {
//   return 'bar';
// }
// export const foo = ()=> {
//   return 'foo';
// }
