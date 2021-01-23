import { Component, OnInit,ViewChild, ElementRef, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ServerService } from '../service/server.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ToastController,NavController,Platform,LoadingController,Events } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
})
export class DonePage implements OnInit {

@ViewChild('map',{static:false}) mapElement: ElementRef;
@ViewChild('directionsPanel',{static:false}) directionsPanel: ElementRef;

 data:any;
 text:any;
 currency:any;
 status:number = 0; 
 type: any;
 map: any;
 progress:number = 0.016;
 address:any;
 Interval_1:any;
 Intervarl_2:any;
 apiKey: any = "AIzaSyCbPKnHBd-WUUPQezPIiypp0uhdfeHESDc";
  constructor(
    public toastController: ToastController,
    private nav: NavController,
    public server : ServerService,
    public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder,
    public renderer: Renderer2,
    @Inject(DOCUMENT) private _document
    ) { }

  ngOnInit() 
  {
   this.data   = JSON.parse(localStorage.getItem('order_data'));
   this.text   = JSON.parse(localStorage.getItem('app_text'));
   this.currency = this.data.currency;
   this.data   = this.data.data;

   this.getStatus();

  this.Interval_1 = setInterval(() => {      
  
    this.progress = 0.016;
    this.getStatus();
  
    },2000);

   this.Intervarl_2 = setInterval(() => {      
    
    this.progress = (this.progress*1) + 0.016;
  
    },1000);

  }

  getStatus()
  {
    this.server.getStatus(this.data.id).subscribe((response:any) => {

    this.status = response.data.status;
    this.type   = response.data.type;
      console.log(this.type);
    if(this.status == 4)
    {
      this.injectSDK().then((res) => {
        this.loadMap(response.dboy);
      });
    }

    if(this.status == 2)
    {
      this.presentToast("¡Lo siento! Su pedido ha sido cancelado.");
      this.nav.navigateRoot('order');  
      clearInterval(this.Interval_1);
      clearInterval(this.Intervarl_2);
    }

    if(this.status == 5)
    {
      this.presentToast("Pedido entregado con éxito");
      localStorage.removeItem('menu_item');
      localStorage.removeItem('order_data');
      clearInterval(this.Interval_1);
      clearInterval(this.Intervarl_2);
      this.nav.navigateRoot('order');  
    }


    });
  }

  getColor(id)
  {
    if(id == 1)
    {
      if(this.status < 1)
      {
        return "medium";
      }
    }
    else if(id == 3)
    {
      if(this.status < 3)
      {
        return "medium";
      }
    }
    else if(id == 4)
    {
      if(this.status < 4)
      {
        return "medium";
      }
    }

    return "primary";
  }

  async loadMap(dboy) {
    
    this.geolocation.getCurrentPosition().then((resp) => {
      
      let latLng = new google.maps.LatLng(dboy.lat, dboy.lng);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  async getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords "+lattitude+" "+longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
 
    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";

        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
  
          if(value.length > 0)
          responseAddress.push(value);
 
        }

        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value+", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) =>{ 
        this.address = "Dirección no disponible!";
      });
 
  }

  private injectSDK(): Promise<any> {

    return new Promise((resolve, reject) => {

        window['mapInit'] = () => {
            resolve(true);
        }

        let script = this.renderer.createElement('script');
        script.id = 'googleMaps';

        if(this.apiKey){
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
        } else {
            script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';       
        }

        this.renderer.appendChild(this._document.body, script);

    });
  }

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position : 'top',
      mode:'ios',
      color:'dark'
    });
    toast.present();
  }
}
