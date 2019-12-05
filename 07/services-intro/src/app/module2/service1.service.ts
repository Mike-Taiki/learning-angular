import { Module1Module } from "./../module1/module1.module";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: Module1Module
})
export class Service1Service {
  public num = 0;
  constructor() {
    this.num = Math.round(Math.random() * 1000);
  }
}
