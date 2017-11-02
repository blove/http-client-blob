import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// rxjs
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

// models
import { Hero } from "../../models/hero";

@Injectable()
export class HerosService {

  private readonly URL = "http://localhost:8080/api/heros"

  constructor(
    protected httpClient: HttpClient,
  ) {}

  public create(hero: Hero): Observable<Hero> {
    return this.httpClient
      .post<Hero>(this.URL, hero);
  }

  public delete(hero: Hero): Observable<Hero> {
    return this.httpClient
      .delete(`${this.URL}/${hero._id}`, {
        responseType: "text"
      })
      .map(result => hero);
  }

  public get(id: string): Observable<Hero> {
    return this.httpClient
      .get<Hero>(`${this.URL}/${id}`);
  }

  public getImage(hero: Hero): Observable<Blob> {
    return this.httpClient
      .get(`${this.URL}/image/${hero._id}`, {
        responseType: "blob"
      });
  }

  public list(): Observable<Array<Hero>> {
    return this.httpClient
      .get<Array<Hero>>(this.URL);
  }

  public update(hero: Hero): Observable<Hero> {
    return this.httpClient
      .put<Hero>(`${this.URL}/${hero._id}`, hero);
  }

}
