(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav\">\n      <li class=\"nav-item\">\n        <!-- <a class=\"nav-link\" href=\"mailto:sean.a.boehnke@gmail.com\">Email: sean.a.boehnke@gmail.com</a> -->\n      </li>\n    </ul>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\" navbar navbar-expand-lg navbar-absolute navbar-transparent\">\r\n  <div class=\" container-fluid\">\r\n    <div class=\" navbar-wrapper\">\r\n      <div class=\" navbar-toggle d-inline\">\r\n        <button class=\" navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n          <span class=\" navbar-toggler-bar bar1\"> </span>\r\n          <span class=\" navbar-toggler-bar bar2\"> </span>\r\n          <span class=\" navbar-toggler-bar bar3\"> </span>\r\n        </button>\r\n      </div>\r\n      <!-- <span class=\"navbar-brand full-size\">Sean A. Boehnke -- Unity Developer</span>\r\n      <span class=\"navbar-brand mobile-size\">Sean A. Boehnke</span> -->\r\n    </div>\r\n    <!-- <button\r\n      aria-label=\"Toggle navigation\"\r\n      class=\" navbar-toggler\"\r\n      (click)=\"collapse()\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      aria-controls=\"collapseExample\"\r\n      id=\"navigation\"\r\n      type=\"button\"\r\n    >\r\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n    </button> -->\r\n    <!-- <div class=\" navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"navigation\">\r\n      <ul class=\" navbar-nav ml-auto\">\r\n        <li class=\" search-bar input-group\" *ngIf=\"showSearch\">\r\n          <button\r\n            class=\" btn btn-link\"\r\n            data-target=\"#searchModal\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"open(content)\"\r\n            id=\"search-button\"\r\n          >\r\n            <i class=\" tim-icons icon-zoom-split\"> </i>\r\n            <span class=\" d-lg-none d-md-block\"> Search </span>\r\n          </button>\r\n        </li>\r\n        <li class=\" separator d-lg-none\"></li>\r\n      </ul>\r\n    </div> -->\r\n  </div>\r\n</nav>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <input\r\n      class=\"form-control\"\r\n      id=\"inlineFormInputGroup\"\r\n      placeholder=\"SEARCH\"\r\n      type=\"text\"\r\n      #search\r\n      minlength=\"1\"\r\n      maxlength=\"30\"\r\n      (keyup)=\"searchForUser(search.value);\"\r\n    />\r\n\r\n    <button\r\n      aria-label=\"Close\"\r\n      class=\" close\"\r\n      data-dismiss=\"modal\"\r\n      type=\"button\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <i class=\" tim-icons icon-simple-remove\"> </i>\r\n    </button>\r\n  </div>\r\n\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\n  <a [routerLink]=\"\" class=\"simple-text logo-normal\">\n    <img class=\"rounded-circle\" src=\"../../../assets/img/portfolio_pic.jpg\" />\n  </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <ul class=\"nav\">\n    <li class=\"text-center text-bold\"><h4>Sean A. Boehnke</h4><div class=\"hr-line\"></div></li>\n    <li class=\"text-center\">Skills</li>\n    <li\n      *ngFor=\"let skill of skills\"\n      class=\"text-center\"\n    >\n    <p>{{ skill.title }}<span *ngIf=\"skill.experience\"> - {{ skill.experience }} years</span></p>\n    </li>\n  </ul>\n  <ul class=\"nav\">\n    <li class=\"text-center\">Languages</li>\n    <li\n      *ngFor=\"let language of languages\"\n      class=\"text-center\"\n    >\n    <p>{{ language.title }}<span *ngIf=\"language.experience\"> - {{ language.experience }} years</span></p>\n    </li>\n    <li><br></li>\n    <li>\n      <div class=\"social-icons\">\n        <ul>\n          <li><a href=\"https://www.linkedin.com/in/sean-boehnke/\"><i class=\"fab fa-linkedin fa-lg\"></i></a></li>\n          <li><a href=\"https://github.com/saboehnke\"><i class=\"fab fa-github fa-lg\"></i></a></li>\n          <li><a href=\"mailto:sean.a.boehnke@gmail.com\"><i class=\"far fa-envelope fa-lg\"></i></a></li>\n        </ul>\n      </div>\n    </li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"sidebar\"><app-sidebar></app-sidebar></div>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </div>\n</div>\n<div class=\" fixed-plugin\">\n  <div class=\" show-dropdown\" ngbDropdown>\n    <a data-toggle=\"dropdown\" ngbDropdownToggle>\n      <i class=\" fa fa-cog fa-2x\"> </i>\n    </a>\n    <ul ngbDropdownMenu>\n      <li class=\" header-title\">Sidebar Background</li>\n      <li class=\" adjustments-line\">\n        <a class=\" switch-trigger background-color\" href=\"javascript:void(0)\">\n          <div class=\" badge-colors text-center\">\n            <span\n              class=\" badge filter badge-danger\"\n              [ngClass]=\"{'active':sidebarColor==='red'}\" (click)=\"changeSidebarColor('red')\"\n            >\n            </span>\n            <span\n              class=\" badge filter badge-primary\"\n              [ngClass]=\"{'active':sidebarColor==='primary'}\" (click)=\"changeSidebarColor('primary')\"\n            >\n            </span>\n            <span class=\" badge filter badge-info\" [ngClass]=\"{'active':sidebarColor==='blue'}\" (click)=\"changeSidebarColor('blue')\"> </span>\n            <span class=\" badge filter badge-success\" [ngClass]=\"{'active':sidebarColor==='green'}\" (click)=\"changeSidebarColor('green')\">\n            </span>\n          </div>\n          <div class=\" clearfix\"></div>\n        </a>\n      </li>\n      <li class=\" adjustments-line text-center color-change\">\n        <span class=\" color-label\"> LIGHT MODE </span>\n        <span class=\" badge light-badge mr-2\" (click)=\"changeDashboardColor('white-content')\"> </span>\n        <span class=\" badge dark-badge ml-2\" (click)=\"changeDashboardColor('black-content')\"> </span>\n        <span class=\" color-label\"> DARK MODE </span>\n      </li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"sidebar\">\n    <div class=\"logo\">\n      <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-sidebar-logo\" class=\"simple-text logo-mini\">\n        <div class=\"logo-img\">\n          <img src=\"./assets/img/angular2-logo-white.png\" />\n        </div>\n      </a>\n      <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-sidebar-logo\" class=\"simple-text logo-normal\">\n        الإبداعية تيم\n      </a>\n    </div>\n    <div class=\"sidebar-wrapper\">\n      <ul class=\"nav\">\n        <li\n          routerLinkActive=\"active\"\n          *ngFor=\"let menuItem of menuItems\"\n          class=\"{{ menuItem.class }} nav-item\"\n        >\n          <a [routerLink]=\"[menuItem.path]\">\n            <i class=\"tim-icons  {{ menuItem.icon }}\"></i>\n            <p>{{ menuItem.rtlTitle }}</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n  <div class=\"main-panel\">\n    <nav class=\" navbar navbar-expand-lg navbar-absolute navbar-transparent\">\n      <div class=\" container-fluid\">\n        <div class=\" navbar-wrapper\">\n          <div class=\" navbar-toggle d-inline\">\n            <button class=\" navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n              <span class=\" navbar-toggler-bar bar1\"> </span>\n              <span class=\" navbar-toggler-bar bar2\"> </span>\n              <span class=\" navbar-toggler-bar bar3\"> </span>\n            </button>\n          </div>\n          <a class=\" navbar-brand\" href=\"javascript:void(0)\"> ار تي ال </a>\n        </div>\n        <button\n          aria-label=\"Toggle navigation\"\n          class=\" navbar-toggler\"\n          (click)=\"collapse()\"\n          [attr.aria-expanded]=\"!isCollapsed\"\n          aria-controls=\"collapseExample\"\n          id=\"navigation\"\n          type=\"button\"\n        >\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n        </button>\n        <div class=\" navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"navigation\">\n          <ul class=\" navbar-nav mr-auto\">\n            <li class=\" search-bar input-group\">\n              <button\n                class=\" btn btn-link\"\n                data-target=\"#searchModal\"\n                data-toggle=\"modal\"\n                (click)=\"open(content)\"\n                id=\"search-button\"\n              >\n                <i class=\" tim-icons icon-zoom-split\"> </i>\n                <span class=\" d-lg-none d-md-block\"> بحث </span>\n              </button>\n            </li>\n            <li class=\" nav-item\" ngbDropdown>\n              <a\n                class=\" nav-link\"\n                data-toggle=\"dropdown\"\n                ngbDropdownToggle\n              >\n                <div class=\" notification d-none d-lg-block d-xl-block\"></div>\n                <i class=\" tim-icons icon-sound-wave\"> </i>\n                <p class=\" d-lg-none\">إخطارات</p>\n              </a>\n              <ul class=\" dropdown-menu-right dropdown-navbar\" ngbDropdownMenu>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    ورد مايك جون على بريدك الإلكتروني\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    لديك 5 مهام أخرى\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    صديقك مايكل في المدينة\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    إشعار آخر\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    واحدة أخرى\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\" nav-item\" ngbDropdown>\n              <a\n                class=\" nav-link\"\n                data-toggle=\"dropdown\"\n                ngbDropdownToggle\n              >\n                <div class=\" photo\">\n                  <img alt=\"Profile Photo\" src=\"{{twitchService.getProfileImgUrl()}}\" />\n                </div>\n                <b class=\" caret d-none d-lg-block d-xl-block\"> </b>\n                <p class=\" d-lg-none\">الخروج</p>\n              </a>\n              <ul class=\" dropdown-navbar\" ngbDropdownMenu>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    الملف الشخصي\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    الإعدادات\n                  </a>\n                </li>\n                <li class=\" dropdown-divider\"></li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    الخروج\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\" separator d-lg-none\"></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n    <router-outlet></router-outlet>\n    <footer class=\" footer\">\n      <div class=\" container-fluid\">\n        <ul class=\" nav\">\n          <li class=\" nav-item\">\n            <a class=\" nav-link\" href=\"https://www.creative-tim.com?ref=bda-auth-layout-footer\">\n              تيم الإبداعية\n            </a>\n          </li>\n          <li class=\" nav-item\">\n            <a class=\" nav-link\" href=\"https://www.creative-tim.com/about-us?ref=bda-auth-layout-footer\">\n              معلومات عنا\n            </a>\n          </li>\n          <li class=\" nav-item\">\n            <a class=\" nav-link\" href=\"http://blog.creative-tim.com?ref=bda-auth-layout-footer\"> مدونة </a>\n          </li>\n        </ul>\n        <div class=\" copyright\">\n          &copy; {{ test | date: \"yyyy\" }} مصنوع من\n          <i class=\" tim-icons icon-heart-2\"> </i> بواسطة\n          <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-footer\" target=\"_blank\"> تيم الإبداعية </a>\n          من أجل شبكة أفضل.\n        </div>\n      </div>\n    </footer>\n\n  </div>\n</div>\n<div class=\" fixed-plugin\">\n  <div class=\" show-dropdown\" ngbDropdown>\n    <a data-toggle=\"dropdown\" ngbDropdownToggle>\n      <i class=\" fa fa-cog fa-2x\"> </i>\n    </a>\n    <ul ngbDropdownMenu>\n      <li class=\" header-title\">خلفية الشريط الجانبي</li>\n      <li class=\" adjustments-line\">\n        <a class=\" switch-trigger background-color\" href=\"javascript:void(0)\">\n          <div class=\" badge-colors text-center\">\n            <span\n              class=\" badge filter badge-danger\"\n              [ngClass]=\"{'active':sidebarColor==='red'}\" (click)=\"changeSidebarColor('red')\"\n            >\n            </span>\n            <span\n              class=\" badge filter badge-primary\"\n              data-color=\"primary\"\n              [ngClass]=\"{'active':sidebarColor==='primary'}\" (click)=\"changeSidebarColor('primary')\"\n            >\n            </span>\n            <span class=\" badge filter badge-info\" [ngClass]=\"{'active':sidebarColor==='blue'}\" (click)=\"changeSidebarColor('blue')\"> </span>\n            <span class=\" badge filter badge-success\" [ngClass]=\"{'active':sidebarColor==='green'}\" (click)=\"changeSidebarColor('green')\">\n            </span>\n          </div>\n          <div class=\" clearfix\"></div>\n        </a>\n      </li>\n      <li class=\" adjustments-line text-center color-change\">\n        <span class=\" color-label\"> وضع الضوء </span>\n        <span class=\" badge light-badge mr-2\" (click)=\"changeDashboardColor('white-content')\"> </span>\n        <span class=\" badge dark-badge ml-2\" (click)=\"changeDashboardColor('black-content')\"> </span>\n        <span class=\" color-label\"> وضع الظلام</span>\n      </li>\n      <li class=\" button-container\">\n        <a\n          class=\" btn btn-primary btn-block btn-round\"\n          href=\"https://www.creative-tim.com/product/black-dashboard-angular?ref=bda-auth-layout-fixed-plugin\"\n          target=\"_blank\"\n        >\n          التحميل الان\n        </a>\n        <a\n          class=\" btn btn-default btn-block btn-round\"\n          href=\"https://demos.creative-tim.com/black-dashboard-angular/#/documentation/tutorial?ref=bda-auth-layout-fixed-plugin\"\n          target=\"_blank\"\n        >\n          كابل بيانات\n        </a>\n      </li>\n      <li class=\" header-title\">شكرا لك على 95 سهم!</li>\n      <li class=\" button-container text-center\">\n        <button class=\" btn btn-round btn-info\" id=\"twitter\">\n          <i class=\" fab fa-twitter\"> </i> · 45\n        </button>\n        <button class=\" btn btn-round btn-info\" id=\"facebook\">\n          <i class=\" fab fa-facebook-f\"> </i> · 50\n        </button>\n        <br />\n\n        <br />\n\n        <a\n          aria-label=\"Star ntkme/github-buttons on GitHub\"\n          class=\" github-button\"\n          data-icon=\"octicon-star\"\n          data-show-count=\"true\"\n          data-size=\"large\"\n          href=\"https://github.com/creativetimofficial/black-dashboard-angular?ref=bda-auth-layout-fixed-plugin\"\n        >\n          نجمة\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n    <ng-template #content let-modal>\n      <div class=\" modal-header\">\n        <input\n          class=\" form-control\"\n          id=\"inlineFormInputGroup\"\n          placeholder=\"بحث\"\n          type=\"text\"\n        />\n\n        <button\n          aria-label=\"Close\"\n          class=\" close\"\n          data-dismiss=\"modal\"\n          type=\"button\"\n          (click)=\"modal.dismiss('Cross click')\"\n        >\n          <i class=\" tim-icons icon-simple-remove\"> </i>\n        </button>\n      </div>\n\n    </ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"content\">\r\n  <div style=\"position: relative;\">\r\n    <ngx-spinner bdColor=\"rgba(0, 0, 0, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-clip-rotate-multiple\" [fullScreen]=\"true\"><p style=\"color: white\" > Loading... </p></ngx-spinner>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4 class=\"card-title\">About me</h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"text-center\">\r\n        <p>My name is Sean Boehnke. I am a hard working, self-motivated developer with my Bachelor's and Master's degree in Computer Science. My experience has ranged\r\n          from being a Full Stack developer for many years, an AI engineer, a professional VR developer, as well as a lead game developer. Both game and enterprise application development\r\n          in Unity is my passion.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Projects</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table tablesorter\" id=\"\" *ngIf=\"projects\">\r\n              <thead class=\"text-primary\">\r\n                <tr>\r\n                  <th class=\"text-center\">Name</th>\r\n                  <th class=\"text-center\">Description</th>\r\n                  <!-- <th class=\"text-center\">Status</th> -->\r\n                  <th class=\"text-center\">Engine</th>\r\n                  <th class=\"text-center\">View Project</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let project of projects\">\r\n                  <td>\r\n                    <a *ngIf=\"project.url\" [href]=\"project.url\">{{project.name}}</a>\r\n                    <span *ngIf=\"!project.url\">{{project.name}}</span>\r\n                  </td>\r\n                  <td>{{project.description}}</td>\r\n                  <!-- <td>{{project.status}}</td> -->\r\n                  <td>{{project.engine}}</td>\r\n                  <td class=\"show-dropdown\" ngbDropdown>\r\n                    <a data-toggle=\"dropdown\" ngbDropdownToggle>\r\n                      <i class=\"fa fa-eye fa-2x\" *ngIf=\"project.media.length > 0\"></i>\r\n                    </a>\r\n                    <ul ngbDropdownMenu>\r\n                      <li *ngFor=\"let item of project.media\" class=\"text-center\">\r\n                        <a [routerLink]=\"\" (click)=\"openMediaModal(mediaContent, item)\">{{item.title}}</a>\r\n                      </li>\r\n                    </ul>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #mediaContent let-modal>\r\n    <div class=\"modal-header\">\r\n      <h3>{{contentItem.title}}</h3>\r\n      <button\r\n        aria-label=\"Close\"\r\n        class=\"close\"\r\n        data-dismiss=\"modal\"\r\n        type=\"button\"\r\n        (click)=\"modal.dismiss('Cross click')\">\r\n        <i class=\"tim-icons icon-simple-remove\"> </i>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"text-center\" [innerHTML]=\"getSafeHtml(contentItem.data)\"></div>\r\n    </div>\r\n  </ng-template>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forum/forum.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forum/forum.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n  <div style=\"position: relative;\">\r\n    <ngx-spinner bdColor=\"rgba(0, 0, 0, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-clip-rotate-multiple\" [fullScreen]=\"true\"><p style=\"color: white\" > Loading... </p></ngx-spinner>\r\n  </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h4 class=\"card-title\">Streamer Chat</h4>\r\n          </div>\r\n          <div class=\"card-body scroll\">\r\n            <div *ngFor=\"let post of forumPosts; let i = index;\"> \r\n              <ngb-alert\r\n                class=\"alert-with-icon\"\r\n                data-notify=\"container\"\r\n                [type]=\"i % 2 == 0 ? 'success' : 'info'\"\r\n                [dismissible]=\"false\">\r\n                <span data-notify=\"icon\">\r\n                    <img class=\"forum-photo\" src=\"{{post.profileImgUrl ? post.profileImgUrl : '../../../assets/img/default-avatar.png'}}\" />\r\n                </span>\r\n                <span data-notify=\"message\">\r\n                  <strong>{{post.user.username}}:</strong><br>\r\n                  {{post.message}}<br>\r\n                </span>\r\n                <span aria-hidden=\"true\" class=\"forum-date\">\r\n                    <i>{{getDatetime(post.createdDate)}}</i>\r\n                    <button *ngIf=\"allowPostDeletion(post)\" type=\"button\" aria-hidden=\"true\" class=\"btn btn-link\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"deleteForumPost(post.id);\">\r\n                      <i class=\"tim-icons icon-simple-remove\"></i>\r\n                    </button>\r\n                </span>\r\n              </ngb-alert>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <textarea #userMessage class=\"form-control\" placeholder=\"Type a message...\"></textarea>\r\n                <button data-dismiss=\"modal\"\r\n                        class=\"btn btn-dark btn-round\"\r\n                        type=\"button\"\r\n                        (click)=\"postToForum(userMessage);\">POST</button>\r\n                <button data-dismiss=\"modal\"\r\n                        class=\"btn btn-dark btn-round\"\r\n                        aria-label=\"Close\"\r\n                        data-dismiss=\"modal\"\r\n                        type=\"button\"\r\n                        (click)=\"userMessage.value = ''\">CLEAR</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/streamer-tools/leaderboard/leaderboard.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/streamer-tools/leaderboard/leaderboard.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <div style=\"position: relative;\">\n    <ngx-spinner bdColor=\"rgba(0, 0, 0, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-clip-rotate-multiple\" [fullScreen]=\"true\"><p style=\"color: white\" > Loading... </p></ngx-spinner>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-11 col-lg-11 col-sm-11 col-9\">\n      <button\n        class=\"btn btn-link btn-dark btn-round tim-icons icon-cloud-download-93\"\n        data-target=\"#loadModal\"\n        data-toggle=\"modal\"\n        title=\"Load Leaderboard\"\n        (click)=\"openModal(loadContent)\"></button>\n      <button\n        class=\"btn btn-link btn-dark btn-round tim-icons icon-cloud-upload-94\"\n        title=\"Save Leaderboard\"\n        (click)=\"saveLeaderboard(leaderboardTitle.value)\"></button>\n      <button\n        class=\"btn btn-link btn-dark btn-round tim-icons icon-simple-remove\"\n        title=\"Clear Leaderboard\"\n        (click)=\"clearLeaderboard(true)\"></button>\n    </div>\n    <div class=\"col-md-1 col-lg-1 col-sm-1 col-3\">\n      <button\n        class=\"btn btn-link btn-dark btn-round tim-icons icon-trash-simple\"\n        title=\"Delete Leaderboard\"\n        (click)=\"deleteLeaderboard()\"></button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Title\" value=\"{{title}}\" #leaderboardTitle\n      minlength=\"1\" maxlength=\"30\" />\n  </div>\n  <div class=\"row\">\n    <div class=\"table-responsive\">\n        <table class=\"table tablesorter\">\n        <thead class=\"text-primary\">\n            <tr>\n            <th>Player</th>\n            <th>Score</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let row of rows; let i = index;\">\n                <td><input type=\"text\" \n                      class=\"form-control\" \n                      placeholder=\"Player\"\n                      value=\"{{row.player}}\"\n                      id=\"player\" \n                      (change)=\"updateRow($event, i)\"\n                      minlength=\"1\" \n                      maxlength=\"30\" /></td>\n                <td><input type=\"text\" \n                      class=\"form-control\" \n                      placeholder=\"Score\" \n                      value=\"{{row.score}}\" \n                      id=\"score\"\n                      (change)=\"updateRow($event, i)\"\n                      minlength=\"1\" \n                      maxlength=\"30\" /></td>\n            </tr>\n            <tr>\n              <td>\n                <button\n                  class=\"btn btn-link btn-dark btn-round tim-icons icon-simple-add\"\n                  title=\"Add Row\"\n                  (click)=\"addRow()\"></button>\n                <button\n                  class=\"btn btn-link btn-dark btn-round tim-icons icon-simple-delete\"\n                  title=\"Remove Row\"\n                  (click)=\"removeRow()\"></button>\n              </td>\n              <td></td>\n            </tr>\n        </tbody>\n        </table>\n    </div>\n  </div>\n\n  <ng-template #loadContent let-modal>\n    <div class=\"modal-header\">\n      <button\n        aria-label=\"Close\"\n        class=\"close\"\n        data-dismiss=\"modal\"\n        type=\"button\"\n        (click)=\"modal.dismiss('Cross click')\">\n        <i class=\"tim-icons icon-simple-remove\"> </i>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row\">\n        <select class=\"form-control\" #loadSelect (change)=\"onLeaderboardSelection(loadSelect.value); modal.dismiss('Cross click');\">\n          <option default hidden>Select a leaderboard...</option>\n          <option *ngFor=\"let leaderboard of leaderboards\" value=\"{{leaderboard.id}}\">{{leaderboard.title}}</option>\n        </select>\n      </div>\n    </div>\n  </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/streamer-tools/prize-wheel/prize-wheel.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/streamer-tools/prize-wheel/prize-wheel.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n  <div style=\"position: relative;\">\r\n    <ngx-spinner bdColor=\"rgba(0, 0, 0, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-clip-rotate-multiple\" [fullScreen]=\"true\"><p style=\"color: white\" > Loading... </p></ngx-spinner>\r\n  </div>\r\n  <div class=\"row\">\r\n    <button\r\n      class=\"btn btn-link btn-dark btn-round tim-icons icon-settings-gear-63\"\r\n      data-target=\"#settingsModal\"\r\n      data-toggle=\"modal\"\r\n      (click)=\"openSearchSettings(prizeWheelContent)\"></button>\r\n  </div>\r\n  <div id=\"wheelArea\" class=\"row wheel-container\" [style.visibility]=\"rendered ? 'visible' : 'hidden'\">\r\n    <ngx-wheel\r\n      class=\"center-screen\"\r\n      #wheel\r\n      (click)=\"spin()\"\r\n      [width]='wheelSize'\r\n      [height]='wheelSize'\r\n      spinDuration='8'\r\n      [disableSpinOnClick]='true'\r\n      [items]='wheelItems'\r\n      [innerRadius]='50'\r\n      [spinAmount]='10'\r\n      [textOrientation]=\"'horizontal'\"\r\n      [textAlignment]=\"'center'\"\r\n      pointerStrokeColor='black'\r\n      pointerFillColor='black'\r\n      [idToLandOn]='idToLandOn'\r\n      (onSpinStart)='onSpinStart()'\r\n      (onSpinComplete)='onSpinComplete(); openPrizeSelectionSettings(chosenItemContent);'>\r\n    </ngx-wheel>\r\n    <img src=\"{{profileImgUrl}}\" (click)=\"spin()\" class=\"center-screen rounded-circle\" />\r\n  </div>\r\n\r\n  <ng-template #prizeWheelContent let-modal>\r\n    <div class=\"modal-header\">\r\n      <button\r\n        aria-label=\"Close\"\r\n        class=\" close\"\r\n        data-dismiss=\"modal\"\r\n        type=\"button\"\r\n        (click)=\"modal.dismiss('Cross click')\">\r\n        <i class=\"tim-icons icon-simple-remove\"> </i>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-6 col-10\">\r\n          <h4>Align Prize Alert to Prize Wheel:</h4>\r\n        </div>\r\n        <div class=\"col-lg-2 col-md-2 col-2\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"alertAlignedToCenter\" (change)=\"changePrizeAlertAlignment()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table tablesorter\">\r\n            <thead class=\"text-primary\">\r\n                <tr class=\"d-flex\">\r\n                <th class=\"col-6\">Prize Item Text</th>\r\n                <th class=\"col-3\">Item Color</th>\r\n                <th class=\"col-3\">Text Color</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let row of items; let i = index;\" class=\"d-flex\">\r\n                <td class=\"col-6\"><input type=\"text\" \r\n                      class=\"form-control\" \r\n                      placeholder=\"Item Text\"\r\n                      value=\"{{row.itemText}}\"\r\n                      name=\"itemText\"\r\n                      (change)=\"updateText($event, i)\"\r\n                      minlength=\"1\" \r\n                      maxlength=\"30\" /></td>\r\n                <td class=\"col-3\"><input [(colorPicker)]=\"row.itemColor\" \r\n                      [style.background]=\"[row.itemColor]\" \r\n                      [cpAlphaChannel]=\"'disabled'\" style='width:4em'\r\n                      (colorPickerChange)=\"updateItemColor($event, i)\" /></td>\r\n                <td class=\"col-3\"><input [(colorPicker)]=\"row.itemTextColor\" \r\n                      [style.background]=\"[row.itemTextColor]\" \r\n                      [cpAlphaChannel]=\"'disabled'\" style='width:4em'\r\n                      (colorPickerChange)=\"updateItemTextColor($event, i)\" /></td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <button\r\n                    class=\"btn btn-link btn-dark btn-round tim-icons icon-simple-add\"\r\n                    title=\"Add Row\"\r\n                    (click)=\"addRow()\"></button>\r\n                  <button\r\n                    class=\"btn btn-link btn-dark btn-round tim-icons icon-simple-delete\"\r\n                    title=\"Remove Row\"\r\n                    (click)=\"removeRow()\"></button>\r\n                </td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n            </tbody>\r\n            </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"d-flex justify-content-center\">\r\n        <button data-dismiss=\"modal\"\r\n          class=\"btn btn-dark btn-round\"\r\n          type=\"button\"\r\n          (click)=\"saveWheelSettings(); modal.dismiss('Cross click');\">SAVE</button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #chosenItemContent let-modal>\r\n    <div class=\"modal-header\">\r\n      <button\r\n        aria-label=\"Close\"\r\n        class=\"close\"\r\n        data-dismiss=\"modal\"\r\n        type=\"button\"\r\n        (click)=\"modal.dismiss('Cross click')\">\r\n        <i class=\"tim-icons icon-simple-remove\"> </i>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <h2 class=\"d-flex justify-content-center\" [@tada]=\"tada\">{{items[idToLandOn].itemText}}</h2>\r\n    </div>\r\n  </ng-template>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/streamer-tools/streamer-tools/streamer-tools.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/streamer-tools/streamer-tools/streamer-tools.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n    <div class=\"row\">\n        <div class=\"col-lg-2 col-md-6 col-sm-12 col-12\">\n            <img src=\"../../../../assets/img/prize_wheel_unpressed.svg\" (click)=\"openPrizeWheel()\" />\n        </div>\n        <div class=\"col-lg-2 col-md-6 col-sm-12 col-12\">\n            <img src=\"../../../../assets/img/leaderboard_unpressed.svg\" (click)=\"openLeaderboard()\" />\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/auth-layout/auth-layout.module": [
		"./src/app/layouts/auth-layout/auth-layout.module.ts",
		"layouts-auth-layout-auth-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_streamer_tools_prize_wheel_prize_wheel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/streamer-tools/prize-wheel/prize-wheel.component */ "./src/app/pages/streamer-tools/prize-wheel/prize-wheel.component.ts");
/* harmony import */ var _pages_streamer_tools_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/streamer-tools/leaderboard/leaderboard.component */ "./src/app/pages/streamer-tools/leaderboard/leaderboard.component.ts");
/* harmony import */ var _pages_forum_forum_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/forum/forum.component */ "./src/app/pages/forum/forum.component.ts");











var routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    }, {
        path: "",
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        children: [
            {
                path: "",
                loadChildren: "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
            }
        ]
    }, {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            }
        ]
    }, {
        path: "prize-wheel",
        component: _pages_streamer_tools_prize_wheel_prize_wheel_component__WEBPACK_IMPORTED_MODULE_8__["PrizeWheelComponent"]
    }, {
        path: "leaderboard",
        component: _pages_streamer_tools_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__["LeaderboardComponent"]
    }, {
        path: "forum",
        component: _pages_forum_forum_component__WEBPACK_IMPORTED_MODULE_10__["ForumComponent"]
    }, {
        path: "#/dashboard",
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
    }, {
        path: "**",
        redirectTo: "dashboard"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Sean A. Boehnke";
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _pages_streamer_tools_streamer_tools_streamer_tools_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/streamer-tools/streamer-tools/streamer-tools.component */ "./src/app/pages/streamer-tools/streamer-tools/streamer-tools.component.ts");
/* harmony import */ var _pages_streamer_tools_prize_wheel_prize_wheel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/streamer-tools/prize-wheel/prize-wheel.component */ "./src/app/pages/streamer-tools/prize-wheel/prize-wheel.component.ts");
/* harmony import */ var _pages_streamer_tools_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/streamer-tools/leaderboard/leaderboard.component */ "./src/app/pages/streamer-tools/leaderboard/leaderboard.component.ts");
/* harmony import */ var ngx_wheel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-wheel */ "./node_modules/ngx-wheel/__ivy_ngcc__/fesm5/ngx-wheel.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");
/* harmony import */ var _pages_forum_forum_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/forum/forum.component */ "./src/app/pages/forum/forum.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
                ngx_wheel__WEBPACK_IMPORTED_MODULE_17__["NgxWheelModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_18__["ColorPickerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__["AuthLayoutComponent"], _pages_streamer_tools_streamer_tools_streamer_tools_component__WEBPACK_IMPORTED_MODULE_14__["StreamerToolsComponent"], _pages_streamer_tools_prize_wheel_prize_wheel_component__WEBPACK_IMPORTED_MODULE_15__["PrizeWheelComponent"], _pages_streamer_tools_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_16__["LeaderboardComponent"], _pages_forum_forum_component__WEBPACK_IMPORTED_MODULE_19__["ForumComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]],
            exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.today = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-footer",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/twitch.service */ "./src/app/services/twitch.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");









var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, modalService, twitchService, toastr, sharedService) {
        var _this = this;
        this.element = element;
        this.router = router;
        this.modalService = modalService;
        this.twitchService = twitchService;
        this.toastr = toastr;
        this.sharedService = sharedService;
        this.mobile_menu_visible = 0;
        this.showSearch = true;
        this.isCollapsed = true;
        // function that adds color white/transparent to the navbar on resize (this is for the collapse)
        this.updateColor = function () {
            var navbar = document.getElementsByClassName('navbar')[0];
            if (window.innerWidth < 993 && !_this.isCollapsed) {
                navbar.classList.add('nav-dropdown');
                navbar.classList.remove('navbar-transparent');
            }
            else {
                navbar.classList.remove('nav-dropdown');
                navbar.classList.add('navbar-transparent');
            }
        };
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener("resize", this.updateColor);
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName("close-layer")[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
        this.notificationSubscription = this.sharedService.getNotificationEvent().subscribe(function () {
            _this.getNotifications();
        });
        this.navigateSubscription = this.sharedService.getNavigationEvent().subscribe(function (searchable) {
            _this.showSearch = searchable;
        });
    };
    NavbarComponent.prototype.redirectToAuth = function () {
        this.twitchService.clearLocalStorage();
        location.href = this.twitchService.getAuthUrl();
    };
    NavbarComponent.prototype.searchForUser = function (query, pageNum) {
        var _this = this;
        if (pageNum === void 0) { pageNum = 1; }
        this.twitchService.searchForUser(query, pageNum).subscribe(function (data) {
            _this.sharedService.sendSearchEvent(query, data.users);
        }, function (err) {
            _this.toastr.error('Unable to search for user.', 'Error');
        });
    };
    NavbarComponent.prototype.getNotifications = function () {
        var _this = this;
        this.twitchService.getNotifications().subscribe(function (data) {
            _this.notifications = data.notifications;
        }, function (err) {
            _this.toastr.error('Unable to retrieve user notifications.', 'Error');
        });
    };
    NavbarComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName("nav")[0];
        if (!this.isCollapsed) {
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("nav-dropdown");
        }
        else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("nav-dropdown");
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        var html = document.getElementsByTagName("html")[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = "fixed";
        }
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        html.classList.add("nav-open");
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName("html")[0];
        this.toggleButton.classList.remove("toggled");
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = "";
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove("nav-open");
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName("navbar-toggler")[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName("html")[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove("nav-open");
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove("toggled");
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add("toggled");
            }, 430);
            var $layer = document.createElement("div");
            $layer.setAttribute("class", "close-layer");
            if (html.querySelectorAll(".main-panel")) {
                document.getElementsByClassName("main-panel")[0].appendChild($layer);
            }
            else if (html.classList.contains("off-canvas-sidebar")) {
                document
                    .getElementsByClassName("wrapper-full-page")[0]
                    .appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add("visible");
            }, 100);
            $layer.onclick = function () {
                html.classList.remove("nav-open");
                this.mobile_menu_visible = 0;
                $layer.classList.remove("visible");
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove("toggled");
                }, 400);
            }.bind(this);
            html.classList.add("nav-open");
            this.mobile_menu_visible = 1;
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        return "Sean A. Boehnke";
    };
    NavbarComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'modal-search' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.twitchService.logout().subscribe(function (data) {
            sessionStorage.clear();
            location.reload();
        }, function (err) {
            _this.toastr.error('Unable to logout.', 'Error');
        });
    };
    NavbarComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener("resize", this.updateColor);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
        { type: src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_6__["TwitchService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_6__["TwitchService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ROUTES = [];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        // this.menuItems = ROUTES.filter(menuItem => menuItem);
        var maxExperience = new Date().getFullYear() - 2015;
        this.skills = [
            { "title": "Software Engineering", "experience": "" + maxExperience },
            { "title": "Unity Development", "experience": "" + maxExperience },
            { "title": "Team Leading", "experience": "" + (maxExperience - 5) },
            { "title": "Remote Work", "experience": "" + maxExperience },
            { "title": "SaaS", "experience": "" + (maxExperience - 1) },
            { "title": "Self Starter" }
        ];
        this.languages = [
            { "title": "C#", "experience": "" + maxExperience },
            { "title": "Python", "experience": "" + (maxExperience - 6) },
            { "title": "Javascript", "experience": "" + maxExperience },
            { "title": "Angular 2+", "experience": "" + (maxExperience - 4) }
        ];
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sidebar",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router) {
        this.router = router;
        this.sidebarColor = "red";
    }
    AdminLayoutComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data', color);
        }
        if (mainPanel != undefined) {
            mainPanel.setAttribute('data', color);
        }
        localStorage.setItem('sidebarColor', color);
    };
    AdminLayoutComponent.prototype.changeDashboardColor = function (color) {
        var body = document.getElementsByTagName('body')[0];
        if (body && color === 'white-content') {
            body.classList.add(color);
        }
        else if (body.classList.contains('white-content')) {
            body.classList.remove('white-content');
        }
        localStorage.setItem('dashboardColor', color);
    };
    AdminLayoutComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('auth') && this.router.url.indexOf('/dashboard') < 0) {
            this.router.navigate(['/dashboard']);
        }
        var savedSidebarColor = localStorage.getItem('sidebarColor');
        var savedDashboardColor = localStorage.getItem('dashboardColor');
        if (savedSidebarColor) {
            this.changeSidebarColor(savedSidebarColor);
        }
        if (savedDashboardColor) {
            this.changeDashboardColor(savedDashboardColor);
        }
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-admin-layout",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/twitch.service */ "./src/app/services/twitch.service.ts");






