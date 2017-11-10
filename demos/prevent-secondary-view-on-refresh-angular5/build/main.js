webpackJsonp([1],{88:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(35),r=n(89);o.platformBrowserDynamic().bootstrapModule(r.AppModule)},89:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(17),a=n(2),i=n(7),c=n(90),p=n(92),l=n(93),s=n(95),u=[{path:"app",children:[{path:"main",component:l.MainViewComponent},{path:"secondary",outlet:"secondary",component:s.SecondaryViewComponent,canActivate:[p.DoNotShowSecondaryOnRefreshGuard]}]}],f=function(){function t(){}return t=o([a.NgModule({bootstrap:[c.AppComponent],imports:[r.BrowserModule,i.RouterModule.forRoot(u,{useHash:!0})],declarations:[c.AppComponent,l.MainViewComponent,s.SecondaryViewComponent],providers:[p.DoNotShowSecondaryOnRefreshGuard]})],t)}();e.AppModule=f},90:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),a=function(){function t(){}return t=o([r.Component({selector:"my-app",styles:[n(91)],template:"\n\t\t<p>\n\t\t\t<a [routerLink]=\"[ '/app', { outlets: { primary: 'main' } } ]\">\n\t\t\t\tOpen Main View\n\t\t\t</a>\n\t\t\t&mdash;\n\t\t\t<a [routerLink]=\"[ '/app', { outlets: { primary: null } } ]\">\n\t\t\t\tClose Main View\n\t\t\t</a>\n\t\t</p>\n\n\t\t<p>\n\t\t\t<a [routerLink]=\"[ '/app', { outlets: { secondary: 'secondary' } } ]\">\n\t\t\t\tOpen Secondary View\n\t\t\t</a>\n\t\t\t&mdash;\n\t\t\t<a [routerLink]=\"[ '/app', { outlets: { secondary: null } } ]\">\n\t\t\t\tClose Secondary View\n\t\t\t</a>\n\t\t</p>\n\n\t\t<router-outlet></router-outlet>\n\t\t<router-outlet name=\"secondary\"></router-outlet>\n\t"})],t)}();e.AppComponent=a},91:function(t,e){t.exports=":host {\n  display: block ;\n  font-size: 18px ;\n}\n"},92:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=n(7),c=n(7),p=function(){function t(t){this.router=t}return t.prototype.canActivate=function(t,e){return!this.isPageRefresh()||(console.warn("Secondary view not allowed on refresh."),this.router.navigateByUrl(this.getUrlWithoutSecondary(e)),!1)},t.prototype.getUrlWithoutSecondary=function(t){for(var e=this.router.parseUrl(t.url),n=e.root;n&&n.children;)delete n.children.secondary,n=n.children[i.PRIMARY_OUTLET];return e},t.prototype.isPageRefresh=function(){return!this.router.navigated},t=o([a.Injectable(),r("design:paramtypes",[c.Router])],t)}();e.DoNotShowSecondaryOnRefreshGuard=p},93:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),a=function(){function t(){}return t=o([r.Component({selector:"main-view",styles:[n(94)],template:"\n\t\tThis is the main-view.\n\t\t<a [routerLink]=\"[{ foo: 'bar' }]\">Add optional params</a>\n\t"})],t)}();e.MainViewComponent=a},94:function(t,e){t.exports=":host {\n  border-left: 7px solid #CCCCCC ;\n  display: block ;\n  margin: 16px 0px 16px 0px ;\n  padding: 15px 0px 15px 20px ;\n}\n"},95:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),a=function(){function t(){}return t=o([r.Component({selector:"secondary-view",styles:[n(96)],template:"\n\t\tThis is the secondary-view.\n\t"})],t)}();e.SecondaryViewComponent=a},96:function(t,e){t.exports=":host {\n  border-left: 7px solid #FF3366 ;\n  display: block ;\n  margin: 16px 0px 16px 0px ;\n  padding: 15px 0px 15px 20px ;\n}\n"}},[88]);