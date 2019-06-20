import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { MenuBackButtonComponent } from "./menu-back-button/menu-back-button.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

@NgModule({
  declarations: [MenuBackButtonComponent, UserProfileComponent],
  imports: [CommonModule, IonicModule],
  exports: [MenuBackButtonComponent, UserProfileComponent],
  entryComponents: [UserProfileComponent]
})
export class SharedComponentsModule {}
