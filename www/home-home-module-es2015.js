(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar color=\"white\">\n  <ion-buttons slot=\"start\" >\n    <ion-menu-button></ion-menu-button>\n\n    <span color=\"dark\" style=\"font-size:16px;\" routerLink=\"/city\" routerDirection=\"forward\">\n      <ion-icon name=\"pin\"></ion-icon>  {{city_name | slice:0:25}} <i *ngIf=\"city_name && city_name.length > 15\">...</i>\n    </span>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"text\" mode=\"md\">\n\n<ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" *ngIf=\"count > 0\" routerLink=\"/cart\" routerDirection=\"forward\">\n  <ion-fab-button color=\"danger\" edge=\"true\">\n    <ion-icon name=\"cart\"></ion-icon> {{ count }}\n  </ion-fab-button>\n</ion-fab>\n\n<ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" *ngIf=\"order > 0\" routerLink=\"/done\" routerDirection=\"forward\">\n  <ion-fab-button color=\"danger\" edge=\"true\">\n    <ion-icon name=\"pin\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content \n  pullingIcon=\"ellipsis-horizontal\"\n  refreshingSpinner=\"dots\">\n    \n  </ion-refresher-content>\n</ion-refresher>\n\n<div class=\"degradado\" style=\"width:100%;margin-top: -6px\">\n  <ion-searchbar (ionInput)=\"search($event)\" placeholder=\"{{ text.home_search }}\" mode=\"ios\" color=\"light\" (ionClear)=\"clearSearch()\" [(ngModel)]=\"searchQuery\"></ion-searchbar><br><br><br>\n</div>\n<!-- width: 98%;margin-left: 1%; -->\n<div class=\"welcome-card\" style=\"background-color:rgb(243, 243, 243);width: 98%;margin-left: 1%; margin-top: -12%;\" mode=\"ios\">\n\n  <ion-list id=\"skeleton\" *ngIf=\"!data\">\n    <ion-list-header>\n      <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let fake of fakeData\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-card-content *ngIf=\"data\" style=\"padding:0;\">\n\n    <ion-slides pager=\"false\" [options]=\"BannerOption\" #slideone autoplay=\"3000\" style=\"padding-left: 15px;\" *ngIf=\"!hasSearch && !nearby\">\n      <ion-slide *ngFor=\"let offer of data.banner\" (click)=\"bannerLink(offer)\"><img src=\"{{ offer.img }}\" width=\"100%\" style=\"border-radius: 4%\"></ion-slide>\n    </ion-slides>\n\n    <ion-card *ngIf=\"!nearby && data && data.store.length == 0\" mode=\"ios\" style=\"padding: 20px 20px;\">\n\n      <h2>\n        Opps! Aun no hay comercios en esta zona\n      </h2>\n      <ion-button size=\"small\" mode=\"ios\" routerLink=\"/city\" routerDirection=\"back\">Cambiar Localidad</ion-button>\n    </ion-card>\n  \n    <ion-backdrop tappable=\"false\" *ngIf=\"filterPress\"></ion-backdrop>\n\n    <!--******************* Tipo de comida *********************************************************-->\n    <div style=\"background-color: #FFFFFF;margin-top: 15px;width: 100%;margin-left: 0px;\" *ngIf=\"!nearby\">\n      <h6 style=\"padding-left: 15px;padding-top: 15px; font-family: 'SF Pro Display';font-weight: 500;\">\n        <ion-icon name=\"apps\"></ion-icon> Categorías\n        <a style=\"float:right;padding: 0 10px;\" routerLink=\"/categorys\" routerDirection=\"forward\">Ver todas</a>\n      </h6>\n\n      <!-- Slider de Tipo de comidas -->\n      <ion-slides pager=\"false\" [options]=\"SearchOption\" #slideone style=\"margin-left: -10px;margin-top: 5px\" *ngIf=\"!hasSearch\">\n        <ion-slide *ngFor=\"let cat of fk_items | slice:0:5\"  (click)=\"ViewCat(cat.Name)\">\n          <ion-card style=\"padding: 5px 5px\" mode=\"ios\">\n            <img src=\"{{cat.Img}}\" style=\"width: 40% !important;margin-left: 30%\">\n            <small style=\"font-size: 9px\" *ngIf=\"filterPress != 2\">{{ cat.Name }}</small>\n            <ion-spinner name=\"dots\" *ngIf=\"filterPress == 2\" color=\"primary\"></ion-spinner>\n          </ion-card>\n        </ion-slide>\n        \n      </ion-slides>\n    </div>\n    <!-- /Slider de Tipo de comidas -->\n    <!--******************* Tipo de comida *********************************************************-->\n\n    <!--******************* Agregados Recientemente *********************************************************-->\n      <!-- Agregados Recientemente -->\n      <div *ngIf=\"!nearby && data && data.store.length > 0\" style=\"background-color: #FFFFFF;width: 100%;margin-top: 15px;\">\n        <h6 style=\"padding-left: 15px; padding-top: 25px;font-family: 'SF Pro Display';font-weight: 500;\">\n          <ion-icon name=\"star\"></ion-icon> Últimos Agregados\n        </h6>\n\n        <div  class=\"recentItems fullscreen\">   \n          <!-- Skeletor -->\n          <!--********************** Items Normales ********************************************************-->\n            <div style=\"background-color: #FFFFFF;margin-top: 15px;\">\n              <ion-row style=\"margin: 8px 15px;border: 0.5px solid #f0f0f0;\" *ngFor=\"let store of RecentsStore;let i = index\" (click)=\"itemPage(store)\">\n                <!-- Imagen -->\n                <ion-col size=\"4\">\n                  <div class=\"img_radius\" [style.backgroundImage]=\"'url('+ store.img +')'\">\n                    <img src=\"../../assets/close.png\" alt=\"Cerrado\" class=\"tag_close\" *ngIf=\"!store.open\">\n                    <!-- <img src=\"{{ store.img }}\" > -->\n                  </div>\n                </ion-col>\n                <!-- Imagen -->\n                <!-- Info -->\n                <ion-col size=\"8\" class=\"wrap_info\" style=\"font-size: 12px;border-left: 0.5px solid #f0f0f0;padding-left: 8px;\">\n                  <b>{{ store.title | slice:0:27 }}<i *ngIf=\"store.title.length > 27\">...</i></b><br>\n                  <small style=\"color: gray;font-size: 10px\">\n                    <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ store.rating }}</span> | {{ store.type }}\n                  </small><br>\n                  <small style=\"color: gray;font-size: 10px\">\n                    Entrega en {{ store.delivery_time }}\n                  </small><br />\n        \n                  <small *ngIf=\"store.max_distance > 0\" style=\"color: hsl(144, 88%, 38%);\">\n                    Distancia: {{store.km}} km\n                  </small><br *ngIf=\"store.max_distance > 0\" />\n        \n                  <small *ngIf=\"store.max_distance == 0\" style=\"color: red;\">\n                    Sin cobertura en tu ubicación.\n                  </small><br *ngIf=\"store.max_distance == 0\" />\n        \n                  <small *ngIf=\"store.delivery_charges_value.costs_ship == 0 && store.max_distance == 1\">\n                    Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!store.open\"> | Abre a las: <span style=\"color:red;\">{{store.open_time}}</span></span>\n                  </small>\n                </ion-col>\n                <!-- Info -->\n\n              </ion-row>\n            </div>\n          <!--********************** Items Normales ********************************************************-->\n        </div>\n      </div>\n      <!-- /Agregados Recientemente  -->\n    <!--******************* Agregados Recientemente *********************************************************-->\n      \n    <!--******************* Ordena de nuevo ***************************-->\n      <div *ngIf=\"!nearby && !hasSearch && LastVisitStore.length >= 1 && data && data.store.length > 0\" style=\"margin-top: 15px;background-color: #FFFFFF;\">\n        <h6 style=\"padding-left: 15px;padding-top: 25px;font-family: 'SF Pro Display';font-weight: 500;\">\n          <ion-icon name=\"refresh\"></ion-icon> Pidelo de Nuevo\n          <a (click)=\"trashLasComm()\" style=\"float: right;padding-right: 15px;padding-top: 4px;text-decoration: none;font-size: 12px;\">Borrar Historial</a>\n        </h6>\n        <div style=\"margin-top: 15px;margin-bottom: 10px;background-color: #fff;padding: 15px;\">\n          <ion-row *ngFor=\"let store of LastVisitStore\" style=\"border-bottom: 1px solid rgb(236, 236, 236);\" (click)=\"itemPage(store)\">\n            <!-- Imagen -->\n            <ion-col size=\"4\">\n              <div class=\"img_radius\" [style.backgroundImage]=\"'url('+ store.img +')'\">\n                <img src=\"../../assets/close.png\" alt=\"Cerrado\" class=\"tag_close\" *ngIf=\"!store.open\">\n                <!-- <img src=\"{{ store.img }}\" > -->\n              </div>\n            </ion-col>\n            <!-- Imagen -->\n            <!-- Info -->\n            <ion-col size=\"8\" style=\"font-size: 12px;\">\n              <b>{{ store.title | slice:0:27 }}<i *ngIf=\"store.title.length > 27\">...</i></b><br>\n              <small style=\"color: gray;font-size: 10px\">\n                <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ store.rating }}</span> | {{ store.type }}\n              </small><br>\n              <small style=\"color: gray;font-size: 10px\">\n                Entrega en {{ store.delivery_time }}\n              </small><br />\n    \n              <small *ngIf=\"store.max_distance > 0\" style=\"color: hsl(144, 88%, 38%);\">\n                Distancia: {{store.km}} km\n              </small><br *ngIf=\"store.max_distance > 0\" />\n    \n              <small *ngIf=\"store.max_distance == 0\" style=\"color: red;\">\n                Sin cobertura en tu ubicación.\n              </small><br *ngIf=\"store.max_distance == 0\" />\n    \n              <small *ngIf=\"store.delivery_charges_value.costs_ship == 0 && store.max_distance == 1\">\n                Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!store.open\"> | Abre a las: <span style=\"color:red;\">{{store.open_time}}</span></span>\n              </small>\n            </ion-col>\n            <!-- Info -->\n\n          </ion-row>\n        </div>\n      </div>\n    <!--******************* Ordena de nuevo ***************************-->\n\n    <!--********************** Items Normales ********************************************************-->\n    <div *ngIf=\"!nearby && data && data.store.length > 3\" style=\"background-color: #FFFFFF;margin-top: 15px;\">\n      <h6 style=\"padding-left: 15px;padding-top: 25px; font-family: 'SF Pro Display';font-weight: 500;\">\n        <ion-icon name=\"restaurant\"></ion-icon> Restaurantes\n      </h6>\n\n      <!-- Filtros -->\n      <ion-slides pager=\"false\" [options]=\"SearchOption\" #slideone style=\"margin-left: -10px;margin-top: 5px\">\n        <ion-slide (click)=\"dataFilter(2)\"><ion-card style=\"padding: 5px 5px\" mode=\"ios\"><img src=\"assets/delivery.png\" style=\"width: 40% !important;margin-left: 30%\">\n        \n        <small style=\"font-size: 9px\" *ngIf=\"filterPress != 2\">{{ text.home_fast_delivery }}</small>\n        <ion-spinner name=\"dots\" *ngIf=\"filterPress == 2\" color=\"primary\"></ion-spinner>\n        </ion-card></ion-slide>\n        \n        <ion-slide (click)=\"dataFilter(3)\"><ion-card style=\"padding: 5px 5px\" mode=\"ios\"><img src=\"assets/trend.png\" style=\"width: 40% !important;margin-left: 30%\">\n        \n        <small style=\"font-size: 9px\" *ngIf=\"filterPress != 3\">{{ text.home_trending }}</small>\n        <ion-spinner name=\"dots\" *ngIf=\"filterPress == 3\" color=\"primary\"></ion-spinner>\n        \n        </ion-card></ion-slide>\n        \n        <ion-slide (click)=\"dataFilter(4)\"><ion-card style=\"padding: 5px 5px\" mode=\"ios\"><img src=\"assets/alarm.png\" style=\"width: 40% !important;margin-left: 30%\">\n        \n        <small style=\"font-size: 9px\" *ngIf=\"filterPress != 4\">{{ text.home_new_arrival }}</small>\n        <ion-spinner name=\"dots\" *ngIf=\"filterPress == 4\" color=\"primary\"></ion-spinner>\n        \n        </ion-card></ion-slide>\n        \n        <ion-slide (click)=\"dataFilter(5)\"><ion-card style=\"padding: 5px 5px\" mode=\"ios\"><img src=\"assets/rating.png\" style=\"width: 40% !important;margin-left: 30%\">\n        \n        <small style=\"font-size: 9px\" *ngIf=\"filterPress != 5\">{{ text.home_by_rating }}</small>\n        <ion-spinner name=\"dots\" *ngIf=\"filterPress == 5\" color=\"primary\"></ion-spinner>\n        \n        </ion-card></ion-slide>\n        \n      </ion-slides>\n      <!-- Filtros -->\n\n      <ion-row style=\"margin: 8px 15px;border: 0.5px solid #f0f0f0;\" *ngFor=\"let store of ComerceRest;let i = index\" (click)=\"itemPage(store)\">\n        <!-- Imagen -->\n        <ion-col size=\"4\">\n          <div class=\"img_radius\" [style.backgroundImage]=\"'url('+ store.img +')'\">\n            <img src=\"../../assets/close.png\" alt=\"Cerrado\" class=\"tag_close\" *ngIf=\"!store.open\">\n            <!-- <img src=\"{{ store.img }}\" > -->\n          </div>\n        </ion-col>\n        <!-- Imagen -->\n        <!-- Info -->\n        <ion-col size=\"8\" class=\"wrap_info\" style=\"font-size: 12px;border-left: 0.5px solid #f0f0f0;padding-left: 8px;\">\n    \n          <b>{{ store.title | slice:0:27 }}<i *ngIf=\"store.title.length > 27\">...</i></b><br>\n          <small style=\"color: gray;font-size: 10px\">\n            <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ store.rating }}</span> | {{ store.type }}\n          </small><br>\n          <small style=\"color: gray;font-size: 10px\">\n            Entrega en {{ store.delivery_time }}\n          </small><br />\n\n          <small *ngIf=\"store.max_distance > 0\" style=\"color: hsl(144, 88%, 38%);\">\n            Distancia: {{store.km}} km\n          </small><br *ngIf=\"store.max_distance > 0\" />\n\n          <small *ngIf=\"store.max_distance == 0\" style=\"color: red;\">\n            Sin cobertura en tu ubicación.\n          </small><br *ngIf=\"store.max_distance == 0\" />\n\n          <small *ngIf=\"store.delivery_charges_value.costs_ship == 0 && store.max_distance == 1\">\n            Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!store.open\"> | Abre a las: <span style=\"color:red;\">{{store.open_time}}</span></span>\n          </small>\n        </ion-col>\n        <!-- Info -->\n      </ion-row>\n    </div>\n    <!--********************** Items Normales ********************************************************-->\n\n    <!--********************** Comercios Recientes ********************************************************-->\n    <div *ngIf=\"nearby && data\" style=\"background-color: #FFFFFF;margin-top: -20%;\">\n      <h6 style=\"padding-left: 15px;padding-top: 25px; font-family: 'SF Pro Display';font-weight: 500;\">\n        <ion-icon name=\"restaurant\"></ion-icon> Comercios Cercanos\n      </h6>\n\n      <ion-row style=\"margin: 8px 15px;border: 0.5px solid #f0f0f0;\" *ngFor=\"let store of data.store;let i = index\" (click)=\"itemPage(store)\">\n        <!-- Imagen -->\n        <ion-col size=\"4\">\n          <div class=\"img_radius\" [style.backgroundImage]=\"'url('+ store.img +')'\">\n            <img src=\"../../assets/close.png\" alt=\"Cerrado\" class=\"tag_close\" *ngIf=\"!store.open\">\n            <!-- <img src=\"{{ store.img }}\" > -->\n          </div>\n        </ion-col>\n        <!-- Imagen -->\n        <!-- Info -->\n        <ion-col size=\"8\" class=\"wrap_info\" style=\"font-size: 12px;border-left: 0.5px solid #f0f0f0;padding-left: 8px;\">\n    \n          <b>{{ store.title | slice:0:27 }}<i *ngIf=\"store.title.length > 27\">...</i></b><br>\n          <small style=\"color: gray;font-size: 10px\">\n            <span style=\"color: #ff6b01;\"><ion-icon name=\"star\"></ion-icon> {{ store.rating }}</span> | {{ store.type }}\n          </small><br>\n          <small style=\"color: gray;font-size: 10px\">\n            Entrega en {{ store.delivery_time }}\n          </small><br />\n\n          <small *ngIf=\"store.max_distance > 0\" style=\"color: hsl(144, 88%, 38%);\">\n            Distancia: {{store.km}} km\n          </small><br *ngIf=\"store.max_distance > 0\" />\n\n          <small *ngIf=\"store.max_distance == 0\" style=\"color: red;\">\n            Sin cobertura en tu ubicación.\n          </small><br *ngIf=\"store.max_distance == 0\" />\n\n          <small *ngIf=\"store.delivery_charges_value.costs_ship == 0 && store.max_distance == 1\">\n            Envio <span style=\"color: #0cb850;\">Gratis</span> <span *ngIf=\"!store.open\"> | Abre a las: <span style=\"color:red;\">{{store.open_time}}</span></span>\n          </small>\n        </ion-col>\n        <!-- Info -->\n      </ion-row>\n    </div>\n    <!--********************** Comercios Recientes ********************************************************-->\n  </ion-card-content>\n</div>\n\n</ion-content>\n\n<ion-footer *ngIf=\"text && isKeyboardHide\">\n<ion-toolbar mode=\"ios\">\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    \n   <ion-tab-button (click)=\"loadData(city_id + '?ss=ss')\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>{{ text.home_footer_name }}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"nearBy()\">\n      <ion-icon name=\"pin\"></ion-icon>\n      <ion-label>{{ text.home_nearest }}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button routerLink=\"/cart\" routerDirection=\"forward\">\n      <ion-icon name=\"basket\"></ion-icon>\n      <ion-label>{{ text.home_cart }}</ion-label>\n      <ion-badge *ngIf=\"count > 0\">{{ count }}</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>{{ text.home_profile }}</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n\n</ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\np {\n  padding: 10px 2px;\n}\n\n.trend {\n  margin-top: -25px;\n}\n\nion-backdrop {\n  opacity: 0.3;\n}\n\n.AllElements {\n  text-align: center;\n  padding-bottom: 15px;\n}\n\n.AllElements .regular-items {\n  text-align: left;\n  position: relative;\n  display: inline-block;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.AllElements a {\n  text-decoration: none;\n}\n\n.AllElements a h3 {\n  color: #000;\n  font-weight: 700;\n  font-size: 18px;\n  padding-left: 10px;\n}\n\n.AllElements a small {\n  color: #626262;\n  font-size: 13px;\n  padding-left: 10px;\n}\n\n.AllElements .wrap-img-items {\n  width: 100%;\n  margin: auto;\n  margin-bottom: 0;\n  height: 150px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.AllElements .wrap-img-items:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 160px;\n  background: #010101;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(10%, #010101), color-stop(98%, rgba(255, 255, 255, 0)));\n  background: linear-gradient(0deg, #010101 10%, rgba(255, 255, 255, 0) 98%);\n  z-index: 1;\n}\n\n.AllElements .wrap-img-items .text {\n  position: absolute;\n  bottom: 0;\n  padding: 10px 0;\n  z-index: 50;\n}\n\n.AllElements .wrap-img-items .text h3 {\n  color: #fff;\n  max-width: 250px;\n}\n\n.AllElements .wrap-img-items .text small {\n  color: #fff;\n}\n\n.AllElements .Abierto {\n  color: #08a82a;\n}\n\n.AllElements .Cerrado {\n  color: red;\n}\n\n.AllElements #info-card .info ion-grid ion-row ion-col {\n  text-align: center;\n  font-size: 12px;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n  color: #4c4c4c;\n  display: inline-block;\n}\n\n.AllElements #info-card .info ion-grid ion-row ion-col strong {\n  font-size: 10px;\n  padding-bottom: 3px;\n  display: block;\n}\n\n.AllElements .raiting {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  padding: 2px 5px;\n  background-color: #FF9505;\n  color: #fff;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n  font-size: 12px;\n  border-radius: 6px;\n  z-index: 50;\n}\n\n.wrap_info {\n  position: relative;\n}\n\n.wrap_info ion-badge {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  padding: 4px 8px;\n  background-color: #FF9505;\n  color: #fff;\n  font-family: \"SF Pro Display\";\n  font-weight: 400;\n  font-size: 11px;\n  border-radius: 6px;\n  z-index: 50;\n}\n\n.recentItems a {\n  text-decoration: none;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.recentItems a h2 {\n  color: #000;\n  font-weight: 700;\n}\n\n.recentItems a small {\n  color: #626262;\n}\n\n.recentItems a h3 {\n  color: #626262;\n}\n\n.recentItems .Abierto {\n  color: #08a82a;\n}\n\n.recentItems .Cerrado {\n  color: red;\n}\n\n.recentItems h3 {\n  font-family: \"Open Sans\", sans-serif;\n  color: #000 !important;\n}\n\n.recentItems .wrap-img-recents {\n  width: 100%;\n  height: 100px;\n  overflow: hidden;\n}\n\n.recentItems ion-label .info span {\n  width: 100%;\n  font-size: 11px;\n  color: #4c4c4c;\n  display: inline-block;\n}\n\n.recentItems ion-label .info span .pl-10 {\n  padding-left: 10px;\n}\n\n.recentItems ion-label .info span strong {\n  font-size: 10px;\n  padding-bottom: 3px;\n  display: block;\n}\n\n.recentItems .raiting {\n  position: absolute;\n  left: 5px;\n  top: 5px;\n  z-index: 100;\n  padding: 2px 5px;\n  background-color: #FF9505;\n  color: #fff;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n  border-radius: 8px;\n}\n\n.img_radius {\n  margin: auto;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-size: cover;\n  border-radius: 8px;\n}\n\n.img_radius .tag_close {\n  position: absolute;\n  top: -2%;\n  left: 0;\n  width: 100%;\n}\n\n.lastdisches {\n  box-shadow: 14px 13px 14px -8px rgba(0, 0, 0, 0.28);\n}\n\n.kind_food .swiper-container {\n  box-shadow: 0 !important;\n  background-color: #fff;\n  border: 0 !important;\n  padding: 15px 0;\n  width: 100%;\n  height: 100%;\n}\n\n.kind_food .wrap-img-kindfood {\n  width: 120px;\n  height: 80px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 10px;\n}\n\n.kind_food .wrap-img-kindfood .wrap-box-kf {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(43, 40, 38, 0.4);\n  border-radius: 10px;\n}\n\n.kind_food .wrap-img-kindfood .wrap-box-kf h6 {\n  color: #f6f6f6;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 28px auto;\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.tag_close {\n  position: absolute;\n  top: -8px;\n  left: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcaW9uaWNcXGNhcm1lbmFwcFxcdXN1YXJpb3Mvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREdBO0VBRUMsaUJBQUE7QUNERDs7QURJQTtFQUVDLGlCQUFBO0FDRkQ7O0FESUE7RUFDTSxZQUFBO0FDRE47O0FET0E7RUFDRSxrQkFBQTtFQVNBLG9CQUFBO0FDWkY7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSx3QkFBQTtVQUFBLHVCQUFBO0FDSEY7O0FET0U7RUFDRSxxQkFBQTtBQ0xKOztBRE9JO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTE47O0FEUUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTk47O0FEVUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUko7O0FEVUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQU8sT0FBQTtFQUNQLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4SEFBQTtFQUFBLDBFQUFBO0VBQ0EsVUFBQTtBQ1BOOztBRFVJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNSTjs7QURVTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ1JSOztBRFdNO0VBQ0UsV0FBQTtBQ1RSOztBRGNFO0VBQ0UsY0FBQTtBQ1pKOztBRGVFO0VBQ0UsVUFBQTtBQ2JKOztBRG9CVTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNsQlo7O0FEb0JZO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ2xCZDs7QUQwQkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFBYSxXQUFBO0VBQ2IsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3ZCSjs7QUQ0QkE7RUFDRSxrQkFBQTtBQ3pCRjs7QUQyQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFBUyxVQUFBO0VBQ1QsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3hCSjs7QUQrQk07RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0FDNUJSOztBRDhCUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQzVCVjs7QUQrQlE7RUFDRSxjQUFBO0FDN0JWOztBRGdDUTtFQUNFLGNBQUE7QUM5QlY7O0FEa0NNO0VBQ0UsY0FBQTtBQ2hDUjs7QURtQ007RUFDRSxVQUFBO0FDakNSOztBRG9DTTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7QUNsQ1I7O0FEcUNNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ25DUjs7QUR3Q1U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ3RDWjs7QUR3Q1k7RUFDRSxrQkFBQTtBQ3RDZDs7QUR5Q1k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDdkNkOztBRDZDTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUFVLFFBQUE7RUFDVixZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQzFDUjs7QURnREE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQzdDRjs7QURnREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFBUyxPQUFBO0VBQ1QsV0FBQTtBQzdDSjs7QURrREE7RUFHRSxtREFBQTtBQy9DRjs7QURxREU7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNsREo7O0FEcURFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ25ESjs7QURvREk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUFPLE9BQUE7RUFDUCx1Q0FBQTtFQUNBLG1CQUFBO0FDakROOztBRGtETTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFBUSxRQUFBO0VBQ1IsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUMvQ1I7O0FEcURBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQVUsT0FBQTtFQUNWLFdBQUE7QUNqREYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbn1cblxucFxue1xuXHRwYWRkaW5nOjEwcHggMnB4O1xufVxuXG4udHJlbmRcbntcblx0bWFyZ2luLXRvcDotMjVweDtcbn1cbmlvbi1iYWNrZHJvcCB7XG4gICAgICBvcGFjaXR5OiAwLjM7XG4gICAgfVxuXG4gIFxuLy8gSXRlbXMgUmVndWxhcmVzXG5cbi5BbGxFbGVtZW50cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuLnJlZ3VsYXItaXRlbXMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIGgzIHtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICBzbWFsbCB7XG4gICAgICBjb2xvcjogcmdiKDk4LCA5OCwgOTgpO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC53cmFwLWltZy1pdGVtcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHRvcDogMDtsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiKDEsMSwxKTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEsMSwxLDEpIDEwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSA5OCUpO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICB6LWluZGV4OiA1MDtcblxuICAgICAgaDMge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgIH1cblxuICAgICAgc21hbGwge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuQWJpZXJ0byB7XG4gICAgY29sb3I6ICMwOGE4MmE7XG4gIH1cblxuICAuQ2VycmFkbyB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gICNpbmZvLWNhcmQge1xuICAgIC5pbmZvIHtcbiAgICAgIGlvbi1ncmlkICB7XG4gICAgICAgIGlvbi1yb3cgIHtcbiAgICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNGM0YzRjO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yYWl0aW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O3JpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkY5NTA1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB6LWluZGV4OiA1MDtcbiAgfVxuXG59XG5cbi53cmFwX2luZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgaW9uLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7cmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGOTUwNTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgei1pbmRleDogNTA7XG4gIH1cbn1cblxuXG4ucmVjZW50SXRlbXMgIHtcbiAgICBcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBcbiAgICAgICAgaDIge1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgc21hbGwge1xuICAgICAgICAgIGNvbG9yOiByZ2IoOTgsIDk4LCA5OCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaDMge1xuICAgICAgICAgIGNvbG9yOiByZ2IoOTgsIDk4LCA5OCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIC5BYmllcnRvIHtcbiAgICAgICAgY29sb3I6ICMwOGE4MmE7XG4gICAgICB9XG4gICAgXG4gICAgICAuQ2VycmFkbyB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB9XG4gICAgXG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICBcbiAgICAgIC53cmFwLWltZy1yZWNlbnRzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNGM0YzRjO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIFxuICAgICAgICAgICAgLnBsLTEwIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIC5yYWl0aW5nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1cHg7dG9wOiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRkY5NTA1O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIH1cbiAgICBcbiAgICBcbn1cbiAgICBcbi5pbWdfcmFkaXVzIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICBcbiAgLnRhZ19jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTIlO2xlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuXG4ubGFzdGRpc2NoZXMge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDE0cHggMTNweCAxNHB4IC04cHggcmdiYSgwLDAsMCwwLjI4KTtcbiAgLW1vei1ib3gtc2hhZG93OiAxNHB4IDEzcHggMTRweCAtOHB4IHJnYmEoMCwwLDAsMC4yOCk7XG4gIGJveC1zaGFkb3c6IDE0cHggMTNweCAxNHB4IC04cHggcmdiYSgwLDAsMCwwLjI4KTtcbn1cblxuLy8gVGlwb3MgZGUgY29taWRhXG4ua2luZF9mb29kIHtcblxuICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgYm94LXNoYWRvdzogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC53cmFwLWltZy1raW5kZm9vZCB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLndyYXAtYm94LWtmIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdG9wOiAwO2xlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLDQwLDM4LDAuNCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgaDYge1xuICAgICAgICBjb2xvcjogcmdiKDI0NiwgMjQ2LCAyNDYpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7cmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjoyOHB4IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udGFnX2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04cHg7bGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG5cbn0iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbnAge1xuICBwYWRkaW5nOiAxMHB4IDJweDtcbn1cblxuLnRyZW5kIHtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG59XG5cbmlvbi1iYWNrZHJvcCB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLkFsbEVsZW1lbnRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5BbGxFbGVtZW50cyAucmVndWxhci1pdGVtcyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5BbGxFbGVtZW50cyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLkFsbEVsZW1lbnRzIGEgaDMge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uQWxsRWxlbWVudHMgYSBzbWFsbCB7XG4gIGNvbG9yOiAjNjI2MjYyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5BbGxFbGVtZW50cyAud3JhcC1pbWctaXRlbXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5BbGxFbGVtZW50cyAud3JhcC1pbWctaXRlbXM6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMDEwMTAxO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAxMDEwMSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTglKTtcbiAgei1pbmRleDogMTtcbn1cbi5BbGxFbGVtZW50cyAud3JhcC1pbWctaXRlbXMgLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMTBweCAwO1xuICB6LWluZGV4OiA1MDtcbn1cbi5BbGxFbGVtZW50cyAud3JhcC1pbWctaXRlbXMgLnRleHQgaDMge1xuICBjb2xvcjogI2ZmZjtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbn1cbi5BbGxFbGVtZW50cyAud3JhcC1pbWctaXRlbXMgLnRleHQgc21hbGwge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5BbGxFbGVtZW50cyAuQWJpZXJ0byB7XG4gIGNvbG9yOiAjMDhhODJhO1xufVxuLkFsbEVsZW1lbnRzIC5DZXJyYWRvIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5BbGxFbGVtZW50cyAjaW5mby1jYXJkIC5pbmZvIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzRjNGM0YztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLkFsbEVsZW1lbnRzICNpbmZvLWNhcmQgLmluZm8gaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uQWxsRWxlbWVudHMgLnJhaXRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjk1MDU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgei1pbmRleDogNTA7XG59XG5cbi53cmFwX2luZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud3JhcF9pbmZvIGlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjk1MDU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgei1pbmRleDogNTA7XG59XG5cbi5yZWNlbnRJdGVtcyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbi5yZWNlbnRJdGVtcyBhIGgyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ucmVjZW50SXRlbXMgYSBzbWFsbCB7XG4gIGNvbG9yOiAjNjI2MjYyO1xufVxuLnJlY2VudEl0ZW1zIGEgaDMge1xuICBjb2xvcjogIzYyNjI2Mjtcbn1cbi5yZWNlbnRJdGVtcyAuQWJpZXJ0byB7XG4gIGNvbG9yOiAjMDhhODJhO1xufVxuLnJlY2VudEl0ZW1zIC5DZXJyYWRvIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5yZWNlbnRJdGVtcyBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLnJlY2VudEl0ZW1zIC53cmFwLWltZy1yZWNlbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucmVjZW50SXRlbXMgaW9uLWxhYmVsIC5pbmZvIHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzRjNGM0YztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnJlY2VudEl0ZW1zIGlvbi1sYWJlbCAuaW5mbyBzcGFuIC5wbC0xMCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5yZWNlbnRJdGVtcyBpb24tbGFiZWwgLmluZm8gc3BhbiBzdHJvbmcge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJlY2VudEl0ZW1zIC5yYWl0aW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogNXB4O1xuICB6LWluZGV4OiAxMDA7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjk1MDU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5pbWdfcmFkaXVzIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5pbWdfcmFkaXVzIC50YWdfY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxhc3RkaXNjaGVzIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxNHB4IDEzcHggMTRweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIC1tb3otYm94LXNoYWRvdzogMTRweCAxM3B4IDE0cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBib3gtc2hhZG93OiAxNHB4IDEzcHggMTRweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XG59XG5cbi5raW5kX2Zvb2QgLnN3aXBlci1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ua2luZF9mb29kIC53cmFwLWltZy1raW5kZm9vZCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5raW5kX2Zvb2QgLndyYXAtaW1nLWtpbmRmb29kIC53cmFwLWJveC1rZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA0MCwgMzgsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ua2luZF9mb29kIC53cmFwLWltZy1raW5kZm9vZCAud3JhcC1ib3gta2YgaDYge1xuICBjb2xvcjogI2Y2ZjZmNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAyOHB4IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50YWdfY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");





