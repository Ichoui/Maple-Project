import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../../firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
