import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyDiOVolzcYmhW41yVQyiXngsodcTHvD2E8",
  authDomain: "firestore-da5ef.firebaseapp.com",
  databaseURL: "https://firestore-da5ef.firebaseio.com",
  projectId: "firestore-da5ef",
  storageBucket: "firestore-da5ef.appspot.com",
  messagingSenderId: "1018963202007"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
