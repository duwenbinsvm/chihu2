webpackJsonp([44],{186:function(n,l,t){"use strict";function e(n){return o._35(0,[(n()(),o._12(0,null,null,15,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;return"click"===l&&(e=!1!==u.pushPersonPage(n.context.$implicit.uid)&&e),e},b.b,b.a)),o._11(1097728,null,3,v.a,[y.a,k.a,o.m,o.J,[2,w.a]],null,null),o._31(335544320,1,{contentLabel:0}),o._31(603979776,2,{_buttons:1}),o._31(603979776,3,{_icons:1}),o._11(16384,null,0,P.a,[],null,null),(n()(),o._33(2,["\n            "])),(n()(),o._12(0,null,0,4,"ion-avatar",[["item-left",""]],null,null,null,null,null)),o._11(16384,null,0,C.a,[],null,null),(n()(),o._33(null,["\n                "])),(n()(),o._12(0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),o._33(null,["\n            "])),(n()(),o._33(2,["\n            "])),(n()(),o._12(0,null,2,1,"h2",[],null,null,null,null,null)),(n()(),o._33(null,["",""])),(n()(),o._33(2,["\n        "]))],null,function(n,l){n(l,10,0,l.context.$implicit.uuserimg),n(l,14,0,l.context.$implicit.uname)})}function u(n){return o._35(0,[(n()(),o._33(null,["\n"])),(n()(),o._12(0,null,null,9,"ion-content",[],[[2,"idark_content",null],[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,L.b,L.a)),o._11(4374528,null,0,O.a,[k.a,F.a,M.a,o.m,o.J,I.a,j.a,o.C,[2,x.a],[2,N.a]],null,null),(n()(),o._33(1,["\n    "])),(n()(),o._12(0,null,1,5,"ion-list",[],null,null,null,null,null)),o._11(16384,null,0,S.a,[k.a,o.m,o.J,F.a,R.j,M.a],null,null),(n()(),o._33(null,["\n\n        "])),(n()(),o._8(16777216,null,null,1,null,e)),o._11(802816,null,0,s.h,[o.W,o.R,o.v],{ngForOf:[0,"ngForOf"]},null),(n()(),o._33(null,["\n\n\n    "])),(n()(),o._33(1,["\n"]))],function(n,l){n(l,8,0,l.component.items)},function(n,l){n(l,1,0,l.component.isIdark,o._25(l,2).statusbarPadding,o._25(l,2)._hasRefresher)})}Object.defineProperty(l,"__esModule",{value:!0});var o=t(0),i=(t(56),t(28)),r=t(38),a=function(){function n(n,l,t,e){this.UserService=n,this.http=l,this.navCtrl=t,this.navParams=e,this.items=[],this.isIdark=this.UserService.isIdark,this.rootNavCtrl=e.get("rootNavCtrl"),this.id=this.navParams.data._id,this.getdata()}return n.prototype.getdata=function(){var n=this;this.UserService.presentLoadingDefault();var l=new i.d;l.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("https://www.devonhello.com/chihu2/myfork","id="+this.id,{headers:l}).subscribe(function(l){n.UserService.presentLoadingDismiss(),n.items=l.json()})},n.prototype.pushPersonPage=function(n){this.rootNavCtrl.push("PersonalPage",{_id:n})},n}(),_=function(){return function(){}}(),s=t(14),c=t(21),d=t(88),f=t(140),h=t(141),m=t(142),p=t(143),g=t(144),b=t(228),v=t(42),y=t(22),k=t(1),w=t(58),P=t(93),C=t(102),L=t(225),O=t(20),F=t(3),M=t(8),I=t(7),j=t(29),x=t(4),N=t(15),S=t(92),R=t(6),D=t(11),E=[],J=o._10({encapsulation:2,styles:E,data:{}}),U=o._9("page-fork-user",a,function(n){return o._35(0,[(n()(),o._12(0,null,null,1,"page-fork-user",[],null,null,null,u,J)),o._11(49152,null,0,a,[r.a,i.e,N.a,D.a],null,null)],null,null)},{},{},[]),z=t(89);t.d(l,"ForkUserPageModuleNgFactory",function(){return $});var A=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function e(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),B=function(n){function l(l){return n.call(this,l,[f.a,h.a,m.a,p.a,g.a,U],[])||this}return A(l,n),Object.defineProperty(l.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new s.j(this.parent.get(o.x))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new c.k),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new c.c),this.__FormBuilder_9},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new s.b,this._ɵba_1=new c.j,this._FormsModule_2=new c.d,this._ReactiveFormsModule_3=new c.i,this._IonicModule_4=new d.a,this._IonicPageModule_5=new d.b,this._ForkUserPageModule_6=new _,this._LAZY_LOADED_TOKEN_10=a,this._ForkUserPageModule_6},l.prototype.getInternal=function(n,l){return n===s.b?this._CommonModule_0:n===c.j?this._ɵba_1:n===c.d?this._FormsModule_2:n===c.i?this._ReactiveFormsModule_3:n===d.a?this._IonicModule_4:n===d.b?this._IonicPageModule_5:n===_?this._ForkUserPageModule_6:n===s.k?this._NgLocalization_7:n===c.k?this._ɵi_8:n===c.c?this._FormBuilder_9:n===z.a?this._LAZY_LOADED_TOKEN_10:l},l.prototype.destroyInternal=function(){},l}(o._7),$=new o.z(B,_)},225:function(n,l,t){"use strict";function e(n){return u._35(2,[u._31(402653184,1,{_fixedContent:0}),u._31(402653184,2,{_scrollContent:0}),(n()(),u._12(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),u._24(null,0),(n()(),u._12(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),u._24(null,1),u._24(null,2)],null,null)}t.d(l,"a",function(){return h}),l.b=e;var u=t(0),o=t(20),i=t(1),r=t(3),a=t(8),_=t(7),s=t(29),c=t(4),d=t(15),f=[],h=u._10({encapsulation:2,styles:f,data:{}});u._9("ion-content",o.a,function(n){return u._35(0,[(n()(),u._12(0,null,null,1,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,e,h)),u._11(4374528,null,0,o.a,[i.a,r.a,a.a,u.m,u.J,_.a,s.a,u.C,[2,c.a],[2,d.a]],null,null)],null,function(n,l){n(l,0,0,u._25(l,1).statusbarPadding,u._25(l,1)._hasRefresher)})},{color:"color",mode:"mode",fullscreen:"fullscreen",scrollDownOnLoad:"scrollDownOnLoad"},{ionScrollStart:"ionScrollStart",ionScroll:"ionScroll",ionScrollEnd:"ionScrollEnd"},["[ion-fixed],ion-fab","*","ion-refresher"])},228:function(n,l,t){"use strict";function e(n){return r._35(0,[(n()(),r._12(0,null,null,1,"ion-icon",[["name","reorder"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r._11(147456,null,0,s.a,[_.a,r.m,r.J],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"reorder")},function(n,l){n(l,0,0,r._25(l,1)._hidden)})}function u(n){return r._35(0,[(n()(),r._12(0,null,null,2,"ion-label",[],null,null,null,null,null)),r._11(16384,[[1,4]],0,a.a,[_.a,r.m,r.J,[8,null],[8,null],[8,null],[8,null]],null,null),r._24(null,2)],null,null)}function o(n){return r._35(0,[(n()(),r._12(0,null,null,1,"ion-reorder",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==r._25(n,1).onClick(t)&&e),e},e,h)),r._11(49152,null,0,d,[r.m],null,null)],null,null)}function i(n){return r._35(2,[r._31(671088640,1,{viewLabel:0}),r._24(null,0),(n()(),r._12(0,null,null,8,"div",[["class","item-inner"]],null,null,null,null,null)),(n()(),r._12(0,null,null,4,"div",[["class","input-wrapper"]],null,null,null,null,null)),r._24(null,1),(n()(),r._8(16777216,null,null,1,null,u)),r._11(16384,null,0,m.i,[r.W,r.R],{ngIf:[0,"ngIf"]},null),r._24(null,3),r._24(null,4),(n()(),r._8(16777216,null,null,1,null,o)),r._11(16384,null,0,m.i,[r.W,r.R],{ngIf:[0,"ngIf"]},null),(n()(),r._12(0,null,null,0,"div",[["class","button-effect"]],null,null,null,null,null))],function(n,l){var t=l.component;n(l,6,0,t._viewLabel),n(l,10,0,t._hasReorder)},null)}var r=t(0),a=t(59),_=t(1),s=t(41),c=t(145),d=function(){function n(n){this.elementRef=n,n.nativeElement.$ionComponent=this}return n.prototype.getReorderNode=function(){return Object(c.a)(this.elementRef.nativeElement,null)},n.prototype.onClick=function(n){n.preventDefault(),n.stopPropagation()},n}(),f=[],h=r._10({encapsulation:2,styles:f,data:{}}),m=(r._9("ion-reorder",d,function(n){return r._35(0,[(n()(),r._12(0,null,null,1,"ion-reorder",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==r._25(n,1).onClick(t)&&e),e},e,h)),r._11(49152,null,0,d,[r.m],null,null)],null,null)},{},{},[]),t(14)),p=t(42),g=t(22),b=t(58);t.d(l,"a",function(){return y}),l.b=i;var v=[],y=r._10({encapsulation:2,styles:v,data:{}});r._9("ion-list-header,ion-item,[ion-item],ion-item-divider",p.a,function(n){return r._35(0,[(n()(),r._12(0,null,null,4,"ion-list-header",[["class","item"]],null,null,null,i,y)),r._11(1097728,null,3,p.a,[g.a,_.a,r.m,r.J,[2,b.a]],null,null),r._31(335544320,1,{contentLabel:0}),r._31(603979776,2,{_buttons:1}),r._31(603979776,3,{_icons:1})],null,null)},{color:"color",mode:"mode"},{},["[item-start],[item-left],ion-checkbox:not([item-end]):not([item-right])","ion-label","*","ion-select,ion-input,ion-textarea,ion-datetime,ion-range,[item-content]","[item-end],[item-right],ion-radio,ion-toggle"])}});