let HomePage = class HomePage {
    constructor(server, nav, events, keyboard, loadingController, menu, toastController) {
        this.server = server;
        this.nav = nav;
        this.events = events;
        this.keyboard = keyboard;
        this.loadingController = loadingController;
        this.menu = menu;
        this.toastController = toastController;
        this.BannerOption = {
            initialSlide: 0,
            slidesPerView: 2.3,
            loop: false,
            centeredSlides: false,
            autoplay: true,
            speed: 500,
            spaceBetween: 7,
        };
        this.SearchOption = {
            initialSlide: 0,
            slidesPerView: 3.5,
            loop: false,
            centeredSlides: false,
            autoplay: false,
            speed: 500,
            spaceBetween: -20,
        };
        this.TrendOption = {
            initialSlide: 0,
            slidesPerView: 1.4,
            loop: false,
            centeredSlides: false,
            autoplay: false,
            speed: 800,
            spaceBetween: -9,
        };
        this.MiddleBannerOption = {
            initialSlide: 0,
            slidesPerView: 1,
            loop: false,
            centeredSlides: true,
            autoplay: true,
            speed: 800,
            spaceBetween: 4,
        };
        this.fakeData = [1, 2, 3, 4, 5, 6, 7];
        this.showLoading = false;
        this.hasSearch = false;
        this.loadRecentItems = false;
        this.RecentsItems = {
            initialSlide: 0,
            slidesPerView: 1.5,
            freeMode: true,
            loop: false,
            centeredSlides: false,
            autoplay: false,
            speed: 800,
            spaceBetween: 1,
        };
        this.RecentsStore = [];
        this.LastVisitStore = [];
        this.loadRegularitems = false;
        this.LastPlatillos = {
            initialSlide: 0,
            slidesPerView: 1.2,
            freeMode: true,
            loop: false,
            centeredSlides: false,
            autoplay: true,
            speed: 800,
            spaceBetween: 9,
        };
        this.lastDishes = [];
        this.loadSliderKf = false;
        // Inicialiamos el slider de KindofFood
        this.kind_food = {
            slidesPerView: 'auto',
            spaceBetween: 10,
            freeMode: true
        };
        this.fk_items = [];
        this.isKeyboardHide = true;
        this.ComerceRest = [];
    }
    ionViewWillEnter() {
        this.menu.enable(true);
        this.keyboard.onKeyboardWillShow().subscribe(() => {
            this.isKeyboardHide = false;
        });
        this.keyboard.onKeyboardWillHide().subscribe(() => {
            this.isKeyboardHide = true;
        });
        if (!localStorage.getItem('user_id')) {
            this.nav.navigateRoot('/welcome');
        }
        else {
            if (localStorage.getItem('user_id') == 'null') {
                this.nav.navigateRoot('/welcome');
            }
        }
        if (localStorage.getItem('app_text')) {
            this.text = JSON.parse(localStorage.getItem('app_text'));
        }
        this.city_name = localStorage.getItem('city_name');
        this.city_id = localStorage.getItem('city_id');
        this.server.cartCount(localStorage.getItem('cart_no') + "?user_id=" + localStorage.getItem('user_id')).subscribe((response) => {
            this.count = response.data;
            this.order = response.order;
        });
        this.verifyUser();
        this.loadData(localStorage.getItem('city_id') + "?ss=ss");
    }
    ngOnInit() {
        this.searchQuery = null;
        this.hasSearch = false;
    }
    clearSearch() {
        this.searchQuery = null;
        this.hasSearch = false;
        this.loadData(localStorage.getItem('city_id') + "?ss=ss");
    }
    nearBy() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.delay(500);
            const loading = yield this.loadingController.create({
                message: 'Cargando...',
            });
            yield loading.present();
            this.nearby = true;
            this.data.store.sort((a, b) => {
                loading.dismiss();
                return parseFloat(a.km) - parseFloat(b.km);
            });
            // this.loadData(localStorage.getItem('city_id')+"?ss=ss"+"&lat="+localStorage.getItem('current_lat')+"&lng="+localStorage.getItem('current_lng'));
        });
    }
    loadData(city_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.data = null;
            this.nearby = false;
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            // Obtenemos las coordenadas
            this.server.getGeolocation();
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            this.server.homepage(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((response) => {
                console.log(response);
                this.data = response.data;
                this.text = response.data.text;
                this.events.publish('text', this.text);
                this.events.publish('admin', response.data.admin);
                localStorage.setItem('app_text', JSON.stringify(response.data.text));
                localStorage.setItem('admin', JSON.stringify(response.data.admin));
                this.loadRecentItems = true;
                this.loadRegularitems = true;
                this.loadSliderKf = true;
                // Obtenemos los comercios de donde se ha pedido comida
                this.getLastCommPed();
                // Obtenemos todas la categorias
                this.getTypeStore(response.data.Categorys);
                // Ordenamos por los locales mas recientes
                this.data.store.sort((a, b) => {
                    return parseFloat(b.id) - parseFloat(a.id);
                });
                this.ComerceRest = [];
                for (let r = 3; r < response.data.store.length; r++) {
                    const element = response.data.store[r];
                    this.ComerceRest.push(element);
                }
                this.GetRecentStore(response.data.store);
            });
        });
    }
    verifyUser() {
        this.server.userInfo(localStorage.getItem('user_id')).subscribe((response) => {
            if (response.data) {
                if (response.data.phone == 'null') {
                    this.nav.navigateBack('/chkphone');
                }
                else if (response.data.status == 1) {
                    this.nav.navigateBack('/locked');
                }
                else if (response.data.password == response.data.pswfacebook) {
                    this.presentToast("Te recomendamos cambiar tu contraseña", "danger");
                }
            }
            else {
                localStorage.removeItem('user_id');
                this.nav.navigateBack('/welcome');
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
        this.RecentsStore.sort((a, b) => {
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
            this.LastVisitStore.sort((a, b) => {
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
    getTypeStore(List_type) {
        this.fk_items = []; // Limpiamos
        List_type.forEach(element => {
            if (element.status == 0) {
                this.fk_items.push({ 'Name': element.name, 'Img': element.img });
            }
        });
        this.fk_items.reverse();
    }
    trashLasComm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            localStorage.removeItem('LastStore');
            this.loadData(localStorage.getItem('city_id') + "?ss=ss");
        });
    }
    search(ev) {
        var val = ev.target.value;
        if (val && val.length > 0) {
            this.data = null;
            this.hasSearch = val;
            let search = localStorage.getItem('city_id') + "?q=" + val;
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            this.server.homepage(search + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((response) => {
                this.data = response.data;
                this.text = response.data.text;
                this.events.publish('text', this.text);
                this.events.publish('admin', response.data.admin);
                localStorage.setItem('app_text', JSON.stringify(response.data.text));
                localStorage.setItem('admin', JSON.stringify(response.data.admin));
                this.loadRecentItems = true;
                this.loadRegularitems = true;
                this.loadSliderKf = true;
                // Obtenemos los comercios de donde se ha pedido comida
                this.getLastCommPed();
                // Obtenemos todas la categorias
                this.getTypeStore(response.data.Categorys);
                // Ordenamos por los locales mas recientes
                this.data.store.sort((a, b) => {
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
        else {
            this.ngOnInit();
            this.hasSearch = false;
        }
    }
    dataFilter(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.filterPress = type;
            console.log(type);
            yield this.delay(500);
            const loading = yield this.loadingController.create({
                message: 'Cargando...',
            });
            yield loading.present();
            if (type == 1) {
                this.ComerceRest.sort((a, b) => {
                    this.filterPress = 0;
                    loading.dismiss();
                    return parseFloat(b.discount_value) - parseFloat(a.discount_value);
                });
            }
            else if (type == 2) {
                this.ComerceRest.sort((a, b) => {
                    this.filterPress = 0;
                    loading.dismiss();
                    return parseFloat(a.delivery_charges_value.duration) - parseFloat(b.delivery_charges_value.duration);
                });
            }
            else if (type == 3) {
                this.ComerceRest.sort((a, b) => {
                    this.filterPress = 0;
                    loading.dismiss();
                    return parseFloat(b.trending) - parseFloat(a.trending);
                });
            }
            else if (type == 4) {
                this.ComerceRest.sort((a, b) => {
                    this.filterPress = 0;
                    loading.dismiss();
                    return parseFloat(b.id) - parseFloat(a.id);
                });
            }
            else if (type == 5) {
                this.ComerceRest.sort((a, b) => {
                    this.filterPress = 0;
                    loading.dismiss();
                    return parseFloat(b.rating) - parseFloat(a.rating);
                });
            }
        });
    }
    delay(ms) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise(resolve => setTimeout(resolve, ms));
        });
    }
    bannerLink(offer) {
        if (offer.link) {
            let city_id = localStorage.getItem('city_id') + "?banner=" + offer.id;
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            this.server.homepage(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((response) => {
                this.itemPage(response.data.store[0]);
            });
        }
    }
    doRefresh(event) {
        this.loadData(localStorage.getItem('city_id') + "?ss=ss");
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    itemPage(storeData) {
        if (storeData.open) {
            if (storeData.max_distance == 1) {
                localStorage.setItem('menu_item', JSON.stringify(storeData));
                this.nav.navigateForward('/item');
            }
        }
    }
    ViewCat(Name) {
        let navigationExtras = {
            queryParams: {
                Cat: Name
            }
        };
        this.nav.navigateForward(['/categorys'], navigationExtras);
    }
    presentToast(txt, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 3000,
                position: 'top',
                mode: 'ios',
                color: color
            });
            toast.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map