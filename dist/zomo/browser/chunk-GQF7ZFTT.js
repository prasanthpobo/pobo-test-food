import{a as Z,b as G,c as J}from"./chunk-44PR2KRX.js";import"./chunk-WXI33M2S.js";import{a as f}from"./chunk-HLE7PIBG.js";import{$b as $,Da as R,Fa as L,G as F,Ha as x,Hb as g,J as T,Kb as v,M as p,Q as N,R as P,Ra as r,Sa as _,Ta as S,Ya as u,Za as b,_ as M,_a as j,ac as U,bc as z,ca as m,cc as Q,da as y,dc as V,ec as Y,fc as K,gc as q,la as E,na as c,rb as H,sa as I,ua as C,va as w,vb as W,wa as k,xa as i,ya as n,yb as D,za as s}from"./chunk-PHJPGMFY.js";var X=(()=>{let e=class e{ngOnInit(){document.body.classList.add("white-bg")}ngOnDestroy(){document.body.classList.remove("white-bg")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-coming-soon"]],standalone:!0,features:[u],decls:31,vars:0,consts:[[1,"fog"],[1,"absolute-bg"],[1,"fog-container"],[1,"fog-img","fog-img-first"],[1,"fog-img","fog-img-second"],[1,"coming-soon"],[1,"coming-soon-text"],[1,"notify-section"],["method","post","id","notify-form"],[1,"custom-group"],["type","email","name","email","placeholder","Enter your email","required","",1,"form-control"],[1,"btn","primary-btn","theme-btn"],[1,"success-msg","text-white","mb-0","mt-3","d-none"],[1,"coming-soon-social"],["href","https://www.facebook.com","target","_blank",1,"social-link"],[1,"ri-facebook-fill"],["href","https://www.instagram.com","target","_blank",1,"social-link"],[1,"ri-instagram-line"],[1,"ri-twitter-line"],[1,"ri-pinterest-line"],[1,"copyright-box"]],template:function(o,d){o&1&&(i(0,"section",0),s(1,"div",1),i(2,"div",2),s(3,"div",3)(4,"div",4),n(),i(5,"div",5)(6,"div",6)(7,"h2"),r(8,"Stay Tuned ! we\u2019ll be live soon..."),n(),i(9,"p"),r(10," We've had a great team working on something amazing, and we're almost ready to present it to the public. improved, comparable content "),n(),i(11,"div",7)(12,"form",8)(13,"div",9),s(14,"input",10),i(15,"button",11),r(16,"notify me"),n()(),i(17,"h5",12),r(18," Thank You! "),n()()(),i(19,"div",13)(20,"a",14),s(21,"i",15),n(),i(22,"a",16),s(23,"i",17),n(),i(24,"a",16),s(25,"i",18),n(),i(26,"a",16),s(27,"i",19),n()()()(),i(28,"div",20)(29,"p"),r(30,"@ Copyright 2024 ZOFood Point. All rights Reserved."),n()()())}});let t=e;return t})();var be=()=>["/home/classic"],ee=(()=>{let e=class e{constructor(){this.breadcrumb={title:"Cart",page:"Home",sub_page:"Cart"}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-empty-cart"]],standalone:!0,features:[u],decls:12,vars:3,consts:[[3,"breadcrumb"],[1,"empty-cart-section","section-b-space"],[1,"container"],[1,"empty-cart-image"],["src","assets/images/empty-cart.svg","alt","empty-cart",1,"img-fluid","img"],[1,"btn","theme-outline","restaurant-btn",3,"routerLink"]],template:function(o,d){o&1&&(s(0,"app-breadcrumb",0),i(1,"section",1)(2,"div",2)(3,"div",3)(4,"div"),s(5,"img",4),i(6,"h2"),r(7,"It\u2019s empty in your cart"),n(),i(8,"h5"),r(9,"To browse more restaurants, visit the main page."),n(),i(10,"a",5),r(11,"see restaurant near you"),n()()()()()),o&2&&(c("breadcrumb",d.breadcrumb),m(10),c("routerLink",b(2,be)))},dependencies:[f,v,g]});let t=e;return t})();var ie=(()=>{let e=class e{constructor(a){this.http=a}getFaq(){return this.http.get("assets/json/faq.json")}};e.\u0275fac=function(o){return new(o||e)(T(D))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function ve(t,e){if(t&1&&r(0),t&2){let l=x().$implicit;S(" ",l.title," ")}}function he(t,e){if(t&1&&r(0),t&2){let l=x().$implicit;S(" ",l.item," ")}}function ye(t,e){if(t&1&&(i(0,"li"),r(1),n()),t&2){let l=e.$implicit;m(),_(l.item)}}function xe(t,e){if(t&1&&(i(0,"ul"),w(1,ye,2,1,"li",null,C),n()),t&2){let l=x().$implicit;m(),k(l.data)}}function _e(t,e){if(t&1&&E(0,ve,1,1)(1,he,1,1)(2,xe,3,0,"ul"),t&2){let l=e.$implicit;I(0,l.title?0:-1),m(),I(1,l.item?1:-1),m(),I(2,l.data?2:-1)}}function Se(t,e){if(t&1&&w(0,_e,3,3,null,null,C),t&2){let l=x().$implicit;k(l.data)}}function Ce(t,e){if(t&1&&(i(0,"div",10)(1,"h2",11)(2,"button",12),r(3),n()(),i(4,"div",13)(5,"div",14),E(6,Se,2,0,"ng-template"),n()()()),t&2){let l=e.$implicit;c("collapsed",l.title!=="I want to track my order"),m(3),_(l.title)}}var oe=(()=>{let e=class e{constructor(a){this.faqServices=a,this.breadcrumb={title:"FAQ",page:"Home",sub_page:"FAQ"}}ngOnInit(){this.faqServices.getFaq().subscribe(a=>{this.faq=a.faq}),document.body.classList.add("bg-color")}ngOnDestroy(){document.body.classList.remove("bg-color")}};e.\u0275fac=function(o){return new(o||e)(y(ie))},e.\u0275cmp=p({type:e,selectors:[["app-faq"]],standalone:!0,features:[u],decls:14,vars:2,consts:[[3,"breadcrumb"],[1,"section-b-space"],[1,"container"],[1,"faq-title"],[1,"row","g-4"],[1,"col-xl-4"],[1,"side-img"],["src","assets/images/faq.svg","alt","faq",1,"img-fluid","img"],[1,"col-xl-8"],["ngbAccordion","",1,"accordion","accordion-flush","help-accordion",3,"closeOthers"],["ngbAccordionItem","",1,"accordion-item",3,"collapsed"],["ngbAccordionHeader","",1,"accordion-header"],["ngbAccordionButton","",1,"accordion-button"],["ngbAccordionCollapse","",1,"accordion-collapse","collapse","show"],["ngbAccordionBody","",1,"accordion-body"]],template:function(o,d){o&1&&(s(0,"app-breadcrumb",0),i(1,"section",1)(2,"div",2)(3,"div",3)(4,"h2"),r(5,"Frequently Asked Questions"),n()(),i(6,"div",4)(7,"div",5)(8,"div",6),s(9,"img",7),n()(),i(10,"div",8)(11,"div",9),w(12,Ce,7,2,"div",10,C),n()()()()()),o&2&&(c("breadcrumb",d.breadcrumb),m(11),c("closeOthers",!0),m(),k(d.faq))},dependencies:[f,K,z,Y,V,Q,$,U]});let t=e;return t})();var we=()=>["/home/classic"],re=(()=>{let e=class e{constructor(){this.breadcrumb={title:"404 Not Found",page:"Home",sub_page:"404"}}ngOnInit(){document.body.classList.add("white-bg")}ngOnDestroy(){document.body.classList.remove("white-bg")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-not-found"]],standalone:!0,features:[u],decls:9,vars:3,consts:[[3,"breadcrumb"],[1,"error-section","pt-0"],[1,"container"],[1,"banner-content","text-center"],["src","assets/images/404.png","alt","404",1,"img-fluid","banner-img","mx-auto"],[1,"btn","theme-outline","d-inline-flex","mx-auto",3,"routerLink"]],template:function(o,d){o&1&&(s(0,"app-breadcrumb",0),i(1,"section",1)(2,"div",2)(3,"div",3),s(4,"img",4),i(5,"p"),r(6," The page you are looking for could not be found. The link to this address may be outdated or we may have moved the since you last bookmarked it. "),n(),i(7,"a",5),r(8,"Back To Home"),n()()()()),o&2&&(c("breadcrumb",d.breadcrumb),m(7),c("routerLink",b(2,we)))},dependencies:[f,v,g]});let t=e;return t})();var ke=()=>["/home/classic"],ae=(()=>{let e=class e{constructor(){this.breadcrumb={title:"One Time Password",page:"Home",sub_page:"OTP"}}ngOnInit(){document.body.classList.add("white-bg")}ngOnDestroy(){document.body.classList.remove("white-bg")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-otp"]],standalone:!0,features:[u],decls:18,vars:3,consts:[[3,"breadcrumb"],[1,"login-hero-section","section-b-space"],[1,"container"],[1,"row"],[1,"col-xl-5","col-lg-6","col-md-10","m-auto"],[1,"login-data"],[1,"otp-form"],[1,"mb-0","dark-text"],[1,"otp-number","dark-text"],[1,"otp-box","gap-sm-3","gap-2"],[1,"form-input","mb-0"],["type","text","formControlName","otp","maxlength","5","oninput","this.value = this.value?.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');","onKeyPress","if(this.value.length==5) return false;"],[1,"btn","theme-btn","submit-btn","w-100","rounded-2",3,"routerLink"]],template:function(o,d){o&1&&(s(0,"app-breadcrumb",0),i(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"form",6)(7,"h2",7),r(8,"OTP"),n(),i(9,"h6"),r(10,"We have sent a verification code to"),n(),i(11,"h5",8),r(12,"+1 (692)52 - 95555"),n(),i(13,"div",9)(14,"div",10),s(15,"input",11),n()(),i(16,"a",12),r(17,"CONTINUE"),n()()()()()()()),o&2&&(c("breadcrumb",d.breadcrumb),m(16),c("routerLink",b(2,ke)))},dependencies:[f,v,g],styles:[".inner-otp[_ngcontent-%COMP%]{left:0;position:sticky}.inner-otp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:15px;letter-spacing:41px;border:0;background-image:linear-gradient(to left,#bdbdbd 70%,#fff0 0%);background-position:bottom;background-size:50px 1px;background-repeat:repeat-x;background-position-x:35px;width:300px;min-width:300px;background-color:transparent}"]});let t=e;return t})();var Ee=()=>["/pages/sign-up"],Fe=()=>["/home/classic"],me=(()=>{let e=class e{constructor(){this.breadcrumb={title:"Login",page:"Home",sub_page:"Login"}}ngOnInit(){document.body.classList.add("white-bg")}ngOnDestroy(){document.body.classList.remove("white-bg")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-sign-in"]],standalone:!0,features:[u],decls:26,vars:5,consts:[[3,"breadcrumb"],[1,"login-hero-section","section-b-space"],[1,"container"],[1,"row"],[1,"col-xl-5","col-lg-6","col-md-10","m-auto"],[1,"login-data"],[1,"auth-form"],[3,"routerLink"],[1,"theme-color"],[1,"form-input"],["type","tel","placeholder","Enter your number",1,"form-control"],[1,"ri-phone-line"],["type","password","placeholder","Enter your password",1,"form-control"],[1,"ri-lock-password-line"],[1,"btn","theme-btn","submit-btn","w-100","rounded-2",3,"routerLink"],[1,"fw-normal","content-color"],[1,"fw-semibold"]],template:function(o,d){o&1&&(s(0,"app-breadcrumb",0),i(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"form",6)(7,"h2"),r(8,"Sign in"),n(),i(9,"h5"),r(10," or "),i(11,"a",7)(12,"span",8),r(13,"create an a account"),n()()(),i(14,"div",9),s(15,"input",10)(16,"i",11),n(),i(17,"div",9),s(18,"input",12)(19,"i",13),n(),i(20,"a",14),r(21,"CONTINUE"),n(),i(22,"p",15),r(23," By creating an account, I accept the "),i(24,"span",16),r(25," Terms & Conditions & Privacy Policy"),n()()()()()()()()),o&2&&(c("breadcrumb",d.breadcrumb),m(11),c("routerLink",b(3,Ee)),m(9),c("routerLink",b(4,Fe)))},dependencies:[f,v,g]});let t=e;return t})();var Te=()=>["/pages/sign-in"],Ie=()=>["/pages/otp"],se=(()=>{let e=class e{constructor(){this.breadcrumb={title:"Create Account",page:"Home",sub_page:"Signup"}}ngOnInit(){document.body.classList.add("white-bg")}ngOnDestroy(){document.body.classList.remove("white-bg")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-sign-up"]],standalone:!0,features:[u],decls:29,vars:5,consts:[[3,"breadcrumb"],[1,"login-hero-section","section-b-space"],[1,"container"],[1,"row"],[1,"col-xl-5","col-lg-6","col-md-10","m-auto"],[1,"login-data"],[1,"auth-form"],[3,"routerLink"],[1,"theme-color"],[1,"form-input"],["type","text","placeholder","Enter your name",1,"form-control"],[1,"ri-user-3-line"],["type","tel","placeholder","Enter your number",1,"form-control"],[1,"ri-phone-line"],["type","password","placeholder","Enter your password",1,"form-control"],[1,"ri-lock-password-line"],[1,"btn","theme-btn","submit-btn","w-100","rounded-2",3,"routerLink"],[1,"fw-normal","content-color"],[1,"fw-semibold"]],template:function(o,d){o&1&&(s(0,"app-breadcrumb",0),i(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"form",6)(7,"h2"),r(8,"Sign up"),n(),i(9,"h5"),r(10," or "),i(11,"a",7)(12,"span",8),r(13,"login to your account"),n()()(),i(14,"div",9),s(15,"input",10)(16,"i",11),n(),i(17,"div",9),s(18,"input",12)(19,"i",13),n(),i(20,"div",9),s(21,"input",14)(22,"i",15),n(),i(23,"a",16),r(24,"CONTINUE"),n(),i(25,"p",17),r(26," By creating an account, I accept the "),i(27,"span",18),r(28," Terms & Conditions & Privacy Policy"),n()()()()()()()()),o&2&&(c("breadcrumb",d.breadcrumb),m(11),c("routerLink",b(3,Te)),m(12),c("routerLink",b(4,Ie)))},dependencies:[f,v,g]});let t=e;return t})();var le=(()=>{let e=class e{constructor(a){this.http=a}getTestimonial(){return this.http.get("assets/json/testimonial.json")}};e.\u0275fac=function(o){return new(o||e)(T(D))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function De(t,e){if(t&1&&(i(0,"div",9)(1,"div",10),s(2,"img",11),i(3,"div",12)(4,"p"),r(5),n(),i(6,"div",13),s(7,"img",14),i(8,"h5",15),r(9),n()()()()()),t&2){let l=x().$implicit;m(5),S(" ",l.description," "),m(2),c("src",l.image_url,M),m(2),_(l.name)}}function Oe(t,e){t&1&&E(0,De,10,3,"ng-template",7)}function Me(t,e){if(t&1&&(i(0,"div",9)(1,"div",10),s(2,"img",11),i(3,"div",12)(4,"p"),r(5),n(),i(6,"div",13),s(7,"img",14),i(8,"h5",15),r(9),n()()()()()),t&2){let l=x().$implicit;m(5),S(" ",l.description," "),m(2),c("src",l.image_url,M),m(2),_(l.name)}}function je(t,e){t&1&&E(0,Me,10,3,"ng-template",7)}var ce=(()=>{let e=class e{constructor(a){this.testimonialService=a,this.breadcrumb={title:"Testimonial",page:"Home",sub_page:"Testimonial"},this.customOptions={loop:!0,autoplay:!0,autoplayTimeout:0,autoplayHoverPause:!0,dots:!1,margin:32,items:2.5,autoplaySpeed:1e4,touchDrag:!0,responsive:{0:{items:1},375:{items:1.2},425:{items:1.3},576:{items:1.5},768:{items:2},992:{items:2.5}}},this.customOptionsRtl={loop:!0,autoplay:!0,rtl:!0,dots:!1,autoplayTimeout:0,autoplayHoverPause:!0,margin:32,items:2.5,autoplaySpeed:1e4,touchDrag:!0,responsive:{0:{items:1},375:{items:1.2},425:{items:1.3},576:{items:1.5},768:{items:2},992:{items:2.5}}}}ngOnInit(){this.testimonialService.getTestimonial().subscribe(a=>{this.testimonial=a.testimonial}),document.body.classList.add("bg-color")}ngOnDestroy(){document.body.classList.remove("bg-color")}};e.\u0275fac=function(o){return new(o||e)(y(le))},e.\u0275cmp=p({type:e,selectors:[["app-testimonial"]],standalone:!0,features:[u],decls:16,vars:3,consts:[[3,"breadcrumb"],[1,"section-b-space","testimonial-section"],[1,"container"],[1,"faq-title"],[1,"swiper","testimonial","mb-xl-5","mb-sm-4","mb-3"],[1,"swiper-wrapper"],[3,"options"],["carouselSlide",""],[1,"swiper","testimonial","dir-rtl"],[1,"swiper-slide"],[1,"testimonial-box"],["src","assets/images/icons/commas.png","alt","commas",1,"img-fluid","comma-icon"],[1,"testimonial-content"],[1,"testi-bottom"],["alt","p1",1,"img-fluid","img",3,"src"],[1,"fw-semibold","dark-text","mt-2"]],template:function(o,d){o&1&&(s(0,"app-breadcrumb",0),i(1,"section",1)(2,"div",2)(3,"div",3)(4,"h2"),r(5,"Our Client Feedback"),n()(),i(6,"div",4)(7,"div",5)(8,"owl-carousel-o",6),w(9,Oe,1,0,null,7,C),n()()(),i(11,"div",8)(12,"div",5)(13,"owl-carousel-o",6),w(14,je,1,0,null,7,C),n()()()()()),o&2&&(c("breadcrumb",d.breadcrumb),m(8),c("options",d.customOptions),m(),k(d.testimonial),m(4),c("options",d.customOptionsRtl),m(),k(d.testimonial))},dependencies:[f,J,G,Z]});let t=e;return t})();var A=(()=>{let e=class e{constructor(a){this.http=a}getWishlist(){return this.http.get("assets/json/wishlist.json")}};e.\u0275fac=function(o){return new(o||e)(T(D))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var qe=()=>["pages/wishlist"],pe=(()=>{let e=class e{constructor(a,o){this.modal=a,this.wishlistServices=o}remove(a){this.data.splice(a,1),this.modal.dismissAll()}};e.\u0275fac=function(o){return new(o||e)(y(q),y(A))},e.\u0275cmp=p({type:e,selectors:[["app-delete-product"]],inputs:{data:"data",index:"index"},standalone:!0,features:[u],decls:13,vars:2,consts:[[1,"modal-content"],[1,"modal-header"],[1,"modal-title","fs-5"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],[1,"btn","gray-btn","mt-0",3,"click","routerLink"],[1,"btn","theme-btn","remove-btn","mt-0",3,"click"]],template:function(o,d){o&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),r(3," Delete Product "),n(),i(4,"button",3),L("click",function(){return d.modal.dismissAll()}),n()(),i(5,"div",4)(6,"p"),r(7,"Are you Sure, Your Product is Delete"),n()(),i(8,"div",5)(9,"a",6),L("click",function(){return d.modal.dismissAll()}),r(10,"CANCEL"),n(),i(11,"a",7),L("click",function(){return d.remove(d.index)}),r(12,"Remove"),n()()()),o&2&&(m(9),c("routerLink",b(1,qe)))},dependencies:[v,g]});let t=e;return t})();var ue=t=>["/order/menu-listing",t],Ae=t=>({"background-image":t});function Be(t,e){t&1&&(i(0,"div",9)(1,"h6"),r(2,"upto $2"),n(),i(3,"div",25)(4,"h4"),r(5,"50% OFF"),n(),i(6,"div",26),s(7,"img",27),i(8,"h6"),r(9,"Best Seller"),n()()()())}function Ne(t,e){if(t&1){let l=R();i(0,"div",4)(1,"div",5)(2,"div",6)(3,"a",7),s(4,"img",8),n(),E(5,Be,10,0,"div",9),i(6,"a",10),L("click",function(){let o=N(l).$index,d=x();return P(d.deleteWishlist(o))}),s(7,"i",11),n()(),i(8,"div",12)(9,"div",13)(10,"a",14)(11,"h4",15),r(12),n()(),i(13,"h6",16)(14,"span",17),s(15,"i",18),n(),r(16),n()(),i(17,"h5",19),r(18),n(),i(19,"div",20)(20,"h5",21),r(21),n(),i(22,"ul",22)(23,"li"),s(24,"i",23),r(25),n(),i(26,"li"),s(27,"i",24),r(28),n()()()()()()}if(t&2){let l=e.$implicit;m(3),c("routerLink",j(11,ue,l.slug))("ngStyle",j(13,Ae,"url("+l.image_url+")")),m(),c("src",l.image_url,M),m(),I(5,l.isOffer?5:-1),m(5),c("routerLink",j(15,ue,l.slug)),m(2),_(l.name),m(4),S("",l.rating," "),m(2),_(l.description),m(3),_(l.country),m(4),S(" ",l.distance," km"),m(3),S(" ",l.time," min")}}var fe=(()=>{let e=class e{constructor(a,o){this.wishlistServices=a,this.modal=o,this.breadcrumb={title:"Wishlist",page:"Home",sub_page:"Wishlist"}}ngOnInit(){this.wishlistServices.getWishlist().subscribe(a=>{this.wishList=a.wishlist,document.body.classList.add("bg-color")})}deleteWishlist(a){let o=this.modal.open(pe,{windowClass:"address-details-modal",centered:!0});o.componentInstance.data=this.wishList,o.componentInstance.index=a}ngOnDestroy(){document.body.classList.remove("bg-color")}};e.\u0275fac=function(o){return new(o||e)(y(A),y(q))},e.\u0275cmp=p({type:e,selectors:[["app-wishlist"]],standalone:!0,features:[u],decls:6,vars:1,consts:[[3,"breadcrumb"],[1,"restaurant-list","section-b-space"],[1,"container"],[1,"row","g-4","ratio2_3"],[1,"col-xl-3","col-lg-4","col-sm-6","trash"],[1,"vertical-product-box"],[1,"vertical-product-box-img"],[1,"bg-size",3,"routerLink","ngStyle"],["alt","vp1",1,"product-img-top","w-100","bg-img",2,"display","none",3,"src"],[1,"offers"],[1,"wishlist-close",3,"click"],[1,"ri-close-line"],[1,"vertical-product-body"],[1,"d-flex","align-items-center","justify-content-between","mt-sm-3","mt-2"],[3,"routerLink"],[1,"vertical-product-title"],[1,"rating-star"],[1,"star"],[1,"ri-star-s-fill"],[1,"product-items"],[1,"location-distance","d-flex","align-items-center","justify-content-between","pt-sm-3","pt-2"],[1,"place"],[1,"distance"],[1,"ri-map-pin-fill","icon"],[1,"ri-time-fill","icon"],[1,"d-flex","align-items-center","justify-content-between"],[1,"seller-badge"],["src","assets/images/svg/medal-fill.svg","alt","medal",1,"img-fluid","badge"]],template:function(o,d){o&1&&(s(0,"app-breadcrumb",0),i(1,"section",1)(2,"div",2)(3,"div",3),w(4,Ne,29,17,"div",4,C),n()()()),o&2&&(c("breadcrumb",d.breadcrumb),m(4),k(d.wishList))},dependencies:[f,v,g,W,H]});let t=e;return t})();var kt=[{path:"404",component:re},{path:"coming-soon",component:X},{path:"empty-cart",component:ee},{path:"faqs",component:oe},{path:"otp",component:ae},{path:"testimonial",component:ce},{path:"sign-in",component:me},{path:"sign-up",component:se},{path:"wishlist",component:fe}];export{kt as default};
