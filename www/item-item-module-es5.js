(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-item-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border style=\"z-index: 1000;\">\n  <ion-toolbar color=\"primary\"> \n    <!-- [class.show-background]=\"showToolbar\" translucent -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <span class=\"title_header\">{{ data.title }}</span>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" routerLink=\"/info\" routerDirection=\"forward\"> \n      <ion-icon name=\"home\" slot=\"end\" style=\"float: right;margin-right: 15px;\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <div class=\"slide-menu\">\n    <ion-slides  [options]=\"BannerOption\">\n      <ion-slide *ngFor=\"let category of data.items\" style=\"text-align: left;\">\n        <ion-label style=\"font-size: 14px;\" (click)=\"ScrollTo(category.cate_name)\">{{category.cate_name}}</ion-label>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-header>\n\n<ion-content mode=\"ios\" fullscreen [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n\n  <ion-fab style=\"padding-bottom: 45px;\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" *ngIf=\"count > 0\" routerLink=\"/cart\" routerDirection=\"forward\">\n    <ion-fab-button color=\"danger\" edge=\"true\">\n      <ion-icon name=\"cart\"></ion-icon> {{ count }}\n    </ion-fab-button>\n  </ion-fab>\n  \n  <ion-fab style=\"padding-bottom: 45px;\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" *ngIf=\"order > 0\" routerLink=\"/done\" routerDirection=\"forward\">\n    <ion-fab-button color=\"danger\" edge=\"true\">\n      <ion-icon name=\"pin\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-slides pager=\"true\" autoplay=\"3000\">\n      <ion-slide ><img src=\"{{ data.img }}\"></ion-slide>\n  </ion-slides>\n\n  <ion-card mode=\"ios\" style=\"margin-top: -18%;margin-bottom: 15%;background-color: #ffffff;width: 96%;margin-left: 2%;top:10px;z-index:100;\" class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title style=\"font-size: 25px\"><span class=\"content_title\">{{ data.title }}</span><ion-badge color=\"primary\" style=\"float: right\">{{ data.rating }}<br></ion-badge></ion-card-title>\n      <ion-card-subtitle>\n        <ion-icon name=\"pin\"></ion-icon> {{data.address}}\n      </ion-card-subtitle>\n    </ion-card-header>\n\n\n  <ion-card-content>\n\n  <span *ngFor=\"let category of data.items\" class=\"{{ category.cate_name }}\">\n  <h1 style=\"margin-top: 20px\">{{ category.cate_name }}</h1>\n\n  <span *ngFor=\"let item of category.items\">\n  <ion-row style=\"margin-top:10px;padding: 0px\" *ngIf=\"item.status == 0\">\n    <ion-col size=\"5\" (click)=\"showOption(item,data.currency)\">\n      <div class=\"pic_menu\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\n    </ion-col>\n    <ion-col size=\"7\" style=\"position: relative;\">\n      <b (click)=\"showOption(item,data.currency)\">{{ item.name }}</b><br>\n        <small (click)=\"showOption(item,data.currency)\" style=\"color: gray;font-size: 10px\" *ngIf=\"item.description\">\n            {{ item.description | slice:0:25 }}...\n        </small><br>\n      <span (click)=\"showOption(item,data.currency)\" style=\"color: rgb(29, 29, 29);font-size: 11px\"><b>MXN {{ data.currency }}{{ item.price }}</b></span>\n        \n      <ion-badge *ngIf=\"hasCart(item.id)\" class=\"badgeCart\">{{hasCart(item.id)}}</ion-badge>\n     \n    </ion-col>\n   \n  </ion-row>\n  </span>\n  </span>\n\n\n\n  </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer *ngIf=\"text\" style=\"z-index: 1000;\">\n    <ion-toolbar mode=\"ios\">\n    \n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\">\n        \n       <ion-tab-button routerLink=\"/home\">\n          <ion-icon name=\"home\"></ion-icon>\n          <ion-label>{{ text.home_footer_name }}</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button routerLink=\"/home\">\n          <ion-icon name=\"pin\"></ion-icon>\n          <ion-label>{{ text.home_nearest }}</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button routerLink=\"/cart\" routerDirection=\"forward\">\n          <ion-icon name=\"basket\"></ion-icon>\n          <ion-label>{{ text.home_cart }}</ion-label>\n          <ion-badge *ngIf=\"count > 0\">{{ count }}</ion-badge>\n        </ion-tab-button>\n    \n        <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\n          <ion-icon name=\"person\"></ion-icon>\n          <ion-label>{{ text.home_profile }}</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n    \n    </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/item/item.module.ts":
  /*!*************************************!*\
    !*** ./src/app/item/item.module.ts ***!
    \*************************************/

  /*! exports provided: ItemPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemPageModule", function () {
      return ItemPageModule;
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


    var _item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./item.page */
    "./src/app/item/item.page.ts");

    const routes = [{
      path: '',
      component: _item_page__WEBPACK_IMPORTED_MODULE_6__["ItemPage"]
    }];
    let ItemPageModule = class ItemPageModule {};
    ItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_item_page__WEBPACK_IMPORTED_MODULE_6__["ItemPage"]]
    })], ItemPageModule);
    /***/
  },

  /***/
  "./src/app/item/item.page.scss":
  /*!*************************************!*\
    !*** ./src/app/item/item.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n/* Transparent standard */\n\n@-webkit-keyframes pulsate {\n  from {\n    right: -50%;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n\n@keyframes pulsate {\n  from {\n    right: -50%;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n\n@-webkit-keyframes downer {\n  from {\n    right: -30%;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n\n@keyframes downer {\n  from {\n    right: -30%;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n\n/* Show background if class is active */\n\n.show-background {\n  border-style: none;\n  background: #fff;\n  color: #000;\n  padding-top: 18px;\n  -webkit-animation-duration: 0.6s;\n  animation-duration: 0.6s;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-name: downer;\n  animation-name: downer;\n  -webkit-animation-direction: normal;\n  animation-direction: normal;\n}\n\n.show-background .title_header {\n  display: block;\n  -webkit-animation-duration: 0.8s;\n  animation-duration: 0.8s;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-name: pulsate;\n  animation-name: pulsate;\n  -webkit-animation-direction: normal;\n  animation-direction: normal;\n}\n\n/* Remove bottom border on md */\n\n.header-md::after {\n  background-image: none;\n}\n\n/* Remove bottom border on ios */\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n\nion-content {\n  position: absolute;\n  top: 0;\n}\n\nh1 {\n  font-size: 19px;\n}\n\nion-badge {\n  --padding-bottom:5px;\n  --padding-start:10px;\n  --padding-end:10px;\n  --padding-top:5px;\n}\n\n.quantityinput {\n  padding: 2px 2px;\n  text-align: center;\n  border: 1px solid #ccc;\n  background: #fff;\n  width: 28px;\n}\n\n.quantitybtn .sign {\n  padding: 7px 2px;\n  width: 20px;\n  text-align: center;\n  cursor: pointer;\n  font-weight: bold;\n  outline: none;\n}\n\n.quantitybtn .plus {\n  background: #f44336;\n  border: 1px solid #f44336;\n  color: #fff;\n  border-radius: 5px 0px 0px 5px;\n}\n\n.quantitybtn .minus {\n  background: #4caf50;\n  border: 1px solid #4caf50;\n  color: #fff;\n  border-radius: 0px 5px 5px 0px;\n}\n\n.header_stikcy {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 250px;\n  padding: 12px 15px;\n  z-index: 50;\n  overflow: hidden;\n}\n\n.header_stikcy:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: -1;\n}\n\n.header_stikcy ion-icon {\n  color: #fff;\n  font-size: 28px;\n}\n\n.slide-menu {\n  display: block;\n  position: relative;\n  width: 100%;\n  padding: 10px 6px;\n  background-color: #000;\n  visibility: hidden;\n}\n\n.slide_down_View {\n  visibility: visible;\n  -webkit-animation-duration: 0.6s;\n  animation-duration: 0.6s;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-name: downer;\n  animation-name: downer;\n  -webkit-animation-direction: normal;\n  animation-direction: normal;\n}\n\n.slide-menu ion-label {\n  font-family: \"SF Pro Display\";\n  font-weight: 100;\n  font-style: normal;\n  font-size: 14px;\n  color: #fff;\n  letter-spacing: 0.8px;\n}\n\n.pic_menu {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n}\n\n.badgeCart {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9DOlxcaW9uaWNcXGNhcm1lbmFwcFxcdXN1YXJpb3Mvc3JjXFxhcHBcXGl0ZW1cXGl0ZW0ucGFnZS5zY3NzIiwic3JjL2FwcC9pdGVtL2l0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREdBLHlCQUFBOztBQWNDO0VBa0NBO0lBQ0MsV0FBQTtJQUNBLFVBQUE7RUM5Q0E7RURnREQ7SUFDQyxVQUFBO0lBQ0EsUUFBQTtFQzlDQTtBQUNGOztBRGNDO0VBeUJBO0lBQ0MsV0FBQTtJQUNBLFVBQUE7RUNoQkE7RURrQkQ7SUFDQyxVQUFBO0lBQ0EsUUFBQTtFQ2hCQTtBQUNGOztBRHpCQztFQTZDQTtJQUNDLFdBQUE7SUFDQSxVQUFBO0VDakJBO0VEbUJEO0lBQ0MsVUFBQTtJQUNBLFFBQUE7RUNqQkE7QUFDRjs7QUQxQkM7RUFvQ0E7SUFDQyxXQUFBO0lBQ0EsVUFBQTtFQ2FBO0VEWEQ7SUFDQyxVQUFBO0lBQ0EsUUFBQTtFQ2FBO0FBQ0Y7O0FEREEsdUNBQUE7O0FBQ0E7RUFDSSxrQkFBQTtFQUNILGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBdERBLGdDQThDeUI7RUEzQ3pCLHdCQTJDeUI7RUExQ3pCLG9DQTBDK0I7RUF2Qy9CLDRCQXVDK0I7RUF0Qy9CLDhCQXNDaUI7RUFuQ2pCLHNCQW1DaUI7RUFsQ2pCLG1DQWtDa0M7RUEvQmxDLDJCQStCa0M7QUMyQm5DOztBRGhCQztFQUNDLGNBQUE7RUExREQsZ0NBMEMwQjtFQXZDMUIsd0JBdUMwQjtFQXRDMUIsb0NBc0NnQztFQW5DaEMsNEJBbUNnQztFQWxDaEMsK0JBa0NpQjtFQS9CakIsdUJBK0JpQjtFQTlCakIsbUNBOEJtQztFQTNCbkMsMkJBMkJtQztBQ2tEcEM7O0FENUJBLCtCQUFBOztBQUNBO0VBQ0ksc0JBQUE7QUMrQko7O0FENUJBLGdDQUFBOztBQUNBO0VBQ0ksaUJBQUE7QUMrQko7O0FEMUJBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0FDNkJEOztBRDFCQTtFQUVDLGVBQUE7QUM0QkQ7O0FEekJBO0VBRUMsb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUMyQkQ7O0FEeEJBO0VBQWUsZ0JBQUE7RUFBaUIsa0JBQUE7RUFBbUIsc0JBQUE7RUFBd0IsZ0JBQUE7RUFBaUIsV0FBQTtBQ2dDNUY7O0FEL0JBO0VBQW1CLGdCQUFBO0VBQWlCLFdBQUE7RUFBWSxrQkFBQTtFQUFtQixlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLGFBQUE7QUN3Q3JHOztBRHZDQTtFQUFtQixtQkFBQTtFQUFvQix5QkFBQTtFQUEwQixXQUFBO0VBQVksOEJBQUE7QUM4QzdFOztBRDdDQTtFQUFvQixtQkFBQTtFQUFvQix5QkFBQTtFQUEwQixXQUFBO0VBQVksOEJBQUE7QUNvRDlFOztBRGxEQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUFPLE9BQUE7RUFDUCxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDc0REOztBRHBEQztFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUFPLE9BQUE7RUFDUCxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUN1REY7O0FEcERDO0VBQ0MsV0FBQTtFQUNBLGVBQUE7QUNzREY7O0FEbERBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ3FERDs7QURsREE7RUFDQyxtQkFBQTtFQXRJQSxnQ0E4Q3lCO0VBM0N6Qix3QkEyQ3lCO0VBMUN6QixvQ0EwQytCO0VBdkMvQiw0QkF1QytCO0VBdEMvQiw4QkFzQ2lCO0VBbkNqQixzQkFtQ2lCO0VBbENqQixtQ0FrQ2tDO0VBL0JsQywyQkErQmtDO0FDNkpuQzs7QURqRUE7RUFDQyw2QkFBQTtFQUNHLGdCQUFBO0VBQ0gsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNHLHFCQUFBO0FDb0VKOztBRGpFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDb0VEOztBRGpFQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDb0VEIiwiZmlsZSI6InNyYy9hcHAvaXRlbS9pdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG59XG5cbi8qIFRyYW5zcGFyZW50IHN0YW5kYXJkICovXG4vLyBpb24tdG9vbGJhciB7XG4vLyAgICAgLy8gLS1iYWNrZ3JvdW5kOiByZWQ7XG4vLyBcdC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyBcdC0tY29sb3I6I2ZmZjtcbi8vIFx0LS1iYWNrZ3JvdW5kOiByZ2IoNDEsIDQxLCA0MSk7XG4vLyBcdC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDQyLCA0MiwgNDIpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpO1xuLy8gXHQudGl0bGVfaGVhZGVyIHtcbi8vIFx0XHRkaXNwbGF5OiBub25lO1xuLy8gXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vIFx0fVxuLy8gfVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG5cdEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG5cdCAgQGNvbnRlbnQ7XG5cdH1cblx0QC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcblx0ICBAY29udGVudDtcblx0fVxuXHRALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcblx0ICBAY29udGVudDtcblx0fVxuXHRAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcblx0ICBAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gYW5pbWF0ZSgkbmFtZSwgJGR1cmF0aW9uLCAkaXRlcmF0aW9uLCAkZGlyZWN0aW9uKSB7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG5cdC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG5cdC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogJGR1cmF0aW9uO1xuXHRhbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcblx0LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAkaXRlcmF0aW9uO1xuXHQtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb247XG5cdC1vLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb247XG5cdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb247XG5cdC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ICRuYW1lO1xuXHQtbW96LWFuaW1hdGlvbi1uYW1lOiAkbmFtZTtcblx0LW8tYW5pbWF0aW9uLW5hbWU6ICRuYW1lO1xuXHRhbmltYXRpb24tbmFtZTogJG5hbWU7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcblx0LW1vei1hbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuXHQtby1hbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuXHRhbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AaW5jbHVkZSBrZXlmcmFtZXMocHVsc2F0ZSkge1xuXHRmcm9tIHtcblx0XHRyaWdodDogLTUwJTtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cdHRvIHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHJpZ2h0OiAwO1xuXHR9XG59XG5cbkBpbmNsdWRlIGtleWZyYW1lcyhkb3duZXIpIHtcblx0ZnJvbSB7XG5cdFx0cmlnaHQ6IC0zMCU7XG5cdFx0b3BhY2l0eTogMDtcblx0fVxuXHR0byB7XG5cdFx0b3BhY2l0eTogMTtcblx0XHRyaWdodDogMDtcblx0fVxufVxuXG5cbkBtaXhpbiBwdWxzYXRlIHtcblx0QGluY2x1ZGUgYW5pbWF0ZShwdWxzYXRlLCAwLjhzLCAxLCBub3JtYWwpO1xufVxuXG5AbWl4aW4gZG93bmVyIHtcblx0QGluY2x1ZGUgYW5pbWF0ZShkb3duZXIsIDAuNnMsIDEsIG5vcm1hbCk7XG5cdFxufVxuLyogU2hvdyBiYWNrZ3JvdW5kIGlmIGNsYXNzIGlzIGFjdGl2ZSAqL1xuLnNob3ctYmFja2dyb3VuZCB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRjb2xvcjogIzAwMDtcblx0cGFkZGluZy10b3A6IDE4cHg7XG5cdEBpbmNsdWRlIGRvd25lcjtcblxuXHQudGl0bGVfaGVhZGVyIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRAaW5jbHVkZSBwdWxzYXRlO1xuXHR9XG59XG5cblxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gbWQgKi9cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBpb3MgKi9cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuXG5cblxuaW9uLWNvbnRlbnQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDowO1xufVxuXG5oMVxue1xuXHRmb250LXNpemU6MTlweDtcbn1cblxuaW9uLWJhZGdlXG57XG5cdC0tcGFkZGluZy1ib3R0b206NXB4O1xuXHQtLXBhZGRpbmctc3RhcnQ6MTBweDtcblx0LS1wYWRkaW5nLWVuZDoxMHB4O1xuXHQtLXBhZGRpbmctdG9wOjVweDtcbn1cblxuLnF1YW50aXR5aW5wdXR7cGFkZGluZzoycHggMnB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgYm9yZGVyOjFweCBzb2xpZCAjY2NjOyAgYmFja2dyb3VuZDojZmZmOyB3aWR0aDoyOHB4O31cbi5xdWFudGl0eWJ0biAuc2lnbntwYWRkaW5nOjdweCAycHg7IHdpZHRoOjIwcHg7IHRleHQtYWxpZ246Y2VudGVyOyBjdXJzb3I6cG9pbnRlcjsgZm9udC13ZWlnaHQ6Ym9sZDsgb3V0bGluZTpub25lOyB9XG4ucXVhbnRpdHlidG4gLnBsdXN7YmFja2dyb3VuZDojZjQ0MzM2OyBib3JkZXI6MXB4IHNvbGlkICNmNDQzMzY7IGNvbG9yOiNmZmY7IGJvcmRlci1yYWRpdXM6NXB4IDBweCAwcHggNXB4O31cbi5xdWFudGl0eWJ0biAubWludXN7YmFja2dyb3VuZDojNGNhZjUwOyBib3JkZXI6MXB4IHNvbGlkICM0Y2FmNTA7IGNvbG9yOiNmZmY7IGJvcmRlci1yYWRpdXM6MHB4IDVweCA1cHggMHB4O31cblxuLmhlYWRlcl9zdGlrY3kge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAyNTBweDtcblx0cGFkZGluZzogMTJweCAxNXB4O1xuXHR6LWluZGV4OiA1MDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XG5cdCY6YWZ0ZXIge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7bGVmdDogMDtcblx0XHRjb250ZW50OiAnJztcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC40KTtcblx0XHR6LWluZGV4OiAtMTtcblx0fVxuXG5cdGlvbi1pY29uIHtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRmb250LXNpemU6IDI4cHg7XG5cdH1cbn1cblxuLnNsaWRlLW1lbnUge1xuXHRkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMTBweCA2cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnNsaWRlX2Rvd25fVmlldyB7XG5cdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdEBpbmNsdWRlIGRvd25lcjtcbn1cblxuLnNsaWRlLW1lbnUgaW9uLWxhYmVsIHtcblx0Zm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjZmZmO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbn1cblxuLnBpY19tZW51IHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iYWRnZUNhcnQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0cmlnaHQ6IDA7XG5cdGZvbnQtc2l6ZTogMTBweDtcbn0iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIFRyYW5zcGFyZW50IHN0YW5kYXJkICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2F0ZSB7XG4gIGZyb20ge1xuICAgIHJpZ2h0OiAtNTAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBwdWxzYXRlIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC01MCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBwdWxzYXRlIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC01MCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBwdWxzYXRlIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC01MCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGRvd25lciB7XG4gIGZyb20ge1xuICAgIHJpZ2h0OiAtMzAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBkb3duZXIge1xuICBmcm9tIHtcbiAgICByaWdodDogLTMwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGRvd25lciB7XG4gIGZyb20ge1xuICAgIHJpZ2h0OiAtMzAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZG93bmVyIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC0zMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuLyogU2hvdyBiYWNrZ3JvdW5kIGlmIGNsYXNzIGlzIGFjdGl2ZSAqL1xuLnNob3ctYmFja2dyb3VuZCB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgLW8tYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZG93bmVyO1xuICAtbW96LWFuaW1hdGlvbi1uYW1lOiBkb3duZXI7XG4gIC1vLWFuaW1hdGlvbi1uYW1lOiBkb3duZXI7XG4gIGFuaW1hdGlvbi1uYW1lOiBkb3duZXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbW96LWFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW8tYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG59XG4uc2hvdy1iYWNrZ3JvdW5kIC50aXRsZV9oZWFkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuOHM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICAtby1hbmltYXRpb24tZHVyYXRpb246IDAuOHM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIC1vLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHB1bHNhdGU7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IHB1bHNhdGU7XG4gIC1vLWFuaW1hdGlvbi1uYW1lOiBwdWxzYXRlO1xuICBhbmltYXRpb24tbmFtZTogcHVsc2F0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tb3otYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAtby1hbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbn1cblxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gbWQgKi9cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gaW9zICovXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuXG5pb24tYmFkZ2Uge1xuICAtLXBhZGRpbmctYm90dG9tOjVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OjEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6MTBweDtcbiAgLS1wYWRkaW5nLXRvcDo1cHg7XG59XG5cbi5xdWFudGl0eWlucHV0IHtcbiAgcGFkZGluZzogMnB4IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMjhweDtcbn1cblxuLnF1YW50aXR5YnRuIC5zaWduIHtcbiAgcGFkZGluZzogN3B4IDJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnF1YW50aXR5YnRuIC5wbHVzIHtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y0NDMzNjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbn1cblxuLnF1YW50aXR5YnRuIC5taW51cyB7XG4gIGJhY2tncm91bmQ6ICM0Y2FmNTA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0Y2FmNTA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XG59XG5cbi5oZWFkZXJfc3Rpa2N5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIHotaW5kZXg6IDUwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmhlYWRlcl9zdGlrY3k6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiAtMTtcbn1cbi5oZWFkZXJfc3Rpa2N5IGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLnNsaWRlLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnNsaWRlX2Rvd25fVmlldyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAtby1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBkb3duZXI7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGRvd25lcjtcbiAgLW8tYW5pbWF0aW9uLW5hbWU6IGRvd25lcjtcbiAgYW5pbWF0aW9uLW5hbWU6IGRvd25lcjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tb3otYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAtby1hbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbn1cblxuLnNsaWRlLW1lbnUgaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG59XG5cbi5waWNfbWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJhZGdlQ2FydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/item/item.page.ts":
  /*!***********************************!*\
    !*** ./src/app/item/item.page.ts ***!
    \***********************************/

  /*! exports provided: ItemPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemPage", function () {
      return ItemPage;
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


    var _option_option_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../option/option.page */
    "./src/app/option/option.page.ts");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    let ItemPage = class ItemPage {
      constructor(modalController, toastController, server, statusBar, platform) {
        this.modalController = modalController;
        this.toastController = toastController;
        this.server = server;
        this.statusBar = statusBar;
        this.platform = platform;
        this.veg = false;
        this.cart = [];
        this.showToolbar = false;
        this.BannerOption = {
          initialSlide: 0,
          slidesPerView: 3.3,
          loop: false,
          centeredSlides: false,
          autoplay: false,
          spaceBetween: 7
        };
        this.data = JSON.parse(localStorage.getItem('menu_item'));
        this.text = JSON.parse(localStorage.getItem('app_text'));
      }

      ngOnInit() {}

      ionViewWillEnter() {
        this.platform.backButton.subscribeWithPriority(1, () => {});

        if (localStorage.getItem('cart_no') == 'null' || localStorage.getItem('cart_no') == undefined) {
          this.cart_no = Math.floor(Math.random() * 2000000000) + 1;
          localStorage.setItem('cart_no', this.cart_no);
        } else {
          this.cart_no = localStorage.getItem('cart_no');
        }

        this.server.cartCount(this.cart_no).subscribe(response => {
          this.count = response.data;
          this.cart = response.cart;
        });
      }

      vegOnly() {
        this.veg = this.veg == true ? false : true;
      }

      showOption(item, currency) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalController.create({
            component: _option_option_page__WEBPACK_IMPORTED_MODULE_3__["OptionPage"],
            animated: true,
            mode: 'md',
            // cssClass: 'my-custom-modal-css',
            backdropDismiss: false,
            componentProps: {
              'item': item,
              'cart': this.cart,
              'currency': currency
            }
          });
          modal.onDidDismiss().then(data => {
            if (data.data.proces == 'addTocart') {
              this.addToCart(data.data.id, data.data.price, data.data.type, data.data.qty, data.data.addonData);
            } else if (data.data.proces == 'updateTocart') {
              this.updateCart(data.data.id, data.data.type);
            }

            this.ionViewWillEnter();
          });
          return yield modal.present();
        });
      }

      addToCart(id, price, type = 0, qty, addon = []) {
        this.presentToast("Elemento Agregado.");
        var allData = {
          cart_no: this.cart_no,
          id: id,
          price: price,
          qtype: type,
          type: 0,
          qty: qty,
          addon: addon,
          price_comm: this.data.c_value
        };
        this.server.addToCart(allData).subscribe(response => {
          this.count = response.data.count;
          this.cart = response.data.cart;
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

      hasCart(id) {
        for (var i = 0; i < this.cart.length; i++) {
          if (this.cart[i].item_id == id) {
            return this.cart[i].qty;
          }
        }

        return false;
      }

      updateCart(id, type = 0) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.presentToast("Removed Successfully");
          this.server.updateCart(id, type + "?cart_no=" + this.cart_no + "&lid=" + localStorage.getItem('lid')).subscribe(response => {
            this.cart = response.data;
          });
        });
      }

      onScroll($event) {
        // let title:  HTMLSpanElement = document.querySelector('.content_title');
        // let subTitle: HTMLSpanElement = document.querySelector('.title_header');
        let menuSub = document.querySelector('.slide-menu');

        if ($event && $event.detail && $event.detail.scrollTop) {
          const scrollTop = $event.detail.scrollTop;
          this.showToolbar = scrollTop >= 175;

          if (scrollTop >= 175) {
            menuSub.className = 'slide-menu slide_down_View';
          } else {
            menuSub.className = 'slide-menu';
          }
        }
      }

      ScrollTo(div) {
        let menuSub = document.querySelector('.' + div);
        let DownY = menuSub.offsetTop + 210;
        this.Content.scrollToPoint(0, DownY, 300);
      }

    };

    ItemPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"]
    }, {
      type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])], ItemPage.prototype, "Content", void 0);
    ItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item.page.scss */
      "./src/app/item/item.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _service_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], ItemPage);
    /***/
  }
}]);
//# sourceMappingURL=item-item-module-es5.js.map