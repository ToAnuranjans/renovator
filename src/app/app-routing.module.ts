import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/introduction", pathMatch: "full" },
  {
    path: "register",
    loadChildren: "./shared/user/register/register.module#RegisterPageModule"
  },
  {
    path: "login",
    loadChildren: "./shared/user/login/login.module#LoginPageModule"
  },

  { path: "about", loadChildren: "./about/about.module#AboutPageModule" },
  {
    path: "blogs",
    loadChildren: "./blogs/blogs.module#BlogsPageModule"
  },
  { path: "services", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  {
    path: "introduction",
    loadChildren: "./introduction/introduction.module#IntroductionPageModule"
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
