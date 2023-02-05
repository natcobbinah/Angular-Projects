import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../news-feed.service';
import { NewsFeed } from '../news-feed';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsfeedItem } from '../newsfeed-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  newsfeed: NewsFeed | undefined;
  newsfeedItem: NewsfeedItem | undefined;
  newsSearchForm!: FormGroup ;
  id?: number;
  searchQuery?:string;

  constructor(private newsfeedService: NewsFeedService,
    private builder: FormBuilder) {
  }

  ngOnInit(): void {
    this.newsSearchForm = this.builder.group({
      searchTerm: [''],
      tags: [],
      numericFilters: [],
      page: []
    })

    //default table populated
    this.newsfeedService.searchNews('hello')()()().subscribe(news => {
      this.newsfeed = news;
    })
  }

  fetchNews(){
    if(Number(this.newsSearchForm?.controls['searchTerm'].value)){
      this.id = this.newsSearchForm?.controls['searchTerm'].value;
      this.newsfeedService.getItem(this.id).subscribe(news => {
        this.newsfeedItem = news
        console.log(this.newsfeed)
      })
    }else if(this.newsSearchForm?.controls['searchTerm'].value){
      this.searchQuery = this.newsSearchForm?.controls['searchTerm'].value;
      this.newsfeedService.searchNews(this.searchQuery)()()().subscribe(news => {
        this.newsfeed = news;
        console.log(news)
      })
    }else{
      console.log("Search term does not fall into any category")
    }
  }


  getUser(username: string) {
    //return this.newsfeedService.getUser(username).subscribe(userInfo => this.newsfeed = userInfo);
  }

}
