import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }
  fetchLatestNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?language=en&q=latest&apiKey=d948c11e91b04de9bbcd5bb0065a395c');
  }

  searchForNews(keyword: string) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?q=${keyword}&language=en&apiKey=d948c11e91b04de9bbcd5bb0065a395c`);
  }
}
