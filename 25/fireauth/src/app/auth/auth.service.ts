import { Observable, throwError } from 'rxjs';
import { User } from './user';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userCollection: AngularFirestoreCollection<User> = this.afs.collection('users');

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { }

  register(user: User): Observable<boolean> {
    return from(this.afAuth.auth
        .createUserWithEmailAndPassword(user.email, user.password))
        .pipe(
          switchMap((u: firebase.auth.UserCredential) =>
            this.userCollection.doc(u.user.uid)
              .set({...user, id: u.user.uid})
              .then(() => true)
          ),
          catchError((err) => throwError(err))
        )
  }

  login(email: string, password: string): Observable<User> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password))
      .pipe(
        switchMap((u: firebase.auth.UserCredential) => this.userCollection.doc<User>(u.user.uid).valueChanges()),
        catchError(() => throwError('Invalid credentials or user is not registered.'))
      )
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
