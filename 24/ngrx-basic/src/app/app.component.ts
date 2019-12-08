import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Person } from "./person";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  people$: Observable<Person[]>;

  addNew() {}

  update(p: Person) {}

  delete(p: Person) {}
}
