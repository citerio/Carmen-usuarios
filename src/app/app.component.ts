import { Component } from '@angular/core';

import { Platform,NavController,Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { ServerService } from './service/server.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  appType:number = 0;
  dir:string = "ltr";
  text:any;
  public appPages:any = [];

  
  admin:any;
  data:any;
  constructor(
    public server : ServerService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public nav : NavController,
    private oneSignal: OneSignal,
    public events: Events
  ) {

    
    this.loadData(localStorage.getItem('city_id')+"?ss=ss");
  
    this.events.subscribe('lang_change', (type) => {
      
      this.assginAppType(type);

    });

     this.events.subscribe('admin', (type) => {
      
      this.admin = type;

    });


    if(localStorage.getItem('admin'))
    {
      this.admin = JSON.parse(localStorage.getItem('admin'));
    }

    if(localStorage.getItem('app_text'))
    {
      this.text = JSON.parse(localStorage.getItem('app_text'));

      this.appPages = [
      {
        title: this.text.home,
        url: '/home',
        icon: 'home'
      },
      {
        title: this.text.city,
        url: '/city',
        icon: 'pin'
      },
      {
        title: this.text.account,
        url: '/profile',
        icon: 'person'
      },
      {
        title: this.text.order,
        url: '/order',
        icon: 'cart'
      },

  ];
      
    }
    else
    {
      var home:any      = "Home";
      var city:any      = "Change City";
      var lang:any      = "Language";
      var profile:any   = "My Account";
      var order:any     = "My Orders";

      this.appPages = [
      {
        title: home,
        url: '/home',
        icon: 'home'
      },
      {
        title: city,
        url: '/city',
        icon: 'pin'
      },
      {
        title: profile,
        url: '/profile',
        icon: 'person'
      },
      {
        title: order,
        url: '/order',
        icon: 'cart'
      },

  ];
    }

     this.events.subscribe('text', (text) => {
      
      this.text = text;

      this.appPages = [
      {
        title: text.home,
        url: '/home',
        icon: 'home'
      },
      {
        title: text.city,
        url: '/city',
        icon: 'pin'
      },
      // {
      //   title: text.language,
      //   url: '/lang',
      //   icon: 'flag'
      // },
      {
        title: text.account,
        url: '/profile',
        icon: 'person'
      },
      {
        title: text.order,
        url: '/order',
        icon: 'cart'
      },

  ];

    });
    
    if(localStorage.getItem('app_type'))
    {
      if(localStorage.getItem('app_type') == "1")
      {
        this.dir = "rtl";
      }
      else
      {
         this.dir = "ltr";
      }
      
    }

    if(localStorage.getItem('city_id') && localStorage.getItem('city_id') != 'null')
    {
      this.nav.navigateRoot('/home');
    }
    else
    {
      this.nav.navigateRoot('/city');
    }


    this.initializeApp();

    this.events.subscribe('user_login', (id) => {

    this.subPush(id);

    });

  }

  assginAppType(ty)
  {
    this.dir = ty == 0 ? "ltr" : "rtl";
  }

  initializeApp() {

    this.platform.ready().then(() => {
      
      // Obtenemos la Geolocalicacion
      this.server.getGeolocation();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString("#ffffff");
      this.statusBar.styleDefault();
      this.subPush();

    });

  }

  subPush(id = 0)
  {
      this.oneSignal.startInit('1c466800-f09e-4f77-b4c4-90dd59bec199', '998111828126');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe(() => {
         // do something when notification is received
        });

        this.oneSignal.handleNotificationOpened().subscribe(() => {
          // do something when a notification is opened
        });
        
      if(localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null')
      {
          this.oneSignal.sendTags({user_id: localStorage.getItem('user_id')});
      }

      if(id > 0)
      {
          this.oneSignal.sendTags({user_id: id});
      }

      this.oneSignal.endInit();
  }

  
  logout()
  {
    localStorage.setItem('user_id',null);

    this.nav.navigateForward('/login');
  }
    
  async loadData(city_id)
  {
    var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
    var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
    var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;

    this.server.homepage(city_id+"&lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
      
      this.data = response.data;
      this.text = response.data.text;

      this.events.publish('text', this.text);
      this.events.publish('admin', response.data.admin);

      localStorage.setItem('app_text', JSON.stringify(response.data.text));
      localStorage.setItem('admin', JSON.stringify(response.data.admin));
    
    });
  }
}
