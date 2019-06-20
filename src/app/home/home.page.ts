import { Component, OnInit, OnDestroy } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserProfileComponent } from "../shared/components/user-profile/user-profile.component";
import { Subscription } from "rxjs";
import { VehicalModel, VehicalService } from "../services/vehical.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit, OnDestroy {
  services: Array<VehicalModel> = [];
  vehicals: VehicalModel[] = [];

  subscription: Subscription;

  constructor(
    private modalController: ModalController,
    private vehicalService: VehicalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.vehicalService.getAll().subscribe(d => (this.services = d));
  }

  async openUserProfile() {
    const modal = await this.modalController.create({
      component: UserProfileComponent,
      componentProps: { id: "123" }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
  }

  onEntry(e: any): void {
    const name = e.detail.value;
    this.vehicalService.findByVehical(name).subscribe(x => {
      console.log({ name, x });
      this.vehicals.length = 0;
      this.vehicals = x;
    });
  }

  book(vehical: VehicalModel) {
    this.router.navigateByUrl(`/home/vendor/${vehical.id}`);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
