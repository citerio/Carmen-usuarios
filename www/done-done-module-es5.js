(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["done-done-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/done/done.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/done/done.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n<ion-toolbar color=\"primary\">\n<ion-buttons slot=\"start\" routerLink=\"/home\" routerDirection=\"root\">\n    <ion-icon name=\"home\" style=\"font-size: 29px\"></ion-icon>\n    </ion-buttons>\n\n<ion-buttons slot=\"end\"><ion-button fill=\"outline\" mode=\"ios\" size=\"small\" routerLink=\"/order\" routerDirection=\"forward\">View Order Detail</ion-button></ion-buttons>\n\n</ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n\n<div style=\"width:100%;background-color: #FF0000;height: 80px;color:white\">\n&nbsp;\n\n</div>\n\n<ion-card mode=\"ios\" style=\"margin-top: -15%;background-color: white;width: 98%;margin-left: 1%\" class=\"welcome-card\">\n\n<ion-card-header>\n\n<ion-card-title>{{ text.confirm_title }}</ion-card-title>\n<ion-card-subtitle><ion-icon name=\"restaurant\"></ion-icon> {{ data.store }}</ion-card-subtitle>\n\n</ion-card-header>\n\n</ion-card>\n\n<div class=\"ion-padding\">\n\n<p style=\"font-size: 12px\" *ngIf=\"status == 0\">Pedido realizado con éxito. Esperando confirmación del restaurante</p>\n<p style=\"font-size: 12px\" *ngIf=\"status == 1 && type == 1\">Orden confirmada. Tu comida está siendo preparada.</p>\n<p style=\"font-size: 12px\" *ngIf=\"status == 1 && type == 2\">Orden confirmada. Tu comida está siendo preparada, Se te notificará cuando esté lista</p>\n<p style=\"font-size: 12px\" *ngIf=\"status == 1 && type == 7\">Tu orden está lista para recoger</p>\n<p style=\"font-size: 12px\" *ngIf=\"status == 3\">Se ha asignado un repartidor a tu pedido.</p>\n<p style=\"font-size: 12px\" *ngIf=\"status == 4\">Tu Orden esta en ruta!!</p>\n\n<div class=\"map-wrapper\" *ngIf=\"status == 4\">\n<div id=\"map_center\">\n<img src=\"assets/d.png\"/>\n</div>\n<div #map id=\"map\"></div>\n\n<p>{{address}}</p>\n\n</div>\n  \n<ion-progress-bar value=\"{{ progress }}\" buffer=\"0.5\"></ion-progress-bar>\n</div>\n\n<ion-card mode=\"ios\" class=\"welcome-card\" style=\"width: 98%;margin-left: 1%\">\n\n<ion-card-header>\n\n<ion-card-title>Order Status</ion-card-title>\n\n</ion-card-header>\n\n<ion-list lines=\"none\">\n\n<ion-item routerLink=\"/order\" routerDirection=\"forward\">\n<ion-icon slot=\"start\" color=\"primary\" name=\"cart\"></ion-icon>\n<ion-label>Pedido realizado</ion-label>\n</ion-item>\n\n<ion-item>\n<ion-icon slot=\"start\" [color]=\"getColor(1)\" name=\"checkmark-circle\"></ion-icon>\n<ion-label [class.light]=\"status < 1\">Orden confirmada</ion-label>\n</ion-item>\n\n<ion-item *ngIf=\"type == 1\">\n<ion-icon slot=\"start\" [color]=\"getColor(3)\" name=\"link\"></ion-icon>\n<ion-label [class.light]=\"status < 3\">Repartidor asignado</ion-label>\n</ion-item>\n\n<ion-item>\n<ion-icon slot=\"start\" [color]=\"getColor(4)\" name=\"bus\"></ion-icon>\n<ion-label [class.light]=\"status < 4\">Orden recogida</ion-label>\n</ion-item>\n\n</ion-list>\n\n</ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/done/done.module.ts":
  /*!*************************************!*\
    !*** ./src/app/done/done.module.ts ***!
    \*************************************/

  /*! exports provided: DonePageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonePageModule", function () {
      return DonePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _done_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./done.page */
    "./src/app/done/done.page.ts");

    const routes = [{
      path: '',
      component: _done_page__WEBPACK_IMPORTED_MODULE_6__["DonePage"]
    }];
    let DonePageModule = class DonePageModule {};
    DonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_done_page__WEBPACK_IMPORTED_MODULE_6__["DonePage"]]
    })], DonePageModule);
    /***/
  },

  /***/
  "./src/app/done/done.page.scss":
  /*!*************************************!*\
    !*** ./src/app/done/done.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item ion-label {\n  font-size: 12px;\n}\n\nion-item small {\n  font-size: 12px;\n  color: gray;\n  margin-right: 10%;\n}\n\nion-content {\n  --background:#f9f8f8;\n}\n\n.light {\n  color: gray;\n}\n\n#map_canvas {\n  width: 90%;\n  height: 60%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 60vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 60px;\n  width: 60px;\n  top: 50%;\n  left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uZS9DOlxcaW9uaWNcXGNhcm1lbmFwcFxcdXN1YXJpb3Mvc3JjXFxhcHBcXGRvbmVcXGRvbmUucGFnZS5zY3NzIiwic3JjL2FwcC9kb25lL2RvbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMsZUFBQTtBQ0FEOztBREdBO0VBRUMsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0REOztBRElBO0VBRUMsb0JBQUE7QUNGRDs7QURLQTtFQUVDLFdBQUE7QUNIRDs7QURNQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNIRjs7QURPQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtBQ0pGOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvZG9uZS9kb25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIGlvbi1sYWJlbFxue1xuXHRmb250LXNpemU6MTJweDtcbn1cblxuaW9uLWl0ZW0gc21hbGxcbntcblx0Zm9udC1zaXplOjEycHg7XG5cdGNvbG9yOmdyYXk7XG5cdG1hcmdpbi1yaWdodDoxMCVcbn1cblxuaW9uLWNvbnRlbnRcbntcblx0LS1iYWNrZ3JvdW5kOiNmOWY4Zjg7XG59XG5cbi5saWdodFxue1xuXHRjb2xvcjpncmF5O1xufVxuXG4jbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNjAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4gXG4gXG4jYWRkcmVzcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4gXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjB2aDtcbn1cbiBcbi5tYXAtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiBcbiAgI21hcF9jZW50ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICB9XG59IiwiaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24taXRlbSBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDojZjlmOGY4O1xufVxuXG4ubGlnaHQge1xuICBjb2xvcjogZ3JheTtcbn1cblxuI21hcF9jYW52YXMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4jYWRkcmVzcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHZoO1xufVxuXG4ubWFwLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFwLXdyYXBwZXIgI21hcF9jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/done/done.page.ts":
  /*!***********************************!*\
    !*** ./src/app/done/done.page.ts ***!
    \***********************************/

  /*! exports provided: DonePage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonePage", function () {
      return DonePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let DonePage = class DonePage {
      constructor(toastController, nav, server, geolocation, nativeGeocoder, renderer, _document) {
        this.toastController = toastController;
        this.nav = nav;
        this.server = server;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.renderer = renderer;
        this._document = _document;
        this.status = 0;
        this.progress = 0.016;
        this.apiKey = "AIzaSyCbPKnHBd-WUUPQezPIiypp0uhdfeHESDc";
      }

      ngOnInit() {
        this.data = JSON.parse(localStorage.getItem('order_data'));
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.currency = this.data.currency;
        this.data = this.data.data;
        this.getStatus();
        this.Interval_1 = setInterval(() => {
          this.progress = 0.016;
          this.getStatus();
        }, 2000);
        this.Intervarl_2 = setInterval(() => {
          this.progress = this.progress * 1 + 0.016;
        }, 1000);
      }

      getStatus() {
        this.server.getStatus(this.data.id).subscribe(response => {
          this.status = response.data.status;
          this.type = response.data.type;
          console.log(this.type);

          if (this.status == 4) {
            this.injectSDK().then(res => {
              this.loadMap(response.dboy);
            });
          }

          if (this.status == 2) {
            this.presentToast("¡Lo siento! Su pedido ha sido cancelado.");
            this.nav.navigateRoot('order');
            clearInterval(this.Interval_1);
            clearInterval(this.Intervarl_2);
          }

          if (this.status == 5) {
            this.presentToast("Pedido entregado con éxito");
            localStorage.removeItem('menu_item');
            localStorage.removeItem('order_data');
            clearInterval(this.Interval_1);
            clearInterval(this.Intervarl_2);
            this.nav.navigateRoot('order');
          }
        });
      }

      getColor(id) {
        if (id == 1) {
          if (this.status < 1) {
            return "medium";
          }
        } else if (id == 3) {
          if (this.status < 3) {
            return "medium";
          }
        } else if (id == 4) {
          if (this.status < 4) {
            return "medium";
          }
        }

        return "primary";
      }

      loadMap(dboy) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.geolocation.getCurrentPosition().then(resp => {
            let latLng = new google.maps.LatLng(dboy.lat, dboy.lng);
            let mapOptions = {
              center: latLng,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          }).catch(error => {
            console.log('Error getting location', error);
          });
        });
      }

      getAddressFromCoords(lattitude, longitude) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log("getAddressFromCoords " + lattitude + " " + longitude);
          let options = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(lattitude, longitude, options).then(result => {
            this.address = "";
            let responseAddress = [];

            for (let [key, value] of Object.entries(result[0])) {
              if (value.length > 0) responseAddress.push(value);
            }

            responseAddress.reverse();

            for (let value of responseAddress) {
              this.address += value + ", ";
            }

            this.address = this.address.slice(0, -2);
          }).catch(error => {
            this.address = "Dirección no disponible!";
          });
        });
      }

      injectSDK() {
        return new Promise((resolve, reject) => {
          window['mapInit'] = () => {
            resolve(true);
          };

          let script = this.renderer.createElement('script');
          script.id = 'googleMaps';

          if (this.apiKey) {
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
          } else {
            script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
          }

          this.renderer.appendChild(this._document.body, script);
        });
      }

      presentToast(txt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: txt,
            duration: 3000,
            position: 'top',
            mode: 'ios',
            color: 'dark'
          });
          toast.present();
        });
      }

    };

    DonePage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
    }, {
      type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
    }, {
      type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DonePage.prototype, "mapElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('directionsPanel', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DonePage.prototype, "directionsPanel", void 0);
    DonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-done',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./done.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/done/done.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./done.page.scss */
      "./src/app/done/done.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object])], DonePage);
    /***/
  }
}]);
//# sourceMappingURL=done-done-module-es5.js.map