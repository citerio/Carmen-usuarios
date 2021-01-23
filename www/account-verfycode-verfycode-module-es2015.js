(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-verfycode-verfycode-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/verfycode/verfycode.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/verfycode/verfycode.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n<!--Verify OTP code-->\n<div>\n  <ion-card-header>\n    <ion-row>\n      <ion-col>\n        <h1 class=\"welcome_text\">\n          Verifique su<br />\n          bandeja de SMS\n        </h1>\n      </ion-col>\n    </ion-row>\n    <p style=\"color: rgb(85, 85, 85);font-family: 'SF Pro Display';font-weight: 400;font-style: normal;font-size: 14px;\">\n      Se ha enviado un codigo al Telefono <b>{{ phone }}</b> Verifica tu bandeja.\n    </p>\n  </ion-card-header>\n  \n  <ion-item>\n    <ion-label position=\"floating\" style=\"font-family: 'SF Pro Display';font-weight: 400;font-style: normal;font-size: 12px\">Ingresa el codigo</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"Code\" required></ion-input>\n  </ion-item>\n  \n  <p align=\"center\" style=\"font-family: 'SF Pro Display';font-weight: 400;font-style: normal\">No obtuviste el codigo? <a routerLink=\"/home\" routerDirection=\"forward\">Reenviar</a></p>\n\n</div>\n</ion-content>\n<ion-footer style=\"text-align: center;\">\n  <ion-button expand=\"block\" (click)=\"verfyCode()\" style=\"font-family: 'SF Pro Display';font-weight: 500;font-size: 16px;\">{{txtbnt}}</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/account/verfycode/verfycode.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/account/verfycode/verfycode.module.ts ***!
  \*******************************************************/
/*! exports provided: VerfycodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerfycodePageModule", function() { return VerfycodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verfycode_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verfycode.page */ "./src/app/account/verfycode/verfycode.page.ts");







const routes = [
    {
        path: '',
        component: _verfycode_page__WEBPACK_IMPORTED_MODULE_6__["VerfycodePage"]
    }
];
let VerfycodePageModule = class VerfycodePageModule {
};
VerfycodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_verfycode_page__WEBPACK_IMPORTED_MODULE_6__["VerfycodePage"]]
    })
], VerfycodePageModule);



/***/ }),

/***/ "./src/app/account/verfycode/verfycode.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/account/verfycode/verfycode.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvdmVyZnljb2RlL3ZlcmZ5Y29kZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/account/verfycode/verfycode.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/account/verfycode/verfycode.page.ts ***!
  \*****************************************************/
/*! exports provided: VerfycodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerfycodePage", function() { return VerfycodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");






let VerfycodePage = class VerfycodePage {
    constructor(route, server, toastController, keyboard, nav, loadingController, events) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.keyboard = keyboard;
        this.nav = nav;
        this.loadingController = loadingController;
        this.events = events;
        this.phone = '';
        this.txtbnt = 'Verificar';
        if (!localStorage.getItem('confirmationResult')) {
            this.nav.navigateForward('/home');
        }
    }
    ngOnInit() {
        this.windowsRef = this.server.windowRef;
        this.windowsRef.recaptchaVerifier = localStorage.getItem('confirmationResult');
        this.phone = localStorage.getItem('phone');
        this.user_id = localStorage.getItem('user_id');
    }
    verfyCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Validando...',
            });
            yield loading.present();
            if (this.Code && this.Code.toString().length >= 4 && this.Code.toString().length <= 8) {
                let verificationCode = this.Code.toString();
                this.windowsRef.confirmationResult.confirm(verificationCode).then(result => {
                    console.log('paso...' + result);
                    // User Signed
                    var allData = { phone: this.phone, user_id: this.user_id };
                    this.server.SignPhone(allData).subscribe(res => {
                        if (res) {
                            loading.dismiss();
                            this.presentToast('Registro completo...', 'success');
                            this.nav.navigateForward('/city');
                        }
                    });
                }).catch(fail => {
                    // Fail
                    this.presentToast('Algo ha ocurrido.' + fail, 'danger');
                });
            }
            else {
                loading.dismiss();
                this.presentToast('Porfavor Ingresa un Codigo valido!', 'danger');
            }
        });
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
VerfycodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] }
];
VerfycodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verfycode',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verfycode.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/verfycode/verfycode.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verfycode.page.scss */ "./src/app/account/verfycode/verfycode.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
], VerfycodePage);



/***/ })

}]);
//# sourceMappingURL=account-verfycode-verfycode-module-es2015.js.map