"use strict";
(self["webpackChunkBuyer_new"] = self["webpackChunkBuyer_new"] || []).push([["main"],{

/***/ 52893:
/*!*************************************!*\
  !*** ./src/app/Guard/auth.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);



class AuthGuard {
    constructor(_router) {
        this._router = _router;
    }
    canActivate() {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this._router.navigate(['/signup']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 85510:
/*!**************************************!*\
  !*** ./src/app/Guard/auth2.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Auth2Guard": () => (/* binding */ Auth2Guard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);



class Auth2Guard {
    constructor(_router) {
        this._router = _router;
    }
    canActivateChild() {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this._router.navigate(['/profile-authentication']);
            return false;
        }
    }
}
Auth2Guard.ɵfac = function Auth2Guard_Factory(t) { return new (t || Auth2Guard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
Auth2Guard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Auth2Guard, factory: Auth2Guard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 19089:
/*!**************************************!*\
  !*** ./src/app/Guard/login.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGuard": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);



class LoginGuard {
    constructor(_router) {
        this._router = _router;
    }
    canActivate() {
        if (localStorage.getItem('buyerData')) {
            return true;
        }
        else {
            this._router.navigate(['/signin']);
            return false;
        }
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
LoginGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _auth_dsa_register_dsa_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/dsa-register/dsa-register.component */ 40476);
/* harmony import */ var _auth_email_confirm_email_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/email-confirm/email-confirm.component */ 17137);
/* harmony import */ var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/reset-password/reset-password.component */ 88310);
/* harmony import */ var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/sign-in/sign-in.component */ 29345);
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signup/signup.component */ 64309);
/* harmony import */ var _pages_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/maintenance/maintenance.component */ 20479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 57994)).then(m => m.HomeModule)
    },
    {
        path: 'my-accounts', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_my-accounts_my-accounts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/my-accounts/my-accounts.module */ 25680)).then(m => m.MyAccountsModule)
    },
    {
        path: 'other-settings', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_other-settings_other-settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/other-settings/other-settings.module */ 10049)).then(m => m.OtherSettingsModule)
    },
    {
        path: 'dsa-module', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dsa-module_dsa-module_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dsa-module/dsa-module.module */ 93380)).then(m => m.DsaModuleModule)
    },
    {
        path: 'signup',
        component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__.SignupComponent
    }, {
        path: 'signin',
        component: _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__.SignInComponent
    }, {
        path: 'dsa-buyer-signup',
        component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__.SignupComponent
    },
    {
        path: 'dsa-signup', component: _auth_dsa_register_dsa_register_component__WEBPACK_IMPORTED_MODULE_0__.DsaRegisterComponent
    },
    {
        path: 'dsc-create-dsa', component: _auth_dsa_register_dsa_register_component__WEBPACK_IMPORTED_MODULE_0__.DsaRegisterComponent
    },
    {
        path: 'forgot-password',
        component: _auth_email_confirm_email_confirm_component__WEBPACK_IMPORTED_MODULE_1__.EmailConfirmComponent
    },
    {
        path: 'reset-password',
        component: _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent
    },
    {
        path: 'maintenance',
        component: _pages_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_5__.MaintenanceComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/global.service */ 59472);
/* harmony import */ var ng_connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-connection-service */ 84083);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-oauth2-oidc */ 18807);
/* harmony import */ var src_app_service_dsa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/dsa.service */ 80502);








class AppComponent {
    constructor(gs, connectionService, oauthService, router, dsaService) {
        this.gs = gs;
        this.connectionService = connectionService;
        this.oauthService = oauthService;
        this.router = router;
        this.dsaService = dsaService;
        this.title = 'Buyer-new';
        this.username = '';
        this.status = 'ONLINE';
        this.isConnected = true;
        this.noInternetConnection = true;
        this.isExpoBuyerMainten = true;
        this.gs.loginData = localStorage.getItem('buyerData') ? JSON.parse(localStorage.getItem('buyerData') || '') : '';
        if (localStorage.getItem('isExpoBuyerMainten') && localStorage.getItem('isExpoBuyerMainten') != 'undefined') {
            this.isExpoBuyerMainten = localStorage.getItem('isExpoBuyerMainten') ? JSON.parse(localStorage.getItem('isExpoBuyerMainten') || '') : {};
        }
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                this.gs.getMaintenanceDetail({ type: 'Buyer' }).subscribe((resp) => {
                    if (resp.data.is_buyer_maintenance == 'Yes') {
                        this.isExpoBuyerMainten = true;
                        this.gs.is_buyer_description = resp.data.is_buyer_description;
                        localStorage.setItem('isExpoBuyerMainten', JSON.stringify(this.isExpoBuyerMainten));
                        this.router.navigate(['/maintenance']);
                    }
                    else {
                        if (this.isExpoBuyerMainten) {
                            this.router.navigate(['/home']);
                        }
                        this.isExpoBuyerMainten = false;
                        localStorage.setItem('isExpoBuyerMainten', JSON.stringify(this.isExpoBuyerMainten));
                    }
                });
            }
        });
    }
    get token() { return this.oauthService.getAccessToken(); }
    get claims() { return this.oauthService.getIdentityClaims(); }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_connection_service__WEBPACK_IMPORTED_MODULE_4__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_5__.OAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_dsa_service__WEBPACK_IMPORTED_MODULE_1__.DsaService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/sign-in/sign-in.component */ 29345);
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/signup/signup.component */ 64309);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _auth_email_confirm_email_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/email-confirm/email-confirm.component */ 17137);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-oauth2-oidc */ 18807);
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-tel-input */ 79453);
/* harmony import */ var angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-password-strength-meter */ 56192);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-otp-input */ 2981);
/* harmony import */ var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/reset-password/reset-password.component */ 88310);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-lightbox */ 37991);
/* harmony import */ var _auth_dsa_register_dsa_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/dsa-register/dsa-register.component */ 40476);
/* harmony import */ var _Guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Guard/auth.guard */ 52893);
/* harmony import */ var _Guard_auth2_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Guard/auth2.guard */ 85510);
/* harmony import */ var _Guard_login_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Guard/login.guard */ 19089);
/* harmony import */ var _pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/privacy-policy/privacy-policy.component */ 3654);
/* harmony import */ var _pages_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/terms-condition/terms-condition.component */ 70044);
/* harmony import */ var _pages_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/maintenance/maintenance.component */ 20479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);












 // Added
















const config = {
    issuer: window.location.origin,
    clientId: window.location.origin,
    redirectUri: window.location.origin + '/index.html',
    logoutUrl: window.location.origin + '/login',
    // silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
    scope: 'openid profile email',
    requireHttps: false
};
config.logoutUrl = `${config.issuer}v2/logout?client_id=${config.clientId}&returnTo=${encodeURIComponent(config.redirectUri || '')}`;
const authModuleConfig = {
    resourceServer: {
        allowedUrls: ['http://localhost:4200'],
        sendAccessToken: true,
    },
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        _Guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard,
        _Guard_auth2_guard__WEBPACK_IMPORTED_MODULE_11__.Auth2Guard,
        _Guard_login_guard__WEBPACK_IMPORTED_MODULE_12__.LoginGuard,
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: AuthInterceptor,
        //   multi: true
        // },
        { provide: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_17__.OAuthModuleConfig, useValue: authModuleConfig },
        // { provide: ValidationHandler, useClass: JwksValidationHandler },
        { provide: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_17__.OAuthStorage, useValue: localStorage },
        { provide: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_17__.AuthConfig, useValue: config },
        _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_23__.ToastrModule.forRoot({
            preventDuplicates: true
        }),
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_17__.OAuthModule.forRoot(authModuleConfig),
        ng2_tel_input__WEBPACK_IMPORTED_MODULE_6__.Ng2TelInputModule,
        angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_24__.PasswordStrengthMeterModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_25__.NgOtpInputModule,
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_8__.LightboxModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__.SignInComponent,
        _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent,
        _auth_dsa_register_dsa_register_component__WEBPACK_IMPORTED_MODULE_9__.DsaRegisterComponent,
        _auth_email_confirm_email_confirm_component__WEBPACK_IMPORTED_MODULE_4__.EmailConfirmComponent,
        _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__.ResetPasswordComponent,
        _pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_13__.PrivacyPolicyComponent,
        _pages_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_14__.TermsConditionComponent,
        _pages_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_15__.MaintenanceComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_23__.ToastrModule, // ToastrModule added
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_17__.OAuthModule, ng2_tel_input__WEBPACK_IMPORTED_MODULE_6__.Ng2TelInputModule,
        angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_24__.PasswordStrengthMeterModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_25__.NgOtpInputModule,
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_8__.LightboxModule] }); })();


/***/ }),

/***/ 40476:
/*!*************************************************************!*\
  !*** ./src/app/auth/dsa-register/dsa-register.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DsaRegisterComponent": () => (/* binding */ DsaRegisterComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_service_dsa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/dsa.service */ 80502);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_domainvalues_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/domainvalues.service */ 78517);
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/global.service */ 59472);
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/common.service */ 35842);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _directive_alphabet_only_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directive/alphabet-only.directive */ 7878);
/* harmony import */ var _directive_number_only_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directive/number-only.directive */ 38748);
/* harmony import */ var _directive_equal_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directive/equal-validator.directive */ 1476);
/* harmony import */ var angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-password-strength-meter */ 56192);














function DsaRegisterComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " First name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Last name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_div_35_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r3.errors.required);
} }
function DsaRegisterComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_43_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Email is not correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_div_43_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DsaRegisterComponent_div_43_div_2_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.pattern);
} }
function DsaRegisterComponent_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Phone number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_div_51_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r7.errors.required);
} }
function DsaRegisterComponent_div_71_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_71_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Minimum 8 characters requried!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_71_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Enter valid password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_div_71_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DsaRegisterComponent_div_71_div_2_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, DsaRegisterComponent_div_71_div_3_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r9.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r9.errors.pattern);
} }
function DsaRegisterComponent_div_79_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Confirm Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_79_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Password doesn't match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_div_79_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DsaRegisterComponent_div_79_div_2_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r11.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r11.hasError("passwordMatchError") && !_r11.hasError("required"));
} }
function DsaRegisterComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 119)(1, "div", 71)(2, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_div_86_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r57.formObj.business.assignRole = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " I am an Individual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 71)(6, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_div_86_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r59.formObj.business.assignRole = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " I represent a company ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r13.viewData)("ngModel", ctx_r13.formObj.business.assignRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r13.viewData)("ngModel", ctx_r13.formObj.business.assignRole);
} }
function DsaRegisterComponent_ng_container_87_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Registered Business Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_87_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_ng_container_87_div_11_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r60.errors.required);
} }
function DsaRegisterComponent_ng_container_87_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Business email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_87_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Business email is not correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_87_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_ng_container_87_div_19_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DsaRegisterComponent_ng_container_87_div_19_div_2_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r62.errors == null ? null : _r62.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r62.errors == null ? null : _r62.errors.pattern);
} }
function DsaRegisterComponent_ng_container_87_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "First number 0 not allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_87_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Business Phone is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_87_div_34_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Enter valid USA phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_87_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_ng_container_87_div_34_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DsaRegisterComponent_ng_container_87_div_34_div_2_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r64.errors == null ? null : _r64.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r64.errors == null ? null : _r64.errors.minlength);
} }
function DsaRegisterComponent_ng_container_87_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 124)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Enter your business info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 46)(5, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Registered Business Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "input", 126, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_ng_container_87_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r72.formObj.business.bus_name = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, DsaRegisterComponent_ng_container_87_div_11_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 128)(13, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Business Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "input", 130, 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_ng_container_87_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r73); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r74.formObj.business.bus_email = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, DsaRegisterComponent_ng_container_87_div_19_Template, 3, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 46)(21, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " Business Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, " We may contact you for verification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "br")(30, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "input", 134, 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_ng_container_87_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r73); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r75.formObj.business.business_phone = $event); })("keypress", function DsaRegisterComponent_ng_container_87_Template_input_keypress_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r73); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r76.mobilefirstnozero($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, DsaRegisterComponent_ng_container_87_div_33_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, DsaRegisterComponent_ng_container_87_div_34_Template, 3, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](18);
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](32);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r14.formObj.business.bus_name)("disabled", ctx_r14.viewData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r60.errors && _r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r14.formObj.business.bus_email)("pattern", ctx_r14.common.emailPattern)("disabled", ctx_r14.viewData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r62.errors && _r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r14.formObj.business.business_phone)("disabled", ctx_r14.viewData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.isZero);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r64.errors && _r0.submitted);
} }
function DsaRegisterComponent_ng_container_88_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Registered Business is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_88_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_ng_container_88_div_28_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r77.errors.required);
} }
function DsaRegisterComponent_ng_container_88_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 124)(2, "h4", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Please specify your KYC");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 136)(5, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Govt. ID Proof");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 71)(10, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_ng_container_88_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r80.formObj.business.govtIDProof = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "label", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 71)(14, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_ng_container_88_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r81); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r82.formObj.business.govtIDProof = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "label", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Driver's License");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 71)(18, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_ng_container_88_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r81); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r83.formObj.business.govtIDProof = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "label", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Passport");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 76)(22, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "ID Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "input", 144, 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_ng_container_88_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r81); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r84.formObj.business.idNumber = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, DsaRegisterComponent_ng_container_88_div_28_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](27);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r15.formObj.business.govtIDProof)("disabled", ctx_r15.viewData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r15.formObj.business.govtIDProof)("disabled", ctx_r15.viewData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r15.formObj.business.govtIDProof)("disabled", ctx_r15.viewData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r15.formObj.business.idNumber)("disabled", ctx_r15.viewData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r77.errors && _r0.submitted);
} }
function DsaRegisterComponent_div_96_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Street and Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_div_96_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r16.errors.required);
} }
function DsaRegisterComponent_div_104_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Suite is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_div_104_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r18.errors.required);
} }
function DsaRegisterComponent_div_112_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Zip Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_112_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Enter 5 digit Zip Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_112_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Enter 5 digit Zip Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_div_112_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DsaRegisterComponent_div_112_div_2_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, DsaRegisterComponent_div_112_div_3_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r20.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (_r20.errors == null ? null : _r20.errors.minlength) && !(_r20.errors == null ? null : _r20.errors.pattern));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r20.errors == null ? null : _r20.errors.pattern);
} }
function DsaRegisterComponent_div_120_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_div_120_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r22.errors.required);
} }
function DsaRegisterComponent_option_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", item_r91._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r91.value, " ");
} }
function DsaRegisterComponent_div_131_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "State is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_div_131_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r24.errors.required);
} }
function DsaRegisterComponent_ng_container_141_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r93._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r93.value, " ");
} }
function DsaRegisterComponent_ng_container_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_ng_container_141_option_1_Template, 2, 2, "option", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r93.code == "USA");
} }
function DsaRegisterComponent_div_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Country is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_143_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Number of sales is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_143_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_ng_container_143_div_8_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r96.errors.required);
} }
function DsaRegisterComponent_ng_container_143_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "EIN Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_143_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_ng_container_143_div_16_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r98.errors.required);
} }
function DsaRegisterComponent_ng_container_143_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 148)(2, "label", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Number of sales reps in your company");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "input", 150, 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_ng_container_143_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r102.formObj.business.numberofsales = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, DsaRegisterComponent_ng_container_143_div_8_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 148)(10, "label", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "EIN Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "input", 153, 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_ng_container_143_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r103); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r104.formObj.business.einNumber = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, DsaRegisterComponent_ng_container_143_div_16_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](15);
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r30.formObj.business.numberofsales)("disabled", ctx_r30.viewData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r96.errors && _r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r30.formObj.business.einNumber)("disabled", ctx_r30.viewData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r98.errors && _r0.submitted);
} }
function DsaRegisterComponent_ng_container_160_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Brands is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_160_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_ng_container_160_div_8_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r105.errors.required);
} }
function DsaRegisterComponent_ng_container_160_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Products is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_160_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_ng_container_160_div_16_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r107.errors.required);
} }
function DsaRegisterComponent_ng_container_160_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Howl long is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_160_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_ng_container_160_div_24_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r109.errors.required);
} }
function DsaRegisterComponent_ng_container_160_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Monthly Sales is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_160_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_ng_container_160_div_32_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r111.errors.required);
} }
function DsaRegisterComponent_ng_container_160_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 76)(2, "label", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Brands");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "input", 156, 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_ng_container_160_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r118); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r117.formObj.business.other_Business_Details.brands = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, DsaRegisterComponent_ng_container_160_div_8_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 76)(10, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "input", 159, 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_ng_container_160_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r118); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r119.formObj.business.other_Business_Details.products = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, DsaRegisterComponent_ng_container_160_div_16_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 76)(18, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "How long");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "input", 162, 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_ng_container_160_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r118); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r120.formObj.business.other_Business_Details.howLong = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, DsaRegisterComponent_ng_container_160_div_24_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 76)(26, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Monthly Sales (USD) by product line");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "input", 165, 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_ng_container_160_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r118); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r121.formObj.business.other_Business_Details.monthlySalesUSD = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, DsaRegisterComponent_ng_container_160_div_32_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](15);
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](23);
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](31);
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r31.formObj.business.other_Business_Details.brands)("disabled", ctx_r31.viewData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r105.errors && _r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r31.formObj.business.other_Business_Details.products)("disabled", ctx_r31.viewData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r107.errors && _r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r31.formObj.business.other_Business_Details.howLong)("disabled", ctx_r31.viewData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r109.errors && _r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r31.formObj.business.other_Business_Details.monthlySalesUSD)("disabled", ctx_r31.viewData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r111.errors && _r0.submitted);
} }
function DsaRegisterComponent_div_168_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Principal Clients is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_div_168_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](167);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r32.errors.required);
} }
function DsaRegisterComponent_div_176_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Other Product Lines is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_div_176_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](175);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r34.errors.required);
} }
function DsaRegisterComponent_div_184_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Monthly Sales (USD) by product line and amount is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_div_184_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](183);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r36.errors.required);
} }
function DsaRegisterComponent_div_197_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Provide a detailed description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_div_197_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DsaRegisterComponent_div_197_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](195);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r38.errors.required);
} }
function DsaRegisterComponent_div_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Terms and conditions is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DsaRegisterComponent_ng_container_205_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DsaRegisterComponent_ng_container_205_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r126.submit(_r0.form)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r42.isSpinner);
} }
function DsaRegisterComponent_ng_container_206_Template(rf, ctx) { if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DsaRegisterComponent_ng_container_206_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r129); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r128.update(_r0.form)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r43.isSpinner);
} }
const _c0 = function () { return ["/dsa-module/manage-buyers"]; };
function DsaRegisterComponent_a_207_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a")(1, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
} }
function DsaRegisterComponent_div_208_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Signin here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function DsaRegisterComponent_a_226_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a")(1, "button", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Back to Buyer Management ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "` ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
} }
function DsaRegisterComponent_a_227_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a")(1, "button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DsaRegisterComponent_a_227_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r131); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r130.signIn()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Click here to Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
const _c2 = function () { return ["/home/contactus"]; };
const _c3 = function () { return ["/home/privacy"]; };
const _c4 = function () { return ["/home/terms-condition"]; };
class DsaRegisterComponent {
    constructor(service, toastr, router, _route, domainVal, gs, common) {
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this._route = _route;
        this.domainVal = domainVal;
        this.gs = gs;
        this.common = common;
        this.assetsURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.assetsURL;
        this.isZero = false;
        this.isSpinner = false;
        this.passCode = '!@#$%^&*()';
        this.allCountries = [];
        this.allStates = [];
        this.verfifyQuicker = 'yes';
        this.viewData = '';
        this.formObj = {
            firstname: '',
            lastname: '',
            middlename: '',
            email: '',
            phone_number: '',
            password: '',
            agree_to_terms_conditions: '',
            business: {
                assignRole: 'DSA',
                bus_name: '',
                bus_email: '',
                business_type: 'business',
                business_phone: '',
                numberofsales: '',
                einNumber: '',
                govtIDProof: '',
                idNumber: '',
                status: 'active',
                editedby: null,
                deleted: null,
                deletedby: null,
                individual: '',
                create_user: '',
                other_Business_Details: {
                    currentlySell: 'Yes',
                    brands: '',
                    products: '',
                    howLong: '',
                    monthlySalesUSD: '',
                    principalClients: '',
                    otherProductLines: '',
                    monthlySalesproduct: '',
                    provideDetailed: ''
                }
            },
            address_Register: {
                zipcode: '',
                city: '',
                country: '',
                state: '',
                status: 'active',
                address_type: 'CADD',
                add_line1: '',
                add_line2: '',
                individual: '',
                create_user: '',
                bussiness: '',
                editedby: null,
                deleted: null,
                deletedby: null,
                code: 'BYRADD',
            },
        };
    }
    ngOnInit() {
        this._route.queryParamMap.subscribe((params) => {
            this.parant_id = params['params']['pxd'] || null;
            this.viewData = params['params']['bvd'] || null;
            if (this.parant_id) {
                this.getDSAById(this.parant_id);
            }
            if (this.viewData) {
                this.getDSAById(this.viewData);
            }
        });
        this.domainVal.getAll_Activecountries().subscribe((resp) => {
            this.allCountries = resp.data;
            if (this.allCountries && this.allCountries.length) {
                this.allCountries.sort(this.common.dynamicSort("value"));
                const result = this.allCountries.find((x) => x.value === 'USA');
                if (result && result._id) {
                    this.formObj.address_Register.country = result._id;
                    this.ChnageCountry(result._id);
                }
            }
        });
        if (this.router.url == '/dsc-create-dsa' || this.parant_id || this.viewData) {
            this.formObj.business.assignRole = 'DSA';
            this.formObj.parent_id = this.gs.loginData['_id'];
        }
    }
    getDSAById(id) {
        this.isSpinner = true;
        this.service.getDSAById({ id }).subscribe((resp) => {
            let dsaDetaisl = resp.data;
            console.log('dsaDetaisl', dsaDetaisl);
            if (dsaDetaisl) {
                this.formObj.firstname = dsaDetaisl?.firstname;
                this.formObj.lastname = dsaDetaisl?.lastname;
                this.formObj.middlename = dsaDetaisl?.middlename;
                this.formObj.email = dsaDetaisl?.email_address?.email_add;
                this.formObj.phone_number = dsaDetaisl?.phone_book?.phone_number;
                this.formObj.individual = dsaDetaisl?.email_address?.individual;
                this.formObj.agree_to_terms_conditions = dsaDetaisl.bussiness?.agree_terms || true;
                this.formObj.business.id = dsaDetaisl.bussiness?._id;
                this.formObj.business.idNumber = dsaDetaisl.bussiness?.idNumber;
                this.formObj.business.govtIDProof = dsaDetaisl.bussiness?.govtIDProof;
                // this.formObj.business = dsaDetaisl.bussiness;
                this.formObj.business.other_Business_Details.currentlySell = dsaDetaisl.bussiness?.other_Business_Details?.currentlySell;
                this.formObj.business.other_Business_Details.currentlySell = dsaDetaisl.bussiness?.other_Business_Details?.currentlySell;
                this.formObj.business.other_Business_Details.currentlySell = dsaDetaisl.bussiness?.other_Business_Details?.currentlySell;
                this.formObj.business.other_Business_Details.brands = dsaDetaisl.bussiness?.other_Business_Details?.brands;
                this.formObj.business.other_Business_Details.products = dsaDetaisl.bussiness?.other_Business_Details?.products;
                this.formObj.business.other_Business_Details.howLong = dsaDetaisl.bussiness?.other_Business_Details?.howLong;
                this.formObj.business.other_Business_Details.monthlySalesUSD = dsaDetaisl.bussiness?.other_Business_Details?.monthlySalesUSD;
                this.formObj.business.other_Business_Details.principalClients = dsaDetaisl.bussiness?.other_Business_Details?.principalClients;
                this.formObj.business.other_Business_Details.otherProductLines = dsaDetaisl.bussiness?.other_Business_Details?.otherProductLines;
                this.formObj.business.other_Business_Details.monthlySalesproduct = dsaDetaisl.bussiness?.other_Business_Details?.monthlySalesproduct;
                this.formObj.business.other_Business_Details.monthlySalesPrice = dsaDetaisl.bussiness?.other_Business_Details?.monthlySalesPrice;
                this.formObj.business.other_Business_Details.provideDetailed = dsaDetaisl.bussiness?.other_Business_Details?.provideDetailed;
                this.formObj.address_Register.zipcode = dsaDetaisl.address?.zipcode;
                this.formObj.address_Register.city = dsaDetaisl.address?.city;
                this.formObj.address_Register.country = dsaDetaisl.address?.country;
                this.formObj.address_Register.state = dsaDetaisl.address?.state;
                this.formObj.address_Register.address_type = dsaDetaisl.address?.address_type;
                this.formObj.address_Register.add_line1 = dsaDetaisl.address?.add_line1;
                this.formObj.address_Register.add_line2 = dsaDetaisl.address?.add_line2;
            }
            this.isSpinner = false;
        }, (error) => {
            this.isSpinner = false;
        });
    }
    submit(form) {
        if (form.valid) {
            this.deleteEmptyVar();
            this.isSpinner = true;
            this.service.createDSA(this.formObj).subscribe((resp) => {
                this.isSpinner = false;
                if (resp.status) {
                    if (this.formObj.parent_id) {
                        this.toastr.success('DSA created successfully!', 'Success', {
                            timeOut: 5000,
                            positionClass: 'toast-top-right',
                            progressBar: true,
                            progressAnimation: 'increasing'
                        });
                        this.router.navigate(['/dsa-module/manage-buyers']);
                        return;
                    }
                    $('#defaultSize').modal('show');
                    this.toastr.success('Thank you for choosing ExpoBazaar!', 'Success', {
                        timeOut: 5000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing'
                    });
                }
                else {
                    this.toastr.error(resp['message'], 'Oops', {
                        timeOut: 8000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing',
                    });
                }
            }, (error) => {
                this.isSpinner = false;
                console.log(error);
            });
        }
        else {
            this.isSpinner = false;
            this.toastr.error('Please fill all required fields.', 'Oops!', {
                timeOut: 8000,
                positionClass: 'toast-top-right',
                progressBar: true,
                progressAnimation: 'increasing',
            });
        }
    }
    modalHide() {
        $('#defaultSize').modal('hide');
    }
    // Update
    update(form) {
        if (form.valid) {
            this.deleteEmptyVar();
            this.isSpinner = true;
            this.service.updateDSA(this.formObj).subscribe((resp) => {
                this.isSpinner = false;
                if (resp.status) {
                    if (this.formObj.parent_id) {
                        this.toastr.success('DSA updated Successfully!', 'Success', {
                            timeOut: 5000,
                            positionClass: 'toast-top-right',
                            progressBar: true,
                            progressAnimation: 'increasing'
                        });
                        this.router.navigate(['/dsa-module/manage-buyers']);
                        return;
                    }
                    $('#defaultSize').modal('show');
                    this.toastr.success('Register detail updated Successfully!', 'Success', {
                        timeOut: 5000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing'
                    });
                }
                else {
                    this.toastr.error(resp['message'], 'Oops', {
                        timeOut: 8000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing',
                    });
                }
            }, (error) => {
                this.isSpinner = false;
                console.log(error);
            });
        }
    }
    deleteEmptyVar() {
        if (this.formObj.business.assignRole != 'DSA') {
            delete this.formObj.business.govtIDProof;
            delete this.formObj.business.idNumber;
        }
        else {
            delete this.formObj.business.bus_name;
            delete this.formObj.business.business_phone;
            delete this.formObj.business.numberofsales;
            delete this.formObj.business.einNumber;
        }
        if (this.formObj.business.other_Business_Details.currentlySell != 'Yes') {
            delete this.formObj.business.other_Business_Details.brands;
            delete this.formObj.business.other_Business_Details.products;
            delete this.formObj.business.other_Business_Details.howLong;
            delete this.formObj.business.other_Business_Details.monthlySalesUSD;
        }
    }
    // Country
    ChnageCountry(event) {
        let val;
        if (event && event.target) {
            val = event.target.value;
        }
        else {
            val = event;
        }
        this.domainVal.getstateOrCity(val).subscribe((resp) => {
            this.allStates = resp.data;
            if (this.allStates && this.allStates.length) {
                this.allStates.sort(this.common.dynamicSort("value"));
            }
        });
    }
    mobilefirstnozero(event) {
        var x = event.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
        event.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    }
    signIn() {
        this.router.navigate(['/signin']);
        $('#defaultSize').modal('hide');
    }
}
DsaRegisterComponent.ɵfac = function DsaRegisterComponent_Factory(t) { return new (t || DsaRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_service_dsa_service__WEBPACK_IMPORTED_MODULE_1__.DsaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_service_domainvalues_service__WEBPACK_IMPORTED_MODULE_2__.DomainvaluesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService)); };
DsaRegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DsaRegisterComponent, selectors: [["app-dsa-register"]], decls: 246, vars: 83, consts: [["id", "main-wrapper"], [1, "section", "pt-90", "pb-70", "bg-color"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], [1, "logo-area", "text-center"], ["routerLink", "/homet"], ["src", "assets/images/Logo.svg", "alt", ""], [1, "col-lg-12", "align-items-center", "mt-2"], ["name", "signupForm", "novalidate", "", "autocomplete", "off"], ["signupForm", "ngForm"], [1, "width-800", "mx-auto"], [1, "dsa-form"], [1, "text-center", "padd-y"], [1, "mb-1", "col-md-4"], ["for", "Firstname", 1, "form-label"], ["type", "text", "name", "firstname", "id", "Firstname", "placeholder", "First Name", "aria-describedby", "firstname", "appAlphabetOnly", "", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["firstname", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "Middlename", 1, "form-label"], ["type", "text", "name", "middlename", "id", "Middlename", "placeholder", "Middle Name", "aria-describedby", "middlename", "appAlphabetOnly", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["for", "lastName", 1, "form-label"], ["type", "text", "id", "lastName", "aria-describedby", "lastname", "placeholder", "Last Name", "name", "lastname", "appAlphabetOnly", "", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["lastname", "ngModel"], [1, "col-md-4"], ["for", "emailID", 1, "form-label"], ["type", "email", "name", "email", "aria-describedby", "emailID", "id", "emailID", "placeholder", "john@email.com", "required", "", 1, "form-control", 3, "ngModel", "pattern", "disabled", "ngModelChange"], ["email", "ngModel"], ["for", "phone_number", 1, "form-label"], ["type", "text", "id", "phone_number", "aria-describedby", "phone_number", "placeholder", "Phone number", "name", "phone_number", "maxlength", "10", "numbersOnly", "", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["phone_number", "ngModel"], [1, "form-password-toggle", "col-md-4"], ["for", "Passwords", 1, "form-label"], ["href", "#", 1, "helptip"], ["title", "", 1, "fa", "fa-question-circle"], [1, "help"], ["type", "password", "name", "#", "id", "Passwords", "aria-describedby", "password", "name", "password", "required", "", "minlength", "8", "maxlength", "20", "autocomplete", "off", "placeholder", "\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7", 1, "form-control", 3, "ngModel", "pattern", "disabled", "ngModelChange", "keydown.space"], ["password", "ngModel"], [3, "password"], ["for", "CnfrmPasswordId", 1, "form-label"], ["type", "password", "name", "CnfmPasswordVar", "id", "CnfrmPasswordId", "autocomplete", "off", "placeholder", "\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7", "appPasswordvalidator", "password", "name", "CnfmPasswordVar", "minlength", "8", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngClass", "ngModelChange"], ["CnfmPasswordVar", "ngModel"], [1, "mb-1", "col-md-12"], [1, "text-center", "text-capitalize"], ["class", "col-sm-12 col-md-12 mt-1", 4, "ngIf"], [4, "ngIf"], [1, "mb-1", "col-md-6"], ["for", "streetNumber", 1, "form-label"], ["type", "text", "id", "streetNumber", "placeholder", "Street & Number", "name", "add_line1", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["streetNumber", "ngModel"], ["for", "suiteUnit", 1, "form-label"], ["type", "text", "id", "suiteUnit", "placeholder", "Suite, Unit, Building, Floor", "name", "add_line2", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["suiteUnit", "ngModel"], ["for", "zipCode", 1, "form-label"], ["type", "text", "id", "zipCode", "placeholder", "Zip Code ", "name", "zipCode", "minlength", "5", "maxlength", "5", "numbersOnly", "", "onpaste", "return false;", "pattern", "\\d{1,5}", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["zipCode", "ngModel"], ["for", "city", 1, "form-label"], ["type", "text", "id", "city", "placeholder", "City", "name", "city", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["city", "ngModel"], ["for", "state", 1, "form-label"], ["id", "state", "name", "state", "id", "state", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["state", "ngModel"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "country", 1, "form-label"], ["id", "Country", "name", "country", "required", "", 1, "form-control", 3, "disabled", "ngModel", "change", "ngModelChange"], ["Country", "ngModel"], [4, "ngFor", "ngForOf"], [1, "font-weight-bold", "mt-3"], [1, "col-sm-12", "col-md-12", "mb-3"], ["for", "ccccc", 1, "mr-4"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "Currently sell", "id", "inlineRadio1", "value", "Yes", 1, "form-check-input", "pointer", 3, "ngModel", "disabled", "ngModelChange"], ["for", "inlineRadio1", 1, "form-check-label", "pointer"], ["type", "radio", "name", "Currently sell", "id", "inlineRadio2", "value", "No", 1, "form-check-input", "pointer", 3, "ngModel", "ngModelChange"], ["for", "inlineRadio2", 1, "form-check-label", "pointer"], [1, "col-sm-12", "col-md-6", "mb-3"], ["for", "PrincipalClients1"], ["type", "text", "id", "PrincipalClients1", "placeholder", "Principal Clients", "name", "principalClients", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["principalClients", "ngModel"], ["for", "otherProductLines1"], ["type", "text", "id", "otherProductLines1", "placeholder", "Other Product Lines", "numbersOnly", "", "name", "otherProductLines", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["otherProductLines", "ngModel"], ["for", "monthlySalesProduct1"], ["type", "text", "id", "monthlySalesProduct1", "name", "monthlySalesproduct", "placeholder", "Monthly Sales (USD) by product line and amount", "numbersOnly", "", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["monthlySalesproduct", "ngModel"], ["for", "price"], ["type", "text", "id", "price", "name", "monthlySalesPrice", "placeholder", "Amount", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], ["for", "Provides"], ["rows", "3", "id", "Provides", "placeholder", "Enter details", "name", "provideDetailed", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["provideDetailed", "ngModel"], [1, "col-md-8", "col-12", "mb-25"], ["type", "checkbox", "name", "agree_to_terms_conditions", "required", "", 3, "ngModel", "disabled", "ngModelChange"], ["agree_terms", "ngModel"], [1, "col-md-4", "text-right"], ["class", "text-center", 4, "ngIf"], ["data-backdrop", "static", "id", "defaultSize", "tabindex", "-1", "aria-labelledby", "myModalLabel18", "aria-hidden", "true", 1, "modal", "fade", "text-start", "modal-success"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center"], [1, "logo-area", "mt-20", "mb-20"], ["routerLink", "/home"], ["src", "./assets/images/Logo.svg", "alt", ""], [1, "mx-auto", "mb-2"], [1, "mb-2"], [1, "modal-footer"], [2, "float", "left"], [1, "text-link", 3, "routerLink", "click"], [1, "float-right"], [1, "footer-section", "section", "bg-gray"], [1, "footer-bottom", "section"], [1, "row", "no-gutters"], [1, "col-12", "ft-border", "pt-15", "pb-15"], [1, "col-lg-6", "col-md-6", "col-sm-12"], [1, "copyright", "text-left"], [1, "copyright", "text-right"], [1, "copyright"], ["target", "_blank", 1, "pl-3", 3, "routerLink"], [1, "text-danger"], [1, "col-sm-12", "col-md-12", "mt-1"], ["type", "radio", "name", "assignRole", "id", "individualRadion2", "value", "DSA", 1, "form-check-input", "pointer", "check-size", 3, "disabled", "ngModel", "ngModelChange"], ["for", "individualRadion2", 1, "form-label", "pointer", "f-15"], ["type", "radio", "name", "assignRole", "id", "individualRadion", "value", "DSC", 1, "form-check-input", "pointer", "check-size", 3, "disabled", "ngModel", "ngModelChange"], ["for", "individualRadion", 1, "form-label", "pointer", "f-15"], [1, "col-12"], ["for", "registeredBusiness", 1, "form-label"], ["type", "text", "id", "registeredBusiness", "placeholder", "Registered Business Name", "name", "registeredBusinessName", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["regisBusiness", "ngModel"], [1, "col-md-6"], ["for", "bus_emailID", 1, "form-label"], ["type", "email", "name", "bus_email", "aria-describedby", "bus_emailID", "id", "bus_emailID", "placeholder", "Business Email", "required", "", 1, "form-control", 3, "ngModel", "pattern", "disabled", "ngModelChange"], ["bus_email", "ngModel"], ["for", "username", 1, "form-label", "float-left"], ["type", "text", "placeholder", "", "disabled", "", 1, "form-control", "input-style"], ["type", "text", "id", "businessPhone", "placeholder", "(555) 555-5555", "name", "phone", "required", "", "minlength", "14", "autocomplete", "disabled", 1, "form-control", "Phone-next-input", 3, "ngModel", "disabled", "ngModelChange", "keypress"], ["businessPhone", "ngModel"], [1, "col-sm-12", "col-md-12", "mb-1", "mt-1"], ["type", "radio", "name", "govtIDProof", "id", "IDProofRadio1", "value", "SSN", 1, "form-check-input", "pointer", 3, "ngModel", "disabled", "ngModelChange"], ["for", "IDProofRadio1", 1, "form-check-label", "pointer"], ["type", "radio", "name", "govtIDProof", "id", "IDProofRadio2", "value", "Driver's License", 1, "form-check-input", "pointer", 3, "ngModel", "disabled", "ngModelChange"], ["for", "IDProofRadio2", 1, "form-check-label", "pointer"], ["type", "radio", "name", "govtIDProof", "id", "IDProofRadio3", "value", "Passport", 1, "form-check-input", "pointer", 3, "ngModel", "disabled", "ngModelChange"], ["for", "IDProofRadio3", 1, "form-check-label", "pointer"], ["for", "IDNumber"], ["type", "text", "id", "IDNumber", "placeholder", "ID Number", "name", "idNumber", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["idNumber", "ngModel"], [3, "value"], [3, "value", 4, "ngIf"], [1, "col-md-4", "mb-3"], ["for", "numberofsales"], ["type", "text", "id", "numberofsales", "placeholder", "Number of sales reps in your company", "name", "numberofsales", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["numberofsales", "ngModel"], ["for", "einNumber"], ["type", "text", "id", "einNumber", "placeholder", "EIN Number", "name", "einNumber", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["einNumber", "ngModel"], ["for", "Brands1"], ["type", "text", "id", "Brands1", "placeholder", "Brands", "name", "brands", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["brands", "ngModel"], ["for", "Products1"], ["type", "text", "id", "Products1", "placeholder", "Products", "name", "products", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["products", "ngModel"], ["for", "Howlong1"], ["type", "text", "id", "Howlong1", "placeholder", "How long", "name", "Howlong", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["Howlong", "ngModel"], ["for", "monthly"], ["type", "text", "id", "monthly", "placeholder", "Monthly Sales", "numbersOnly", "", "name", "monthlySalesUSD", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["monthlySales", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-next", "mr-2", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "btn-prev", 3, "routerLink"], [1, "text-center"], ["href", "#", "routerLink", "/signin", 1, "text-forgot"], ["type", "button", 1, "btn", "btn-primary", "btn-prev", "mr-2", 3, "routerLink"], [1, "btn", "btn-success", 3, "click"]], template: function DsaRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8)(9, "form", 9, 10)(11, "div", 11)(12, "div", 12)(13, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " Create DSA Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 3)(16, "div", 14)(17, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_21_listener($event) { return ctx.formObj.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, DsaRegisterComponent_div_23_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 14)(25, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Middle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_27_listener($event) { return ctx.formObj.middlename = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 14)(29, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_33_listener($event) { return ctx.formObj.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, DsaRegisterComponent_div_35_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 24)(37, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_41_listener($event) { return ctx.formObj.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, DsaRegisterComponent_div_43_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 14)(45, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_49_listener($event) { return ctx.formObj.phone_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, DsaRegisterComponent_div_51_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 31)(53, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "span", 35)(60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "MUST contain at least 8-20 characters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "MUST contain at least one number and one alphabet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "MUST contain at least one special character !@#$%^&*()");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_68_listener($event) { return ctx.formObj.password = $event; })("keydown.space", function DsaRegisterComponent_Template_input_keydown_space_68_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](70, "password-strength-meter", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](71, DsaRegisterComponent_div_71_Template, 4, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 31)(73, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_77_listener($event) { return ctx.formObj.conformpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, DsaRegisterComponent_div_79_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](80, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "div", 3)(82, "div", 42)(83, "h4", 43)(84, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85, "Enter your business info");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, DsaRegisterComponent_div_86_Template, 9, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, DsaRegisterComponent_ng_container_87_Template, 35, 11, "ng-container", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](88, DsaRegisterComponent_ng_container_88_Template, 29, 9, "ng-container", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 46)(90, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, "Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "input", 48, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_94_listener($event) { return ctx.formObj.address_Register.add_line1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](96, DsaRegisterComponent_div_96_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "div", 46)(98, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99, "Address Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "input", 51, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_102_listener($event) { return ctx.formObj.address_Register.add_line2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](104, DsaRegisterComponent_div_104_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "div", 46)(106, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "input", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_110_listener($event) { return ctx.formObj.address_Register.zipcode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](112, DsaRegisterComponent_div_112_Template, 4, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "div", 14)(114, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](115, " City");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](117, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "input", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_118_listener($event) { return ctx.formObj.address_Register.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](120, DsaRegisterComponent_div_120_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "div", 14)(122, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123, "State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "select", 60, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_select_ngModelChange_126_listener($event) { return ctx.formObj.address_Register.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](129, "Select State");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](130, DsaRegisterComponent_option_130_Template, 2, 2, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](131, DsaRegisterComponent_div_131_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "div", 14)(133, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](136, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](137, "select", 65, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function DsaRegisterComponent_Template_select_change_137_listener($event) { return ctx.ChnageCountry($event); })("ngModelChange", function DsaRegisterComponent_Template_select_ngModelChange_137_listener($event) { return ctx.formObj.address_Register.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](139, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140, "Select Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](141, DsaRegisterComponent_ng_container_141_Template, 2, 1, "ng-container", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](142, DsaRegisterComponent_div_142_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](143, DsaRegisterComponent_ng_container_143_Template, 17, 6, "ng-container", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](144, "h4", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](145, "Other Business Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "div", 3)(147, "div", 69)(148, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](149, " Currently sell Home Lifestyle & Hospitality products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](151, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](152, "div", 71)(153, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_153_listener($event) { return ctx.formObj.business.other_Business_Details.currentlySell = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](154, "label", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](155, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "div", 71)(157, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_157_listener($event) { return ctx.formObj.business.other_Business_Details.currentlySell = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](158, "label", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](159, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](160, DsaRegisterComponent_ng_container_160_Template, 33, 12, "ng-container", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](161, "div", 76)(162, "label", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](163, "Principal Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](165, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](166, "input", 78, 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_166_listener($event) { return ctx.formObj.business.other_Business_Details.principalClients = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](168, DsaRegisterComponent_div_168_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "div", 76)(170, "label", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](171, "Other Product Lines you currently sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](172, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](173, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](174, "input", 81, 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_174_listener($event) { return ctx.formObj.business.other_Business_Details.otherProductLines = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](176, DsaRegisterComponent_div_176_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](177, "div", 76)(178, "label", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](179, "Monthly Sales (USD) by product line and amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](180, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](181, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](182, "input", 84, 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_182_listener($event) { return ctx.formObj.business.other_Business_Details.monthlySalesproduct = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](184, DsaRegisterComponent_div_184_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](185, "div", 76)(186, "label", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](187, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](188, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_188_listener($event) { return ctx.formObj.business.other_Business_Details.monthlySalesPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](189, "div", 69)(190, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](191, " Provide a detailed description of the geographic territory you seek for EB products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](192, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](193, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](194, "textarea", 89, 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_textarea_ngModelChange_194_listener($event) { return ctx.formObj.business.other_Business_Details.provideDetailed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](196, "                                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](197, DsaRegisterComponent_div_197_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](198, "div", 3)(199, "div", 91)(200, "input", 92, 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DsaRegisterComponent_Template_input_ngModelChange_200_listener($event) { return ctx.formObj.agree_to_terms_conditions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](202, " I agree to terms and conditions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](203, DsaRegisterComponent_div_203_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](204, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](205, DsaRegisterComponent_ng_container_205_Template, 3, 1, "ng-container", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](206, DsaRegisterComponent_ng_container_206_Template, 3, 1, "ng-container", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](207, DsaRegisterComponent_a_207_Template, 3, 2, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](208, DsaRegisterComponent_div_208_Template, 4, 0, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](209, "div", 96)(210, "div", 97)(211, "div", 98)(212, "div", 99)(213, "div", 100)(214, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](215, "img", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](216, "h1", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](217, "Thank you for choosing ExpoBazaar! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](218, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](219, "Our team will mail you back shortly to complete your account setup.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](220, "div", 105)(221, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](222, "Having trouble? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](223, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DsaRegisterComponent_Template_a_click_223_listener() { return ctx.modalHide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](224, " Contact us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](225, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](226, DsaRegisterComponent_a_226_Template, 4, 2, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](227, DsaRegisterComponent_a_227_Template, 3, 0, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](228, "div", 0)(229, "footer", 109)(230, "div", 110)(231, "div", 2)(232, "div", 111)(233, "div", 112)(234, "div", 3)(235, "div", 113)(236, "div", 114)(237, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](238, "\u00A9 2021 ExpoBazaar, Expo Digital India and all its affiliates. All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](239, "div", 113)(240, "div", 115)(241, "p", 116)(242, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](243, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](244, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](245, "Terms of use");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](22);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](34);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](42);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](50);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](69);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](78);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](95);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](103);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](111);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](119);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](127);
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](138);
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](167);
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](175);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](183);
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](195);
        const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](201);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.firstname)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r1.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.middlename)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.lastname)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r3.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.email)("pattern", ctx.common.emailPattern)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r5.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.phone_number)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r7.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.password)("pattern", ctx.common.passwordPattern)("disabled", ctx.viewData || ctx.parant_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("password", ctx.formObj.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r9.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.conformpassword)("disabled", ctx.viewData || ctx.parant_id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](78, _c1, (_r11.touched || _r11.dirty) && !_r11.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r11.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.router.url != "/dsc-create-dsa" && !ctx.parant_id && !ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formObj.business.assignRole == "DSC");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formObj.business.assignRole == "DSA");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.address_Register.add_line1)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r16.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.address_Register.add_line2)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r18.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.address_Register.zipcode)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r20.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.address_Register.city)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r22.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.address_Register.state)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.allStates);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r24.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.viewData)("ngModel", ctx.formObj.address_Register.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.allCountries);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r27.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formObj.business.assignRole == "DSC");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.business.other_Business_Details.currentlySell)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.business.other_Business_Details.currentlySell);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formObj.business.other_Business_Details.currentlySell == "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.business.other_Business_Details.principalClients)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r32.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.business.other_Business_Details.otherProductLines)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r34.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.business.other_Business_Details.monthlySalesproduct)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r36.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.viewData)("ngModel", ctx.formObj.business.other_Business_Details.monthlySalesPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.business.other_Business_Details.provideDetailed)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r38.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formObj.agree_to_terms_conditions)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r40.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.viewData && !ctx.parant_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.parant_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.parant_id || ctx.viewData || ctx.router.url == "/dsc-create-dsa");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.parant_id && !ctx.viewData && ctx.router.url != "/dsc-create-dsa");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](80, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.parant_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.parant_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](81, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](82, _c4));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxRequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _directive_alphabet_only_directive__WEBPACK_IMPORTED_MODULE_5__.AlphabetOnlyDirective, _directive_number_only_directive__WEBPACK_IMPORTED_MODULE_6__.OnlynumberDirective, _directive_equal_validator_directive__WEBPACK_IMPORTED_MODULE_7__.PasswordvalidatorDirective, angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_13__.PasswordStrengthMeterComponent], styles: [".bg-color[_ngcontent-%COMP%] {\n  background-color: #F1F1F1;\n}\n\n.dsa-form[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 15px;\n  padding: 15px;\n}\n\n.padd-y[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.input-style[_ngcontent-%COMP%] {\n  width: 65px;\n  float: left;\n  background-image: url(/assets/images/usflag.png);\n  background-repeat: no-repeat;\n  background-position: center center;\n  left: 8px;\n  top: 8px;\n}\n\n.Phone-next-input[_ngcontent-%COMP%] {\n  float: left;\n  width: 84%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzYS1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLHlCQUFBO0FBQ0g7O0FBQ0E7RUFDRyx5QkFBQTtFQUNDLG1CQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0csaUJBQUE7RUFDQSxvQkFBQTtBQUdIOztBQURBO0VBQ0csV0FBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUlIOztBQUZBO0VBQ0csV0FBQTtFQUNDLFVBQUE7QUFLSiIsImZpbGUiOiJkc2EtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctY29sb3J7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xufVxuLmRzYS1mb3Jte1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyBcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLnBhZGQteXtcbiAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uaW5wdXQtc3R5bGV7XG4gICB3aWR0aDo2NXB4OyBcbiAgIGZsb2F0OiBsZWZ0OyBcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy91c2ZsYWcucG5nKTsgXG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IFxuICAgbGVmdDogOHB4OyBcbiAgIHRvcDogOHB4O1xufVxuLlBob25lLW5leHQtaW5wdXR7XG4gICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDo4NCVcbn0iXX0= */"] });


/***/ }),

/***/ 17137:
/*!***************************************************************!*\
  !*** ./src/app/auth/email-confirm/email-confirm.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailConfirmComponent": () => (/* binding */ EmailConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/auth.service */ 90892);
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/global.service */ 59472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _layout_rights_footer_rights_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/rights-footer/rights-footer.component */ 14191);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-otp-input */ 2981);









function EmailConfirmComponent_form_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form")(1, "div", 15)(2, "p")(3, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Your Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmailConfirmComponent_form_15_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.formObj.email = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 18)(9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailConfirmComponent_form_15_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 20)(12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 23)(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Sign in here");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.formObj.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.isSpinner);
} }
const _c0 = function () { return { length: 4 }; };
function EmailConfirmComponent_form_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form")(1, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Enter the OTP sent to Email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 25)(4, "ng-otp-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onInputChange", function EmailConfirmComponent_form_16_Template_ng_otp_input_onInputChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.VerifyOTPsubmitNo($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 27)(6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailConfirmComponent_form_16_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.MatchedOTP()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.isSpinner);
} }
function EmailConfirmComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
class EmailConfirmComponent {
    constructor(toastr, auth_service, gs, router) {
        this.toastr = toastr;
        this.auth_service = auth_service;
        this.gs = gs;
        this.router = router;
        this.formObj = {
            email: "",
        };
        this.code = "";
        this.action = false;
        this.isSpinner = false;
        this.gs.updatePageName('Forgot Password');
    }
    ngOnInit() {
        localStorage.clear();
    }
    submit() {
        if (this.formObj.email == "") {
            this.toastr.error("Please enter email", "", {
                timeOut: 1000,
                positionClass: "toast-top-right",
                progressBar: true,
                progressAnimation: "increasing",
            });
        }
        else {
            this.isSpinner = true;
            this.auth_service.forgetPasswordOTP(this.formObj).subscribe((resp) => {
                this.isSpinner = false;
                if (resp.message == "success") {
                    localStorage.setItem("OTPcode", resp.code);
                    this.code = localStorage.getItem("OTPcode");
                    this.action = true;
                    this.toastr.success("OTP sent on this email successfully", "Success", {
                        timeOut: 1000,
                        positionClass: "toast-top-right",
                        progressBar: true,
                        progressAnimation: "increasing",
                    });
                }
                else if (resp.message == "Un Authorized") {
                    this.toastr.error("Please enter registered email.", "Oops!", {
                        timeOut: 1000,
                        positionClass: "toast-top-right",
                        progressBar: true,
                        progressAnimation: "increasing",
                    });
                }
                else {
                    console.log("something went wrong");
                }
            }, (error) => {
                this.isSpinner = false;
            });
        }
    }
    keytab(event) {
        if (!isNaN(event.key)) {
            let nextInput = event.srcElement.nextElementSibling;
            if (nextInput == null)
                return;
            else
                nextInput.focus();
        }
        else {
            return;
        }
    }
    VerifyOTPsubmitNo(otp) {
        if (otp) {
            this.verifyData = otp;
        }
    }
    MatchedOTP() {
        // var dummy = this.verifyData;
        // var final = dummy.first + dummy.second + dummy.third + dummy.fourth;
        this.isSpinner = true;
        if (this.verifyData && this.verifyData.length == 4 && this.verifyData === this.code) {
            // if (final === this.code) {
            this.isSpinner = false;
            this.toastr.success("OTP Matched successfully", "Success", {
                timeOut: 2000,
                positionClass: "toast-top-right",
                progressBar: true,
                progressAnimation: "increasing",
            });
            localStorage.removeItem("OTPcode");
            localStorage.setItem("email", this.formObj.email);
            this.router.navigate(["/reset-password"]);
        }
        else {
            this.isSpinner = false;
            this.toastr.error("OTP is not correct", "Oops!", {
                timeOut: 2000,
                positionClass: "toast-top-right",
                progressBar: true,
                progressAnimation: "increasing",
            });
        }
    }
}
EmailConfirmComponent.ɵfac = function EmailConfirmComponent_Factory(t) { return new (t || EmailConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_1__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
EmailConfirmComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EmailConfirmComponent, selectors: [["app-email-confirm"]], decls: 19, vars: 3, consts: [[1, "bg-color"], ["id", "main-wrapper"], [1, "login-register-section", "section", "pt-90", "pt-lg-70", "pt-md-60", "pt-sm-55", "pt-xs-45", "pb-70", "pb-lg-50", "pb-md-40", "pb-sm-30", "pb-xs-20"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], [1, "logo-area", "text-center"], ["routerLink", "/home"], ["src", "./assets/images/Logo.svg", "alt", ""], [1, "col-md-6", "col-sm-6", "offset-md-3"], [1, "customer-login-register"], [1, "login-form", "mb-50"], [1, "form-login-title", "text-center"], [4, "ngIf"], ["class", "sub-loading", 4, "ngIf"], [1, "form-fild"], [1, "mb-0"], ["name", "email", "type", "text", "placeholder", "Enter your email address", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "login-submit", "mt-10", "mb-25"], ["type", "button", 1, "btn-login", "pull-right", 3, "disabled", "click"], [1, "clear", "mb-25"], [1, "clear"], [1, "text-center", "text-muted", "mb-10", "footer-account"], ["routerLink", "/signin", 1, "text-link"], [1, "mb-4", "text-center", "text-muted", "font-weight-normal"], [1, "row", "justify-content-center"], [3, "config", "onInputChange"], [1, "text-center", "pt-3", "pb-4"], ["type", "button", 1, "btn-login", 3, "disabled", "click"], [1, "sub-loading"], [1, "loader"], [1, "text-large", "font-weight-bolder"], ["src", "assets/images/loader/123.gif"]], template: function EmailConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "body", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EmailConfirmComponent_form_15_Template, 20, 2, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, EmailConfirmComponent_form_16_Template, 8, 3, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, EmailConfirmComponent_div_17_Template, 4, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "app-rights-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.action);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.action);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSpinner);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _layout_rights_footer_rights_footer_component__WEBPACK_IMPORTED_MODULE_2__.RightsFooterComponent, ng_otp_input__WEBPACK_IMPORTED_MODULE_8__.NgOtpInputComponent], styles: [".email_row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 53px;\n  border: 1px solid rgba(174, 174, 174, 0.66) !important;\n  border-radius: 6px;\n  margin: 6px;\n  text-align: center;\n  font-size: 30px !important;\n}\n\n.email_row[_ngcontent-%COMP%] {\n  margin: 0px auto 27px !important;\n  width: 100%;\n  display: block !important;\n  text-align: center;\n}\n\n.footer-section[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n}\n\n@media (max-width: 576px) {\n  .login-form[_ngcontent-%COMP%], .register-form[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .login-register-section[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n  .btn-login[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 20px;\n  }\n}\n\n.bg-color[_ngcontent-%COMP%] {\n  background-color: #F1F1F1;\n}\n\n.footer-account[_ngcontent-%COMP%] {\n  border-top: 1px solid #f1f1f1;\n  padding-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0NBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUxKOztBQXdCQTtFQUFnQixlQUFBO0VBQ1osT0FBQTtFQUNBLFNBQUE7QUFwQko7O0FBc0JBO0VBQ007SUFDRyxhQUFBO0VBbkJQO0VBcUJHO0lBQ0csZUFBQTtFQW5CTjtFQXFCSTtJQUNHLHVCQUFBO0VBbkJQO0VBcUJJO0lBQ0csV0FBQTtJQUNBLGdCQUFBO0VBbkJQO0FBQ0Y7O0FBcUJBO0VBQ0cseUJBQUE7QUFuQkg7O0FBcUJBO0VBQ0csNkJBQUE7RUFDQSxpQkFBQTtBQWxCSCIsImZpbGUiOiJlbWFpbC1jb25maXJtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1nIHtcbi8vICAgICB3aWR0aDogMTUwcHg7XG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgbWFyZ2luOiAwcHggYXV0bztcbi8vIH1cblxuLmVtYWlsX3JvdyBpbnB1dCB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1M3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTc0LCAxNzQsIDE3NCwgMC42NikgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uZW1haWxfcm93IHtcbiAgICBtYXJnaW46IDBweCBhdXRvIDI3cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLy8gLmZvcm0tY29udHJvbCB7XG4vLyAgICAgaGVpZ2h0OiBjYWxjKDIuMjVyZW0gKyA2cHgpO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDA7XG4vLyB9XG5cbi8vIC5mb3Jtc2l6ZXtcbi8vICAgICB3aWR0aDogNTcwcHghaW1wb3J0YW50O1xuLy8gICAgIG1pbi13aWR0aDogMzg4cHghaW1wb3J0YW50O1xuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xuLy8gfVxuLy8gLmNhcmQge1xuLy8gICAgIHBhZGRpbmc6IDMwcHg7XG4vLyAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggc29saWQgYmxhY2s7XG4vLyAgICAgYm94LXNoYWRvdzogMnB4IHNvbGlkIGJsYWNrO1xuLy8gfVxuXG4uZm9vdGVyLXNlY3Rpb257cG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO31cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAubG9naW4tZm9ybSwgLnJlZ2lzdGVyLWZvcm0ge1xuICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgfVxuICAgICAuY29udGFpbmVye1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgIH1cbiAgICAgIC5sb2dpbi1yZWdpc3Rlci1zZWN0aW9uIHtcbiAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLmJ0bi1sb2dpbiB7XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB9XG59XG4uYmctY29sb3J7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xufVxuLmZvb3Rlci1hY2NvdW50e1xuICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7IFxuICAgcGFkZGluZy10b3A6IDE1cHg7XG59Il19 */"] });


/***/ }),

/***/ 88310:
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/auth.service */ 90892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/global.service */ 59472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-password-strength-meter */ 56192);








function ResetPasswordComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Minimum 8 characters requried!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter valid password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ResetPasswordComponent_div_20_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ResetPasswordComponent_div_20_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.errors.pattern);
} }
function ResetPasswordComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
class ResetPasswordComponent {
    constructor(toastr, auth_service, router, gs) {
        this.toastr = toastr;
        this.auth_service = auth_service;
        this.router = router;
        this.gs = gs;
        this.isSpinner = false;
        this.formObj = {
            password: '',
            confirmpassword: '',
            email: ''
        };
        this.passCode = '!@#$%^&*()';
        this.passRequirement = {
            passwordMinLowerCase: 1,
            passwordMinNumber: 1,
            passwordMinSymbol: 1,
            passwordMinCharacters: 8
        };
        this.passwordPattern = [
            `(?=([^A-Za-z]*[A-Za-z])\{${this.passRequirement.passwordMinLowerCase},\})`,
            `(?=([^0-9]*[0-9])\{${this.passRequirement.passwordMinNumber},\})`,
            `(?=(\.\*[\$\@\$\!\%\*\#\^\(\)\&])\{${this.passRequirement.passwordMinSymbol},\})`,
            `[A-Za-z\\d\$\@\$\!\%\*\#\^\(\)\&]{${this.passRequirement.passwordMinCharacters},}`
        ].map(item => item.toString()).join('');
        this.gs.updatePageName('Update Password');
    }
    ngOnInit() {
        this.formObj.email = localStorage.getItem('email') || '';
    }
    onSubmit(form) {
        if (this.formObj.password == '' ||
            this.formObj.confirmpassword == '') {
            this.toastr.error('Please fill all required fields', 'Oops!', {
                timeOut: 2000,
                positionClass: 'toast-top-right',
                progressBar: true,
                progressAnimation: 'increasing'
            });
        }
        else {
            if (form.valid) {
                if (this.formObj.password == this.formObj.confirmpassword) {
                    this.isSpinner = true;
                    this.auth_service.resetPassword(this.formObj).subscribe((resp) => {
                        this.isSpinner = false;
                        if (resp.status) {
                            this.toastr.success('Password updated successfully.', 'Success', {
                                timeOut: 2000,
                                positionClass: 'toast-top-right',
                                progressBar: true,
                                progressAnimation: 'increasing'
                            });
                            this.router.navigate(['/signin']);
                        }
                        else {
                            console.log('something went wrong');
                        }
                    }, error => {
                        this.isSpinner = false;
                    });
                }
                else {
                    this.toastr.error('New password and confirm password should be same', 'Oops!', {
                        timeOut: 4000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing'
                    });
                }
            }
        }
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_1__.GlobalService)); };
ResetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 35, vars: 8, consts: [[1, "px-4", "ui-bg-cover", "ui-bg-overlay-container"], [1, "opacity-25", "ui-bg-overlay", "bg-color"], [1, "row", "pt-90"], [1, "col-md-12", "text-center"], [1, "logo-area", "text-center"], ["routerLink", "/home"], ["src", "./assets/images/Logo.svg", "alt", ""], [1, "pb-5", "authentication-inner"], [1, "card", "mt-4", "formsize"], [1, "p-2"], [1, "text-center", "text-muted", "font-weight-normal", "mb-4"], ["name", "updateProfile", "autocomplete", "off"], ["updateProfile", "ngForm"], [1, "form-group"], [1, "form-label"], ["type", "password", "name", "new", "placeholder", "New Password", "minlength", "8", "maxlength", "20", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange", "keydown.space"], ["password", "ngModel"], [3, "password"], ["class", "text-danger", 4, "ngIf"], ["name", "confirmpassword", "type", "password", "placeholder", "Confirm Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "Passwords"], ["type", "submit", 1, "btn-login", "btn-block", "p-2", "mt-4", 3, "disabled", "click"], [1, "py-3", "px-4", "px-sm-5"], [1, "text-center", "text-muted"], ["href", "javascript:void(0)", "routerLink", "/signin", 1, "text-primary"], ["class", "sub-loading", 4, "ngIf"], [1, "text-danger"], [4, "ngIf"], [1, "sub-loading"], [1, "loader"], [1, "text-large", "font-weight-bolder"], ["src", "assets/images/loader/123.gif"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Update Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 11, 12)(14, "div", 13)(15, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_17_listener($event) { return ctx.formObj.password = $event; })("keydown.space", function ResetPasswordComponent_Template_input_keydown_space_17_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "password-strength-meter", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ResetPasswordComponent_div_20_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13)(22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_24_listener($event) { return ctx.formObj.confirmpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSubmit(_r0.form)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 22)(30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ResetPasswordComponent_div_34_Template, 4, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.formObj.password)("pattern", ctx.passwordPattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("password", ctx.formObj.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.formObj.confirmpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Password MUST contain at least 8-20 characters. MUST contain at least one number and one alphabet. MUST contain at least one special character ", ctx.passCode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSpinner);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_7__.PasswordStrengthMeterComponent], styles: ["img[_ngcontent-%COMP%] {\n  width: 150px;\n  display: block;\n  margin: 0px auto;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: calc(2.25rem + 6px);\n  border-radius: 0;\n}\n\n.formsize[_ngcontent-%COMP%] {\n  width: 570px !important;\n  min-width: 388px !important;\n  margin: 0 auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 30px;\n  box-shadow: 2px solid black;\n}\n\n@media (max-width: 576px) {\n  .formsize[_ngcontent-%COMP%] {\n    width: auto !important;\n    min-width: auto !important;\n    margin: auto;\n  }\n}\n\n.bg-color[_ngcontent-%COMP%] {\n  background-color: #F1F1F1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksMkJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFFQSwyQkFBQTtBQUdKOztBQURBO0VBQ0c7SUFDRyxzQkFBQTtJQUNBLDBCQUFBO0lBQ0QsWUFBQTtFQUlIO0FBQ0Y7O0FBRkE7RUFDRyx5QkFBQTtBQUlIIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogY2FsYygyLjI1cmVtICsgNnB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uZm9ybXNpemV7XG4gICAgd2lkdGg6IDU3MHB4IWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDM4OHB4IWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJveC1zaGFkb3c6IDJweCBzb2xpZCBibGFjaztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgLmZvcm1zaXple1xuICAgICAgd2lkdGg6IGF1dG8haW1wb3J0YW50OyBcbiAgICAgIG1pbi13aWR0aDogYXV0byFpbXBvcnRhbnQ7XG4gICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuLmJnLWNvbG9ye1xuICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTsgXG59Il19 */"] });


/***/ }),

/***/ 29345:
/*!***************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/auth.service */ 90892);
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/global.service */ 59472);
/* harmony import */ var src_app_service_dsa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/dsa.service */ 80502);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _layout_rights_footer_rights_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/rights-footer/rights-footer.component */ 14191);









function SignInComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
const _c0 = function () { return ["/home/privacy"]; };
const _c1 = function () { return ["/home/terms-condition"]; };
const _c2 = function () { return ["/dsa-signup"]; };
class SignInComponent {
    constructor(router, toastr, auth_service, gs, _route, dsa_service) {
        this.router = router;
        this.toastr = toastr;
        this.auth_service = auth_service;
        this.gs = gs;
        this._route = _route;
        this.dsa_service = dsa_service;
        this.isSpinner = false;
        this.formObj = { email: '', password: '', emailCode: '' };
        this.isSubmited = false;
        this.paramsData = {};
        this.passwordType = 'password';
        this.cartObj = {
            user_collection: {
                user_id: '',
                collection_name: 'cart',
                collection_type: '',
                payment_card_id: '1',
                ship_from: '',
                terms_agree: '',
                status_reason: '',
                delivery_charges: '',
                taxes: '',
                related_business_indv_id: '',
                order_id: null,
                user_collection_seller: [],
                status: 'active',
                editedby: null,
                deleted: null,
                address_id: '',
                create_user: '',
                deletedby: null
            },
            collection_product: {
                user_collection_id: '',
                product_id: '',
                quantity: 1,
                status: 'active',
                editedby: null,
                deleted: null,
                create_user: '',
                deletedby: null
            }
        };
        this.gs.updatePageName('Signin');
    }
    ngOnInit() {
        this._route.queryParamMap.subscribe((params) => {
            this.paramsData = params['params'];
            // this.paramsData = params.get('params');
            // this.paramsData = params.get('params');
        });
        if (this.gs.loginData && this.gs.loginData['_id']) {
            this.cartObj.user_collection.user_id = this.gs.loginData['_id'];
            this.cartObj.user_collection.create_user = this.gs.loginData['_id'];
            this.cartObj.collection_product.create_user = this.gs.loginData['_id'];
        }
    }
    onSubmit() {
        if (this.formObj.email === '' || this.formObj.password === '') {
            this.toastr.error('Please enter credientails', 'Oops!', {
                timeOut: 1500,
                positionClass: 'toast-top-right',
                progressBar: true,
                progressAnimation: 'increasing'
            });
        }
        else {
            this.isSpinner = true;
            this.auth_service.LoginBuyer(this.formObj).subscribe((res) => {
                this.isSpinner = false;
                if (res.status) {
                    localStorage.clear();
                    localStorage.setItem('tokens', res.token);
                    localStorage.setItem('buyerData', JSON.stringify(res.data));
                    this.gs.loginData = JSON.parse(localStorage.getItem('buyerData') || '');
                    if (this.paramsData && this.paramsData['pd']) {
                        this.addToCart();
                    }
                    else if (this.paramsData && this.paramsData['wld'] && this.paramsData['proId']) {
                        this.router.navigate(['/home/single-product', this.paramsData['wld'], this.paramsData['proId']]);
                    }
                    else if (this.paramsData && this.paramsData['catId']) {
                        this.router.navigate(['/home/shop', this.paramsData['catId']]);
                    }
                    else if (this._route.snapshot['queryParams']['page']) {
                        this.router.navigate(['/my-accounts/my-accounts-details']);
                    }
                    else {
                        this.router.navigate(['/']);
                    }
                    this.toastr.success('Login successfully.', 'Success', {
                        timeOut: 2000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing'
                    });
                }
                else {
                    this.toastr.error(res.message, 'Oops!', {
                        timeOut: 2000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing'
                    });
                }
            }, error => {
                this.isSpinner = false;
            });
        }
    }
    addToCart() {
        this.isSpinner = true;
        this.cartObj.collection_product.product_id = this.paramsData.pd;
        this.cartObj.user_collection.collection_type = 'cart';
        this.cartObj.user_collection.user_id = this.gs.loginData['_id'];
        this.cartObj.user_collection.create_user = this.gs.loginData['_id'];
        this.cartObj.collection_product.create_user = this.gs.loginData['_id'];
        this.cartObj.user_collection.ship_from = '';
        this.gs.addToCart(this.cartObj).subscribe((resp) => {
            this.isSpinner = false;
            if (resp.status) {
                this.gs.cartCount += 1;
                this.toastr.success('Product added to cart', 'Success', {
                    timeOut: 5000,
                    positionClass: 'toast-top-right',
                    progressBar: true,
                    progressAnimation: 'increasing'
                });
                this.router.navigate(['/home/cart']);
            }
            else {
                this.toastr.warning(resp['message'], 'Oops!', {
                    timeOut: 5000,
                    positionClass: 'toast-top-right',
                    progressBar: true,
                    progressAnimation: 'increasing'
                });
            }
        });
    }
    newAccount() {
        if (this.paramsData && this.paramsData['pd']) {
            this.router.navigate(['/signup'], { queryParams: { pd: this.paramsData.pd } });
        }
        else if (this.paramsData && this.paramsData['wld']) {
            this.router.navigate(['/signup'], { queryParams: { wld: this.paramsData.wld } });
        }
        else if (this.paramsData && this.paramsData['catId']) {
            this.router.navigate(['/signup'], { queryParams: { catId: this.paramsData.catId } });
        }
        else {
            this.router.navigate(['/signup']);
        }
    }
    // dsa-signin
    dsaSignIn(emailCode) {
        if (this.formObj.email === '' || this.formObj.password === '') {
            this.toastr.error('Please enter credientails', 'Oops!', {
                timeOut: 1500,
                positionClass: 'toast-top-right',
                progressBar: true,
                progressAnimation: 'increasing'
            });
        }
        else {
            this.isSpinner = true;
            this.formObj.emailCode = emailCode;
            this.dsa_service.signInDSA(this.formObj).subscribe((res) => {
                this.isSpinner = false;
                if (res.status) {
                    localStorage.clear();
                    localStorage.setItem('tokens', res.token);
                    localStorage.setItem('buyerData', JSON.stringify(res.data));
                    this.gs.loginData = JSON.parse(localStorage.getItem('buyerData') || '');
                    if (this.gs.loginData.userType == 'DSARUSER') {
                        this.router.navigate(['/dsa-module/dsa-account']);
                    }
                    else {
                        this.router.navigate(['/']);
                    }
                    this.toastr.success('Login successfully.', 'Success', {
                        timeOut: 2000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing'
                    });
                }
                else {
                    this.toastr.error(res.message, 'Oops!', {
                        timeOut: 2000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing'
                    });
                }
            }, error => {
                this.isSpinner = false;
            });
        }
    }
    changePassType() {
        if (this.passwordType === "password") {
            this.passwordType = 'text';
        }
        else {
            this.passwordType = 'password';
        }
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_1__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_dsa_service__WEBPACK_IMPORTED_MODULE_2__.DsaService)); };
SignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 67, vars: 11, consts: [["id", "main-wrapper"], [1, "login-register-section", "section", "pt-90", "pt-lg-70", "pt-md-60", "pt-sm-55", "pt-xs-45", "pb-70", "pb-lg-50", "pb-md-40", "pb-sm-30", "pb-xs-20", "bg-color"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], [1, "logo-area", "text-center"], ["href", "index.html"], ["src", "assets/images/Logo.svg", "alt", ""], [1, "col-md-6", "col-12", "offset-md-3"], [1, "customer-login-register"], [1, "login-form", "mb-50"], [1, "form-login-title", "text-center"], ["form", "ngForm"], [1, "form-fild"], ["type", "text", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], [1, "form-fild", "mb-1"], ["name", "password", "required", "", 3, "type", "ngModel", "ngModelChange"], [1, "form-group", "mb-2"], ["name", "passwordshow", "id", "passwordshow", "type", "checkbox", 3, "click"], ["for", "passwordshow", 1, "pl-1", "password"], [1, "login-submit", "mt-10", "mb-20"], [1, "pull-left", "line-height"], ["target", "_blank", 1, "text-link", 3, "routerLink"], ["type", "submit", 1, "btn-login", "pull-right", 3, "disabled", "click"], [1, "clear"], [1, "form-fild", "text-center", "mt-3"], ["routerLink", "/forgot-password", 1, "text-forgot"], [1, "text-center", "text-muted", "mb-10", "footer-account", "footer-account"], ["href", "#", 1, "text-link", 3, "click"], [1, "text-link", 3, "routerLink"], ["class", "sub-loading", 4, "ngIf"], [1, "sub-loading"], [1, "loader"], [1, "text-large", "font-weight-bolder"], ["src", "assets/images/loader/123.gif"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Login to Your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "form", null, 12)(16, "div", 13)(17, "p")(18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Your Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_22_listener($event) { return ctx.formObj.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 15)(24, "p")(25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_29_listener($event) { return ctx.formObj.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignInComponent_Template_input_click_31_listener() { return ctx.changePassType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Show Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 20)(35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " By continuing, you agree to");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "ExpoBazaar's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "a", 22)(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "a", 22)(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_47_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 25)(51, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " Don't have an account yet?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignInComponent_Template_a_click_57_listener() { return ctx.newAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Create New Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "a", 29)(62, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Become a Sales Partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](65, SignInComponent_div_65_Template, 4, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "app-rights-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.formObj.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.passwordType)("ngModel", ctx.formObj.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSpinner);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _layout_rights_footer_rights_footer_component__WEBPACK_IMPORTED_MODULE_3__.RightsFooterComponent], styles: [".footer-section[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n}\n\n  .main_class {\n  background-color: red;\n}\n\n@media (max-width: 576px) {\n  .login-form[_ngcontent-%COMP%], .register-form[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .login-register-section[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n  .btn-login[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 20px;\n  }\n}\n\n.bg-color[_ngcontent-%COMP%] {\n  background-color: #F1F1F1;\n  height: calc(100vh - 0px);\n}\n\n.line-height[_ngcontent-%COMP%] {\n  line-height: 21px;\n}\n\n.footer-account[_ngcontent-%COMP%] {\n  border-top: 1px solid #f1f1f1;\n  padding-top: 15px;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRztJQUNHLGFBQUE7RUFFSjtFQUFBO0lBQ0csZUFBQTtFQUVIO0VBQUM7SUFDRyx1QkFBQTtFQUVKO0VBQUM7SUFDRyxXQUFBO0lBQ0EsZ0JBQUE7RUFFSjtBQUNGOztBQUFBO0VBQ0cseUJBQUE7RUFDQSx5QkFBQTtBQUVIOztBQUFBO0VBQ0csaUJBQUE7QUFHSDs7QUFEQTtFQUNHLDZCQUFBO0VBQ0MsaUJBQUE7RUFBbUIsbUJBQUE7QUFLdkIiLCJmaWxlIjoic2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItc2VjdGlvbntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG59XG5cbjo6bmctZGVlcCAubWFpbl9jbGFzc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAubG9naW4tZm9ybSwgLnJlZ2lzdGVyLWZvcm0ge1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgfVxuICAuY29udGFpbmVye1xuICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgIC5sb2dpbi1yZWdpc3Rlci1zZWN0aW9uIHtcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgfVxuICAgLmJ0bi1sb2dpbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICB9XG59XG4uYmctY29sb3J7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxOyBcbiAgIGhlaWdodDogY2FsYygxMDB2aCAtIDBweClcbn1cbi5saW5lLWhlaWdodHtcbiAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuLmZvb3Rlci1hY2NvdW50e1xuICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7IG1hcmdpbi1ib3R0b206IDI1cHhcbn0iXX0= */"] });


/***/ }),

/***/ 64309:
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/auth.service */ 90892);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_domainvalues_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/domainvalues.service */ 78517);
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/global.service */ 59472);
/* harmony import */ var src_app_service_uploadfile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/uploadfile.service */ 83110);
/* harmony import */ var src_app_service_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/setting.service */ 65169);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/common.service */ 35842);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _directive_alphabet_only_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directive/alphabet-only.directive */ 7878);
/* harmony import */ var _directive_number_only_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directive/number-only.directive */ 38748);
/* harmony import */ var _directive_equal_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directive/equal-validator.directive */ 1476);
/* harmony import */ var angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-password-strength-meter */ 56192);

















function SignupComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " First name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Last name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SignupComponent_div_35_div_1_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r3.errors.required);
} }
function SignupComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Phone number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_43_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Enter valid USA phone no ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SignupComponent_div_43_div_1_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SignupComponent_div_43_div_2_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.minlength);
} }
function SignupComponent_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_51_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Email is not correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SignupComponent_div_51_div_1_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SignupComponent_div_51_div_2_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors.pattern);
} }
function SignupComponent_div_71_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_71_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Minimum 8 characters requried!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_71_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Enter valid password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SignupComponent_div_71_div_1_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SignupComponent_div_71_div_2_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, SignupComponent_div_71_div_3_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r9.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r9.errors.pattern);
} }
function SignupComponent_div_79_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Confirm Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_79_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Password doesn't match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SignupComponent_div_79_div_1_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SignupComponent_div_79_div_2_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r11.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r11.hasError("passwordMatchError") && !_r11.hasError("required"));
} }
function SignupComponent_div_92_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Registered Business Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SignupComponent_div_92_div_1_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r13.errors.required);
} }
function SignupComponent_div_100_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Business email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_100_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Business email is not correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SignupComponent_div_100_div_1_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SignupComponent_div_100_div_2_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r15.errors == null ? null : _r15.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r15.errors == null ? null : _r15.errors.pattern);
} }
function SignupComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "First number 0 not allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_115_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Business Phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_115_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Enter valid USA phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SignupComponent_div_115_div_1_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SignupComponent_div_115_div_2_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r17.errors == null ? null : _r17.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r17.errors == null ? null : _r17.errors.minlength);
} }
function SignupComponent_div_123_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Address Line 1 is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SignupComponent_div_123_div_1_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r20.errors.required);
} }
function SignupComponent_div_136_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Zip Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_136_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Enter 5 digit Zip Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_136_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Enter 5 digit Zip Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SignupComponent_div_136_div_1_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SignupComponent_div_136_div_2_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, SignupComponent_div_136_div_3_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r23.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (_r23.errors == null ? null : _r23.errors.minlength) && !(_r23.errors == null ? null : _r23.errors.pattern));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r23.errors == null ? null : _r23.errors.pattern);
} }
function SignupComponent_div_144_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SignupComponent_div_144_div_1_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r25.errors.required);
} }
function SignupComponent_ng_container_154_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r74._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r74.value, " ");
} }
function SignupComponent_ng_container_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SignupComponent_ng_container_154_option_1_Template, 2, 2, "option", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r74.code == "USA");
} }
function SignupComponent_div_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Country is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_option_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", item_r77._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r77.value, " ");
} }
function SignupComponent_div_166_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "State is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SignupComponent_div_166_div_1_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](162);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r30.errors.required);
} }
function SignupComponent_option_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", item_r80 == null ? null : item_r80._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r80 == null ? null : item_r80.value, " ");
} }
function SignupComponent_div_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Business Type is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_182_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please specify other business type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_182_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14)(1, "label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Business Type Others ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "input", 134, 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_div_182_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r83.formObj.business.bus_entity_type_other = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, SignupComponent_div_182_div_7_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](6);
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r36.formObj.business.bus_entity_type_other);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r36.busTypeother && _r81.errors && _r0.submitted);
} }
function SignupComponent_div_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " No. of Stores is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_div_208_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Business Tax ID/SSN is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_span_217_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r41.formObj.business.w9_form.document_name, " ");
} }
function SignupComponent_div_218_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " W9 form is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_span_220_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SignupComponent_span_220_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r85.imageViewModal(ctx_r85.formObj.business.w9_form.url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SignupComponent_span_220_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r87.gs.downloadFileFromUrl(ctx_r87.assetsURL + ctx_r87.formObj.business.w9_form.url, ctx_r87.formObj.business.w9_form.url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "i", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SignupComponent_span_220_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r86); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r88.imageViewModal(ctx_r88.formObj.business.w9_form.url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function SignupComponent_div_239_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Terms and conditions are required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SignupComponent_ng_container_241_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SignupComponent_ng_container_241_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r89.submit(_r0.form)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r46.isSpinner);
} }
function SignupComponent_ng_container_242_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SignupComponent_ng_container_242_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r91.updateBuyer(_r0.form)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r47.isSpinner);
} }
const _c0 = function () { return ["/dsa-module/manage-buyers"]; };
function SignupComponent_a_243_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a")(1, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](1, _c0));
} }
function SignupComponent_div_244_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Sign In here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function SignupComponent_a_262_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a")(1, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SignupComponent_a_262_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r93.backToBuyer()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Back to Buyer Management ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function SignupComponent_a_263_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a")(1, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SignupComponent_a_263_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r95.signIn()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Click here to Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function SignupComponent_ng_container_285_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 147)(2, "h3", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "PDF Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 149)(5, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "iframe", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r52.sanitizer.bypassSecurityTrustResourceUrl(ctx_r52.assetsURL + ctx_r52.imageView), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
} }
function SignupComponent_div_286_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 153)(1, "div", 154)(2, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
const _c2 = function () { return ["/home/privacy"]; };
const _c3 = function () { return ["/home/terms-condition"]; };
const _c4 = function () { return ["/home/contactus"]; };
class SignupComponent {
    // *** //
    constructor(auth_service, toastr, router, domainVal, _route, gs, uploadSrv, setService, sanitizer, common) {
        this.auth_service = auth_service;
        this.toastr = toastr;
        this.router = router;
        this.domainVal = domainVal;
        this._route = _route;
        this.gs = gs;
        this.uploadSrv = uploadSrv;
        this.setService = setService;
        this.sanitizer = sanitizer;
        this.common = common;
        this.assetsURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.assetsURL;
        this.step = 'step1';
        this.isZero = false;
        this.isSpinner = false;
        this.isDisable = false;
        this.passCode = '!@#$%^&*()';
        this.businessTypeData = [];
        this.allCountries = [];
        this.allStates = [];
        this.verfifyQuicker = 'yes';
        this.paramsData = {};
        this.actionPermissions = {};
        this.viewData = '';
        this.userRegData = {
            firstname: '',
            lastname: '',
            mobile: '',
            email: ''
        };
        this.formObj = {
            firstname: '',
            lastname: '',
            middlename: '',
            phone_number: '',
            password: '',
            email: '',
            individual: '',
            buyer_status: 'BYPR',
            agree_to_terms_conditions: '',
            business: {
                // bus_entity_type_other: '',
                business_type: '',
                bus_entity_type_other: '',
                bus_name: '',
                bus_email: '',
                noOfStores: '',
                business_Tax_Id: '',
                business_phone: '',
                status: 'active',
                editedby: null,
                deleted: null,
                deletedby: null,
                individual: '',
                create_user: '',
                w9_form: {
                    url: '',
                    document_name: '',
                },
            },
            address_Register: {
                zipcode: '',
                city: '',
                country: '',
                state: '',
                status: 'active',
                address_type: 'CADD',
                add_line1: '',
                add_line2: '',
                individual: '',
                create_user: '',
                bussiness: '',
                editedby: null,
                deleted: null,
                deletedby: null,
                code: 'BYRADD',
            },
        };
        // OTP Var Section
        this.config = {
            allowNumbersOnly: false,
            length: 4,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
                width: '50px',
                height: '50px'
            }
        };
        this.gs.updatePageName('Signup');
    }
    ngOnInit() {
        if (this.gs.loginData && this.gs.loginData['_id']) {
            this.setService.getPermission({ id: this.gs.loginData['_id'] }).subscribe((resp) => {
                // console.log("resp >>", resp);
                this.actionPermissions = resp['data'];
            }, (error) => {
                console.log(error);
            });
        }
        this._route.queryParamMap.subscribe((params) => {
            this.paramsData = params['params'];
            this.parant_id = params['params']['pxd'] || null;
            this.viewData = params['params']['bvd'] || null;
            if (this.parant_id) {
                this.getBuyerById(this.parant_id);
            }
            if (this.viewData) {
                this.getBuyerById(this.viewData);
            }
        });
        // Get all Countries
        this.domainVal.getAll_Activecountries().subscribe((resp) => {
            this.allCountries = resp.data;
            if (this.allCountries && this.allCountries.length) {
                this.allCountries.sort(this.common.dynamicSort("value"));
                const result = this.allCountries.find((x) => x.value === 'USA');
                if (result && result._id) {
                    this.formObj.address_Register.country = result._id;
                    this.ChnageCountry(result._id);
                }
            }
        });
        // Get All Business Type
        this.domainVal.getAll_bussiness_type().subscribe((resp) => {
            this.businessTypeData = resp.data;
            if (this.businessTypeData && this.businessTypeData.length) {
                this.businessTypeData.sort(this.common.dynamicSort("value"));
                this.businessTypeData.push({ _id: 0, value: "Others" });
            }
        });
    }
    getBuyerById(id) {
        this.isDisable = true;
        this.auth_service.getBuyerById({ id }).subscribe((resp) => {
            this.isDisable = false;
            let userDetaisl = resp.data;
            if (userDetaisl) {
                this.formObj._id = userDetaisl._id;
                this.formObj.firstname = userDetaisl.firstname;
                this.formObj.lastname = userDetaisl.lastname;
                this.formObj.middlename = userDetaisl.middlename;
                this.formObj.email = userDetaisl.email_address.email_add;
                this.formObj.business.id = userDetaisl.bussiness._id;
                this.formObj.business.bus_email = userDetaisl.email_business.email_add;
                this.formObj.business.business_type = userDetaisl.bussiness.business_type;
                this.formObj.business.bus_name = userDetaisl.bussiness.bus_name;
                this.formObj.business.noOfStores = userDetaisl.bussiness.noOfStores;
                this.formObj.business.business_Tax_Id = userDetaisl.bussiness.business_Tax_Id;
                this.formObj.phone_number = userDetaisl.phonebook.phone_number;
                this.formObj.agree_to_terms_conditions = userDetaisl.bussiness.agree_terms || true;
                let x = userDetaisl.phonebook_business.phone_number.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                this.formObj.business.business_phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
                this.formObj.address_Register.zipcode = userDetaisl.address.zipcode;
                this.formObj.address_Register.city = userDetaisl.address.city;
                this.formObj.address_Register.country = userDetaisl.address.country;
                this.formObj.address_Register.state = userDetaisl.address.state;
                this.formObj.address_Register.address_type = userDetaisl.address.address_type;
                this.formObj.address_Register.add_line1 = userDetaisl.address.add_line1;
                this.formObj.address_Register.add_line2 = userDetaisl.address.add_line2;
                if (userDetaisl.bussiness && userDetaisl.bussiness.w9_form) {
                    this.formObj.business.w9_form.document_name = userDetaisl.bussiness.w9_form.document_name || '';
                    this.formObj.business.w9_form.url = userDetaisl.bussiness.w9_form.url || '';
                }
            }
        }, error => {
            this.isDisable = false;
            console.log('error', error);
        });
    }
    tabChange(key) {
        this.step = key;
    }
    telInputObject(obj) {
        obj.setCountry('us');
    }
    submit(form) {
        if (form.valid && this.formObj.business.w9_form.url) {
            this.isSpinner = true;
            if (this.router.url == '/dsa-buyer-signup') {
                this.formObj.parent_id = this.gs.loginData['_id'];
            }
            this.auth_service.createBuyer(this.formObj).subscribe((resp) => {
                this.isSpinner = false;
                if (resp.status) {
                    if (this.formObj.parent_id) {
                        this.toastr.success('Buyer created successfully!', 'Success', {
                            timeOut: 5000,
                            positionClass: 'toast-top-right',
                            progressBar: true,
                            progressAnimation: 'increasing'
                        });
                        this.router.navigate(['/dsa-module/manage-buyers']);
                        return;
                    }
                    $('#defaultSize').modal('show');
                    // localStorage.setItem('buyerUserData', JSON.stringify(resp.data));
                    // localStorage.setItem('otpcode', resp.code);
                    this.toastr.success('Thank you for choosing ExpoBazaar!', 'Success', {
                        timeOut: 5000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing'
                    });
                    // this.getOTP();
                    // setTimeout(() => {
                    //     window.scroll(0, 0);
                    // }, 80);
                }
                else {
                    // if (resp.pending && resp.pending._id) {
                    //     localStorage.setItem('buyerUserData', JSON.stringify(resp.pending));
                    //     this.toastr.error('Otp verification is pending.', 'Oops', {
                    //         timeOut: 8000,
                    //         positionClass: 'toast-top-right',
                    //         progressBar: true,
                    //         progressAnimation: 'increasing',
                    //     });
                    //     this.getOTP();
                    //     return;
                    // }
                    this.toastr.error(resp['message'], 'Oops', {
                        timeOut: 8000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing',
                    });
                }
            }, (error) => {
                this.isSpinner = false;
                console.log(error);
            });
        }
        else {
            this.isSpinner = false;
            this.toastr.error('Please fill all required fields.', 'Oops!', {
                timeOut: 8000,
                positionClass: 'toast-top-right',
                progressBar: true,
                progressAnimation: 'increasing',
            });
        }
    }
    updateBuyer(form) {
        if (form.valid) {
            this.isSpinner = true;
            this.formObj.individual = this.parant_id;
            this.auth_service.updateRegBuyer(this.formObj).subscribe((resp) => {
                this.isSpinner = false;
                if (resp.status) {
                    this.toastr.success('Register details updated Successfully!', 'Success', {
                        timeOut: 5000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing'
                    });
                    this.router.navigate(['/dsa-module/manage-buyers']);
                }
                else {
                    this.toastr.error(resp['message'], 'Oops', {
                        timeOut: 8000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing',
                    });
                }
            }, (error) => {
                this.isSpinner = false;
                console.log(error);
            });
        }
    }
    // w9 form upload picture
    w9_form_upload(event) {
        var file = event.target.files[0];
        var FileSize = event.target.files[0].size / Math.pow(1024, 2); // in MB
        if (FileSize >= 5) {
            try {
                document.getElementById('W9-form').value = '';
            }
            catch (ee) { }
            this.toastr.error('File size is too Large, Maximum 5 mb Allowed', '', {
                timeOut: 3000,
                positionClass: 'toast-top-right',
                progressBar: true,
                progressAnimation: 'increasing'
            });
        }
        else {
            this.isSpinner = true;
            this.uploadSrv.saveimage(file).subscribe((data) => {
                this.formObj.business.w9_form.url = data.file;
                this.formObj.business.w9_form.document_name = file.name;
                this.isSpinner = false;
            }, error => {
                console.log('error');
            });
        }
    }
    update(form, key) {
        if (form.valid) {
            let userData = JSON.parse(localStorage.getItem('buyerUserData') || '{}');
            this.formObj.business.individual = userData._id;
            this.formObj.business.email = userData.email_add;
            this.formObj.business.create_user = userData._id;
            this.formObj.address_Register.individual = userData._id;
            this.formObj.address_Register.create_user = userData._id;
            this.formObj.id = this.userRegData._id;
            this.formObj.buyer_status = 'BYPR';
            this.isSpinner = true;
            this.updateBusiness(key);
        }
    }
    updateBusiness(key) {
        this.isSpinner = true;
        this.auth_service.updateBuyer(this.formObj).subscribe((resp) => {
            this.isSpinner = false;
            if (resp.status) {
                this.toastr.success('Business details added successfully', 'Success', {
                    timeOut: 5000,
                    positionClass: 'toast-top-right',
                    progressBar: true,
                    progressAnimation: 'increasing'
                });
                this.step = key;
                setTimeout(() => {
                    if (typeof window !== 'undefined' && window.document) {
                        window.scroll(0, 0);
                    }
                }, 80);
            }
        }, (error) => {
            this.isSpinner = false;
            console.log(error);
        });
    }
    backToBuyer() {
        this.router.navigate(['/dsa-module/manage-buyers']);
    }
    submitTabChange(key, form) {
        if (form.valid) {
            this.step = key;
            if (typeof window !== 'undefined' && window.document) {
                window.scroll(0, 0);
            }
        }
    }
    // OTP Section Start
    getOTP() {
        this.userRegData = JSON.parse(localStorage.getItem('buyerUserData') || '');
        this.receiveOTPCode = localStorage.getItem('otpcode') || '';
    }
    VerifyOTPsubmitNo(otp) {
        if (otp) {
            this.otp = otp;
        }
    }
    VerifyOTPsubmit() {
        if (this.otp && this.otp.length == 4) {
            let body = {
                id: this.userRegData._id,
                buyer_status: 'PR',
                otp: this.otp,
            };
            this.isSpinner = true;
            this.auth_service.otpVerficationBuyer(body).subscribe((resp) => {
                this.isSpinner = false;
                if (resp.status) {
                    this.toastr.success('Email Address Verified successfully', 'Success', {
                        timeOut: 4000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing',
                    });
                    this.tabChange('step3');
                }
                else {
                    this.toastr.error(resp.message, 'error', {
                        timeOut: 4000,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                        progressAnimation: 'increasing',
                    });
                }
            }, error => {
                this.isSpinner = false;
            });
        }
        else {
            this.toastr.error('OTP is not correct', 'error', {
                timeOut: 4000,
                positionClass: 'toast-top-right',
                progressBar: true,
                progressAnimation: 'increasing',
            });
        }
    }
    resendOTP() {
        this.isSpinner = true;
        this.auth_service.resendOTP({
            email: this.userRegData.email_add
        }).subscribe((resp) => {
            this.isSpinner = false;
            localStorage.setItem('otpcode', resp.code);
            if (resp.status) {
                this.getOTP();
                this.toastr.success('OTP sent on the registered Email', 'Success', {
                    timeOut: 4000,
                    positionClass: 'toast-top-right',
                    progressBar: true,
                    progressAnimation: 'increasing',
                });
                this.tabChange('step2');
            }
        });
    }
    // ####################  OTP SECTION END #################### //
    // Business Type Change Others
    BusinessType($event) {
        let text = $event.target.options[$event.target.options.selectedIndex].text;
        if (text == "Others") {
            this.busTypeother = true;
        }
        else {
            this.busTypeother = false;
        }
    }
    // Country
    ChnageCountry(event) {
        let val;
        if (event && event.target) {
            val = event.target.value;
        }
        else {
            val = event;
        }
        this.domainVal.getstateOrCity(val).subscribe((resp) => {
            this.allStates = resp.data;
            if (this.allStates && this.allStates.length) {
                this.allStates.sort(this.common.dynamicSort("value"));
            }
        });
    }
    mobilefirstnozero(event) {
        var x = event.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
        event.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        return;
        if (!this.formObj.business.phone.match('^[1-9][0-9]*$')) {
            this.formObj.business.phone = '';
            this.isZero = true;
        }
        else {
            this.isZero = false;
        }
    }
    imageViewModal(image) {
        $('#imageViewModal').modal('show');
        this.imageView = image;
    }
    modalHide() {
        $('#defaultSize').modal('hide');
    }
    signIn() {
        if (this.paramsData && this.paramsData['pd']) {
            this.router.navigate(['/signin'], { queryParams: { pd: this.paramsData.pd } });
        }
        else if (this.paramsData && this.paramsData['wld']) {
            this.router.navigate(['/signin'], { queryParams: { wld: this.paramsData.wld } });
        }
        else if (this.paramsData && this.paramsData['catId']) {
            this.router.navigate(['/signin'], { queryParams: { catId: this.paramsData.catId } });
        }
        else {
            this.router.navigate(['/signin']);
        }
        $('#defaultSize').modal('hide');
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_domainvalues_service__WEBPACK_IMPORTED_MODULE_2__.DomainvaluesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_uploadfile_service__WEBPACK_IMPORTED_MODULE_4__.UploadfileService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_setting_service__WEBPACK_IMPORTED_MODULE_5__.SettingService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 287, vars: 92, consts: [["id", "main-wrapper"], [1, "section", "pt-90", "pb-70", "pt-xs-45", "signup-page"], [1, "container", "snup-container"], [1, "row"], [1, "col-md-12", "text-center"], [1, "logo-area", "text-center"], ["routerLink", "/home"], ["src", "assets/images/Logo.svg", "alt", ""], [1, "col-lg-12", "col-md-12", "align-items-center", "mt-2"], ["name", "signupForm", "novalidate", ""], ["signupForm", "ngForm"], [1, "width-800", "mx-auto"], [1, "signup-form"], [1, "text-center", "padding"], [1, "mb-1", "col-md-4"], ["for", "Firstname", 1, "form-label"], ["type", "text", "name", "firstname", "id", "Firstname", "placeholder", "First Name", "aria-describedby", "firstname", "appAlphabetOnly", "", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["firstname", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "Middlename", 1, "form-label"], ["type", "text", "name", "middlename", "id", "Middlename", "placeholder", "Middle Name", "aria-describedby", "middlename", "appAlphabetOnly", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["for", "lastName", 1, "form-label"], ["type", "text", "id", "lastName", "aria-describedby", "lastname", "placeholder", "Last Name", "name", "lastname", "appAlphabetOnly", "", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["lastname", "ngModel"], ["for", "phone_number", 1, "form-label"], ["type", "text", "id", "phone_number", "placeholder", "Phone number", "name", "phone_number", "numbersOnly", "", "minlength", "10", "maxlength", "10", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["phone_number", "ngModel"], [1, "col-md-4", "mb-1"], ["for", "emailID", 1, "form-label"], ["type", "email", "name", "email", "aria-describedby", "emailID", "id", "emailID", "placeholder", "john@email.com", "required", "", 1, "form-control", 3, "ngModel", "pattern", "disabled", "ngModelChange"], ["email", "ngModel"], [1, "form-password-toggle", "col-md-4"], ["for", "Passwords", 1, "form-label"], ["href", "#", 1, "helptip"], ["title", "", 1, "fa", "fa-question-circle"], [1, "help"], ["type", "password", "name", "#", "id", "Passwords", "aria-describedby", "password", "name", "password", "required", "", "minlength", "8", "maxlength", "20", "placeholder", "\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7", 1, "form-control", 3, "ngModel", "pattern", "disabled", "ngModelChange", "keydown.space"], ["password", "ngModel"], [3, "password"], ["for", "CnfrmPasswordId", 1, "form-label"], ["type", "password", "name", "CnfmPasswordVar", "id", "CnfrmPasswordId", "placeholder", "\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7", "appPasswordvalidator", "password", "name", "CnfmPasswordVar", "minlength", "8", "maxlength", "20", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngClass", "ngModelChange"], ["CnfmPasswordVar", "ngModel"], [1, "mb-1", "col-md-12"], [1, "text-center", "text-capitalize"], [1, "mb-1", "col-md-6"], ["for", "registeredBusiness", 1, "form-label"], ["type", "text", "id", "registeredBusiness", "placeholder", "Registered Business Name", "name", "registeredBusinessName", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["regisBusiness", "ngModel"], [1, "col-md-6"], ["for", "bus_emailID", 1, "form-label"], ["type", "email", "name", "bus_email", "aria-describedby", "bus_emailID", "id", "bus_emailID", "placeholder", "Business Email", "required", "", 1, "form-control", 3, "ngModel", "pattern", "disabled", "ngModelChange"], ["bus_email", "ngModel"], ["for", "username", 1, "form-label", "float-left"], ["type", "text", "placeholder", "", "disabled", "", 1, "form-control", "input-style"], ["type", "text", "id", "businessPhone", "placeholder", "(555) 555-5555", "name", "phone", "required", "", "minlength", "14", 1, "form-control", "Phone-next-input", 3, "ngModel", "disabled", "ngModelChange", "keypress"], ["businessPhone", "ngModel"], ["for", "streetNumber", 1, "form-label"], ["type", "text", "id", "streetNumber", "placeholder", "Street & Number", "name", "add_line1", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["streetNumber", "ngModel"], ["for", "suiteUnit", 1, "form-label"], ["type", "text", "id", "suiteUnit", "placeholder", "Suite, Unit, Building, Floor", "name", "add_line2", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["suiteUnit", "ngModel"], ["for", "zipCode", 1, "form-label"], ["type", "text", "id", "zipCode", "placeholder", "Zip Code ", "name", "zipCode", "minlength", "5", "maxlength", "5", "numbersOnly", "", "onpaste", "return false;", "pattern", "\\d{1,5}", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["zipCode", "ngModel"], ["for", "city", 1, "form-label"], ["type", "text", "id", "city", "placeholder", "City", "name", "city", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["city", "ngModel"], ["for", "country", 1, "form-label"], ["id", "Country", "name", "country", "required", "", 1, "form-control", 3, "disabled", "ngModel", "change", "ngModelChange"], ["Country", "ngModel"], ["value", "", "disabled", ""], [4, "ngFor", "ngForOf"], ["for", "state", 1, "form-label"], ["id", "state", "name", "state", "id", "state", "required", "", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], ["state", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "bus_entity_typ", 1, "form-label"], ["id", "bus_entity_typ", "name", "bus_entity_typ", "required", "", 1, "form-control", 3, "ngModel", "disabled", "change", "ngModelChange"], ["business_type", "ngModel"], ["value", ""], ["class", "mb-1 col-md-4", 4, "ngIf"], ["for", "noOfS", 1, "form-label"], ["type", "text", "id", "noOfS", "name", "noOfStores", "placeholder", "Enter Number", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["noOfStores", "ngModel"], ["for", "username", 1, "form-label"], ["type", "text", "name", "business_Tax_Id", "placeholder", "Business Tax ID/SSN", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["business_Tax_Id", "ngModel"], [1, "file"], ["type", "file", "id", "W9-form", "aria-label", "File browser example", "accept", ".pdf,.doc", 3, "disabled", "change"], ["class", "file-custom", 4, "ngIf"], ["class", "text-danger pt-2", 4, "ngIf"], [1, "mb-2", "col-md-2", "pt-3"], [4, "ngIf"], [1, "col-md-4", "downlod", "btn-padd"], ["href", "https://www.irs.gov/pub/irs-pdf/fw9.pdf", "target", "_blank", 1, "btn", "btn-warning", "btn-xl"], ["data-feather", "download", 1, "align-middle", "me-sm-25", "me-0"], [1, "align-middle", "d-sm-inline-block"], [1, "row", "mt-25"], [1, "col-md-8", "col-12", "mb-25"], ["type", "checkbox", "name", "agree_to_terms_conditions", "required", "", 3, "ngModel", "disabled", "ngModelChange"], ["agree_terms", "ngModel"], ["target", "_blank", 1, "text-link", 3, "routerLink"], [1, "col-md-4", "text-right"], ["class", "text-center", 4, "ngIf"], ["data-backdrop", "static", "id", "defaultSize", "tabindex", "-1", "aria-labelledby", "myModalLabel18", "aria-hidden", "true", 1, "modal", "fade", "text-start", "modal-success"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center"], [1, "logo-area", "mt-20", "mb-20"], ["src", "./assets/images/Logo.svg", "alt", ""], [1, "mx-auto", "mb-2"], [1, "mb-2"], [1, "modal-footer"], [1, "float-left"], [1, "text-link", 3, "routerLink", "click"], [1, "float-right"], [1, "footer-section", "section", "bg-gray"], [1, "footer-bottom", "section"], [1, "container"], [1, "row", "no-gutters"], [1, "col-12", "ft-border", "pt-15", "pb-15"], [1, "col-lg-6", "col-md-6", "col-sm-12"], [1, "copyright", "text-left"], [1, "copyright", "text-right"], [1, "copyright"], ["target", "_blank", 1, "pl-3", 3, "routerLink"], ["id", "imageViewModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "imageViewModalLabel", "aria-hidden", "true", 1, "modal", "fade", "text-start", "modal-success"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], ["class", "sub-loading", 4, "ngIf"], [1, "text-danger"], [3, "value", 4, "ngIf"], [3, "value"], ["for", "bus_entity_type_other"], ["type", "text", "id", "us_ownership", "required", "", "id", "bus_entity_type_other", "name", "bus_entity_type_other", "placeholder", "Business Type Others", 1, "form-control", 3, "ngModel", "ngModelChange"], ["bus_entity_type_other", "ngModel"], [1, "file-custom"], [1, "text-danger", "pt-2"], ["src", "assets/pdf.png", "alt", "w9_form", "id", "mediaImage", 1, "pointer", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-download", "action_btn", "ml-3", "mt-2", "pointer", "float-none", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye", "action_btn", "ml-4", "mt-2", "pointer", "float-left", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-next", "mr-2", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "btn-prev", 3, "routerLink"], [1, "text-center"], ["routerLink", "/signin", 1, "text-forgot"], ["type", "button", 1, "btn", "btn-primary", "btn-prev", "mr-2", 3, "click"], [1, "btn", "btn-success", 3, "click"], [1, "modal-header"], ["id", "exampleModalLabel"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "frame", "width", "100%", 1, "iframe-size", 3, "src"], [1, "sub-loading"], [1, "loader"], [1, "text-large", "font-weight-bolder"], ["src", "assets/images/loader/123.gif"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 8)(9, "form", 9, 10)(11, "div", 11)(12, "div", 12)(13, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Create Buyer Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 3)(16, "div", 14)(17, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_21_listener($event) { return ctx.formObj.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, SignupComponent_div_23_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 14)(25, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Middle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_27_listener($event) { return ctx.formObj.middlename = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 14)(29, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_33_listener($event) { return ctx.formObj.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, SignupComponent_div_35_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 14)(37, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_41_listener($event) { return ctx.formObj.phone_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, SignupComponent_div_43_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 27)(45, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_49_listener($event) { return ctx.formObj.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, SignupComponent_div_51_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 31)(53, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](58, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "span", 35)(60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "MUST contain at least 8-20 characters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "MUST contain at least one number and one alphabet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "MUST contain at least one special character !@#$%^&*()");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_68_listener($event) { return ctx.formObj.password = $event; })("keydown.space", function SignupComponent_Template_input_keydown_space_68_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](70, "password-strength-meter", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](71, SignupComponent_div_71_Template, 4, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 31)(73, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, " Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_77_listener($event) { return ctx.formObj.conformpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](79, SignupComponent_div_79_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](80, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 3)(82, "div", 42)(83, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "Enter your business info");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "div", 44)(86, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "Registered Business Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "input", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_90_listener($event) { return ctx.formObj.business.bus_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](92, SignupComponent_div_92_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "div", 48)(94, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, "Business Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "input", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_98_listener($event) { return ctx.formObj.business.bus_email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](100, SignupComponent_div_100_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "div", 44)(102, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, " Business Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](105, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](107, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109, " We may contact you for verification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](110, "br")(111, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "input", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_112_listener($event) { return ctx.formObj.business.business_phone = $event; })("keypress", function SignupComponent_Template_input_keypress_112_listener($event) { return ctx.mobilefirstnozero($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](114, SignupComponent_div_114_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](115, SignupComponent_div_115_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "div", 44)(117, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, "Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](120, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "input", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_121_listener($event) { return ctx.formObj.address_Register.add_line1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](123, SignupComponent_div_123_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "div", 14)(125, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](126, "Address Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](127, "input", 60, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_127_listener($event) { return ctx.formObj.address_Register.add_line2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](129, "div", 14)(130, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](131, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](133, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "input", 63, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_134_listener($event) { return ctx.formObj.address_Register.zipcode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](136, SignupComponent_div_136_Template, 4, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "div", 14)(138, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](139, " City");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](141, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](142, "input", 66, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_142_listener($event) { return ctx.formObj.address_Register.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](144, SignupComponent_div_144_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](145, "div", 14)(146, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](147, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](149, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](150, "select", 69, 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SignupComponent_Template_select_change_150_listener($event) { return ctx.ChnageCountry($event); })("ngModelChange", function SignupComponent_Template_select_ngModelChange_150_listener($event) { return ctx.formObj.address_Register.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](153, "Select Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](154, SignupComponent_ng_container_154_Template, 2, 1, "ng-container", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](155, SignupComponent_div_155_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](156, "div", 14)(157, "label", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](158, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](160, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](161, "select", 74, 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_161_listener($event) { return ctx.formObj.address_Register.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](163, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](164, "Select State");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](165, SignupComponent_option_165_Template, 2, 2, "option", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](166, SignupComponent_div_166_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](167, "div", 14)(168, "label", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](169, "Business Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](170, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](171, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](172, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](173, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](174, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](175, "Most businesses in the US register as sole proprietorships, partnerships, corporations, and limited liability companies. View the IRS website for more information. If you\u2019re a sole proprietor, clearly indicate your full name and business name in the fields above. If you don\u2019t have an official business name, use your full name in that field as well. This will help us confirm your business. In some cases, we may contact you for some additional documents.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](176, "select", 78, 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SignupComponent_Template_select_change_176_listener($event) { return ctx.BusinessType($event); })("ngModelChange", function SignupComponent_Template_select_ngModelChange_176_listener($event) { return ctx.formObj.business.business_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](178, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](179, "Select Business Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](180, SignupComponent_option_180_Template, 2, 2, "option", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](181, SignupComponent_div_181_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](182, SignupComponent_div_182_Template, 8, 2, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](183, "div", 14)(184, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](185, "No. of Stores");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](186, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](187, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](188, "input", 83, 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_188_listener($event) { return ctx.formObj.business.noOfStores = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](190, SignupComponent_div_190_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](191, "div", 14)(192, "label", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](193, "Business Tax ID/SSN");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](194, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](195, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](196, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](197, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](198, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](199, "Enter your business' 9-digit Employer Identification Number (EIN). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](200, "br")(201, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](202, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](203, "Sole proprietor?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](204, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](205, "Enter your Social Security Number instead.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](206, "input", 86, 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_206_listener($event) { return ctx.formObj.business.business_Tax_Id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](208, SignupComponent_div_208_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](209, "div", 3)(210, "div", 14)(211, "label", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](212, "Upload W9 form");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](213, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](214, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](215, "label", 88)(216, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SignupComponent_Template_input_change_216_listener($event) { return ctx.w9_form_upload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](217, SignupComponent_span_217_Template, 2, 1, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](218, SignupComponent_div_218_Template, 2, 0, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](219, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](220, SignupComponent_span_220_Template, 5, 0, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](221, "div", 94)(222, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](223, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](224, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](225, " Download template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](226, "div", 98)(227, "div", 99)(228, "input", 100, 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_228_listener($event) { return ctx.formObj.agree_to_terms_conditions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](230, " I agree to ExpoBazaar's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](231, "a", 102)(232, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](233, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](234, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](235, "a", 102)(236, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](237, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](238, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](239, SignupComponent_div_239_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](240, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](241, SignupComponent_ng_container_241_Template, 3, 1, "ng-container", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](242, SignupComponent_ng_container_242_Template, 3, 1, "ng-container", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](243, SignupComponent_a_243_Template, 3, 2, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](244, SignupComponent_div_244_Template, 4, 0, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](245, "div", 105)(246, "div", 106)(247, "div", 107)(248, "div", 108)(249, "div", 109)(250, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](251, "img", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](252, "h1", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](253, "Thank you for choosing ExpoBazaar! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](254, "p", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](255, "Our team will mail you back shortly to complete your account setup.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](256, "div", 113)(257, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](258, "Having trouble? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](259, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SignupComponent_Template_a_click_259_listener() { return ctx.modalHide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](260, " Contact us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](261, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](262, SignupComponent_a_262_Template, 3, 0, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](263, SignupComponent_a_263_Template, 3, 0, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](264, "div", 0)(265, "footer", 117)(266, "div", 118)(267, "div", 119)(268, "div", 120)(269, "div", 121)(270, "div", 3)(271, "div", 122)(272, "div", 123)(273, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](274, "\u00A9 2021 ExpoBazaar, Expo Digital India and all its affiliates. All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](275, "div", 122)(276, "div", 124)(277, "p", 125)(278, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](279, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](280, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](281, "Terms of use");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](282, "div", 127)(283, "div", 128)(284, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](285, SignupComponent_ng_container_285_Template, 9, 1, "ng-container", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](286, SignupComponent_div_286_Template, 4, 0, "div", 129);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](22);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](34);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](42);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](50);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](69);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](78);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](91);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](99);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](113);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](122);
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](135);
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](143);
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](151);
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](162);
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](177);
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](189);
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](207);
        const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](229);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.firstname)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r1.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.middlename)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.lastname)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r3.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.phone_number)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r5.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.email)("pattern", ctx.common.emailPattern)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r7.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.password)("pattern", ctx.common.passwordPattern)("disabled", ctx.viewData || ctx.parant_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("password", ctx.formObj.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r9.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.conformpassword)("disabled", ctx.viewData || ctx.parant_id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](85, _c1, (_r11.touched || _r11.dirty) && !_r11.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r11.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.business.bus_name)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r13.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.business.bus_email)("pattern", ctx.common.emailPattern)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r15.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.business.business_phone)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isZero);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r17.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.address_Register.add_line1)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r20.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.address_Register.add_line2)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.address_Register.zipcode)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r23.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.address_Register.city)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r25.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.viewData)("ngModel", ctx.formObj.address_Register.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.allCountries);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r27.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.viewData)("ngModel", ctx.formObj.address_Register.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.allStates);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r30.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.business.business_type)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.businessTypeData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r33.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.busTypeother);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.business.noOfStores)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r37.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.business.business_Tax_Id)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r39.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formObj.business && ctx.formObj.business.w9_form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx.formObj.business.w9_form && ctx.formObj.business.w9_form.url) && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formObj.business.w9_form && ctx.formObj.business.w9_form.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.formObj.agree_to_terms_conditions)("disabled", ctx.viewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](87, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](88, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r44.errors && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.viewData && !ctx.parant_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.parant_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.parant_id || ctx.viewData || ctx.router.url == "/dsa-buyer-signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.parant_id && !ctx.viewData && ctx.router.url != "/dsa-buyer-signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](89, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.parant_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.parant_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](90, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](91, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.imageView);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isSpinner);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.CheckboxRequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, _directive_alphabet_only_directive__WEBPACK_IMPORTED_MODULE_7__.AlphabetOnlyDirective, _directive_number_only_directive__WEBPACK_IMPORTED_MODULE_8__.OnlynumberDirective, _directive_equal_validator_directive__WEBPACK_IMPORTED_MODULE_9__.PasswordvalidatorDirective, angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_16__.PasswordStrengthMeterComponent], styles: [".form-control[_ngcontent-%COMP%] {\n  font-size: inherit !important;\n}\n\n.bg_color[_ngcontent-%COMP%] {\n  background: #f1f1f1;\n}\n\n[_nghost-%COMP%]     .iti {\n  width: 100% !important;\n}\n\nbutton[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n\n#mediaImage[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 70px;\n  object-fit: cover !important;\n  border-radius: 4px;\n}\n\n.copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #151515;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 500 !important;\n  color: #151515 !important;\n}\n\n@media (max-width: 776px) {\n  .align-middle[_ngcontent-%COMP%] {\n    height: 0px;\n    width: 0px;\n  }\n  .file[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 576px) {\n  .snup-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .snup-container[_ngcontent-%COMP%]   .width-800[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n  }\n  .snup-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .downlod[_ngcontent-%COMP%] {\n    padding: 28px 15px !important;\n  }\n  .file-custom[_ngcontent-%COMP%] {\n    position: absolute;\n    top: auto;\n  }\n}\n\n.signup-page[_ngcontent-%COMP%] {\n  background-color: #F1F1F1;\n}\n\n.signup-form[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 15px;\n  padding: 15px;\n}\n\n.padding[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.input-style[_ngcontent-%COMP%] {\n  width: 65px;\n  float: left;\n  background-image: url(/assets/images/usflag.png);\n  background-repeat: no-repeat;\n  background-position: center center;\n  left: 8px;\n  top: 8px;\n}\n\n.Phone-next-input[_ngcontent-%COMP%] {\n  float: left;\n  width: 84%;\n}\n\n.btn-padd[_ngcontent-%COMP%] {\n  padding: 28px 55px;\n}\n\n.iframe-size[_ngcontent-%COMP%] {\n  height: calc(100vh - 122px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksc0JBQUE7QUFFSjs7QUFDQTs7RUFFSSx5QkFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUdIOztBQURBO0VBQ0csMkJBQUE7RUFDQSx5QkFBQTtBQUlIOztBQURBO0VBQ0c7SUFDRyxXQUFBO0lBQ0EsVUFBQTtFQUlKO0VBRkM7SUFDRyxXQUFBO0VBSUo7QUFDRjs7QUFEQTtFQUNHO0lBQ0csZUFBQTtFQUdKO0VBREk7SUFDRyxlQUFBO0lBQ0EsV0FBQTtFQUdQO0VBREk7SUFDRyxXQUFBO0VBR1A7RUFBQztJQUNHLDZCQUFBO0VBRUo7RUFBQztJQUNHLGtCQUFBO0lBQ0EsU0FBQTtFQUVKO0FBQ0Y7O0FBQUE7RUFDRyx5QkFBQTtBQUVIOztBQUFBO0VBQ0cseUJBQUE7RUFDQSxtQkFBQTtFQUFxQixhQUFBO0FBSXhCOztBQUhDO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQU1IOztBQUpBO0VBQ0csV0FBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLDRCQUFBO0VBQThCLGtDQUM5QjtFQUFlLFNBQUE7RUFBVyxRQUFBO0FBUzdCOztBQVBBO0VBQ0csV0FBQTtFQUNDLFVBQUE7QUFVSjs7QUFSQTtFQUNHLGtCQUFBO0FBV0g7O0FBVEE7RUFDRywyQkFBQTtBQVlIIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4uYmdfY29sb3Ige1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG46aG9zdCA6Om5nLWRlZXAgLml0aSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uOmRpc2FibGVkLFxuYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuI21lZGlhSW1hZ2Uge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jb3B5cmlnaHQgcCB7XG4gICBmb250LXNpemU6IDEzcHg7XG4gICBmb250LXdlaWdodDogNTAwO1xuICAgY29sb3I6ICMxNTE1MTU7XG4gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jb3B5cmlnaHQgYSB7XG4gICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICBjb2xvcjogIzE1MTUxNSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzc2cHgpIHtcbiAgIC5hbGlnbi1taWRkbGV7XG4gICAgICBoZWlnaHQ6IDBweDtcbiAgICAgIHdpZHRoOiAwcHg7XG4gICB9XG4gICAuZmlsZSBpbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAuc251cC1jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICAgICAud2lkdGgtODAwIHtcbiAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmJ0biB7XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgIH1cbiAgIC5kb3dubG9ke1xuICAgICAgcGFkZGluZzogMjhweCAxNXB4ICFpbXBvcnRhbnQ7XG4gICB9XG4gICAuZmlsZS1jdXN0b20ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiBhdXRvOyBcbiAgIH1cbn1cbi5zaWdudXAtcGFnZXtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG59XG4uc2lnbnVwLWZvcm17XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcbiAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IHBhZGRpbmc6IDE1cHg7XG59LnBhZGRpbmd7XG4gICBwYWRkaW5nLXRvcDogMjBweDtcbiAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmlucHV0LXN0eWxle1xuICAgd2lkdGg6NjVweDtcbiAgIGZsb2F0OiBsZWZ0OyBcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy91c2ZsYWcucG5nKTtcbiAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IGJhY2tncm91bmQtcG9zaXRpb246XG4gICBjZW50ZXIgY2VudGVyOyBsZWZ0OiA4cHg7IHRvcDogOHB4O1xufVxuLlBob25lLW5leHQtaW5wdXR7XG4gICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDo4NCVcbn1cbi5idG4tcGFkZHtcbiAgIHBhZGRpbmc6IDI4cHggNTVweDsgXG59XG4uaWZyYW1lLXNpemV7XG4gICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjJweCk7XG59Il19 */"] });


