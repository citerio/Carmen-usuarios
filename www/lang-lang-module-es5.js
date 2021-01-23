(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lang-lang-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/lang/lang.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lang/lang.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"white\">\n  <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ text.language }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding=\"true\" *ngIf=\"text\">\n\n<ion-searchbar (ionInput)=\"search($event)\" mode=\"ios\" color=\"light\"></ion-searchbar>\n\n<ion-list>\n<ion-radio-group>\n\n<ion-item *ngFor=\"let l of data\">\n<ion-label><img src=\"{{ l.img }}\" style=\"width: 30px\"> {{ l.name }}</ion-label>\n<ion-radio color=\"primary\" slot=\"start\" value=\"{{ l.id }}\" (ionSelect)=\"setLang(l.id,l.type)\" [checked]=\"l.id == lid\"></ion-radio>\n\n</ion-item>\n</ion-radio-group>\n</ion-list>\n<br>\n<ion-button color=\"primary\" expand=\"block\" size=\"large\" type=\"button\" [disabled]=\"lid == 'none'\" (click)=\"update()\" mode=\"ios\">Cambiar idioma</ion-button>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/lang/lang.module.ts":
  /*!*************************************!*\
    !*** ./src/app/lang/lang.module.ts ***!
    \*************************************/

  /*! exports provided: LangPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LangPageModule", function () {
      return LangPageModule;
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


    var _lang_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lang.page */
    "./src/app/lang/lang.page.ts");

    const routes = [{
      path: '',
      component: _lang_page__WEBPACK_IMPORTED_MODULE_6__["LangPage"]
    }];
    let LangPageModule = class LangPageModule {};
    LangPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_lang_page__WEBPACK_IMPORTED_MODULE_6__["LangPage"]]
    })], LangPageModule);
    /***/
  },

  /***/
  "./src/app/lang/lang.page.scss":
  /*!*************************************!*\
    !*** ./src/app/lang/lang.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmcvbGFuZy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/lang/lang.page.ts":
  /*!***********************************!*\
    !*** ./src/app/lang/lang.page.ts ***!
    \***********************************/

  /*! exports provided: LangPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LangPage", function () {
      return LangPage;
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


    var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let LangPage = class LangPage {
      constructor(server, toastController, loadingController, nav, events) {
        this.server = server;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.nav = nav;
        this.events = events;
        this.lid = "none";

        if (localStorage.getItem('lid')) {
          this.lid = localStorage.getItem('lid');
        }

        this.text = JSON.parse(localStorage.getItem('app_text'));
      }

      ngOnInit() {
        this.loadData();
      }

      loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            message: 'Please wait...',
            mode: 'ios'
          });
          yield loading.present();
          this.server.lang().subscribe(response => {
            console.log(response);
            this.data = response.data;
            loading.dismiss();
          });
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

      search(ev) {
        // set val to the value of the ev target
        var val = ev.target.value;

        if (val && val.length > 0) {
          if (val && val.trim() != '') {
            this.data = this.data.filter(item => {
              return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
          }
        } else {
          return this.loadData();
        }
      }

      setLang(id, type) {
        this.lid = id;
        this.type = type;
      }

      update() {
        if (this.type == undefined) {
          this.type = 0;
        }

        this.events.publish('lang_change', this.type);
        localStorage.setItem('lid', this.lid);
        localStorage.setItem('app_type', this.type);
        this.presentToast("El idioma se ah actualizado con exito.");

        if (localStorage.getItem('city_id')) {
          this.nav.navigateRoot('/home');
        } else {
          this.nav.navigateRoot('/city');
        }
      }

    };

    LangPage.ctorParameters = () => [{
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]
    }];

    LangPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lang',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lang.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/lang/lang.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lang.page.scss */
      "./src/app/lang/lang.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])], LangPage);
    /***/
  }
}]);
//# sourceMappingURL=lang-lang-module-es5.js.map