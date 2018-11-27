!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ngxForms=t():e.ngxForms=t()}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=10)}([function(e,t){e.exports=require("@angular/core")},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(8),c=function(){function e(){this.components={},this.types={}}return e.prototype.addField=function(e,t,o){if(void 0===o&&(o=i.FormComponentType.Field),!e||!e.length)throw new Error("Failed to add new component. Type is incorrent, Type value: "+e);if(!t)throw new Error("Failed to add new component. Component is undefined");this.components[e]=t,this.types[e]=o},e.prototype.getField=function(e){if(!this.components[e]){var t=Object.keys(this.components).join(", ");throw new Error('Trying to use an unsupported field type "'+e+'". Supported types: '+t)}return this.components[e]},e.prototype.getType=function(e){return this.types[e]},e=n([r.Injectable()],e)}();t.DynamicFieldService=c},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[o].concat(i).concat([r]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<e.length;r++){var c=e[r];"number"==typeof c[0]&&n[c[0]]||(o&&!c[2]?c[2]=o:o&&(c[2]="("+c[2]+") and ("+o+")"),t.push(c))}},t}},function(e,t,o){var n={},r=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e,o){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,a=0,l=[],s=o(24);function f(e,t){for(var o=0;o<e.length;o++){var r=e[o],i=n[r.id];if(i){i.refs++;for(var c=0;c<i.parts.length;c++)i.parts[c](r.parts[c]);for(;c<r.parts.length;c++)i.parts.push(h(r.parts[c],t))}else{var a=[];for(c=0;c<r.parts.length;c++)a.push(h(r.parts[c],t));n[r.id]={id:r.id,refs:1,parts:a}}}}function d(e,t){for(var o=[],n={},r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[c]?n[c].parts.push(a):o.push(n[c]={id:c,parts:[a]})}return o}function u(e,t){var o=i(e.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),l.push(t);else if("bottom"===e.insertAt)o.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(e.insertAt.before,o);o.insertBefore(t,r)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return o.nc}();n&&(e.attrs.nonce=n)}return v(t,e.attrs),u(e,t),t}function v(e,t){Object.keys(t).forEach(function(o){e.setAttribute(o,t[o])})}function h(e,t){var o,n,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var l=a++;o=c||(c=m(t)),n=b.bind(null,o,l,!1),r=b.bind(null,o,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),u(e,t),t}(t),n=function(e,t,o){var n=o.css,r=o.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(n=s(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var c=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(c),a&&URL.revokeObjectURL(a)}.bind(null,o,t),r=function(){p(o),o.href&&URL.revokeObjectURL(o.href)}):(o=m(t),n=function(e,t){var o=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,o),r=function(){p(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var o=d(e,t);return f(o,t),function(e){for(var r=[],i=0;i<o.length;i++){var c=o[i];(a=n[c.id]).refs--,r.push(a)}e&&f(d(e,t),t);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete n[a.id]}}}};var y=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}();function b(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}},function(e,t){e.exports=require("@angular/forms")},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e.prototype.set=function(e){this.dataProvider=e},e.prototype.get=function(e){if(!this.dataProvider[e])throw new Error("Data Provider with name '"+e+"' was not found");return this.dataProvider[e]},e=n([r.Injectable()],e)}();t.DataService=i},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){this.selected=0,this.groups=[],this.watchers=[]}return e.prototype.add=function(e){var t=this;this.groups.push(e),this.groups.length>1&&(e.hidden=!0),this.watchers.forEach(function(e){return e.groups=t.groups})},e.prototype.select=function(e){this.groups.forEach(function(e){e.hidden=!0}),this.groups[e].hidden=!1,this.selected=e},e.prototype.reset=function(){this.groups=[]},e.prototype.addWatcher=function(e){this.watchers.push(e)},e=n([r.Injectable()],e)}();t.FormNavService=i},function(e,t){e.exports=require("@angular/common")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Field=0]="Field",e[e.Group=1]="Group",e[e.Array=2]="Array"}(t.FormComponentType||(t.FormComponentType={}))},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),c=o(16),a=o(18),l=o(20),s=o(25),f=o(27),d=o(29),u=o(31),p=o(33),m=o(37),v=o(1),h=function(){function e(e){this.dynamicFieldService=e,this.dynamicFieldService.addField("text",c.FormInputComponent),this.dynamicFieldService.addField("select",a.FormSelectComponent),this.dynamicFieldService.addField("editor",l.FormTextEditorComponent),this.dynamicFieldService.addField("textarea",d.FormTextareaComponent),this.dynamicFieldService.addField("hidden",u.FormInputHiddenComponent),this.dynamicFieldService.addField("user",p.FormUserComponent),this.dynamicFieldService.addField("radio",f.FormRadioComponent),this.dynamicFieldService.addField("checkbox",s.FormCheckboxComponent),this.dynamicFieldService.addField("label",m.FormLabelComponent)}var t;return e=n([i.Injectable(),r("design:paramtypes",["function"==typeof(t=void 0!==v.DynamicFieldService&&v.DynamicFieldService)&&t||Object])],e)}();t.PreloadService=h,t.Components=[c.FormInputComponent,a.FormSelectComponent,l.FormTextEditorComponent,d.FormTextareaComponent,u.FormInputHiddenComponent,p.FormUserComponent,f.FormRadioComponent,s.FormCheckboxComponent,m.FormLabelComponent]},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(11),function(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o])}(o(12))},function(e,t){e.exports=require("reflect-metadata")},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(7),c=o(4),a=o(13),l=o(14),s=o(39),f=o(43),d=o(48),u=o(54),p=o(55),m=o(5);t.DataService=m.DataService;var v=o(1);t.DynamicFieldService=v.DynamicFieldService;var h=o(9),y=function(){function e(){}return e=n([r.NgModule({imports:[i.CommonModule,p.BrowserAnimationsModule,c.ReactiveFormsModule,c.FormsModule,a.QuillModule,u.TagInputModule,d.FormNavModule],declarations:[h.Components,l.DynamicFieldDirective,s.DynamicFormComponent,f.DynamicPanelComponent],exports:[s.DynamicFormComponent],entryComponents:[h.Components],providers:[m.DataService,v.DynamicFieldService,h.PreloadService],schemas:[r.NO_ERRORS_SCHEMA]})],e)}();t.NgxFormModule=y},function(e,t){e.exports=require("ngx-quill")},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),c=o(4),a=o(15),l=o(1),s=o(9),f=function(){function e(e,t,o,n){this.resolver=e,this.container=t,this.dynamicFieldService=o,this.preloadService=n}var t,o,f,d,u,p;return e.prototype.ngOnChanges=function(){this.component&&(this.component.instance.field=this.field,this.component.instance.group=this.group,this.component.instance.model=this.model)},e.prototype.ngOnInit=function(){var e=this.dynamicFieldService.getField(this.field.type),t=this.resolver.resolveComponentFactory(e);this.component=this.container.createComponent(t),this.component.instance.field=this.field,this.component.instance.group=this.group,this.component.instance.model=this.model},n([i.Input(),r("design:type","function"==typeof(t=void 0!==a.IFieldConfig&&a.IFieldConfig)&&t||Object)],e.prototype,"field",void 0),n([i.Input(),r("design:type","function"==typeof(o=void 0!==c.FormGroup&&c.FormGroup)&&o||Object)],e.prototype,"group",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"model",void 0),e=n([i.Directive({selector:"[dynamicField]"}),r("design:paramtypes",["function"==typeof(f=void 0!==i.ComponentFactoryResolver&&i.ComponentFactoryResolver)&&f||Object,"function"==typeof(d=void 0!==i.ViewContainerRef&&i.ViewContainerRef)&&d||Object,"function"==typeof(u=void 0!==l.DynamicFieldService&&l.DynamicFieldService)&&u||Object,"function"==typeof(p=void 0!==s.PreloadService&&s.PreloadService)&&p||Object])],e)}();t.DynamicFieldDirective=f},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e=n([r.Component({selector:"form-input",template:o(17)})],e)}();t.FormInputComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold  col-form-label">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <input type="text" class="form-control" [attr.placeholder]="field.placeholder" [formControlName]="field.name">\n    </div>\n</div>\n'},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e=n([r.Component({selector:"form-select",template:o(19)})],e)}();t.FormSelectComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label" for="group">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <select [formControlName]="field.name" class="form-control">\n            <option *ngFor="let option of field.options" [ngValue]="option">{{option}}</option>\n        </select>\n    </div>\n</div>'},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){this.quillToolbar={toolbar:["bold","italic","underline","strike",{header:1},{header:2},{list:"ordered"},{list:"bullet"},"blockquote","code-block","link"]}}return e=n([r.Component({selector:"form-text-editor",template:o(21),styles:[o(22).toString()]})],e)}();t.FormTextEditorComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label" for="group" required>{{field.label}}\n        <span [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10 editor-container">\n        <quill-editor [modules]="quillToolbar" [formControlName]="field.name"></quill-editor>\n    </div>\n</div>\n'},function(e,t,o){var n=o(23);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(3)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(2)(!1)).push([e.i,"form-text-editor .editor-container {\n  margin-bottom: 40px; }\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,n=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e=n([r.Component({selector:"form-checkbox",template:o(26)})],e)}();t.FormCheckboxComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold  col-form-label">{{ field.label }}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <div class="row" *ngFor="let item of field.options">\n            <label class="col-md-6"><input type="checkbox" [formControlName]="field.name">{{ item }}</label>\n        </div>\n    </div>\n</div>'},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e=n([r.Component({selector:"form-radio",template:o(28)})],e)}();t.FormRadioComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold  col-form-label">{{field.label}}</label>\n    <div class="col-md-10">\n      <label  *ngFor="let item of field.options">\n        <input type="radio"  [value]="item" [formControlName]="field.name">{{item}}\n      </label>\n    </div>\n</div>\n'},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e=n([r.Component({selector:"form-textarea",template:o(30)})],e)}();t.FormTextareaComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold  col-form-label">{{field.label}}\n        <span [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <textarea class="form-control" rows="3" [attr.placeholder]="field.placeholder" [formControlName]="field.name"></textarea>\n    </div>\n</div>\n'},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e=n([r.Component({selector:"form-hidden",template:o(32)})],e)}();t.FormInputHiddenComponent=i},function(e,t){e.exports='<ng-container [formGroup]="group">\n    <input type="hidden" class="form-control" [formControlName]="field.name">\n</ng-container>\n'},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),c=o(34);o(35);var a=o(5),l=function(){function e(e){var t=this;this.dataService=e,this.emitModelChange=new i.EventEmitter,this.requestAutocompleteItems=function(e){var o=t.provider[t.field.providerMethod](e);return c.Observable.fromPromise(o)}}var t;return e.prototype.ngOnInit=function(){var e=this;this.group.controls[this.field.name].value&&this.group.controls[this.field.name].value.forEach(function(t){t.display||(t.display=t[e.field.settings.displayBy],t.value=t[e.field.settings.identifyBy])}),this.provider=this.dataService.get(this.field.provider)},e.prototype.change=function(e){this.emitModelChange.emit(this.emitModel)},n([i.Input(),r("design:type",Boolean)],e.prototype,"typeaheadOnly",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"emitModel",void 0),n([i.Input(),r("design:type",Number)],e.prototype,"maxItems",void 0),n([i.Output(),r("design:type",Object)],e.prototype,"emitModelChange",void 0),e=n([i.Component({selector:"form-user",template:o(36)}),r("design:paramtypes",["function"==typeof(t=void 0!==a.DataService&&a.DataService)&&t||Object])],e)}();t.FormUserComponent=l},function(e,t){e.exports=require("rxjs/Observable")},function(e,t){e.exports=require("rxjs/add/observable/fromPromise")},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label">{{ field.label }}\n        <span [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <tag-input [theme]="\'bootstrap\'" [formControlName]="field.name" name="items" [onlyFromAutocomplete]="true">\n            <tag-input-dropdown [autocompleteObservable]=\'requestAutocompleteItems\' [identifyBy]="field.settings.identifyBy" [displayBy]="field.settings.displayBy"\n                [focusFirstElement]="true">\n                <ng-template let-item="item" let-index="index">\n                    {{ item[field.settings.displayBy] }}\n                </ng-template>\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n</div>\n'},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e=n([r.Component({selector:"form-label",template:o(38)})],e)}();t.FormLabelComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold text-right">{{field.label}}:</label>\n    <div class="col-md-8">\n        <span>{{group.value[this.field.name]}}</span>\n    </div>\n</div>'},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),c=o(4),a=o(5),l=o(8),s=o(1),f=function(){function e(e,t,o){this.fb=e,this.dataService=t,this.dynamicFieldService=o}var t,f,d;return Object.defineProperty(e.prototype,"controls",{get:function(){return this.formConfig.fields.filter(function(e){return"button"!==e.type})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"changes",{get:function(){return this.form.valueChanges},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.form.valid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.form.value},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){var e=this;this.dataService.set(this.dataProvider),this.form=this.createForm(),this.model&&this.form.patchValue(this.model),this.formConfig.fields.forEach(function(t){t.lookup&&e.lookups.hasOwnProperty(t.lookup)&&(t.options=e.lookups[t.lookup],t.extract&&(t.options=t.options.map(function(e){return e[t.extract]})))}),this.navConfig=this.formConfig.form.filter(function(e){return!e.static})},e.prototype.ngOnChanges=function(){var e=this;if(this.form){var t=Object.keys(this.form.controls),o=this.controls.map(function(e){return e.name});t.filter(function(e){return!o.includes(e)}).forEach(function(t){return e.form.removeControl(t)}),o.filter(function(e){return!t.includes(e)}).forEach(function(t){var o=e.formConfig.fields.find(function(e){return e.name===t});e.form.addControl(t,e.createControl(o))})}},e.prototype.createForm=function(){var e=this,t=this.fb.group({});return this.controls.forEach(function(o){switch(e.dynamicFieldService.getType(o.type)){case l.FormComponentType.Array:t.addControl(o.name,new c.FormArray([]));break;case l.FormComponentType.Group:t.addControl(o.name,new c.FormGroup({}));break;default:t.addControl(o.name,e.createControl(o))}}),t},e.prototype.createControl=function(e){var t=e.disabled,o=e.required,n=e.minLength,r=e.maxLength,i=e.email,a=e.min,l=e.max,s=e.pattern,f=e.nullValidator,d=e.value,u=[];return void 0!==o&&o&&u.push(c.Validators.required),void 0!==n&&u.push(c.Validators.minLength(n)),void 0!==r&&u.push(c.Validators.maxLength(r)),void 0!==i&&u.push(c.Validators.email),void 0!==a&&u.push(c.Validators.min(a)),void 0!==l&&u.push(c.Validators.max(l)),void 0!==s&&u.push(c.Validators.pattern(s)),void 0!==f&&u.push(c.Validators.nullValidator),this.fb.control({disabled:t,value:d},u)},e.prototype.setDisabled=function(e,t){if(this.form.controls[e]){var o=t?"disable":"enable";this.form.controls[e][o]()}else this.formConfig.fields=this.formConfig.fields.map(function(o){return o.name===e&&(o.disabled=t),o})},e.prototype.setValue=function(e,t){this.form.controls[e].setValue(t,{emitEvent:!0})},n([i.Input(),r("design:type",Object)],e.prototype,"formConfig",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"model",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"dataProvider",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"lookups",void 0),e=n([i.Component({exportAs:"dynamicForm",selector:"dynamic-form",template:o(40),styles:[o(41).toString()]}),r("design:paramtypes",["function"==typeof(t=void 0!==c.FormBuilder&&c.FormBuilder)&&t||Object,"function"==typeof(f=void 0!==a.DataService&&a.DataService)&&f||Object,"function"==typeof(d=void 0!==s.DynamicFieldService&&s.DynamicFieldService)&&d||Object])],e)}();t.DynamicFormComponent=f},function(e,t){e.exports='<div class="row">\n    <div class="col-md-2">\n        <form-nav></form-nav>\n    </div>\n    <div class="col-md-10" [formGroup]="form">\n        <div *ngFor="let group of formConfig.form" [navTab]="group">\n            <dynamic-panel *ngFor="let panelConfig of group.panels" [panelConfig]="panelConfig" [fieldsConfig]="formConfig.fields"\n                [group]="form" [model]="model" [hidden]="group.hidden"></dynamic-panel>\n        </div>\n    </div>\n</div>'},function(e,t,o){var n=o(42);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(3)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".required-icon {\n  color: red; }\n",""])},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),c=o(44),a=function(){function e(){}return e.prototype.getFieldConfig=function(e){var t=c.find(this.fieldsConfig,{name:e});if(t)return t;throw new Error("Can't find field name: "+e+", please check config file!")},n([i.Input(),r("design:type",Object)],e.prototype,"panelConfig",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"group",void 0),n([i.Input(),r("design:type",Array)],e.prototype,"fieldsConfig",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"model",void 0),e=n([i.Component({selector:"dynamic-panel",template:o(45),styles:[o(46).toString()]})],e)}();t.DynamicPanelComponent=a},function(e,t){e.exports=require("lodash")},function(e,t){e.exports='<div class="card mb-3" [formGroup]="group">\n    <div class="card-header" *ngIf="panelConfig.label">\n        {{panelConfig.label}}\n    </div>\n    <div class="card-body">\n        <div *ngFor="let field of panelConfig.fields" dynamicField [field]="getFieldConfig(field)" [group]="group"\n            [model]="model"></div>\n    </div>\n</div>'},function(e,t,o){var n=o(47);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(3)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(2)(!1)).push([e.i,"dynamic-panel .panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ddd;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n  dynamic-panel .panel .panel-heading {\n    color: #333;\n    background-color: #f5f5f5;\n    padding: 10px 15px;\n    border-bottom: 1px solid #ddd;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n  dynamic-panel .panel .panel-body {\n    padding: 15px; }\n",""])},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(49),c=o(53),a=o(6),l=o(7),s=function(){function e(){}return e=n([r.NgModule({imports:[l.CommonModule],declarations:[i.FormNavComponent,c.NavDirective],exports:[i.FormNavComponent,c.NavDirective],providers:[a.FormNavService],schemas:[r.NO_ERRORS_SCHEMA]})],e)}();t.FormNavModule=s},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),c=o(6),a=function(){function e(e){this.ns=e,this.ref={groups:[]},e.addWatcher(this.ref)}var t;return e.prototype.select=function(e){this.ns.select(e)},e.prototype.getSelected=function(){return this.ns.selected},e.prototype.prev=function(){this.select(this.ns.selected-1)},e.prototype.next=function(){this.select(this.ns.selected+1)},e.prototype.disablePrev=function(){return this.ns.selected<1},e.prototype.disableNext=function(){return this.ns.selected>this.ref.groups.length-2},e.prototype.ngOnDestroy=function(){this.ns.reset()},n([i.Input(),r("design:type",Object)],e.prototype,"config",void 0),e=n([i.Component({selector:"form-nav",template:o(50),styles:[o(51).toString()]}),r("design:paramtypes",["function"==typeof(t=void 0!==c.FormNavService&&c.FormNavService)&&t||Object])],e)}();t.FormNavComponent=a},function(e,t){e.exports='<ul class="list-group mb-3">\n    <ng-container *ngFor="let item of ref.groups; let itemIndex = index">\n        <a class="list-group-item" [class.active]=\'itemIndex === getSelected()\' (click)="select(itemIndex)">{{item.label}}</a>\n    </ng-container>\n</ul>\n\n<div class="card">\n    <div class="card-body">\n        <div class="col-lg-12" ng-hide="!tab">\n            <button type="button" class="btn btn-primary ml-1" [disabled]="disablePrev()" (click)="prev()" title="Previous">Previous</button>\n            <button type="button" class="btn btn-primary ml-1" [disabled]="disableNext()" (click)="next()" title="Next">Next</button>\n        </div>\n    </div>\n</div>'},function(e,t,o){var n=o(52);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(3)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(2)(!1)).push([e.i,"",""])},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),c=o(6),a=function(){function e(e){this.navService=e}var t;return e.prototype.ngOnInit=function(){this.group.static||this.navService.add(this.group)},n([i.Input("navTab"),r("design:type",Object)],e.prototype,"group",void 0),e=n([i.Directive({selector:"[navTab]"}),r("design:paramtypes",["function"==typeof(t=void 0!==c.FormNavService&&c.FormNavService)&&t||Object])],e)}();t.NavDirective=a},function(e,t){e.exports=require("ngx-chips")},function(e,t){e.exports=require("@angular/platform-browser/animations")}])});