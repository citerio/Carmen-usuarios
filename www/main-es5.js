(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    var map = {
      "./account/address/address.module": ["./src/app/account/address/address.module.ts", "account-address-address-module"],
      "./account/chkphone/chkphone.module": ["./src/app/account/chkphone/chkphone.module.ts", "account-chkphone-chkphone-module"],
      "./account/city/city.module": ["./src/app/account/city/city.module.ts", "account-city-city-module"],
      "./account/forgot/forgot.module": ["./src/app/account/forgot/forgot.module.ts", "account-forgot-forgot-module"],
      "./account/login/login.module": ["./src/app/account/login/login.module.ts", "account-login-login-module"],
      "./account/order/order.module": ["./src/app/account/order/order.module.ts", "account-order-order-module"],
      "./account/profile/profile.module": ["./src/app/account/profile/profile.module.ts", "account-profile-profile-module"],
      "./account/rate/rate.module": ["./src/app/account/rate/rate.module.ts", "account-rate-rate-module"],
      "./account/signup/signup.module": ["./src/app/account/signup/signup.module.ts", "account-signup-signup-module"],
      "./account/verfycode/verfycode.module": ["./src/app/account/verfycode/verfycode.module.ts", "account-verfycode-verfycode-module"],
      "./cart/cart.module": ["./src/app/cart/cart.module.ts", "cart-cart-module"],
      "./categorys/categorys.module": ["./src/app/categorys/categorys.module.ts", "categorys-categorys-module"],
      "./checkout/checkout.module": ["./src/app/checkout/checkout.module.ts", "checkout-checkout-module"],
      "./done/done.module": ["./src/app/done/done.module.ts", "done-done-module"],
      "./info/info.module": ["./src/app/info/info.module.ts", "info-info-module"],
      "./item/item.module": ["./src/app/item/item.module.ts", "item-item-module"],
      "./lang/lang.module": ["./src/app/lang/lang.module.ts", "lang-lang-module"],
      "./locked/locked.module": ["./src/app/locked/locked.module.ts", "locked-locked-module"],
      "./offer/offer.module": ["./src/app/offer/offer.module.ts"],
      "./option/option.module": ["./src/app/option/option.module.ts"],
      "./page/about/about.module": ["./src/app/page/about/about.module.ts", "page-about-about-module"],
      "./page/contact/contact.module": ["./src/app/page/contact/contact.module.ts", "page-contact-contact-module"],
      "./page/faq/faq.module": ["./src/app/page/faq/faq.module.ts", "page-faq-faq-module"],
      "./page/how/how.module": ["./src/app/page/how/how.module.ts", "page-how-how-module"],
      "./welcome/welcome.module": ["./src/app/welcome/welcome.module.ts", "welcome-welcome-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app dir=\"{{ dir }}\">\n  <ion-split-pane>\n    <ion-menu swipe-gesture=\"true\" type=\"push\" side=\"start\" id=\"side-menu\">\n      <ion-header no-border>\n        <ion-toolbar color=\"primary\">\n          <ion-title style=\"font-size:16px;\">Bienvenido(a) a Carmen App</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list lines=\"none\">\n       \n        <ion-list-header>\n          {{ text.menu_title }}\n        </ion-list-header>\n\n           <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n            <ion-item [routerDirection]=\"'forward'\" [routerLink]=\"[p.url]\">\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-list-header>\n          {{ text.menu_page_title }}\n        </ion-list-header>\n\n          <ion-menu-toggle auto-hide=\"false\">\n          <ion-item routerLink=\"/about\" routerDirection=\"forward\">\n              <ion-icon slot=\"start\" name=\"arrow-round-forward\" ></ion-icon>\n              <ion-label> {{ text.about_title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle auto-hide=\"false\">\n          <ion-item routerLink=\"/how\" routerDirection=\"forward\">\n              <ion-icon slot=\"start\" name=\"arrow-round-forward\"></ion-icon>\n              <ion-label>{{ text.how_title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle auto-hide=\"false\">\n          <ion-item routerLink=\"/faq\" routerDirection=\"forward\">\n              <ion-icon slot=\"start\" name=\"arrow-round-forward\"></ion-icon>\n              <ion-label>{{ text.faq_title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item routerLink=\"/contact\" routerDirection=\"forward\">\n              <ion-icon slot=\"start\" name=\"arrow-round-forward\"></ion-icon>\n              <ion-label>{{ text.contact_title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item (click)=\"logout()\">\n              <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\n              <ion-label>{{ text.profile_logout }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n        </ion-list>\n\n      </ion-content>\n      <ion-footer *ngIf=\"admin\">\n      <a href=\"{{ admin.fb }}\" target=\"_blank\" *ngIf=\"admin.fb\"><ion-icon name=\"logo-facebook\" style=\"font-size: 25px;padding: 10px 10px;color:#3F51B5\"></ion-icon></a>\n\n      <a href=\"{{ admin.insta }}\" target=\"_blank\" *ngIf=\"admin.insta\"><ion-icon name=\"logo-instagram\" style=\"font-size: 25px;padding: 10px 10px;color:#e91e63\"></ion-icon></a>\n\n      <a href=\"{{ admin.youtube }}\" target=\"_blank\" *ngIf=\"admin.youtube\"><ion-icon name=\"logo-youtube\" style=\"font-size: 25px;padding: 10px 10px;color:#f44336\"></ion-icon></a>\n\n      <a href=\"{{ admin.twitter }}\" target=\"_blank\" *ngIf=\"admin.twitter\"><ion-icon name=\"logo-twitter\" style=\"font-size: 25px;padding: 10px 10px;color:#03a9f4\"></ion-icon></a>\n      </ion-footer>\n    </ion-menu>\n    <ion-router-outlet main dir=\"{{ dir }}\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n<ion-toolbar>\n<ion-title>{{ text.coupon_title }} <ion-button size=\"small\" fill=\"outline\" style=\"float:right\" (click)=\"closeModal()\"><ion-icon name=\"close\" style=\"font-size: 25px\"></ion-icon></ion-button></ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"data\">\n\n<ion-list *ngIf=\"data.length > 0\">\n\n<ion-list-header>\n{{ text.coupon_heading }}\n</ion-list-header>\n\n  <ion-item *ngFor=\"let offer of data\">\n    <ion-label>{{ offer.code }}<br><small style=\"font-size: 11px;color: gray\">{{ offer.desc }}</small>\n\n    <ion-button size=\"small\" style=\"float: right;margin-top: -17px\" (click)=\"applyNow(offer.id)\">{{ text.coupon_button }}</ion-button>\n\n    </ion-label>\n  </ion-item>\n  </ion-list>\n\n<p *ngIf=\"data.length == 0\" style=\"text-align: center;padding: 10px 10px;font-size: 11px;color:gray;line-height: 2\">Opps! No Discount Coupen Avilable<br>Right Now For This Store</p>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar [class.show-background]=\"showToolbar\" translucent>\n        <ion-buttons slot=\"start\">\n            <ion-icon name=\"arrow-back\" color=\"dark\" style=\"float:left;left: 0;font-size: 22px;\" (click)=\"closeModal()\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n    <div  mode=\"ios\">\n        <img src=\"{{item.img}}\" alt=\"Portada\" style=\"width: 100%;\" *ngIf=\"item.img\">\n        <ion-card-header>\n        <ion-card-title style=\"font-size: 18px; font-family: 'SF Pro Display';font-weight: 400;\">\n            {{item.name}}\n        </ion-card-title>\n        <ion-card-subtitle style=\"color: rgb(53, 53, 53);\">\n            {{item.description}}\n        </ion-card-subtitle>\n        </ion-card-header>\n      \n        <ion-item>\n            <ion-label><span style=\"font-size: 16px;font-family: 'SF Pro Display';font-weight: 500;color:green;\">Total: {{cart_total | currency}}</span></ion-label>\n        </ion-item>\n    </div>\n\n    <ion-list>\n        <ion-list-header *ngIf=\"item.s_price && item.m_price && item.l_price\">\n            {{ text.item_size_heading }}\n        </ion-list-header>\n        <ion-radio-group>\n            <ion-item *ngIf=\"item.s_price > 0 && item.m_price && item.l_price\">\n                <ion-label>{{ text.item_small }} <span style=\"float: right\">{{ currency }}{{ item.s_price }}</span></ion-label>\n                <ion-radio slot=\"start\" color=\"primary\" value=\"s\" (ionSelect)=\"selectItem(1,item.s_price)\" checked=\"true\"></ion-radio>\n            </ion-item>\n\n            <ion-item *ngIf=\"item.m_price > 0\">\n                <ion-label>{{ text.item_m }} <span style=\"float: right\">{{ currency }}{{ item.m_price }}</span></ion-label>\n                <ion-radio slot=\"start\" color=\"primary\" value=\"m\" (ionSelect)=\"selectItem(2,item.m_price)\"></ion-radio>\n            </ion-item>\n\n            <ion-item *ngIf=\"item.l_price > 0\">\n                <ion-label>{{ text.item_large }} <span style=\"float: right\">{{ currency }}{{ item.l_price }}</span></ion-label>\n                <ion-radio slot=\"start\" color=\"primary\" value=\"l\" (ionSelect)=\"selectItem(3,item.l_price)\"></ion-radio>\n            </ion-item>\n        </ion-radio-group>\n    </ion-list>\n\n    <ion-list *ngIf=\"item.addon.length > 0\">\n        <ion-list-header>\n            {{ text.item_addon_heading }}\n        </ion-list-header>\n\n        <ion-item *ngFor=\"let addon of item.addon\">\n            <ion-label>{{ addon.name }} <span style=\"float: right\">{{ currency }}{{ addon.price }}</span></ion-label>\n            <ion-checkbox color=\"primary\" slot=\"start\" (ionChange)=\"addonSelect(addon)\"></ion-checkbox>\n        </ion-item>\n    </ion-list>\n\n    <div class=\"quantitybtn\" style=\"text-align: center;padding: 12px 0;\">\n        <button type=\"button\" class=\"sign plus\" data-quantity=\"plus\" data-field=\"quantity\" *ngIf=\"qty >= 2\" (click)=\"Qty('rest')\"> - </button>\n        <input class=\"quantityinput\" type=\"text\" name=\"qty\" value=\"{{ qty }}\" readonly=\"readonly\">\n        <button type=\"button\" class=\"sign minus\" data-quantity=\"minus\" data-field=\"quantity\" (click)=\"Qty('sum')\">+</button>\n    </div>\n    <div class=\"footer-line\"></div>\n</ion-content>\n\n\n \n<ion-footer padding style=\"border:1px solid #e6e6e6;background-color: #ffffff;\">\n    <button class=\"addToCartBtn\" (click)=\"addToCart()\">\n        <!-- [disabled]=\"!itemID\" -->\n        {{ text.item_addon_button }} x{{ qty }} al carrito: {{itemPrice | currency}}\n    </button>\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return __assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return extendStatics(d, b);
    };

    function __extends(d, b) {
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function () {
      __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    const routes = [{
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: () => __webpack_require__.e(
      /*! import() | home-home-module */
      "home-home-module").then(__webpack_require__.bind(null,
      /*! ./home/home.module */
      "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
    }, {
      path: 'list',
      loadChildren: () => __webpack_require__.e(
      /*! import() | list-list-module */
      "list-list-module").then(__webpack_require__.bind(null,
      /*! ./list/list.module */
      "./src/app/list/list.module.ts")).then(m => m.ListPageModule)
    }, {
      path: 'welcome',
      loadChildren: './welcome/welcome.module#WelcomePageModule'
    }, {
      path: 'city',
      loadChildren: './account/city/city.module#CityPageModule'
    }, {
      path: 'item',
      loadChildren: './item/item.module#ItemPageModule'
    }, {
      path: 'option',
      loadChildren: './option/option.module#OptionPageModule'
    }, {
      path: 'info',
      loadChildren: './info/info.module#InfoPageModule'
    }, {
      path: 'cart',
      loadChildren: './cart/cart.module#CartPageModule'
    }, {
      path: 'offer',
      loadChildren: './offer/offer.module#OfferPageModule'
    }, {
      path: 'checkout',
      loadChildren: './checkout/checkout.module#CheckoutPageModule'
    }, {
      path: 'login',
      loadChildren: './account/login/login.module#LoginPageModule'
    }, {
      path: 'chkphone',
      loadChildren: './account/chkphone/chkphone.module#ChkphonePageModule'
    }, {
      path: 'verfycode',
      loadChildren: './account/verfycode/verfycode.module#VerfycodePageModule'
    }, {
      path: 'signup',
      loadChildren: './account/signup/signup.module#SignupPageModule'
    }, {
      path: 'forgot',
      loadChildren: './account/forgot/forgot.module#ForgotPageModule'
    }, {
      path: 'address',
      loadChildren: './account/address/address.module#AddressPageModule'
    }, {
      path: 'done',
      loadChildren: './done/done.module#DonePageModule'
    }, {
      path: 'profile',
      loadChildren: './account/profile/profile.module#ProfilePageModule'
    }, {
      path: 'order',
      loadChildren: './account/order/order.module#OrderPageModule'
    }, {
      path: 'rate/:id',
      loadChildren: './account/rate/rate.module#RatePageModule'
    }, {
      path: 'about',
      loadChildren: './page/about/about.module#AboutPageModule'
    }, {
      path: 'how',
      loadChildren: './page/how/how.module#HowPageModule'
    }, {
      path: 'faq',
      loadChildren: './page/faq/faq.module#FaqPageModule'
    }, {
      path: 'contact',
      loadChildren: './page/contact/contact.module#ContactPageModule'
    }, {
      path: 'lang',
      loadChildren: './lang/lang.module#LangPageModule'
    }, {
      path: 'categorys',
      loadChildren: './categorys/categorys.module#CategorysPageModule'
    }, {
      path: 'locked',
      loadChildren: './locked/locked.module#LockedPageModule'
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  font-size: 14px;\n}\n\nion-item ion-icon {\n  font-size: 16px;\n}\n\n.menu_img {\n  width: 70%;\n  margin-left: 10%;\n  padding: 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGlvbmljXFxjYXJtZW5hcHBcXHVzdWFyaW9zL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGVBQUE7QUNBRDs7QURHQTtFQUVDLGVBQUE7QUNERDs7QURJQTtFQUVDLFVBQUE7RUFBVyxnQkFBQTtFQUFpQixrQkFBQTtBQ0E3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtXG57XG5cdGZvbnQtc2l6ZToxNHB4O1xufVxuXG5pb24taXRlbSBpb24taWNvblxue1xuXHRmb250LXNpemU6MTZweDtcbn1cblxuLm1lbnVfaW1nXG57XG5cdHdpZHRoOiA3MCU7bWFyZ2luLWxlZnQ6IDEwJTtwYWRkaW5nOiAxMHB4IDEwcHg7XG59IiwiaW9uLWl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubWVudV9pbWcge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service/server.service */
    "./src/app/service/server.service.ts");

    let AppComponent = class AppComponent {
      constructor(server, platform, splashScreen, statusBar, nav, oneSignal, events) {
        this.server = server;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.nav = nav;
        this.oneSignal = oneSignal;
        this.events = events;
        this.appType = 0;
        this.dir = "ltr";
        this.appPages = [];
        this.loadData(localStorage.getItem('city_id') + "?ss=ss");
        this.events.subscribe('lang_change', type => {
          this.assginAppType(type);
        });
        this.events.subscribe('admin', type => {
          this.admin = type;
        });

        if (localStorage.getItem('admin')) {
          this.admin = JSON.parse(localStorage.getItem('admin'));
        }

        if (localStorage.getItem('app_text')) {
          this.text = JSON.parse(localStorage.getItem('app_text'));
          this.appPages = [{
            title: this.text.home,
            url: '/home',
            icon: 'home'
          }, {
            title: this.text.city,
            url: '/city',
            icon: 'pin'
          }, {
            title: this.text.account,
            url: '/profile',
            icon: 'person'
          }, {
            title: this.text.order,
            url: '/order',
            icon: 'cart'
          }];
        } else {
          var home = "Home";
          var city = "Change City";
          var lang = "Language";
          var profile = "My Account";
          var order = "My Orders";
          this.appPages = [{
            title: home,
            url: '/home',
            icon: 'home'
          }, {
            title: city,
            url: '/city',
            icon: 'pin'
          }, {
            title: profile,
            url: '/profile',
            icon: 'person'
          }, {
            title: order,
            url: '/order',
            icon: 'cart'
          }];
        }

        this.events.subscribe('text', text => {
          this.text = text;
          this.appPages = [{
            title: text.home,
            url: '/home',
            icon: 'home'
          }, {
            title: text.city,
            url: '/city',
            icon: 'pin'
          }, // {
          //   title: text.language,
          //   url: '/lang',
          //   icon: 'flag'
          // },
          {
            title: text.account,
            url: '/profile',
            icon: 'person'
          }, {
            title: text.order,
            url: '/order',
            icon: 'cart'
          }];
        });

        if (localStorage.getItem('app_type')) {
          if (localStorage.getItem('app_type') == "1") {
            this.dir = "rtl";
          } else {
            this.dir = "ltr";
          }
        }

        if (localStorage.getItem('city_id') && localStorage.getItem('city_id') != 'null') {
          this.nav.navigateRoot('/home');
        } else {
          this.nav.navigateRoot('/welcome');
        }

        this.initializeApp();
        this.events.subscribe('user_login', id => {
          this.subPush(id);
        });
      }

      assginAppType(ty) {
        this.dir = ty == 0 ? "ltr" : "rtl";
      }

      initializeApp() {
        this.platform.ready().then(() => {
          // Obtenemos la Geolocalicacion
          this.server.getGeolocation();
          this.statusBar.overlaysWebView(false);
          this.statusBar.backgroundColorByHexString("#ffffff");
          this.statusBar.styleDefault();
          this.subPush();
        });
      }

      subPush(id = 0) {
        this.oneSignal.startInit('1c466800-f09e-4f77-b4c4-90dd59bec199', '998111828126');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(() => {// do something when notification is received
        });
        this.oneSignal.handleNotificationOpened().subscribe(() => {// do something when a notification is opened
        });

        if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null') {
          this.oneSignal.sendTags({
            user_id: localStorage.getItem('user_id')
          });
        }

        if (id > 0) {
          this.oneSignal.sendTags({
            user_id: id
          });
        }

        this.oneSignal.endInit();
      }

      logout() {
        localStorage.setItem('user_id', null);
        this.nav.navigateForward('/login');
      }

      loadData(city_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
          var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
          var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
          this.server.homepage(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
            this.data = response.data;
            this.text = response.data.text;
            this.events.publish('text', this.text);
            this.events.publish('admin', response.data.admin);
            localStorage.setItem('app_text', JSON.stringify(response.data.text));
            localStorage.setItem('admin', JSON.stringify(response.data.admin));
          });
        });
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_6__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
    }, {
      type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
    }, {
      type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }, {
      type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
    }];

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_service__WEBPACK_IMPORTED_MODULE_6__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _option_option_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./option/option.module */
    "./src/app/option/option.module.ts");
    /* harmony import */


    var _offer_offer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./offer/offer.module */
    "./src/app/offer/offer.module.ts");
    /* harmony import */


    var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/paypal/ngx */
    "./node_modules/@ionic-native/paypal/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/stripe/ngx */
    "./node_modules/@ionic-native/stripe/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_23__); // Facebook
    // Google
    // Firebase


    firebase_app__WEBPACK_IMPORTED_MODULE_23__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebaseConfig);
    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _option_option_module__WEBPACK_IMPORTED_MODULE_11__["OptionPageModule"], _offer_offer_module__WEBPACK_IMPORTED_MODULE_12__["OfferPageModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuthModule"]],
      providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_16__["NativeGeocoder"], _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_13__["PayPal"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_14__["OneSignal"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_17__["Keyboard"], _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_15__["Stripe"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_18__["Facebook"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_19__["GooglePlus"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/offer/offer.module.ts":
  /*!***************************************!*\
    !*** ./src/app/offer/offer.module.ts ***!
    \***************************************/

  /*! exports provided: OfferPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferPageModule", function () {
      return OfferPageModule;
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


    var _offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./offer.page */
    "./src/app/offer/offer.page.ts");

    const routes = [{
      path: '',
      component: _offer_page__WEBPACK_IMPORTED_MODULE_6__["OfferPage"]
    }];
    let OfferPageModule = class OfferPageModule {};
    OfferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_offer_page__WEBPACK_IMPORTED_MODULE_6__["OfferPage"]]
    })], OfferPageModule);
    /***/
  },

  /***/
  "./src/app/offer/offer.page.scss":
  /*!***************************************!*\
    !*** ./src/app/offer/offer.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmVyL29mZmVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/offer/offer.page.ts":
  /*!*************************************!*\
    !*** ./src/app/offer/offer.page.ts ***!
    \*************************************/

  /*! exports provided: OfferPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferPage", function () {
      return OfferPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let OfferPage = class OfferPage {
      constructor(loadingController, server, route, nav, toastController, modalController) {
        this.loadingController = loadingController;
        this.server = server;
        this.route = route;
        this.nav = nav;
        this.toastController = toastController;
        this.modalController = modalController;
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
          this.server.getOffer(localStorage.getItem('cart_no')).subscribe(response => {
            this.data = response.data;
            loading.dismiss();
          });
        });
      }

      applyNow(cdata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.modalController.dismiss({
            id: cdata
          });
        });
      }

      closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.modalController.dismiss({
            id: false
          });
        });
      }

    };

    OfferPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }];

    OfferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offer.page.scss */
      "./src/app/offer/offer.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], OfferPage);
    /***/
  },

  /***/
  "./src/app/option/option.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/option/option.module.ts ***!
    \*****************************************/

  /*! exports provided: OptionPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionPageModule", function () {
      return OptionPageModule;
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


    var _option_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./option.page */
    "./src/app/option/option.page.ts");

    const routes = [{
      path: '',
      component: _option_page__WEBPACK_IMPORTED_MODULE_6__["OptionPage"]
    }];
    let OptionPageModule = class OptionPageModule {};
    OptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_option_page__WEBPACK_IMPORTED_MODULE_6__["OptionPage"]]
    })], OptionPageModule);
    /***/
  },

  /***/
  "./src/app/option/option.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/option/option.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --position:relative;\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  --color:#fff;\n}\n\n/* Show background if class is active */\n\n.show-background {\n  border-style: none;\n  background: #fff;\n  color: #000;\n  padding-top: 8px;\n}\n\n.show-background .title_header {\n  display: block;\n}\n\n/* Remove bottom border on md */\n\n.header-md::after {\n  background-image: none;\n}\n\n/* Remove bottom border on ios */\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n\nion-content {\n  position: absolute;\n  top: 0;\n  padding-bottom: 50px;\n}\n\n.footer-line {\n  width: 100%;\n  height: 100px;\n}\n\n.addToCartBtn {\n  width: 100%;\n  background-color: #15ad3b;\n  color: #fff;\n  padding: 15px 25px;\n}\n\n.quantityinput {\n  padding: 2px 2px;\n  text-align: center;\n  border: 1px solid #ccc;\n  background: #fff;\n  width: 28px;\n}\n\n.quantitybtn .sign {\n  padding: 7px 2px;\n  width: 20px;\n  text-align: center;\n  cursor: pointer;\n  font-weight: bold;\n  outline: none;\n}\n\n.quantitybtn .plus {\n  background: #f44336;\n  border: 1px solid #f44336;\n  color: #fff;\n  border-radius: 5px 0px 0px 5px;\n}\n\n.quantitybtn .minus {\n  background: #4caf50;\n  border: 1px solid #4caf50;\n  color: #fff;\n  border-radius: 0px 5px 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9uL0M6XFxpb25pY1xcY2FybWVuYXBwXFx1c3Vhcmlvcy9zcmNcXGFwcFxcb3B0aW9uXFxvcHRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9vcHRpb24vb3B0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG1CQUFBO0VBQ0cseUJBQUE7RUFDSCx3Q0FBQTtFQUNBLFlBQUE7QUNDRDs7QURFQSx1Q0FBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0gsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURDQztFQUNDLGNBQUE7QUNDRjs7QURJQSwrQkFBQTs7QUFDQTtFQUNJLHNCQUFBO0FDREo7O0FESUEsZ0NBQUE7O0FBQ0E7RUFDSSxpQkFBQTtBQ0RKOztBREtBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0Esb0JBQUE7QUNGRDs7QURLQTtFQUNDLFdBQUE7RUFDQSxhQUFBO0FDRkQ7O0FES0E7RUFDQyxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNGRDs7QURLQTtFQUFlLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW1CLHNCQUFBO0VBQXdCLGdCQUFBO0VBQWlCLFdBQUE7QUNHNUY7O0FERkE7RUFBbUIsZ0JBQUE7RUFBaUIsV0FBQTtFQUFZLGtCQUFBO0VBQW1CLGVBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsYUFBQTtBQ1dyRzs7QURWQTtFQUFtQixtQkFBQTtFQUFvQix5QkFBQTtFQUEwQixXQUFBO0VBQVksOEJBQUE7QUNpQjdFOztBRGhCQTtFQUFvQixtQkFBQTtFQUFvQix5QkFBQTtFQUEwQixXQUFBO0VBQVksOEJBQUE7QUN1QjlFIiwiZmlsZSI6InNyYy9hcHAvb3B0aW9uL29wdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcblx0LS1wb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0LS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuXHQtLWNvbG9yOiNmZmY7XHJcbn1cclxuXHJcbi8qIFNob3cgYmFja2dyb3VuZCBpZiBjbGFzcyBpcyBhY3RpdmUgKi9cclxuLnNob3ctYmFja2dyb3VuZCB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRjb2xvcjogIzAwMDtcclxuXHRwYWRkaW5nLXRvcDogOHB4O1xyXG5cclxuXHQudGl0bGVfaGVhZGVyIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qIFJlbW92ZSBib3R0b20gYm9yZGVyIG9uIG1kICovXHJcbi5oZWFkZXItbWQ6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSBib3R0b20gYm9yZGVyIG9uIGlvcyAqL1xyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcblxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6MDtcclxuXHRwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmZvb3Rlci1saW5lIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uYWRkVG9DYXJ0QnRuIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEsIDE3MywgNTkpO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHBhZGRpbmc6IDE1cHggMjVweDtcclxufVxyXG5cclxuLnF1YW50aXR5aW5wdXR7cGFkZGluZzoycHggMnB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgYm9yZGVyOjFweCBzb2xpZCAjY2NjOyAgYmFja2dyb3VuZDojZmZmOyB3aWR0aDoyOHB4O31cclxuLnF1YW50aXR5YnRuIC5zaWdue3BhZGRpbmc6N3B4IDJweDsgd2lkdGg6MjBweDsgdGV4dC1hbGlnbjpjZW50ZXI7IGN1cnNvcjpwb2ludGVyOyBmb250LXdlaWdodDpib2xkOyBvdXRsaW5lOm5vbmU7IH1cclxuLnF1YW50aXR5YnRuIC5wbHVze2JhY2tncm91bmQ6I2Y0NDMzNjsgYm9yZGVyOjFweCBzb2xpZCAjZjQ0MzM2OyBjb2xvcjojZmZmOyBib3JkZXItcmFkaXVzOjVweCAwcHggMHB4IDVweDt9XHJcbi5xdWFudGl0eWJ0biAubWludXN7YmFja2dyb3VuZDojNGNhZjUwOyBib3JkZXI6MXB4IHNvbGlkICM0Y2FmNTA7IGNvbG9yOiNmZmY7IGJvcmRlci1yYWRpdXM6MHB4IDVweCA1cHggMHB4O31cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLXBvc2l0aW9uOnJlbGF0aXZlO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiNmZmY7XG59XG5cbi8qIFNob3cgYmFja2dyb3VuZCBpZiBjbGFzcyBpcyBhY3RpdmUgKi9cbi5zaG93LWJhY2tncm91bmQge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLnNob3ctYmFja2dyb3VuZCAudGl0bGVfaGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFJlbW92ZSBib3R0b20gYm9yZGVyIG9uIG1kICovXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi8qIFJlbW92ZSBib3R0b20gYm9yZGVyIG9uIGlvcyAqL1xuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLmZvb3Rlci1saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5hZGRUb0NhcnRCdG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1YWQzYjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbn1cblxuLnF1YW50aXR5aW5wdXQge1xuICBwYWRkaW5nOiAycHggMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4ucXVhbnRpdHlidG4gLnNpZ24ge1xuICBwYWRkaW5nOiA3cHggMnB4O1xuICB3aWR0aDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucXVhbnRpdHlidG4gLnBsdXMge1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjQ0MzM2O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xufVxuXG4ucXVhbnRpdHlidG4gLm1pbnVzIHtcbiAgYmFja2dyb3VuZDogIzRjYWY1MDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjYWY1MDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/option/option.page.ts":
  /*!***************************************!*\
    !*** ./src/app/option/option.page.ts ***!
    \***************************************/

  /*! exports provided: OptionPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionPage", function () {
      return OptionPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/server.service */
    "./src/app/service/server.service.ts");

    let OptionPage = class OptionPage {
      constructor(navParams, modalController, server, toastController) {
        this.navParams = navParams;
        this.modalController = modalController;
        this.server = server;
        this.toastController = toastController;
        this.addonData = [];
        this.addonPrice = 0;
        this.cart = [];
        this.showToolbar = false;
        this.item = navParams.get('item');
        this.currency = navParams.get('currency');
        this.cart = navParams.get('cart');
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.itemPrice = parseFloat(this.item.s_price);
        this.itPrice = parseFloat(this.item.s_price);
        this.itemID = 1;
        this.qty = 1;
        this.cart_no = localStorage.getItem('cart_no');
        this.data = JSON.parse(localStorage.getItem('menu_item'));
        this.ViewCart();
      }

      ngOnInit() {}

      ViewCart() {
        var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
        var lat = localStorage.getItem('current_lat') ? localStorage.getItem('current_lat') : 0;
        var lng = localStorage.getItem('current_lng') ? localStorage.getItem('current_lng') : 0;
        this.server.getCart(localStorage.getItem('cart_no') + "?lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe(response => {
          console.log(response);
          this.cart_total = Number(response.data.total);
        });
      }

      addToCart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.modalController.dismiss({
            proces: 'addTocart',
            id: this.item.id,
            price: this.itPrice,
            qty: this.qty,
            type: this.itemID,
            addonData: this.addonData
          });
        });
      }

      Qty(process) {
        if (process == 'sum') {
          this.qty += 1;
        } else {
          this.qty -= 1;
        }

        if (this.addonPrice > 0) {
          this.itemPrice = parseFloat(this.itPrice) * this.qty + parseFloat(this.addonPrice);
        } else {
          this.itemPrice = parseFloat(this.itPrice) * this.qty;
        }
      }

      updateCart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.modalController.dismiss({
            proces: 'updateTocart',
            id: this.item.id,
            price: this.itemPrice,
            type: this.itemID,
            addonData: this.addonData
          });
        });
      }

      closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.modalController.dismiss({
            data: true
          });
        });
      }

      selectItem(type, price) {
        this.itemID = type;
        this.itPrice = price;

        if (this.addonPrice > 0) {
          this.itemPrice = parseFloat(price) * this.qty + parseFloat(this.addonPrice);
        } else {
          this.itemPrice = parseFloat(price) * this.qty;
        }
      }

      addonSelect(addon) {
        if (this.addonData.includes(addon.id)) {
          var ind = this.addonData.indexOf(addon.id);
          this.itemPrice = parseFloat(this.itemPrice) - parseFloat(addon.price);
          this.addonPrice = parseFloat(this.addonPrice) - parseFloat(addon.price);
          this.addonData.splice(ind, 1);
        } else {
          this.addonData.push(addon.id);
          this.itemPrice = parseFloat(this.itemPrice) + parseFloat(addon.price);
          this.addonPrice = parseFloat(this.addonPrice) + parseFloat(addon.price);
        }
      }

      hasCart(id) {
        for (var i = 0; i < this.cart.length; i++) {
          if (this.cart[i].item_id == id) {
            return this.cart[i].qty;
          }
        }

        return 1;
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

    OptionPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }];

    OptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-option',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./option.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./option.page.scss */
      "./src/app/option/option.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], OptionPage);
    /***/
  },

  /***/
  "./src/app/service/server.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/server.service.ts ***!
    \*******************************************/

  /*! exports provided: ServerService */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerService", function () {
      return ServerService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");

    let ServerService = class ServerService {
      constructor(http, geolocation) {
        this.http = http;
        this.geolocation = geolocation; //put /api/ after your url e.g https://www.abc.com/api/ 

        this.url = "https://dash.carmenapp.com.mx/api/";
        this.geoLatitude = null;
        this.geoLongitude = null;
      }

      get windowRef() {
        return window;
      }

      getGeolocation() {
        this.geolocation.getCurrentPosition().then(resp => {
          this.geoLatitude = resp.coords.latitude;
          this.geoLongitude = resp.coords.longitude; //this.geoAccuracy = resp.coords.accuracy; 

          localStorage.setItem('current_lat', this.geoLatitude);
          localStorage.setItem('current_lng', this.geoLongitude);
        }).catch(error => {
          //  Fail
          console.log(error);
        });
      }

      welcome() {
        return this.http.get(this.url + 'welcome').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getDeliveryType($id) {
        return this.http.get(this.url + 'getTypeDelivery/' + $id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      city() {
        return this.http.get(this.url + 'city?lid=' + localStorage.getItem('lid')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      lang() {
        return this.http.get(this.url + 'lang').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      homepage2(city_id, lid) {
        return this.http.get(this.url + 'homepage/' + city_id + '/' + lid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      homepage(city_id) {
        return this.http.get(this.url + 'homepage/' + city_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      search(query, type, city) {
        return this.http.get(this.url + 'search/' + query + '/' + type + '/' + city).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      addToCart(data) {
        return this.http.post(this.url + 'addToCart', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      updateCart(id, type) {
        return this.http.get(this.url + 'updateCart/' + id + '/' + type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      cartCount(cartNo) {
        return this.http.get(this.url + 'cartCount/' + cartNo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getCart(cartNo) {
        return this.http.get(this.url + 'getCart/' + cartNo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getOffer(cartNo) {
        return this.http.get(this.url + 'getOffer/' + cartNo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      applyCoupen(id, cartNo) {
        return this.http.get(this.url + 'applyCoupen/' + id + '/' + cartNo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      signup(data) {
        return this.http.post(this.url + 'signup', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      signupWithfb(data) {
        return this.http.get(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      login(data) {
        return this.http.post(this.url + 'login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      loginfb(data) {
        return this.http.post(this.url + 'loginfb', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      forgot(data) {
        return this.http.post(this.url + 'forgot', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      verify(data) {
        return this.http.post(this.url + 'verify', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      updatePassword(data) {
        return this.http.post(this.url + 'updatePassword', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getAddress(id) {
        return this.http.get(this.url + 'getAddress/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      myOrder(id) {
        return this.http.get(this.url + 'myOrder/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      saveAddress(data) {
        return this.http.post(this.url + 'addAddress', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      trashAddress(data) {
        return this.http.get(this.url + 'removeAddress/' + data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      order(data) {
        return this.http.post(this.url + 'order', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      userInfo(id) {
        return this.http.get(this.url + 'userinfo/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      updateInfo(data, id) {
        return this.http.post(this.url + 'updateInfo/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      cancelOrder(id, uid) {
        return this.http.get(this.url + 'cancelOrder/' + id + '/' + uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      loginFb(data) {
        return this.http.post(this.url + 'loginFb', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      SignPhone(data) {
        return this.http.post(this.url + 'SignPhone', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      sendChat(data) {
        return this.http.post(this.url + 'sendChat', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      push() {
        return this.http.get(this.url + 'push').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      rating(data) {
        return this.http.post(this.url + 'rate', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      updateCity(data) {
        return this.http.post(this.url + 'rate', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      pages() {
        return this.http.get(this.url + 'pages?lid=' + localStorage.getItem('lid')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      makeStripePayment(token) {
        // makeStripePayment
        return this.http.get(this.url + 'makeStripePayment' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

      getStatus(id) {
        return this.http.get(this.url + 'getStatus/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results));
      }

    };

    ServerService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
    }];

    ServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]])], ServerService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: true,
      firebaseConfig: {
        apiKey: "AIzaSyCBmsHOjoPbNvuZRIBV-BEyTVJpr0QcElo",
        authDomain: "carmen-app-3d957.firebaseapp.com",
        databaseURL: "https://carmen-app-3d957.firebaseio.com",
        projectId: "carmen-app-3d957",
        storageBucket: "carmen-app-3d957.appspot.com",
        messagingSenderId: "998111828126",
        appId: "1:998111828126:web:eea2686230708a8a74438f",
        measurementId: "G-1F66K73DQX"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.log(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\ionic\carmenapp\usuarios\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map