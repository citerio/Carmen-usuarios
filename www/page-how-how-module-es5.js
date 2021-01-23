(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-how-how-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page/how/how.page.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/how/how.page.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n     {{ text.how_title }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"data\">\n\n\n<ion-card mode=\"ios\">\n\n<img src=\"{{ data.how_img }}\" width=\"100%\" *ngIf=\"data.how_img\">\n\n<ion-card-content>\n<span [innerHTML]=\"data.how\" style=\"text-align: justify;\"></span>\n\n</ion-card-content>\n</ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/page/how/how.module.ts":
  /*!****************************************!*\
    !*** ./src/app/page/how/how.module.ts ***!
    \****************************************/

  /*! exports provided: HowPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HowPageModule", function () {
      return HowPageModule;
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


    var _how_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./how.page */
    "./src/app/page/how/how.page.ts");

    const routes = [{
      path: '',
      component: _how_page__WEBPACK_IMPORTED_MODULE_6__["HowPage"]
    }];
    let HowPageModule = class HowPageModule {};
    HowPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_how_page__WEBPACK_IMPORTED_MODULE_6__["HowPage"]]
    })], HowPageModule);
    /***/
  },

  /***/
  "./src/app/page/how/how.page.scss":
  /*!****************************************!*\
    !*** ./src/app/page/how/how.page.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvaG93L2hvdy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/page/how/how.page.ts":
  /*!**************************************!*\
    !*** ./src/app/page/how/how.page.ts ***!
    \**************************************/

  /*! exports provided: HowPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HowPage", function () {
      return HowPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let HowPage = class HowPage {
      constructor(route, server, toastController, nav, loadingController) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.text = JSON.parse(localStorage.getItem('app_text'));
      }

      ngOnInit() {
        this.loadData();
      }

      loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Please wait...',
            duration: 3000
          });
          yield loading.present();
          this.server.pages().subscribe(response => {
            this.data = response.data;
            loading.dismiss();
          });
        });
      }

    };

    HowPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
    }];

    HowPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-how',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./how.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page/how/how.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./how.page.scss */
      "./src/app/page/how/how.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], HowPage);
    /***/
  }
}]);
//# sourceMappingURL=page-how-how-module-es5.js.map