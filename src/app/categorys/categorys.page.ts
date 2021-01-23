import { Component, OnInit } from '@angular/core';
import { NavController , IonContent, ModalController, Events,LoadingController } from '@ionic/angular';
import { NavigationExtras, ActivatedRoute } from '@angular/router';

import { ServerService } from '../service/server.service';
@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.page.html',
  styleUrls: ['./categorys.page.scss'],
})
export class CategorysPage implements OnInit {
  text: any;
  data: any;
  SearchTitle: any = "Categorías";
  SearchData = [];
  loadBody: boolean = false;
  fk_items = [];
  count: any;
  loadView: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    public server : ServerService,
    public loadingController: LoadingController
  ) { 
    // Recibimos el elemento
    this.route.queryParams.subscribe( params => {
      if (params.Cat) {
        this.SearchTitle = params.Cat;
        this.loadData(localStorage.getItem('city_id')+"?ss=ss", params.Cat);
      }else {
        this.loadData(localStorage.getItem('city_id')+"?ss=ss", '');
      }
      
    });
  }

  ngOnInit() {
  }
  
  ionViewWillEnter()
  {   
    if (!localStorage.getItem('user_id')) {
      this.nav.navigateRoot('/welcome');
    }else {

      if(localStorage.getItem('user_id') == 'null')
      {
        this.nav.navigateRoot('/welcome');
      }
    }
    if(localStorage.getItem('app_text'))
    {
      this.text = JSON.parse(localStorage.getItem('app_text'));
    }
  }

  viewAll() {
    this.SearchData = [];
    this.SearchTitle = 'Categorias';
    this.loadData(localStorage.getItem('city_id')+"?ss=ss", '');
  }

  async loadData(city_id, cat)
  {
    const loading = await this.loadingController.create({
      message: 'Porfavor Espere...',
    });
    await loading.present();

    this.data = null;
    this.SearchData = [];
    this.fk_items = []; // Vaciamos
    this.loadBody = false;
    var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;

    // Obtenemos las coordenadas
    this.server.getGeolocation();

    var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
    var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;

    this.server.homepage(city_id+"&lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
      
      if (cat != '') {
        let Store = response.data.store;
        this.data = response.data;
        Store.forEach(element => {
          if (element.type == cat) {
            this.SearchData.push(element);
          }
        });
        if (this.SearchData.length == 0) {
          this.SearchTitle = '';
          this.loadBody = true;
        }else {
          this.SearchTitle = cat;
        }
      }else {
        this.getTypeStore(response.data.Categorys);
      }

      loading.dismiss();
    });
  }

  getTypeStore(List_type: any) {
    this.fk_items = []; // Limpiamos
    List_type.forEach(element => {
      this.fk_items.push({'Name' : element.name,'Img' : element.img});
    });

    this.loadBody = true;
  }

  SearchColCategory(Cat) {
    this.loadData(localStorage.getItem('city_id')+"?ss=ss", Cat);
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

}
