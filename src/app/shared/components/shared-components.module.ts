import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { MenuBackButtonComponent } from "./menu-back-button/menu-back-button.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { CubeSlideComponent } from "./cube-slide/cube-slide.component";

@NgModule({
  declarations: [
    MenuBackButtonComponent,
    UserProfileComponent,
    CubeSlideComponent
  ],
  imports: [CommonModule, IonicModule],
  exports: [MenuBackButtonComponent, UserProfileComponent, CubeSlideComponent],
  entryComponents: [UserProfileComponent]
})
export class SharedComponentsModule {}
