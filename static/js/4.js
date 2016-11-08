webpackJsonp([4,49],{3:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{type:{type:String,"default":"props"},head:Array,content:Array,apis:Array,title:{type:String,"default":"API"}},ready:function(){if(!this.head)switch(this.type){case"props":this.$set("head",["参数","说明","类型","默认值"]);break;case"events":this.$set("head",["事件名","说明","参数"]);break;case"methods":this.$set("head",["方法名","说明","参数","返回值"])}}}},4:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},5:function(e,o,t){var n=t(4);"string"==typeof n&&(n=[[e.id,n,""]]);t(2)(n,{});n.locals&&(e.exports=n.locals)},6:function(e,o){e.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text track-by=$index></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text track-by=$index></td> </tr> </tbody> </table> </section> '},7:function(e,o,t){var n,a,i={};t(5),n=t(3),a=t(6),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var p="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(p.template=a),p.computed||(p.computed={}),Object.keys(i).forEach(function(e){var o=i[e];p.computed[e]=function(){return o}})},8:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var e=this,o=this._slotContents["default"].childNodes;o=Array.prototype.filter.call(o,function(e){return 1===e.nodeType}),this.code||(this.code=o.map(function(e){return e.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(e.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},9:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E6D2";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},10:function(e,o,t){var n=t(9);"string"==typeof n&&(n=[[e.id,n,""]]);t(2)(n,{});n.locals&&(e.exports=n.locals)},11:function(e,o){e.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},12:function(e,o,t){var n,a,i={};t(10),n=t(8),a=t(11),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var p="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(p.template=a),p.computed||(p.computed={}),Object.keys(i).forEach(function(e){var o=i[e];p.computed[e]=function(){return o}})},307:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(94),i=n(a),p=t(22),l=n(p),d=t(18),c=n(d),r=t(12),s=n(r),u=t(7),h=n(u);o["default"]={data:function(){return{apis:[{parameter:"name",explain:"可选参数, 上传的文件",type:"String","default":"file"},{parameter:"action",explain:"必选参数, 上传的地址",type:"string","default":"无"},{parameter:"data",explain:"可选参数, 上传所需参数",type:"Object","default":"无"},{parameter:"multiple",explain:"可选参数, 是否支持多选文件，支持 ie10+",type:"Boolean","default":"false"},{parameter:"accept",explain:"可选参数, 接受上传的文件类型, 详见 input accept Attribute",type:"String","default":"无"},{parameter:"onChange",explain:"可选参数, 上传文件改变时的状态，详见 onChange",type:"Function","default":"无"}],name:"file",action:"/upload",onChange:function(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?console.log(e.file.name+" 上传成功."):"error"===e.file.status&&console.log(e.file.name+" 上传失败.")},defaultFileList:[{uid:-1,name:"xxx.png",status:"done",url:"http://www.baidu.com/xxx.png"},{uid:-2,name:"yyy.png",status:"done",url:"http://www.baidu.com/yyy.png"}]}},components:{vUpload:i["default"],vIcon:l["default"],vButton:c["default"],vButtonGroup:c["default"].Group,codeBox:s["default"],apiTable:h["default"]}}},395:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,"",""])},452:function(e,o,t){var n=t(395);"string"==typeof n&&(n=[[e.id,n,""]]);t(2)(n,{});n.locals&&(e.exports=n.locals)},594:function(e,o){e.exports=" <div> <section class=markdown> <h1>Upload 上传</h1> <p> 文件选择上传和拖拽上传控件。 </p> <h2>何时使用</h2> <ul> <p> 上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。 </p> <ul> <li>当需要上传一个或一些文件时。</li> <li>当需要展现上传的进度时。</li> <li>当需要使用拖拽交互时。</li> </ul> </ul> <h2>组件演示</h2> </section> <div class=ant-row style=\"margin-left: -8px; margin-right: -8px\"> <div class=\"ant-col-lg-12 code-boxes-col-2-1\"> <code-box title=点击上传 describe=经典款式，用户点击按钮弹出文件选择框。 code=\"<v-upload :name='name' :action='action' :on-change='onChange'>\n  <v-button type='ghost'>\n    <v-icon type='upload'></v-icon> 点击上传\n  </v-button>\n</v-upload>\"> <v-upload :name=name :action=action :on-change=onChange> <v-button type=ghost> <v-icon type=upload></v-icon> 点击上传 </v-button> </v-upload> </code-box> <code-box title=拖拽上传1 describe=可以把文件拖入指定区域，完成上传，同样支持点击上传。 code=\"<v-upload :name='name' :action='action' type='drag' :on-change='onChange'>\n  <p class='ant-upload-drag-icon'>\n    <v-icon type='inbox'></v-icon>\n  </p>\n  <p class='ant-upload-text'>点击或将文件拖拽到此区域上传</p>\n  <p class='ant-upload-hint'>支持单个或批量上传，严禁上传公司内部资料及其他违禁文件</p>\n</v-upload>\"> <v-upload :name=name :action=action type=drag :on-change=onChange> <p class=ant-upload-drag-icon> <v-icon type=inbox></v-icon> </p> <p class=ant-upload-text>点击或将文件拖拽到此区域上传</p> <p class=ant-upload-hint>支持单个或批量上传，严禁上传公司内部资料及其他违禁文件</p> </v-upload> </code-box> </div> <div class=\"ant-col-lg-12 code-boxes-col-2-1\"> <code-box title=传入已上传的文件 describe=对已上传的文件进行编辑。 code=\"<v-upload :name='name' :action='action' :default-file-list='defaultFileList' :on-change='onChange'>\n  <v-button type='ghost'>\n    <v-icon type='upload'></v-icon> 点击上传\n  </v-button>\n</v-upload>\"> <v-upload :name=name :action=action :default-file-list=defaultFileList :on-change=onChange> <v-button type=ghost> <v-icon type=upload></v-icon> 点击上传 </v-button> </v-upload> </code-box> <code-box title=拖拽上传2 describe=可以把文件拖入指定区域，完成上传，同样支持点击上传。 code=\"<div style='width: 246px; height: 146px'>\n  <v-upload :name='name' :action='action' type='drag' :on-change='onChange'>\n    <v-icon type='plus'></v-icon>\n  </v-upload>\n</div>\"> <div style=\"width: 246px; height: 146px\"> <v-upload :name=name :action=action type=drag :on-change=onChange> <v-icon type=plus></v-icon> </v-upload> </div> </code-box> <code-box title=多文件上传 describe=可以选择多个文件上传。 code=\"<v-upload :name='name' :action='action' :multiple='true' :on-change='onChange'>\n  <v-button type='ghost'>\n    <v-icon type='upload'></v-icon> 点击上传\n  </v-button>\n</v-upload>\"> <v-upload :name=name :action=action :multiple=true :on-change=onChange> <v-button type=ghost> <v-icon type=upload></v-icon> 点击上传 </v-button> </v-upload> </code-box> </div> </div> <api-table :apis=apis></api-table> <section class=markdown> <h3>onChange</h3> <p>文件状态改变的回调，返回为：</p> <pre>\n        <code>\n          {\n            file: { ... },\n            fileList: [ ... ],\n            event: { ... }\n          }\n        </code>\n      </pre> <ol> <li><p><code>file</code> 当前操作的文件对象。</p> <pre><code>{\n          uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突\n          name: 'xx.png'   // 文件名\n          status: 'done',  // 状态有：uploading done error removed\n          response: '{\"status\":\"success\"}'  // 服务端响应内容\n        }\n        </code></pre> <p>如果上传控件是 multiple 时，此参数将为一个对象数组 <code>[file, ...]</code>。</p> </li> <li><p><code>fileList</code> 当前的文件列表。</p> </li> <li><code>event</code> 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。</li> </ol> <h2 id=->显示下载链接</h2> <p>请使用 fileList 属性设置数组项的 url 属性进行展示控制。</p> <h2 id=ie-note>IE note</h2> <ul> <li><a href=https://github.com/react-component/upload#ie89-note>https://github.com/react-component/upload#ie89-note</a></li> </ul> </section> </div> "},713:function(e,o,t){var n,a,i={};t(452),n=t(307),a=t(594),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var p="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(p.template=a),p.computed||(p.computed={}),Object.keys(i).forEach(function(e){var o=i[e];p.computed[e]=function(){return o}})}});