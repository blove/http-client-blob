import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { State, getHero, getImage } from "../../app.reducers";
import { Hero } from "../../models/hero";
import { LoadHeroAction, LoadHeroImageAction } from "../heros.actions";

import "rxjs/add/operator/do";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/share";
import "rxjs/add/operator/takeWhile";

@Component({
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnDestroy, OnInit {

  public hero: Observable<Hero>;

  @ViewChild("heroImage") image: ElementRef;

  private alive = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<State>
  ) { }

  ngOnDestroy() {
    this.alive = false;
  }

  ngOnInit() {
    this.hero = this.activatedRoute.paramMap
    .takeWhile(() => this.alive)
    .do(params => {
      this.store.dispatch(new LoadHeroAction({ id: params.get("id") }))
    })
    .switchMap(() => this.store.select(getHero))
    .share();

    const image = this.hero
    .takeWhile(() => this.alive)
    .filter(hero => !!hero)
    .do(hero => this.store.dispatch(new LoadHeroImageAction({ hero: hero })))
    .switchMap(() => this.store.select(getImage))

    image
    .takeWhile(() => this.alive)
    .filter(image => !!image)
    .subscribe(image => {
      this.image.nativeElement.src = URL.createObjectURL(image)
    })
  }

}
