module.exports=function(t){var e={};function a(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=22)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e,a){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}a.d(e,"a",(function(){return n}))},function(t,e){t.exports=flarum.core.compat["components/Select"]},function(t,e,a){"use strict";function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}a.d(e,"a",(function(){return n}))},function(t,e){t.exports=flarum.core.compat.Component},function(t,e,a){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}a.d(e,"a",(function(){return o}))},,function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/PermissionGrid"]},,,,,,function(t,e){t.exports=flarum.core.compat["components/AdminNav"]},function(t,e){t.exports=flarum.core.compat["components/AdminLinkButton"]},function(t,e){t.exports=flarum.core.compat["utils/saveSettings"]},function(t,e){t.exports=flarum.core.compat["components/Alert"]},function(t,e){t.exports=flarum.core.compat["components/UploadImageButton"]},,function(t,e,a){"use strict";a.r(e);var n=a(1),o=a(0),i=a.n(o),s=a(10),r=a.n(s),l=a(16),u=a.n(l),p=a(17),d=a.n(p),f=(a(6),a(2),a(4)),c=a(5),h=a.n(c),b=a(9),v=a.n(b),y=a(18),g=a.n(y),w=a(19),x=a.n(w),T=a(3),M=a.n(T),k=a(8),O=a.n(k),S=a(20),P=a.n(S);var _=function(t){Object(f.a)(a,t);var e;e=a;function a(){return t.apply(this,arguments)||this}var n=a.prototype;return n.init=function(){var t=this;this.loading=!1,this.fields=["resizeMaxWidth","cdnUrl","maxFileSize","watermark","watermarkPosition","imgurClientId","awsS3Key","awsS3Secret","awsS3Bucket","awsS3Region","qiniuKey","qiniuSecret","qiniuBucket"],this.checkboxes=["mustResize","addsWatermarks","disableHotlinkProtection","disableDownloadLogging"],this.objects=["mimeTypes"],this.watermarkPositions={"top-left":"top-left","top-right":"top-right","bottom-left":"bottom-left","bottom-right":"bottom-right",center:"center",left:"left",top:"top",right:"right",bottom:"bottom"};var e=i.a.data.settings;this.settingsPrefix="fof-upload",this.uploadMethodOptions=e[this.addPrefix("availableUploadMethods")]||{},this.templateOptions=e[this.addPrefix("availableTemplates")]||{},this.values={},this.fields.forEach((function(a){return t.values[a]=m.prop(e[t.addPrefix(a)])})),this.checkboxes.forEach((function(a){return t.values[a]=m.prop("1"===e[t.addPrefix(a)])})),this.objects.forEach((function(a){return t.values[a]=e[t.addPrefix(a)]?m.prop(JSON.parse(e[t.addPrefix(a)])):m.prop()})),this.values.mimeTypes()||(this.values.mimeTypes=m.prop({"^image\\/.*":{adapter:"local",template:"image-preview"}})),this.newMimeType={regex:m.prop(""),adapter:m.prop("local"),template:m.prop("file")}},n.view=function(){var t=this;return[m(".UploadPage",[m(".container",[m("form",{onsubmit:this.onsubmit.bind(this)},[m("fieldset",[m("legend",i.a.translator.trans("fof-upload.admin.labels.preferences.title")),m("label",i.a.translator.trans("fof-upload.admin.labels.preferences.max_file_size")),m("input.FormControl",{value:this.values.maxFileSize()||2048,oninput:m.withAttr("value",this.values.maxFileSize)}),m("label",i.a.translator.trans("fof-upload.admin.labels.preferences.mime_types")),m(".MimeTypes--Container",Object.keys(this.values.mimeTypes()).map((function(e){var a=t.values.mimeTypes()[e];return"object"!=typeof a&&(a={adapter:a,template:"file"}),m("div",[m("input.FormControl.MimeTypes",{value:e,oninput:m.withAttr("value",t.updateMimeTypeKey.bind(t,e))}),M.a.component({options:t.uploadMethodOptions,onchange:t.updateMimeTypeAdapter.bind(t,e,a),value:a.adapter||"local"}),M.a.component({options:t.getTemplateOptionsForInput(),onchange:t.updateMimeTypeTemplate.bind(t,e,a),value:a.template||"local"}),v.a.component({type:"button",className:"Button Button--warning",children:"x",onclick:t.deleteMimeType.bind(t,e)})])})),m("br"),m("div",[m("input.FormControl.MimeTypes.add-MimeType-key",{value:this.newMimeType.regex(),oninput:m.withAttr("value",this.newMimeType.regex)}),M.a.component({options:this.uploadMethodOptions,className:"add-MimeType-value",oninput:m.withAttr("value",this.newMimeType.adapter),value:this.newMimeType.adapter()}),M.a.component({options:this.getTemplateOptionsForInput(),className:"add-MimeType-value",oninput:m.withAttr("value",this.newMimeType.template),value:this.newMimeType.template()}),v.a.component({type:"button",className:"Button Button--warning",children:"+",onclick:this.addMimeType.bind(this)})])),m(".helpText",i.a.translator.trans("fof-upload.admin.help_texts.mime_types")),m(".helpText",i.a.translator.trans("fof-upload.admin.help_texts.download_templates")),this.templateOptionsDescriptions()]),m("fieldset",[m("legend",i.a.translator.trans("fof-upload.admin.labels.resize.title")),m(".helpText",i.a.translator.trans("fof-upload.admin.help_texts.resize")),O.a.component({state:this.values.mustResize()||!1,children:i.a.translator.trans("fof-upload.admin.labels.resize.toggle"),onchange:this.values.mustResize}),m("label",i.a.translator.trans("fof-upload.admin.labels.resize.max_width")),m("input",{className:"FormControl",value:this.values.resizeMaxWidth()||100,oninput:m.withAttr("value",this.values.resizeMaxWidth),disabled:!this.values.mustResize()})]),m("fieldset",[m("legend",i.a.translator.trans("fof-upload.admin.labels.watermark.title")),m(".helpText",i.a.translator.trans("fof-upload.admin.help_texts.watermark")),O.a.component({state:this.values.addsWatermarks()||!1,children:i.a.translator.trans("fof-upload.admin.labels.watermark.toggle"),onchange:this.values.addsWatermarks}),m("label",i.a.translator.trans("fof-upload.admin.labels.watermark.position")),m("div",[M.a.component({options:this.watermarkPositions,onchange:this.values.watermarkPosition,value:this.values.watermarkPosition()||"bottom-right"})]),m("label",{},i.a.translator.trans("fof-upload.admin.labels.watermark.file")),P.a.component({name:"fof/watermark"})]),m("fieldset",[m("legend",i.a.translator.trans("fof-upload.admin.labels.disable-hotlink-protection.title")),m(".helpText",i.a.translator.trans("fof-upload.admin.help_texts.disable-hotlink-protection")),O.a.component({state:this.values.disableHotlinkProtection()||!1,children:i.a.translator.trans("fof-upload.admin.labels.disable-hotlink-protection.toggle"),onchange:this.values.disableHotlinkProtection}),m("legend",i.a.translator.trans("fof-upload.admin.labels.disable-download-logging.title")),m(".helpText",i.a.translator.trans("fof-upload.admin.help_texts.disable-download-logging")),O.a.component({state:this.values.disableDownloadLogging()||!1,children:i.a.translator.trans("fof-upload.admin.labels.disable-download-logging.toggle"),onchange:this.values.disableDownloadLogging})]),m("fieldset",[m("legend",i.a.translator.trans("fof-upload.admin.labels.local.title")),m("label",i.a.translator.trans("fof-upload.admin.labels.local.cdn_url")),m("input.FormControl",{value:this.values.cdnUrl()||"",oninput:m.withAttr("value",this.values.cdnUrl)})]),m("fieldset",[m("legend",i.a.translator.trans("fof-upload.admin.labels.imgur.title")),m("label",i.a.translator.trans("fof-upload.admin.labels.imgur.client_id")),m("input.FormControl",{value:this.values.imgurClientId()||"",oninput:m.withAttr("value",this.values.imgurClientId)})]),m("fieldset",[m("legend",i.a.translator.trans("fof-upload.admin.labels.qiniu.title")),m("label",i.a.translator.trans("fof-upload.admin.labels.qiniu.key")),m("input.FormControl",{value:this.values.qiniuKey()||"",oninput:m.withAttr("value",this.values.qiniuKey)}),m("label",{},i.a.translator.trans("fof-upload.admin.labels.qiniu.secret")),m("input.FormControl",{value:this.values.qiniuSecret()||"",oninput:m.withAttr("value",this.values.qiniuSecret)}),m("label",{},i.a.translator.trans("fof-upload.admin.labels.qiniu.bucket")),m("input.FormControl",{value:this.values.qiniuBucket()||"",oninput:m.withAttr("value",this.values.qiniuBucket)})]),m("fieldset",[m("legend",i.a.translator.trans("fof-upload.admin.labels.aws-s3.title")),m("label",i.a.translator.trans("fof-upload.admin.labels.aws-s3.key")),m("input.FormControl",{value:this.values.awsS3Key()||"",oninput:m.withAttr("value",this.values.awsS3Key)}),m("label",i.a.translator.trans("fof-upload.admin.labels.aws-s3.secret")),m("input.FormControl",{value:this.values.awsS3Secret()||"",oninput:m.withAttr("value",this.values.awsS3Secret)}),m("label",i.a.translator.trans("fof-upload.admin.labels.aws-s3.bucket")),m("input.FormControl",{value:this.values.awsS3Bucket()||"",oninput:m.withAttr("value",this.values.awsS3Bucket)}),m("label",i.a.translator.trans("fof-upload.admin.labels.aws-s3.region")),m("input.FormControl",{value:this.values.awsS3Region()||"",oninput:m.withAttr("value",this.values.awsS3Region)})]),v.a.component({type:"submit",className:"Button Button--primary",children:i.a.translator.trans("fof-upload.admin.buttons.save"),loading:this.loading,disabled:!this.changed()})])])])]},n.getTemplateOptionsForInput=function(){var t={};for(var e in this.templateOptions)this.templateOptions.hasOwnProperty(e)&&(t[e]=this.templateOptions[e].name);return t},n.updateMimeTypeKey=function(t,e){this.values.mimeTypes()[e]=this.values.mimeTypes()[t],this.deleteMimeType(t)},n.updateMimeTypeAdapter=function(t,e,a){e.adapter=a,this.values.mimeTypes()[t]=e},n.updateMimeTypeTemplate=function(t,e,a){e.template=a,this.values.mimeTypes()[t]=e},n.deleteMimeType=function(t){delete this.values.mimeTypes()[t]},n.templateOptionsDescriptions=function(){var t=[];for(var e in this.templateOptions)this.templateOptions.hasOwnProperty(e)&&t.push(m("li",this.templateOptions[e].name+": "+this.templateOptions[e].description));return m("ul",t)},n.addMimeType=function(){this.values.mimeTypes()[this.newMimeType.regex()]={adapter:this.newMimeType.adapter(),template:this.newMimeType.template()},this.newMimeType.regex(""),this.newMimeType.adapter("local"),this.newMimeType.template("file")},n.changed=function(){var t=this,e=this.fields.some((function(e){return t.values[e]()!==i.a.data.settings[t.addPrefix(e)]})),a=this.checkboxes.some((function(e){return t.values[e]()!==("1"===i.a.data.settings[t.addPrefix(e)])})),n=this.objects.some((function(e){return JSON.stringify(t.values[e]())!==i.a.data.settings[t.addPrefix(e)]}));return e||a||n},n.onsubmit=function(t){var e=this;if(t.preventDefault(),!this.loading){this.loading=!0,i.a.alerts.dismiss(this.successAlert);var a={};this.fields.forEach((function(t){return a[e.addPrefix(t)]=e.values[t]()})),this.checkboxes.forEach((function(t){return a[e.addPrefix(t)]=e.values[t]()})),this.objects.forEach((function(t){return a[e.addPrefix(t)]=JSON.stringify(e.values[t]())})),g()(a).then((function(){i.a.alerts.show(e.successAlert=new x.a({type:"success",children:i.a.translator.trans("core.admin.basics.saved_message")}))})).catch((function(){})).then((function(){e.loading=!1,m.redraw()}))}},n.addPrefix=function(t){return this.settingsPrefix+"."+t},a}(h.a);i.a.initializers.add("fof-upload",(function(t){i.a.routes["fof-upload"]={path:"/fof/upload",component:_.component()},i.a.extensionSettings["fof-upload"]=function(){return m.route(i.a.route("fof-upload"))},Object(n.extend)(u.a.prototype,"items",(function(t){t.add("fof-upload",d.a.component({href:i.a.route("fof-upload"),icon:"far fa-file",children:"File Upload",description:i.a.translator.trans("fof-upload.admin.help_texts.description")}))})),Object(n.extend)(r.a.prototype,"startItems",(function(e){e.add("fof-upload",{icon:"far fa-file",label:t.translator.trans("fof-upload.admin.permissions.upload_label"),permission:"fof-upload.upload"})})),Object(n.extend)(r.a.prototype,"viewItems",(function(e){e.add("fof-download",{icon:"fas fa-download",label:t.translator.trans("fof-upload.admin.permissions.download_label"),permission:"fof-upload.download",allowGuest:!0})}))}))}]);
//# sourceMappingURL=admin.js.map