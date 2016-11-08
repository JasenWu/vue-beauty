webpackJsonp([16,49],{3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:{type:String,"default":"props"},head:Array,content:Array,apis:Array,title:{type:String,"default":"API"}},ready:function(){if(!this.head)switch(this.type){case"props":this.$set("head",["参数","说明","类型","默认值"]);break;case"events":this.$set("head",["事件名","说明","参数"]);break;case"methods":this.$set("head",["方法名","说明","参数","返回值"])}}}},4:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},5:function(e,t,o){var a=o(4);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},6:function(e,t){e.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text track-by=$index></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text track-by=$index></td> </tr> </tbody> </table> </section> '},7:function(e,t,o){var a,i,n={};o(5),a=o(3),i=o(6),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(e){var t=n[e];r.computed[e]=function(){return t}})},8:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var e=this,t=this._slotContents["default"].childNodes;t=Array.prototype.filter.call(t,function(e){return 1===e.nodeType}),this.code||(this.code=t.map(function(e){return e.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(e.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},9:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E6D2";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},10:function(e,t,o){var a=o(9);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},11:function(e,t){e.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},12:function(e,t,o){var a,i,n={};o(10),a=o(8),i=o(11),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(e){var t=n[e];r.computed[e]=function(){return t}})},288:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(51),n=a(i),r=o(12),s=a(r),l=o(7),p=a(l);t["default"]={data:function(){return{current:1,apis:[{parameter:"current",explain:"当前页数",type:"Number","default":"无"},{parameter:"defaultCurrent",explain:"默认的当前页数",type:"Number","default":"1"},{parameter:"total",explain:"数据总数",type:"Number","default":"0"},{parameter:"defaultPageSize",explain:"初始的每页条数",type:"Number","default":"10"},{parameter:"pageSize",explain:"每页条数",type:"Number","default":""},{parameter:"onChange",explain:"页码改变的回调，参数是改变后的页码",type:"Function","default":"noop"},{parameter:"showSizeChanger",explain:"是否可以改变 pageSize",type:"Bool","default":"false"},{parameter:"pageSizeOptions",explain:"指定每页可以显示多少条",type:"Array","default":"['10', '20', '30', '40']"},{parameter:"onShowSizeChange",explain:"pageSize 变化的回调",type:"Function","default":"noop"},{parameter:"showQuickJumper",explain:"是否可以快速跳转至某页",type:"Bool","default":"false"},{parameter:"size",explain:"当为「small」时，是小尺寸分页",type:"String","default":'""'},{parameter:"simple",explain:"当添加该属性时，显示为简单分页",type:"Object","default":"无"},{parameter:"showTotal",explain:"用于显示总共有多少条数据",type:"Function","default":"无"}]}},watch:{current:function(){console.log(this.current)}},methods:{loadPage:function(e){console.log("cb"+e)},showTotal:function(e){return"全部 "+e+" 条"},pageSizeChange:function(e,t){console.log(e,t)}},components:{vPagination:n["default"],codeBox:s["default"],apiTable:p["default"]}}},398:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,"",""])},458:function(e,t,o){var a=o(398);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},575:function(e,t){e.exports=' <div> <section class=markdown> <h1>Pagination 分页</h1> <p> 采用分页的形式分隔长列表，每次只加载一个页面。 </p> <h2>何时使用</h2> <ul> <li>当加载/渲染所有数据将花费很多时间时；</li> <li>可切换页码浏览数据。</li> </ul> <h2>组件演示</h2> </section> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=基本 describe=基础分页。 code=""> <v-pagination :default-current=1 :total=50></v-pagination> </code-box> <code-box title=改变 describe=改变每页显示条目数。 code=""> <v-pagination :default-current=1 :show-size-changer=true :on-show-size-change=pageSizeChange :total=50></v-pagination> </code-box> <code-box title=改变 describe=改变每页显示条目数。 code=""> <v-pagination :default-current=1 size=small :total=50></v-pagination> <br> <v-pagination :current.sync=current :default-current=1 :total=100 :default-page-size=5 :page-size=10 :on-change=loadPage :show-size-changer=true :on-show-size-change=pageSizeChange :show-quick-jumper=true size=small :simple=false></v-pagination> <br> <v-pagination :current.sync=current :default-current=1 :total=50 :default-page-size=5 :page-size=10 :on-change=loadPage size=small :simple=false :show-total=showTotal></v-pagination> </code-box> <code-box title=受控 describe=受控制的页码。 code=""> <v-pagination :default-current=3 :total=50></v-pagination> </code-box> </div> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=更多 describe=更多分页 code=""> <v-pagination :default-current=1 :total=500></v-pagination> </code-box> <code-box title=更多 describe=更多分页 code=""> <v-pagination :default-current=1 :show-quick-jumper=true :total=500></v-pagination> </code-box> <code-box title=更多 describe=更多分页 code=""> <v-pagination :default-current=1 :simple=true :total=500></v-pagination> </code-box> <code-box title=总数 describe="通过设置 showTotal 展示总共有多少数据。" code=""> <v-pagination :default-current=1 :show-total=showTotal :total=50></v-pagination> </code-box> </div> <api-table :apis=apis></api-table> </div> '},693:function(e,t,o){var a,i,n={};o(458),a=o(288),i=o(575),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(e){var t=n[e];r.computed[e]=function(){return t}})}});