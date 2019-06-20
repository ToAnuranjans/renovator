import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  services: Array<{ name: string; id: string; icon_name: string }> = [];

  constructor() {}

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
}
