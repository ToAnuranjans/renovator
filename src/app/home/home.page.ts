import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserProfileComponent } from "../shared/components/user-profile/user-profile.component";
import { Subscription } from "rxjs";
import { VehicalModel, VehicalService } from "../services/vehical.service";
import { Router } from "@angular/router";
import { LocationService } from "../services/location.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("map") map: ElementRef;

  services: Array<VehicalModel> = [];
  vehicals: VehicalModel[] = [];

  subscription: Subscription;

  constructor(
    private modalController: ModalController,
    private vehicalService: VehicalService,
    private router: Router,
    private ls: LocationService
  ) {}

  ngOnInit() {
    this.vehicalService.getAll().subscribe(d => (this.services = d));
  }

  async ngAfterViewInit() {
    const map = await this.ls.renderMap(this.map.nativeElement, {
      lat: -34.397,
      lng: 150.644
    });

    const map2 = await this.ls.addMarkerOnMap(this.map.nativeElement, {
      lat: -34.397,
      lng: 150.644
    });
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
