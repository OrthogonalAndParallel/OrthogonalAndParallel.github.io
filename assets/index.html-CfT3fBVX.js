import{_ as n,c as e,a as o,o as i}from"./app-DUomSOUZ.js";const a={};function s(r,t){return i(),e("div",null,t[0]||(t[0]=[o(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><pre><code>• 选择器
	○ 元素选择器 -- $(&#39;p&#39;)
	○ id选择器 -- $(&#39;#id&#39;)
	○ class选择器 -- $(&#39;.aa&#39;)
• DOM元素
	○ 文本 -- $(&#39;p&#39;).text()
	○ html -- $(&#39;div&#39;).html() $(div).prop(&#39;outerHTML&#39;)
	○ val -- $(&#39;input&#39;).val()
	○ 属性 -- $(&#39;a&#39;).attr(&#39;href&#39;)
	○ 元素内部开始插入 -- $(&#39;div&#39;).prepend()
	○ 元素内部最后插入 -- $(&#39;div&#39;).append()
	○ 元素外部之前插入 -- $(&#39;div&#39;).before()
	○ 元素外部之后插入 -- $(&#39;div&#39;).after()
	○ 元素删除 -- $(&#39;div&#39;).remove() | $(&#39;div&#39;).remove(&#39;.top&#39;)
	○ 元素内部删除 -- $(&#39;div&#39;).empty()
	○ 添加css类 -- $(&#39;div&#39;).addClass(&#39;clazz&#39;)
	○ 删除css类 -- $(&#39;div&#39;).removeClass(&#39;clazz&#39;)
	○ 切换css类 -- $(&#39;div&#39;).toggleClass(&#39;clazz&#39;)
	○ 获取css属性 -- $(&#39;div&#39;).css(&#39;background&#39;)
	○ 设置css属性 -- $(&#39;div&#39;).css(&#39;background&#39;, &#39;red&#39;)
	○ 设置多个css属性 -- $(&#39;div&#39;).css({&#39;background&#39; : &#39;red&#39;, &#39;font-size&#39; : &#39;20px&#39;})
	○ 元素高度|宽度 -- $(&#39;div&#39;).width() | $(&#39;div&#39;).height()
	○ 元素内边距 -- $(&#39;div&#39;).innerWidth() | $(&#39;div&#39;).innerHeight()
	○ 元素外边距 -- $(&#39;div&#39;).outerWidth() | $(&#39;div&#39;).outerHeight()
• DOM树
	○ 父亲元素 -- $(&#39;p&#39;).parent()
	○ 祖先元素 -- $(&#39;p&#39;).parents()
	○ 两个元素间的元素 -- $(&#39;span&#39;).parentsUntil(&#39;div&#39;)
	○ 孩子元素 -- $(&#39;p&#39;).children()
	○ 子孙元素 -- $(&#39;p&#39;).find()
	○ 所有同胞 -- $(&#39;p&#39;).siblings()
	○ 下一个同胞 -- $(&#39;p&#39;).next() | $(&#39;p&#39;).prev()
	○ 接下来所有同胞 -- $(&#39;p&#39;).nextAll() | $(&#39;p&#39;).prevAll()
	○ 接下来区间内的同胞 -- $(&#39;p&#39;).nextUtil(&#39;a&#39;) | $(&#39;p&#39;).prevUtil(&#39;a&#39;)
	○ 结果集过滤
		§ 第一个 -- $(&#39;p&#39;).first()
		§ 最后一个-- $(&#39;p&#39;).last()
		§ 索引 -- $(&#39;p&#39;).eq(2)
		§ 过滤 -- $(&#39;p&#39;).filter(&#39;.url&#39;)
		§ 非 -- $(&#39;p&#39;).not(&#39;.url&#39;)

• 事件
	○ 文档渲染
		§ $(document).ready(function() {})
		§ $(function(){})
	○ 点击 -- $(&#39;a&#39;).click()
	○ 双击 -- $(&#39;a&#39;).dbclick(function() {})
	○ 穿过元素 -- $(&#39;a&#39;).mouseenter(function() {})
	○ 离开元素 -- $(&#39;a&#39;).mouseleave(function() {})
	○ 按下鼠标 -- $(&#39;a&#39;).mousedown(function() {})
	○ 松开鼠标 -- $(&#39;a&#39;).mouseup(function() {})
	○ 光标悬停 -- $(&#39;a&#39;).hover(function(){},function(){})
	○ 获得焦点 -- $(&#39;input&#39;).focus(function() {})
	○ 失去焦点 -- $(&#39;input&#39;).blur(function() {})
	○ 移除事件监听 -- $(&#39;#Control17&#39;).find(&#39;.select2-choices&#39;).unbind(&#39;click.SheetUser&#39;)
• 效果
	○ 隐藏 -- $(&#39;p&#39;).hide()
	○ 显示 -- $(&#39;p&#39;).show()
	○ 显示隐藏切换 -- $(&#39;p&#39;).toggle()
	○ 淡入 -- $(&#39;p&#39;).fadeIn()
	○ 淡出 -- $(&#39;p&#39;).fadeOut()
	○ 淡入淡出切换 -- $(&#39;p&#39;).fadeToggle()
	○ 减淡 -- $(&#39;p&#39;).fadeTo()
	○ 上滑 -- $(&#39;p&#39;).slideUp()
	○ 下滑 -- $(&#39;p&#39;).slideDown()
	○ 上下滑切换 -- $(&#39;p&#39;).slideToggle()
	○ 动画 -- $(&#39;p&#39;).animate({left: &#39;250px&#39;})
	○ 停止动画 -- $(&#39;p&#39;).stop()
	○ 动画链 -- $(&#39;p&#39;).css(&#39;color&#39;, &#39;red&#39;).slideUp(2000).slideDown(3000)
• Ajax
	○ 加载 -- $(&#39;div&#39;).load(&#39;http://dsadsgf/1.txt&#39;)
	○ Get -- $.get(url, function(data, status){})
	○ Post -- $.post(url, function(data, status) {})
		§ 设置同步
		$.ajaxSettings.async = false;
		$.ajaxSettings.async = true;
• 插件
	○ 验证
	○ Cookie
	○ 折叠菜单
	○ 搜索过滤
	○ 消息提醒
	○ 验证
</code></pre><p>树形菜单</p><h2 id="常用" tabindex="-1"><a class="header-anchor" href="#常用"><span>常用</span></a></h2><pre><code>• 元素筛选
	○ $(&quot;#test1&quot;).parent(); // 父节点
	○ $(&quot;#test1&quot;).parents(); // 全部父节点
	○ $(&quot;#test1&quot;).parents(&quot;.mui-content&quot;);
	○ $(&quot;#test&quot;).children(); // 全部子节点
	○ $(&quot;#test&quot;).children(&quot;#test1&quot;);
	○ $(&quot;#test&quot;).contents(); // 返回#test里面的所有内容，包括节点和文本
	○ $(&quot;#test&quot;).contents(&quot;#test1&quot;);
	○ $(&quot;#test1&quot;).prev();  // 上一个兄弟节点
	○ $(&quot;#test1&quot;).prevAll(); // 之前所有兄弟节点
	○ $(&quot;#test1&quot;).next(); // 下一个兄弟节点
	○ $(&quot;#test1&quot;).nextAll(); // 之后所有兄弟节点
	○ $(&quot;#test1&quot;).siblings(); // 所有兄弟节点
	○ $(&quot;#test1&quot;).siblings(&quot;#test2&quot;);
	○ $(&quot;#test&quot;).find(&quot;#test1&quot;); // 以下方法都返回一个新的jQuery对象，他们包含筛选到的元素
	○ $(&quot;ul li&quot;).eq(1); // 选取ul li中匹配的索引顺序为1的元素(也就是第2个li元素)
	○ $(&quot;ul li&quot;).first(); // 选取ul li中匹配的第一个元素
	○ $(&quot;ul li&quot;).last(); // 选取ul li中匹配的最后一个元素
	○ $(&quot;ul li&quot;).slice(1, 4); // 选取第2 ~ 4个元素
	○ $(&quot;ul li&quot;).filter(&quot;:even&quot;); // 选取ul li中所有奇数顺序的元素
</code></pre>`,6)]))}const p=n(a,[["render",s],["__file","index.html.vue"]]),l=JSON.parse('{"path":"/%E8%AF%AD%E8%A8%80/33946322/","title":"jQuery","lang":"zh-CN","frontmatter":{"title":"jQuery","createTime":"2020/05/08","tags":["jQuery"],"categories":["前端","Web","语言"],"permalink":"/语言/33946322/","description":"安装 语法 树形菜单 常用","head":[["meta",{"property":"og:url","content":"https://orthogonalandparallel.github.io/%E8%AF%AD%E8%A8%80/33946322/"}],["meta",{"property":"og:site_name","content":"万里任禅游"}],["meta",{"property":"og:title","content":"jQuery"}],["meta",{"property":"og:description","content":"安装 语法 树形菜单 常用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-12T08:13:49.000Z"}],["meta",{"property":"article:tag","content":"jQuery"}],["meta",{"property":"article:modified_time","content":"2025-06-12T08:13:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jQuery\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-06-12T08:13:49.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.51,"words":752},"git":{"updatedTime":1749716029000,"contributors":[{"name":"靳琛","email":"jinchenj@yonyou.com","commits":1,"avatar":"https://avatars.githubusercontent.com/靳琛?v=4","url":"https://github.com/靳琛"}]},"autoDesc":true,"filePathRelative":"笔记/语言/前端/jquery.md","categoryList":[{"id":"7051dc","sort":10000,"name":"笔记"},{"id":"d592ad","sort":10015,"name":"语言"},{"id":"a3eb3f","sort":10020,"name":"前端"}],"bulletin":false}');export{p as comp,l as data};
