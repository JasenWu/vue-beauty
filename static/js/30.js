webpackJsonp([30,49],{3:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{type:{type:String,"default":"props"},head:Array,content:Array,apis:Array,title:{type:String,"default":"API"}},ready:function(){if(!this.head)switch(this.type){case"props":this.$set("head",["参数","说明","类型","默认值"]);break;case"events":this.$set("head",["事件名","说明","参数"]);break;case"methods":this.$set("head",["方法名","说明","参数","返回值"])}}}},4:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},5:function(e,o,t){var i=t(4);"string"==typeof i&&(i=[[e.id,i,""]]);t(2)(i,{});i.locals&&(e.exports=i.locals)},6:function(e,o){e.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text track-by=$index></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text track-by=$index></td> </tr> </tbody> </table> </section> '},7:function(e,o,t){var i,a,r={};t(5),i=t(3),a=t(6),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var n="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(n.template=a),n.computed||(n.computed={}),Object.keys(r).forEach(function(e){var o=r[e];n.computed[e]=function(){return o}})},8:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var e=this,o=this._slotContents["default"].childNodes;o=Array.prototype.filter.call(o,function(e){return 1===e.nodeType}),this.code||(this.code=o.map(function(e){return e.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(e.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},9:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E6D2";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},10:function(e,o,t){var i=t(9);"string"==typeof i&&(i=[[e.id,i,""]]);t(2)(i,{});i.locals&&(e.exports=i.locals)},11:function(e,o){e.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},12:function(e,o,t){var i,a,r={};t(10),i=t(8),a=t(11),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var n="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(n.template=a),n.computed||(n.computed={}),Object.keys(r).forEach(function(e){var o=r[e];n.computed[e]=function(){return o}})},268:function(e,o,t){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(73),r=i(a),n=t(12),s=i(n),d=t(7),l=i(d),c=t(34),p=i(c);o["default"]={components:{vCarousel:r["default"],codeBox:s["default"],apiTable:l["default"]},data:function(){return{onClose:function(){console.log(this)},show:!0,num:6,apis:[{parameter:"fade",explain:"是否采用渐显模式,为true采用fade,为false采用scrollx",type:"Boolean","default":"false"},{parameter:"dots",explain:"是否显示面板指示点",type:"Boolean","default":"true"},{parameter:"vertical",explain:"是否垂直显示dots",type:"boolean","default":"true"},{parameter:"autoplay",explain:"是否自动切换",type:"Boolean","default":"false"},{parameter:"easing",explain:"动画效果",type:"String","default":"linear"},{parameter:"onChange",explain:"切换面板的回调",type:"Function","default":"无"}]}},methods:{onChange:function(e){p["default"].info(e)}}}},396:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,"body{background-color:#fff}.ant-carousel .slick-slide h3{text-align:center;height:100px;line-height:100px;background:#71b5de;color:#fff;overflow:hidden;margin:0}#components-carousel-demo-vertical .ant-carousel{margin-right:35px}",""])},456:function(e,o,t){var i=t(396);"string"==typeof i&&(i=[[e.id,i,""]]);t(2)(i,{});i.locals&&(e.exports=i.locals)},556:function(e,o){e.exports=' <div> <section class=markdown> <h1>Carousel 走马灯</h1> <p> 旋转木马，一组轮播的区域。 </p> <h2>何时使用</h2> <ul> <li>当有一组平级的内容。</li> <li>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</li> <li>常用于一组图片或卡片轮播。</li> </ul> <h2>组件演示</h2> </section> <div class=ant-row style="margin-left: -8px; margin-right: -8px"> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=基本 describe=最典型的用法 code=""> <v-carousel :after-change=onChange> <div><h3>1</h3></div> <div><h3>2</h3></div> <div><h3>3</h3></div> <div><h3>4</h3></div> </v-carousel> </code-box> <code-box title=渐显 describe=切换效果为渐显 code=""> <v-carousel :fade=true> <div><h3>1</h3></div> <div><h3>2</h3></div> <div><h3>3</h3></div> <div><h3>4</h3></div> </v-carousel> </code-box> </div> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=垂直 describe=垂直显示 code="" id=components-carousel-demo-vertical> <v-carousel :vertical=true> <div><h3>1</h3></div> <div><h3>2</h3></div> <div><h3>3</h3></div> <div><h3>4</h3></div> </v-carousel> </code-box> <code-box title=自动切换 describe=自动切换下一张 code=""> <v-carousel :autoplay=true> <div><h3>1</h3></div> <div><h3>2</h3></div> <div><h3>3</h3></div> <div><h3>4</h3></div> </v-carousel> </code-box> </div> </div> <api-table :apis=apis></api-table> </div> '},674:function(e,o,t){var i,a,r={};t(456),i=t(268),a=t(556),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var n="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(n.template=a),n.computed||(n.computed={}),Object.keys(r).forEach(function(e){var o=r[e];n.computed[e]=function(){return o}})}});