/***/ }),

/***/ 7878:
/*!******************************************************!*\
  !*** ./src/app/directive/alphabet-only.directive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlphabetOnlyDirective": () => (/* binding */ AlphabetOnlyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class AlphabetOnlyDirective {
    onKeydown(event) {
        this.key = event.keyCode;
        if ((this.key >= 15 && this.key <= 64 && this.key != 32) || (this.key >= 123) || (this.key >= 96 && this.key <= 105)) {
            event.preventDefault();
        }
    }
}
AlphabetOnlyDirective.ɵfac = function AlphabetOnlyDirective_Factory(t) { return new (t || AlphabetOnlyDirective)(); };
AlphabetOnlyDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AlphabetOnlyDirective, selectors: [["", "appAlphabetOnly", ""]], hostBindings: function AlphabetOnlyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AlphabetOnlyDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } } });


/***/ }),

/***/ 1476:
/*!********************************************************!*\
  !*** ./src/app/directive/equal-validator.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordvalidatorDirective": () => (/* binding */ PasswordvalidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


class PasswordvalidatorDirective {
    constructor(PasswordControl) {
        this.PasswordControl = PasswordControl;
    }
    validate(c) {
        const Password = c.root.get(this.PasswordControl);
        const ConfirmPassword = c;
        if (ConfirmPassword.value === null) {
            return null;
        }
        if (Password) {
            const subscription = Password.valueChanges.subscribe(() => {
                ConfirmPassword.updateValueAndValidity();
                subscription.unsubscribe();
            });
        }
        return Password && Password.value !== ConfirmPassword.value ? { passwordMatchError: true } : null;
    }
}
PasswordvalidatorDirective.ɵfac = function PasswordvalidatorDirective_Factory(t) { return new (t || PasswordvalidatorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('appPasswordvalidator')); };
PasswordvalidatorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PasswordvalidatorDirective, selectors: [["", "appPasswordvalidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
                useClass: PasswordvalidatorDirective,
                multi: true
            }
        ])] });


/***/ }),

/***/ 34086:
/*!****************************************************************************************!*\
  !*** ./src/app/directive/ngx-tree-select/src/components/tree-select-item.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeSelectItemComponent": () => (/* binding */ TreeSelectItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_select_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/select.service */ 85438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



function TreeSelectItemComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TreeSelectItemComponent_i_5_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.select($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fa-check-square-o", ctx_r0.item.checked === true)("fa-square-o", ctx_r0.item.checked === false)("fa-square", ctx_r0.item.checked === null);
} }
function TreeSelectItemComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TreeSelectItemComponent_span_6_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.select($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.item.text, "");
} }
function TreeSelectItemComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.item.text, "");
} }
function TreeSelectItemComponent_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "tree-select-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", o_r9)("onTouchedCallBack", ctx_r8.onTouchedCallBack);
} }
function TreeSelectItemComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TreeSelectItemComponent_ul_8_li_1_Template, 2, 2, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.item.children);
} }
// tslint:disable-next-line:no-empty
const noop = () => { };
class TreeSelectItemComponent {
    constructor(svc) {
        this.svc = svc;
        this.onTouchedCallBack = noop;
    }
    get isOpen() {
        return this.item.isOpen;
    }
    toggleOpen($event) {
        $event.stopPropagation();
        if (this.haveChildren) {
            this.item.isOpen = !this.item.isOpen;
        }
        else {
            this.select($event);
        }
    }
    get allowParentSelection() {
        return this.svc.Configuration.allowParentSelection;
    }
    get restructureWhenChildSameName() {
        return this.svc.Configuration.restructureWhenChildSameName;
    }
    get needCheckBox() {
        return this.svc.Configuration.isHierarchy() && this.svc.Configuration.allowMultiple;
    }
    get haveChildren() {
        if (this.restructureWhenChildSameName && this.item && this.item.children
            && this.item.children.length === 1 && this.item.text === this.item.children[0].text) {
            this.item = this.item.children[0];
        }
        return this.item && this.item.children && this.item.children.length > 0;
    }
    select($event) {
        $event.stopPropagation();
        if (this.svc.Configuration.allowMultiple ||
            !this.haveChildren ||
            this.svc.Configuration.allowParentSelection) {
            this.svc.toggleItemSelection(this.item);
        }
        this.onTouchedCallBack();
    }
    get filter() {
        return this.svc.Configuration.filter;
    }
}
TreeSelectItemComponent.ɵfac = function TreeSelectItemComponent_Factory(t) { return new (t || TreeSelectItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_select_service__WEBPACK_IMPORTED_MODULE_0__.SelectService)); };
TreeSelectItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TreeSelectItemComponent, selectors: [["tree-select-item"]], inputs: { onTouchedCallBack: "onTouchedCallBack", item: "item" }, decls: 9, vars: 10, consts: [[1, "item", 3, "click"], [1, "item"], ["href", "javascript:void(0)", 3, "click"], [1, "fa"], ["class", "fa", 3, "fa-check-square-o", "fa-square-o", "fa-square", "click", 4, "ngIf"], [3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "ui-select-choices", "role", "menu", 4, "ngIf"], [1, "fa", 3, "click"], [3, "click"], ["role", "menu", 1, "ui-select-choices"], ["role", "menuitem", 4, "ngFor", "ngForOf"], ["role", "menuitem"], [3, "item", "onTouchedCallBack"]], template: function TreeSelectItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TreeSelectItemComponent_Template_div_click_0_listener($event) { return ctx.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TreeSelectItemComponent_Template_a_click_2_listener($event) { return ctx.toggleOpen($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TreeSelectItemComponent_i_5_Template, 1, 6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TreeSelectItemComponent_span_6_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TreeSelectItemComponent_span_7_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TreeSelectItemComponent_ul_8_Template, 2, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.item.selected && !ctx.needCheckBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fa-plus-square-o", ctx.haveChildren && !ctx.isOpen)("fa-minus-square-o", ctx.haveChildren && ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.needCheckBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.allowParentSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.allowParentSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.haveChildren && ctx.isOpen);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, TreeSelectItemComponent], styles: [".item[_ngcontent-%COMP%] {\n  color: #333;\n}\n.item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  clear: both;\n  color: inherit;\n  display: block;\n  font-weight: 400;\n  line-height: 1.42857143;\n  padding: 3px 20px;\n  padding-left: 10px;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(211, 211, 211, 0.431372549);\n  color: #000000;\n  outline: 0;\n  text-decoration: none;\n}\n.item.active[_ngcontent-%COMP%] {\n  background-color: rgba(224, 224, 224, 0.431372549);\n  color: #000000;\n  outline: 0;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtc2VsZWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxXQUxXO0FBQWI7QUFPRTtFQUNFLHFCQUFBO0FBTEo7QUFRRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQU5KO0FBUUk7RUFDRSxrREF4Qm1CO0VBeUJuQixjQXRCYTtFQXVCYixVQUFBO0VBQ0EscUJBQUE7QUFOTjtBQVVFO0VBQ0Usa0RBakNzQjtFQWtDdEIsY0EvQmdCO0VBZ0NoQixVQUFBO0VBQ0EscUJBQUE7QUFSSiIsImZpbGUiOiJ0cmVlLXNlbGVjdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwNmU7XG4kaG92ZXItYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRhY3RpdmUtYmFja2dyb3VuZC1jb2xvciwgNSk7XG4kdGV4dC1jb2xvcjogIzMzMztcbiRhY3RpdmUtdGV4dC1jb2xvcjogIzAwMDAwMDtcbiRob3Zlci10ZXh0LWNvbG9yOiAjMDAwMDAwO1xuXG4uaXRlbSB7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG5cbiAgJj5hIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICAgIHBhZGRpbmc6IDNweCAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJhY2tncm91bmQtY29sb3I7XG4gICAgICBjb2xvcjogJGhvdmVyLXRleHQtY29sb3I7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWN0aXZlLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6ICRhY3RpdmUtdGV4dC1jb2xvcjtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 24833:
/*!***********************************************************************************!*\
  !*** ./src/app/directive/ngx-tree-select/src/components/tree-select.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR": () => (/* binding */ CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR),
/* harmony export */   "TreeSelectComponent": () => (/* binding */ TreeSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_select_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/select.service */ 85438);
/* harmony import */ var _models_expand_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/expand-mode */ 44477);
/* harmony import */ var _models_tree_select_default_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tree-select-default-options */ 34170);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _tree_select_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-select-item.component */ 34086);
/* harmony import */ var _directives_off_click_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/off-click.directive */ 30339);











function TreeSelectComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.placeholder);
} }
function TreeSelectComponent_span_4_span_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TreeSelectComponent_span_4_span_1_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const itm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.removeItem($event, itm_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TreeSelectComponent_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TreeSelectComponent_span_4_span_1_a_2_Template, 2, 0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("selected-item-text", !ctx_r6.multiple)("selected-item-item", ctx_r6.multiple)("btn", ctx_r6.multiple)("btn-default", ctx_r6.multiple)("btn-xs", ctx_r6.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", itm_r4.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.multiple && !ctx_r6.disabled);
} }
function TreeSelectComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TreeSelectComponent_span_4_span_1_Template, 3, 12, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.moreLoaded || ctx_r1.maxVisibleItemCount == 0 || idx_r5 < ctx_r1.maxVisibleItemCount);
} }
function TreeSelectComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TreeSelectComponent_span_6_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.loadMore($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "(...)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
function TreeSelectComponent_ul_8_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TreeSelectComponent_ul_8_input_1_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.filter = $event); })("click", function TreeSelectComponent_ul_8_input_1_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.setInputFocus()); })("blur", function TreeSelectComponent_ul_8_input_1_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.setInputFocusOut()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", ctx_r14.filterPlaceholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r14.filter)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c0));
} }
function TreeSelectComponent_ul_8_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "tree-select-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r20 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("item", o_r20)("onTouchedCallBack", ctx_r15.onTouchedCallback);
} }
function TreeSelectComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TreeSelectComponent_ul_8_input_1_Template, 1, 4, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TreeSelectComponent_ul_8_li_2_Template, 2, 2, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.allowFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.internalItems);
} }
// tslint:disable-next-line:no-empty
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-forward-ref
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => TreeSelectComponent),
    multi: true
};
class TreeSelectComponent {
    constructor(svc, defaultOpts) {
        this.svc = svc;
        this.defaultOpts = defaultOpts;
        this.onTouchedCallback = noop;
        this.showMoreLink = false;
        this.moreLoaded = false;
        this.disabled = false;
        this.placeholder = '';
        this.filterPlaceholder = 'Type here for filtering items...';
        this.allowFilter = true;
        this._isOpen = false;
        this.onChangeCallback = noop;
        this.haveFocus = false;
        this.inputFocus = false;
        this.clickedOutside = this.clickedOutside.bind(this);
        this.svc.modelChanged$.subscribe((result) => {
            this.onChangeCallback(result);
        });
        this.maxVisibleItemCount = (defaultOpts.maxVisibleItemCount || 0);
        this.allowParentSelection = ((defaultOpts.allowParentSelection === undefined ||
            defaultOpts.allowParentSelection === null) ?
            true :
            defaultOpts.allowParentSelection);
        this.allowFilter = ((defaultOpts.allowFilter === undefined || defaultOpts.allowFilter === null) ?
            true :
            defaultOpts.allowFilter);
        this.filterCaseSensitive = ((defaultOpts.filterCaseSensitive === undefined || defaultOpts.filterCaseSensitive === null) ?
            false :
            defaultOpts.filterCaseSensitive);
        this.filterPlaceholder = (defaultOpts.filterPlaceholder || 'Type here for filtering items...');
        this.idField = (defaultOpts.idField || 'id');
        this.textField = (defaultOpts.textField || 'id');
        this.childrenField = (defaultOpts.childrenField || '');
        this.expandMode = (defaultOpts.expandMode || _models_expand_mode__WEBPACK_IMPORTED_MODULE_1__.ExpandMode.None);
    }
    set items(value) {
        this.svc.setItems(value);
    }
    set idField(value) {
        this.svc.setConfiguration((opt) => opt.idProperty = value, true);
    }
    set textField(value) {
        this.svc.setConfiguration((opt) => opt.textProperty = value, true);
    }
    set allowParentSelection(value) {
        this.svc.setConfiguration((opt) => opt.allowParentSelection = value, true);
    }
    get allowParentSelection() {
        return this.svc.Configuration.allowParentSelection;
    }
    set restructureWhenChildSameName(value) {
        this.svc.setConfiguration((opt) => opt.restructureWhenChildSameName = value, true);
    }
    get restructureWhenChildSameName() {
        return this.svc.Configuration.restructureWhenChildSameName;
    }
    set childrenField(value) {
        this.svc.setConfiguration((opt) => opt.childProperty = value, true);
    }
    set multiple(value) {
        this.svc.setConfiguration((opt) => opt.allowMultiple = value, true);
    }
    get multiple() {
        return this.svc.Configuration.allowMultiple;
    }
    set filterCaseSensitive(value) {
        this.svc.setConfiguration((opt) => opt.filterCaseSensitive = value, true);
    }
    get filterCaseSensitive() {
        return this.svc.Configuration.filterCaseSensitive;
    }
    set expandMode(value) {
        this.svc.setConfiguration((opt) => opt.expandMode = value, true);
        this.svc.setExpand();
    }
    get expandMode() {
        return this.svc.Configuration.expandMode;
    }
    set maxVisibleItemCount(value) {
        this.svc.setConfiguration((opt) => opt.maxVisibleItemCount = value, true);
    }
    get maxVisibleItemCount() {
        return this.svc.Configuration.maxVisibleItemCount;
    }
    get internalItems() {
        return this.svc.getInternalItems() || [];
    }
    get selection() {
        this.showMoreLink = (this.maxVisibleItemCount > 0 &&
            ((this.svc.getInternalSelection().length - this.maxVisibleItemCount) > 0));
        return this.svc.getInternalSelection();
    }
    get filter() {
        return this.svc.Configuration.filter;
    }
    set filter(value) {
        this.svc.setConfiguration((opt) => opt.filter = value, false);
        for (const item of this.internalItems) {
            this.ProcessMatchFilterTreeItem(item, this.svc.Configuration.filter);
        }
        this.svc.setExpand();
    }
    // tslint:disable-next-line:no-empty
    keyUp($event) { }
    toggle($event) {
        $event.preventDefault();
        this.haveFocus = true;
        this.svc.toggleOpen();
    }
    removeItem($event, item) {
        $event.stopPropagation();
        this.svc.toggleItemSelection(item);
    }
    get isOpen() {
        return this.svc.Configuration.isOpen;
    }
    clickedOutside() {
        if (!this.inputFocus) {
            if (!this.haveFocus && this.isOpen || this.haveFocus && !this.isOpen) {
                this.onTouched();
            }
            this.haveFocus = false;
        }
    }
    // Set touched on blur
    onTouched() {
        this.svc.close();
        this.onTouchedCallback();
    }
    setInputFocus() {
        this.inputFocus = true;
    }
    setInputFocusOut() {
        this.inputFocus = false;
    }
    /**
     * Write a new value to the element.
     *
     * @param {*} value
     * @memberof TreeSelectComponent
     */
    writeValue(value) {
        this.svc.setSelection(value);
    }
    /**
     * Set the function to be called when the control receives a change event.
     *
     * @param {*} fn
     * @memberof TreeSelectComponent
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     *
     * @param {*} fn
     * @memberof TreeSelectComponent
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param {boolean} isDisabled
     * @memberof TreeSelectComponent
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * This finction is called when user click on show more link.
     *
     * @param {*} $event
     * @memberof TreeSelectComponent
     */
    loadMore($event) {
        $event.stopPropagation();
        this.moreLoaded = !this.moreLoaded;
    }
    ProcessMatchFilterTreeItem(tree, filter) {
        let result = false;
        if (tree && tree.children && tree.children.length > 0) {
            for (const child of tree.children) {
                result = this.ProcessMatchFilterTreeItem(child, filter) || result;
            }
        }
        tree.matchFilter = this.filterCaseSensitive ?
            (tree.id.indexOf(filter) > -1 ||
                tree.text.indexOf(filter) > -1 ||
                result) :
            (tree.id.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
                tree.text.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
                result);
        return tree.matchFilter;
    }
}
TreeSelectComponent.ɵfac = function TreeSelectComponent_Factory(t) { return new (t || TreeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_select_service__WEBPACK_IMPORTED_MODULE_0__.SelectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_models_tree_select_default_options__WEBPACK_IMPORTED_MODULE_2__.TreeSelectDefaultOptions)); };
TreeSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TreeSelectComponent, selectors: [["tree-select"]], inputs: { disabled: "disabled", placeholder: "placeholder", filterPlaceholder: "filterPlaceholder", allowFilter: "allowFilter", items: "items", idField: "idField", textField: "textField", allowParentSelection: "allowParentSelection", restructureWhenChildSameName: "restructureWhenChildSameName", childrenField: "childrenField", multiple: "multiple", filterCaseSensitive: "filterCaseSensitive", expandMode: "expandMode", maxVisibleItemCount: "maxVisibleItemCount" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, _services_select_service__WEBPACK_IMPORTED_MODULE_0__.SelectService])], decls: 9, vars: 11, consts: [["tabindex", "0", 1, "dropdown", "open", "show", 3, "off-click"], ["tabindex", "-1", 1, "btn", "btn-default", "btn-secondary", "form-control", 3, "click"], ["class", "ui-select-placeholder text-muted", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "enabled"], ["class", "pull-right more-items-icon", 3, "click", 4, "ngIf"], [1, "caret", "pull-right", 3, "click"], ["class", "dropdown-menu", "role", "menu", 4, "ngIf"], [1, "ui-select-placeholder", "text-muted"], ["class", "pull-left", 3, "selected-item-text", "selected-item-item", "btn", "btn-default", "btn-xs", 4, "ngIf"], [1, "pull-left"], ["class", "close", 3, "click", 4, "ngIf"], [1, "close", 3, "click"], [1, "pull-right", "more-items-icon", 3, "click"], ["role", "menu", 1, "dropdown-menu"], ["name", "filterText", "type", "text", "class", "form-control", "autocomplete", "off", 3, "ngModel", "placeholder", "ngModelOptions", "ngModelChange", "click", "blur", 4, "ngIf"], ["role", "menuitem", 4, "ngFor", "ngForOf"], ["name", "filterText", "type", "text", "autocomplete", "off", 1, "form-control", 3, "ngModel", "placeholder", "ngModelOptions", "ngModelChange", "click", "blur"], ["role", "menuitem"], [3, "item", "onTouchedCallBack"]], template: function TreeSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TreeSelectComponent_Template_span_click_2_listener($event) { return ctx.toggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TreeSelectComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TreeSelectComponent_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TreeSelectComponent_span_6_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TreeSelectComponent_Template_i_click_7_listener($event) { return ctx.toggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TreeSelectComponent_ul_8_Template, 3, 2, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("off-click", ctx.clickedOutside);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("selected-container-text", !ctx.multiple)("selected-container-item", ctx.multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selection.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showMoreLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.disabled && ctx.isOpen && ctx.internalItems && ctx.internalItems.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _tree_select_item_component__WEBPACK_IMPORTED_MODULE_3__.TreeSelectItemComponent, _directives_off_click_directive__WEBPACK_IMPORTED_MODULE_4__.OffClickDirective], styles: [".ng-invalid[_nghost-%COMP%]:not(.ng-pristine)   span.form-control[_ngcontent-%COMP%], .ng-invalid[_nghost-%COMP%]:not(.ng-untouched)   span.form-control[_ngcontent-%COMP%] {\n  border-color: #a94442;\n}\n\n.input-group[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%] {\n  position: static;\n}\n\n.disabled[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background-color: #eceeef;\n  cursor: not-allowed;\n}\n\n.disabled[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-color: #ccc;\n}\n\n.enabled[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  cursor: context-menu;\n}\n\nul[_ngcontent-%COMP%] {\n  height: auto;\n  list-style-type: none;\n  margin-top: 0;\n  max-height: 200px;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n.selected-container-text[_ngcontent-%COMP%] {\n  padding-left: 7px;\n}\n\n.selected-container-item[_ngcontent-%COMP%] {\n  padding-left: 2px;\n}\n\n.selected-item-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 3px;\n}\n\n.selected-item-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 2px;\n  outline: 0;\n}\n\n.more-items-icon[_ngcontent-%COMP%] {\n  bottom: 23px;\n  height: 10px;\n  opacity: 0.5;\n  position: absolute;\n  right: 20px;\n  z-index: 100;\n}\n\n.close[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 0.75;\n  margin-left: 5px;\n  padding-top: 3px;\n  position: absolute;\n  z-index: 50;\n}\n\n.caret[_ngcontent-%COMP%] {\n  height: 10px;\n  margin-top: -2px;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: table;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUdFLHFCQUxtQjtBQUVyQjs7QUFPQTtFQUVFLGdCQUFBO0FBTEY7O0FBU0U7RUFDRSx5QkFqQnVCO0VBa0J2QixtQkFBQTtBQU5KOztBQVNFO0VBQ0Usa0JBQUE7QUFQSjs7QUFZRTtFQUNFLG9CQUFBO0FBVEo7O0FBY0E7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFYRjs7QUFjQTtFQUNFLGlCQUFBO0FBWEY7O0FBY0E7RUFDRSxpQkFBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFYRjs7QUFjQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQVhGOztBQWNBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVhGOztBQWNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQVhGOztBQWNBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBWEYiLCJmaWxlIjoidHJlZS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGlzYWJsZS1iYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZWVmO1xuJGVycm9yLWJvcmRlci1jb2xvcjogI2E5NDQ0MjtcblxuOmhvc3QubmctaW52YWxpZDpub3QoLm5nLXByaXN0aW5lKSBzcGFuLmZvcm0tY29udHJvbCxcbjpob3N0Lm5nLWludmFsaWQ6bm90KC5uZy11bnRvdWNoZWQpIHNwYW4uZm9ybS1jb250cm9sXG57XG4gIGJvcmRlci1jb2xvcjogJGVycm9yLWJvcmRlci1jb2xvcjtcbn1cblxuLy8gRml4IEJvb3RzdHJhcCBkcm9wZG93biBwb3NpdGlvbiB3aGVuIGluc2lkZSBhIGlucHV0LWdyb3VwXG4uaW5wdXQtZ3JvdXA+LmRyb3Bkb3duIHtcbiAgLy9JbnN0ZWFkIG9mIHJlbGF0aXZlXG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5cbi5kaXNhYmxlZCB7XG4gICY+c3BhbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRpc2FibGUtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgLmJ0biB7XG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICB9XG59XG5cbi5lbmFibGVkIHtcbiAgJj5zcGFuIHtcbiAgICBjdXJzb3I6IGNvbnRleHQtbWVudTtcbiAgfVxuXG59XG5cbnVsIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VsZWN0ZWQtY29udGFpbmVyLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbn1cblxuLnNlbGVjdGVkLWNvbnRhaW5lci1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbi5zZWxlY3RlZC1pdGVtLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogM3B4O1xufVxuXG4uc2VsZWN0ZWQtaXRlbS1pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDJweDtcbiAgb3V0bGluZTogMDtcbn1cblxuLm1vcmUtaXRlbXMtaWNvbiB7XG4gIGJvdHRvbTogMjNweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBvcGFjaXR5OiAuNTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uY2xvc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAuNzU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTA7XG59XG5cbi5jYXJldCB7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 30339:
/*!*********************************************************************************!*\
  !*** ./src/app/directive/ngx-tree-select/src/directives/off-click.directive.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffClickDirective": () => (/* binding */ OffClickDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 94666);



class OffClickDirective {
    /* tslint:enable */
    constructor(platformId) {
        this.platformId = platformId;
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
            setTimeout(() => { document.addEventListener('click', this.offClickHandler); }, 0);
        }
    }
    ngOnDestroy() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
            document.removeEventListener('click', this.offClickHandler);
        }
    }
}
OffClickDirective.ɵfac = function OffClickDirective_Factory(t) { return new (t || OffClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); };
OffClickDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: OffClickDirective, selectors: [["", "off-click", ""]], inputs: { offClickHandler: ["off-click", "offClickHandler"] } });


