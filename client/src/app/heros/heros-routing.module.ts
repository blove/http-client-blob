import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { HeroComponent } from "./hero/hero.component";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "hero/:id",
    component: HeroComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HerosRoutingModule { }