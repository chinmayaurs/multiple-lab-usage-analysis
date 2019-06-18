webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .navbar-fixed-left {\n     width: 140px;\n     position: fixed;\n     border-radius: 0;\n     height: 100%;\n }\n \n .navbar-fixed-left .navbar-nav>li {\n     float: none;\n     /* Cancel default li float: left */\n     width: 139px;\n }\n \n .navbar-fixed-left+.container {\n     padding-left: 160px;\n }\n /* On using dropdown menu (To right shift popuped) */\n \n .navbar-fixed-left .navbar-nav>li>.dropdown-menu {\n     margin-top: -50px;\n     margin-left: 140px;\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse navbar-fixed-left\">\n    <a id=\"overall\" class=\"navbar-brand\" href=\"#\">Overall</a>\n    <ul class=\"nav navbar-nav\">\n        <li><a href=\"#\">MicroControler Lab</a>\n            <div class=\"data\">\n                <ul style=\"margin-left: -7%;\">\n                    <li> <button class=\"btn btn-primary dropdown-toggle\" style=\"width: 80%\" type=\"button\" (click)=\"getData('microcontroller','summary')\"> Summary </button></li>\n                    <li style=\"margin-top: 2px;\">\n                        <div class=\"dropdown\"> <button class=\"btn btn-primary dropdown-toggle\" style=\"width:80%\" type=\"button\" data-toggle=\"dropdown\" >Stat </button>\n                            <ul class=\"dropdown-menu\">\n                                <li  *ngFor=\"let data of mcList\"><a (click)=\"getData('microcontroller', data)\">{{data}}</a></li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n\n            </div>\n        </li>\n        <li><a href=\"#\">WireLess Lab</a>\n            <div class=\"data\">\n                <ul style=\"margin-left: -7%;\">\n                    <li> <button class=\"btn btn-primary dropdown-toggle\" style=\"width: 80%\" type=\"button\"> Summary </button></li>\n                    <li style=\"margin-top: 2px;\">\n                        <div class=\"dropdown\"> <button class=\"btn btn-primary dropdown-toggle\" style=\"width:80%\" type=\"button\" data-toggle=\"dropdown\">Stat </button>\n                            <ul class=\"dropdown-menu\">\n                                <li><a>This is list1</a></li>\n                                <li><a>This is list2</a></li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </li>\n        <li><a href=\"#\">VLSI Lab</a>\n            <div class=\"data\">\n                <ul style=\"margin-left: -7%;\">\n                    <li> <button class=\"btn btn-primary dropdown-toggle\" style=\"width: 80%\" type=\"button\"> Summary </button></li>\n                    <li style=\"margin-top: 2px;\">\n                        <div class=\"dropdown\"> <button class=\"btn btn-primary dropdown-toggle\" style=\"width:80%\" type=\"button\" data-toggle=\"dropdown\">Stat </button>\n                            <ul class=\"dropdown-menu\">\n                                <li><a>This is list1</a></li>\n                                <li><a>This is list2</a></li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </li>\n    </ul>\n</div>\n<div class=\"container\">\n    <div id=\"mainData\" class=\"row\">\n        <h2>Over all data, We can show here.</h2>\n        <div class=\"row\">\n        <div class=\"col-lg-4\">\n            <svg id=\"disk_occupation\"  width=\"97%\" height=\"250\"></svg>\n            <h2 class='text-center'>Tag 1</h2>\n        </div>\n        <div class=\"col-lg-4\">\n            <svg id=\"network_occupation\" width=\"97%\" height=\"250\"></svg>\n            <h2 class='text-center'>Tag 1</h2>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n            <svg id=\"file_count\" width=\"97%\" height=\"250\"></svg>\n            <h2 class='text-center'>Tag 1</h2>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_cs) {
        this._cs = _cs;
        this.labData = {};
        this.mcList = [];
        this.gaugeObject = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getdata();
        // this.liquidBubble();
    };
    AppComponent.prototype.getdata = function () {
        var _this = this;
        var data = { query: { "lab": "microcontroller" } };
        this._cs.getdata(data, "filescount").subscribe(function (res) {
            // console.log(JSON.parse(res._body).data);
            _this.labData = JSON.parse(res._body).data;
            _this.mcList = __WEBPACK_IMPORTED_MODULE_2_underscore__["uniq"](__WEBPACK_IMPORTED_MODULE_2_underscore__["pluck"](_this.labData, 'machine_address'));
            // console.log(this.mcList);
            _this.liquidBubble(_this.labData);
            _this.loadPieChart(_this.labData);
            _this.loadBarChart1(_this.labData);
        }, function (err) {
        });
    };
    AppComponent.prototype.liquidBubble = function (labData) {
        //   var node = document.getElementById('fillgauge1');
        //  while (node.hasChildNodes()) {
        //     node.removeChild(node.firstChild);
        // }
        this.showliquidGage = true;
        var config_bubble1 = liquidFillGaugeDefaultSettings();
        config_bubble1.waveAnimateTime = 10000;
        this.gaugeObject.bubble1 = loadLiquidFillGauge("disk_occupation", 0, config_bubble1);
        // console.log(this.gaugeObject.bubble1);
        // let hdData = this.labData.storage_in_gb;
        // console.log(hdData);
        // let percentage = (hdData.used_space/hdData.total_space)*100;
        var localValue = __WEBPACK_IMPORTED_MODULE_2_underscore__["pluck"](labData, 'storage_in_gb');
        // console.log("kjdkjs",localValue);
        var localValueSum = __WEBPACK_IMPORTED_MODULE_2_underscore__["reduce"](localValue, function (first, sec) {
            var total_space = first["total_space"] + sec["total_space"];
            var used_space = first["used_space"] + sec["used_space"];
            // console.log(total_space);
            // console.log(used_space);
            // let used_space = first.used_space+sec.used_space;
            return { 'total_space': total_space, 'used_space': used_space };
            // return 0;
            //
        });
        // for(let i in localValue){
        //   console.log(i.total_space);
        // }
        // console.log(localValue);
        // console.log(localValueSum);
        var percentage = (localValueSum["used_space"] / localValueSum["total_space"]) * 100;
        // console.log(this.gaugeObject.bubble1);
        // if(this.gaugeObject.bubble1){
        this.gaugeObject.bubble1.update(percentage);
        // }else {
        // }
        // this.gaugeObject.bubble2 =  loadLiquidFillGauge("fillgauge2", percentage);
        // this.gaugeObject.bubble3 =  loadLiquidFillGauge("fillgauge3", percentage);
    };
    AppComponent.prototype.loadPieChart = function (loadData) {
        //Math.floor(Math.random()*(999-100+1)+100);
        var localValue = __WEBPACK_IMPORTED_MODULE_2_underscore__["pluck"](loadData, 'network_usage');
        // console.log("kjdkjs",localValue);
        var localValueSum = __WEBPACK_IMPORTED_MODULE_2_underscore__["reduce"](localValue, function (first, sec) {
            var rx_sum = first["rx"] + sec["rx"];
            var tx_sum = first["tx"] + sec["tx"];
            return { 'rx': rx_sum, 'tx': tx_sum };
        });
        // document.getElementById('network_occupation').parent
        /// d3 actionsssss
        // console.log(localValueSum);
        var data = [{ "networkType": "rx", "totalCount": localValueSum.rx }, { "networkType": "tx", "totalCount": localValueSum.tx }];
        var width = 800, height = 250, radius = Math.min(width, height) / 2;
        var color = d3.scale.ordinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
        var arc = d3.svg.arc()
            .outerRadius(radius - 0)
            .innerRadius(radius - 200);
        var pie = d3.layout.pie()
            .sort(null)
            .value(function (d) {
            return d.totalCount;
        });
        var svg = d3.select("#network_occupation")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        var g = svg.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");
        g.append("path")
            .attr("d", arc)
            .style("fill", function (d) {
            return color(d.data.networkType);
        });
        g.append("text")
            .attr("transform", function (d) {
            return "translate(" + arc.centroid(d) + ")";
        })
            .attr("dy", ".35em")
            .style("text-anchor", "middle")
            .text(function (d) {
            return d.data.networkType;
        });
    };
    //loading Bar Chart
    AppComponent.prototype.loadBarChart1 = function (loadData) {
        var localValue = __WEBPACK_IMPORTED_MODULE_2_underscore__["pluck"](loadData, 'file_ext_size');
        // console.log("kjdkjs",localValue);
        //  _.filter(localValue,
        //   function(object){
        //     let keyVal = _.keys(object)[0];
        //     if(object[keyVal]>0.001) return object;
        //     return ;
        //   });
        //       var localValueSum =_.pick(localValue, function(value, key, object) {
        //
        //         if(value>0.001) return value;
        // });
        // var localValueSum = _.reduce(localValue,function(first:any,sec:any){
        //
        //   // let total_space = first["total_space"]+sec["total_space"];
        //   // let used_space = first["used_space"]+sec["used_space"];
        //   // console.log(total_space);
        //   // console.log(used_space);
        //   // let used_space = first.used_space+sec.used_space;
        //   // return {'total_space':total_space,'used_space':used_space};
        //   return _.extend(first,sec);
        //   // return 0;
        // //
        // });
        //********************************************************************************to be chaecked
        // var localValueSum = _.chain(localValue)
        //         .reduce(function(memo, obj) {
        //           //ignore
        //             if(typeof memo[obj.name] === 'undefined') {
        //                 memo[obj.name] = 0;
        //             }
        //             memo[obj.name] += obj.val;
        //             return memo;
        //         }, {})
        //         .map(function (val, key) {
        //             return {key: key, val: val};
        //         })
        //         .value();
        // document.getElementById('network_occupation').parent
        /// d3 actionsssss
        // console.log(localValueSum);
        //     var margin = {top: 20, right: 20, bottom: 70, left: 40},
        //     width = 600 - margin.left - margin.right,
        //     height = 300 - margin.top - margin.bottom;
        //
        //
        // // set the ranges
        // var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
        //
        // var y = d3.scale.linear().range([height, 0]);
        //
        // // define the axis
        // var xAxis = d3.svg.axis()
        //     .scale(x)
        //     .orient("bottom")
        //
        //
        // var yAxis = d3.svg.axis()
        //     .scale(y)
        //     .orient("left")
        //     .ticks(10);
        //
        //
        // // add the SVG element
        // var svg = d3.select("#file_count")
        //     .attr("width", width + margin.left + margin.right)
        //     .attr("height", height + margin.top + margin.bottom)
        //   .append("g")
        //     .attr("transform",
        //           "translate(" + margin.left + "," + margin.top + ")");
        //
        //
        //   // scale the range of the data
        //   x.domain(data.map(function(d) { return d.Letter; }));
        //   y.domain([0, d3.max(data, function(d) { return d.Freq; })]);
        //
        //   // add axis
        //   svg.append("g")
        //       .attr("class", "x axis")
        //       .attr("transform", "translate(0," + height + ")")
        //       .call(xAxis)
        //     .selectAll("text")
        //       .style("text-anchor", "end")
        //       .attr("dx", "-.8em")
        //       .attr("dy", "-.55em")
        //       .attr("transform", "rotate(-90)" );
        //
        //   svg.append("g")
        //       .attr("class", "y axis")
        //       .call(yAxis)
        //     .append("text")
        //       .attr("transform", "rotate(-90)")
        //       .attr("y", 5)
        //       .attr("dy", ".71em")
        //       .style("text-anchor", "end")
        //       .text("Frequency");
        //
        //
        //   // Add bar chart
        //   svg.selectAll("bar")
        //       .data(data)
        //     .enter().append("rect")
        //       .attr("class", "bar")
        //       .attr("x", function(d) { return x(d.Letter); })
        //       .attr("width", x.rangeBand())
        //       .attr("y", function(d) { return y(d.Freq); })
        //       .attr("height", function(d) { return height - y(d.Freq); });
        //
        // });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* ClientService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* ClientService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* ClientService */],
            { provide: 'apiBase', useValue: '' }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// import{Router} from '@angular/router'


var ClientService = (function () {
    function ClientService(http, _api) {
        this.http = http;
        this._api = _api;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    ClientService.prototype.getdata = function (model, objectType) {
        return this.http.post(this._api + "/getData/" + objectType, model, this.options);
    };
    return ClientService;
}());
ClientService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Inject */])('apiBase')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, String])
], ClientService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map