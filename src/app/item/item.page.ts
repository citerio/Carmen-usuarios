import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrollDetail } from '@ionic/core';
import { ModalController, IonContent, Platform } from '@ionic/angular';
import { OptionPage } from '../option/option.page';
import { ToastController } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  @ViewChild(IonContent, {static: false}) Content: IonContent;

  data:any;
  veg = false;
  cart_no:any;
  count:any;
  text:any;
  cart:any = [];
  showToolbar = false;

  BannerOption = {
    initialSlide: 0,
    slidesPerView: 3.3,
    loop: false,
    centeredSlides: false,
    autoplay:false,
    spaceBetween:7,
  }

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    public server : ServerService,
    private statusBar: StatusBar,
    public platform: Platform
  ) 
  { 
   this.data = JSON.parse(localStorage.getItem('menu_item'));
   this.text = JSON.parse(localStorage.getItem('app_text'));
  }

  ngOnInit() {
   
  }

  ionViewWillEnter()
  {
    this.platform.backButton.subscribeWithPriority(1,() => {
    });

    if(localStorage.getItem('cart_no') == 'null' || localStorage.getItem('cart_no') == undefined)
    {
      this.cart_no = Math.floor(Math.random()*2000000000)+1;

      localStorage.setItem('cart_no',this.cart_no);
    }
    else
    {
      this.cart_no = localStorage.getItem('cart_no');
    }

    this.server.cartCount(this.cart_no).subscribe((response:any) => {
      
      this.count = response.data;
      this.cart  = response.cart;
     });
  }

  vegOnly()
  {
  	this.veg = this.veg == true ? false : true;
  }

  async showOption(item,currency) {
    const modal = await this.modalController.create({
      component: OptionPage,
      animated:true,
      mode:'md',
      // cssClass: 'my-custom-modal-css',
      backdropDismiss:false,
      componentProps: {
      'item': item,
      'cart': this.cart,
      'currency' : currency
    }

    });

   modal.onDidDismiss().then(data=>{
      if(data.data.proces == 'addTocart')
      {
        this.addToCart(
          data.data.id,
          data.data.price,
          data.data.type,
          data.data.qty,
          data.data.addonData
          ); 
        
      }
      else if (data.data.proces == 'updateTocart') {
        this.updateCart(data.data.id,data.data.type); 
      }

      this.ionViewWillEnter();
    })
    return await modal.present();
  }

  addToCart(id,price,type = 0,qty,addon = [])
  {
      this.presentToast("Elemento Agregado.");
      var allData = {
       cart_no : this.cart_no,
       id : id,
       price : price,
       qtype : type,
       type:0,
       qty: qty,
       addon : addon,
       price_comm: this.data.c_value
      };
     this.server.addToCart(allData).subscribe((response:any) => {
        this.count = response.data.count;
        this.cart  = response.data.cart;
     });
  }

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000,
      position : 'top'
    });
    toast.present();
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

    return false;
  }

  async updateCart(id,type = 0)
  {
    this.presentToast("Removed Successfully");
    this.server.updateCart(id,type+"?cart_no="+this.cart_no+"&lid="+localStorage.getItem('lid')).subscribe((response:any) => {
    
    this.cart = response.data;
    
    });
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    
    // let title:  HTMLSpanElement = document.querySelector('.content_title');
    // let subTitle: HTMLSpanElement = document.querySelector('.title_header');
    let menuSub: HTMLDivElement = document.querySelector('.slide-menu');
    
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 175;

      if (scrollTop >= 175) {
        menuSub.className = 'slide-menu slide_down_View';
      }else {
        menuSub.className = 'slide-menu';
      }
    }
  }

  ScrollTo(div) {
    let menuSub: HTMLDivElement = document.querySelector('.'+div);
    let DownY  = menuSub.offsetTop + 210;
  
    this.Content.scrollToPoint(0,DownY,300);
  }
}	