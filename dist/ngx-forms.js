!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ngxForms=t():e.ngxForms=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=require("@angular/core")},function(e,t){e.exports=require("@angular/forms")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.FIELD_DICT_TOKEN=new o.InjectionToken("fields"),function(e){e.And="and",e.Or="or"}(t.ConditionType||(t.ConditionType={}))},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(c=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}var c;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<e.length;r++){var c=e[r];null!=c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),t.push(c))}},t}},function(e,t,n){var o,r,i={},c=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),l=null,s=0,f=[],u=n(16);function p(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var c=0;c<r.parts.length;c++)r.parts[c](o.parts[c]);for(;c<o.parts.length;c++)r.parts.push(y(o.parts[c],t))}else{var a=[];for(c=0;c<o.parts.length;c++)a.push(y(o.parts[c],t));i[o.id]={id:o.id,refs:1,parts:a}}}}function d(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[c]?o[c].parts.push(a):n.push(o[c]={id:c,parts:[a]})}return n}function m(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=f[f.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,n);n.insertBefore(t,r)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return b(t,e.attrs),m(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=s++;n=l||(l=h(t)),o=j.bind(null,n,c,!1),r=j.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),m(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=u(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var c=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(c),a&&URL.revokeObjectURL(a)}.bind(null,n,t),r=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){v(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=c()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var c=n[r];(a=i[c.id]).refs--,o.push(a)}e&&p(d(e,t),t);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var g,O=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function j(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=O(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){this.selected=0,this.groups=[],this.watchers=[]}return e.prototype.add=function(e){var t=this;this.groups.push(e),this.groups.length>1&&(e.hidden=!0),this.watchers.forEach(function(e){return e.groups=t.groups})},e.prototype.select=function(e){this.groups.forEach(function(e){e.hidden=!0}),this.groups[e].hidden=!1,this.selected=e},e.prototype.reset=function(){this.groups.forEach(function(e){e.hidden=!1}),this.groups=[],this.selected=0},e.prototype.addWatcher=function(e){this.watchers.push(e)},e.prototype.getAllGroups=function(){return this.groups},e=o([r.Injectable()],e)}();t.FormNavService=i},function(e,t){e.exports=require("@angular/common")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(8),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(9))},function(e,t){e.exports=require("reflect-metadata")},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(6),c=n(1),a=n(10),l=n(11),s=n(12),f=n(17),u=n(21),p=n(27),d=n(28),m=n(29),v=n(31),h=n(33),b=n(37),y=n(39),g=n(41),O=n(43),j=n(45),x=n(2),C={text:m.FormInputComponent,select:v.FormSelectComponent,editor:h.FormTextEditorComponent,textarea:g.FormTextareaComponent,hidden:O.FormInputHiddenComponent,radio:y.FormRadioComponent,checkbox:b.FormCheckboxComponent,label:j.FormLabelComponent},R=function(){function e(){}var t;return t=e,e.forRoot=function(e){return Object.keys(e).forEach(function(t){return C[t]=e[t]}),{ngModule:t,providers:[{provide:x.FIELD_DICT_TOKEN,useValue:C}]}},e=t=o([r.NgModule({imports:[i.CommonModule,d.BrowserAnimationsModule,c.ReactiveFormsModule,c.FormsModule,a.QuillModule,p.TagInputModule,u.FormNavModule],declarations:[l.DynamicFieldDirective,s.DynamicFormComponent,f.DynamicPanelComponent,m.FormInputComponent,v.FormSelectComponent,h.FormTextEditorComponent,g.FormTextareaComponent,O.FormInputHiddenComponent,y.FormRadioComponent,b.FormCheckboxComponent,j.FormLabelComponent],exports:[s.DynamicFormComponent],entryComponents:[m.FormInputComponent,v.FormSelectComponent,h.FormTextEditorComponent,g.FormTextareaComponent,O.FormInputHiddenComponent,y.FormRadioComponent,b.FormCheckboxComponent,j.FormLabelComponent],providers:[{provide:x.FIELD_DICT_TOKEN,useValue:C}],schemas:[r.NO_ERRORS_SCHEMA]})],e)}();t.NgxFormModule=R},function(e,t){e.exports=require("ngx-quill")},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),a=n(1),l=n(2),s=n(2),f=function(){function e(e,t,n,o){this.resolver=e,this.container=t,this.fb=n,this.inputs=o}var t,n,f,u,p,d;return e.prototype.ngOnInit=function(){if(!this.group)throw new Error("group is not set");var e=this.inputs[this.field.type],t=this.resolver.resolveComponentFactory(e);this.component=this.container.createComponent(t),this.component.instance.field=this.field,this.component.instance.group=this.group,this.component.instance.model=this.model,this.group.addControl(this.field.name,this.createControl(this.field)),this.model&&this.model[this.field.name]&&this.group.get(this.field.name).patchValue(this.model[this.field.name])},e.prototype.createControl=function(e){var t=e.disabled,n=e.required,o=e.minLength,r=e.maxLength,i=e.email,c=e.min,l=e.max,s=e.pattern,f=e.value,u=[];return void 0!==n&&n&&u.push(a.Validators.required),void 0!==o&&u.push(a.Validators.minLength(o)),void 0!==r&&u.push(a.Validators.maxLength(r)),void 0!==i&&u.push(a.Validators.email),void 0!==c&&u.push(a.Validators.min(c)),void 0!==l&&u.push(a.Validators.max(l)),void 0!==s&&u.push(a.Validators.pattern(s)),this.fb.control({disabled:t,value:f},u)},e.prototype.ngOnDestroy=function(){this.component&&this.component.destroy()},o([c.Input(),r("design:type","function"==typeof(t=void 0!==s.FieldConfig&&s.FieldConfig)?t:Object)],e.prototype,"field",void 0),o([c.Input(),r("design:type","function"==typeof(n=void 0!==a.FormGroup&&a.FormGroup)?n:Object)],e.prototype,"group",void 0),o([c.Input(),r("design:type",Object)],e.prototype,"model",void 0),e=o([c.Directive({selector:"[dynamicField]"}),i(3,c.Inject(l.FIELD_DICT_TOKEN)),r("design:paramtypes",["function"==typeof(f=void 0!==c.ComponentFactoryResolver&&c.ComponentFactoryResolver)?f:Object,"function"==typeof(u=void 0!==c.ViewContainerRef&&c.ViewContainerRef)?u:Object,"function"==typeof(p=void 0!==a.FormBuilder&&a.FormBuilder)?p:Object,"function"==typeof(d=void 0!==l.FieldDictionary&&l.FieldDictionary)?d:Object])],e)}();t.DynamicFieldDirective=f},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n(1),a=n(2),l=function(){function e(){}var t;return Object.defineProperty(e.prototype,"changes",{get:function(){return this.form.valueChanges},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.form.valid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.form.value},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rawValue",{get:function(){return this.form.getRawValue()},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){var e=this;this.form=new c.FormGroup({});var t=[];this.formConfig.form.forEach(function(n){n.fields&&(t=t.concat(n.fields)),n.panels&&n.panels.forEach(function(e){e.fields&&(t=t.concat(e.fields))}),n.enableWhen&&!e.checkRules(n,e.model)&&t.forEach(function(e){return e.disabled=!0})}),t.forEach(function(t){if(t.lookup&&e.lookups){var n="string"==typeof t.lookup?{name:t.lookup,extract:null}:t.lookup;t.options=n.extract?e.lookups[n.name].map(function(e){return e[n.extract]}):e.lookups[n.name]}else;})},e.prototype.checkRules=function(e,t){var n=!0;if(e.enableWhen){var o=e.enableWhen;if(0==o.rules.length)return!0;var r=function(n){var o,r=t[n.field]||(o=e.fields.find(function(e){return e.name===n.field}))&&o.value||"";return Array.isArray(n.equals)||(n.equals=[n.equals]),n.equals.indexOf(r)>-1};return o.type!==a.ConditionType.Or&&o.type||(n=o.rules.some(r)),o.type===a.ConditionType.And&&(n=o.rules.every(r)),n}},o([i.Input(),r("design:type","function"==typeof(t=void 0!==a.FormConfig&&a.FormConfig)?t:Object)],e.prototype,"formConfig",void 0),o([i.Input(),r("design:type",Object)],e.prototype,"model",void 0),o([i.Input(),r("design:type",Object)],e.prototype,"lookups",void 0),e=o([i.Component({exportAs:"dynamicForm",selector:"dynamic-form",template:n(13),styles:[n(14).toString()]})],e)}();t.DynamicFormComponent=l},function(e,t){e.exports='<div class="row">\n    <div class="col-md-2">\n        <form-nav [form]="form"></form-nav>\n    </div>\n    <div class="col-md-10" [formGroup]="form">\n        <div *ngFor="let panel of formConfig.form" [navTab]="panel">\n\n            <ng-container *ngIf="panel.fields">\n                <dynamic-panel [panelConfig]="panel" [group]="form" [model]="model" [hidden]="panel.hidden"></dynamic-panel>\n            </ng-container>\n\n            <ng-container *ngIf="panel.panels">\n                <dynamic-panel *ngFor="let panelConfig of panel.panels" [panelConfig]="panelConfig" [group]="form"\n                    [model]="model" [hidden]="panel.hidden"></dynamic-panel>\n            </ng-container>\n        </div>\n    </div>\n</div>'},function(e,t,n){var o=n(15);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".required-icon {\n  color: red; }\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=function(){function e(){}return o([i.Input(),r("design:type",Object)],e.prototype,"panelConfig",void 0),o([i.Input(),r("design:type",Object)],e.prototype,"group",void 0),o([i.Input(),r("design:type",Object)],e.prototype,"model",void 0),e=o([i.Component({selector:"dynamic-panel",template:n(18),styles:[n(19).toString()]})],e)}();t.DynamicPanelComponent=c},function(e,t){e.exports='<div class="card mb-3" [formGroup]="group">\n    <div class="card-header" *ngIf="panelConfig.label">\n        {{panelConfig.label}}\n    </div>\n    <div class="card-body">\n        <div *ngFor="let field of panelConfig.fields" dynamicField [field]="field" [group]="group" [model]="model" class="mb-2"></div>\n    </div>\n</div>'},function(e,t,n){var o=n(20);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"dynamic-panel .panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ddd;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n  dynamic-panel .panel .panel-heading {\n    color: #333;\n    background-color: #f5f5f5;\n    padding: 10px 15px;\n    border-bottom: 1px solid #ddd;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n  dynamic-panel .panel .panel-body {\n    padding: 15px; }\n",""])},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(22),c=n(26),a=n(5),l=n(6),s=function(){function e(){}return e=o([r.NgModule({imports:[l.CommonModule],declarations:[i.FormNavComponent,c.NavDirective],exports:[i.FormNavComponent,c.NavDirective],providers:[a.FormNavService],schemas:[r.NO_ERRORS_SCHEMA]})],e)}();t.FormNavModule=s},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n(5),a=n(1),l=function(){function e(e){this.ns=e,this.ref={groups:[]},this.subscriptions=[],e.addWatcher(this.ref)}var t,l;return e.prototype.ngAfterContentInit=function(){for(var e=this,t=(Object.keys(this.form.controls),function(t){var n=[];t.fields&&(n=n.concat(t.fields)),t.panels&&t.panels.forEach(function(e){e.fields&&(n=n.concat(e.fields))}),t.controls=n.filter(function(e){return e.required}).map(function(t){return e.form.get(t.name)}),0===t.controls.length?t.valid=!0:t.controls.forEach(function(n){e.subscriptions.push(n.statusChanges.subscribe(function(){t.valid=t.controls.every(function(e){return e.valid})}))})}),n=0,o=this.ref.groups;n<o.length;n++){t(o[n])}},e.prototype.select=function(e){this.ns.select(e)},e.prototype.getSelected=function(){return this.ns.selected},e.prototype.prev=function(){this.select(this.ns.selected-1)},e.prototype.next=function(){this.select(this.ns.selected+1)},e.prototype.disablePrev=function(){return this.ns.selected<1},e.prototype.disableNext=function(){return this.ns.selected>this.ref.groups.length-2},e.prototype.ngOnDestroy=function(){this.subscriptions.forEach(function(e){return e.unsubscribe()}),this.ns.reset()},o([i.Input(),r("design:type","function"==typeof(t=void 0!==a.FormGroup&&a.FormGroup)?t:Object)],e.prototype,"form",void 0),e=o([i.Component({selector:"form-nav",template:n(23),styles:[n(24).toString()]}),r("design:paramtypes",["function"==typeof(l=void 0!==c.FormNavService&&c.FormNavService)?l:Object])],e)}();t.FormNavComponent=l},function(e,t){e.exports='<ul class="list-group mb-3">\n    <ng-container *ngFor="let item of ref.groups; let itemIndex = index">\n        <a class="list-group-item" [class.active]=\'itemIndex === getSelected()\' (click)="select(itemIndex)">\n            <i class="fa fa-check-circle-o fa-2x" [ngClass]="item.valid ? \'text-success\' : \'text-secondary\'"></i>\n            {{item.label}}</a>\n    </ng-container>\n</ul>\n<div class="card">\n    <div class="card-body">\n        <div class="col-lg-12" ng-hide="!tab">\n            <button type="button" class="btn btn-primary ml-1" [disabled]="disablePrev()" (click)="prev()" title="Previous">Previous</button>\n            <button type="button" class="btn btn-primary ml-1" [disabled]="disableNext()" (click)="next()" title="Next">Next</button>\n        </div>\n    </div>\n</div>'},function(e,t,n){var o=n(25);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"",""])},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n(5),a=function(){function e(e){this.navService=e}var t;return e.prototype.ngOnInit=function(){this.panel.static||this.navService.add(this.panel)},o([i.Input("navTab"),r("design:type",Object)],e.prototype,"panel",void 0),e=o([i.Directive({selector:"[navTab]"}),r("design:paramtypes",["function"==typeof(t=void 0!==c.FormNavService&&c.FormNavService)?t:Object])],e)}();t.NavDirective=a},function(e,t){e.exports=require("ngx-chips")},function(e,t){e.exports=require("@angular/platform-browser/animations")},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e=o([r.Component({selector:"form-input",template:n(30)})],e)}();t.FormInputComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <input type="text" class="form-control" [attr.placeholder]="field.placeholder" [formControlName]="field.name">\n    </div>\n</div>\n'},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e=o([r.Component({selector:"form-select",template:n(32)})],e)}();t.FormSelectComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label" for="group">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <select [formControlName]="field.name" class="form-control">\n            <option *ngFor="let option of field.options" [ngValue]="option">{{option}}</option>\n        </select>\n    </div>\n</div>'},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){this.quillToolbar={toolbar:["bold","italic","underline","strike",{header:1},{header:2},{list:"ordered"},{list:"bullet"},"blockquote","code-block","link"]}}return e=o([r.Component({selector:"form-text-editor",template:n(34),styles:[n(35).toString()]})],e)}();t.FormTextEditorComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10 editor-container">\n        <quill-editor [modules]="quillToolbar" [formControlName]="field.name"></quill-editor>\n    </div>\n</div>'},function(e,t,n){var o=n(36);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"form-text-editor .editor-container {\n  margin-bottom: 40px; }\n\nform-text-editor .ql-container.ql-disabled {\n  background-color: #e9ecef; }\n",""])},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e=o([r.Component({selector:"form-checkbox",template:n(38)})],e)}();t.FormCheckboxComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <input type="checkbox" class="form-control" [formControlName]="field.name">\n    </div>\n</div>\n'},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e=o([r.Component({selector:"form-radio",template:n(40)})],e)}();t.FormRadioComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold  col-form-label">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <label *ngFor="let item of field.options">\n            <input type="radio" [value]="item" [formControlName]="field.name">{{item}}\n        </label>\n    </div>\n</div>'},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e=o([r.Component({selector:"form-textarea",template:n(42)})],e)}();t.FormTextareaComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <textarea class="form-control" rows="3" [attr.placeholder]="field.placeholder" [formControlName]="field.name"></textarea>\n    </div>\n</div>'},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e=o([r.Component({selector:"form-hidden",template:n(44)})],e)}();t.FormInputHiddenComponent=i},function(e,t){e.exports='<ng-container [formGroup]="group">\n    <input type="hidden" class="form-control" [formControlName]="field.name">\n</ng-container>\n'},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e=o([r.Component({selector:"form-label",template:n(46)})],e)}();t.FormLabelComponent=i},function(e,t){e.exports='<div class="row">\n    <label class="col-md-2 font-weight-bold col-form-label">{{field.label}}</label>\n    <div class="col-md-10">\n        <span>{{group.value[this.field.name]}}</span>\n    </div>\n</div>'}])});