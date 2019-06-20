import { Component, OnInit, Input } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  @Input() id: string;
  constructor(
    private modalController: ModalController,
    private navController: NavController
  ) {}

  ngOnInit() {}

  closeModal(): void {
    this.modalController.dismiss(this.id);
  }
}