var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router, modalService, twitchService) {
        var _this = this;
        this.router = router;
        this.modalService = modalService;
        this.twitchService = twitchService;
        this.test = new Date();
        this.sidebarColor = "red";
        this.isCollapsed = true;
        this.mobile_menu_visible = 0;
        // function that adds color white/transparent to the navbar on resize (this is for the collapse)
        this.updateColor = function () {
            var navbar = document.getElementsByClassName('navbar')[0];
            if (window.innerWidth < 993 && !_this.isCollapsed) {
                navbar.classList.add('bg-white');
                navbar.classList.remove('navbar-transparent');
            }
            else {
                navbar.classList.remove('bg-white');
                navbar.classList.add('navbar-transparent');
            }
        };
    }
    AuthLayoutComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data', color);
        }
        if (mainPanel != undefined) {
            mainPanel.setAttribute('data', color);
        }
    };
    AuthLayoutComponent.prototype.changeDashboardColor = function (color) {
        var body = document.getElementsByTagName('body')[0];
        if (body && color === 'white-content') {
            body.classList.add(color);
        }
        else if (body.classList.contains('white-content')) {
            body.classList.remove('white-content');
        }
    };
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = document.getElementsByClassName('navbar')[0];
        window.addEventListener("resize", this.updateColor);
        this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName("close-layer")[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
        this.menuItems = _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (menuItem) { return menuItem; });
        // on this page, we need on the body tag the classes .rtl and .menu-on-right
        document.body.classList.add("rtl", "menu-on-right");
        // we also need the rtl bootstrap
        // so we add it dynamically to the head
        var head = document.head;
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.id = "rtl-id";
        link.href =
            "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.4.0/css/bootstrap-rtl.css";
        head.appendChild(link);
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        // when we exit this page, we need to delete the classes .rtl and .menu-on-right
        // from the body tag
        document.body.classList.remove("rtl", "menu-on-right");
        // we also need to delete the rtl bootstrap, so it does not break the other pages
        // that do not make use of rtl
        document.getElementById("rtl-id").remove();
    };
    AuthLayoutComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName("nav")[0];
        if (!this.isCollapsed) {
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("bg-white");
        }
        else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("bg-white");
        }
    };
    AuthLayoutComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        var html = document.getElementsByTagName("html")[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = "fixed";
        }
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        html.classList.add("nav-open");
        this.sidebarVisible = true;
    };
    AuthLayoutComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName("html")[0];
        this.toggleButton.classList.remove("toggled");
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = "";
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove("nav-open");
    };
    AuthLayoutComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName("navbar-toggler")[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName("html")[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove("nav-open");
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove("toggled");
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add("toggled");
            }, 430);
            var $layer = document.createElement("div");
            $layer.setAttribute("class", "close-layer");
            if (html.querySelectorAll(".main-panel")) {
                document.getElementsByClassName("main-panel")[0].appendChild($layer);
            }
            else if (html.classList.contains("off-canvas-sidebar")) {
                document
                    .getElementsByClassName("wrapper-full-page")[0]
                    .appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add("visible");
            }, 100);
            $layer.onclick = function () {
                //asign a function
                html.classList.remove("nav-open");
                this.mobile_menu_visible = 0;
                $layer.classList.remove("visible");
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove("toggled");
                }, 400);
            }.bind(this);
            html.classList.add("nav-open");
            this.mobile_menu_visible = 1;
        }
    };
    AuthLayoutComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'modal-search' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AuthLayoutComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
        { type: src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_5__["TwitchService"] }
    ]; };
    AuthLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-layout',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/layouts/auth-layout/auth-layout.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_5__["TwitchService"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(toastr, route, router, sharedService, spinner, modalService, sanitizer) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.spinner = spinner;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.projects = [
            {
                "name": "LAN Party",
                "description": "A 3D virtual space for hanging out with friends, watching movies/tv together, and customizing your own space." +
                    "I worked on all aspects of the game ranging from networking, core gameplay logic, room customization, video streaming, audio streaming, shaders, and Steam integration. I am part of a team of 2 developers working on this product.",
                "url": "https://store.steampowered.com/app/2613480/LAN_Party/",
                "media": [],
                "engine": "Unity"
            },
            {
                "name": "Petrified",
                "description": "A 2D multiplayer game using Photon for networking and Heathen Engineering's Steamworks integration for in game purchases, stats, and achievements. " +
                    "I worked on all aspects of the game ranging from networking, core gameplay logic, animations, shaders, and Steam integration. I lead a team of 2 other developers to push this project " +
                    "to its current state: early access on Steam.",
                "url": "https://store.steampowered.com/app/1865260/Petrified/",
                "media": [
                    { "title": "Gameplay Trailer", "data": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/hTzepUCoUAE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>" }
                ],
                "engine": "Unity"
            },
            {
                "name": "VR Jet Walkthrough",
                "description": "A VR experience that allows users to walk through a virtual hangar and jet. I created this experience for a client to showcase their jet and allow users to walk through it and see the interior. " +
                    "I was the sole developer and created the experience to work on Quest 2. Models were provided to me by the client and I was tasked to create a realistic experience with high FPS and a comfortable look and feel for VR. " +
                    "I also created a custom culler for efficiently turning on/off objects in certain cases that Unity's built in occlusion culling couldn't handle.",
                "url": "",
                "media": [
                    { "title": "Demo Video", "data": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/b_NSiiCYENs?si=JJueDi7nARxKnCQq\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>" }
                ],
                "engine": "Unity"
            },
            {
                "name": "V3Reality",
                "description": "As a VR developer for VisionThree, I supported and added features to the V3Reality product ranging from simple UI fixes for avatars all the way to implementing a new content management system (CMS) integration to allow developers to upload text, images, prefabs, and even full experiences to Hygraph and sync them directly into content. This " +
                    "provided a simple interface for adding custom objects that could then be interpreted by the engine.",
                "url": "https://www.visionthree.com",
                "media": [
                    { "title": "V3 Capabilities Preview", "data": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/wWmTBrwmExY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>" }
                ],
                "engine": "Unity"
            },
            {
                "name": "VR Space Prototype",
                "description": "A prototype experience used to showcase various aspects of VR.",
                "url": "",
                "media": [
                    { "title": "Preview", "data": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/S9rOSRBQZvw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>" }
                ],
                "engine": "Unity"
            },
            {
                "name": "2030",
                "description": "A 3D, third person perspective game where you are an astronaut that has crash landed on mars. You have to monitor oxygen and water levels to survive all while mining for resources to build a base and eventually get back to Earth. You have a robot sidekick that follows you around as well." +
                    "The game also includes environmental influences such as dust devils.",
                "url": "",
                "media": [
                    { "title": "Gameplay", "data": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Njwy8ug50GQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>" },
                    { "title": "Rocket View", "data": "<img src=\"https://saboehnke.github.io/assets/img/2030_rocket_view.png\" />" }
                ],
                "engine": "Unity"
            },
            {
                "name": "Laser Deflector",
                "description": "A 2D single player scroller where the objective is to keep your ship from being destroyed. It originally included in app purchases to allow the purchase of power ups for single use in game. " +
                    "It also uses a leaderboard system to track the top 10 highest scoring players.",
                "url": "https://play.google.com/store/apps/details?id=com.laserdeflector.sab&hl=en_US&gl=US",
                "media": [
                    { "title": "Gameplay", "data": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4nXd-U00HhQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>" }
                ],
                "engine": "Unity"
            },
            {
                "name": "Pocket League",
                "description": "A 3D multiplayer game that was the product of the inspiration of Rocket League. This was a mobile game on Android and used Google Play Services to do match making and networking for gameplay. Unfortunately, the APIs used for Google Play services were deprecated so multiplayer doesn't work in the video provided.",
                "url": "",
                "media": [
                    { "title": "Gameplay", "data": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ZnEtnL2cwuQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>" }
                ],
                "engine": "Unity"
            }
        ];
    };
    DashboardComponent.prototype.getSafeHtml = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    // public onPageChange(pageNum: number) {
    //   this.pageSize = this.itemsPerPage * (pageNum - 1);
    //   if (!this.searching) {
    //     this.populateTable(pageNum, this.orderBy);
    //   } else {
    //     this.searchForUser(this.query, pageNum);
    //   }
    // }
    // searchForUser(query: string, pageNum: number = 1) {
    //   this.spinner.show();
    //   this.twitchService.searchForUser(query, pageNum).pipe(finalize(() => {
    //     this.spinner.hide();
    //   })).subscribe((data: any) => {
    //     this.users = data.users;
    //     this.totalUsers = data.totalUsers - 1;
    //     this.numPages = Math.ceil(this.totalUsers / this.itemsPerPage);
    //     this.query = data.query;
    //     this.getStorage();
    //     this.getFollowerInfo();
    //   }, () => {
    //     this.toastr.error('Unable to search for user.', 'Error');
    //   });
    // }
    // orderTableBy(orderBy) {
    //   this.populateTable(1, orderBy, this.orderByAsc);
    //   this.orderByAsc = !this.orderByAsc;
    //   this.orderBy = orderBy;
    // }
    // populateTable(pageNum: number = 1, orderBy: string = "", ascending: boolean = true) {
    //   this.spinner.show();
    //   this.twitchService.getUserData(pageNum, orderBy, ascending).pipe(finalize(() => {
    //     this.spinner.hide();
    //   })).subscribe((data: any) => {
    //     this.sharedService.sendNotificationEvent();
    //     this.users = data.users;
    //     this.totalUsers = this.twitchService.isGuest ? data.totalUsers : data.totalUsers - 1;
    //     this.numPages = Math.ceil(this.totalUsers / this.itemsPerPage);
    //     if (data.currentUser) {
    //       this.username = data.currentUser.username;
    //       this.userId = data.currentUser.userId;
    //       this.profileImgUrl = data.currentUser.profileImgUrl;
    //       localStorage.setItem('username', this.username);
    //       localStorage.setItem('userId', this.userId);
    //       localStorage.setItem('profileImgUrl', this.profileImgUrl);
    //     } else {
    //       localStorage.setItem('profileImgUrl', '../../../assets/img/default-avatar.png');
    //     }
    //     this.getFollowerInfo();
    //   }, err => {
    //     this.toastr.error('Unable to retrieve user information.', 'Error');
    //   });
    // }
    DashboardComponent.prototype.openMediaModal = function (content, item) {
        this.modalService.open(content, {
            windowClass: 'modal-search'
        }).result.then(function (result) { }, function (reason) { });
        this.contentItem = item;
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dashboard",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/forum/forum.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/forum/forum.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/forum/forum.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/forum/forum.component.ts ***!
  \************************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/twitch.service */ "./src/app/services/twitch.service.ts");







var ForumComponent = /** @class */ (function () {
    function ForumComponent(twitchService, toastr, spinner, sharedService) {
        this.twitchService = twitchService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.sharedService = sharedService;
    }
    ForumComponent.prototype.ngOnInit = function () {
        this.sharedService.sendNotificationEvent();
        this.getForumPosts();
    };
    ForumComponent.prototype.getDatetime = function (date) {
        var convertedDate = new Date(date);
        var newDate = new Date(convertedDate.toString() + ' UTC');
        return newDate.toLocaleString();
    };
    ForumComponent.prototype.postToForum = function (userMessage) {
        var _this = this;
        this.twitchService.postToForum(userMessage.value).subscribe(function (data) {
            _this.toastr.info('Message posted to forum.');
            userMessage.value = '';
            _this.getForumPosts();
        }, function (err) {
            _this.toastr.error('Unable to post to forum.', 'Error');
        });
    };
    ForumComponent.prototype.getForumPosts = function () {
        var _this = this;
        this.spinner.show();
        this.twitchService.getForumPosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.spinner.hide();
        })).subscribe(function (data) {
            _this.forumPosts = data.posts;
        }, function () {
            _this.toastr.error('Unable to get forum posts.', 'Error');
        });
    };
    ForumComponent.prototype.allowPostDeletion = function (post) {
        return post.user.userId == this.twitchService.getUserId();
    };
    ForumComponent.prototype.deleteForumPost = function (id) {
        var _this = this;
        this.twitchService.deleteForumPost(id).subscribe(function () {
            _this.getForumPosts();
        }, function () {
            _this.toastr.error('Unable to delete the forum post.', 'Error');
        });
    };
    ForumComponent.ctorParameters = function () { return [
        { type: src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_6__["TwitchService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }
    ]; };
    ForumComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forum',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forum/forum.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forum.component.scss */ "./src/app/pages/forum/forum.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_6__["TwitchService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/pages/streamer-tools/leaderboard/leaderboard.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/streamer-tools/leaderboard/leaderboard.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0cmVhbWVyLXRvb2xzL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/streamer-tools/leaderboard/leaderboard.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/streamer-tools/leaderboard/leaderboard.component.ts ***!
  \***************************************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/twitch.service */ "./src/app/services/twitch.service.ts");








var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(modalService, twitchService, toastr, spinner, sharedService) {
        this.modalService = modalService;
        this.twitchService = twitchService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.sharedService = sharedService;
        this.rows = [];
        this.leaderboards = [];
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        this.sharedService.sendNotificationEvent();
        this.getLeaderboards();
        this.addRow();
        this.sharedService.sendNavigationEvent(false);
    };
    LeaderboardComponent.prototype.addRow = function () {
        this.rows.push({ player: '', score: '' });
    };
    LeaderboardComponent.prototype.removeRow = function () {
        this.rows.splice(-1, 1);
    };
    LeaderboardComponent.prototype.updateRow = function (input, index) {
        if (input.currentTarget.id == "player") {
            this.rows[index].player = input.currentTarget.value;
        }
        else if (input.currentTarget.id == "score") {
            this.rows[index].score = input.currentTarget.value;
        }
    };
    LeaderboardComponent.prototype.getLeaderboards = function () {
        var _this = this;
        this.spinner.show();
        this.twitchService.getLeaderboards().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            _this.spinner.hide();
        })).subscribe(function (data) {
            _this.leaderboards = data.leaderboards;
        }, function (err) {
            _this.toastr.error('Unable to retrieve saved leaderboards.', 'Error');
        });
    };
    LeaderboardComponent.prototype.onLeaderboardSelection = function (leaderboardId) {
        this.leaderboard = this.leaderboards.filter(function (leaderboard) { return leaderboard.id == leaderboardId; })[0];
        this.loadLeaderboard();
    };
    LeaderboardComponent.prototype.loadLeaderboard = function () {
        var _this = this;
        this.clearLeaderboard();
        this.title = this.leaderboard.title;
        this.leaderboard.leaderboardDetails.forEach(function (detail) {
            _this.rows.push(detail);
        });
        this.addRow();
    };
    LeaderboardComponent.prototype.saveLeaderboard = function (title) {
        var _this = this;
        this.title = title;
        if (this.title && this.title != '') {
            this.addLeaderboardDetails();
            this.twitchService.saveLeaderboard(this.leaderboard).subscribe(function (data) {
                _this.toastr.info('Leaderboard saved.');
                _this.getLeaderboards();
            }, function (err) {
                _this.toastr.error('Unable to save leaderboard.', 'Error');
            });
        }
        else {
            this.toastr.error('Please provide a title for your leaderboard.');
        }
    };
    LeaderboardComponent.prototype.deleteLeaderboard = function () {
        var _this = this;
        if (this.leaderboard && this.leaderboard.id > 0) {
            this.twitchService.deleteLeaderboard(this.leaderboard.id).subscribe(function (data) {
                _this.clearLeaderboard(true);
                _this.toastr.info('Leaderboard deleted.');
                _this.getLeaderboards();
            }, function (err) {
                _this.toastr.error('Unable to delete leaderboard.', 'Error');
            });
        }
        else {
            this.clearLeaderboard();
        }
    };
    LeaderboardComponent.prototype.addLeaderboardDetails = function () {
        var _this = this;
        if (!this.leaderboard) {
            this.leaderboard = { title: this.title, };
        }
        this.leaderboard.leaderboardDetails = [];
        this.rows.forEach(function (row) {
            if (row.player != '' && row.score != '') {
                _this.leaderboard.leaderboardDetails.push(row);
            }
        });
    };
    LeaderboardComponent.prototype.clearLeaderboard = function (hardClear) {
        if (hardClear === void 0) { hardClear = false; }
        this.rows = [];
        this.title = '';
        if (hardClear) {
            this.leaderboard = null;
        }
    };
    LeaderboardComponent.prototype.openModal = function (content) {
        this.modalService.open(content, { windowClass: 'modal-search' }).result.then(function (result) { }, function (reason) { });
    };
    LeaderboardComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
        { type: src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_7__["TwitchService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
    ]; };
    LeaderboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'leaderboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./leaderboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/streamer-tools/leaderboard/leaderboard.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./leaderboard.component.scss */ "./src/app/pages/streamer-tools/leaderboard/leaderboard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_7__["TwitchService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/streamer-tools/prize-wheel/prize-wheel.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/streamer-tools/prize-wheel/prize-wheel.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0cmVhbWVyLXRvb2xzL3ByaXplLXdoZWVsL3ByaXplLXdoZWVsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/streamer-tools/prize-wheel/prize-wheel.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/streamer-tools/prize-wheel/prize-wheel.component.ts ***!
  \***************************************************************************/
/*! exports provided: PrizeWheelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrizeWheelComponent", function() { return PrizeWheelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_wheel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wheel */ "./node_modules/ngx-wheel/__ivy_ngcc__/fesm5/ngx-wheel.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/twitch.service */ "./src/app/services/twitch.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-animate */ "./node_modules/ng-animate/__ivy_ngcc__/fesm5/ng-animate.js");











var PrizeWheelComponent = /** @class */ (function () {
    function PrizeWheelComponent(modalService, twitchService, toastr, spinner, sharedService) {
        this.modalService = modalService;
        this.twitchService = twitchService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.sharedService = sharedService;
        this.items = [];
        this.wheelItems = [];
        this.idToLandOn = 1;
        this.rendered = false;
        this.readyToSpin = false;
        this.alertAlignedToCenter = false;
    }
    PrizeWheelComponent.prototype.ngOnInit = function () {
        this.sharedService.sendNotificationEvent();
        var wheelArea = document.getElementById('wheelArea');
        var size = Math.min(wheelArea.offsetWidth, window.innerHeight);
        this.wheelSize = size < 1000 ? size * 0.9 : size < 1100 ? size * 0.7 : size / 1.25;
        this.getItems();
        this.profileImgUrl = localStorage.getItem('profileImgUrl');
        if (localStorage.getItem('alertAlignedToCenter')) {
            this.alertAlignedToCenter = localStorage.getItem('alertAlignedToCenter') == 'true';
        }
        else {
            this.alertAlignedToCenter = false;
        }
        this.sharedService.sendNavigationEvent(false);
    };
    PrizeWheelComponent.prototype.ngAfterViewInit = function () {
        this.readyToSpin = true;
    };
    PrizeWheelComponent.prototype.changePrizeAlertAlignment = function () {
        this.alertAlignedToCenter = !this.alertAlignedToCenter;
        localStorage.setItem('alertAlignedToCenter', String(this.alertAlignedToCenter));
    };
    PrizeWheelComponent.prototype.spin = function () {
        if (this.readyToSpin) {
            this.idToLandOn = this.getRandomItemId();
            this.readyToSpin = false;
            this.wheel.reset();
            this.wheel.idToLandOn = this.idToLandOn;
            this.wheel.spin();
        }
    };
    PrizeWheelComponent.prototype.openSearchSettings = function (content) {
        this.modalService.open(content, { windowClass: 'modal-search' }).result.then(function (result) { }, function (reason) { });
    };
    PrizeWheelComponent.prototype.openPrizeSelectionSettings = function (content) {
        var windowClass = 'prize-selection';
        if (!this.alertAlignedToCenter) {
            windowClass = 'modal-search';
        }
        this.modalService.open(content, { windowClass: windowClass, container: '#wheelArea' }).result.then(function (result) { }, function (reason) { });
    };
    PrizeWheelComponent.prototype.saveWheelSettings = function () {
        var _this = this;
        if (this.items.length > 0) {
            this.twitchService.savePrizeWheelItems(this.items).subscribe(function (data) {
                _this.toastr.info('Prize wheel items saved.');
            }, function (err) {
                _this.toastr.error('Unable to save prize wheel items.', 'Error');
            });
        }
        else {
            this.toastr.warning('At least one prize wheel item is required.', 'Error');
        }
    };
    PrizeWheelComponent.prototype.resetItems = function () {
        this.getWheelItems();
        this.wheel.items = this.wheelItems;
        this.wheel.reset();
    };
    PrizeWheelComponent.prototype.getItems = function () {
        var _this = this;
        this.spinner.show();
        var defaultItems = [{ itemText: 'GIFT A SUB', itemColor: '#32325d', itemTextColor: '#ffffff' },
            { itemText: 'PICK A GAME', itemColor: '#221a42', itemTextColor: '#ffffff' },
            { itemText: 'GIFT AN EMOTE', itemColor: '#32325d', itemTextColor: '#ffffff' },
            { itemText: 'PLAY A GAME', itemColor: '#a55dfd', itemTextColor: '#ffffff' }];
        this.twitchService.getPrizeWheelItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            _this.resetItems();
            _this.spinner.hide();
            _this.rendered = true;
        })).subscribe(function (data) {
            if (data.prizeWheelItems && data.prizeWheelItems.length > 0) {
                _this.items = data.prizeWheelItems;
            }
            else {
                _this.items = defaultItems;
            }
        }, function (err) {
            _this.toastr.error('Unable to retrieve saved prize wheel items.', 'Error');
            _this.items = defaultItems;
        });
    };
    PrizeWheelComponent.prototype.getWheelItems = function () {
        var _this = this;
        this.wheelItems = [];
        var id = 0;
        var fontSize = this.wheelSize / 40;
        this.items.forEach(function (item) {
            _this.wheelItems.push({
                'fillStyle': item.itemColor,
                'text': item.itemText,
                'id': id,
                'textFontSize': fontSize,
                'textFillStyle': item.itemTextColor
            });
            id++;
        });
    };
    PrizeWheelComponent.prototype.onSpinStart = function () {
    };
    PrizeWheelComponent.prototype.onSpinComplete = function () {
        this.readyToSpin = true;
    };
    PrizeWheelComponent.prototype.getRandomItemId = function () {
        var min = 0;
        var max = this.items.length - 1;
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    PrizeWheelComponent.prototype.addRow = function () {
        this.items.push({ itemText: '', itemColor: '#a55dfd', itemTextColor: '#FFFFFF' });
        this.resetItems();
    };
    PrizeWheelComponent.prototype.removeRow = function () {
        this.items.splice(-1, 1);
        this.resetItems();
    };
    PrizeWheelComponent.prototype.updateText = function (input, index) {
        if (input.currentTarget.name == "itemText") {
            this.items[index].itemText = input.currentTarget.value;
        }
        this.resetItems();
    };
    PrizeWheelComponent.prototype.updateItemColor = function (color, index) {
        this.items[index].itemColor = color;
        this.resetItems();
    };
    PrizeWheelComponent.prototype.updateItemTextColor = function (color, index) {
        this.items[index].itemTextColor = color;
        this.resetItems();
    };
    PrizeWheelComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_4__["TwitchService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_wheel__WEBPACK_IMPORTED_MODULE_2__["NgxWheelComponent"], { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], PrizeWheelComponent.prototype, "wheel", void 0);
    PrizeWheelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'prize-wheel',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prize-wheel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/streamer-tools/prize-wheel/prize-wheel.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('tada', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_10__["tada"], { params: { timing: 3, delay: 0.5 } }))])
            ],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prize-wheel.component.scss */ "./src/app/pages/streamer-tools/prize-wheel/prize-wheel.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            src_app_services_twitch_service__WEBPACK_IMPORTED_MODULE_4__["TwitchService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], PrizeWheelComponent);
    return PrizeWheelComponent;
}());



