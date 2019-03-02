import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsApiService} from './news-api.service';
import Article = NewsModel.Article;

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.css']
})
export class NewsDashboardComponent implements OnInit {
  newsItems: Article[] = new Array(0);
  searchResults: Article[] = new Array(0);
  hasSearched = false;
  activeCategory = 'latest';
  constructor(private http: HttpClient, private newsApiService: NewsApiService) { }

  ngOnInit() {
    this.newsApiService.fetchLatestNews().subscribe((data: any) => {
      console.log(data);
      this.newsItems = data.articles;
    });
  }
  onSearch(event) {
    this.hasSearched = true;
    const keyword = event.target.value;
    if (event.target.value.length > 3) {
      this.newsApiService.searchForNews(keyword).subscribe((searchResults: any) => {
        if (searchResults.articles.length > 0) {
          this.searchResults = searchResults.articles;
          this.hasSearched = false;
        } else {
          this.searchResults = [];
        }
      });
    } else {
      this.searchResults = [];
    }
  }
  onCategorySelect(category: string) {
    this.activeCategory = category;
    this.newsApiService.searchForNews(category).subscribe((categoryResults: any) => {
      if (categoryResults.articles.length > 0) {
        this.newsItems = categoryResults.articles;
      }
    });
  }

}
