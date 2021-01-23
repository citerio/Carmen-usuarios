(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-rate-rate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/rate/rate.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/rate/rate.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n     {{ text.rating_title }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n\n<form #form=\"ngForm\" (ngSubmit)=\"giveRating(form.value)\">\n\n<ion-list>\n\n<small>{{ text.rating_heading }}</small>\n<br><br>\n\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 0\">\n<ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 1\">\n<ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 2\">\n<ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 3\">\n<ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 4\">\n<ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 5\">\n<ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n<ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n</ion-row>\n\n<br><br>\n<ion-item>\n  <ion-textarea ngModel name=\"comment\" placeholder=\"{{ text.rating_msg }}\"></ion-textarea>\n</ion-item>\n\n\n</ion-list>\n<br>\n<ion-button color=\"primary\" expand=\"block\" type=\"submit\" [disabled]=\"form.invalid\" mode=\"ios\" size=\"large\">{{ text.rating_button }}</ion-button>\n\n</form>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/account/rate/rate.module.ts":
/*!*********************************************!*\
  !*** ./src/app/account/rate/rate.module.ts ***!
  \*********************************************/
/*! exports provided: RatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatePageModule", function() { return RatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rate.page */ "./src/app/account/rate/rate.page.ts");







const routes = [
    {
        path: '',
        component: _rate_page__WEBPACK_IMPORTED_MODULE_6__["RatePage"]
    }
];
let RatePageModule = class RatePageModule {
};
RatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_rate_page__WEBPACK_IMPORTED_MODULE_6__["RatePage"]]
    })
], RatePageModule);



/***/ }),

/***/ "./src/app/account/rate/rate.page.scss":
/*!*********************************************!*\
  !*** ./src/app/account/rate/rate.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmF0ZS9yYXRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/account/rate/rate.page.ts":
/*!*******************************************!*\
  !*** ./src/app/account/rate/rate.page.ts ***!
  \*******************************************/
/*! exports provided: RatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatePage", function() { return RatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let RatePage = class RatePage {
    constructor(route, server, toastController, nav, loadingController) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.star = 0;
        this.oid = this.route.snapshot.paramMap.get('id');
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
    }
    setStar(val) {
        this.star = val;
    }
    giveRating(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.star == 0) {
                this.presentToast('Please Select Any Rating For Continue.');
            }
            else {
                const loading = yield this.loadingController.create({
                    message: 'Please wait...',
                    duration: 3000
                });
                yield loading.present();
                var allData = { comment: data.comment, user_id: localStorage.getItem('user_id'), star: this.star, oid: this.oid };
                this.server.rating(allData).subscribe((response) => {
                    this.presentToast('Thank You! Rating Submitted Successfully.');
                    this.nav.navigateBack('/order');
                    loading.dismiss();
                });
            }
        });
    }
    presentToast(txt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
};
RatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
RatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rate.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/rate/rate.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rate.page.scss */ "./src/app/account/rate/rate.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], RatePage);



/***/ })

}]);
//# sourceMappingURL=account-rate-rate-module-es2015.js.map