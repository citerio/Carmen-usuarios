(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n<!-- Slide Ini -->\n    <ion-slides class=\"welcome\" *ngIf=\"chargePage == 'sliderIni'\">\n        <ion-slide *ngFor=\"let welcome of data;let i = index\">\n            <img src=\"{{ welcome.img }}\"/>\n            <div [innerHTML]=\"welcome.title\"></div>\n            <span slot=\"end\" class=\"slideNext\"><i>Desliza</i> <b>> ></b></span>\n        </ion-slide>\n    </ion-slides>\n<!-- Slide Ini -->\n\n</ion-content>\n\n<ion-footer *ngIf=\"chargePage == 'sliderIni'\">\n    <div class=\"logcast\" style=\"padding: 25px;text-align: center;\">\n        <ion-label color=\"medium\"  routerLink=\"/login\">Iniciar Sesión</ion-label>\n    \n        <ion-label color=\"medium\" routerLink=\"/signup\">Registrarse</ion-label>\n    </div>   \n</ion-footer>\n    \n    ");

/***/ }),

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");







const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
    }
];
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/welcome/welcome.page.scss":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.login {\n  text-align: center;\n}\n\n.welcome .swiper-slide {\n  display: block;\n  padding: 0 13px;\n}\n\nion-slide > h2 {\n  margin-top: 2.8rem;\n}\n\nion-slide > img {\n  max-height: 50%;\n  max-width: 100%;\n  margin: 40px 0;\n}\n\nion-slide > p {\n  margin-top: 25px;\n  color: #444;\n  font-size: 12.5px;\n}\n\n.slideNext {\n  position: relative;\n  font-size: 14px;\n  color: #444;\n  padding: 6px 0;\n  border-radius: 25px;\n  font-family: \"Open Sans\", sans-serif;\n  cursor: pointer;\n}\n\n.slideNext > b {\n  position: absolute;\n  width: 50%;\n  top: 6px;\n  -webkit-animation: swing 0.9s ease-in-out;\n          animation: swing 0.9s ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.logcast > ion-label {\n  font-size: 14px;\n  margin: 10px;\n  position: relative;\n}\n\n.logcast > ion-label:nth-child(1)::after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  width: 1px;\n  height: 100%;\n  margin-left: 8px;\n  background-color: #7c7c7c;\n}\n\n@-webkit-keyframes swing {\n  10% {\n    -webkit-transform: translateX(3px);\n    transform: translateX(3px);\n  }\n  25% {\n    -webkit-transform: translateX(-1.5px);\n    transform: translateX(-1.5px);\n  }\n  50% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n    transform: translateX(0px);\n  }\n}\n\n@keyframes swing {\n  10% {\n    -webkit-transform: translateX(3px);\n    transform: translateX(3px);\n  }\n  25% {\n    -webkit-transform: translateX(-1.5px);\n    transform: translateX(-1.5px);\n  }\n  50% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n    transform: translateX(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9DOlxcaW9uaWNcXGNhcm1lbmFwcFxcdXN1YXJpb3Mvc3JjXFxhcHBcXHdlbGNvbWVcXHdlbGNvbWUucGFnZS5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDQTtFQUNFLG9DQUFBO0FDaENGOztBRG1DQTtFQUNFLGtCQUFBO0FDaENGOztBRG1DQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDaENGOztBRG9DQTtFQUNFLGtCQUFBO0FDakNGOztBRG1DQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2hDRjs7QURtQ0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FDaENGOztBRG1DQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ2hDRjs7QURtQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDaENGOztBRG9DQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNqQ0Y7O0FEb0NBO0VBRUU7SUFFQSxrQ0FBQTtJQUNBLDBCQUFBO0VDbkNBO0VEcUNBO0lBRUEscUNBQUE7SUFDQSw2QkFBQTtFQ3BDQTtFRHNDQTtJQUVBLGtDQUFBO0lBQ0EsMEJBQUE7RUNyQ0E7RUR1Q0E7SUFFQSxrQ0FBQTtJQUNBLDBCQUFBO0VDdENBO0FBQ0Y7O0FEd0NBO0VBRUU7SUFFQSxrQ0FBQTtJQUNBLDBCQUFBO0VDeENBO0VEMENBO0lBRUEscUNBQUE7SUFDQSw2QkFBQTtFQ3pDQTtFRDJDQTtJQUVBLGtDQUFBO0lBQ0EsMEJBQUE7RUMxQ0E7RUQ0Q0E7SUFFQSxrQ0FBQTtJQUNBLDBCQUFBO0VDM0NBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gOnJvb3Qge1xuLy8gICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuLy8gICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xuLy8gfVxuLy8gLnN3aXBlci1zbGlkZSB7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gfVxuXG4vLyBpb24tc2xpZGUgPiBpbWcge1xuICBcbi8vIHdpZHRoOjgwJTtcblxuLy8gfVxuXG4vLyBwe1xuICBcbi8vICAgcGFkZGluZzoxMHB4IDEwcHg7XG4vLyAgIGZvbnQtc2l6ZToxMnB4O1xuLy8gICBsaW5lLWhlaWdodDoxLjU7XG4vLyB9XG5cbi8vICAuc3dpcGVyLXBhZ2luYXRpb25cbi8vICB7XG4vLyAgXHRmb250LXNpemU6IDIwcHg7XG4vLyAgfVxuXG4vLyAgLnN0YXJ0XG4vLyAge1xuLy8gIFx0d2lkdGg6IDgwJTtcbi8vICBcdG1hcmdpbi1sZWZ0OiAxMCU7XG4vLyAgXHRib3JkZXItcmFkaXVzOiAxMHB4XG4vLyAgfVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4ubG9naW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53ZWxjb21lIC5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAxM3B4O1xuICBcbn1cblxuaW9uLXNsaWRlID4gaDIge1xuICBtYXJnaW4tdG9wOiAyLjhyZW07XG59XG5pb24tc2xpZGUgPiBpbWcge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG5cbmlvbi1zbGlkZSA+IHAge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1zaXplOiAxMi41cHg7XG59XG5cbi5zbGlkZU5leHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0NDQ7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNsaWRlTmV4dCA+IGIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MCU7XG4gIHRvcDogNnB4O1xuICBhbmltYXRpb246IHN3aW5nIDAuOXMgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4ubG9nY2FzdCA+IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLmxvZ2Nhc3QgPiBpb24tbGFiZWw6bnRoLWNoaWxkKDEpOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogJyc7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M3YzdjO1xufSAgIFxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3dpbmdcbntcbiAgMTAlXG4gIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XG4gIH1cbiAgMjUlXG4gIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjVweCk7XG4gIH1cbiAgNTAlXG4gIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XG4gIH1cbiAgMTAwJVxuICB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3aW5nXG57XG4gIDEwJVxuICB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xuICB9XG4gIDI1JVxuICB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS41cHgpO1xuICB9XG4gIDUwJVxuICB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xuICB9XG4gIDEwMCVcbiAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuXG4iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5sb2dpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlbGNvbWUgLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwIDEzcHg7XG59XG5cbmlvbi1zbGlkZSA+IGgyIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xufVxuXG5pb24tc2xpZGUgPiBpbWcge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG5cbmlvbi1zbGlkZSA+IHAge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1zaXplOiAxMi41cHg7XG59XG5cbi5zbGlkZU5leHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0NDQ7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xpZGVOZXh0ID4gYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgdG9wOiA2cHg7XG4gIGFuaW1hdGlvbjogc3dpbmcgMC45cyBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbi5sb2djYXN0ID4gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ2Nhc3QgPiBpb24tbGFiZWw6bnRoLWNoaWxkKDEpOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAwO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzdjN2M7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzd2luZyB7XG4gIDEwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbiAgfVxuICAyNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjVweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjVweCk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dpbmcge1xuICAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XG4gIH1cbiAgMjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS41cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS41cHgpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let WelcomePage = class WelcomePage {
    constructor(server, loadingController, nav, menu) {
        this.server = server;
        this.loadingController = loadingController;
        this.nav = nav;
        this.menu = menu;
        this.slideOptsTwo = {
            slidesPerView: 1,
            loop: true,
            autoplay: false,
            pagination: {
                el: '.swiper-pagination',
            }
        };
        this.getStart = false;
        this.menu.enable(false);
    }
    ngOnInit() {
        this.loaingData();
    }
    loaingData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...',
                mode: 'md'
            });
            yield loading.present();
            if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null') {
                this.nav.navigateRoot('/home');
            }
            this.server.welcome().subscribe((response) => {
                this.data = response.data;
                this.chargePage = 'sliderIni';
                this.loadpage = 'EmailIn';
                this.IniSes = false;
                loading.dismiss();
            });
        });
    }
};
WelcomePage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
], WelcomePage.prototype, "slides", void 0);
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module-es2015.js.map