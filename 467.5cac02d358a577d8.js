"use strict";(self.webpackChunkangularexampleapp=self.webpackChunkangularexampleapp||[]).push([[467],{1467:(P,s,a)=>{a.r(s),a.d(s,{AUTH_ROUTES:()=>J});var h=a(7091),n=a(433),c=a(7579),l=a(2722),f=a(6626),o=a(2765),g=a(3933),S=a(3542),_=a.n(S);var e=a(8256);class C{static isEmailValidator(){return r=>function w(u,r){return"string"==typeof u&&_()(u,r)}(r.value)?null:{email:!0}}}C.\u0275fac=function(r){return new(r||C)},C.\u0275prov=e.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"});var O=a(901),x=a(9485),m=a(4429),d=a(6895),L=a(3074);class A{constructor(r,t){this.router=r,this.locale=t}}A.\u0275fac=function(r){return new(r||A)(e.Y36(o.F0),e.Y36(e.soG))},A.\u0275cmp=e.Xpm({type:A,selectors:[["app-language-selector"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:[[1,"btn-group"],["aria-expanded","false","data-bs-toggle","dropdown","type","button",1,"btn","dropdown-toggle","p-0"],[1,"dropdown-menu"],[1,"px-3","py-1"],[3,"href"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"button",1),e._uU(2),e.ALo(3,"uppercase"),e.qZA(),e.TgZ(4,"ul",2)(5,"li",3)(6,"a",4),e._uU(7,"Espa\xf1ol"),e.qZA()(),e.TgZ(8,"li",3)(9,"a",4),e._uU(10,"English"),e.qZA()()()()),2&r&&(e.xp6(2),e.hij(" ",e.lcZ(3,3,t.locale)," "),e.xp6(4),e.s9C("href",t.router.url,e.LSH),e.xp6(3),e.MGl("href","/en",t.router.url,"",e.LSH))},dependencies:[d.ez,d.gd],styles:["[_nghost-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{color:#0d47a1;background:transparent;border:none;box-shadow:none}[_nghost-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus-visible{outline:2px solid #035fcc}"],changeDetection:0});var U=a(9254),T=a(9794),$=a(529),R=a(5217),b=a(9990),N=a(3266);function D(u,r){1&u&&(e.ynx(0),e._UZ(1,"span",34),e.BQk())}class G{constructor(r,t,i,E,p,I,y,Y,X,H,q,j){this.eventBusService=r,this.formBuilder=t,this.authService=i,this.renderer=E,this.router=p,this.changeDetectorRef=I,this.alertService=y,this.utilService=Y,this.authRepository=X,this.activatedRoute=H,this.appConfig=q,this.document=j,this.destroy$=new c.x,this.window=this.document.defaultView,this.authRoutes=h.j,this.isButtonLogInLoading=!1,this.email=new n.NI("",[n.kI.required,C.isEmailValidator()]),this.password=new n.NI("",[n.kI.required]),this.logInForm=this.formBuilder.group({email:this.email,password:this.password})}ngAfterViewInit(){this.renderer.addClass(this.document.body,"bg-linear")}sendForm(){if(this.logInForm.valid){this.isButtonLogInLoading=!0;const r=this.logInForm.getRawValue();this.authService.logIn(r.email,r.password).pipe((0,l.R)(this.destroy$)).subscribe({next:t=>{this.handleLogInResponse(t)},error:t=>{this.handleLogInError(t)}})}}handleLogInResponse(r){const t=this.activatedRoute.snapshot.queryParams[f.X.customQueryParams.origin];if(r.user){if(!t)return this.router.navigate([g._.dashboard]).then(()=>(this.alertService.clearAll(),this.eventBusService.eventsBC.postMessage({type:m.LT.SESSION_CHANGED}),this.destroy$.next(!0),this.destroy$.unsubscribe()));this.window.location.href=decodeURIComponent(t)}return this.changeDetectorRef.detectChanges()}handleLogInError(r){const t=this.utilService.checkNetworkError(r);if(!t){const i=r.graphQLErrors;if(i.length)for(const E of i){const p=E;p.code===x.s.BAD_CREDENTIALS?this.alertService.create(O.DO.BAD_CREDENTIALS):p.code===x.s.BAD_REQUEST&&this.alertService.create(O.DO.GENERIC_ERROR,{code:x.s.BAD_REQUEST})}}this.isButtonLogInLoading=t,this.changeDetectorRef.detectChanges()}ngOnDestroy(){this.renderer.removeClass(this.document.body,"bg-linear")}}G.\u0275fac=function(r){return new(r||G)(e.Y36(m.Yd),e.Y36(n.qu),e.Y36(R.e),e.Y36(e.Qsj),e.Y36(o.F0),e.Y36(e.sBO),e.Y36(O.c9),e.Y36(b.f),e.Y36(N.O),e.Y36(o.gz),e.Y36(f.q),e.Y36(d.K0))},G.\u0275cmp=e.Xpm({type:G,selectors:[["app-log-in-page"]],standalone:!0,features:[e.jDz],decls:44,vars:16,consts:function(){let u,r,t,i,E;return u="\xA1Welcome back!",r="Password",t="Enter",i="don't have an account yet?",E="register",[[1,"login-page-container","d-flex","align-items-center","justify-content-center"],[1,"container","my-2"],[1,"row"],[1,"col-12"],[1,"card","text-center","login-page-card","mx-auto","py-3","position-relative"],[1,"card-header","text-end","m-0","p-0","pe-4","position-absolute"],[1,"card-body"],[1,"row","mb-4"],[1,"col-12","d-flex","justify-content-center"],["alt","Home","src","/assets/icons/icon-128x128.png",1,"ng-star-inserted"],[1,"mb-5"],u,[1,"row","justify-content-md-center",3,"formGroup","ngSubmit"],["loginFormRef","ngForm"],[1,"col-12","col-md-10"],[1,"form-floating","mb-3"],["id","floating-email","lowercase","","maxlength","150","placeholder","name@example.com","required","","trim","","type","email",1,"form-control",3,"formControl"],["for","floating-email",1,"text-start"],[1,"icon","fa-solid","fa-at","me-1"],[1,"invalid-feedback",3,"control","formRef"],[1,"col-12","col-md-10","mb-4"],[1,"form-floating"],["autocomplete","","id","floating-password","minlength","8","placeholder","Password","required","","type","password",1,"form-control",3,"formControl","keyup.enter"],["for","floating-password",1,"text-start"],[1,"icon","fa-solid","fa-lock","me-1"],r,[1,"col-12","mb-4"],["type","submit",1,"btn","btn-primary",3,"disabled"],[4,"ngIf"],t,i,[1,"ms-1",3,"routerLink"],E,[1,"ms-1","icon","fa-solid","fa-right-long"],["aria-hidden","true","role","status",1,"spinner-border","text-white","spinner-border-sm","me-1"]]},template:function(r,t){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"main")(5,"div",4)(6,"div",5),e._UZ(7,"app-language-selector"),e.qZA(),e.TgZ(8,"div",6)(9,"div",7)(10,"div",8),e._UZ(11,"img",9),e.qZA()(),e.TgZ(12,"h1",10),e.SDv(13,11),e.qZA(),e.TgZ(14,"form",12,13),e.NdJ("ngSubmit",function(){return t.sendForm()}),e.TgZ(16,"div",14)(17,"div",15),e._UZ(18,"input",16),e.TgZ(19,"label",17),e._UZ(20,"i",18),e._uU(21,"Email"),e.qZA(),e._UZ(22,"app-form-errors",19),e.qZA()(),e.TgZ(23,"div",20)(24,"div",21)(25,"input",22),e.NdJ("keyup.enter",function(E){return t.sendForm(),E.preventDefault()}),e.qZA(),e.TgZ(26,"label",23),e._UZ(27,"i",24),e.ynx(28),e.SDv(29,25),e.BQk(),e.qZA(),e._UZ(30,"app-form-errors",19),e.qZA()(),e.TgZ(31,"div",26)(32,"button",27),e.YNc(33,D,2,0,"ng-container",28),e.ynx(34),e.SDv(35,29),e.BQk(),e.qZA()(),e.TgZ(36,"div",3)(37,"p")(38,"span"),e.SDv(39,30),e.qZA(),e.TgZ(40,"a",31),e.ynx(41),e.SDv(42,32),e.BQk(),e._UZ(43,"i",33),e.qZA()()()()()()()()()()()),2&r){const i=e.MAs(15);e.xp6(14),e.ekj("needs-validation",!i.submitted)("was-validated",i.submitted),e.Q6J("formGroup",t.logInForm),e.xp6(4),e.Q6J("formControl",t.email),e.xp6(4),e.Q6J("control",t.email)("formRef",i),e.xp6(3),e.Q6J("formControl",t.password),e.xp6(5),e.Q6J("control",t.password)("formRef",i),e.xp6(2),e.ekj("is-loading-primary",t.isButtonLogInLoading),e.Q6J("disabled",t.isButtonLogInLoading),e.xp6(1),e.Q6J("ngIf",t.isButtonLogInLoading),e.xp6(7),e.Q6J("routerLink",t.authRoutes.register)}},dependencies:[$.JF,o.rH,L.A,n.UX,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.wO,n.nD,n.oH,n.sg,A,U.D,T.$,d.O5],styles:["[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.7rem}@media (min-width: 576px) and (min-height: 685px){[_nghost-%COMP%]   .login-page-container[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;margin:0;transform:translate(-50%,-50%)}}[_nghost-%COMP%]   .login-page-card[_ngcontent-%COMP%]{max-width:32.5rem}[_nghost-%COMP%]   .login-page-separator[_ngcontent-%COMP%]{width:40%;margin-top:1.5rem}[_nghost-%COMP%]   .log-in-remember-password[_ngcontent-%COMP%]{padding-left:.8rem}[_nghost-%COMP%]   .log-in-remember-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.875em}[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]{right:0}"],changeDetection:0});class M{constructor(r,t){this.authRepository=r,this.router=t}canActivate(){return new Promise(r=>this.authRepository.isLoggedInValue()?this.router.navigate([g._.dashboard]).then(()=>r(!1)):r(!0))}}M.\u0275fac=function(r){return new(r||M)(e.LFG(N.O),e.LFG(o.F0))},M.\u0275prov=e.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"});var k=a(3054);function Z(u,r){1&u&&(e.ynx(0),e._UZ(1,"span",46),e.BQk())}class F{constructor(r,t,i,E,p,I,y,Y,X,H,q){this.eventBusService=r,this.formBuilder=t,this.authRepository=i,this.authService=E,this.renderer=p,this.router=I,this.changeDetectorRef=y,this.alertService=Y,this.utilService=X,this.appConfig=H,this.document=q,this.destroy$=new c.x,this.authRoutes=h.j,this.renderer.addClass(this.document.body,"bg-linear"),this.showPassword=!1,this.isButtonRegisterLoading=!1,this.firstname=new n.NI("",[n.kI.required,n.kI.minLength(2)]),this.email=new n.NI("",[n.kI.required,C.isEmailValidator()]),this.password=new n.NI("",{validators:[n.kI.minLength(4),n.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{4,}")],updateOn:"change"}),this.terms=new n.NI(!1,[n.kI.requiredTrue]),this.registerForm=this.formBuilder.group({firstname:this.firstname,email:this.email,password:this.password,terms:this.terms})}updatePassword(){this.password.updateValueAndValidity({emitEvent:!1})}sendForm(){if(this.registerForm.valid){this.isButtonRegisterLoading=!0;const r=this.registerForm.getRawValue();this.authService.signup({firstname:r.firstname,email:r.email,password:r.password}).pipe((0,l.R)(this.destroy$)).subscribe({next:t=>{this.handleRegisterResponse(t)},error:t=>{this.handleRegisterError(t)}})}}handleRegisterResponse(r){return r.user?this.router.navigate([g._.dashboard]).then(()=>(this.alertService.clearAll(),this.eventBusService.eventsBC.postMessage({type:m.LT.SESSION_CHANGED}),this.destroy$.next(!0),this.destroy$.unsubscribe())):this.changeDetectorRef.detectChanges()}handleRegisterError(r){const t=this.utilService.checkNetworkError(r);if(!t){const i=r.graphQLErrors;if(i.length)for(const E of i)E.code===x.s.USER_DUPLICATED&&this.alertService.create(O.DO.USER_DUPLICATED)}this.isButtonRegisterLoading=t,this.changeDetectorRef.detectChanges()}togglePasswordType(){this.showPassword=!this.showPassword}ngOnDestroy(){this.renderer.removeClass(this.document.body,"bg-linear")}}F.\u0275fac=function(r){return new(r||F)(e.Y36(m.Yd),e.Y36(n.qu),e.Y36(N.O),e.Y36(R.e),e.Y36(e.Qsj),e.Y36(o.F0),e.Y36(e.sBO),e.Y36(O.c9),e.Y36(b.f),e.Y36(f.q),e.Y36(d.K0))},F.\u0275cmp=e.Xpm({type:F,selectors:[["app-register-page"]],standalone:!0,features:[e.jDz],decls:63,vars:28,consts:function(){let u,r,t,i,E,p,I;return u="\xA1Register, and create your first hero!",r="First name",t="Password",i="I've read and accept the terms and conditions and the privacy policy",E="Register",p="already have an account?",I="log in",[[1,"register-page-container","d-flex","align-items-center","justify-content-center"],[1,"container","my-2"],[1,"row"],[1,"col-12"],[1,"card","text-center","register-page-card","mx-auto","py-3","position-relative"],[1,"card-header","text-end","m-0","p-0","pe-4","position-absolute"],[1,"card-body"],[1,"row","mb-4"],[1,"col-12","d-flex","justify-content-center"],["alt","Home","src","/assets/icons/icon-128x128.png",1,"ng-star-inserted"],[1,"mb-5"],u,[1,"row","justify-content-md-center",3,"formGroup","ngSubmit"],["registerFormRef","ngForm"],[1,"col-12","col-md-10"],[1,"form-floating","mb-3"],["id","floating-first-name","maxlength","150","minlength","2","placeholder","name@example.com","required","","trim","","type","text",1,"form-control",3,"formControl"],["for","floating-first-name",1,"text-start"],[1,"icon","fa-solid","fa-circle-user","me-1"],r,[1,"invalid-feedback",3,"control","formRef"],["id","floating-email","lowercase","","maxlength","150","placeholder","name@example.com","required","","trim","","type","email",1,"form-control",3,"formControl"],["for","floating-email",1,"text-start"],[1,"icon","fa-solid","fa-at"],[1,"col-12","col-md-10","mb-3"],[1,"password-container"],[1,"form-floating"],["id","floating-password","placeholder","Password","required","",1,"form-control",3,"formControl","minLength","type","keyup"],["for","floating-password",1,"text-start"],[1,"icon","fa-solid","fa-lock","me-1"],t,[1,"password-eye-icon-container"],[1,"icon","fa-solid","fa-eye",3,"click","keyup"],[1,"form-check","mb-4"],["id","terms-input","required","","type","checkbox",1,"form-check-input",3,"formControl"],["for","terms-input",1,"register-terms-label","form-check-label","text-start"],i,[1,"ms-n3"],[1,"col-12","mb-4"],["type","submit",1,"btn","btn-primary",3,"disabled"],[4,"ngIf"],E,p,[1,"register-login-link","ms-1",3,"routerLink"],I,[1,"ms-1","icon","fa-solid","fa-right-long"],["aria-hidden","true","role","status",1,"spinner-border","text-white","spinner-border-sm","me-1"]]},template:function(r,t){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"main")(5,"div",4)(6,"div",5),e._UZ(7,"app-language-selector"),e.qZA(),e.TgZ(8,"div",6)(9,"div",7)(10,"div",8),e._UZ(11,"img",9),e.qZA()(),e.TgZ(12,"h1",10),e.SDv(13,11),e.qZA(),e.TgZ(14,"form",12,13),e.NdJ("ngSubmit",function(){return t.sendForm()}),e.TgZ(16,"div",14)(17,"div",15),e._UZ(18,"input",16),e.TgZ(19,"label",17),e._UZ(20,"i",18),e.ynx(21),e.SDv(22,19),e.BQk(),e.qZA(),e._UZ(23,"app-form-errors",20),e.qZA()(),e.TgZ(24,"div",14)(25,"div",15),e._UZ(26,"input",21),e.TgZ(27,"label",22),e._UZ(28,"i",23),e._uU(29," Email "),e.qZA(),e._UZ(30,"app-form-errors",20),e.qZA()(),e.TgZ(31,"div",24)(32,"div",25)(33,"div",26)(34,"input",27),e.NdJ("keyup",function(){return t.updatePassword()}),e.qZA(),e.TgZ(35,"label",28),e._UZ(36,"i",29),e.ynx(37),e.SDv(38,30),e.BQk(),e.qZA(),e._UZ(39,"app-form-errors",20),e.qZA(),e.TgZ(40,"div",31)(41,"i",32),e.NdJ("click",function(){return t.togglePasswordType()})("keyup",function(){return t.togglePasswordType()}),e.qZA()()()(),e.TgZ(42,"div",14)(43,"div",33),e._UZ(44,"input",34),e.TgZ(45,"label",35),e.ynx(46),e.SDv(47,36),e.BQk(),e.qZA(),e.TgZ(48,"div",37),e._UZ(49,"app-form-errors",20),e.qZA()()(),e.TgZ(50,"div",38)(51,"button",39),e.YNc(52,Z,2,0,"ng-container",40),e.ynx(53),e.SDv(54,41),e.BQk(),e.qZA()(),e.TgZ(55,"div",3)(56,"p")(57,"span"),e.SDv(58,42),e.qZA(),e.TgZ(59,"a",43),e.ynx(60),e.SDv(61,44),e.BQk(),e._UZ(62,"i",45),e.qZA()()()()()()()()()()()),2&r){const i=e.MAs(15);e.xp6(14),e.ekj("needs-validation",!i.submitted)("was-validated",i.submitted),e.Q6J("formGroup",t.registerForm),e.xp6(4),e.Q6J("formControl",t.firstname),e.xp6(5),e.Q6J("control",t.firstname)("formRef",i),e.xp6(3),e.Q6J("formControl",t.email),e.xp6(4),e.Q6J("control",t.email)("formRef",i),e.xp6(4),e.ekj("is-invalid",t.password.errors&&t.password.errors.passwordStrength),e.Q6J("formControl",t.password)("minLength",6)("type",t.showPassword?"text":"password"),e.xp6(5),e.Q6J("control",t.password)("formRef",i),e.xp6(2),e.ekj("active",t.showPassword),e.xp6(3),e.Q6J("formControl",t.terms),e.xp6(5),e.Q6J("control",t.terms)("formRef",i),e.xp6(2),e.ekj("is-loading-primary",t.isButtonRegisterLoading),e.Q6J("disabled",t.isButtonRegisterLoading),e.xp6(1),e.Q6J("ngIf",t.isButtonRegisterLoading),e.xp6(7),e.Q6J("routerLink",t.authRoutes.logIn)}},dependencies:[o.rH,L.A,n.UX,n._Y,n.Fj,n.Wl,n.JJ,n.JL,n.Q7,n.wO,n.nD,n.Zs,n.oH,n.sg,A,T.$,U.D,d.O5],styles:["[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.7rem}[_nghost-%COMP%]   .register-page-logo-image[_ngcontent-%COMP%]{width:11.25rem}@media (min-width: 576px) and (min-height: 890px){[_nghost-%COMP%]   .register-page-container[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;margin:0;transform:translate(-50%,-50%)}}[_nghost-%COMP%]   .register-page-card[_ngcontent-%COMP%]{max-width:32.5rem}[_nghost-%COMP%]   .register-page-separator[_ngcontent-%COMP%]{width:40%;margin-top:1.5rem}[_nghost-%COMP%]   .register-terms-label[_ngcontent-%COMP%]{font-size:.875em}[_nghost-%COMP%]   .password-voyeur[_ngcontent-%COMP%]{position:absolute;top:.3125rem;right:2.5rem;width:4.6875rem;height:auto}[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]{right:0}@media (max-width: 327px){[_nghost-%COMP%]   .register-login-link[_ngcontent-%COMP%]{display:block}}"],changeDetection:0});var z=a(2340);class Q{constructor(r,t,i,E,p,I){this.alertService=r,this.eventBusService=t,this.authRepository=i,this.activatedRoute=E,this.changeDetectorRef=p,this.document=I,this.destroy$=new c.x,this.window=this.document.defaultView}ngOnInit(){const r=this.activatedRoute.snapshot.queryParams[f.X.customQueryParams.origin],t=this.activatedRoute.snapshot.queryParams[f.X.customQueryParams.alertId];this.authRepository.$user.pipe((0,l.R)(this.destroy$)).subscribe(i=>{let E="";i&&i.language!==f.X.defaultLang&&(E=`/${i.language}`),this.authRepository.clear();const p=new URL(`${z.N.domain}${E||""}${h.j.logIn}`);r&&p.searchParams.append(f.X.customQueryParams.origin,r),t&&p.searchParams.append(f.X.customQueryParams.alertId,t),this.eventBusService.emit({type:m.a9.FINISH_LOGOUT,data:{path:p}})})}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}Q.\u0275fac=function(r){return new(r||Q)(e.Y36(O.c9),e.Y36(m.Yd),e.Y36(N.O),e.Y36(o.gz),e.Y36(e.sBO),e.Y36(d.K0))},Q.\u0275cmp=e.Xpm({type:Q,selectors:[["app-logout-page"]],standalone:!0,features:[e.jDz],decls:0,vars:0,template:function(r,t){},encapsulation:2,changeDetection:0});const J=[{path:h.n.logIn,component:G,canActivate:[M]},{path:h.n.register,component:F,canActivate:[M]},{path:h.n.logout,component:Q},{path:"**",redirectTo:k.X.error404}]},3776:(P,s,a)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=function l(f,o){var g,S;(0,h.default)(f),"object"===c(o)?(g=o.min||0,S=o.max):(g=arguments[1],S=arguments[2]);var _=encodeURI(f).split(/%..|./).length-1;return _>=g&&(typeof S>"u"||_<=S)};var h=function n(f){return f&&f.__esModule?f:{default:f}}(a(1362));function c(f){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(g){return typeof g}:function(g){return g&&"function"==typeof Symbol&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g})(f)}P.exports=s.default,P.exports.default=s.default},3542:(P,s,a)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=function x(m,d){if((0,h.default)(m),(d=(0,n.default)(d,g)).require_display_name||d.allow_display_name){var L=m.match(S);if(L){var A=L[1];if(m=m.replace(A,"").replace(/(^<|>$)/g,""),A.endsWith(" ")&&(A=A.substr(0,A.length-1)),!function O(m){var d=m.replace(/^"(.+)"$/,"$1");if(!d.trim())return!1;if(/[\.";<>]/.test(d)){if(d===m)return!1;if(d.split('"').length!==d.split('\\"').length)return!1}return!0}(A))return!1}else if(d.require_display_name)return!1}if(!d.ignore_max_length&&m.length>254)return!1;var U=m.split("@"),T=U.pop(),$=T.toLowerCase();if(d.host_blacklist.includes($))return!1;var R=U.join("@");if(d.domain_specific_validation&&("gmail.com"===$||"googlemail.com"===$)){var b=(R=R.toLowerCase()).split("+")[0];if(!(0,c.default)(b.replace(/\./g,""),{min:6,max:30}))return!1;for(var N=b.split("."),D=0;D<N.length;D++)if(!v.test(N[D]))return!1}if(!(!1!==d.ignore_max_length||(0,c.default)(R,{max:64})&&(0,c.default)(T,{max:254})))return!1;if(!(0,l.default)(T,{require_tld:d.require_tld})){if(!d.allow_ip_domain)return!1;if(!(0,f.default)(T)){if(!T.startsWith("[")||!T.endsWith("]"))return!1;var G=T.substr(1,T.length-2);if(0===G.length||!(0,f.default)(G))return!1}}if('"'===R[0])return R=R.slice(1,R.length-1),d.allow_utf8_local_part?e.test(R):w.test(R);for(var M=d.allow_utf8_local_part?B:_,k=R.split("."),Z=0;Z<k.length;Z++)if(!M.test(k[Z]))return!1;return!(d.blacklisted_chars&&-1!==R.search(new RegExp("[".concat(d.blacklisted_chars,"]+"),"g")))};var h=o(a(1362)),n=o(a(1994)),c=o(a(3776)),l=o(a(1909)),f=o(a(4761));function o(m){return m&&m.__esModule?m:{default:m}}var g={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[]},S=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,_=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,v=/^[a-z\d]+$/,w=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,B=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,e=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;P.exports=s.default,P.exports.default=s.default},1909:(P,s,a)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=function f(o,g){(0,h.default)(o),(g=(0,n.default)(g,l)).allow_trailing_dot&&"."===o[o.length-1]&&(o=o.substring(0,o.length-1)),!0===g.allow_wildcard&&0===o.indexOf("*.")&&(o=o.substring(2));var S=o.split("."),_=S[S.length-1];return!(g.require_tld&&(S.length<2||!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(_)||/\s/.test(_))||!g.allow_numeric_tld&&/^\d+$/.test(_))&&S.every(function(v){return!(v.length>63||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(v)||/[\uff01-\uff5e]/.test(v)||/^-|-$/.test(v)||!g.allow_underscores&&/_/.test(v))})};var h=c(a(1362)),n=c(a(1994));function c(o){return o&&o.__esModule?o:{default:o}}var l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1};P.exports=s.default,P.exports.default=s.default},4761:(P,s,a)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=function S(_){var v=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if((0,h.default)(_),!(v=String(v)))return S(_,4)||S(_,6);if("4"===v){if(!f.test(_))return!1;var w=_.split(".").sort(function(B,e){return B-e});return w[3]<=255}return"6"===v&&!!g.test(_)};var h=function n(_){return _&&_.__esModule?_:{default:_}}(a(1362)),c="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",l="(".concat(c,"[.]){3}").concat(c),f=new RegExp("^".concat(l,"$")),o="(?:[0-9a-fA-F]{1,4})",g=new RegExp("^("+"(?:".concat(o,":){7}(?:").concat(o,"|:)|")+"(?:".concat(o,":){6}(?:").concat(l,"|:").concat(o,"|:)|")+"(?:".concat(o,":){5}(?::").concat(l,"|(:").concat(o,"){1,2}|:)|")+"(?:".concat(o,":){4}(?:(:").concat(o,"){0,1}:").concat(l,"|(:").concat(o,"){1,3}|:)|")+"(?:".concat(o,":){3}(?:(:").concat(o,"){0,2}:").concat(l,"|(:").concat(o,"){1,4}|:)|")+"(?:".concat(o,":){2}(?:(:").concat(o,"){0,3}:").concat(l,"|(:").concat(o,"){1,5}|:)|")+"(?:".concat(o,":){1}(?:(:").concat(o,"){0,4}:").concat(l,"|(:").concat(o,"){1,6}|:)|")+"(?::((?::".concat(o,"){0,5}:").concat(l,"|(?::").concat(o,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");P.exports=s.default,P.exports.default=s.default},1362:(P,s)=>{function a(n){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(l){return typeof l}:function(l){return l&&"function"==typeof Symbol&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l})(n)}Object.defineProperty(s,"__esModule",{value:!0}),s.default=function h(n){if(!("string"==typeof n||n instanceof String)){var l=a(n);throw null===n?l="null":"object"===l&&(l=n.constructor.name),new TypeError("Expected a string but received a ".concat(l))}},P.exports=s.default,P.exports.default=s.default},1994:(P,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=function a(){var h=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;for(var c in n)typeof h[c]>"u"&&(h[c]=n[c]);return h},P.exports=s.default,P.exports.default=s.default}}]);