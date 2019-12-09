import { selectPeople, selectPeopleCount } from './store/index';
import { PersonNew, PersonAll, PersonUpdate, PersonDelete } from './store/person.actions';
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Person } from "./person";
import { Observable } from "rxjs";
import * as faker from 'faker';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  people$: Observable<Person[]>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.dispatch(new PersonAll())
    // this.people$ = this.store.pipe(select('people'));
    this.people$ = this.store.select(selectPeople);
    this.store.select(selectPeopleCount)
      .subscribe(n => console.log(n));
  }

  addNew() {
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
      _id: new Date().getMilliseconds().toString()
    };
    this.store.dispatch(new PersonNew({person: person}))
  }

  update(p: Person) {
    p.name= faker.name.findName();
    p.address= faker.address.streetAddress();
    p.city= faker.address.city();
    p.country= faker.address.country();
    p.age= Math.round(Math.random() * 100);

    this.store.dispatch(new PersonUpdate({person: p}))
  }

  delete(p: Person) {
    this.store.dispatch(new PersonDelete({id: p._id}))
  }
}
