import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-vendor-details",
  templateUrl: "./vendor-details.page.html",
  styleUrls: ["./vendor-details.page.scss"]
})
export class VendorDetailsPage implements OnInit {
  subscription: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        const id = +params.get("id");
        if (id === 0) {
          this.navController.navigateBack("/home");
          return;
        }
      }
    );
  }
}
