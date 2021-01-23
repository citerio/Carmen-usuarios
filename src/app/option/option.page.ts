import { Component, OnInit } from '@angular/core';
import { NavParams, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ServerService } from '../service/server.service';


@Component({
  selector: 'app-option',
  templateUrl: './option.page.html',
  styleUrls: ['./option.page.scss'],
})
export class OptionPage implements OnInit {

  item:any;
  currency:any;
  itemID:any;
  itemPrice:any;
  itPrice: any;
  addonData:any = [];
  addonPrice: any = 0;
  text:any;
  cart:any = [];
  showToolbar = false;
  cart_no: any;
  count: any;
  data: any;
  qty: any;

  cart_total:any;
  constructor(
    public navParams: NavParams,
    public modalController: ModalController,
    public server : ServerService,
    public toastController: ToastController
    ) {

    this.item 	= navParams.get('item');
    this.currency = navParams.get('currency');
    this.cart = navParams.get('cart');
    this.text = JSON.parse(localStorage.getItem('app_text'));
    this.itemPrice = parseFloat(this.item.s_price);
    this.itPrice   = parseFloat(this.item.s_price);
    this.itemID = 1;
    this.qty    = 1;
    this.cart_no = localStorage.getItem('cart_no');
    this.data = JSON.parse(localStorage.getItem('menu_item'));
    
    this.ViewCart();
  }

  ngOnInit() {
    
  }

  ViewCart() 
  {
    var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
    var lat = localStorage.getItem('current_lat') ? localStorage.getItem('current_lat') : 0;
    var lng = localStorage.getItem('current_lng') ? localStorage.getItem('current_lng') : 0; 

  	this.server.getCart(localStorage.getItem('cart_no')+"?lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
      console.log(response);
      this.cart_total = Number(response.data.total);
     
    });
  }

  async addToCart()
  {
    await this.modalController.dismiss({
      proces: 'addTocart',
      id:this.item.id,
      price:this.itPrice,
      qty: this.qty,
      type:this.itemID,
      addonData : this.addonData
    });
  }


  Qty(process) {

    if (process == 'sum') {
      this.qty += 1;
    }else {
      this.qty -= 1;
    }

    
    if (this.addonPrice > 0) {
      this.itemPrice = (parseFloat(this.itPrice) * this.qty) + parseFloat(this.addonPrice);
    }else {
      this.itemPrice = parseFloat(this.itPrice) * this.qty;
    }
  }

  async updateCart()
  {
    await this.modalController.dismiss({proces: 'updateTocart',id:this.item.id,price:this.itemPrice,type:this.itemID,addonData : this.addonData});
  }

  async closeModal() {
    await this.modalController.dismiss({data:true});
  }

  selectItem(type,price)
  {
    this.itemID     = type;
    this.itPrice    = price;
    if (this.addonPrice > 0) {
      this.itemPrice = (parseFloat(price) * this.qty) + parseFloat(this.addonPrice);
    }else {
      this.itemPrice = parseFloat(price) * this.qty
    }
  }

  addonSelect(addon)
  {
    
    if(this.addonData.includes(addon.id))
    {
      var ind = this.addonData.indexOf(addon.id);
      this.itemPrice = parseFloat(this.itemPrice) - parseFloat(addon.price);  
      this.addonPrice = parseFloat(this.addonPrice) - parseFloat(addon.price);
      this.addonData.splice(ind,1);
    }
    else
    {
      this.addonData.push(addon.id);
      this.itemPrice = parseFloat(this.itemPrice) + parseFloat(addon.price);
      this.addonPrice = parseFloat(this.addonPrice) + parseFloat(addon.price);
    }
  }

  hasCart(id)
  {
    for(var i =0;i<this.cart.length;i++)
    {
      if(this.cart[i].item_id == id)
      {
        return this.cart[i].qty;
      }
    }

    return 1;
  }

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000,
      position : 'top'
    });
    toast.present();
  }
}
