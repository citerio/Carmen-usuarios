(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-forgot-forgot-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/forgot/forgot.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/forgot/forgot.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"white\">\n  <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>¿Olvidaste tu contraseña?</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<!--Send email for otp-->\n<form *ngIf=\"!user_id && !newPassword\" #form=\"ngForm\" (ngSubmit)=\"forgot(form.value)\">\n\n  <p style=\"color: rgb(82, 82, 82);font-family: 'SF Pro Display';font-weight: 400;text-align: center;\">\n    ingrese su correo electrónico y le enviaremos instrucciones sobre cómo restablecerlo\n  </p>\n  <br />\n  <ion-row>\n    <ion-col size=\"3\" style=\"margin-top: 10.5px !important;\">\n     <span>Email</span>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input type=\"email\" ngModel clearInput required name=\"email\" placeholder=\"Ingresa tu Email\"></ion-input>\n    </ion-col>\n  </ion-row>\n\n<br>\n\n<ion-button expand=\"block\" mode=\"ios\" type=\"submit\">Enviar</ion-button>\n<br>\n</form>\n\n<!--Verify OTP code-->\n<div *ngIf=\"user_id && !newPassword\">\n\n  <ion-card-header>\n  <ion-card-title>Verifique su correo electrónico</ion-card-title>\n  <ion-card-subtitle>Se ha enviado un codigo a su correo electrónico {{ this.email }}</ion-card-subtitle>\n\n  </ion-card-header>\n  <br><br>\n  <form #form=\"ngForm\" (ngSubmit)=\"verify(form.value)\">\n\n  <ion-item>\n    <ion-label position=\"floating\" style=\"font-size: 12px\">Ingresa el codigo</ion-label>\n    <ion-input type=\"email\" ngModel required name=\"otp\"></ion-input>\n  </ion-item>\n\n  <br>\n\n  <ion-button expand=\"block\" mode=\"ios\" type=\"submit\">Verificar</ion-button>\n\n  </form>\n  <p align=\"center\">No obtuviste el codigo? <a (click)=\"resend()\">Reenviar</a></p>\n\n</div>\n\n<!--Set New Password-->\n<div *ngIf=\"user_id && newPassword\">\n\n<ion-card-header>\n<ion-card-title>Establecer nueva contraseña</ion-card-title>\n\n</ion-card-header>\n<br><br>\n<form #form=\"ngForm\" (ngSubmit)=\"new_password(form.value)\">\n\n<ion-item>\n  <ion-label position=\"floating\" style=\"font-size: 12px\">Nueva contraseña\n  </ion-label>\n  <ion-input type=\"password\" ngModel required name=\"password\"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label position=\"floating\" style=\"font-size: 12px\">Confirmar contraseña</ion-label>\n  <ion-input type=\"password\" ngModel required name=\"new_password\"></ion-input>\n</ion-item>\n\n<br>\n\n<ion-button expand=\"block\" mode=\"ios\" type=\"submit\">Actualizar</ion-button>\n\n</form>\n<p align=\"center\">No obtuviste el codigo? <a (click)=\"resend()\">Reenviar</a></p>\n\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/account/forgot/forgot.module.ts":
/*!*************************************************!*\
  !*** ./src/app/account/forgot/forgot.module.ts ***!
  \*************************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/app/account/forgot/forgot.page.ts");







const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]
    }
];
let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })
], ForgotPageModule);



/***/ }),

/***/ "./src/app/account/forgot/forgot.page.scss":
/*!*************************************************!*\
  !*** ./src/app/account/forgot/forgot.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/account/forgot/forgot.page.ts":
/*!***********************************************!*\
  !*** ./src/app/account/forgot/forgot.page.ts ***!
  \***********************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let ForgotPage = class ForgotPage {
    constructor(server, toastController, nav, loadingController) {
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.newPassword = false;
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
    }
    forgot(data, type = "new") {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (type == "new" && data.email.length == 0) {
                this.presentToast('Porfavor Ingresa un Correo electronico', 'warning');
            }
            else {
                const loading = yield this.loadingController.create({
                    message: 'Porfavor espere...',
                    mode: 'ios'
                });
                yield loading.present();
                this.server.forgot(data).subscribe((response) => {
                    if (response.msg == "error") {
                        this.presentToast(response.error, 'danger');
                    }
                    else {
                        this.presentToast("El codigo de recuperación ha sido enviado", 'primary');
                        this.user_id = response.user_id;
                        this.email = data.email;
                    }
                    loading.dismiss();
                });
            }
        });
    }
    verify(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (data.otp.length == 0) {
                this.presentToast('Porfavor ingresa el codigo.', 'warning');
            }
            else {
                const loading = yield this.loadingController.create({
                    message: 'Porfavor espera...',
                    duration: 3000,
                    mode: 'ios'
                });
                yield loading.present();
                var allData = { otp: data.otp, user_id: this.user_id };
                this.server.verify(allData).subscribe((response) => {
                    if (response.msg == "error") {
                        this.presentToast(response.error, 'danger');
                    }
                    else {
                        this.user_id = response.user_id;
                        this.newPassword = true;
                        this.presentToast("Correo verificado con exito.", 'success');
                    }
                    loading.dismiss();
                });
            }
        });
    }
    new_password(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (data.password.length == 0) {
                this.presentToast('Porfavor ingresa tu nueva contraseña', 'warning');
            }
            else if (data.password != data.new_password) {
                this.presentToast('Confirme que las contraseñas coincidan.', 'warning');
            }
            else {
                const loading = yield this.loadingController.create({
                    message: 'Please wait...',
                    duration: 3000,
                    mode: 'ios'
                });
                yield loading.present();
                var allData = { password: data.password, user_id: this.user_id };
                this.server.updatePassword(allData).subscribe((response) => {
                    if (response.msg == "error") {
                        this.presentToast(response.error, 'danger');
                    }
                    else {
                        this.nav.navigateForward('/city');
                        this.presentToast("Nueva contraseña actualizada con éxito.", 'success');
                    }
                    loading.dismiss();
                });
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
    resend() {
        this.forgot({ email: this.email });
    }
};
ForgotPage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/forgot/forgot.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot.page.scss */ "./src/app/account/forgot/forgot.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], ForgotPage);



/***/ })

}]);
//# sourceMappingURL=account-forgot-forgot-module-es2015.js.map