import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { OptionPageModule } from './option/option.module';
import { OfferPageModule } from './offer/offer.module';
import { PayPal } from '@ionic-native/paypal/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';

import { Keyboard } from '@ionic-native/keyboard/ngx';

// Facebook
import { Facebook } from '@ionic-native/facebook/ngx';
// Google
import { GooglePlus } from '@ionic-native/google-plus/ngx';
// Firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // {_forceStatusbarPadding: true}
    AppRoutingModule,
    HttpClientModule,
    OptionPageModule,
    OfferPageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  
  providers: [
    Geolocation,
    NativeGeocoder,
    PayPal,
    StatusBar,
    SplashScreen,
    OneSignal,
    Keyboard,
    Stripe,
    Facebook,
    GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
