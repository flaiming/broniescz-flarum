module.exports=function(t){var a={};function e(r){if(a[r])return a[r].exports;var o=a[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=a,e.d=function(t,a,r){e.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,a){if(1&a&&(t=e(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)e.d(r,o,function(a){return t[a]}.bind(null,o));return r},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},e.p="",e(e.s=9)}([function(t,a){t.exports=flarum.core.compat["components/Switch"]},function(t,a){t.exports=flarum.core.compat.app},function(t,a){t.exports=flarum.core.compat["components/FieldSet"]},function(t,a){t.exports=flarum.core.compat.extend},function(t,a){t.exports=flarum.core.compat["components/AdminNav"]},function(t,a){t.exports=flarum.core.compat["components/AdminLinkButton"]},function(t,a){t.exports=flarum.core.compat["components/Page"]},function(t,a){t.exports=flarum.core.compat["components/Button"]},function(t,a){t.exports=flarum.core.compat["utils/saveSettings"]},function(t,a,e){"use strict";e.r(a);var r=e(3),o=e(1),s=e.n(o),n=e(4),i=e.n(n),p=e(5),b=e.n(p);var l=e(6),d=e.n(l),u=e(0),c=e.n(u),f=e(7),h=e.n(f),y=e(2),g=e.n(y),v=e(8),x=e.n(v),P=function(t){var a,e;function r(){return t.apply(this,arguments)||this}e=t,(a=r).prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e;var o=r.prototype;return o.init=function(){t.prototype.init.call(this),this.migrateAvatars=m.prop(!0),this.migrateSoftThreads=m.prop(!1),this.migrateSoftPosts=m.prop(!1),this.migrateThreadsPosts=m.prop(!0),this.migrateUsers=m.prop(!0),this.migrateCategories=m.prop(!0),this.migrateUserGroups=m.prop(!0),this.mybb={host:m.prop(void 0===app.data.settings.mybb_host?"127.0.0.1":app.data.settings.mybb_host),user:m.prop(void 0===app.data.settings.mybb_user?"":app.data.settings.mybb_user),db:m.prop(void 0===app.data.settings.mybb_db?"":app.data.settings.mybb_db),prefix:m.prop(void 0===app.data.settings.mybb_prefix?"mybb_":app.data.settings.mybb_prefix),password:m.prop(void 0===app.data.settings.mybb_password?"":app.data.settings.mybb_password),mybbPath:m.prop(void 0===app.data.settings.mybb_path?"":app.data.settings.mybb_path)}},o.view=function(){var t=this;return m("div",{className:"mybbtoflarumPage"},m("div",{className:"mybbtoflarumPage-header"},m("div",{className:"container"},app.translator.trans("mybbtoflarum.admin.page.text"))),m("div",{className:"mybbtoflarumPage-content"},m("div",{className:"container"},m("form",{onsubmit:this.onsubmit.bind(this)},g.a.component({label:app.translator.trans("mybbtoflarum.admin.page.form.general.title"),children:[c.a.component({state:this.migrateAvatars(),onchange:function(a){t.migrateAvatars(a),a?(t.migrateUsers(a),$("input[name=mybbPath]").removeAttr("disabled")):$("input[name=mybbPath]").attr("disabled","disabled")},children:app.translator.trans("mybbtoflarum.admin.page.form.general.migrateAvatars")}),c.a.component({state:this.migrateSoftThreads(),onchange:this.migrateSoftThreads,children:app.translator.trans("mybbtoflarum.admin.page.form.general.migrateSoftThreads")}),c.a.component({state:this.migrateSoftPosts(),onchange:this.migrateSoftPosts,children:app.translator.trans("mybbtoflarum.admin.page.form.general.migrateSoftPosts")})]}),g.a.component({label:app.translator.trans("mybbtoflarum.admin.page.form.mybb.title"),children:[m("div",{className:"helpText"},app.translator.trans("mybbtoflarum.admin.page.form.mybb.host")),m("input",{className:"FormControl",type:"text",bidi:this.mybb.host,value:this.mybb.host()}),m("div",{className:"helpText"},app.translator.trans("mybbtoflarum.admin.page.form.mybb.user")),m("input",{className:"FormControl",type:"text",bidi:this.mybb.user}),m("div",{className:"helpText"},app.translator.trans("mybbtoflarum.admin.page.form.mybb.password")),m("input",{className:"FormControl",type:"password",bidi:this.mybb.password}),m("div",{className:"helpText"},app.translator.trans("mybbtoflarum.admin.page.form.mybb.db")),m("input",{className:"FormControl",type:"text",bidi:this.mybb.db}),m("div",{className:"helpText"},app.translator.trans("mybbtoflarum.admin.page.form.mybb.prefix")),m("input",{className:"FormControl",type:"text",bidi:this.mybb.prefix,value:this.mybb.prefix()}),m("div",{className:"helpText"},app.translator.trans("mybbtoflarum.admin.page.form.mybb.mybbPath")),m("input",{className:"FormControl",type:"text",bidi:this.mybb.mybbPath,name:"mybbPath",placeholder:"/path/to/mybb"})]}),g.a.component({label:app.translator.trans("mybbtoflarum.admin.page.form.options.title"),children:[c.a.component({state:this.migrateUsers(),onchange:function(a){t.migrateUsers(a),a||t.migrateAvatars(a)},children:app.translator.trans("mybbtoflarum.admin.page.form.options.migrateUsers")}),c.a.component({state:this.migrateThreadsPosts(),onchange:this.migrateThreadsPosts,children:app.translator.trans("mybbtoflarum.admin.page.form.options.migrateThreadsPosts")}),c.a.component({state:this.migrateUserGroups(),onchange:this.migrateUserGroups,children:app.translator.trans("mybbtoflarum.admin.page.form.options.migrateUserGroups")}),c.a.component({state:this.migrateCategories(),onchange:this.migrateCategories,children:app.translator.trans("mybbtoflarum.admin.page.form.options.migrateCategories")})]}),h.a.component({className:"Button Button--danger",icon:"fas fa-exchange-alt",type:"submit",children:app.translator.trans("mybbtoflarum.admin.page.btnConvert"),loading:this.loading})))))},o.onsubmit=function(t){var a=this;t.preventDefault(),this.loading=!0;var e=!1;this.migrateAvatars()&&""===this.mybb.mybbPath()&&(alert("When migrating avatars, the mybb path can not be empty. You need an exisitng mybb installation."),e=!0),Object.keys(this.mybb).forEach((function(t){"mybbPath"!==t&&"prefix"!==t&&""===a.mybb[t]()&&(alert("Mybb: "+t+" can not be empty"),e=!0)})),e?this.loading=!1:(x()({mybb_host:this.mybb.host(),mybb_user:this.mybb.user(),mybb_password:this.mybb.password(),mybb_db:this.mybb.db(),mybb_prefix:this.mybb.prefix(),mybb_path:this.mybb.mybbPath().endsWith("/")?this.mybb.mybbPath():this.mybb.mybbPath()+"/"}).then((function(){app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/mybb-to-flarum",data:{avatars:a.migrateAvatars(),softposts:a.migrateSoftPosts(),softthreads:a.migrateSoftThreads(),doUsers:a.migrateUsers(),doThreadsPosts:a.migrateThreadsPosts(),doGroups:a.migrateUserGroups(),doCategories:a.migrateCategories()}}).then((function(t){return alert(t.message)}))})),this.loading=!1)},r}(d.a);s.a.initializers.add("michaelbelgium-mybb-to-flarum",(function(){s.a.routes.mybbtoflarum={path:"/mybb-to-flarum",component:P.component()},Object(r.extend)(i.a.prototype,"items",(function(t){t.add("pages",b.a.component({href:s.a.route("mybbtoflarum"),icon:"fas fa-exchange-alt",children:s.a.translator.trans("mybbtoflarum.admin.nav.title"),description:s.a.translator.trans("mybbtoflarum.admin.nav.description")}))}))}))}]);
//# sourceMappingURL=admin.js.map