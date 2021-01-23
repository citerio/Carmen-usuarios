(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n<ion-toolbar color=\"white\">\n<ion-buttons slot=\"start\" mode=\"ios\">\n    <ion-back-button></ion-back-button>\n    <ion-title *ngIf=\"data && data.total > 0\">Verifica tu orden</ion-title>    \n    <!-- <ion-title *ngIf=\"data.total == 0\"></ion-title> -->\n</ion-buttons>\n\n<ion-buttons slot=\"end\" *ngIf=\"data\">{{ data.total | currency }} &nbsp;</ion-buttons>\n\n</ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n\n<div mode=\"ios\" style=\"width: 100%;\" class=\"welcome-card\">\n  <ion-list id=\"skeleton\" *ngIf=\"!data\">\n  <ion-list-header>\n  <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n  </ion-list-header>\n\n  <ion-item *ngFor=\"let fake of fakeData\">\n  <ion-thumbnail slot=\"start\">\n  <ion-skeleton-text></ion-skeleton-text>\n  </ion-thumbnail>\n  <ion-label>\n  <h3>\n  <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n  </h3>\n  <p>\n  <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n  </p>\n  <p>\n  <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n  </p>\n  </ion-label>\n  </ion-item>\n\n  </ion-list>\n\n  <ion-card-header *ngIf=\"data\" style=\"text-align: center;\">\n    <ion-card-title style=\"font-size: 18px\" *ngIf=\"data.total == 0\">Opps! tu carrito esta vacio</ion-card-title>\n    <ion-card-subtitle *ngIf=\"data.total > 0\">{{ data.store }}</ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content *ngIf=\"data\" style=\"text-align: center;\">\n    <img src=\"https://firebasestorage.googleapis.com/v0/b/deliveryapp-faa82.appspot.com/o/FCMImages%2Fempty-cart-.png?alt=media&token=ee0c95ce-e0af-4f70-887d-835857fed044\" style=\"width: 100%;margin: 0 auto;padding-top:25px;\" *ngIf=\"data.total == 0\">\n    <ion-button routerLink=\"/home\" style=\"margin: auto;\" color=\"primary\" routerDirection=\"root\" *ngIf=\"data.total == 0\">Realizar Busqueda</ion-button>\n\n    <ion-row class=\"border_bottom\" *ngFor=\"let item of data.data\">\n\n    <ion-col size=\"2\">\n      <!-- <div class=\"pic_menu\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div> -->\n      <span style=\"color: green;\">{{ item.qty }}X</span>\n    </ion-col>\n    <ion-col size=\"7\" style=\"padding: 0px 10px; text-align: left;\">\n      <b>{{ item.item }}</b><br />\n      (<small>{{item.qtyName}}</small>)\n      <span *ngIf=\"item.addon.length > 0\">\n        <small *ngFor=\"let addon of item.addon\"><br>{{ addon.name }} - {{ data.currency }}{{ addon.price }}</small>\t\n      </span>\n      <br>\n      <ion-icon name=\"remove-circle-outline\" style=\"font-size: 26px\" color=\"danger\" (click)=\"updateCart(item.id,0)\"></ion-icon>\n      <ion-icon name=\"add-circle-outline\" style=\"font-size: 26px;margin-left: 15px;margin-top: 10px\" color=\"dark\" (click)=\"updateCart(item.id,1)\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"3\">\n    {{ item.price | currency}}\n    </ion-col>\n    </ion-row>\n\n  </ion-card-content>\n</div>\n\n<ion-row class=\"ion-padding fontSize\" *ngIf=\"data && data.total > 0\">\n\n  <ion-col size=\"8\" class=\"border_bottom_only\">{{ text.cart_total }}</ion-col>\n  <ion-col size=\"4\" class=\"border_bottom_only\">{{ data.subTotal | currency }}</ion-col>\n\n  <ion-col size=\"8\" class=\"border_bottom_only\" *ngIf=\"data.d_charges.costs_ship > 0\">{{ text.cart_delivery }}</ion-col>\n  <ion-col size=\"4\" class=\"border_bottom_only\" *ngIf=\"data.d_charges.costs_ship > 0\">{{ data.d_charges.costs_ship  | currency}}</ion-col>\n\n\n  <ion-col size=\"8\" class=\"border_bottom_only\" *ngIf=\"data.d_charges.duration != 0\">Tiempos de envio</ion-col>\n  <ion-col size=\"4\" class=\"border_bottom_only\" *ngIf=\"data.d_charges.duration != 0\">{{ data.d_charges.duration}}</ion-col>\n\n  \n  <ion-col size=\"8\" class=\"border_bottom_only\" *ngIf=\"data.discount > 0\">{{ text.cart_discount }}</ion-col>\n  <ion-col size=\"4\" class=\"border_bottom_only\" *ngIf=\"data.discount > 0\">{{ data.discount | currency}}</ion-col>\n\n  <ion-col size=\"8\" class=\"border_bottom_only\" *ngIf=\"data.discount == 0\">{{ text.cart_coupon }}</ion-col>\n  <ion-col size=\"4\" class=\"border_bottom_only\" *ngIf=\"data.discount == 0\"><a (click)=\"coupen()\">{{ text.cart_apply }}</a></ion-col>\n\n  <ion-col size=\"8\" class=\"border_bottom_only\">{{ text.cart_payable }}</ion-col>\n  <ion-col size=\"4\" class=\"border_bottom_only\"><b>{{ data.total | currency}}</b></ion-col>\n</ion-row>\n\n\n<div mode=\"ios\" *ngIf=\"data && data.total > 0 && dataAddress && otype == 1\">\n\n  <ion-card-header>\n    <ion-card-title>Selecciona la ubicación de entrega </ion-card-title>\n    <small>( El total de envió varia con base en la distancia )</small>\n  </ion-card-header>\n  \n  <ion-card-content>\n  \n  <ion-list *ngIf=\"dataAddress.address.length > 0\">\n  \n    <ion-item-sliding *ngFor=\"let a of dataAddress.address\">\n      <ion-item>\n        <ion-label style=\"font-size: 14px;\">{{ a.address }}</ion-label>\n        <ion-radio slot=\"start\" value=\"{{ a.id }}\" (ionSelect)=\"setAddress(a)\" [checked]=\"a.id == address\"></ion-radio>\n      </ion-item>\n  \n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"removeAddress(a.id)\">\n          <ion-icon name=\"trash\"></ion-icon>\n          Eliminar\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  \n    <br>\n    <ion-button size=\"small\" fill=\"outline\" routerLink=\"/address\" routerDirection=\"forward\">Agregar otra dirección</ion-button>\n  </ion-list>\n\n\n  <ion-row *ngIf=\"dataAddress.address.length == 0\">\n  \n    <ion-col size=\"12\">\n      <ion-button size=\"small\" fill=\"outline\" routerLink=\"/address\" routerDirection=\"forward\">Agregar Nueva dirección</ion-button>\n    </ion-col>\n    \n  </ion-row>\n  \n  </ion-card-content>\n  \n</div>\n\n\n<div class=\"ion-padding\" *ngIf=\"data && data.total > 0\">\n<ion-button expand=\"block\" size=\"large\" type=\"button\" mode=\"ios\" [disabled]=\"!address\"  routerLink=\"/checkout\" routerDirection=\"forward\">Realizar compra</ion-button><br>\n</div>\n</ion-content>\n\n\n<ion-footer *ngIf=\"text\">\n    <ion-toolbar mode=\"ios\">\n    \n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\">\n        \n       <ion-tab-button routerLink=\"/home\">\n          <ion-icon name=\"home\"></ion-icon>\n          <ion-label>{{ text.home_footer_name }}</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button routerLink=\"/home\">\n          <ion-icon name=\"pin\"></ion-icon>\n          <ion-label>{{ text.home_nearest }}</ion-label>\n        </ion-tab-button>\n    \n     \n        <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\n          <ion-icon name=\"person\"></ion-icon>\n          <ion-label>{{ text.home_profile }}</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n    \n    </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/cart/cart.module.ts":
  /*!*************************************!*\
    !*** ./src/app/cart/cart.module.ts ***!
    \*************************************/

  /*! exports provided: CartPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
      return CartPageModule;
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


    var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/cart/cart.page.ts");

    const routes = [{
      path: '',
      component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }];
    let CartPageModule = class CartPageModule {};
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })], CartPageModule);
    /***/
  },

  /***/
  "./src/app/cart/cart.page.scss":
  /*!*************************************!*\
    !*** ./src/app/cart/cart.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".border_bottom {\n  border-bottom: 1px solid #f3f3f3;\n}\n\n.border_bottom_only {\n  border-bottom: 1px solid #f3f3f3;\n  padding: 10px 10px 10px 10px;\n}\n\n.fontSize {\n  font-size: 13px;\n}\n\n.pic_menu {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9DOlxcaW9uaWNcXGNhcm1lbmFwcFxcdXN1YXJpb3Mvc3JjXFxhcHBcXGNhcnRcXGNhcnQucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMsZ0NBQUE7QUNBRDs7QURJQTtFQUVDLGdDQUFBO0VBQ0EsNEJBQUE7QUNGRDs7QURLQTtFQUVDLGVBQUE7QUNIRDs7QURNQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDSEQiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlcl9ib3R0b21cbntcblx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2YzZjNmMztcblx0XG59XG5cbi5ib3JkZXJfYm90dG9tX29ubHlcbntcblx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2YzZjNmMztcblx0cGFkZGluZzoxMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4uZm9udFNpemVcbntcblx0Zm9udC1zaXplOjEzcHg7XG59XG5cbi5waWNfbWVudSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufSIsIi5ib3JkZXJfYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7XG59XG5cbi5ib3JkZXJfYm90dG9tX29ubHkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmMztcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLmZvbnRTaXplIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucGljX21lbnUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/cart/cart.page.ts":
  /*!***********************************!*\
    !*** ./src/app/cart/cart.page.ts ***!
    \***********************************/

  /*! exports provided: CartPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPage", function () {
      return CartPage;
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


    var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _offer_offer_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../offer/offer.page */
    "./src/app/offer/offer.page.ts");

    let CartPage = class CartPage {
      constructor(modalController, server, toastController, loadingController, nav) {
        this.modalController = modalController;
        this.server = server;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.nav = nav;
        this.cart_total = 0;
        this.Subtotal = 0;
        this.otype = 1;
        this.text = JSON.parse(localStorage.getItem('app_text'));
      }

      ionViewWillEnter() {
        if (!localStorage.getItem('user_id') || localStorage.getItem('user_id') == 'null') {
          this.nav.navigateRoot('/login');
          this.presentToast("Please login for continue.");
        } else {
          this.loadData();
        }
      }

      ngOnInit() {}

      loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
          var lat = localStorage.getItem('current_lat') ? localStorage.getItem('current_lat') : 0;
          var lng = localStorage.getItem('current_lng') ? localStorage.getItem('current_lng') : 0;
          this.server.getCart(localStorage.getItem('cart_no') + "?lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
            console.log(response);
            this.data = response.data;
            this.cart_total = response.data.total + Number(response.data.c_charges);
            var store_id = response.data.data[0].store_id;
            this.server.getDeliveryType(store_id).subscribe(data => {
              this.delivery_type = data[0][0].service_del;

              if (this.delivery_type == 0) {
                this.otype = 2;
              }
            }); // localStorage.getItem('user_id')

            this.server.getAddress(localStorage.getItem('user_id') + "?cart_no=" + localStorage.getItem('cart_no') + "&store=" + store_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
              this.dataAddress = response.data;

              if (response.data.address.length > 0) {// this.address      = response.data.address[0].id; // Marcamos la primer opcion que tenga
              } else {
                this.nav.navigateRoot('/address');
              }
            });
          });
        });
      }

      setAddress(address) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Espere porfavor...',
            mode: 'ios'
          });
          yield loading.present();
          this.address = address.id;
          var lat = address.lat;
          var lng = address.lng;
          localStorage.setItem("address_id", this.address);
          localStorage.setItem("current_lat", lat);
          localStorage.setItem("current_lng", lng);
          this.loadData();
          loading.dismiss();
        });
      }

      removeAddress(id) {
        this.server.trashAddress(id).subscribe(data => {
          if (data) {
            this.presentToast("La dirección se ha eliminado...");
            this.ionViewWillEnter();
          } else {
            this.presentToast(data);
          }
        });
      }

      updateCart(id, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Cargando...',
            mode: 'ios'
          });
          yield loading.present();
          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          this.server.updateCart(id, type + "?lid=" + localStorage.getItem('lid') + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
            this.data = response.data;
            this.cart_total = response.data.total + Number(response.data.c_charges);
            loading.dismiss();
          });
        });
      }

      presentToast(txt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: txt,
            duration: 2000,
            position: 'bottom'
          });
          toast.present();
        });
      }

      coupen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalController.create({
            component: _offer_offer_page__WEBPACK_IMPORTED_MODULE_4__["OfferPage"],
            animated: true,
            mode: 'ios',
            cssClass: 'my-custom-modal-css',
            backdropDismiss: false
          });
          modal.onDidDismiss().then(data => {
            if (data.data.id) {
              this.applyCoupen(data.data.id);
            }
          });
          return yield modal.present();
        });
      }

      applyCoupen(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Please wait...',
            mode: 'ios'
          });
          yield loading.present();
          this.server.applyCoupen(id, localStorage.getItem('cart_no') + "?lid=" + localStorage.getItem('lid')).subscribe(response => {
            if (response.msg == "done") {
              this.data = response.data;
            } else {
              this.presentToast(response.msg);
            }

            loading.dismiss();
          });
        });
      }

    };

    CartPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }];

    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.page.scss */
      "./src/app/cart/cart.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], CartPage);
    /***/
  }
}]);
//# sourceMappingURL=cart-cart-module-es5.js.map