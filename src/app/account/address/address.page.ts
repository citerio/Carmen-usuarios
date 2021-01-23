import { Component, ViewChild, ElementRef,OnInit, Renderer2, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ServerService } from '../../service/server.service';
import { ToastController,NavController,Platform,LoadingController  } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


declare var google:any;


@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})

export class AddressPage implements OnInit {

@ViewChild('map',{static:false}) mapElement: ElementRef;
  
  map: any;
  lat: any;
  lng: any;
  address:string;
  text:any;
  marker: any;
  apiKey: any = "AIzaSyCbPKnHBd-WUUPQezPIiypp0uhdfeHESDc";
  constructor(

    public route: ActivatedRoute,
    public server : ServerService,
    public toastController: ToastController,
    public nav: NavController,
    public loadingController: LoadingController,
    public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder,
    public renderer: Renderer2,
    @Inject(DOCUMENT) private _document
    ){
    this.text = JSON.parse(localStorage.getItem('app_text'));
  }

  ngOnInit()
  {
   
    this.injectSDK().then((res) => {
      this.loadMap();
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


  async loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // 
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      console.log(resp.coords);

      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
      this.map.addListener('tilesloaded', () => {
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });

     
     
    }).catch((error) => {
      console.log('Error al obtener la ubicación', error);
    });
  }
 


  async getAddressFromCoords(lattitude, longitude) {
    var geocoder = new google.maps.Geocoder;

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
        this.address = "Ubicacion no Disponible!";
      });
 
  }

  async saveAddress(data)
  {
    const loading = await this.loadingController.create({
      message: 'Porfavor espere...',
    });
    await loading.present();
    var allData = {address : data.address,lat : this.map.center.lat(),lng : this.map.center.lng(),user_id : localStorage.getItem('user_id')}

    this.server.saveAddress(allData).subscribe((response:any) => {
  
   	this.nav.back();	

   	this.presentToast("Dirección guardada con éxito.");

    loading.dismiss();

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
