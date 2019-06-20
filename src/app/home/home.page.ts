import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserProfileComponent } from "../shared/components/user-profile/user-profile.component";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  services: Array<{ name: string; id: string; icon_name: string }> = [];

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    let N = 10;

    const x = Array.apply(null, { length: N }).map(Number.call, Number);

    this.services.push({ name: "Hodna", id: "1", icon_name: "home" });
    this.services.push({ name: "Hodna", id: "1", icon_name: "home" });
    this.services.push({ name: "Hodna", id: "1", icon_name: "home" });
    this.services.push({ name: "Hodna", id: "1", icon_name: "home" });
    this.services.push({ name: "Hodna", id: "1", icon_name: "home" });
    this.services.push({ name: "Hodna", id: "1", icon_name: "home" });
    this.services.push({ name: "Hodna", id: "1", icon_name: "home" });

    this.services.push({ name: "Hodna", id: "1", icon_name: "home" });
    this.services.push({ name: "Hodna", id: "1", icon_name: "home" });
    this.services.push({ name: "Hodna", id: "1", icon_name: "home" });
    this.services.push({ name: "Hodna", id: "1", icon_name: "home" });
    this.services.push({ name: "Hodna", id: "1", icon_name: "home" });
    this.services.push({ name: "Hodna", id: "1", icon_name: "home" });
    this.services.push({ name: "Hodna", id: "1", icon_name: "home" });
  }

  async openUserProfile() {
    console.log("clicked");
    const modal = await this.modalController.create({
      component: UserProfileComponent,
      componentProps: { id: "123" }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();

    console.log({ data });
  }
}
