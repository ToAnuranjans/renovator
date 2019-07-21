import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { IntroductionPage } from "./introduction.page";
import { SharedComponentsModule } from "../shared/components/shared-components.module";

const routes: Routes = [
  {
    path: "",
    component: IntroductionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IntroductionPage]
})
export class IntroductionPageModule {}