/***/ }),

/***/ 84614:
/*!********************************************************!*\
  !*** ./src/app/directive/ngx-tree-select/src/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpandMode": () => (/* reexport safe */ _models_expand_mode__WEBPACK_IMPORTED_MODULE_4__.ExpandMode),
/* harmony export */   "ItemPipe": () => (/* reexport safe */ _pipes_item_pipe__WEBPACK_IMPORTED_MODULE_2__.ItemPipe),
/* harmony export */   "NgxTreeSelectModule": () => (/* reexport safe */ _module__WEBPACK_IMPORTED_MODULE_3__.NgxTreeSelectModule),
/* harmony export */   "TreeSelectComponent": () => (/* reexport safe */ _components_tree_select_component__WEBPACK_IMPORTED_MODULE_1__.TreeSelectComponent),
/* harmony export */   "TreeSelectDefaultOptions": () => (/* reexport safe */ _models_tree_select_default_options__WEBPACK_IMPORTED_MODULE_0__.TreeSelectDefaultOptions)
/* harmony export */ });
/* harmony import */ var _models_tree_select_default_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/tree-select-default-options */ 34170);
/* harmony import */ var _components_tree_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tree-select.component */ 24833);
/* harmony import */ var _pipes_item_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/item.pipe */ 85768);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module */ 75935);
/* harmony import */ var _models_expand_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/expand-mode */ 44477);







/***/ }),

/***/ 44477:
/*!*********************************************************************!*\
  !*** ./src/app/directive/ngx-tree-select/src/models/expand-mode.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpandMode": () => (/* binding */ ExpandMode)
/* harmony export */ });
class ExpandMode {
}
ExpandMode.None = 'None';
ExpandMode.Selection = 'Selection';
ExpandMode.All = 'All';


/***/ }),

/***/ 69503:
/*!***********************************************************************!*\
  !*** ./src/app/directive/ngx-tree-select/src/models/select-option.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectOption": () => (/* binding */ SelectOption)
/* harmony export */ });
/* harmony import */ var _expand_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expand-mode */ 44477);

class SelectOption {
    constructor() {
        this.idProperty = 'id';
        this.textProperty = 'text';
        this.childProperty = '';
        this.allowMultiple = false;
        this.closeOnSelection = true;
        this.items = [];
        this.isOpen = false;
        this.filter = '';
        this.filterCaseSensitive = false;
        this.allowParentSelection = false;
        this.restructureWhenChildSameName = false;
        this.maxVisibleItemCount = 0;
        this.expandMode = _expand_mode__WEBPACK_IMPORTED_MODULE_0__.ExpandMode.None;
    }
    isHierarchy() {
        return this.childProperty != '' && this.childProperty.trim().length > 0;
    }
    get filterExpandMode() {
        if (this.filter !== '') {
            return _expand_mode__WEBPACK_IMPORTED_MODULE_0__.ExpandMode.All;
        }
        else {
            return this.expandMode;
        }
    }
    displayCheckbox() {
        return this.allowMultiple && this.isHierarchy();
    }
    isValid() {
        // Check id property value
        return this.idProperty != '' && this.idProperty.trim().length > 0 &&
            // Check text property value
            this.textProperty != '' && this.textProperty.trim().length > 0 &&
            // Check items value
            this.items && Array.isArray(this.items) && this.items.length > 0;
    }
}


/***/ }),

/***/ 85175:
/*!*************************************************************************!*\
  !*** ./src/app/directive/ngx-tree-select/src/models/selectable-item.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectableItem": () => (/* binding */ SelectableItem)
/* harmony export */ });
class SelectableItem {
    constructor(id, text, data, svc) {
        this.id = id;
        this.text = text;
        this.data = data;
        this.svc = svc;
        this._selected = false;
        this.children = [];
        this.isOpen = false;
        this.matchFilter = true;
        this.isVisible = false;
    }
    get hasChild() {
        return this.children != undefined && this.children.length > 0;
    }
    get checked() {
        if (this.hasChild && this.svc.Configuration.allowMultiple) {
            if (this.children?.every((child) => child.selected)) {
                return true;
            }
            else if (this.children?.every((child) => child.selected === false)) {
                return this._selected;
            }
            return false;
        }
        return this._selected;
    }
    get selected() {
        if (this.hasChild && this.svc.Configuration.allowMultiple) {
            if (this.children?.some((child) => child.selected)) {
                if (this.svc.Configuration.allowParentSelection) {
                    this._selected = false;
                }
                return true;
            }
            else if (this.children?.every((child) => child.selected === false)) {
                if (this.svc.Configuration.allowParentSelection) {
                    return this._selected;
                }
                else {
                    return this._selected = false;
                }
            }
            return false;
        }
        else if (this.hasChild && this._selected === true) {
            this.children?.forEach((itm) => itm.selected = false);
            /*for (const itm of this.children) {
              itm.selected = false;
            }*/
        }
        return this._selected;
    }
    set selected(value) {
        if (this.hasChild && !this.svc.Configuration.allowParentSelection) {
            if (value !== null) {
                this.children?.forEach((child) => child.selected = value);
            }
        }
        else {
            this._selected = value;
        }
    }
}


/***/ }),

/***/ 34170:
/*!*************************************************************************************!*\
  !*** ./src/app/directive/ngx-tree-select/src/models/tree-select-default-options.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeSelectDefaultOptions": () => (/* binding */ TreeSelectDefaultOptions)
/* harmony export */ });
/* harmony import */ var _expand_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expand-mode */ 44477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class TreeSelectDefaultOptions {
    constructor() {
        this.expandMode = _expand_mode__WEBPACK_IMPORTED_MODULE_0__.ExpandMode.None;
    }
}
TreeSelectDefaultOptions.ɵfac = function TreeSelectDefaultOptions_Factory(t) { return new (t || TreeSelectDefaultOptions)(); };
TreeSelectDefaultOptions.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TreeSelectDefaultOptions, factory: TreeSelectDefaultOptions.ɵfac });


/***/ }),

/***/ 75935:
/*!*********************************************************!*\
  !*** ./src/app/directive/ngx-tree-select/src/module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxTreeSelectModule": () => (/* binding */ NgxTreeSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _pipes_item_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/item.pipe */ 85768);
/* harmony import */ var _directives_off_click_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/off-click.directive */ 30339);
/* harmony import */ var _components_tree_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tree-select.component */ 24833);
/* harmony import */ var _models_tree_select_default_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/tree-select-default-options */ 34170);
/* harmony import */ var _components_tree_select_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tree-select-item.component */ 34086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);









class NgxTreeSelectModule {
    static forRoot(options) {
        return {
            ngModule: NgxTreeSelectModule,
            providers: [
                { provide: _models_tree_select_default_options__WEBPACK_IMPORTED_MODULE_3__.TreeSelectDefaultOptions, useValue: options }
            ]
        };
    }
}
NgxTreeSelectModule.ɵfac = function NgxTreeSelectModule_Factory(t) { return new (t || NgxTreeSelectModule)(); };
NgxTreeSelectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: NgxTreeSelectModule });
NgxTreeSelectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NgxTreeSelectModule, { declarations: [_components_tree_select_component__WEBPACK_IMPORTED_MODULE_2__.TreeSelectComponent,
        _components_tree_select_item_component__WEBPACK_IMPORTED_MODULE_4__.TreeSelectItemComponent,
        _directives_off_click_directive__WEBPACK_IMPORTED_MODULE_1__.OffClickDirective,
        _pipes_item_pipe__WEBPACK_IMPORTED_MODULE_0__.ItemPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule], exports: [_components_tree_select_component__WEBPACK_IMPORTED_MODULE_2__.TreeSelectComponent] }); })();


/***/ }),

/***/ 85768:
/*!******************************************************************!*\
  !*** ./src/app/directive/ngx-tree-select/src/pipes/item.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemPipe": () => (/* binding */ ItemPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ItemPipe {
    transform(value) {
        // ES6 array destructuring
        return value.filter((item) => item.matchFilter);
    }
}
ItemPipe.ɵfac = function ItemPipe_Factory(t) { return new (t || ItemPipe)(); };
ItemPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "itemPipe", type: ItemPipe, pure: true });


/***/ }),

/***/ 85438:
/*!**************************************************************************!*\
  !*** ./src/app/directive/ngx-tree-select/src/services/select.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectService": () => (/* binding */ SelectService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _models_selectable_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/selectable-item */ 85175);
/* harmony import */ var _models_select_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/select-option */ 69503);
/* harmony import */ var _models_expand_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/expand-mode */ 44477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





class SelectService {
    constructor() {
        this.modelChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._items = [];
        this._options = new _models_select_option__WEBPACK_IMPORTED_MODULE_1__.SelectOption();
    }
    close() {
        if (this.Configuration.isOpen) {
            this.setConfiguration((opt) => opt.isOpen = false, false);
        }
    }
    open() {
        if (!this.Configuration.isOpen) {
            this.setConfiguration((opt) => opt.isOpen = true, false);
        }
    }
    toggleOpen() {
        this.setConfiguration((opt) => opt.isOpen = !opt.isOpen, false);
    }
    /*
      Call when list of items is set.
    */
    setItems(value) {
        this.setConfiguration((opt) => opt.items = value, true);
        this.setExpand();
    }
    getInternalItems() {
        return this._items;
    }
    /*
      Call when ng-model is set
    */
    setSelection(values) {
        this.setConfiguration((opt) => opt.model = values, true);
        this.setExpand();
    }
    setSelectedItemOrChild(items, destination) {
        for (const itm of items) {
            if (itm.hasChild) {
                if (itm.id === destination) {
                    itm.selected = true;
                }
                this.setSelectedItemOrChild(itm.children, destination);
            }
            else if (itm.id === destination) {
                itm.selected = true;
            }
        }
    }
    getSelection() {
        if (this.Configuration.allowMultiple) {
            return this.getInternalSelection().map((v) => v.data);
        }
        else {
            const result = this.getInternalSelection();
            if (result && result.length > 0) {
                return result[0].data;
            }
        }
        return null;
    }
    getInternalSelection() {
        const selectedItems = this.getSelectedItems(this._items);
        if (selectedItems && selectedItems.length > 0) {
            let i = 0;
            const max = this._options.maxVisibleItemCount ? this._options.maxVisibleItemCount : 0;
            for (const item of selectedItems) {
                item.isVisible =
                    // Max not reached or not max value
                    (i < max || max === 0) &&
                        // all my children are unselected
                        (!item.hasChild || item.children.every((child) => child.selected === false));
                if (item.isVisible && max > 0) {
                    i++;
                }
            }
        }
        return selectedItems;
    }
    toggleItemSelection(item) {
        if (!this.Configuration.allowMultiple) {
            this.setAllUnselected(this._items);
        }
        item.selected = !item.selected;
        this.setConfiguration((opt) => opt.model = this.getSelection(), false);
        if (this.Configuration.closeOnSelection) {
            this.setConfiguration((opt) => opt.isOpen = false, false);
        }
    }
    setAllUnselected(items) {
        for (const itm of items) {
            if (itm.hasChild) {
                itm.selected = false;
                this.setAllUnselected(itm.children);
            }
            else {
                itm.selected = false;
            }
        }
    }
    setConfiguration(delegate, processItems) {
        const modelBck = this._options.model;
        delegate(this._options);
        if (this._options.isValid()) {
            this.reconfigure(processItems);
        }
        // if model changed, raise event
        if (!processItems &&
            ((modelBck && this._options.model !== modelBck) ||
                (!modelBck && this._options.model))) {
            this.modelChanged$.next(this._options.model);
        }
    }
    get Configuration() {
        return this._options;
    }
    setExpand() {
        this.setExpandForList(this._items);
    }
    setExpandForList(items) {
        if (!items) {
            return;
        }
        for (const item of items) {
            this.setExpandForList(item.children);
            item.isOpen = (this._options.filterExpandMode === _models_expand_mode__WEBPACK_IMPORTED_MODULE_2__.ExpandMode.All);
            if (this._options.filterExpandMode === _models_expand_mode__WEBPACK_IMPORTED_MODULE_2__.ExpandMode.Selection) {
                if (item.children) {
                    item.isOpen = item.children.some((itm) => itm.isOpen || itm.selected);
                }
            }
        }
    }
    toSelectableItems(sources) {
        if (sources && Array.isArray(sources)) {
            let i = 1;
            return sources.map((srcItem) => {
                let item;
                if (srcItem[this._options.idProperty] &&
                    srcItem[this._options.idProperty] !== '' &&
                    srcItem[this._options.textProperty]) {
                    item = new _models_selectable_item__WEBPACK_IMPORTED_MODULE_0__.SelectableItem((srcItem[this._options.idProperty] || '').toString(), srcItem[this._options.textProperty], srcItem, this);
                }
                else {
                    item = new _models_selectable_item__WEBPACK_IMPORTED_MODULE_0__.SelectableItem(i.toString(), srcItem, srcItem, this);
                    i++;
                }
                if (this._options.isHierarchy()) {
                    item.children = this.toSelectableItems(srcItem[this._options.childProperty]);
                }
                return item;
            });
        }
        return [];
    }
    getSelectedItems(array) {
        if (this.Configuration.isValid()) {
            let res = [];
            for (const v of array) {
                if (v.hasChild && v.selected === true) {
                    if (v.children.every((child) => child.selected === false)) {
                        res = [...res, v];
                    }
                    else {
                        res = [...res, ...this.getSelectedItems(v.children)];
                    }
                }
                else if (v.hasChild) {
                    res = [...res, ...this.getSelectedItems(v.children)];
                }
                else if (v.selected === true) {
                    res = [...res, v];
                }
            }
            return res;
        }
        else {
            return [];
        }
    }
    reconfigure(processItems) {
        if (this.Configuration.isValid()) {
            this.checkConfig();
            if (processItems) {
                this._items = this.toSelectableItems(this.Configuration.items);
            }
            const model = this.getModel();
            let select = [];
            model.forEach((v) => {
                select = [...select, ...this.getItemForModel(v, this._items)];
            });
            select.forEach((v) => v._selected = true);
        }
    }
    checkConfig() {
        if (this.Configuration.allowMultiple && this.Configuration.closeOnSelection) {
            this.Configuration.closeOnSelection = false;
        }
        else if (!this.Configuration.allowMultiple && !this.Configuration.closeOnSelection) {
            this.Configuration.closeOnSelection = true;
        }
    }
    getModel() {
        if (!this.Configuration.model) {
            return [];
        }
        else if (!Array.isArray(this.Configuration.model)) {
            return [this.Configuration.model];
        }
        else {
            return this.Configuration.model;
        }
    }
    getItemForModel(value, array) {
        let result = [];
        for (const v of array) {
            if (value) {
                if (typeof value !== 'object') {
                    if (v.data === value) {
                        result.push(v);
                    }
                }
                else {
                    if (value[this.Configuration.idProperty]) {
                        if (v.id === (value[this.Configuration.idProperty] || '').toString()) {
                            result.push(v);
                        }
                    }
                    if (this.Configuration.isHierarchy() && v.children && v.children.length > 0) {
                        result = [...result, ...this.getItemForModel(value, v.children)];
                    }
                }
            }
        }
        return result;
    }
}
SelectService.ɵfac = function SelectService_Factory(t) { return new (t || SelectService)(); };
SelectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SelectService, factory: SelectService.ɵfac });


/***/ }),

/***/ 38748:
/*!****************************************************!*\
  !*** ./src/app/directive/number-only.directive.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlynumberDirective": () => (/* binding */ OnlynumberDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


class OnlynumberDirective {
    constructor(_el) {
        this._el = _el;
    }
    onInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }
}
OnlynumberDirective.ɵfac = function OnlynumberDirective_Factory(t) { return new (t || OnlynumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
OnlynumberDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OnlynumberDirective, selectors: [["", "numbersOnly", ""]], hostBindings: function OnlynumberDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OnlynumberDirective_input_HostBindingHandler($event) { return ctx.onInputChange($event); });
    } } });


/***/ }),

/***/ 14191:
/*!*****************************************************************!*\
  !*** ./src/app/layout/rights-footer/rights-footer.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightsFooterComponent": () => (/* binding */ RightsFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () { return ["/home/privacy"]; };
const _c1 = function () { return ["/home/terms-condition"]; };
class RightsFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RightsFooterComponent.ɵfac = function RightsFooterComponent_Factory(t) { return new (t || RightsFooterComponent)(); };
RightsFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RightsFooterComponent, selectors: [["app-rights-footer"]], decls: 18, vars: 4, consts: [["id", "main-wrapper"], [1, "footer-section", "section", "bg-gray"], [1, "footer-bottom", "section"], [1, "container"], [1, "row", "no-gutters"], [1, "col-12", "ft-border", "pt-15", "pb-15"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-sm-12"], [1, "copyright2", "text-left"], [1, "copyright2", "text-right", "text-dark"], [1, "text-dark"], ["target", "_blank", 1, "text-dark", "pl-3", 3, "routerLink"]], template: function RightsFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "footer", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A9 2022 ExpoBazaar USA Inc. Expo Digital India and its Affiliates. All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "div", 9)(13, "p", 10)(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Terms of use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: [".footer-section[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpZ2h0cy1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUFDSiIsImZpbGUiOiJyaWdodHMtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 94615:
/*!******************************************************************!*\
  !*** ./src/app/pages/account-header/account-header.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountHeaderComponent": () => (/* binding */ AccountHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/global.service */ 59472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/common.service */ 35842);
/* harmony import */ var src_app_service_dsa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/dsa.service */ 80502);
/* harmony import */ var src_app_service_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/setting.service */ 65169);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);








