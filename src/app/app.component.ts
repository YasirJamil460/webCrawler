import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NEWS } from './models/news.type';
import { FetchService } from './services/fetch.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  news : NEWS[] = []
  hasFetched = false;
  
  private fetchService = inject(FetchService)


  fetchNews() {
    this.fetchService.fetchNews().subscribe({
      next: (response: any) => {
        console.log(response);
        
        this.news = response.articles.map((article: any) => ({
          title: article.title,
          description: article.description,
          expanded: false, // Add expanded property dynamically
        }));
        this.hasFetched = true;
      },
      error: (error) => {
        console.error('Error fetching news:', error);
        this.hasFetched = true;
      },
    });
  }

  toggleExpand(item: NEWS) {
    item.expanded = !item.expanded; // Toggle expanded state
  }
}














          // .subscribe({
          //   next: (response) => {
          //     this.news = response.articles.map(article => ({
          //       title: article.title,
          //       description: article.description,
          //     }));
          //     this.hasFetched = true;
          //   },
          //   error: (error) => {
          //     console.error('Error fetching news:', error);
          //     this.hasFetched = true;
          //   }
          // });