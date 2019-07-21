import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocationService {
  private API_KEY = "AIzaSyC_XpydEnbFad2-5H2W7QcYkxLIYApUsyo";

  constructor() {
    console.log({ document });
  }

  async renderMap(el: any, cords: any) {
    const googleMaps = await this.getGoogleMap(this.API_KEY);
    const map = new googleMaps.Map(el, {
      center: cords,
      zoom: 8
    });

    return Promise.resolve(map);
  }

  async addMarkerOnMap(el: any, cords: any) {
    const googleMaps = await this.getGoogleMap(this.API_KEY);
    const map = await this.renderMap(el, cords);
    const marker = new googleMaps.Marker({
      position: cords,
      map,
      title: "Hello World!"
    });
  }

  private getGoogleMap(apiKey: string): Promise<any> {
    const win = window as any;
    const googleModule = win.google;

    if (googleModule && googleModule.maps) {
      console.log("Google Maps API version: " + googleModule.maps.version);
      return Promise.resolve(googleModule.maps);
    }

    return new Promise((resolve, reject) => {
      const script = this.getAddedScriptTag(apiKey);

      script.onload = () => {
        const googleModule1 = win.google;
        if (googleModule1 && googleModule1.maps) {
          console.log("Google Maps API version: " + googleModule1.maps.version);
          resolve(googleModule1.maps);
        } else {
          reject("Google Map not loaded");
        }
      };
    });
  }

  private getAddedScriptTag(apiKey: string) {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly`;
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
    return script;
  }

  getLocation() {
    return 10;
  }
}