function AccountHeaderComponent_a_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "strong", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.gs.loginData.firstname, " ");
} }
function AccountHeaderComponent_ng_container_30_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r6._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", item_r6.firstname, " ", item_r6.lastname, " ");
} }
function AccountHeaderComponent_ng_container_30_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountHeaderComponent_ng_container_30_ng_container_6_ng_container_1_Template, 3, 3, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r6.buyer_status == "BUY_ACNTACTIVE");
} }
function AccountHeaderComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AccountHeaderComponent_ng_container_30_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.gs.globalBuyer = $event); })("change", function AccountHeaderComponent_ng_container_30_Template_select_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.common.changeBuyer(ctx_r11.gs.globalBuyer)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Select Buyer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AccountHeaderComponent_ng_container_30_ng_container_6_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.gs.globalBuyer);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.gs.globalBuyerList);
} }
function AccountHeaderComponent_li_31_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const xmenu_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/", xmenu_r15.route, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("queryParamsHandling", ctx_r14.gs.userTypeDSa ? "preserve" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", xmenu_r15.name, " ");
} }
function AccountHeaderComponent_li_31_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountHeaderComponent_li_31_ul_5_li_1_Template, 3, 3, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menu_r12.children);
} }
function AccountHeaderComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AccountHeaderComponent_li_31_ul_5_Template, 2, 1, "ul", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", menu_r12._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("for", menu_r12._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", menu_r12.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menu_r12.children && menu_r12.children.length);
} }
function AccountHeaderComponent_li_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 73)(1, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.gs.loginData.firstname, " ");
} }
function AccountHeaderComponent_ng_container_78_li_1_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 76)(1, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountHeaderComponent_ng_container_78_li_1_ul_5_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.closeOffcanvas()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const xmenu_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/", xmenu_r21.route, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("queryParamsHandling", ctx_r20.gs.userTypeDSa ? "preserve" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", xmenu_r21.name, " ");
} }
function AccountHeaderComponent_ng_container_78_li_1_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountHeaderComponent_ng_container_78_li_1_ul_5_li_1_Template, 3, 3, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menu_r18.children);
} }
function AccountHeaderComponent_ng_container_78_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 76)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AccountHeaderComponent_ng_container_78_li_1_ul_5_Template, 2, 1, "ul", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menu_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menu_r18.children && menu_r18.children.length);
} }
function AccountHeaderComponent_ng_container_78_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountHeaderComponent_ng_container_78_li_1_Template, 6, 2, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li", 76)(3, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "li", 76)(6, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountHeaderComponent_ng_container_78_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.logOut()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Sign Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.gs.menuPermission);
} }
const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/my-accounts/my-notification"]; };
class AccountHeaderComponent {
    constructor(gs, router, _route, common, dsaService, settings) {
        this.gs = gs;
        this.router = router;
        this._route = _route;
        this.common = common;
        this.dsaService = dsaService;
        this.settings = settings;
        this.searchText = '';
        this._route.queryParamMap.subscribe((params) => {
            this.gs.globalBuyer = params['params']['bcid'] || '';
            if (this.gs.loginData.userType == 'DSARUSER') {
                this.gs.userTypeDSa = this.gs.loginData.userType;
            }
        });
    }
    ngOnInit() {
        this.gs.loadScript();
        /* Offcanvas Menu Start */
        var offCanvasNav = $('.offcanvas-navigation'), offCanvasNavSubMenu = offCanvasNav.find('.submenu2');
        offCanvasNavSubMenu.slideUp();
        /*Category Sub Menu Toggle*/
        offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
            var $this = $(e.target);
            if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                }
                else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
        });
        /* Offcanvas Menu End */
        if (this.gs.loginData && this.gs.loginData['_id']) {
            this.settings.getMenuPermission({ id: this.gs.loginData._id }).subscribe((res) => {
                this.gs.menuPermission = res['data'];
            });
            if (this.gs.globalBuyer && this.gs.globalBuyer != null) {
                this.common.getCartCount(this.gs.globalBuyer);
                this.common.get_notify_count(this.gs.globalBuyer);
            }
            else {
                this.common.getCartCount(this.gs.loginData['_id']);
                this.common.get_notify_count(this.gs.loginData['_id']);
            }
            if (this.gs.loginData['userType'] == 'DSARUSER') {
                this.getGlobalBuyers();
            }
        }
    }
    getGlobalBuyers() {
        this.dsaService.getManageBuyer({ id: this.gs.loginData['_id'] }).subscribe((resp) => {
            this.gs.globalBuyerList = resp.data;
        }, (error) => {
            console.log(error);
        });
    }
    logOut() {
        localStorage.clear();
        this.gs.loginData = '';
        this.gs.menuPermission = [];
        this.router.navigateByUrl('/');
        $('#offcanvas-mobile-menu').removeClass('active').addClass('inactive');
    }
    closeOffcanvas() {
        $('#offcanvas-mobile-menu').removeClass('active').addClass('inactive');
    }
}
AccountHeaderComponent.ɵfac = function AccountHeaderComponent_Factory(t) { return new (t || AccountHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_dsa_service__WEBPACK_IMPORTED_MODULE_2__.DsaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_setting_service__WEBPACK_IMPORTED_MODULE_3__.SettingService)); };
AccountHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AccountHeaderComponent, selectors: [["app-account-header"]], decls: 79, vars: 16, consts: [[1, "header", "header-transparent", "header-sticky", "d-lg-block", "d-none"], [1, "header-deafult-area"], [1, "container"], [1, "row", "align-items-center", "padd-top-15", "padd-bottom-25"], [1, "col-md-8", "col-12"], [1, "logo-area"], [3, "routerLink", "queryParamsHandling"], ["src", "./assets/images/Logo.svg", "alt", ""], [1, "col-md-4", "col-12"], [1, "header-search-cart-area"], [1, "currency-menu"], ["href", "#"], ["src", "./assets/images/usflag.png"], [1, "ml-1", "font"], [1, "fa", "fa-bell-o", "m-top-10"], [1, "badge", "badge-pill", "badge-success"], [1, "mini-cart"], ["routerLink", "/home/cart", 3, "queryParamsHandling"], [1, "flaticon-shopping-cart"], [1, "badge", "badge-pill", "badge-success", "badge-noti"], ["href", "#", 4, "ngIf"], ["role", "navigation", 1, "nav", "currency-dropdown"], [1, "nav__list"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "group-2", "type", "checkbox", "hidden", ""], ["for", "group-2"], ["href", "mailto:support@expobazaar.com"], ["id", "group-3", "type", "checkbox", "hidden", ""], ["for", "group-3"], [3, "click"], [1, "header-mobile", "d-block", "d-lg-none"], [1, "header-bottom", "menu-right"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "header-mobile-navigation", "d-block", "d-lg-none"], [1, "row", "align-items-center"], [1, "col-6", "col-md-6", 2, "padding-left", "0px"], [1, "header-logo"], ["routerLink", "/home", 2, "display", "block"], ["src", "assets/images/Logo.svg", "alt", "", 1, "img-fluid", 2, "height", "40px"], [1, "col-6", "col-md-6", "p-0"], [1, "mobile-navigation", "text-right"], [1, "header-icon-wrapper"], [1, "icon-list", "justify-content-end"], ["style", "margin: 0;", 4, "ngIf"], [2, "margin-left", "3px"], [1, "header-cart-icon", "header-cart-icon-mobile"], [1, "badge", "badge-pill", "badge-success", "badge-noti", "badge-mobile"], [1, "menu-item-has-children", 2, "margin-left", "19px"], ["href", "javascript:void(0)", "id", "mobile-menu-trigger", 1, "mobile-menu-icon"], [1, "fa", "fa-bars"], [1, "col-12", "d-flex", "d-lg-none"], [1, "mobile-menu"], ["id", "offcanvas-mobile-menu", 1, "offcanvas-mobile-menu", "d-block", "d-lg-none"], ["href", "javascript:void(0)", "id", "offcanvas-menu-close-trigger", 1, "offcanvas-menu-close"], [1, "fa", "fa-times"], [1, "offcanvas-wrapper"], [1, "offcanvas-inner-content", "pt-2"], [1, "offcanvas-settings"], [1, "offcanvas-navigation"], [1, "flaticon-user"], [1, "text-capitalize"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "", "disabled", ""], ["value", ""], [3, "value"], ["type", "checkbox", "hidden", "", 3, "id"], [1, "font-weight-bold", "padd-left-9", 3, "for"], [1, "fa", "fa-angle-right", "font-angle"], ["class", "group-list", 4, "ngIf"], [1, "group-list"], [2, "margin", "0"], ["routerLink", "/my-accounts/my-accounts-details", 2, "font-size", "17px"], ["class", "menu-item-has-children", 4, "ngFor", "ngForOf"], [1, "menu-item-has-children"], [1, "menu-expand"], ["class", "submenu2", 4, "ngIf"], [1, "submenu2"], [3, "routerLink", "queryParamsHandling", "click"]], template: function AccountHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "ul")(11, "li", 10)(12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "United States");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li", 10)(17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 16)(22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, AccountHeaderComponent_a_27_Template, 5, 1, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "nav", 21)(29, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, AccountHeaderComponent_ng_container_30_Template, 7, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, AccountHeaderComponent_li_31_Template, 6, 4, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 26)(35, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 29)(40, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountHeaderComponent_Template_a_click_40_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "header", 31)(43, "div", 32)(44, "div", 33)(45, "div", 34)(46, "div", 35)(47, "div", 36)(48, "div", 37)(49, "div", 38)(50, "div", 39)(51, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 42)(54, "div", 43)(55, "div", 44)(56, "ul", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, AccountHeaderComponent_li_57_Template, 3, 1, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "li", 47)(59, "div", 48)(60, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "li", 50)(65, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 34)(68, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 55)(71, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 58)(74, "div", 59)(75, "div", 60)(76, "nav", 61)(77, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, AccountHeaderComponent_ng_container_78_Template, 8, 1, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c0))("queryParamsHandling", ctx.gs.userTypeDSa ? "preserve" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c1))("queryParamsHandling", ctx.gs.userTypeDSa ? "preserve" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.gs.notificationCount || "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("queryParamsHandling", ctx.gs.userTypeDSa ? "preserve" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.gs.cartCount || "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.gs.loginData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.gs.loginData && ctx.gs.loginData.userType == "DSARUSER");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.gs.menuPermission);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.gs.loginData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("queryParamsHandling", ctx.gs.userTypeDSa ? "preserve" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.gs.cartCount || "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.gs.loginData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel], styles: [".container-fluid[_ngcontent-%COMP%] {\n  width: 94%;\n}\n\n.padd-bottom-25[_ngcontent-%COMP%] {\n  padding-bottom: 25px;\n}\n\n.badge-noti[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15px;\n  right: -3px;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.font-angle[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.m-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.padd-left-9[_ngcontent-%COMP%] {\n  padding-left: 9px;\n}\n\n.header-cart-icon-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 18px;\n  position: absolute;\n  top: unset !important;\n  left: unset !important;\n  width: 18px;\n  height: 18px;\n  color: #fff;\n  border-radius: 100%;\n}\n\n.badge-mobile[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUNBO0VBQ0csb0JBQUE7QUFFSDs7QUFBQTtFQUNHLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHSDs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFGQTtFQUNHLGVBQUE7QUFLSDs7QUFIQTtFQUNHLGdCQUFBO0FBTUg7O0FBSkE7RUFDRyxpQkFBQTtBQU9IOztBQUxBO0VBQ0csZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFRSDs7QUFOQTtFQUNBLHVCQUFBO0FBU0EiLCJmaWxlIjoiYWNjb3VudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgICB3aWR0aDogOTQlO1xuICAgfVxuLnBhZGQtYm90dG9tLTI1e1xuICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG4uYmFkZ2Utbm90aXtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIGJvdHRvbTogMTVweDsgXG4gICByaWdodDogLTNweDtcbn1cbi5mb250e1xuICBmb250LXNpemU6IDEycHg7IFxufVxuLmZvbnQtYW5nbGV7XG4gICBmb250LXNpemU6IDIwcHg7XG59XG4ubS10b3AtMTB7XG4gICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnBhZGQtbGVmdC05e1xuICAgcGFkZGluZy1sZWZ0OiA5cHg7XG59XG4uaGVhZGVyLWNhcnQtaWNvbi1tb2JpbGUgYSBzcGFuIHtcbiAgIGZvbnQtc2l6ZTogMTJweDtcbiAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgdG9wOiB1bnNldCAhaW1wb3J0YW50O1xuICAgbGVmdDogdW5zZXQgIWltcG9ydGFudDtcbiAgIHdpZHRoOiAxOHB4O1xuICAgaGVpZ2h0OiAxOHB4O1xuICAgY29sb3I6ICNmZmY7XG4gICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLmJhZGdlLW1vYmlsZXtcbnBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 20479:
/*!************************************************************!*\
  !*** ./src/app/pages/maintenance/maintenance.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceComponent": () => (/* binding */ MaintenanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/global.service */ 59472);


class MaintenanceComponent {
    constructor(gs) {
        this.gs = gs;
        this.gs.updatePageName('Under Maintenance');
    }
    ngOnInit() {
    }
}
MaintenanceComponent.ɵfac = function MaintenanceComponent_Factory(t) { return new (t || MaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService)); };
MaintenanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MaintenanceComponent, selectors: [["app-maintenance"]], decls: 22, vars: 1, consts: [["id", "main-wrapper"], [1, "404-error-section", "section", "pt-30", "pt-lg-70", "pt-md-60", "pt-sm-50", "pt-xs-45", "pb-30", "pb-lg-80", "pb-md-70", "pb-sm-60", "pb-xs-50"], [1, "container"], [1, "row"], [1, "col-md-12", "col-12"], [1, "logo-area", "text-center"], ["src", "./assets/images/Logo.svg", "alt", ""], [1, "col-md-12"], [1, "error-wrapper", "text-center"], [1, "error-text"], ["src", "./assets/images/maintenance.svg", "alt", "", 1, "w-75"], ["href", "mailto:support@expobazaar.com", 1, "text-forgot"]], template: function MaintenanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "We will be back soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "We are performing some maintenance to make this site even more awesome! In case you need to reach out to us, please send an email at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "support@expobazaar.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "small")(19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Note :- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.gs.is_buyer_description, "");
    } }, styles: [".policy-banner-section[_ngcontent-%COMP%] {\n  background-image: url('policy-head.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 66vh;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-position: top;\n}\n\n.policy-banner-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 54px;\n  line-height: 72px;\n  font-family: \"Playfair Display\", serif;\n  color: #ffffff;\n  text-align: left;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoibWFpbnRlbmFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9saWN5LWJhbm5lci1zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcG9saWN5LWhlYWQuanBnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogNjZ2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG59XG5cbi5wb2xpY3ktYmFubmVyLXNlY3Rpb24gaDEge1xuICAgIGZvbnQtc2l6ZTogNTRweDtcbiAgICBsaW5lLWhlaWdodDogNzJweDtcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbn0iXX0= */"] });


/***/ }),

/***/ 3654:
/*!******************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyComponent": () => (/* binding */ PrivacyPolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/global.service */ 59472);
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/common.service */ 35842);



class PrivacyPolicyComponent {
    constructor(gs, common) {
        this.gs = gs;
        this.common = common;
        this.gs.updatePageName('Privacy Policy | ExpoBazaar');
        this.common.updateSeoTags('Privacy Policy');
    }
    ngOnInit() {
    }
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
PrivacyPolicyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 132, vars: 0, consts: [["id", "main-wrapper"], [1, "policy-banner-section", "section"], [1, "container"], [1, "row"], [1, "col-md-12", "col-sm-12", "col-xs-12"], [1, "text-white", "heading-title"], [1, "faq-section", "section", "pt-90", "pt-lg-70", "pt-md-60", "pt-sm-50", "pt-xs-40", "pb-90", "pb-lg-70", "pb-md-60", "pb-sm-50", "pb-xs-40"], [1, "col-md-12"], [1, "policy-list"], ["href", "mailto:privacy@ExpoBazaar.com"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div", 2)(9, "div", 3)(10, "div", 7)(11, "p")(12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Last Updated: March 1, 2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " ExpoBazaar USA understands you care about how your personal information is used and shared, and we take your privacy seriously. Please read the following to learn more about our privacy practices. By using or accessing the Services in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and that we will collect, use, and share your information in the following ways. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Your use of ExpoBazaar\u2019s Services is subject to the certain Terms of Use and this Privacy Policy. Any terms we use in this Policy without defining them have the definitions given to them in the Terms of Use. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p")(19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " What does this Privacy Policy cover? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " This Privacy Policy applies to ExpoBazaar.com, and all other websites, applications, widgets, products, services, and other offerings (collectively, the \u201CServices\u201D) owned and operated by ExpoBazaar USA, Inc. and our affiliates and subsidiaries (collectively, \u201CExpoBazaar\u201D) that link to this Privacy Policy. This Policy covers our treatment of the personal information we gather through use of our Services.\u00A0 ExpoBazaar USA Inc. 123 Oak Lawn Ave, Dallas, TX 75207 is the data controller for the personal information collected in connection with use of all ExpoBazaar\u2019s Services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p")(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " What Information does ExpoBazaar Collect? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " We collect information about your use of our Services. We also gather various types of personal information, as explained in more detail below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p")(29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " How do we Protect Your Information? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " We protect your information by using Secure Sockets Layer (SSL) software which encrypts the information you submit via the website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p")(34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Information You Provide to Us: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " We receive and store any information you knowingly provide to us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p")(39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Communication with Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " We collect personal information from you when you communicate with us, for example when you request information about our services, contact our Support team, apply for a job, or register for our newsletter. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p")(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " How Does ExpoBazaar Use the Personal Information It Collects? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " We use the information we collect about you for various business purposes as described below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "ul", 8)(49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " To provide you with our Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Enter into a contract with you ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Allow you to set up a user account and profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " Fulfil your requests for products and services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " Allow you to create and share content with others ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Communicate with you about your account and updates to our Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Determine your order or account limits ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Process applications, transactions, and payments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " Allow you to register for events ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " Facilitate communications between you and other users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " For our legitimate business interests ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " Analyze how you use the Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " Understand user interest and engagement on the Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " Engage in marketing or sales outreach ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " Provide customized content, offers, or Services, including marketing content via email, postal mail, social media, SMS, or other channels, subject to applicable laws ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Research and develop Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " Improve and streamline our Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " Verify your identity and prevent fraud ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " Detect security incidents; protect against malicious, deceptive, fraudulent, or illegal activity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Ensure quality control ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " Debug to identify and repair errors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " Enforce our Terms and policies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Audit or other compliance activities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " To comply with our legal obligations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, " We retain and use your information in connection with potential legal claims, and for compliance, regulatory and auditing purposes. For example, we retain information where we are required by law, or if we are compelled to do so by a court order or regulatory body. Also, when you exercise any applicable legal rights, you have to access, amend or delete your personal information, we may request identification and verification documents from you for the purpose of confirming your identity. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, " With your consent ExpoBazaar may collect and use personal information based with your consent. You can revoke your consent at any time (either through our Services directly or by contacting us via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " privacy@ExpoBazaar.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, " ), though note that you might not be able to use any service or feature that requires collection or use of that personal information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " In exceptional cases we may further process your personal information to protect your vital interests or as further required for the public good. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "p")(107, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, " Will ExpoBazaar Share Any of the Personal Information It Receives? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " We do not rent nor sell your personal information in personally identifiable form to anyone. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "p")(112, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, " What Are My Privacy Rights and Choices? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, " You can always opt not to disclose information to us, but keep in mind some information may be needed to register with us, use our Services or to take advantage of some of our features. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "p")(117, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, " Opting Out of Communications: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, " If you no longer wish to receive electronic communications from us, click the unsubscribe link at the bottom of the email or follow opt-out instructions provided in other communication channels. Note you may still receive transactional emails from us. We process requests to be placed on do-not-mail and do-not-call lists as required by applicable law. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "p")(122, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, " Will ExpoBazaar Change this Privacy Policy? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, " We\u2019re constantly trying to improve our Services, so we may need to change this Privacy Policy from time to time as well, but we will alert you to material changes by placing a notice on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, " https://www.ExpoBazaar.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, " website, by sending you an email, and/or by some other means. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "br")(130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, " By using the Services after any changes to the Privacy Policy have been posted, you agree to the new Privacy Policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } }, styles: [".policy-banner-section[_ngcontent-%COMP%] {\n  background-image: url('policy-head.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 66vh;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-position: top;\n}\n\n.policy-banner-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 54px;\n  line-height: 72px;\n  font-family: \"Playfair Display\", serif;\n  color: #ffffff;\n  text-align: left;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n\n.policy-list[_ngcontent-%COMP%] {\n  list-style: circle;\n  padding-left: 45px;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDRyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSCIsImZpbGUiOiJwcml2YWN5LXBvbGljeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2xpY3ktYmFubmVyLXNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wb2xpY3ktaGVhZC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA2NnZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbn1cblxuLnBvbGljeS1iYW5uZXItc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiA1NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA3MnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xufVxuLnBvbGljeS1saXN0e1xuICAgbGlzdC1zdHlsZTogY2lyY2xlO1xuICAgcGFkZGluZy1sZWZ0OiA0NXB4OyBcbiAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59Il19 */"] });


/***/ }),

/***/ 70044:
/*!********************************************************************!*\
  !*** ./src/app/pages/terms-condition/terms-condition.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionComponent": () => (/* binding */ TermsConditionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/global.service */ 59472);
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/common.service */ 35842);



class TermsConditionComponent {
    constructor(gs, common) {
        this.gs = gs;
        this.common = common;
        this.gs.updatePageName('Terms Of Use | ExpoBazaar');
        this.common.updateSeoTags('Terms Of Use');
    }
    ngOnInit() {
    }
}
TermsConditionComponent.ɵfac = function TermsConditionComponent_Factory(t) { return new (t || TermsConditionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
TermsConditionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TermsConditionComponent, selectors: [["app-terms-condition"]], decls: 117, vars: 0, consts: [["id", "main-wrapper"], [1, "policy-banner-section", "section"], [1, "container"], [1, "row"], [1, "col-md-12", "col-sm-12", "col-xs-12"], [1, "text-white", "heading-title"], [1, "faq-section", "section", "pt-90", "pt-lg-70", "pt-md-60", "pt-sm-50", "pt-xs-40", "pb-90", "pb-lg-70", "pb-md-60", "pb-sm-50", "pb-xs-40"], [1, "col-md-12"], ["href", "mailto:support@expobazaar.com", 1, "text-forgot"], ["href", "http://www.expobazaar.com", 1, "text-forgot"]], template: function TermsConditionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Terms of use");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div", 2)(9, "div", 3)(10, "div", 7)(11, "p")(12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Expo Bazaar USA, Inc. (\"ExpoBazaar\")");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " and its supplier, partners and/or affiliates provide their services to you subject to the following general terms and conditions and our Privacy Policy. If you visit and/or shop at ExpoBazaar.com, or any other website managed by ExpoBazaar (collectively, this \"Site\"), you accept these terms and conditions. Please read them carefully.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br")(16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Please review our Privacy Policy, which also governs this Site, to understand our privacy practices.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br")(22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Electronic Communications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " When you visit this Site or send e-mails to us, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you by e-mail or by posting notices on this Site. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "br")(28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Site Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " All content included on this Site, such as information, data, text, graphics, logos, photographs, images, audio clips, and other material (collectively \"Content\") is the property of ExpoBazaar, its supplier and/or affiliates and is protected under U.S. and International copyright laws. The compilation of all Content presented on this Site is the exclusive property of ExpoBazaar and protected by U.S. and international copyright laws. You may not copy, reproduce, modify, remove, delete, augment, add to, publish, transmit, participate in the transfer or sale of, create derivative works from, in any way exploit, or otherwise use the Content, without the express prior written consent of ExpoBazaar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br")(34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Trademarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " ExpoBazaar, ExpoBazaar.com, ExpoBazaar logos and other marks included on this Site (\"ExpoBazaar Trademarks\") are trademarks and/or service marks of ExpoBazaar or ExpoBazaar Affiliates. ExpoBazaar trademarks may not be used in connection with any product or service that is not ExpoBazaar's, in any manner that is likely to cause confusion, or in any manner that disparages or discredits ExpoBazaar. All trademarks, service marks, and logos that are not owned by ExpoBazaar or ExpoBazaar Affiliates and appear on this Site are the property of their respective owners.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "br")(40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Online Orders/Product Descriptions and Prices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " ExpoBazaar and its affiliates are dedicated towards providing accurate information to our users, however, we do not warrant that product availability, shipping times, descriptions, prices or other Content included on this Site is accurate, complete, reliable, current or error-free. If a product offered on this Site is not as described, please contact us at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "support@expobazaar.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "br")(49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " All prices and costs listed on this Site are subject to change without notice. Except where otherwise noted, the Original Price listed for a product on this Site represents the wholesale price provided by the supplier or manufacturer or estimated in accordance with standard industry practice. The Original Price is a comparative price estimate and may or may not represent the prevailing wholesale price in every market on a particular day.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "br")(52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Shipping and handling charges for your order will be displayed on this Site during checkout. By placing an online order, you agree to accept these charges and pay the amount invoiced for the items purchased. \u00A0Do not place an order if you do not agree to the shipping and handling terms. \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "br")(55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " ExpoBazaar is not responsible for delayed, misplaced, lost and/or damaged goods by freight carriers once said goods are in transit. Unless otherwise agreed in a shipment contract with ExpoBazaar, risk of loss and title for items purchased via this Site pass to you upon delivery to the carrier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "br")(58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " All orders are subject to ExpoBazaar acceptance. Please note that there is no binding order until you receive an order confirmation by e-mail from ExpoBazaar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "br")(61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " By using this Site, you agree that you are responsible for maintaining the confidentiality of your account and password and restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account and/or password. You agree to immediately notify us of any unauthorized use of your account or password or any other breach of security. ExpoBazaar reserves the right to terminate accounts, refuse to provide services, remove or edit Content, or cancel orders in its sole discretion.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "br")(67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Links to Third Party Sites");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " We may make available a link from this Site to an ExpoBazaar Affiliate's or other third party's web site. These links permit you to leave this Site. The linked sites are not under our control and we are not responsible for the contents of any linked site or any link contained in a linked site, or any changes or updates to such sites. You should carefully review the privacy statements and other terms and conditions of use of all linked sites you visit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "br")(73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Disclaimer of Warranties and Limitation of Liability");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " THIS SITE IS PROVIDED BY EXPOBAZAAR ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS. EXPOBAZAAR MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THIS SITE OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON THIS SITE. YOU EXPRESSLY AGREE THAT YOUR USE OF THIS SITE IS AT YOUR SOLE RISK.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "br")(79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, EXPOBAZAAR DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. EXPOBAZAAR DOES NOT WARRANT THAT THIS SITE, ITS SERVERS, OR E-MAIL SENT FROM EXPOBAZAAR ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. EXPOBAZAAR WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THIS SITE OR FROM ANY INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THIS SITE, INCLUDING, BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "br")(82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MIGHT HAVE ADDITIONAL RIGHTS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "br")(85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Applicable Law");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " By visiting ExpoBazaar.com, you agree that the laws of the State of Texas, without regard to principles of conflict of laws, will govern these Conditions of Use and any dispute of any kind that might arise between you and ExpoBazaar or its supplier or affiliates.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "br")(91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Disputes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, " All disputes in which ExpoBazaar is a party which relate in any way to your visit to ExpoBazaar.com and/or products that you purchase through ExpoBazaar.com shall be submitted to confidential arbitration in Dallas, Texas. Arbitration under this paragraph shall be conducted under the rules then prevailing of the American Arbitration Association. The arbitrator's award shall be binding and may be entered as a judgment in any court of competent jurisdiction. To the fullest extent permitted by applicable law, no arbitration under this paragraph shall be joined to an arbitration involving any other party subject to this paragraph, whether through class arbitration proceedings or otherwise.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "br")(97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Site Policies, Modification, and Severability");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " Please review our other policies, such as our Privacy Policy, posted on this Site. These policies also govern your visit to ExpoBazaar.com. We reserve the right to modify or amend these policies, this Site, and these Terms and Conditions of Use at any time. If we ever change our policies in a material fashion, we will post any changes on this Site and/or send you an email so that you are always aware of any such material change. Unless we state otherwise, the changes to our policies will affect only your use of the Site and our services after the effective date of the change. If you continue to use the Site and/or our services after notification of a change, such use shall constitute your acceptance of the modified terms. If any of these terms and conditions is deemed invalid, void, or for any reason unenforceable, that condition shall be deemed severable and shall not affect the validity and enforceability of any remaining term or condition.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "br")(103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Our Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, " Expo Bazaar USA, Inc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, " 100 Oak Lawn Avenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, " Dallas, TX 75207");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, " Phone: 855.726.3368");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "www.expobazaar.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } }, styles: [".policy-banner-section[_ngcontent-%COMP%] {\n  background-image: url('policy-head.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 66vh;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-position: top;\n}\n\n.policy-banner-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 54px;\n  line-height: 72px;\n  font-family: \"Playfair Display\", serif;\n  color: #ffffff;\n  text-align: left;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWNvbmRpdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNKIiwiZmlsZSI6InRlcm1zLWNvbmRpdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2xpY3ktYmFubmVyLXNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wb2xpY3ktaGVhZC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA2NnZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbn1cblxuLnBvbGljeS1iYW5uZXItc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiA1NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA3MnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 90892:
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer */ 13195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ 99039);








const OAUTH_CLIENT = 'express-client';
const OAUTH_SECRET = 'express-secret';
const HTTP_OPTIONS = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(OAUTH_CLIENT + ':' + OAUTH_SECRET).toString('base64')
    })
};
// btoa is not supported by the server so disabling this and installing buffer package, importing the buffer package and modying below code. Result is above this comment. 
// const HTTP_OPTIONS = {
//     headers: new HttpHeaders({
//         'Content-Type': 'application/x-www-form-urlencoded',
//         Authorization: 'Basic ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET)
//     })
// };
class AuthService {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.redirectUrl = '';
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api1;
        this.assetsURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.assetsURL;
    }
    // OAuth20
    static handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)('Something bad happened; please try again later.');
    }
    static log(message) {
        console.log(message);
    }
    // *** //
    refreshToken(refreshData) {
        this.tokenService.removeToken();
        this.tokenService.removeRefreshToken();
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams()
            .set('refresh_token', refreshData.refresh_token)
            .set('grant_type', 'refresh_token');
        return this.http.post(this.baseUrl + 'token', body, HTTP_OPTIONS)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(res => {
            this.tokenService.saveToken(res.access_token);
            this.tokenService.saveRefreshToken(res.refresh_token);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(AuthService.handleError));
    }
    LoginBuyer(data) {
        this.tokenService.removeToken();
        this.tokenService.removeRefreshToken();
        return this.http.post(this.baseUrl + 'signin', data, HTTP_OPTIONS)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(res => {
            // console.log('res',res);
            this.tokenService.saveToken(res.access_token);
            this.tokenService.saveRefreshToken(res.refresh_token);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(AuthService.handleError));
        // return this.http.post(this.baseUrl + "signin", data);
    }
    createBuyer(data) {
        return this.http.post(this.baseUrl + 'register', data);
    }
    updateRegBuyer(data) {
        return this.http.post(this.baseUrl + 'update-register-buyer', data);
    }
    updateBuyer(data) {
        return this.http.post(this.baseUrl + 'create_bussiness', data);
    }
    getBuyerById(data) {
        return this.http.post(this.baseUrl + 'get-Buyer-by-id', data);
    }
    otpVerficationBuyer(data) {
        return this.http.post(this.baseUrl + 'verify-reg-otp', data);
    }
    resendOTP(data) {
        return this.http.post(this.baseUrl + 'resendOTP', data);
    }
    getAllParentCategory() {
        return this.http.get(this.baseUrl + 'get-parent-category');
    }
    getAllCategory() {
        return this.http.get(this.baseUrl + 'get-all-category');
        // return this.http.get('assets/category.json');
    }
    forgetPasswordOTP(data) {
        return this.http.post(this.baseUrl + "forgot-pass-otp", data);
    }
    resetPassword(data) {
        return this.http.post(this.baseUrl + "reset-password", data);
    }
    getIndividualByID(id) {
        return this.http.post(this.baseUrl + "get-individual-by-id", id);
    }
    // Images Preview return data
    lightboxImage(product, key) {
        let imgArray = [];
        if (product && product[key] && product[key].length) {
            for (let i in product[key]) {
                if (product[key][i]['url']) {
                    product[key][i]['src'] = this.assetsURL + product[key][i]['url'];
                    imgArray.push(product[key][i]);
                }
                else {
                    let src = '';
                    src = this.assetsURL + 'product_images' + '/' + product[key][i];
                    imgArray.push({ src: src });
                }
            }
        }
        return imgArray;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_2__.TokenService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 35842:
/*!*******************************************!*\
  !*** ./src/app/service/common.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.service */ 59472);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.service */ 47320);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);






