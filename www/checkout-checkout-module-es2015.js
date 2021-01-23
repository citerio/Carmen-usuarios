(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\">\n    &nbsp;<ion-icon slot=\"start\" name=\"arrow-back\" routerLink=\"/cart\" routerDirection=\"back\"></ion-icon> \n  </ion-buttons>\n    <ion-title>\n      \n      Pagar</ion-title>\n      \n  <ion-buttons slot=\"end\" *ngIf=\"data\">{{ total_amount | currency }} &nbsp;</ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"data\">\n\n<ion-card mode=\"ios\">\n\n<ion-card-header>\n\n<ion-card-title>Seleccionar tipo de orden</ion-card-title>\n\n</ion-card-header>\n\n<ion-card-content>\n\n<ion-list>\n\n\n<ion-item *ngIf=\"delivery_type == 0\">\n    <ion-label>Este comercio no tiene servicio a domicilio</ion-label>\n</ion-item>\n\n<ion-item *ngIf=\"delivery_type == 1\">\n<ion-label>Entrega a domicilio</ion-label>\n<ion-radio slot=\"start\" value=\"1\" (ionSelect)=\"setType(1)\" [checked]=\"otype == 1\"></ion-radio>\n</ion-item>\n\n<ion-item>\n<ion-label>Recoger en tienda (No se cobrará envío)</ion-label>\n<ion-radio slot=\"start\" value=\"2\" (ionSelect)=\"setType(2)\" [checked]=\"otype == 2\"></ion-radio>\n</ion-item>\n\n</ion-list>\n\n</ion-card-content>\n\n</ion-card>\n\n<ion-card mode=\"ios\">\n\n  <ion-card-header>\n\n  <ion-card-title>\n    Metodo de pago\n  </ion-card-title>\n\n  </ion-card-header>\n\n  <ion-card-content>\n  <ion-item style=\"font-size: 13px\">\n    <ion-label><img src=\"https://image.flaticon.com/icons/svg/760/760503.svg\" style=\"width:30px\"> Pagar en efectivo</ion-label>\n    <ion-radio slot=\"start\" value=\"1\" (ionSelect)=\"setPayment(1)\" [checked]=\"payment == 1\"></ion-radio>\n  </ion-item>\n\n  <ion-item style=\"font-size: 13px\" *ngIf=\"stripe_id\">\n    <ion-label><img src=\"https://www.flaticon.es/svg/static/icons/svg/138/138361.svg\" style=\"width: 30px\"> <span style=\"margin-top: -40px\">Pedir Terminal</span></ion-label>\n    <ion-radio slot=\"start\" value=\"4\" (ionSelect)=\"setPayment(4)\" [checked]=\"payment == 4\"></ion-radio>\n  </ion-item>\n\n  <ion-item style=\"font-size: 13px\" *ngIf=\"paypal_id\">\n  <ion-label><img src=\"assets/paypal.png\" style=\"width: 90px\"> <span style=\"margin-top: -40px\">Pagar Via Paypal</span></ion-label>\n  <ion-radio slot=\"start\" value=\"2\" (ionSelect)=\"setPayment(2)\" [checked]=\"payment == 2\"></ion-radio>\n  </ion-item>\n\n\n  <ion-item style=\"font-size: 13px\" *ngIf=\"stripe_id\">\n    <ion-label><img src=\"assets/stripe.png\" style=\"width: 150px\"> <span style=\"margin-top: -40px\">Pagar Via Stripe</span></ion-label>\n    <ion-radio slot=\"start\" value=\"3\" (ionSelect)=\"setPayment(3)\" [checked]=\"payment == 3\"></ion-radio>\n  </ion-item>\n  \n\n  <div *ngIf=\"stripeView\">\n\n    <p>Proporcione los siguientes detalles</p>\n    \n    <ion-row>\n    \n    <ion-col size=\"12\">\n    <ion-item>\n      <ion-label position=\"floating\">Card Number</ion-label>\n      <ion-input type=\"tel\" [(ngModel)]=\"card_no\" name=\"card_no\"></ion-input>\n    </ion-item>\n    </ion-col>\n    \n    <ion-col size=\"6\">\n    <ion-item>\n      <ion-label position=\"floating\">Exp Month</ion-label>\n      <ion-input type=\"tel\" [(ngModel)]=\"exp_month\" name=\"exp_month\"></ion-input>\n    </ion-item>\n    </ion-col>\n    \n    <ion-col size=\"6\">\n    <ion-item>\n      <ion-label position=\"floating\">Exp Year</ion-label>\n      <ion-input type=\"tel\" [(ngModel)]=\"exp_year\" name=\"exp_year\"></ion-input>\n    </ion-item>\n    </ion-col>\n    \n    <ion-col size=\"12\">\n    <ion-item>\n      <ion-label position=\"floating\">CVV</ion-label>\n      <ion-input type=\"tel\" [(ngModel)]=\"cvv\" name=\"cvv\"></ion-input>\n    </ion-item>\n    </ion-col>\n    \n    </ion-row>\n    \n  </div>\n  </ion-card-content>\n\n</ion-card>\n\n\n<div class=\"ion-padding\">\n\n<ion-item>\n<ion-textarea placeholder=\"Agrega Cualquier instrucción para la comida ... por ejemplo, extra picante\" [(ngModel)]=\"notes\" name=\"notes\"></ion-textarea>\n</ion-item>\n<br>\n<ion-button expand=\"block\" mode=\"ios\" type=\"button\" [disabled]=\"!formVal()\" (click)=\"makeOrder()\">Confirmar orden</ion-button>\n\n</div>\n\n<br>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");







