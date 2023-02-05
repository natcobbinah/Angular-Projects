import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsFeed } from './news-feed';
import { environment } from 'src/environments/environment.development';
import { NewsfeedItem } from './newsfeed-item';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  constructor(private http: HttpClient) { }

  //helper method for multiple-Selected-Tags
  private tagsFilter = (tags: []) => {
    return tags.join(","); //flats out selected tags to string from Array container and AND-ded by default
  }

  getItem(id?: number): Observable<NewsfeedItem> {
    return this.http.get<NewsfeedItem>(`${environment.baseUrl}${environment.itemsUrl}/${id}`);
  }

  getUser(username: string): Observable<NewsFeed> {
    return this.http.get<NewsFeed>(`${environment.baseUrl}${environment.usersUrl}/${username}`)
  }

  searchNews = (query?: string) => (tags?: []) => (numericFilters?: string) => (page?: number) => {

    let getNews = "";
    if (query && tags && numericFilters && page) {
      const queryTagsNumericFilterPageOptionsSelected = new HttpParams()
        .set('query', query)
        .set('tags', `${(this.tagsFilter(tags))}`)
        .set('numericFilters', numericFilters)
        .set('page', page);

      getNews = `${environment.baseUrl}${environment.searchUrl}`;
      return this.http.get<NewsFeed>(getNews, { params: queryTagsNumericFilterPageOptionsSelected });
    }

    if (query && tags && page) {
      const queryTagsPageOptionsSelected = new HttpParams()
        .set('query', query)
        .set('tags', `${(this.tagsFilter(tags))}`)
        .set('page', page);

      getNews = `${environment.baseUrl}${environment.searchUrl}`;
      return this.http.get<NewsFeed>(getNews, { params: queryTagsPageOptionsSelected });
    }

    if (query && page && numericFilters) {
      const queryPageNumericFilterOptionsSelected = new HttpParams()
        .set('query', query)
        .set('numericFilters', numericFilters)
        .set('page', page);

      getNews = `${environment.baseUrl}${environment.searchUrl}`;
      return this.http.get<NewsFeed>(getNews, { params: queryPageNumericFilterOptionsSelected });
    }

    if (query && page) {
      const queryPageOptionsSelected = new HttpParams()
        .set('query', query)
        .set('page', page);

      getNews = `${environment.baseUrl}${environment.searchUrl}`;
      return this.http.get<NewsFeed>(getNews, { params: queryPageOptionsSelected });
    }

    getNews = `${environment.baseUrl}${environment.searchUrl}?query=${query}`;
    return this.http.get<NewsFeed>(getNews);
  }

  searchNewsByDate = (query?: string) => (tags?: []) => (numericFilters?: string) => (page?: number) => {
    let getNews = "";
    if (query && tags && numericFilters && page) {
      const queryTagsNumericFilterPageOptionsSelected = new HttpParams()
        .set('query', query)
        .set('tags', `${(this.tagsFilter(tags))}`)
        .set('numericFilters', numericFilters)
        .set('page', page);

      getNews = `${environment.baseUrl}${environment.searchByDateUrl}`;
      return this.http.get<NewsFeed>(getNews, { params: queryTagsNumericFilterPageOptionsSelected });
    }

    if (query && tags && page) {
      const queryTagsPageOptionsSelected = new HttpParams()
        .set('query', query)
        .set('tags', `${(this.tagsFilter(tags))}`)
        .set('page', page);

      getNews = `${environment.baseUrl}${environment.searchByDateUrl}`;
      return this.http.get<NewsFeed>(getNews, { params: queryTagsPageOptionsSelected });
    }

    if (query && page && numericFilters) {
      const queryPageNumericFilterOptionsSelected = new HttpParams()
        .set('query', query)
        .set('numericFilters', numericFilters)
        .set('page', page);

      getNews = `${environment.baseUrl}${environment.searchByDateUrl}`;
      return this.http.get<NewsFeed>(getNews, { params: queryPageNumericFilterOptionsSelected });
    }

    if (query && page) {
      const queryPageOptionsSelected = new HttpParams()
        .set('query', query)
        .set('page', page);

      getNews = `${environment.baseUrl}${environment.searchByDateUrl}`;
      return this.http.get<NewsFeed>(getNews, { params: queryPageOptionsSelected });
    }

    getNews = `${environment.baseUrl}${environment.searchUrl}?query=${query}`;
    return this.http.get<NewsFeed>(getNews);
  }
}
