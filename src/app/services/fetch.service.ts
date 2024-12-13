import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { NEWS } from '../models/news.type';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private http = inject(HttpClient)
  
  private url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1aded13dd75a4adbbd9cbc5ce3e26960';

  fetchNews() {
    return this.http.get<NEWS[]>(this.url)
  }

}
