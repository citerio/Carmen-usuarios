(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"white\">\n  <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-title style=\"font-size:18px;\">Menú</ion-title>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  mode=\"ios\" >\n\n\n<div mode=\"ios\">\n  <ion-slides pager=\"true\" autoplay=\"3000\">\n\n    <ion-slide *ngFor=\"let pics of data.images\">\n      <img src=\"{{ pics.img }}\" style=\"height: 200px;\">\n    </ion-slide>\n</ion-slides>\n\n  <ion-card-header>\n    <ion-card-title>{{ data.title }} <ion-badge color=\"primary\" style=\"float: right\">{{ data.rating }}<br></ion-badge></ion-card-title>\n    <ion-card-subtitle>{{ data.type }}</ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-list lines=\"none\">\n      <ion-item text-wrap>\n        <ion-label>{{ data.address }}</ion-label>\n        <ion-icon name=\"pin\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n\n      <ion-item text-wrap>\n        <ion-label><a href=\"tel:{{ data.phone }}\">{{ data.phone }}</a></ion-label>\n        <ion-icon name=\"call\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Costo por persona : {{ data.currency }}{{ data.person_cost }}</ion-label>\n        <ion-icon name=\"cash\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Giro : {{ data.type }}</ion-label>\n        <ion-icon name=\"time\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n      <!-- \n      <ion-item>\n        <ion-label>{{ text.info_person }} : {{ data.currency }}{{ data.person_cost }}</ion-label>\n        <ion-icon name=\"cash\" slot=\"start\" color=\"danger\"></ion-icon>\n      </ion-item> -->\n\n      <ion-item>\n        <ion-label>{{ text.info_d_time }} : {{ data.delivery_time }}</ion-label>\n        <ion-icon name=\"cube\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n\n    </ion-list>\n  </ion-card-content>\n\n</div>\n\n<span *ngIf=\"data.ratings.length > 0\">\n\n<h3 style=\"padding: 0px 18px\">{{ text.info_rating_title }}</h3>\n\n<ion-card mode=\"ios\" *ngFor=\"let rate of data.ratings\">\n\n<ion-card-header>\n<ion-card-subtitle>{{ rate.user }} <small style=\"float: right\">{{ rate.date }}</small>\n\n<ion-row *ngIf=\"rate.star == 1\">\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-row *ngIf=\"rate.star == 2\">\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-row *ngIf=\"rate.star == 3\">\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-row *ngIf=\"rate.star == 4\">\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-row *ngIf=\"rate.star == 5\">\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n<ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n</ion-row>\n\n</ion-card-subtitle>\n</ion-card-header>\n\n<ion-card-content>\n\n{{ rate.comment }}\n\n</ion-card-content>\n</ion-card>\n\n</span>\n\n<div class=\"viewPic\" *ngIf=\"ViewPic == true\">\n  <ion-label (click)=\"closevp()\">\n      close\n  </ion-label>\n\n  <img src=\"{{Pic}}\">\n\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/info/info.module.ts":
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.page */ "./src/app/info/info.page.ts");







const routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]
    }
];
let InfoPageModule = class InfoPageModule {
};
InfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
    })
], InfoPageModule);



/***/ }),

/***/ "./src/app/info/info.page.scss":
/*!*************************************!*\
  !*** ./src/app/info/info.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  font-size: 14px !important;\n}\n\n.viewPic {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1000;\n}\n\n.viewPic ion-label {\n  margin: 10px;\n  padding: 8px 12px;\n  border: 1px solid #fff;\n  float: right;\n  color: #fff;\n}\n\n.viewPic img {\n  position: absolute;\n  top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9DOlxcaW9uaWNcXGNhcm1lbmFwcFxcdXN1YXJpb3Mvc3JjXFxhcHBcXGluZm9cXGluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9pbmZvL2luZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMsMEJBQUE7QUNBRDs7QURJQTtFQUNDLGVBQUE7RUFDQSxNQUFBO0VBQU8sT0FBQTtFQUNQLFdBQUE7RUFBWSxhQUFBO0VBQ1osb0NBQUE7RUFDQSxhQUFBO0FDQ0Q7O0FERUM7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0M7RUFDQyxrQkFBQTtFQUNBLFNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSBpb24tbGFiZWxcbntcblx0Zm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcbn1cblxuXG4udmlld1BpYyB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAwO2xlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO2hlaWdodDogMTAwdmg7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNik7XG5cdHotaW5kZXg6IDEwMDA7XG5cblxuXHRpb24tbGFiZWwge1xuXHRcdG1hcmdpbjogMTBweDtcblx0XHRwYWRkaW5nOiA4cHggMTJweDtcblx0XHRib3JkZXI6MXB4IHNvbGlkICNmZmY7XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdGNvbG9yOiAjZmZmO1xuXHR9XG5cblx0aW1nIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiA3NXB4O1xuXHRcdFxuXHR9XG59IiwiaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi52aWV3UGljIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4udmlld1BpYyBpb24tbGFiZWwge1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnZpZXdQaWMgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDc1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/info/info.page.ts":
/*!***********************************!*\
  !*** ./src/app/info/info.page.ts ***!
  \***********************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InfoPage = class InfoPage {
    constructor() {
        this.ViewPic = false;
        this.data = JSON.parse(localStorage.getItem('menu_item'));
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
    }
    Viewpic(Pic) {
        this.Pic = Pic;
        this.ViewPic = true;
    }
    closevp() {
        this.ViewPic = false;
    }
};
InfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.page.scss */ "./src/app/info/info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InfoPage);



/***/ })

}]);
//# sourceMappingURL=info-info-module-es2015.js.map