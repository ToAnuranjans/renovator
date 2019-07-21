import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-introduction",
  templateUrl: "./introduction.page.html",
  styleUrls: ["./introduction.page.scss"],
  encapsulation: ViewEncapsulation.None
})
export class IntroductionPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  skipIntroduction() {
    this.router.navigateByUrl("/home");
  }
}
