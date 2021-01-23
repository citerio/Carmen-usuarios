(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locked-locked-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/locked/locked.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locked/locked.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n  <div style=\"margin-top: 25px;\">\n    <ion-card-header>\n      <ion-row>\n        <ion-col size=\"7\">\n          <img src=\"../../assets/locked.jpg\" alt=\"\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <h1 class=\"welcome_text\">\n            !Oops<br />\n            Cuenta Bloqueada\n          </h1>\n        </ion-col>\n      </ion-row>\n      <p style=\"color: rgb(85, 85, 85);font-family: 'SF Pro Display';font-weight: 400;font-style: normal;font-size: 14px;\">\n        Tu cuenta está bloqueada, por favor comunícate con soporte en: \n      </p>\n    </ion-card-header>\n      \n    <p align=\"center\" style=\"font-family: 'SF Pro Display';font-weight: 400;font-style: normal\"><a href=\"https://carmenapp.com/soporte\">Soporte Tecnico</a></p>\n  \n</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/locked/locked.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/locked/locked.module.ts ***!
    \*****************************************/

  /*! exports provided: LockedPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LockedPageModule", function () {
      return LockedPageModule;
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


    var _locked_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./locked.page */
    "./src/app/locked/locked.page.ts");

    const routes = [{
      path: '',
      component: _locked_page__WEBPACK_IMPORTED_MODULE_6__["LockedPage"]
    }];
    let LockedPageModule = class LockedPageModule {};
    LockedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_locked_page__WEBPACK_IMPORTED_MODULE_6__["LockedPage"]]
    })], LockedPageModule);
    /***/
  },

  /***/
  "./src/app/locked/locked.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/locked/locked.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome_text {\n  font-family: \"SF Pro Display\";\n  font-weight: 700;\n  font-style: normal;\n  letter-spacing: 0.8px;\n  z-index: 100;\n  font-size: 22px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9ja2VkL0M6XFxpb25pY1xcY2FybWVuYXBwXFx1c3Vhcmlvcy9zcmNcXGFwcFxcbG9ja2VkXFxsb2NrZWQucGFnZS5zY3NzIiwic3JjL2FwcC9sb2NrZWQvbG9ja2VkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9ja2VkL2xvY2tlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZV90ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbiIsIi53ZWxjb21lX3RleHQge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgei1pbmRleDogMTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/locked/locked.page.ts":
  /*!***************************************!*\
    !*** ./src/app/locked/locked.page.ts ***!
    \***************************************/

  /*! exports provided: LockedPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LockedPage", function () {
      return LockedPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let LockedPage = class LockedPage {
      constructor() {}

      ngOnInit() {}

    };
    LockedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-locked',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./locked.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/locked/locked.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./locked.page.scss */
      "./src/app/locked/locked.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LockedPage);
    /***/
  }
}]);
//# sourceMappingURL=locked-locked-module-es5.js.map