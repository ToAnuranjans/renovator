import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "services", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
