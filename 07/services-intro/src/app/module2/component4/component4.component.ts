import { Component, OnInit } from "@angular/core";
import { Service1Service } from "../service1.service";

@Component({
  selector: "app-component4",
  templateUrl: "./component4.component.html",
  styleUrls: ["./component4.component.css"]
})
export class Component4Component implements OnInit {
  num = 0;

  constructor(private myService1: Service1Service) {}

  ngOnInit() {
    this.num = this.myService1.num;
  }
}
