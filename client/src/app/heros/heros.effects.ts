import { Injectable } from "@angular/core";
import { MatDialog, MatSnackBar } from "@angular/material";
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { empty } from "rxjs/observable/empty";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import "rxjs/add/operator/switchMap";
import { HerosService } from "../core/services/heros.service";
import {
  CREATE_HERO,
  CREATE_HERO_ERROR,
  CREATE_HERO_DIALOG_OPEN,
  LOAD_HERO,
  LOAD_HERO_ERROR,
  LOAD_HERO_IMAGE,
  LOAD_HEROS,
  LOAD_HEROS_ERROR,
  REMOVE_HERO,
  REMOVE_HERO_ERROR,
  CreateHeroErrorAction,
  CreateHeroSuccessAction,
  LoadHeroErrorAction,
  LoadHeroSuccessAction,
  LoadHeroImageErrorAction,
  LoadHeroImageSuccessAction,
  LoadHerosErrorAction,
  LoadHerosSuccessAction,
  RemoveHeroAction,
  RemoveHeroErrorAction,
  RemoveHeroSuccessAction
} from "./heros.actions";
import { HeroCreateDialogComponent } from "../shared/hero-create-dialog/hero-create-dialog.component";

@Injectable()
export class HeroEffects {

  @Effect()
  public createHero: Observable<Action> = this.actions
    .ofType(CREATE_HERO)
    .map(toPayload)
    .switchMap(payload => {
      return this.herosService.create(payload.hero)
      .map(hero => new CreateHeroSuccessAction({ hero: hero }))
      .catch(error => Observable.of(new CreateHeroErrorAction({ error: error })));
    });

  @Effect()
  public createHeroError: Observable<Action> = this.actions
    .ofType(CREATE_HERO_ERROR)
    .map(toPayload)
    .switchMap(payload => {
      this.matSnackbar.open("Oops. Something went wrong.", null, {
        duration: 1000
      });
      return empty();
    });

  @Effect()
  public createHeroDialogOpen: Observable<Action> = this.actions
    .ofType(CREATE_HERO_DIALOG_OPEN)
    .map(toPayload)
    .switchMap(payload => {
      this.matDialog.open(HeroCreateDialogComponent, {
       data: payload
      });
      return empty();
    });

  @Effect()
  public loadHero: Observable<Action> = this.actions
    .ofType(LOAD_HERO)
    .map(toPayload)
    .switchMap(payload => {
      return this.herosService.get(payload.id)
        .map(hero => new LoadHeroSuccessAction({ hero: hero }))
        .catch(error => Observable.of(new LoadHeroErrorAction({ error: error })));
    });

  @Effect()
  public loadHeroImage: Observable<Action> = this.actions
    .ofType(LOAD_HERO_IMAGE)
    .map(toPayload)
    .switchMap(payload => {
      return this.herosService.getImage(payload.hero)
        .map(image => new LoadHeroImageSuccessAction({ image: image }))
        .catch(error => Observable.of(new LoadHeroImageErrorAction({ error: error })));
    });

  @Effect()
  public loadHeros: Observable<Action> = this.actions
    .ofType(LOAD_HEROS)
    .map(toPayload)
    .switchMap(payload => {
      return this.herosService.list()
        .map(heros => new LoadHerosSuccessAction({ heros: heros }))
        .catch(error => Observable.of(new LoadHerosErrorAction({ error: error })));
    });

  @Effect()
  public loadHerosError: Observable<Action> = this.actions
    .ofType(LOAD_HEROS_ERROR)
    .map(toPayload)
    .switchMap(payload => {
      this.matSnackbar.open("Oops. Something went wrong.", null, {
        duration: 1000
      });
      return empty();
    });

  @Effect()
  public removeHero: Observable<Action> = this.actions
    .ofType(REMOVE_HERO)
    .map(toPayload)
    .switchMap(payload => {
      return this.herosService.delete(payload.hero)
        .map(hero => new RemoveHeroSuccessAction({ hero: hero }))
        .catch(error => Observable.of(new RemoveHeroErrorAction({ error: error })));
    });

  @Effect()
  public removeHeroError: Observable<Action> = this.actions
    .ofType(REMOVE_HERO_ERROR)
    .map(toPayload)
    .switchMap(payload => {
      this.matSnackbar.open("Oops. Something went wrong.", null, {
        duration: 1000
      });
      return empty();
    });

  constructor(
    private actions: Actions,
    private herosService: HerosService,
    private matDialog: MatDialog,
    private matSnackbar: MatSnackBar
  ) { }

}
