(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-news-dashboard></app-news-dashboard>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _news_dashboard_news_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-dashboard/news-dashboard.component */ "./src/app/news-dashboard/news-dashboard.component.ts");
/* harmony import */ var _news_dashboard_news_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-dashboard/news-api.service */ "./src/app/news-dashboard/news-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _news_dashboard_news_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["NewsDashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _news_dashboard_news_api_service__WEBPACK_IMPORTED_MODULE_5__["NewsApiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/news-dashboard/news-api.service.ts":
/*!****************************************************!*\
  !*** ./src/app/news-dashboard/news-api.service.ts ***!
  \****************************************************/
/*! exports provided: NewsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsApiService", function() { return NewsApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsApiService = /** @class */ (function () {
    function NewsApiService(http) {
        this.http = http;
    }
    NewsApiService.prototype.fetchLatestNews = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?language=en&q=latest&apiKey=d948c11e91b04de9bbcd5bb0065a395c');
    };
    NewsApiService.prototype.searchForNews = function (keyword) {
        return this.http.get("https://newsapi.org/v2/top-headlines?q=" + keyword + "&language=en&apiKey=d948c11e91b04de9bbcd5bb0065a395c");
    };
    NewsApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewsApiService);
    return NewsApiService;
}());



/***/ }),

/***/ "./src/app/news-dashboard/news-dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/news-dashboard/news-dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-item {\r\n  margin: 10px;\r\n  border: 1px solid #e4e4e4;\r\n  border-radius: 5px;\r\n  padding: 12px;\r\n}\r\n\r\n.news-item-img {\r\n  max-width: 150px;\r\n  max-height: 150px;\r\n  padding: 8px;\r\n}\r\n\r\n.news-search {\r\n  width: 100%;\r\n  padding: 8px;\r\n  border: 1px solid lightblue;\r\n  border-radius: 4px;\r\n}\r\n\r\n.search-prompt {\r\n  color: lightgray;\r\n  margin-left: 8px;\r\n  margin-top: 4px;\r\n}\r\n\r\n.news-category {\r\n  border-bottom: 1px solid lightgray;\r\n  padding: 8px;\r\n  margin: 20px 0;\r\n}\r\n\r\n.news-category span {\r\n  display: inline-block;\r\n  margin-right: 20px;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n}\r\n\r\n.active-category {\r\n  color: cornflowerblue;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  .news-item-img {\r\n    max-width: 100%;\r\n    max-height: initial;\r\n    padding: 0;\r\n    margin-bottom: 8px;\r\n  }\r\n  .news-category span {\r\n    margin-bottom: 15px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/news-dashboard/news-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/news-dashboard/news-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header><h1 class=\"text-center m-2\">News</h1></header>\n\n<main>\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <input class=\"news-search\"\n               type=\"text\" placeholder=\"Search for news...\"\n               (keyup)=\"onSearch($event)\">\n        <p class=\"search-prompt\" *ngIf=\"hasSearched\">No results found! Type more than 3 characters or try different keywords.</p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <p class=\"news-category\">\n          <span [ngClass]=\"{'active-category': activeCategory === 'latest'}\"\n                (click)=\"onCategorySelect('latest')\">Latest</span>\n          <span [ngClass]=\"{'active-category': activeCategory === 'india'}\"\n                (click)=\"onCategorySelect('india')\">India</span>\n          <span [ngClass]=\"{'active-category': activeCategory === 'world'}\"\n                (click)=\"onCategorySelect('world')\">World</span>\n          <span [ngClass]=\"{'active-category': activeCategory === 'business'}\"\n                (click)=\"onCategorySelect('business')\">Business</span>\n          <span [ngClass]=\"{'active-category': activeCategory === 'technology'}\"\n                (click)=\"onCategorySelect('technology')\">Technology</span>\n          <span [ngClass]=\"{'active-category': activeCategory === 'entertainment'}\"\n                (click)=\"onCategorySelect('entertainment')\">Entertainment</span>\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <p class=\"text-center\" *ngIf=\"isLoading\" style=\"width: 100%;\">Loading...</p>\n      <div class=\"col-sm-12\" *ngFor=\"let newsItem of this.searchResults.length === 0? newsItems : searchResults\">\n\n        <div class=\"news-item\">\n          <img #newsImg class=\"img-responsive float-sm-right news-item-img\"\n               [src]=\"newsItem.urlToImage\"\n               alt=\"Card image cap\">\n          <h5 class=\"mr-5\">{{newsItem.title}}</h5>\n          <p class=\"color-gray\">\n            <span class=\"d-inline-block mr-1\">{{newsItem.source.name}}</span>\n            <span class=\"d-inline-block mr-1 color-black\">-</span>\n            <span class=\"d-inline-block mr-1\">{{newsItem.publishedAt | date}}</span>\n          </p>\n          <a [href]=\"newsItem.url\" target=\"_blank\">View Full Story</a>\n          <div class=\"clearfix\"></div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/news-dashboard/news-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/news-dashboard/news-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: NewsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDashboardComponent", function() { return NewsDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-api.service */ "./src/app/news-dashboard/news-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsDashboardComponent = /** @class */ (function () {
    function NewsDashboardComponent(http, newsApiService) {
        this.http = http;
        this.newsApiService = newsApiService;
        this.newsItems = new Array(0);
        this.searchResults = new Array(0);
        this.hasSearched = false;
        this.activeCategory = 'latest';
        this.isLoading = false;
    }
    NewsDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsApiService.fetchLatestNews().subscribe(function (data) {
            console.log(data);
            _this.newsItems = data.articles;
        });
    };
    NewsDashboardComponent.prototype.onSearch = function (event) {
        var _this = this;
        this.hasSearched = true;
        var keyword = event.target.value;
        if (event.target.value.length > 3) {
            this.newsApiService.searchForNews(keyword).subscribe(function (searchResults) {
                if (searchResults.articles.length > 0) {
                    _this.searchResults = searchResults.articles;
                    _this.hasSearched = false;
                }
                else {
                    _this.searchResults = [];
                }
            });
        }
        else {
            this.searchResults = [];
        }
    };
    NewsDashboardComponent.prototype.onCategorySelect = function (category) {
        var _this = this;
        this.isLoading = true;
        this.activeCategory = category;
        this.newsApiService.searchForNews(category).subscribe(function (categoryResults) {
            _this.isLoading = false;
            if (categoryResults.articles.length > 0) {
                _this.newsItems = categoryResults.articles;
            }
        });
    };
    NewsDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-dashboard',
            template: __webpack_require__(/*! ./news-dashboard.component.html */ "./src/app/news-dashboard/news-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./news-dashboard.component.css */ "./src/app/news-dashboard/news-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _news_api_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"]])
    ], NewsDashboardComponent);
    return NewsDashboardComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Bhushan\test\linetest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map