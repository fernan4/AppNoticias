import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { File } from '@ionic-native/file/ngx';

//import { firebaseConfig } from '../environments/environment';
import { firebaseConfig } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentsModule , 
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, 
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    EmailComposer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
