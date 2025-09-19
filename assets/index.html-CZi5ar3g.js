import{_ as n,c as a,a as i,o as l}from"./app-DUomSOUZ.js";const e={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><h3 id="规则" tabindex="-1"><a class="header-anchor" href="#规则"><span>规则</span></a></h3><ul><li>// 单行注释</li><li>/**/ 多行注释</li><li>； 语句结束</li><li>{} 语句块</li></ul><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h3><ul><li>定义 var | let | const</li><li>浮点型 <ul><li>保留两位小数 <code>num.toFixed(2);</code></li></ul></li><li>字符串 <ul><li>字符串替换 <code>str.replace(/\\s/g, &#39;&amp;nbsp;&#39;)</code></li><li>转型 <ul><li><code>parseInt()</code></li><li><code>parseFloat()</code></li></ul></li></ul></li><li>JSON <ul><li>JSON转字符串 <code>JSON.stringify(jsonStr)</code></li><li>字符串转JSON <code>str.parseJSON();</code> <code>JSON.parse();</code></li><li>删除属性 <code>delete dataObj[&#39;部门&#39;];</code></li><li>数据类型判断 <code>typeof(var)</code></li></ul></li><li>子页面父页面相互调用 <ul><li><code>$(&quot;#compAnalysis&quot;)[0].contentWindow.getBizInfo()</code></li><li><code>window.parent.parentFunction();</code></li></ul></li><li>编码转换 <ul><li>转UTF-8编码 <code>encodeURI(str)、encodeURIComponent(str)</code></li><li><code>URLDecoder.decode(text, &quot;UTF-8&quot;)</code></li></ul></li></ul><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h3><h4 id="日期" tabindex="-1"><a class="header-anchor" href="#日期"><span>日期</span></a></h4><pre><code>* 年份 \`getFullYear()\`
* 月份 \`getMonth() + 1\`
* 日 \`getDate()\`
</code></pre><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h3><h3 id="委托" tabindex="-1"><a class="header-anchor" href="#委托"><span>委托</span></a></h3><pre><code>\`(&quot;父级元素&quot;).delegate(&#39;自己元素&#39;, &#39;事件&#39;, function () {  § 巴拉巴拉....});\`
</code></pre><h2 id="框架" tabindex="-1"><a class="header-anchor" href="#框架"><span>框架</span></a></h2><h3 id="bootstrap" tabindex="-1"><a class="header-anchor" href="#bootstrap"><span>bootstrap</span></a></h3><h4 id="自带文件上传弹框" tabindex="-1"><a class="header-anchor" href="#自带文件上传弹框"><span>自带文件上传弹框</span></a></h4><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;文件上传&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;link href=&quot;css/bootstrap.min.css&quot; rel=&quot;stylesheet&quot;&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        .close {</span></span>
<span class="line"><span>            position: absolute;</span></span>
<span class="line"><span>            top: 12px;</span></span>
<span class="line"><span>            right: 12px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .input-group {</span></span>
<span class="line"><span>            width: 536px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>    &lt;link href=&quot;css/fileinput.min.css&quot; media=&quot;all&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot; /&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;js/jquery-2.0.3.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;js/fileinput.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;js/fileinput_locale_de.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;js/bootstrap.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;js/fileinput_locale_zh.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        $(document).ready(function() {</span></span>
<span class="line"><span>            $(&quot;#input-b9&quot;).fileinput({</span></span>
<span class="line"><span>                showPreview: false,</span></span>
<span class="line"><span>                showUpload: false,</span></span>
<span class="line"><span>                elErrorContainer: &#39;#kartik-file-errors&#39;,</span></span>
<span class="line"><span>                allowedFileExtensions: [&quot;jpg&quot;, &quot;png&quot;, &quot;gif&quot;]</span></span>
<span class="line"><span>                //uploadUrl: &#39;/site/file-upload-single&#39;</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;!-- 按钮 --&gt;</span></span>
<span class="line"><span>    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; data-toggle=&quot;modal&quot; data-target=&quot;#exampleModal&quot;&gt;</span></span>
<span class="line"><span>        上传</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 弹框 --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;modal fade&quot; id=&quot;exampleModal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;exampleModalLabel&quot; aria-hidden=&quot;true&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;modal-dialog modal-lg&quot; role=&quot;document&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;modal-content&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;modal-header&quot;&gt;</span></span>
<span class="line"><span>            &lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalLabel&quot;&gt;上传Excel&lt;/h5&gt;</span></span>
<span class="line"><span>            &lt;button type=&quot;button&quot; class=&quot;close&quot; data-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;</span></span>
<span class="line"><span>                &lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/button&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;modal-body&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;file-loading&quot;&gt;</span></span>
<span class="line"><span>                &lt;input id=&quot;input-b9&quot; name=&quot;input-b9[]&quot; multiple type=&quot;file&quot;&#39;&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div id=&quot;kartik-file-errors&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;modal-footer&quot;&gt;</span></span>
<span class="line"><span>            &lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot; data-dismiss=&quot;modal&quot;&gt;关闭&lt;/button&gt;</span></span>
<span class="line"><span>            &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; title=&quot;Your custom upload logic&quot;&gt;保存&lt;/button&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="iframe文件上传弹框" tabindex="-1"><a class="header-anchor" href="#iframe文件上传弹框"><span>iframe文件上传弹框</span></a></h4><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>----------------------------------------------------------</span></span>
<span class="line"><span>父页面：</span></span>
<span class="line"><span>----------------------------------------------------------</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 关闭弹框</span></span>
<span class="line"><span>    $(&#39;#upload-box&#39;).hide();</span></span>
<span class="line"><span>    function closeUploadPop() {</span></span>
<span class="line"><span>        $(&#39;#upload-box&#39;).slideUp(1000);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;!-- 文件上传 --&gt;</span></span>
<span class="line"><span>&lt;iframe id=&quot;upload-box&quot; src=&quot;upload/UploadPop.html&quot; style=&quot;border: 0px; width: 500px; height: 400px; box-shadow: 0 5px 5px rgba(0,0,0,0.1); position: fixed; z-index: 2; left: calc(50% - 250px); top: calc(30% - 150px);&quot;&gt;&lt;/iframe&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>----------------------------------------------------------</span></span>
<span class="line"><span>子页面：</span></span>
<span class="line"><span>----------------------------------------------------------</span></span>
<span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;上传组件&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;link href=&quot;../fileinput/css/bootstrap.min.css&quot; rel=&quot;stylesheet&quot;&gt;</span></span>
<span class="line"><span>    &lt;link href=&quot;../fileinput/css/fileinput.css&quot; media=&quot;all&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot; /&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        html, body {</span></span>
<span class="line"><span>            background: #f3f7fc;</span></span>
<span class="line"><span>            overflow: hidden;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .upload-box {</span></span>
<span class="line"><span>            width: 500px;</span></span>
<span class="line"><span>            height: 400px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .close-icon {</span></span>
<span class="line"><span>            position: absolute;</span></span>
<span class="line"><span>            width: 24px;</span></span>
<span class="line"><span>            height: 24px;</span></span>
<span class="line"><span>            top: 10px;</span></span>
<span class="line"><span>            right: 10px;</span></span>
<span class="line"><span>            color: #4a6775;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .close-icon:hover {</span></span>
<span class="line"><span>            cursor: pointer;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .panel-body {</span></span>
<span class="line"><span>            height: 90%;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;upload-box panel panel-info&quot; style=&quot;background: #f3f7fc;&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;close-icon&quot; id=&quot;closeIcon&quot;&gt;ㄨ&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;panel-heading&quot;&gt;</span></span>
<span class="line"><span>        &lt;h3 class=&quot;panel-title&quot;&gt;上传Excel&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;panel-body&quot;&gt;</span></span>
<span class="line"><span>        &lt;input id=&quot;excelFile&quot; type=&quot;file&quot; class=&quot;file&quot; data-overwrite-initial=&quot;false&quot;&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script src=&quot;../fileinput/js/jquery-2.0.3.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;../fileinput/js/bootstrap.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;../fileinput/js/fileinput.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;../fileinput/js/fileinput_locale_zh.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 关闭弹框</span></span>
<span class="line"><span>    $(&#39;#closeIcon&#39;).click(function (){</span></span>
<span class="line"><span>        window.parent.closeUploadPop();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 上传Excel</span></span>
<span class="line"><span>    let uploadHeadquartersUrl = &#39;http://&#39; +  location.host + &#39;/api/database/uploadHeadquarters&#39;;</span></span>
<span class="line"><span>    $(&quot;#excelFile&quot;).fileinput({</span></span>
<span class="line"><span>        uploadUrl: uploadHeadquartersUrl,</span></span>
<span class="line"><span>        uploadAsync: true,</span></span>
<span class="line"><span>        language: &#39;zh&#39;,</span></span>
<span class="line"><span>        allowedFileExtensions : [&#39;xls&#39;, &#39;xlsx&#39;],</span></span>
<span class="line"><span>        overwriteInitial: false,</span></span>
<span class="line"><span>        maxFileSize: 5000,</span></span>
<span class="line"><span>        maxFilesNum: 1,</span></span>
<span class="line"><span>        enctype: &#39;multipart/form-data&#39;,</span></span>
<span class="line"><span>        uploadExtraData: {},</span></span>
<span class="line"><span>    }).on(&#39;fileuploaded&#39;, function (event, data, previewId, index) {</span></span>
<span class="line"><span>        var form = data.form, files = data.files, extra = data.extra,</span></span>
<span class="line"><span>            response = data.response, reader = data.reader;</span></span>
<span class="line"><span>        var res = data.response;</span></span>
<span class="line"><span>        console.log(&#39;res -- &#39; + res);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="layui" tabindex="-1"><a class="header-anchor" href="#layui"><span>layUi</span></a></h3><h3 id="ueditor" tabindex="-1"><a class="header-anchor" href="#ueditor"><span>Ueditor</span></a></h3><h3 id="ckfinder" tabindex="-1"><a class="header-anchor" href="#ckfinder"><span>Ckfinder</span></a></h3><h2 id="常用" tabindex="-1"><a class="header-anchor" href="#常用"><span>常用</span></a></h2><p><strong>自定义js库</strong></p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">	if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">window</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ADS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">window</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ADS</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]={}}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">	// 获取元素</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">	function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> $</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){};</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">	window</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ADS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> $</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 读取对象</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> writeObj</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> description</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        for</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> in</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">            let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> property</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            description</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> = </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">property</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> description</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    window</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ADS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">writeObj</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> writeObj</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 获取url参数</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> getQueryVariable</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">variable</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">       var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> query</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> window</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">location</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">search</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">substring</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">       var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> vars</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> query</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">split</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&amp;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">       for</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">vars</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">length</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">++</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">           var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> pair</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> vars</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">].</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">split</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">           if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">pair</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ==</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> variable</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">               return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> pair</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">];</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">           }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">       }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">       return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    window</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ADS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">getQueryVariable</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> getQueryVariable</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>节点</strong></p><ul><li>父节点 <code>var parent = test.parentNode;</code></li><li>全部子节点 <code>var chils = test.childNodes;</code></li><li>第一个子节点 <code>var first = test.firstChild;</code></li><li>最后一个子节点 <code>var last = test.lastChile;</code></li><li>上一个兄弟节点 <code>var previous = test.previousSibling;</code></li><li>下一个兄弟节点 <code>var next = test.nextSibling;</code></li><li>父节点元素 <code>var parent = test.parentElement;</code></li><li>第一个子节点元素 <code>var first = test.firstElementChild;</code></li><li>最后一个子节点元素 <code>var last = test.lastElementChild;</code></li><li>上一个兄弟节点元素 <code>var previous = test.previousElementSibling;</code></li><li>下一个兄弟节点元素 <code>var next = test.nextElementSibling;</code></li><li>获取兄弟节点</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function sibling(elm) {</span></span>
<span class="line"><span>    var a = [];</span></span>
<span class="line"><span>    var p = elm.parentNode.children;</span></span>
<span class="line"><span>    for(var i = 0, pl = p.length; i &lt; pl; i++) {</span></span>
<span class="line"><span>        if(p[i] !== elm) a.push(p[i]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return a;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Excel解析</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;text/javascript&quot; src=&quot;js/xlsx.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>// 读取本地excel文件</span></span>
<span class="line"><span>function readWorkbookFromLocalFile(file, callback) {</span></span>
<span class="line"><span>    var reader = new FileReader();</span></span>
<span class="line"><span>    reader.onload = function(e) {</span></span>
<span class="line"><span>        var data = e.target.result;</span></span>
<span class="line"><span>        var workbook = XLSX.read(data, {type: &#39;binary&#39;});</span></span>
<span class="line"><span>        if(callback) callback(workbook);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    reader.readAsBinaryString(file);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 读取 excel文件</span></span>
<span class="line"><span>function outputWorkbook(workbook) {</span></span>
<span class="line"><span>    var sheetNames = workbook.SheetNames;</span></span>
<span class="line"><span>    sheetNames.forEach(name =&gt; {</span></span>
<span class="line"><span>        var worksheet = workbook.Sheets[name];</span></span>
<span class="line"><span>        let dataLength = 0;</span></span>
<span class="line"><span>        let companyObjs = []; // 公司编码，审计类型 确定一条数据 </span></span>
<span class="line"><span>        let processObjs = []; // 流程编号 确定一条数据</span></span>
<span class="line"><span>        for(var key in worksheet) {</span></span>
<span class="line"><span>            // v是读取单元格的原始值</span></span>
<span class="line"><span>            // console.log(key, key[0] === &#39;!&#39; ? worksheet[key] : worksheet[key].v);</span></span>
<span class="line"><span>            // !ref A1:L5</span></span>
<span class="line"><span>            // VM10657:44 A1 序号</span></span>
<span class="line"><span>            // VM10657:44 B1 公司编码</span></span>
<span class="line"><span>            // VM10657:44 C1 公司名称</span></span>
<span class="line"><span>            // VM10657:44 D1 流程编码</span></span>
<span class="line"><span>            // VM10657:44 E1 流程名称及编号</span></span>
<span class="line"><span>            // VM10657:44 F1 控制点编号</span></span>
<span class="line"><span>            // VM10657:44 G1 控制点简述</span></span>
<span class="line"><span>            // VM10657:44 H1 类型</span></span>
<span class="line"><span>            // VM10657:44 I1 接口人</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28)]))}const r=n(e,[["render",p],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/%E8%AF%AD%E8%A8%80/277es0hv/","title":"JavaScript","lang":"zh-CN","frontmatter":{"title":"JavaScript","createTime":"2020/05/08","tags":["JavaScript"],"categories":["前端","Web","语言"],"permalink":"/语言/277es0hv/","description":"语法 规则 // 单行注释 /**/ 多行注释 ； 语句结束 {} 语句块 数据类型 定义 var | let | const 浮点型 保留两位小数 num.toFixed(2); 字符串 字符串替换 str.replace(/\\\\s/g, '&nbsp;') 转型 parseInt() parseFloat() JSON JSON转字符串 JSON.s...","head":[["meta",{"property":"og:url","content":"https://orthogonalandparallel.github.io/%E8%AF%AD%E8%A8%80/277es0hv/"}],["meta",{"property":"og:site_name","content":"万里任禅游"}],["meta",{"property":"og:title","content":"JavaScript"}],["meta",{"property":"og:description","content":"语法 规则 // 单行注释 /**/ 多行注释 ； 语句结束 {} 语句块 数据类型 定义 var | let | const 浮点型 保留两位小数 num.toFixed(2); 字符串 字符串替换 str.replace(/\\\\s/g, '&nbsp;') 转型 parseInt() parseFloat() JSON JSON转字符串 JSON.s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-12T08:13:49.000Z"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:modified_time","content":"2025-06-12T08:13:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-06-12T08:13:49.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":3.83,"words":1149},"git":{"updatedTime":1749716029000,"contributors":[{"name":"靳琛","email":"jinchenj@yonyou.com","commits":1,"avatar":"https://avatars.githubusercontent.com/靳琛?v=4","url":"https://github.com/靳琛"}]},"autoDesc":true,"filePathRelative":"笔记/语言/前端/javascript.md","categoryList":[{"id":"7051dc","sort":10000,"name":"笔记"},{"id":"d592ad","sort":10015,"name":"语言"},{"id":"a3eb3f","sort":10020,"name":"前端"}],"bulletin":false}`);export{r as comp,c as data};
