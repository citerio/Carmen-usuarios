import { Component, OnInit,ViewChild } from '@angular/core';
import { ServerService } from '../service/server.service';
import { NavController,Platform,LoadingController,IonSlides,Events, MenuController, ToastController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	
  BannerOption = {
    initialSlide: 0,
    slidesPerView: 2.3,
    loop: false,
    centeredSlides: false,
    autoplay:true,
    speed: 500,
    spaceBetween:7,

  }

  SearchOption = {
    initialSlide: 0,
    slidesPerView: 3.5,
    loop: false,
    centeredSlides: false,
    autoplay:false,
    speed: 500,
    spaceBetween:-20,

  }

  TrendOption = {
    initialSlide: 0,
    slidesPerView: 1.4,
    loop: false,
    centeredSlides: false,
    autoplay:false,
    speed: 800,
    spaceBetween:-9,

  }
  MiddleBannerOption = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: false,
    centeredSlides: true,
    autoplay:true,
    speed: 800,
    spaceBetween:4,

  }
  city_name:any;
  city_id: any;
  data:any;
  fakeData = [1,2,3,4,5,6,7];
  oldData:any;
  showLoading = false;
  filterPress:any;
  hasSearch = false;
  searchQuery:any;
  count:any;
  text:any;
  order:any;
  loadRecentItems: boolean = false;
  RecentsItems = {
    initialSlide: 0,
    slidesPerView: 1.5,
    freeMode: true,
    loop: false,
    centeredSlides: false,
    autoplay:false,
    speed: 800,
    spaceBetween:1,
  }
  RecentsStore = [];
  LastVisitStore = [];
  loadRegularitems: boolean = false;
  LastPlatillos = {
    initialSlide: 0,
    slidesPerView: 1.2,
    freeMode: true,
    loop: false,
    centeredSlides: false,
    autoplay:true,
    speed: 800,
    spaceBetween:9,
  }
  lastDishes = [];
  loadSliderKf: boolean = false;
  // Inicialiamos el slider de KindofFood
  kind_food = {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true
  }
  fk_items = [];

  isKeyboardHide=true;


  ComerceRest = [];

  nearby: any;
  constructor(
    public server : ServerService,
    private nav: NavController,
    public events: Events,
    public keyboard:Keyboard,
    public loadingController: LoadingController,
    public menu: MenuController,
    public toastController: ToastController
    )
  {
    
  }

  ionViewWillEnter()
  {   
    
    this.menu.enable(true);

    this.keyboard.onKeyboardWillShow().subscribe(()=>{
      this.isKeyboardHide=false;
    
    });

    this.keyboard.onKeyboardWillHide().subscribe(()=>{
      this.isKeyboardHide=true;
     
    });

    // if (!localStorage.getItem('user_id')) {
    //   this.nav.navigateRoot('/welcome');
    // }else {

    //   if(localStorage.getItem('user_id') == 'null')
    //   {
    //     this.nav.navigateRoot('/welcome');
    //   }
    // }

    if(localStorage.getItem('app_text'))
    {
      this.text = JSON.parse(localStorage.getItem('app_text'));
    }

    this.city_name = localStorage.getItem('city_name');
    this.city_id   = localStorage.getItem('city_id');
    this.server.cartCount(localStorage.getItem('cart_no')+"?user_id="+localStorage.getItem('user_id')).subscribe((response:any) => {

      this.count = response.data;
      this.order = response.order;

    });
    this.verifyUser();
    this.loadData(localStorage.getItem('city_id')+"?ss=ss");
  }

  ngOnInit()
  {
    this.searchQuery = null;
    this.hasSearch   = false;
  }

  clearSearch() {
    this.searchQuery = null;
    this.hasSearch   = false;
    this.loadData(localStorage.getItem('city_id')+"?ss=ss");
  }

  async nearBy()
  {
    await this.delay(500);
    const loading = await this.loadingController.create({
      message: 'Cargando...',
    });
    await loading.present();
    this.nearby = true;
    this.data.store.sort((a,b) => {
      loading.dismiss();
      return parseFloat(a.km) - parseFloat(b.km);
    });
    // this.loadData(localStorage.getItem('city_id')+"?ss=ss"+"&lat="+localStorage.getItem('current_lat')+"&lng="+localStorage.getItem('current_lng'));
  }

  async loadData(city_id)
  {
    this.data = null;
    this.nearby = false;
    var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
    
    // Obtenemos las coordenadas
    this.server.getGeolocation();

    var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
    var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;

    this.server.homepage(city_id+"&lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
      console.log(response);
      this.data = response.data;
      this.text = response.data.text;
      this.events.publish('text', this.text);
      this.events.publish('admin', response.data.admin);
      localStorage.setItem('app_text', JSON.stringify(response.data.text));
      localStorage.setItem('admin', JSON.stringify(response.data.admin));
    
      this.loadRecentItems  = true;
      this.loadRegularitems = true;
      this.loadSliderKf     = true;
      // Obtenemos los comercios de donde se ha pedido comida
      this.getLastCommPed();
      // Obtenemos todas la categorias
      this.getTypeStore(response.data.Categorys);
      // Ordenamos por los locales mas recientes
      this.data.store.sort((a,b) => {
        return parseFloat(b.id) - parseFloat(a.id);
      });

      this.ComerceRest = [];
      for (let r = 3; r < response.data.store.length; r++) {
        const element = response.data.store[r];
        this.ComerceRest.push(element);
      }
      this.GetRecentStore(response.data.store);
    });
  }

  verifyUser()
  {
    this.server.userInfo(localStorage.getItem('user_id')).subscribe((response:any) => {
      if (response.data) {
        if (response.data.phone == 'null') {
          this.nav.navigateBack('/chkphone');
        }else if (response.data.status == 1) {
          this.nav.navigateBack('/locked')
        }else if (response.data.password == response.data.pswfacebook) {
          this.presentToast("Te recomendamos cambiar tu contraseña","danger");
        }
      }else {
        // localStorage.removeItem('user_id');
        // this.nav.navigateBack('/welcome')
      }
    });
  }

  GetRecentStore(data) {
    this.RecentsStore = [];
    let last = data.length;
    if (data.length >= 3) {
      last = 3;
    }

    for (let i = 0; i < last; i++) {
      const element = data[i];
      this.RecentsStore.push(element);
    }

    this.RecentsStore.sort((a,b) => {
      return parseFloat(b.id) - parseFloat(a.id);
    });

  }

  getLastCommPed() {
    this.LastVisitStore = [];
    if (localStorage.getItem('LastStore')) {
    
      let LastComm = JSON.parse(localStorage.getItem('LastStore'));

      for (let i = 0; i < LastComm.length; i++) {
        const element = LastComm[i];
      
        for (let x = 0; x < this.data.store.length; x++) {
          const store = this.data.store[x];
          if (element.store_id == store.id) {
            if (i <= 3) {
              this.LastVisitStore.push(store);
            }
          }
        }
      }

      this.LastVisitStore.sort((a,b) => {
        return parseFloat(a.id) - parseFloat(b.id);
      });
    }
  }

  getLastDishes(Stores) {
    let Items = [];
    let dishes = [];
    Stores.forEach(element => {
      Items.push(element.items);
    });
  }

  getTypeStore(List_type: any) {
    this.fk_items = []; // Limpiamos
    List_type.forEach(element => {
      if (element.status == 0) {
        this.fk_items.push({'Name' : element.name,'Img' : element.img});
      }
    });

    this.fk_items.reverse();
  }

  async trashLasComm() {
    localStorage.removeItem('LastStore');
    this.loadData(localStorage.getItem('city_id')+"?ss=ss");
  }

  search(ev)
  {
    var val = ev.target.value;

    if(val && val.length > 0)
    {
      this.data      = null;
      this.hasSearch = val;

      let search = localStorage.getItem('city_id')+"?q="+val;
      var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
      var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
      var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;

      this.server.homepage(search+"&lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
        
        this.data = response.data;
        this.text = response.data.text;
        this.events.publish('text', this.text);
        this.events.publish('admin', response.data.admin);
        localStorage.setItem('app_text', JSON.stringify(response.data.text));
        localStorage.setItem('admin', JSON.stringify(response.data.admin));
      
        this.loadRecentItems  = true;
        this.loadRegularitems = true;
        this.loadSliderKf     = true;
        // Obtenemos los comercios de donde se ha pedido comida
        this.getLastCommPed();
        // Obtenemos todas la categorias
        this.getTypeStore(response.data.Categorys);
        // Ordenamos por los locales mas recientes
        this.data.store.sort((a,b) => {
          return parseFloat(b.id) - parseFloat(a.id);
        });

        this.ComerceRest = [];
        for (let r = 3; r < response.data.store.length; r++) {
          const element = response.data.store[r];
          this.ComerceRest.push(element);
        }
        this.GetRecentStore(response.data.store);
      });
    }
    else
    {
      this.ngOnInit();
      this.hasSearch = false;
    }
  }

  async dataFilter(type)
  {
    this.filterPress = type;
    console.log(type);
    await this.delay(500);
    const loading = await this.loadingController.create({
      message: 'Cargando...',
    });
    await loading.present();

    if(type == 1)
    {
      this.ComerceRest.sort((a,b) => {
        this.filterPress = 0;
        loading.dismiss();
        return parseFloat(b.discount_value) - parseFloat(a.discount_value);
      });
    }
    else if(type == 2)
    {
      this.ComerceRest.sort((a,b) => {
        this.filterPress = 0;
        loading.dismiss();
        return parseFloat(a.delivery_charges_value.duration) - parseFloat(b.delivery_charges_value.duration);
      });
    }
    else if(type == 3)
    {
      this.ComerceRest.sort((a,b) => {
        this.filterPress = 0;
        loading.dismiss();
        return parseFloat(b.trending) - parseFloat(a.trending);
      });
    }
    else if(type == 4)
    {
        this.ComerceRest.sort((a,b) => {
          this.filterPress = 0;
          loading.dismiss();
          return parseFloat(b.id) - parseFloat(a.id);
        });
    }
    else if(type == 5)
    {
      this.ComerceRest.sort((a,b) => {
        this.filterPress = 0;
        loading.dismiss();
        return parseFloat(b.rating) - parseFloat(a.rating);
        });
    }
    
  }

  async delay(ms: number) {
    
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  bannerLink(offer)
  {

    if(offer.link)
    {
      let city_id = localStorage.getItem('city_id')+"?banner="+offer.id;
      var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
      var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
      var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
      this.server.homepage(city_id+"&lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
        this.itemPage(response.data.store[0]);
      });
    }
  }

  doRefresh(event) {

    this.loadData(localStorage.getItem('city_id')+"?ss=ss");

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  itemPage(storeData)
  {
    
    if(storeData.open)
    {
      if (storeData.max_distance == 1) {
        localStorage.setItem('menu_item', JSON.stringify(storeData));
        this.nav.navigateForward('/item');
      }
    }
  }

  ViewCat(Name) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        Cat: Name
      }
    };
    this.nav.navigateForward(['/categorys'], navigationExtras);
  }

  async presentToast(txt,color) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position : 'top',
      mode:'ios',
      color:color
    });
    toast.present();
  }

}
