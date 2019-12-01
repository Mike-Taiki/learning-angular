import { Client } from "./../client";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-lifecycle",
  templateUrl: "./main-lifecycle.component.html",
  styleUrls: ["./main-lifecycle.component.css"]
})
export class MainLifecycleComponent implements OnInit {
  private foods: string[] = ["Rice", "Beans", "Pizza"];
  private clients: Client[] = [];
  private name: string;
  private age: number;
  private food: string;
  private editClient: Client = null;

  constructor() {}

  ngOnInit() {}

  save() {
    if (this.editClient === null) {
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food
      });
      (this.name = ""), (this.age = null), (this.food = "");
    }
  }
}
