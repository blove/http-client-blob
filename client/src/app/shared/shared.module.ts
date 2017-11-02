import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";

// components
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { HerosListComponent } from './heros-list/heros-list.component';
import { HeroCreateDialogComponent } from './hero-create-dialog/hero-create-dialog.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  entryComponents: [
    HeroCreateDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  declarations: [
    HerosListComponent,
    ToolbarComponent,
    HeroCreateDialogComponent,
    LayoutComponent
  ],
  exports: [
    HerosListComponent,
    ToolbarComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
