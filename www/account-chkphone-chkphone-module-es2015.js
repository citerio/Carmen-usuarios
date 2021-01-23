(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-chkphone-chkphone-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/chkphone/chkphone.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/chkphone/chkphone.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title style=\"font-family: 'SF Pro Display';font-weight: 500;\">Verifica tu numero telefonico</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"ion-padding\">\n  <!--Send SMS for otp-->\n  <div *ngIf=\"stateVerify == 'inputPhone'\">\n    <ion-row>\n      <ion-col>\n        <h1 class=\"welcome_text\">\n          Cuál es tu número<br />\n          de teléfono?\n        </h1>\n      </ion-col>\n    </ion-row>\n    <br />\n    <ion-row>\n      <ion-col size=\"2\" style=\"margin-top: 10.5px !important;\">\n       <span>+52</span>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-input type=\"tel\" inputmode=\"tel\" pattern=\"[0-9]{3}[0-9]{3}[0-9]{4}\" [(ngModel)]=\"phone\" maxlength=\"10\" clearInput required name=\"phone\" placeholder=\"Ej.- 6361054599\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <hr />\n    <p style=\"color: rgb(85, 85, 85);font-family: 'SF Pro Display';font-weight: 400;font-style: normal;font-size: 14px;\">\n      Toque \"Siguiente\" para obtener un codigo de confirmación via SMS, con esto podremos verificar su Número Telefonico.\n    </p>\n\n    <ion-row>\n      <ion-col class=\"inner-recap\">\n        <div id=\"recaptcha-container\"></div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!--Send SMS for otp-->\n</ion-content>\n<ion-footer style=\"text-align: center;\">\n  <ion-button expand=\"block\" [disabled]=\"!btnDisabled\" (click)=\"verify()\" style=\"font-family: 'SF Pro Display';font-weight: 500;font-size: 16px;\">{{txtbnt}}</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/account/chkphone/chkphone.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/account/chkphone/chkphone.module.ts ***!
  \*****************************************************/
/*! exports provided: ChkphonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChkphonePageModule", function() { return ChkphonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chkphone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chkphone.page */ "./src/app/account/chkphone/chkphone.page.ts");







const routes = [
    {
        path: '',
        component: _chkphone_page__WEBPACK_IMPORTED_MODULE_6__["ChkphonePage"]
    }
];
let ChkphonePageModule = class ChkphonePageModule {
};
ChkphonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chkphone_page__WEBPACK_IMPORTED_MODULE_6__["ChkphonePage"]]
    })
], ChkphonePageModule);



/***/ }),

/***/ "./src/app/account/chkphone/chkphone.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/account/chkphone/chkphone.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome_text {\n  font-family: \"SF Pro Display\";\n  font-weight: 700;\n  font-style: normal;\n  letter-spacing: 0.8px;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9jaGtwaG9uZS9DOlxcaW9uaWNcXGNhcm1lbmFwcFxcdXN1YXJpb3Mvc3JjXFxhcHBcXGFjY291bnRcXGNoa3Bob25lXFxjaGtwaG9uZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvY2hrcGhvbmUvY2hrcGhvbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2Noa3Bob25lL2Noa3Bob25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lX3RleHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG5cclxuIiwiLndlbGNvbWVfdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICB6LWluZGV4OiAxMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/account/chkphone/chkphone.page.ts":
/*!***************************************************!*\
  !*** ./src/app/account/chkphone/chkphone.page.ts ***!
  \***************************************************/
/*! exports provided: ChkphonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChkphonePage", function() { return ChkphonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);







let ChkphonePage = class ChkphonePage {
    constructor(route, server, toastController, keyboard, nav, loadingController, events) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.keyboard = keyboard;
        this.nav = nav;
        this.loadingController = loadingController;
        this.events = events;
        this.phone = '';
        this.btnDisabled = true;
    }
    ngOnInit() {
        this.windowsRef = this.server.windowRef;
        this.stateVerify = 'inputPhone';
        this.txtbnt = 'Siguiente';
        this.user_id = localStorage.getItem('user_id');
    }
    ionViewWillEnter() {
        this.windowsRef.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"].RecaptchaVerifier('recaptcha-container');
    }
    verify() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.btnDisabled = false;
            const loading = yield this.loadingController.create({
                message: 'Validando...',
            });
            yield loading.present();
            if (this.phone.length == 10) {
                if (this.stateVerify == 'inputPhone') {
                    let phone = '+521' + this.phone;
                    firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"]().signInWithPhoneNumber(phone, this.windowsRef.recaptchaVerifier).then(confirmationResult => {
                        this.windowsRef.confirmationResult = confirmationResult;
                        localStorage.setItem('confirmationResult', JSON.stringify(this.windowsRef.confirmationResult));
                        localStorage.setItem('phone', this.phone);
                        setTimeout(() => {
                            this.nav.navigateForward('/verfycode');
                        }, 700);
                    }).catch(fail => {
                        console.log('fail: ' + fail);
                        loading.dismiss();
                    });
                    loading.dismiss();
                }
            }
            else {
                loading.dismiss();
                this.presentToast('Verifica tu Número Telefonico.', 'danger');
            }
        });
    }
    resend() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Volviendo a intentar...',
            });
            yield loading.present();
            this.stateVerify = 'inputPhone';
            this.txtbnt = 'Siguiente';
            setTimeout(() => {
                this.windowsRef = this.server.windowRef;
                this.windowsRef.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"].RecaptchaVerifier('recaptcha-container');
                loading.dismiss();
            }, 800);
        });
    }
    presentToast(txt, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 3000,
                position: 'bottom',
                mode: 'ios',
                color: color
            });
            toast.present();
        });
    }
};
ChkphonePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] }
];
ChkphonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chkphone',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chkphone.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/chkphone/chkphone.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chkphone.page.scss */ "./src/app/account/chkphone/chkphone.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
], ChkphonePage);



/***/ })

}]);
//# sourceMappingURL=account-chkphone-chkphone-module-es2015.js.map