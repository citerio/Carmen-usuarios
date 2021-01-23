import { Component, OnInit } from '@angular/core';
import { ServerService } from '../service/server.service';
import { ToastController,Platform,LoadingController,NavController,ModalController } from '@ionic/angular';
import { OfferPage } from '../offer/offer.page';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {

  data:any;
  dataAddress:any;
  fakeData: [1,2,3,4,5,6];
  discount:any;
  text:any;
  cart_total: Number = 0;
  Subtotal: Number = 0;
  otype:number = 1;
  delivery_type:any;
  address: any;
 
  constructor(public modalController: ModalController,public server : ServerService,public toastController: ToastController,public loadingController: LoadingController,private nav: NavController)
  {
   this.text = JSON.parse(localStorage.getItem('app_text'));
  }

  ionViewWillEnter()
  {
    if(!localStorage.getItem('user_id') || localStorage.getItem('user_id') == 'null')
    {
      this.nav.navigateRoot('/login');

      this.presentToast("Please login for continue.");
    }
    else
    {
      this.loadData();
    }
  }

  ngOnInit()
  {
  	
  }

  async loadData()
  {
    var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
    var lat = localStorage.getItem('current_lat') ? localStorage.getItem('current_lat') : 0;
    var lng = localStorage.getItem('current_lng') ? localStorage.getItem('current_lng') : 0; 

  	this.server.getCart(localStorage.getItem('cart_no')+"?lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
      console.log(response);
      this.data = response.data;
      this.cart_total = (response.data.total + Number(response.data.c_charges));

      var store_id = response.data.data[0].store_id;  
      this.server.getDeliveryType(store_id).subscribe(data => {
        this.delivery_type = data[0][0].service_del;
        if (this.delivery_type == 0) {
          this.otype = 2;
        }
      });

      // localStorage.getItem('user_id')
      this.server.getAddress(localStorage.getItem('user_id')+"?cart_no="+localStorage.getItem('cart_no')+"&store="+store_id+"&lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
        this.dataAddress         = response.data;
        if (response.data.address.length > 0) {
          // this.address      = response.data.address[0].id; // Marcamos la primer opcion que tenga
        }else {
          this.nav.navigateRoot('/address');
        }
      });
    });
  }

  async setAddress(address)
  {
    const loading = await this.loadingController.create({
      message: 'Espere porfavor...',
      mode: 'ios'
    });
    await loading.present();

    this.address = address.id;
    var lat = address.lat;
    var lng = address.lng;
    localStorage.setItem("address_id",this.address);
    localStorage.setItem("current_lat",lat);
    localStorage.setItem("current_lng",lng);
    this.loadData();
    loading.dismiss();
  }

  removeAddress(id) {
    this.server.trashAddress(id).subscribe(data => {
        if (data) {
          this.presentToast("La dirección se ha eliminado...");
          this.ionViewWillEnter();
        }else {
          this.presentToast(data);
        }
    });
  }

  async updateCart(id,type)
  {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      mode:'ios'
    });
    await loading.present();

    var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
    var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;

    this.server.updateCart(id,type+"?lid="+localStorage.getItem('lid')+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
      this.data = response.data;
      this.cart_total = (response.data.total + Number(response.data.c_charges));
      loading.dismiss();
    });
  }
 
  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000,
      position : 'bottom'
    });
    toast.present();
  }

  async coupen() {
    const modal = await this.modalController.create({
      component: OfferPage,
      animated:true,
      mode:'ios',
      cssClass: 'my-custom-modal-css',
      backdropDismiss:false,
      

    });

   modal.onDidDismiss().then(data=>{
   
    if(data.data.id)
    {
      this.applyCoupen(data.data.id);
    }

    })

    return await modal.present();
  }

  async applyCoupen(id)
  {
    const loading = await this.loadingController.create({
        message: 'Please wait...',
        mode:'ios'
      });
      await loading.present();

      this.server.applyCoupen(id,localStorage.getItem('cart_no')+"?lid="+localStorage.getItem('lid')).subscribe((response:any) => {
      
      if(response.msg == "done")
      {
        this.data = response.data;
      }
      else
      {
        this.presentToast(response.msg);
      }
      
      loading.dismiss();

      });
  }


}