/***/ }),

/***/ "./src/app/pages/streamer-tools/streamer-tools/streamer-tools.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/streamer-tools/streamer-tools/streamer-tools.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0cmVhbWVyLXRvb2xzL3N0cmVhbWVyLXRvb2xzL3N0cmVhbWVyLXRvb2xzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/streamer-tools/streamer-tools/streamer-tools.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/streamer-tools/streamer-tools/streamer-tools.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StreamerToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamerToolsComponent", function() { return StreamerToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");




var StreamerToolsComponent = /** @class */ (function () {
    function StreamerToolsComponent(router, sharedService) {
        this.router = router;
        this.sharedService = sharedService;
    }
    StreamerToolsComponent.prototype.ngOnInit = function () {
        this.sharedService.sendNavigationEvent(false);
        this.sharedService.sendNotificationEvent();
    };
    StreamerToolsComponent.prototype.openPrizeWheel = function () {
        this.router.navigate(['./prize-wheel']);
    };
    StreamerToolsComponent.prototype.openLeaderboard = function () {
        this.router.navigate(['./leaderboard']);
    };
    StreamerToolsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
    ]; };
    StreamerToolsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-streamer-tools',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./streamer-tools.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/streamer-tools/streamer-tools/streamer-tools.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./streamer-tools.component.scss */ "./src/app/pages/streamer-tools/streamer-tools/streamer-tools.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], StreamerToolsComponent);
    return StreamerToolsComponent;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SharedService = /** @class */ (function () {
    function SharedService() {
        this.notificationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.navigationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SharedService.prototype.sendNotificationEvent = function () {
        this.notificationSubject.next();
    };
    SharedService.prototype.getNotificationEvent = function () {
        return this.notificationSubject.asObservable();
    };
    SharedService.prototype.sendSearchEvent = function (query, users) {
        this.searchSubject.next({ query: query, users: users });
    };
    SharedService.prototype.getSearchEvent = function () {
        return this.searchSubject.asObservable();
    };
    SharedService.prototype.sendNavigationEvent = function (searchable) {
        this.navigationSubject.next(searchable);
    };
    SharedService.prototype.getNavigationEvent = function () {
        return this.navigationSubject.asObservable();
    };
    SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/twitch.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/twitch.service.ts ***!
  \********************************************/
/*! exports provided: TwitchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitchService", function() { return TwitchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var TwitchService = /** @class */ (function () {
    function TwitchService(httpClient, toastr) {
        this.httpClient = httpClient;
        this.toastr = toastr;
        this.clientId = 'kz6qzdszljw10pr9xynwv1acoo7dsy';
        this.authRedirectUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authRedirectUrl;
        this.profileUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].profileUrl;
    }
    Object.defineProperty(TwitchService.prototype, "isGuest", {
        get: function () {
            var userId = localStorage.getItem('userId');
            return !userId;
        },
        enumerable: true,
        configurable: true
    });
    TwitchService.prototype.getAuthUrl = function () {
        return "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=" + this.clientId + "&redirect_uri=" + encodeURIComponent(this.authRedirectUrl) + "&scope=user:edit:follows";
    };
    TwitchService.prototype.clearLocalStorage = function () {
        localStorage.removeItem('profileImgUrl');
        localStorage.removeItem('auth');
        localStorage.removeItem('userId');
    };
    TwitchService.prototype.getUserId = function () {
        return localStorage.getItem('userId');
    };
    TwitchService.prototype.getProfileUrl = function (username) {
        return "" + this.profileUrl + username;
    };
    TwitchService.prototype.getProfileImgUrl = function () {
        var url = localStorage.getItem('profileImgUrl');
        if (!url) {
            url = "../../../assets/img/default-avatar.png";
        }
        return url;
    };
    TwitchService.prototype.checkIfLive = function (userId) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/streamstatus?userId=" + userId, { headers: this.getHeaders() });
    };
    TwitchService.prototype.getFollowerCount = function (userId) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/followers?userId=" + userId, { headers: this.getHeaders() });
    };
    TwitchService.prototype.checkIfFollowing = function (fromId, toId) {
        if (this.isGuest) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])();
        }
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/following?fromId=" + fromId + "&toId=" + toId, { headers: this.getHeaders() });
    };
    TwitchService.prototype.followUser = function (userId, currUserId) {
        if (this.isGuest) {
            this.toastr.error('You must be logged in to follow streamers.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])();
        }
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/follow?fromUserId=" + currUserId + "&toUserId=" + userId, null, { headers: this.getHeaders() });
    };
    TwitchService.prototype.messageUser = function (messageNotification) {
        if (this.isGuest) {
            this.toastr.error('You must be logged in to message streamers.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])();
        }
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/notification", messageNotification, { headers: this.getHeaders() });
    };
    TwitchService.prototype.loginAsGuest = function () {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/auth", null, { headers: this.getHeaders() });
    };
    TwitchService.prototype.logout = function () {
        var bearer = sessionStorage.getItem('bearer');
        return this.httpClient.post("https://api.twitch.tv/oauth2/revoke?client_id=" + this.clientId + "&token=" + bearer, null, { headers: this.getHeaders() });
    };
    TwitchService.prototype.getHeaders = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Client-id': this.clientId,
            'Authorization': 'Bearer ' + (this.authToken ? this.authToken : localStorage.getItem('auth'))
        });
    };
    TwitchService.prototype.getUserData = function (pageNum, orderBy, ascending) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user?page=" + pageNum + "&orderBy=" + orderBy + "&ascending=" + ascending, { headers: this.getHeaders() });
    };
    TwitchService.prototype.searchForUser = function (query, pageNum) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/search?query=" + query + "&page=" + pageNum, { headers: this.getHeaders() });
    };
    TwitchService.prototype.getNotifications = function () {
        if (this.isGuest) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])();
        }
        var userId = localStorage.getItem('userId');
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/notifications?userId=" + userId, { headers: this.getHeaders() });
    };
    TwitchService.prototype.deleteNotification = function (notificationId) {
        if (this.isGuest) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])();
        }
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/notification?notificationId=" + notificationId, null, { headers: this.getHeaders() });
    };
    TwitchService.prototype.getPrizeWheelItems = function () {
        var userId = localStorage.getItem('userId');
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/prizeWheelItems?userId=" + userId, { headers: this.getHeaders() });
    };
    TwitchService.prototype.savePrizeWheelItems = function (prizeWheelItems) {
        if (this.isGuest) {
            this.toastr.error('You must be logged in to save a custom prize wheel.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])();
        }
        var userId = localStorage.getItem('userId');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('userId', userId);
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/prizeWheelItems", JSON.stringify(prizeWheelItems), { headers: this.getHeaders(), params: params });
    };
    TwitchService.prototype.getLeaderboards = function () {
        var userId = localStorage.getItem('userId');
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/leaderboards?userId=" + userId, { headers: this.getHeaders() });
    };
    TwitchService.prototype.saveLeaderboard = function (leaderboard) {
        if (this.isGuest) {
            this.toastr.error('You must be logged in to save a custom leaderboard.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])();
        }
        var userId = localStorage.getItem('userId');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('userId', userId);
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/leaderboard", JSON.stringify(leaderboard), { headers: this.getHeaders(), params: params });
    };
    TwitchService.prototype.deleteLeaderboard = function (leaderboardId) {
        if (this.isGuest) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])();
        }
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/leaderboard?leaderboardId=" + leaderboardId, null, { headers: this.getHeaders() });
    };
    TwitchService.prototype.getForumPosts = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/forum", { headers: this.getHeaders() });
    };
    TwitchService.prototype.postToForum = function (message) {
        if (this.isGuest) {
            this.toastr.error('You must be logged in to post to the forum.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])();
        }
        var post = {
            twitchUserId: localStorage.getItem('userId'),
            message: message
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/forum", JSON.stringify(post), { headers: this.getHeaders() });
    };
    TwitchService.prototype.deleteForumPost = function (postId) {
        if (this.isGuest) {
            this.toastr.error('You must be logged in to post to the forum.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])();
        }
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/forum?postId=" + postId, null, { headers: this.getHeaders() });
    };
    TwitchService.prototype.validateToken = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/validateToken", { headers: this.getHeaders() });
    };
    TwitchService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    TwitchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], TwitchService);
    return TwitchService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    authRedirectUrl: 'http://localhost:4200/#/dashboard',
    apiUrl: 'http://localhost:53808',
    profileUrl: 'https://www.twitch.tv/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");

/*
 =========================================================
 * Black Dashboard Angular - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard-angular
 * Copyright 2019 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\repos\Portfolio\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map