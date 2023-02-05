import { Component, Input } from '@angular/core';
import { NewsFeed } from '../news-feed';
import { NewsfeedItem } from '../newsfeed-item';

@Component({
  selector: 'app-newsfeedlist',
  templateUrl: './newsfeedlist.component.html',
  styleUrls: ['./newsfeedlist.component.css']
})
export class NewsfeedlistComponent {

  @Input() newsfeed: NewsFeed | undefined;
  @Input() newsfeedItem: NewsfeedItem | undefined;

  constructor(){}

  ngOnInt(): void{

  }
}
