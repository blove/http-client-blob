import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatSnackBarModule } from "@angular/material";
import { HerosRoutingModule } from "./heros-routing.module";
import { SharedModule } from "../shared/shared.module";
import { IndexComponent } from './index/index.component';
import { HeroComponent } from "./hero/hero.component";

@NgModule({
  imports: [
    CommonModule,
    HerosRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    SharedModule
  ],
  declarations: [
    IndexComponent,
    HeroComponent
  ]
})
export class HerosModule { }
