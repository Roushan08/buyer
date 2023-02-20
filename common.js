"use strict";
(self["webpackChunkBuyer_new"] = self["webpackChunkBuyer_new"] || []).push([["common"],{

/***/ 12411:
/*!*******************************************!*\
  !*** ./src/app/service/filter.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterService": () => (/* binding */ FilterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);




class FilterService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api2;
    }
    // Order and invoice Filter
    orderFilterData(data) {
        return this.http.post(this.baseUrl + 'filter-order-and-invoice', data);
    }
    // Transaction history Filter
    transactionFilterData(data) {
        return this.http.post(this.baseUrl + 'filter-transaction-history', data);
    }
    // Address Filter
    addressFilterData(data) {
        return this.http.post(this.baseUrl + 'filter-address', data);
    }
    // Payment Filter
    paymentFilterData(data) {
        return this.http.post(this.baseUrl + 'filter-payment-method', data);
    }
    // notification Filter
    notificationFilterData(data) {
        return this.http.post(this.baseUrl + 'filter-notification', data);
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
FilterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 49080:
/*!****************************************************!*\
  !*** ./src/app/service/role_management.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleManagementService": () => (/* binding */ RoleManagementService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);




class RoleManagementService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api3;
    }
    // Get role Management
    getAll(id) {
        return this.http.post(this.baseUrl + 'get-all-role', { id: id });
    }
    // Get role Management
    getParentRole(id) {
        return this.http.post(this.baseUrl + 'get-all-parent-role', { id: id });
    }
    // Get role Management
    getServiceByRole(data) {
        return this.http.post(this.baseUrl + 'get-service-by-role', data);
    }
    // Get role Management
    getRoleById(body) {
        return this.http.post(this.baseUrl + 'get-role-by-id', body);
    }
    // Create role Management 
    create_role(data) {
        return this.http.post(this.baseUrl + 'create-role', data);
    }
    // Update role Management
    update_role(data) {
        return this.http.post(this.baseUrl + 'update-role', data);
    }
    // Delete role Management
    delete_role(data) {
        return this.http.post(this.baseUrl + 'delete-role', data);
    }
}
RoleManagementService.ɵfac = function RoleManagementService_Factory(t) { return new (t || RoleManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RoleManagementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoleManagementService, factory: RoleManagementService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 15021:
/*!****************************************************!*\
  !*** ./src/app/service/user_management.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementService": () => (/* binding */ UserManagementService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);




class UserManagementService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api3;
    }
    // Get user_Management
    getAll(id) {
        return this.http.post(this.baseUrl + 'get-all-user', { id: id });
    }
    // Update user Management
    update_user(data) {
        return this.http.post(this.baseUrl + 'update-user', data);
    }
    // Delete user Management
    delete_user(data) {
        return this.http.post(this.baseUrl + 'delete-user', data);
    }
}
UserManagementService.ɵfac = function UserManagementService_Factory(t) { return new (t || UserManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserManagementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserManagementService, factory: UserManagementService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map