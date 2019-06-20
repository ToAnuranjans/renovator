import { Injectable } from "@angular/core";
import { Observable, from, of } from "rxjs";
import { filter, map, flatMap, tap } from "rxjs/operators";

export class VehicalModel {
  constructor(public id: string, public name: string, public url: string) {}
}

@Injectable({
  providedIn: "root"
})
export class VehicalService {
  vehicals: Array<VehicalModel>;
  constructor() {
    this.vehicals = [
      new VehicalModel(
        "101",
        "Honda",
        "../../assets/images/vehicals/volkswagen.jpg"
      ),
      new VehicalModel(
        "102",
        "Hundai",
        "../../assets/images/vehicals/hundai.jpg"
      ),
      new VehicalModel(
        "103",
        "Maruti",
        "../../assets/images/vehicals/polo.jpg"
      ),
      new VehicalModel("103", "Ford", "../../assets/images/vehicals/ford.jpg"),
      new VehicalModel(
        "101",
        "Honda",
        "../../assets/images/vehicals/volkswagen.jpg"
      ),
      new VehicalModel(
        "102",
        "Hundai",
        "../../assets/images/vehicals/hundai.jpg"
      ),
      new VehicalModel(
        "103",
        "Maruti",
        "../../assets/images/vehicals/polo.jpg"
      ),
      new VehicalModel("103", "Ford", "../../assets/images/vehicals/ford.jpg"),
      new VehicalModel(
        "101",
        "Honda",
        "../../assets/images/vehicals/volkswagen.jpg"
      ),
      new VehicalModel(
        "102",
        "Hundai",
        "../../assets/images/vehicals/hundai.jpg"
      ),
      new VehicalModel(
        "103",
        "Maruti",
        "../../assets/images/vehicals/polo.jpg"
      ),
      new VehicalModel("103", "Ford", "../../assets/images/vehicals/ford.jpg")
    ];
  }

  getAll(): Observable<VehicalModel[]> {
    return of(this.vehicals);
  }

  findByVehical(name: string): Observable<VehicalModel[]> {
    if (name.length === 0) {
      return of([]);
    }
    return this.getAll().pipe(
      map(x => x.filter(y => y.name.toLowerCase().includes(name.toLowerCase())))
    );
  }
}
