import { Component, OnInit } from "@angular/core";
import { Client } from "./client.model";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"]
})
export class ClientsComponent implements OnInit {
  name: string;
  age: number;
  clients: Client[] = [];
  constructor() {}

  ngOnInit() {}

  save() {
    this.clients.push({ name: this.name, age: this.age });
    this.name = "";
    this.age = 0;
  }

  deleteClient(index) {
    this.clients.splice(index, 1);
  }

  updateClient(client: Client, index) {
    this.clients[index].name = client.name;
    this.clients[index].age = client.age;
  }
}
