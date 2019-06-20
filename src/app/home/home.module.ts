import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { HomePage } from "./home.page";
import { SharedComponentsModule } from "../shared/components/shared-components.module";

const routes: Routes = [
  {
    path: "",
    component: HomePage
  },
  {
    path: "vendor",
    loadChildren:
      "./vendor-details/vendor-details.module#VendorDetailsPageModule"
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
