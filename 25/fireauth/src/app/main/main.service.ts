import { Observable } from "rxjs";
import { Person } from "./person";
import { AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFirestore } from "@angular/fire/firestore"
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MainService {
  private peopleCollection: AngularFirestoreCollection<
    Person
  > = this.afs.collection("people");

  constructor(private afs: AngularFirestore) {}

  getPeople(): Observable<Person[]> {
    return this.peopleCollection.valueChanges();
  }

  addPerson(p: Person) {
    this.peopleCollection.add(p);
  }
}