class CommonService {
    // ***** //
    constructor(router, gs, notification, meta, http) {
        this.router = router;
        this.gs = gs;
        this.notification = notification;
        this.meta = meta;
        this.http = http;
        this.usaState = [];
        // Image cursor
        this.imagesSlider = {
            // speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: 'linear',
            // fade: false,
            autoplay: true,
            draggable: true,
            prevArrow: '.client-feedback .prev-arrow',
            nextArrow: '.client-feedback .next-arrow',
            asNavFor: ".thumbs",
            infinite: true
        };
        this.thumbnailsSlider = {
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 2,
            cssEase: 'linear',
            autoplay: false,
            centerMode: false,
            draggable: true,
            focusOnSelect: true,
            asNavFor: ".feedback",
            infinite: true,
            variableWidth: true,
        };
        //************* */
        // Image cursor 2
        this.imagesSliderModal = {
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: 'linear',
            fade: true,
            autoplay: true,
            draggable: true,
            prevArrow: '.client-feedback .prev-arrow',
            nextArrow: '.client-feedback .next-arrow',
            asNavFor: ".thumbs-popup",
            infinite: true
        };
        this.thumbnailsSliderModal = {
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 2,
            cssEase: 'linear',
            autoplay: false,
            centerMode: false,
            draggable: true,
            focusOnSelect: true,
            asNavFor: ".feedback-popup",
            infinite: true,
            variableWidth: true,
        };
        //************* */
        // Password email pattern
        this.passRequirement = {
            passwordMinLowerCase: 1,
            passwordMinNumber: 1,
            passwordMinSymbol: 1,
            passwordMinCharacters: 8
        };
        this.passwordPattern = [
            `(?=([^A-Za-z]*[A-Za-z])\{${this.passRequirement.passwordMinLowerCase},\})`,
            `(?=([^0-9]*[0-9])\{${this.passRequirement.passwordMinNumber},\})`,
            `(?=(\.\*[\$\@\$\!\%\*\#\^\(\)\&])\{${this.passRequirement.passwordMinSymbol},\})`,
            `[A-Za-z\\d\$\@\$\!\%\*\#\^\(\)\&]{${this.passRequirement.passwordMinCharacters},}`
        ].map(item => item.toString()).join('');
        this.emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    updateSeoTags(key) {
        this.http.get('/assets/meta-tags.json').subscribe(data => {
            let meatad = data[key]['meta'];
            let count = 0;
            const loop = () => {
                if (count < meatad.length) {
                    if (meatad[count]['name']) {
                        this.meta.updateTag({ name: meatad[count]['name'], content: meatad[count]['content'] });
                    }
                    if (meatad[count]['property']) {
                        this.meta.updateTag({ property: meatad[count]['property'], content: meatad[count]['content'] });
                    }
                    count += 1;
                    loop();
                }
                else {
                    // console.log('Meta added!');
                }
            };
            loop();
        }, (error) => {
            console.log(error);
        });
    }
    // Dsa Buyer change
    changeBuyer(id) {
        let url = this.router.url.split('?')[0];
        if (id) {
            this.router.navigate([url], { queryParams: { bcid: id } });
            this.getCartCount(id);
        }
        else {
            this.router.navigate([url]);
            if (this.gs.loginData && this.gs.loginData['_id']) {
                this.getCartCount(this.gs.loginData['_id']);
            }
        }
        if (this.gs.loginData['userType'] == 'DSARUSER') {
            this.gs.userTypeDSa = this.gs.loginData['userType'];
        }
    }
    // Get Cart Count
    getCartCount(id) {
        this.gs.getCartCount({ id: id }).subscribe((resp) => {
            this.gs.cartCount = resp.data;
        });
    }
    // Get Notification Count
    get_notify_count(id) {
        this.notification.get_notify_count({ individual: id }).subscribe((resp) => {
            this.gs.notificationCount = resp.data;
        });
    }
    // Only numbers allowed
    keyPressOnlyNumbers(event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        // Only Numbers 0-9
        if ((charCode < 48 || charCode > 57)) {
            event.preventDefault();
            return false;
        }
        else {
            return true;
        }
    }
    // Short
    dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            if (sortOrder == -1) {
                return b[property].localeCompare(a[property]);
            }
            else {
                return a[property].localeCompare(b[property]);
            }
        };
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
CommonService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 78517:
/*!*************************************************!*\
  !*** ./src/app/service/domainvalues.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomainvaluesService": () => (/* binding */ DomainvaluesService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class DomainvaluesService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api1;
        this.api2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api2;
    }
    // countries
    getAll_countries() {
        return this.http.get(this.baseUrl + 'countries');
    }
    // Active countries for User
    getAll_Activecountries() {
        return this.http.get(this.baseUrl + 'active_countries');
    }
    // city
    getAll_city() {
        return this.http.get(this.baseUrl + 'city');
    }
    // bussiness_type
    getAll_bussiness_type() {
        return this.http.get(this.baseUrl + 'bussiness_type');
    }
    getstateOrCity(id) {
        return this.http.post(this.baseUrl + 'get-state-by-country', { id: id });
    }
    // bussiness_ownership
    getAll_bussiness_ownership() {
        return this.http.get(this.baseUrl + 'bussiness_ownership');
    }
    // market_type
    getAll_market_type() {
        return this.http.get(this.baseUrl + 'market_type');
    }
}
DomainvaluesService.ɵfac = function DomainvaluesService_Factory(t) { return new (t || DomainvaluesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DomainvaluesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DomainvaluesService, factory: DomainvaluesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 80502:
/*!****************************************!*\
  !*** ./src/app/service/dsa.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DsaService": () => (/* binding */ DsaService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);




class DsaService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api1;
    }
    createDSA(data) {
        return this.http.post(this.baseUrl + 'dsa-register', data);
    }
    updateDSA(data) {
        return this.http.post(this.baseUrl + 'dsa-update', data);
    }
    signInDSA(data) {
        return this.http.post(this.baseUrl + "signin-dsa", data);
    }
    getManagePayout(data) {
        return this.http.post(this.baseUrl + 'get-manage-payout', data);
    }
    getManageSalesReport(data) {
        return this.http.post(this.baseUrl + 'get-manage-sales-report', data);
    }
    // ######################   Dsa Buyer signup Api  ###################### //
    getManageBuyer(data) {
        return this.http.post(this.baseUrl + 'dsa-manage-buyer-get', data);
    }
    getDscCreatedDSA(data) {
        return this.http.post(this.baseUrl + 'get-dsc-created-dsa', data);
    }
    getDSAById(data) {
        return this.http.post(this.baseUrl + 'edit-dsc-created-dsa', data);
    }
    deleteBuyer(data) {
        return this.http.post(this.baseUrl + 'delete-buyer', data);
    }
    // ######################   Manage Sals Rep Api  ###################### //
    // Get Manage sals rep
    getAllManageSalsRep(id) {
        return this.http.post(this.baseUrl + 'get-all-manage-sales-rep', { id: id });
    }
    // Update Manage sals rep
    update_ManageSals(data) {
        return this.http.post(this.baseUrl + 'update_manage-sals', data);
    }
    // Delete Manage sals rep
    delete_ManageSals(data) {
        return this.http.post(this.baseUrl + 'delete-manage-sals', data);
    }
}
DsaService.ɵfac = function DsaService_Factory(t) { return new (t || DsaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DsaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DsaService, factory: DsaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 59472:
/*!*******************************************!*\
  !*** ./src/app/service/global.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalService": () => (/* binding */ GlobalService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 34497);






class GlobalService {
  constructor(http, datePipe, titleService) {
    this.http = http;
    this.datePipe = datePipe;
    this.titleService = titleService;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api1;
    this.api2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api2;
    this.api3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api3;
    this.api6 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api6;
    this.cartCount = 0;
    this.notificationCount = 0;
    this.searchTxt = '';
    this.tomorrowDate = new Date();
    this.menuPermission = [];
    this.globalBuyer = '';
    this.is_buyer_description = '';
    this.globalBuyerList = [];
    // Sort by key
    this.sortByKey = (array, key) => {
      return array.sort((a, b) => {
        let x = typeof a[key] == 'string' ? a[key].toLowerCase() : a[key];
        let y = typeof b[key] == 'string' ? b[key].toLowerCase() : b[key];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    };
    // Sort by key (descending)
    this.sortByKeyDesc = (array, key) => {
      return array.sort((a, b) => {
        let x = typeof a[key] == 'string' ? a[key].toLowerCase() : a[key];
        let y = typeof b[key] == 'string' ? b[key].toLowerCase() : b[key];
        return x > y ? -1 : x < y ? 1 : 0;
      });
    };
    this.tomorrowDate.setDate(new Date().getDate() + 1);
    this.tomorrowDate = this.datePipe.transform(this.tomorrowDate, 'yyyy-MM-dd');
  }
  updatePageName(title) {
    this.titleService.setTitle(title);
  }
  // get Parent to child category
  getChildCategoryById(id) {
    return this.http.post(this.baseUrl + 'get-child-category', {
      id: id
    });
  }
  // Get User Payment Mathod 
  getPaymentMathod(id) {
    return this.http.post(this.baseUrl + 'payment-mathod', {
      id: id
    });
  }
  // Change primary card
  changePrimary(data) {
    return this.http.post(this.baseUrl + 'change-primary-card', data);
  }
  // add User Payment Mathod 
  // addPaymentMathod(data: any) {
  //     return this.http.post(this.baseUrl + 'create-payment-mathod', data);
  // }
  addPaymentMathod(data) {
    return this.http.post(this.baseUrl + 'save-payment-detail', data);
  }
  // add User Payment Mathod 
  editPaymentMathod(data) {
    return this.http.post(this.baseUrl + 'edit-payment-mathod', data);
  }
  // add User Payment Primary Mathod
  paymentPrimaryMathod(data) {
    return this.http.post(this.baseUrl + 'payment-primary-mathod', data);
  }
  deletePayement(data) {
    return this.http.post(this.baseUrl + 'delete-payment-mathod', data);
  }
  // Get User Address
  getAddress(id) {
    return this.http.post(this.baseUrl + 'get-address', {
      id: id
    });
  }
  // Get User Address
  getCharge(body) {
    return this.http.post(this.baseUrl + 'get-zoneChanges', body);
  }
  // Get Order Address
  getOrderAddress(id) {
    return this.http.post(this.baseUrl + 'get-order-address', {
      id: id
    });
  }
  getUseData(id) {
    return this.http.get(this.baseUrl + 'get-user-data/' + id);
  }
  // Update Profile
  updateProfile(data) {
    return this.http.post(this.baseUrl + 'profile-update', data);
  }
  // Add new Address
  newAddress(data) {
    return this.http.post(this.baseUrl + 'create-new-address', data);
  }
  // update Address
  updateAddress(data) {
    return this.http.post(this.baseUrl + 'update-address', data);
  }
  // Delete Address By Id
  deleteAddress(data) {
    return this.http.post(this.baseUrl + 'delete-address', data);
  }
  // search location
  serchLocation(text) {
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer '
      })
    };
    return this.http.get(`https://app.zipcodebase.com/landing_demo/?codes=` + text + '&country=in', {
      headers: httpOptions
    });
  }
  //  save file
  saveFile(data) {
    return this.http.post(this.baseUrl + 'save-file', data);
  }
  // Payment transaction API
  verifyCard(data) {
    return this.http.post(this.baseUrl + 'auth-credit-card', data);
  }
  chargeCard(data) {
    return this.http.post(this.baseUrl + 'charge-credit-card', data);
  }
  // ----------------------------------------------------
  // API 2 PRODUCT
  // ----------------------------------------------------
  // get Product By Category Id
  getProductById(data) {
    return this.http.post(this.api2 + 'product-by-category', data);
  }
  // get Product By Seller Id
  getProductBySeller(data) {
    return this.http.post(this.api2 + 'product-by-seller', data);
  }
  // get Product By Category Id
  getBySideFilter(data) {
    return this.http.post(this.api2 + 'get-by-side-filter', data);
  }
  // get Market Place Country
  getMarketPlaceCountry() {
    return this.http.get(this.api2 + 'get-market-place-country');
  }
  // get Product By Category Id
  getProductId(data) {
    return this.http.post(this.api2 + 'product-detail', data);
  }
  // get Releted Product By Category Id
  getReletedProduct(data) {
    return this.http.post(this.api2 + 'get-related-product', data);
  }
  // get Seller Product
  getSellerProduct(id) {
    return this.http.post(this.api2 + 'get-seller-product', id);
  }
  // Serch Product
  searchData(data) {
    return this.http.post(this.api2 + 'search-product', data);
  }
  // Add new product request
  addNewProductRequest(data) {
    return this.http.post(this.api2 + 'new-product-request', data);
  }
  // Update product request
  updateProductRequest(data) {
    return this.http.post(this.api2 + 'update-product-request', data);
  }
  //  get Product request
  getAllProductRequest(id) {
    return this.http.post(this.api2 + 'get-product-request', {
      id: id
    });
  }
  //  get Product By Id
  getProdById(id) {
    return this.http.post(this.api2 + 'get-prod-request-id', {
      id: id
    });
  }
  //  delete Product request By Id
  deleteProductRequest(data) {
    return this.http.post(this.api2 + 'delete-product-request', data);
  }
  // ----------------------------------------------------
  // API 2 CART
  // ----------------------------------------------------
  // Add To Cart
  addToCart(data) {
    return this.http.post(this.api2 + 'add-to-cart', data);
  }
  // get cart count
  getCartCount(data) {
    return this.http.post(this.api2 + 'get-cart-count', data);
  }
  // update quantity
  updateQuantity(data) {
    return this.http.post(this.api2 + 'update-quantity', data);
  }
  // order status
  OrderStatusChange(data) {
    return this.http.post(this.api2 + 'order-status-change', data);
  }
  // Return refund status
  returnRefundStatus(data) {
    return this.http.post(this.api2 + 'order-return-refund', data);
  }
  // Get Return refund Order
  getReturnRefOrder(data) {
    return this.http.post(this.api2 + 'get-return-refund-order', data);
  }
  // Get Return refund Order By id
  getReturnRefOrderByid(data) {
    return this.http.post(this.api2 + 'get-ret-refund-order-by-id', data);
  }
  addProductToWL(data) {
    return this.http.post(this.api2 + 'add-product-wishlist', data);
  }
  createWishlist(data) {
    return this.http.post(this.api2 + 'create-wishlist', data);
  }
  getMyWishlist(id) {
    return this.http.post(this.api2 + 'get-wish-list', {
      id: id
    });
  }
  // Get Cart Data
  getCartData(id) {
    return this.http.post(this.api2 + 'get-cart-item', {
      id: id
    });
  }
  // Add Wishlist Data in cart
  addToCartWishlist(data) {
    return this.http.post(this.api2 + 'add-to-cart-wishlist', data);
  }
  // Add Wishlist Data in cart
  editWishlist(data) {
    return this.http.post(this.api2 + 'edit-wishlist', data);
  }
  // cart price update
  cart_price_update(data) {
    return this.http.post(this.api2 + 'cart_price_update', data);
  }
  // Delet Cart By ID
  deleteCartByID(data) {
    return this.http.post(this.api2 + 'delete-cart-item', data);
  }
  // Get WishList 
  browseWishlist(id) {
    return this.http.post(this.api2 + 'browse-wishlist', {
      id: id
    });
  }
  deleteWishListItem(id) {
    return this.http.post(this.api2 + 'remove-wishlist', {
      id: id
    });
  }
  deleteWishProduct(data) {
    return this.http.post(this.api2 + 'remove-wishlist-item', data);
  }
  // Place Order
  placeOrder(data) {
    return this.http.post(this.api2 + 'place-order', data);
  }
  // Get User Order 
  getOrder(id) {
    return this.http.post(this.api2 + 'get-myorders', {
      id: id
    });
  }
  // view Order Details
  getAllUserCollPro(data) {
    return this.http.post(this.api2 + 'get-all-user-coll-pro', data);
  }
  // view Order Details
  viewOrderDtl(data) {
    return this.http.post(this.api2 + 'view-order-detail', data);
  }
  // get Product Review
  getProductReview(data) {
    return this.http.post(this.api2 + 'get-product-review', data);
  }
  // get Product Review
  getAllProductReview(data) {
    return this.http.post(this.api2 + 'getAll-product-review', data);
  }
  // Product Review
  addUpdateProdReview(data) {
    return this.http.post(this.api2 + 'add-update-product-review', data);
  }
  // delete Product Review
  deleteProductReview(data) {
    return this.http.post(this.api2 + 'delete-product-review', data);
  }
  // get seller Review
  getSellerFeedback(data) {
    return this.http.post(this.api2 + 'get-seller-feedback', data);
  }
  // get all seller Review
  getAllSellerFeedback(data) {
    return this.http.post(this.api2 + 'get-all-feedback', data);
  }
  // seller Review
  productSellerReview(data) {
    return this.http.post(this.api2 + 'product-seller-review', data);
  }
  // delete seller Feedback
  deleteSellerFeedback(data) {
    return this.http.post(this.api2 + 'delete-seller-feedback', data);
  }
  // change order status
  changeCollectionStatus(data) {
    return this.http.post(this.api2 + 'change-order-collection-status', data);
  }
  // ----------------------------------------------------
  // API 3 
  // ----------------------------------------------------
  // Get User Order 
  getTransaction(id) {
    return this.http.post(this.api3 + 'get-transaction-history', {
      id: id
    });
  }
  // Get User Order 
  subscribeEmail(email) {
    return this.http.post(this.baseUrl + 'subscribe-email', {
      email: email,
      subscriber: "Buyer"
    });
  }
  getMaintenanceDetail(data) {
    return this.http.post(this.api6 + 'get-maintenance-detail', data);
  }
  loadScript() {
    let node = document.createElement('script');
    node.src = 'assets/js/main.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  // fownload file
  downloadFileFromUrl(url, filename) {
    fetch(url).then(function (t) {
      return t.blob().then(b => {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(b);
        a.setAttribute("download", filename);
        a.click();
      });
    });
  }
  readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
}
GlobalService.ɵfac = function GlobalService_Factory(t) {
  return new (t || GlobalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title));
};
GlobalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: GlobalService,
  factory: GlobalService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 47320:
/*!*************************************************!*\
  !*** ./src/app/service/notification.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class NotificationService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api5;
    }
    get_system_notification(id) {
        return this.http.post(this.apiUrl + 'get-system-notification', id);
    }
    read_system_notification(data) {
        return this.http.post(this.apiUrl + 'read-system-notification', data);
    }
    get_notify_count(data) {
        return this.http.post(this.apiUrl + 'get-notify-count', data);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 65169:
/*!********************************************!*\
  !*** ./src/app/service/setting.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingService": () => (/* binding */ SettingService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




class SettingService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api1;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api3;
    }
    setOTP(data) {
        return this.http.post(this.baseUrl + 'set-otp', data);
    }
    setOTPChangeEmail(data) {
        return this.http.post(this.baseUrl + 'set-otp-change-email', data);
    }
    updatePassword(data) {
        return this.http.post(this.baseUrl + 'update-passwords', data);
    }
    changeEmail(data) {
        return this.http.post(this.baseUrl + 'change-email', data);
    }
    // Notification preference Api
    get_notification_pref(id) {
        return this.http.post(this.apiUrl + 'get-notification-preferences', { id: id });
    }
    create_notification_pref(data) {
        return this.http.post(this.apiUrl + 'create-notification-preferences', data);
    }
    // menu permission
    getMenuPermission(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api5 + 'get-menu-permission', data);
    }
    getPermission(data) {
        data.formName = this.router.url.split('?')[0];
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api5 + 'get-permission', data);
    }
    // *** //
    //  code domain Api
    getCodeDomainVal(code) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api5 + 'get-codedomain-value', { code });
    }
    inquiryEmail(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api5 + 'buyer-enquiry', data);
    }
}
SettingService.ɵfac = function SettingService_Factory(t) { return new (t || SettingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
SettingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SettingService, factory: SettingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 99039:
/*!******************************************!*\
  !*** ./src/app/service/token.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenService": () => (/* binding */ TokenService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
class TokenService {
    constructor() { }
    getToken() {
        return localStorage.getItem(ACCESS_TOKEN) || '';
    }
    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN) || '';
    }
    saveToken(token) {
        localStorage.setItem(ACCESS_TOKEN, token);
    }
    saveRefreshToken(refreshToken) {
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
    }
    removeToken() {
        localStorage.removeItem(ACCESS_TOKEN);
    }
    removeRefreshToken() {
        localStorage.removeItem(REFRESH_TOKEN);
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(); };
TokenService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 83110:
/*!***********************************************!*\
  !*** ./src/app/service/uploadfile.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadfileService": () => (/* binding */ UploadfileService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class UploadfileService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api4;
    }
    saveimage(file) {
        var fd = new FormData();
        fd.append('file', file);
        return this.http.post(this.baseUrl + 'save-file', fd);
    }
}
UploadfileService.ɵfac = function UploadfileService_Factory(t) { return new (t || UploadfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UploadfileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UploadfileService, factory: UploadfileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _directive_alphabet_only_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directive/alphabet-only.directive */ 7878);
/* harmony import */ var _directive_number_only_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive/number-only.directive */ 38748);
/* harmony import */ var _directive_equal_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directive/equal-validator.directive */ 1476);
/* harmony import */ var _layout_rights_footer_rights_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/rights-footer/rights-footer.component */ 14191);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-skeleton-loader */ 38495);
/* harmony import */ var _directive_ngx_tree_select_src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directive/ngx-tree-select/src */ 84614);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-slick-carousel */ 25939);
/* harmony import */ var _pages_account_header_account_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/account-header/account-header.component */ 94615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-tel-input */ 79453);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ 92302);
/* harmony import */ var angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-password-strength-meter */ 56192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _directive_ngx_tree_select_src_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directive/ngx-tree-select/src/module */ 75935);



















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonLoaderModule.forRoot(),
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__.SlickCarouselModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
        ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__.Ng2TelInputModule,
        angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_16__.PasswordStrengthMeterModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.NgxPaginationModule,
        _directive_ngx_tree_select_src__WEBPACK_IMPORTED_MODULE_5__.NgxTreeSelectModule.forRoot({
            idField: '_id',
            textField: 'name',
            expandMode: _directive_ngx_tree_select_src__WEBPACK_IMPORTED_MODULE_5__.ExpandMode.Selection
        }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonLoaderModule,
        _directive_ngx_tree_select_src__WEBPACK_IMPORTED_MODULE_5__.NgxTreeSelectModule,
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__.SlickCarouselModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
        ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__.Ng2TelInputModule,
        angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_16__.PasswordStrengthMeterModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.NgxPaginationModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directive_alphabet_only_directive__WEBPACK_IMPORTED_MODULE_0__.AlphabetOnlyDirective,
        _directive_number_only_directive__WEBPACK_IMPORTED_MODULE_1__.OnlynumberDirective,
        _directive_equal_validator_directive__WEBPACK_IMPORTED_MODULE_2__.PasswordvalidatorDirective,
        _layout_rights_footer_rights_footer_component__WEBPACK_IMPORTED_MODULE_3__.RightsFooterComponent,
        _pages_account_header_account_header_component__WEBPACK_IMPORTED_MODULE_6__.AccountHeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonLoaderModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__.SlickCarouselModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
        ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__.Ng2TelInputModule,
        angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_16__.PasswordStrengthMeterModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.NgxPaginationModule, _directive_ngx_tree_select_src_module__WEBPACK_IMPORTED_MODULE_8__.NgxTreeSelectModule], exports: [_directive_alphabet_only_directive__WEBPACK_IMPORTED_MODULE_0__.AlphabetOnlyDirective,
        _directive_number_only_directive__WEBPACK_IMPORTED_MODULE_1__.OnlynumberDirective,
        _directive_equal_validator_directive__WEBPACK_IMPORTED_MODULE_2__.PasswordvalidatorDirective,
        _layout_rights_footer_rights_footer_component__WEBPACK_IMPORTED_MODULE_3__.RightsFooterComponent,
        _pages_account_header_account_header_component__WEBPACK_IMPORTED_MODULE_6__.AccountHeaderComponent,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonLoaderModule,
        _directive_ngx_tree_select_src__WEBPACK_IMPORTED_MODULE_5__.NgxTreeSelectModule,
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__.SlickCarouselModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
        ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__.Ng2TelInputModule,
        angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_16__.PasswordStrengthMeterModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.NgxPaginationModule] }); })();


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    isClient: false,
    assetsURL: 'https://d1ufh3f3pi3vt4.cloudfront.net/',
    api1: 'http://localhost:3000/dev/',
    api2: 'http://localhost:3000/dev/',
    api3: 'http://localhost:3000/dev/',
    api4: 'http://localhost:3000/dev/',
    api5: 'http://localhost:3000/dev/',
    // For Maintanace Check
    api6: 'https://rxpq1tuwn3.execute-api.us-east-1.amazonaws.com/dev/',
    // Staging
    //   api1: 'https://sgwg6qjpg4.execute-api.us-east-1.amazonaws.com/dev/',
    //   api2: 'https://kty2be1vw3.execute-api.us-east-1.amazonaws.com/dev/',
    //   api3: 'https://5puey85bj9.execute-api.us-east-1.amazonaws.com/dev/',
    //   api4: 'https://4l7hcsfom0.execute-api.us-east-1.amazonaws.com/dev/',
    //   api5: 'https://zirs8mfgn9.execute-api.us-east-1.amazonaws.com/dev/',
    //   // For Maintanace Check
    //   api6: 'https://rxpq1tuwn3.execute-api.us-east-1.amazonaws.com/dev/',
    // Prduction
    // assetsURL: 'https://ddfri9dh06qgm.cloudfront.net/',
    // api1: 'https://q8zccpa4cg.execute-api.ap-south-1.amazonaws.com/prod/',
    // api2: 'https://7tyxzq79mf.execute-api.ap-south-1.amazonaws.com/prod/',
    // api3: 'https://n4locny1zj.execute-api.ap-south-1.amazonaws.com/prod/',
    // api4: 'https://utsdwyqdb8.execute-api.ap-south-1.amazonaws.com/prod/',
    // api5: 'https://146wr3vs37.execute-api.ap-south-1.amazonaws.com/prod/',
    // // For Maintanace Check
    // api6: 'https://s0ehm1e4jh.execute-api.ap-south-1.amazonaws.com/prod/',
    appVersion: '1.320'
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map