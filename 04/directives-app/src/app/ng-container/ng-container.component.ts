import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-container",
  templateUrl: "./ng-container.component.html",
  styleUrls: ["./ng-container.component.css"]
})
export class NgContainerComponent implements OnInit {
  users = [
    { login: "bob", role: "admin", lastlogin: new Date("2/1/2018") },
    { login: "Lia", role: "user", lastlogin: new Date("4/30/2018") },
    { login: "John", role: "admin", lastlogin: new Date("5/2/2018") },
    { login: "Robin", role: "admin", lastlogin: new Date("2/20/2018") }
  ];

  constructor() {}

  ngOnInit() {}
}
