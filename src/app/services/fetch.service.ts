import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { NEWS } from '../models/news.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private http = inject(HttpClient)
  
  private url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1aded13dd75a4adbbd9cbc5ce3e26960';

  fetchNews(): Observable<NEWS[]> {
    if (!this.url) {
      throw new Error('URL is not defined');
    }
    return this.http.get<NEWS[]>(this.url);
  }

}
