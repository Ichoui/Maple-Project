import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './providers/user.service';


@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})


export class AppModule  {
}
