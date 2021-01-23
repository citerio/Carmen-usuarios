(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-address-address-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/address/address.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/address/address.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n  <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n       <ion-button (click)=\"loadMap()\" shape=\"round\" fill=\"outline\" style=\"font-size: 12px\">\n        <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n        Mi ubicación\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title> </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n \n  \n<div class=\"map-wrapper\">\n<div id=\"map_center\">\n  <img src=\"assets/map-marker.png\" width=\"30px\" />\n</div>\n<div #map id=\"map\"></div>\n</div>\n<div id=\"address\">\n\n<form #form=\"ngForm\" (ngSubmit)=\"saveAddress(form.value)\">\n\n\n<ion-item>\n  <ion-label position=\"floating\">{{ text.add_address }}</ion-label>\n  <ion-textarea [(ngModel)]=\"address\" name=\"address\" required></ion-textarea>\n</ion-item>\n\n<div class=\"ion-padding\">\n<ion-button expand=\"block\" mode=\"ios\" type=\"submit\" [disabled]=\"!form.valid\">Agregar dirección</ion-button>\n</div>\n</form>\n\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/account/address/address.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/account/address/address.module.ts ***!
    \***************************************************/

  /*! exports provided: AddressPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPageModule", function () {
      return AddressPageModule;
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


    var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./address.page */
    "./src/app/account/address/address.page.ts");

    const routes = [{
      path: '',
      component: _address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]
    }];
    let AddressPageModule = class AddressPageModule {};
    AddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
    })], AddressPageModule);
    /***/
  },

  /***/
  "./src/app/account/address/address.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/account/address/address.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map_canvas {\n  width: 90%;\n  height: 60%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 60vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hZGRyZXNzL0M6XFxpb25pY1xcY2FybWVuYXBwXFx1c3Vhcmlvcy9zcmNcXGFwcFxcYWNjb3VudFxcYWRkcmVzc1xcYWRkcmVzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbiBcbiBcbiNhZGRyZXNzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiBcbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHZoO1xufVxuIFxuLm1hcC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuIFxuICAjbWFwX2NlbnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xuICAgIG1hcmdpbi10b3A6IC00MXB4O1xuICB9XG59IiwiI21hcF9jYW52YXMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4jYWRkcmVzcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHZoO1xufVxuXG4ubWFwLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFwLXdyYXBwZXIgI21hcF9jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIG1hcmdpbi10b3A6IC00MXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/account/address/address.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/account/address/address.page.ts ***!
    \*************************************************/

  /*! exports provided: AddressPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPage", function () {
      return AddressPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");

    let AddressPage = class AddressPage {
      constructor(route, server, toastController, nav, loadingController, geolocation, nativeGeocoder, renderer, _document) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.renderer = renderer;
        this._document = _document;
        this.apiKey = "AIzaSyCbPKnHBd-WUUPQezPIiypp0uhdfeHESDc";
        this.text = JSON.parse(localStorage.getItem('app_text'));
      }

      ngOnInit() {
        this.injectSDK().then(res => {
          this.loadMap();
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

      loadMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.geolocation.getCurrentPosition().then(resp => {
            // 
            let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            let mapOptions = {
              center: latLng,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            console.log(resp.coords);
            this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.map.addListener('tilesloaded', () => {
              this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
            });
          }).catch(error => {
            console.log('Error al obtener la ubicación', error);
          });
        });
      }

      getAddressFromCoords(lattitude, longitude) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          var geocoder = new google.maps.Geocoder();
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
            this.address = "Ubicacion no Disponible!";
          });
        });
      }

      saveAddress(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Porfavor espere...'
          });
          yield loading.present();
          var allData = {
            address: data.address,
            lat: this.map.center.lat(),
            lng: this.map.center.lng(),
            user_id: localStorage.getItem('user_id')
          };
          this.server.saveAddress(allData).subscribe(response => {
            this.nav.back();
            this.presentToast("Dirección guardada con éxito.");
            loading.dismiss();
          });
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

    AddressPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
    }, {
      type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
    }, {
      type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
      }]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AddressPage.prototype, "mapElement", void 0);
    AddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/address/address.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./address.page.scss */
      "./src/app/account/address/address.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object])], AddressPage);
    /***/
  }
}]);
//# sourceMappingURL=account-address-address-module-es5.js.map