const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }
];
let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "./src/app/checkout/checkout.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/checkout/checkout.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");






let CheckoutPage = class CheckoutPage {
    constructor(server, toastController, alertController, loadingController, nav, payPal, stripe) {
        this.server = server;
        this.toastController = toastController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.nav = nav;
        this.payPal = payPal;
        this.stripe = stripe;
        this.stripeView = false;
        this.otype = 1;
        this.user_comm_terminal = false;
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.address = localStorage.getItem('address_id');
        this.admin = JSON.parse(localStorage.getItem('admin'));
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (!localStorage.getItem('user_id') || localStorage.getItem('user_id') == 'null') {
            this.nav.navigateRoot('/login');
            this.presentToast("Please login for continue.");
        }
        else {
            this.loadData();
        }
    }
    setType(id) {
        if (id == 2) {
            this.total_amount = Number(this.total_amount) - Number(this.delivery_charges);
            this.delivery_status = false;
        }
        else {
            if (this.delivery_status == false) {
                this.total_amount = Number(this.total_amount) + Number(this.delivery_charges);
            }
        }
        this.otype = id;
        this.payment = false;
        this.stripeView = false;
    }
    formVal() {
        if (this.otype == 1) {
            if (!this.address || !this.payment) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            if (!this.payment) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    setPayment(id) {
        this.payment = id;
        if (id == 3) {
            this.stripeView = true;
            if (this.user_comm_terminal == true) {
                this.total_amount = Number(this.total_amount) - Number(this.porcent_cs);
                this.user_comm_terminal = false;
            }
        }
        else if (id == 4) {
            this.user_comm_terminal = true;
            this.UseStripe();
        }
        else {
            this.stripeView = false;
            if (this.user_comm_terminal == true) {
                this.total_amount = Number(this.total_amount) - Number(this.porcent_cs);
                this.user_comm_terminal = false;
            }
        }
    }
    UseStripe() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Advertencia',
                message: 'La comisión por pago con terminal es de <strong>' + this.comm_terminal + '%</strong>',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: () => {
                            if (this.user_comm_terminal == true) {
                                this.porcent_cs = Number(this.total_amount) * Number(this.comm_terminal) / 100;
                                this.total_amount = Number(this.total_amount) + Number(this.porcent_cs);
                                this.presentToast("La comisión ha sido aplicada...");
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Espere porfavor...',
                mode: 'ios'
            });
            yield loading.present();
            this.comm_terminal = this.admin.comm_terminal;
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            this.server.getCart(localStorage.getItem('cart_no') + "?lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((response) => {
                var store_id = response.data.data[0].store_id;
                this.server.getDeliveryType(store_id).subscribe(data => {
                    this.delivery_type = data[0][0].service_del;
                    if (this.delivery_type == 0) {
                        this.otype = 2;
                    }
                });
                // localStorage.getItem('user_id')
                this.server.getAddress(localStorage.getItem('user_id') + "?cart_no=" + localStorage.getItem('cart_no') + "&store=" + store_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((response) => {
                    this.data = response.data;
                    if (response.data.address.length > 0) {
                        // this.address      = response.data.address[0].id; // Marcamos la primer opcion que tenga
                    }
                    else {
                        this.nav.navigateRoot('/address');
                    }
                    this.total_amount = (response.data.total);
                    this.delivery_charges = response.data.Comercio.delivery_charges_value;
                    if (response.data.Comercio.Cuenta_clave) {
                        this.Cuenta_clave = response.data.Comercio.Cuenta_clave;
                        this.banco_name = response.data.Comercio.banco_name;
                    }
                    if (this.admin.paypal_client_id) {
                        this.paypal_id = this.admin.paypal_client_id;
                    }
                    if (this.admin.stripe_client_id) {
                        this.stripe_id = this.admin.stripe_client_id;
                    }
                });
                loading.dismiss();
            });
        });
    }
    makeOrder() {
        if (this.payment == 2) {
            this.payPaypal();
        }
        else if (this.payment == 3) {
            this.payWithStripe();
        }
        else if (this.payment == 4) {
            this.payWithTransfer();
        }
        else {
            this.order();
        }
    }
    order() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor espere...',
                mode: 'ios'
            });
            yield loading.present();
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            var allData = {
                user_id: localStorage.getItem('user_id'),
                payment: this.payment,
                address: this.address,
                cart_no: localStorage.getItem('cart_no'),
                payment_id: this.payment_id,
                user_comm_terminal: this.user_comm_terminal,
                otype: this.otype,
                notes: this.notes,
                lat: lat,
                lng: lng
            };
            this.server.order(allData).subscribe((response) => {
                if (response.data == 'Not_service') {
                    loading.dismiss();
                    this.presentToast('Sin servicio en la ubicación Seleccionada');
                }
                else {
                    let LastStore = JSON.parse(localStorage.getItem('menu_item'));
                    let dataLS = [];
                    if (localStorage.getItem('LastStore')) {
                        dataLS = JSON.parse(localStorage.getItem('LastStore'));
                        let has = dataLS.find(id => id = LastStore.id);
                        if (has.store_id != LastStore.id) {
                            dataLS.push({
                                store_id: LastStore.id
                            });
                        }
                    }
                    else {
                        dataLS.push({
                            store_id: LastStore.id
                        });
                    }
                    localStorage.setItem('LastStore', JSON.stringify(dataLS));
                    localStorage.setItem('order_data', JSON.stringify(response.data));
                    // Agregamos a ultimas ordenes
                    this.nav.navigateRoot('/done');
                    loading.dismiss();
                }
            });
        });
    }
    payPaypal() {
        this.payPal.init({
            PayPalEnvironmentProduction: this.paypal_id,
            PayPalEnvironmentSandbox: this.paypal_id
        }).then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.payPal.prepareToRender('PayPalEnvironmentProduction', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__["PayPalConfiguration"]({
            // Only needed if you get an "Internal Service Error" after PayPal login!
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(() => {
                let payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__["PayPalPayment"](this.total_amount, 'MXN', 'Description', 'sale');
                this.payPal.renderSinglePaymentUI(payment).then((res) => {
                    this.payment_id = res.response.id;
                    if (this.payment_id) {
                        this.order();
                    }
                }, () => {
                    this.presentToast("Paypal Transaction Cancelled");
                });
            }, () => {
                this.presentToast("Error in configuration");
            });
        }, () => {
            // 
            this.presentToast("Error in initialization, maybe PayPal isn't supported");
        });
    }
    payWithStripe() {
        if (this.card_no.length > 10 && this.exp_month && this.exp_year && this.cvv) {
            this.stripe.setPublishableKey(this.stripe_id);
            let card = {
                number: this.card_no,
                expMonth: this.exp_month,
                expYear: this.exp_year,
                cvc: this.cvv
            };
            this.stripe.createCardToken(card)
                .then(token => {
                this.makePayment(token.id);
            })
                .catch(error => {
                this.presentToast("Por favor ingrese detalles de pago válidos");
            });
        }
        else {
            this.presentToast("Por favor ingrese detalles de pago válidos");
        }
    }
    payWithTransfer() {
        this.presentToast("Una vez realizada la transferencia no te olvides de enviarle el ticket al comercio.");
        this.payment_id = 0;
        this.order();
    }
    makePayment(token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Enviando Informacion...',
                mode: 'ios'
            });
            yield loading.present();
            this.server.makeStripePayment("?token=" + token + "&amount=" + this.total_amount).subscribe((response) => {
                if (response.data == "done") {
                    this.payment_id = response.id;
                    if (this.payment_id) {
                        this.order();
                    }
                }
                else {
                    this.presentToast("Algo salió mal. Por favor, vuelva a intentarlo.");
                }
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
};
CheckoutPage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__["PayPal"] },
    { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__["Stripe"] }
];
CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_4__["PayPal"],
        _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__["Stripe"]])
], CheckoutPage);



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module-es2015.js.map