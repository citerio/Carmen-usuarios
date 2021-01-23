(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-city-city-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/city/city.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/city/city.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"white\">\n  <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"text\">{{text.city_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding=\"true\" *ngIf=\"text\">\n\n<ion-searchbar (ionInput)=\"search($event)\" mode=\"ios\" color=\"light\" placeholder=\"{{ text.city_search }}\"></ion-searchbar>\n\n<ion-list>\n<ion-radio-group>\n<ion-list-header>\n<ion-label>{{text.city_heading}}</ion-label>\n</ion-list-header>\n\n<ion-item *ngFor=\"let city of data\">\n<ion-label>{{ city.name }}</ion-label>\n<ion-radio slot=\"start\" color=\"primary\" value=\"{{ city.id }}\" (ionSelect)=\"setCity(city.id,city.name)\" [checked]=\"city.id == cityID\"></ion-radio>\n\n</ion-item>\n</ion-radio-group>\n</ion-list>\n<br>\n<ion-button expand=\"block\" size=\"large\" type=\"button\" [disabled]=\"!cityID\" (click)=\"city()\" mode=\"ios\" color=\"primary\">{{text.city_button}}</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/account/city/city.module.ts":
/*!*********************************************!*\
  !*** ./src/app/account/city/city.module.ts ***!
  \*********************************************/
/*! exports provided: CityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityPageModule", function() { return CityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _city_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./city.page */ "./src/app/account/city/city.page.ts");







const routes = [
    {
        path: '',
        component: _city_page__WEBPACK_IMPORTED_MODULE_6__["CityPage"]
    }
];
let CityPageModule = class CityPageModule {
};
CityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_city_page__WEBPACK_IMPORTED_MODULE_6__["CityPage"]]
    })
], CityPageModule);



/***/ }),

/***/ "./src/app/account/city/city.page.scss":
/*!*********************************************!*\
  !*** ./src/app/account/city/city.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY2l0eS9jaXR5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/account/city/city.page.ts":
/*!*******************************************!*\
  !*** ./src/app/account/city/city.page.ts ***!
  \*******************************************/
/*! exports provided: CityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityPage", function() { return CityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let CityPage = class CityPage {
    constructor(server, toastController, loadingController, nav) {
        this.server = server;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.nav = nav;
        this.heading = 'Porfavor selecciona tu ciudad para continuar.';
        if (localStorage.getItem('city_id')) {
            this.cityID = localStorage.getItem('city_id');
            this.cityName = localStorage.getItem('city_name');
            this.heading = "Want to change your city? Select & continue.";
        }
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando Ciudades Disponibles...',
                mode: 'ios'
            });
            yield loading.present();
            this.server.city().subscribe((response) => {
                this.data = response.data;
                this.text = response.text;
                this.OrderAz(this.data);
                loading.dismiss();
            });
        });
    }
    OrderAz(data) {
        data.sort(function (a, b) { return a.name.toLowerCase().localeCompare(b.name.toLowerCase()); });
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
    search(ev) {
        // set val to the value of the ev target
        var val = ev.target.value;
        if (val && val.length > 0) {
            if (val && val.trim() != '') {
                this.data = this.data.filter((item) => {
                    return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
        }
        else {
            return this.loadData();
        }
    }
    setCity(id, name) {
        this.cityID = id;
        this.cityName = name;
    }
    city() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.cityID) {
                if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null') {
                    localStorage.setItem('city_id', this.cityID);
                    localStorage.setItem('city_name', this.cityName);
                    const loading = yield this.loadingController.create({
                        message: 'Porfavor espere...',
                        duration: 3000
                    });
                    yield loading.present();
                    this.presentToast('Ciudad actualizada exitosamente.');
                    this.nav.navigateRoot('/home');
                    loading.dismiss();
                    // Lo dejamos pendiente
                    // this.server.updateCity(this.cityID).subscribe((response:any) => {
                    // });
                }
                else {
                    localStorage.setItem('city_id', this.cityID);
                    localStorage.setItem('city_name', this.cityName);
                    this.presentToast('City Updated Successfully.');
                    this.nav.navigateRoot('/home');
                }
            }
            else {
                this.presentToast('Por favor seleccione ciudad para continuar.');
            }
        });
    }
};
CityPage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
CityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-city',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./city.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/city/city.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./city.page.scss */ "./src/app/account/city/city.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], CityPage);



/***/ })

}]);
//# sourceMappingURL=account-city-city-module-es2015.js.map