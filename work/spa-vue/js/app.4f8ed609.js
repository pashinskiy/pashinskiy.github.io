(function(t){function e(e){for(var r,i,o=e[0],s=e[1],u=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(m.length)m.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0a36":function(t,e,n){},1:function(t,e){},"26c1":function(t,e,n){},"37bd":function(t,e,n){"use strict";n("ffa3")},"48b2":function(t,e,n){"use strict";n("26c1")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"col-3 text-warning"},[n("svg",{staticClass:"bi bi-cart4",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.onCart}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"}})]),t.lengthCart?n("span",{staticClass:"badge badge-danger"},[t._v(" "+t._s(t.lengthCart)+" ")]):t._e()])])])]),n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("menu",{staticClass:"col col-sm-3 col-12 menu"},[n("ul",{staticClass:"list-group"},t._l(t.menu,(function(e,r){return n("router-link",{key:r,staticClass:"list-group-item",attrs:{to:e.url,tag:"li","active-class":"active"}},[n("a",[t._v(t._s(e.text))])])})),1)]),n("main",{staticClass:"col col-sm-9 col-12"},[n("transition",{attrs:{"enter-active-class":"animate__animated animate__flipInY","leave-active-class":"animate__animated animate__flipOutY",mode:"out-in"}},[n("router-view")],1)],1)])])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-9"},[n("h1",[t._v("Logo")])])}],i=n("5530"),o=n("2f62"),s={computed:Object(i["a"])({},Object(o["c"])({menu:"menu/items",lengthCart:"cart/lengthCart"})),methods:{onCart:function(){this.$router.push("/cart")}}},u=s,l=(n("37bd"),n("2877")),d=Object(l["a"])(u,a,c,!1,null,"29ec9c0a",null),m=d.exports,p={namespaced:!0,state:{items:[{url:"/products",text:"Products"},{url:"/cart",text:"Cart"},{url:"/checkout",text:"Order now"}]},getters:{items:function(t){return t.items}}},f={namespaced:!0,state:{items:[]},getters:{items:function(t){return t.items},itemsMap:function(t){for(var e={},n=0;n<t.items.length;n++){var r=t.items[n];e[r.id_product]=r}return e},item:function(t,e){return function(t){return e.itemsMap[t]}}},mutations:{loadItems:function(t,e){t.items=e}},actions:{loadItems:function(t){r["a"].http.get("data.json").then((function(t){return t.json()})).then((function(e){return t.commit("loadItems",e)}))}}},v=(n("4de4"),n("c975"),n("a434"),n("b85c")),h={namespaced:!0,state:{products_id:[]},getters:{products_id:function(t){return t.products_id},productsInCart:function(t){return _.getters["products/items"].filter((function(e){return-1!==t.products_id.indexOf(e.id_product)}))},lengthCart:function(t){return t.products_id.length},totalPrice:function(t){var e=0;if(t.products_id.length){var n,r=Object(v["a"])(t.products_id);try{for(r.s();!(n=r.n()).done;){var a=n.value,c=_.getters["products/item"](a).price;e+=c}}catch(i){r.e(i)}finally{r.f()}}return e},inCart:function(t){return function(e){return-1!=t.products_id.indexOf(e)}}},mutations:{add:function(t,e){-1===t.products_id.indexOf(e)&&t.products_id.push(e)},remove:function(t,e){var n=t.products_id.indexOf(e);-1!==n&&t.products_id.splice(n,1)},clear:function(t){t.products_id=[]}},actions:{add:function(t,e){t.commit("add",e)},remove:function(t,e){t.commit("remove",e)},clear:function(t){t.commit("clear")}}},b=(n("b0c0"),{namespaced:!0,state:{info:[{name:"Name",value:"",pattern:/^[a-zA-Zа-яА-я]{2,30}$/},{name:"Phone",value:"",pattern:/^(8|\+7)[-]?[(]?\d{3}\)?[-]?((\d{1})[-]?){7}$/},{name:"Email",value:"",pattern:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/}],submitProcces:!1,submited:!1},getters:{info:function(t){return t.info},submitProcces:function(t){return t.submitProcces},validValCnt:function(t){for(var e=0,n=0;n<t.info.length;n++)t.info[n].pattern.test(t.info[n].value)&&e++;return e},submited:function(t){return t.submited}},mutations:{updValue:function(t,e){t.info[e.i].value=e.val},startSubmit:function(t){t.submitProcces=!0,t.submited=!0},submited:function(t){t.submitProcces=!1}},actions:{updValue:function(t,e){var n=t.commit;n("updValue",e)},onSubmit:function(t){var e=t.getters,n=t.commit,r=t.rootGetters;n("startSubmit");var a,c={},i=e.info,o=Object(v["a"])(i);try{for(o.s();!(a=o.n()).done;){var s=a.value;c[s.name]=s.value}}catch(u){o.e(u)}finally{o.f()}c.id_products=r["cart/products_id"],console.log(c),setTimeout((function(){return n("submited")}),2e3)}}});r["a"].use(o["a"]);var _=new o["a"].Store({modules:{menu:p,products:f,cart:h,checkout:b},strict:!1}),g=n("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Cart")]),n("hr"),t.empty?n("div",{staticClass:"alert alert-warning"},[t._v("Your cart is empty")]):[n("table",{staticClass:"table table-bordered table-hover"},[t._m(0),n("tbody",[t._l(t.products,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.title))]),n("td",{},[t._v(" "+t._s(e.price)+" "),n("svg",{staticClass:"bi bi-x-circle-fill text-danger float-right",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(n){return t.remove(e.id_product)}}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"}})])])])})),n("tr",[n("th",[t._v("Total")]),n("th",[t._v(t._s(t.totalPrice))])])],2)]),n("button",{staticClass:"btn btn-success",on:{click:t.onOrder}},[t._v("Order Now")]),n("button",{staticClass:"btn btn-danger float-right",on:{click:t.clear}},[t._v("Clear cart")])]],2)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Product")]),n("th",[t._v("Price")])])])}],j={computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])({products:"cart/productsInCart",totalPrice:"cart/totalPrice"})),{},{empty:function(){return 0===this.products.length}}),methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])("cart",{remove:"remove",clear:"clear"})),{},{onOrder:function(){this.$router.push("/checkout")}})},w=j,y=Object(l["a"])(w,C,O,!1,null,null,null),k=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Products")]),n("hr"),n("div",{staticClass:"row"},t._l(t.products,(function(e,r){return n("div",{key:r,staticClass:"col col-6 col-sm-4 text-center product"},[n("router-link",{attrs:{tag:"h4",to:"/products/"+e.id_product}},[n("a",[n("img",{attrs:{src:e.img}}),n("p",{staticClass:"title"},[t._v(t._s(e.title))])])]),n("p",[t._v("Price: "+t._s(e.price)+"₽")]),t.productsInCart(e.id_product)?n("button",{staticClass:"btn btn-warning",on:{click:function(n){return t.removeProduct(e.id_product)}}},[t._v(" Remove to cart ")]):n("button",{staticClass:"btn btn-primary",on:{click:function(n){return t.addProduct(e.id_product)}}},[t._v(" Add to cart ")])],1)})),0)])},P=[],V={computed:Object(i["a"])({},Object(o["c"])({products:"products/items",productsInCart:"cart/inCart"})),methods:Object(i["a"])({},Object(o["b"])({addProduct:"cart/add",removeProduct:"cart/remove"}))},z=V,$=(n("659f"),Object(l["a"])(z,x,P,!1,null,"5ff0c78c",null)),I=$.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Order Now")]),n("hr"),n("my-form")],1)},H=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"form","enter-active-class":"animate__animated animate__zoomIn","leave-active-class":"animate__animated animate__rollOut",mode:"out-in",appear:""}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar",style:t.progress})]),n("div",t._l(t.info,(function(e,r){return n("my-input",{key:r,staticClass:"form-group",attrs:{name:e.name,value:e.value,pattern:e.pattern},on:{onInput:function(e){return t.onInput({val:e,i:r})}}})})),1),n("hr"),n("button",{staticClass:"btn btn-primary",attrs:{disabled:t.disabled}},[t._v("Send data")]),t.disabled?n("div",{staticClass:"d-inline alert alert-danger error"},[t.validValCnt!==t.info.length?n("span",[t._v(" * Fill the form")]):t._e(),t.lengthCart?t._e():n("span",[t._v(" * Add product to cart")])]):t._e()])])},E=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",[t._v(t._s(t.name)+" ")]),t.inputCheck?n("i",{staticClass:"fas animate__animated",class:t.classValid,staticStyle:{"margin-left":"0.3em"}}):t._e(),n("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.value},on:{input:t.onInput}})])},L=[],T={props:["name","value","pattern"],data:function(){return{inputCheck:""!=this.value,classTrueValid:"fa-chevron-circle-down text-success animate__heartBeat",classFalseValid:"fa-exclamation-circle text-danger animate__headShake"}},computed:{valid:function(){return this.pattern.test(this.value)},classValid:function(){return this.valid?this.classTrueValid:this.classFalseValid}},methods:{onInput:function(t){this.inputCheck||(this.inputCheck=!0),this.$emit("onInput",t.target.value)}}},B=T,F=Object(l["a"])(B,A,L,!1,null,null,null),Z=F.exports,N={computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])({info:"checkout/info",validValCnt:"checkout/validValCnt",lengthCart:"cart/lengthCart"})),{},{progress:function(){return{width:this.validValCnt/this.info.length*100+"%"}},disabled:function(){return!(this.lengthCart&&this.validValCnt===this.info.length)}}),methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])({submit:"checkout/onSubmit",onInput:"checkout/updValue",clear:"cart/clear"})),{},{onSubmit:function(){this.submit(),this.$router.push("/finish"),this.clear()}}),components:{myInput:Z}},Y=N,J=(n("e0ec"),Object(l["a"])(Y,M,E,!1,null,"2230877d",null)),R=J.exports,D={components:{myForm:R}},G=D,q=Object(l["a"])(G,S,H,!1,null,null,null),K=q.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Page not found")]),n("hr"),n("router-link",{attrs:{to:{name:"products"}}},[t._v("Start from main page")])],1)},U=[],W={},X=W,tt=Object(l["a"])(X,Q,U,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col col-12 col-sm-4 text-center"},[n("img",{attrs:{src:t.product(t.id).img}})]),n("div",{staticClass:"col col-12 col-sm-8"},[n("h1",[t._v(t._s(t.product(t.id).title))]),n("router-link",{attrs:{to:{name:"products"}}},[t._v(" Back to product ")]),n("hr"),n("h3",[t._v(t._s(t.product(t.id).price)+"₽")]),t.productsInCart(t.id)?n("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.removeProduct(t.id)}}},[t._v(" Remove to cart ")]):n("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.addProduct(t.id)}}},[t._v(" Add to cart ")])],1)])},rt=[],at={computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])({product:"products/item",productsInCart:"cart/inCart"})),{},{id:function(){return+this.$route.params.id}}),methods:Object(i["a"])({},Object(o["b"])({addProduct:"cart/add",removeProduct:"cart/remove"}))},ct=at,it=(n("48b2"),Object(l["a"])(ct,nt,rt,!1,null,"a424aa00",null)),ot=it.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.show?n("div",[n("h1",[t._v("The order has been sent")]),n("div",[t.submitProcces?n("div",[t._v("Loading...")]):n("div",{staticClass:"alert alert-success"},[n("h1",[t._v("Ok!")])])])]):n("div",{staticClass:"alert alert-warning"},[t._v(" Order not completed ")])])},ut=[],lt={computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])({submitProcces:"checkout/submitProcces",lengthCart:"cart/lengthCart",submited:"checkout/submited"})),{},{show:function(){return this.submited}})},dt=lt,mt=Object(l["a"])(dt,st,ut,!1,null,null,null),pt=mt.exports;r["a"].use(g["a"]);var ft=[{path:"/work/spa-vue/index.html",redirect:{name:"products"}},{path:"/cart",component:k},{name:"products",path:"/products",component:I,beforeEnter:function(t,e,n){_.dispatch("products/loadItems"),n()}},{path:"/products/:id",component:ot},{path:"/checkout",component:K},{path:"/finish",component:pt},{path:"*",component:et}],vt=new g["a"]({routes:ft,mode:"history"}),ht=n("28dd");r["a"].use(ht["a"]),r["a"].http.options.root="https://raw.githubusercontent.com/pashinskiy/warehouse/main/first-spa/",r["a"].config.productionTip=!1,new r["a"]({store:_,router:vt,render:function(t){return t(m)}}).$mount("#app")},"659f":function(t,e,n){"use strict";n("7939")},7939:function(t,e,n){},e0ec:function(t,e,n){"use strict";n("0a36")},ffa3:function(t,e,n){}});
//# sourceMappingURL=app.4f8ed609.js.map