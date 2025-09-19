import{_ as s,c as a,a as i,o as l}from"./app-DUomSOUZ.js";const e={};function p(t,n){return l(),a("div",null,n[0]||(n[0]=[i(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p><strong>选择器</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>.class	.intro	选择 class=&quot;intro&quot; 的所有元素。	1</span></span>
<span class="line"><span>#id	#firstname	选择 id=&quot;firstname&quot; 的所有元素。	1</span></span>
<span class="line"><span>*	*	选择所有元素。	2</span></span>
<span class="line"><span>element	p	选择所有 &lt;p&gt; 元素。	1</span></span>
<span class="line"><span>element,element	div,p	选择所有 &lt;div&gt; 元素和所有 &lt;p&gt; 元素。	1</span></span>
<span class="line"><span>element element	div p	选择 &lt;div&gt; 元素内部的所有 &lt;p&gt; 元素。	1</span></span>
<span class="line"><span>element&gt;element	div&gt;p	选择父元素为 &lt;div&gt; 元素的所有 &lt;p&gt; 元素。	2</span></span>
<span class="line"><span>element+element	div+p	选择紧接在 &lt;div&gt; 元素之后的所有 &lt;p&gt; 元素。	2</span></span>
<span class="line"><span>[attribute]	[target]	选择带有 target 属性所有元素。	2</span></span>
<span class="line"><span>[attribute=value]	[target=_blank]	选择 target=&quot;_blank&quot; 的所有元素。	2</span></span>
<span class="line"><span>[attribute~=value]	[title~=flower]	选择 title 属性包含单词 &quot;flower&quot; 的所有元素。	2</span></span>
<span class="line"><span>[attribute|=value]	[lang|=en]	选择 lang 属性值以 &quot;en&quot; 开头的所有元素。	2</span></span>
<span class="line"><span>:link	a:link	选择所有未被访问的链接。	1</span></span>
<span class="line"><span>:visited	a:visited	选择所有已被访问的链接。	1</span></span>
<span class="line"><span>:active	a:active	选择活动链接。	1</span></span>
<span class="line"><span>:hover	a:hover	选择鼠标指针位于其上的链接。	1</span></span>
<span class="line"><span>:focus	input:focus	选择获得焦点的 input 元素。	2</span></span>
<span class="line"><span>:first-letter	p:first-letter	选择每个 &lt;p&gt; 元素的首字母。	1</span></span>
<span class="line"><span>:first-line	p:first-line	选择每个 &lt;p&gt; 元素的首行。	1</span></span>
<span class="line"><span>:first-child	p:first-child	选择属于父元素的第一个子元素的每个 &lt;p&gt; 元素。	2</span></span>
<span class="line"><span>:before	p:before	在每个 &lt;p&gt; 元素的内容之前插入内容。	2</span></span>
<span class="line"><span>:after	p:after	在每个 &lt;p&gt; 元素的内容之后插入内容。	2</span></span>
<span class="line"><span>:lang(language)	p:lang(it)	选择带有以 &quot;it&quot; 开头的 lang 属性值的每个 &lt;p&gt; 元素。	2</span></span>
<span class="line"><span>element1~element2	p~ul	选择前面有 &lt;p&gt; 元素的每个 &lt;ul&gt; 元素。	3</span></span>
<span class="line"><span>[attribute^=value]	a[src^=&quot;https&quot;]	选择其 src 属性值以 &quot;https&quot; 开头的每个 &lt;a&gt; 元素。	3</span></span>
<span class="line"><span>[attribute$=value]	a[src$=&quot;.pdf&quot;]	选择其 src 属性以 &quot;.pdf&quot; 结尾的所有 &lt;a&gt; 元素。	3</span></span>
<span class="line"><span>[attribute*=value]	a[src*=&quot;abc&quot;]	选择其 src 属性中包含 &quot;abc&quot; 子串的每个 &lt;a&gt; 元素。	3</span></span>
<span class="line"><span>:first-of-type	p:first-of-type	选择属于其父元素的首个 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。	3</span></span>
<span class="line"><span>:last-of-type	p:last-of-type	选择属于其父元素的最后 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。	3</span></span>
<span class="line"><span>:only-of-type	p:only-of-type	选择属于其父元素唯一的 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。	3</span></span>
<span class="line"><span>:only-child	p:only-child	选择属于其父元素的唯一子元素的每个 &lt;p&gt; 元素。	3</span></span>
<span class="line"><span>:nth-child(n)	p:nth-child(2)	选择属于其父元素的第二个子元素的每个 &lt;p&gt; 元素。	3</span></span>
<span class="line"><span>:nth-last-child(n)	p:nth-last-child(2)	同上，从最后一个子元素开始计数。	3</span></span>
<span class="line"><span>:nth-of-type(n)	p:nth-of-type(2)	选择属于其父元素第二个 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。	3</span></span>
<span class="line"><span>:nth-last-of-type(n)	p:nth-last-of-type(2)	同上，但是从最后一个子元素开始计数。	3</span></span>
<span class="line"><span>:last-child	p:last-child	选择属于其父元素最后一个子元素每个 &lt;p&gt; 元素。	3</span></span>
<span class="line"><span>:root	:root	选择文档的根元素。	3</span></span>
<span class="line"><span>:empty	p:empty	选择没有子元素的每个 &lt;p&gt; 元素（包括文本节点）。	3</span></span>
<span class="line"><span>:target	#news:target	选择当前活动的 #news 元素。	3</span></span>
<span class="line"><span>:enabled	input:enabled	选择每个启用的 &lt;input&gt; 元素。	3</span></span>
<span class="line"><span>:disabled	input:disabled	选择每个禁用的 &lt;input&gt; 元素	3</span></span>
<span class="line"><span>:checked	input:checked	选择每个被选中的 &lt;input&gt; 元素。	3</span></span>
<span class="line"><span>:not(selector)	:not(p)	选择非 &lt;p&gt; 元素的每个元素。	3</span></span>
<span class="line"><span>::selection	::selection	选择被用户选取的元素部分。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>单位</strong></p><ul><li>像素 -- px</li><li>比例像素 -- calc(90% - 20px)</li><li>字体 -- em</li><li>相对字体 -- rem</li><li>移动端 -- vh vw</li><li>16进制颜色 -- #FFFFFF</li></ul><p><strong>显示</strong></p><ul><li>展示效果 -- display: none|block|inline|inline-block;</li><li>大小 -- width height</li><li>可见性 -- visibility: hidden|visible;</li><li>透明度 -- opacity:number; //number取值0.0（完全透明）-1.0（完全不透明）</li></ul><p><strong>字体</strong></p><ul><li>字体大小 -- font-size​</li><li>字体风格 -- font-style</li><li>字体加粗 -- font-weight</li><li>字体类型 -- font-family</li><li>字体阴影 -- text-shadow</li><li>字体行高 -- line-height</li><li>字间距 -- letter-spacing​</li><li>字段缩进 -- text-index</li><li>字体居中 -- text-align</li><li>字体风格 -- -webkit-font-smoothing：</li></ul><p><strong>边框</strong></p><ul><li>图片边框 -- border-image</li><li>圆角 -- border-radius</li><li>阴影 -- box-shadow</li><li>类型 -- box-sizing: content-box|border-box|inherit;</li></ul><p><strong>滚动条</strong></p><ul><li>overflow: auto;</li><li>overflow-x: auto;</li><li>overflow-y: auto;</li></ul><p><strong>背景</strong></p><ul><li>背景固定 background-attachment:fixed;</li><li>背景区域 background-origin</li><li>背景大小 background-size</li><li>多个背景 background-image:url(),url();</li><li>background:-webkit-gradient(linear, 0 0, 0 100%, from(＃2074af), to(＃2c91d2));</li><li>渐变样式：Radial linear</li><li>渐变起点、渐变终点、</li><li>开始颜色、终止颜色</li><li>-webkit-gradient(radial,center, shape size, start-color, ..., last-color);</li></ul><p><strong>景深</strong></p><ul><li>perspective属性：（目前仅仅支持-webkit-perspective属性，视点距离） <ul><li>值：number</li></ul></li><li>perspective-origin属性：（视点位置） <ul><li>值：number% number%</li></ul></li></ul><p><strong>动画</strong></p><ul><li>@keyframes 动画名  动画关键帧</li><li>animation   动画的6个属性</li><li>animation-name  动画的名称</li><li>animation-duration  动画的周期时间</li><li>animation-timing-function   动画的速度曲线</li><li>animation-delay 动画的开始时间</li><li>animation-iteration-count   动画的播放次数</li><li>animation-direction 动画的下一个周期是否逆向</li><li>animation-play-state    动画是否在运行</li><li>animation-fill-mode 动画时间之外的状态</li><li>animation: myfrist(关键帧) 5s(时间) infinite(持续) linear(线性)</li></ul><p><strong>变换</strong></p><ul><li>transform-style属性（设置三维/二维效果） <ul><li>flat表示子元素不保留3D设置（默认）</li><li>preserve-3d表示子元素保留3D设置</li></ul></li><li>transform属性 <ul><li>X轴向右为正，Y轴向下为正，Z轴向外为正</li><li>translateX(length)、translateY(length)、translateZ(length)对元素进行3D位移，合并为translate3d(x,y,z,deg)(并不好用，必须同等旋转)</li><li>旋转逆时针为负、顺时针为正，旋转中心设置</li><li>scaleX(number)、scaleY(number)、scaleZ(number)对元素进行3D缩放，合并为scale3d(number,number,number)</li><li>rotateX(angle)、rotateY(angle)、rotateZ(angle)对元素进行3D旋转操作，合并为rotate3d(angle,angle,angle)</li></ul></li></ul><p><strong>表格</strong></p><ul><li>表格布局 table-layout</li><li>单元格边框合并 border-collapse</li><li>单元格距离 border-spacing</li><li>表格布局 table-layout</li><li>单元格边框合并 border-collapse</li><li>单元格距离 border-spacing</li></ul><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h2><p><strong>动态模糊</strong></p><div class="wrapper"><div class="app" id="app"><div class="bar" id="bar">可拖拽头部</div><div class="content" id="content">这里是内容</div></div></div><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;动态模糊&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;wrapper&quot; id=&quot;wrapper&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;app&quot; id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;bar&quot; id=&quot;bar&quot;&gt;可拖拽头部&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;content&quot; id=&quot;content&quot;&gt;这里是内容&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>    html,body{</span></span>
<span class="line"><span>        height: 100%;</span></span>
<span class="line"><span>        margin: 0;</span></span>
<span class="line"><span>        padding: 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .wrapper {</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        top: calc(50% - 250px);</span></span>
<span class="line"><span>        left: calc(50% - 400px);</span></span>
<span class="line"><span>        width: 800px;</span></span>
<span class="line"><span>        height: 500px;</span></span>
<span class="line"><span>        overflow: hidden;</span></span>
<span class="line"><span>        background-image: url(&quot;img1.png&quot;);</span></span>
<span class="line"><span>        background-repeat: no-repeat;</span></span>
<span class="line"><span>        background-position: center;</span></span>
<span class="line"><span>        background-size: 800px 500px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .app {</span></span>
<span class="line"><span>        z-index: 1;</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        width: 300px;</span></span>
<span class="line"><span>        height: 150px;</span></span>
<span class="line"><span>        overflow: hidden;</span></span>
<span class="line"><span>        text-align: center;</span></span>
<span class="line"><span>        box-shadow: 0px 0px 5px #252525b8;</span></span>
<span class="line"><span>        border-radius: 3px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .app::after {</span></span>
<span class="line"><span>        content: &#39;&#39;;</span></span>
<span class="line"><span>        z-index: -1;</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        top: 0;</span></span>
<span class="line"><span>        bottom: 0;</span></span>
<span class="line"><span>        left: 0;</span></span>
<span class="line"><span>        right: 0;</span></span>
<span class="line"><span>        margin: -30px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        background-image: url(&quot;img1.png&quot;);</span></span>
<span class="line"><span>        background-repeat: no-repeat;</span></span>
<span class="line"><span>        background-position: center;</span></span>
<span class="line"><span>        background-size: 800px 500px;</span></span>
<span class="line"><span>        background-attachment: fixed;</span></span>
<span class="line"><span>        filter: blur(10px);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .bar {</span></span>
<span class="line"><span>        background: #b3b3b375;</span></span>
<span class="line"><span>        height: 24px;</span></span>
<span class="line"><span>        cursor: move;</span></span>
<span class="line"><span>        -webkit-user-select:none;</span></span>
<span class="line"><span>        -moz-user-select:none;</span></span>
<span class="line"><span>        -ms-user-select:none;</span></span>
<span class="line"><span>        user-select:none;</span></span>
<span class="line"><span>        line-height: 24px;</span></span>
<span class="line"><span>        color: #000;</span></span>
<span class="line"><span>        font-size: 14px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .content {</span></span>
<span class="line"><span>        height: 126px;</span></span>
<span class="line"><span>        line-height: 120px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    let dragBox = function (wrapper, drag, app) {</span></span>
<span class="line"><span>        function getCss(ele, prop) {</span></span>
<span class="line"><span>            return parseInt(window.getComputedStyle(ele)[prop]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        let initX, initY, dragable = false, </span></span>
<span class="line"><span>        appLeft = getCss(app, &quot;left&quot;), appTop = getCss(app, &quot;top&quot;), </span></span>
<span class="line"><span>        wrapperLeft = getCss(app, &quot;left&quot;), wrapperTop = getCss(wrapper, &quot;top&quot;);</span></span>
<span class="line"><span>        drag.addEventListener(&quot;mousedown&quot;, function (e) {</span></span>
<span class="line"><span>            dragable = true;</span></span>
<span class="line"><span>            initX = e.clientX;</span></span>
<span class="line"><span>            initY = e.clientY;</span></span>
<span class="line"><span>        }, false);</span></span>
<span class="line"><span>        document.addEventListener(&quot;mousemove&quot;, function (e) {</span></span>
<span class="line"><span>            if (dragable === true) {</span></span>
<span class="line"><span>                var nowX = e.clientX, nowY = e.clientY, disX = nowX - initX, disY = nowY - initY;</span></span>
<span class="line"><span>                app.style.left = appLeft + disX + &quot;px&quot;;</span></span>
<span class="line"><span>                app.style.top = appTop + disY + &quot;px&quot;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        drag.addEventListener(&quot;mouseup&quot;, function (e) {</span></span>
<span class="line"><span>            dragable = false;</span></span>
<span class="line"><span>            appLeft = getCss(app, &quot;left&quot;);</span></span>
<span class="line"><span>            appTop = getCss(app, &quot;top&quot;);</span></span>
<span class="line"><span>        }, false);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    dragBox(document.querySelector(&quot;#wrapper&quot;), document.querySelector(&quot;#bar&quot;), document.querySelector(&quot;#app&quot;));</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27)]))}const c=s(e,[["render",p],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/%E8%AF%AD%E8%A8%80/vm3ncl9p/","title":"CSS","lang":"zh-CN","frontmatter":{"title":"CSS","createTime":"2020/05/08","tags":["CSS"],"categories":["前端","Web","语言"],"permalink":"/语言/vm3ncl9p/","description":"语法 选择器 单位 像素 -- px 比例像素 -- calc(90% - 20px) 字体 -- em 相对字体 -- rem 移动端 -- vh vw 16进制颜色 -- #FFFFFF 显示 展示效果 -- display: none|block|inline|inline-block; 大小 -- width height 可见性 -- vis...","head":[["meta",{"property":"og:url","content":"https://orthogonalandparallel.github.io/%E8%AF%AD%E8%A8%80/vm3ncl9p/"}],["meta",{"property":"og:site_name","content":"万里任禅游"}],["meta",{"property":"og:title","content":"CSS"}],["meta",{"property":"og:description","content":"语法 选择器 单位 像素 -- px 比例像素 -- calc(90% - 20px) 字体 -- em 相对字体 -- rem 移动端 -- vh vw 16进制颜色 -- #FFFFFF 显示 展示效果 -- display: none|block|inline|inline-block; 大小 -- width height 可见性 -- vis..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-12T08:13:49.000Z"}],["meta",{"property":"article:tag","content":"CSS"}],["meta",{"property":"article:modified_time","content":"2025-06-12T08:13:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-06-12T08:13:49.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":6.68,"words":2003},"git":{"updatedTime":1749716029000,"contributors":[{"name":"靳琛","email":"jinchenj@yonyou.com","commits":1,"avatar":"https://avatars.githubusercontent.com/靳琛?v=4","url":"https://github.com/靳琛"}]},"autoDesc":true,"filePathRelative":"笔记/语言/前端/css.md","categoryList":[{"id":"7051dc","sort":10000,"name":"笔记"},{"id":"d592ad","sort":10015,"name":"语言"},{"id":"a3eb3f","sort":10020,"name":"前端"}],"bulletin":false}');export{c as comp,r as data};
