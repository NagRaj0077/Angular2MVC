"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "user-app",
        template: "\n            <img src=\"../../images/FOCISLogo.png\" style=\"text-align:center;padding:10px;\"/>\n               <div>\n                  <nav class='navbar navbar-default'>\n                       <div class='container-fluid' style='padding-left: 0px;'>\n                         <ul class='nav navbar-nav'>\n                           <li><a [routerLink]=\"['home']\">Home</a></li>\n                            <li><a [routerLink]=\"['user']\">Users</a></li>\n<li><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Quotation <span class=\"caret\"></span></a>        \n <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href=\"#\">Multi Quote</a></li></ul></li>  \n                      </ul></div></nav>  \n              <div class='container'>\n                <router-outlet></router-outlet>\n              </div>\n             </div>          \n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map