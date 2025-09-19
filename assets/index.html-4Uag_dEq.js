import{_ as e,c as a,a as s,o as t}from"./app-DUomSOUZ.js";const o={};function l(r,n){return t(),a("div",null,n[0]||(n[0]=[s(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>linux</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>curl --silent --location https://rpm.nodesource.com/setup_5.x | bash -</span></span>
<span class="line"><span>curl -sL https://rpm.nodesource.com/setup_10.x | bash -</span></span>
<span class="line"><span>yum -y install nodejs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mac" tabindex="-1"><a class="header-anchor" href="#mac"><span>mac</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>brew install node</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块"><span>模块</span></a></h2><h3 id="全局环境配置" tabindex="-1"><a class="header-anchor" href="#全局环境配置"><span>全局环境配置</span></a></h3><ul><li>window <ul><li><code>npm config set prefix &quot;D:\\Program Files\\nodejs\\node_global&quot;</code></li><li><code>npm config set cache &quot;D:\\Program Files\\nodejs\\node_cache&quot;</code></li><li><code>PATH D:\\Program Files\\nodejs\\node_global\\</code></li></ul></li><li>Mac <ul><li><code>sudo npm config set prefix &quot;/usr/local/node_global&quot;</code></li><li><code>sudo npm config set cache &quot;/usr/local/node_cache&quot;</code></li></ul></li></ul><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h3><ul><li>查看版本 <code>npm -v</code></li><li>npm升级 <code>npm install npm -g</code></li><li>npm安装模块 <code>npm install &lt;module_name&gt; -g</code></li><li>npm卸载模块 <code>npm uninstall &lt;module_name&gt;</code></li><li>npm更新模块 <code>npm update &lt;module_name&gt;</code></li><li>npm查看模块 <code>npm list -g</code></li><li>npm搜索模块 <code>npm search &lt;module_name&gt;</code></li><li>安装淘宝镜像 <code>npm install -g cnpm --registry=https://registry.npm.taobao.org</code></li><li>安装style-loade <code>npm install style-loader css-loader --save-dev</code></li><li>清空缓存 <code>npm cache clean --force</code></li><li>校验缓存 <code>npm cache verify</code></li></ul><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1"><span>安装</span></a></h3><pre><code>* node版本 \`node -v\`
* npm版本 \` npm -v\`
* 查看node安装位置 \`where node\`
* 安装淘宝镜像 npm install -g cnpm --registry=https://registry.npm.taobao.org\`
* 查看文件夹下安装的模块 \`npm list --depth=0\`
* 查看全局安装的模块 \`npm list --depth=0 -global\`
* 安装模块 \`npm install xxx\`
* 安装全局模块 \`npm install -g xxx\`
* 卸载模块 \`npm uninstall xxx\`
* 卸载全局模块 \`npm uninstall -g xxx\`
* 设置本地仓库 \`npm config set prefix &quot;D:\\Program Files\\nodejs\\node_global&quot;\`\`
* 设置缓存 \`npm config set cache &quot;D:\\Program Files\\nodejs\\node_cache&quot;\`\`
* 查看镜像站点 \`npm config get registry\`
* 启动服务 \`npm run serve\`
</code></pre><h3 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world"><span>Hello World</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>var http = require(&quot;http&quot;);</span></span>
<span class="line"><span>http.createServer(function(request, response) {</span></span>
<span class="line"><span>response.writeHead(200, {&#39;Content-Type&#39;: &#39;text/plain&#39;});</span></span>
<span class="line"><span>response.end(&#39;Hello World\\n&#39;);</span></span>
<span class="line"><span>}).listen(8888);</span></span>
<span class="line"><span>console.log(&quot;Service run at http://127.0.0.1:8888&quot;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交互解释器-repl" tabindex="-1"><a class="header-anchor" href="#交互解释器-repl"><span>交互解释器（REPL）</span></a></h3><ul><li>计算</li><li>属性</li><li>方法</li><li>回调函数</li><li>阻塞实例</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>var fs = require(&quot;fs&quot;);</span></span>
<span class="line"><span>var data = fs.readFileSync(&#39;input.txt&#39;);</span></span>
<span class="line"><span>console.log(data.toString());</span></span>
<span class="line"><span>console.log(&#39;程序执行结束&#39;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>非阻塞实例</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>var fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>fs.readFile(&#39;input.txt&#39;, function(err, data) {</span></span>
<span class="line"><span>    if (err) {</span></span>
<span class="line"><span>        console.error(err)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        console.log(data.toString());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>console.log(&#39;程序执行结束&#39;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h3><pre><code>* 循环 \`观察者模式 \`事件相当于主题 事件处理函数相当于观察者
* EventMitter对象
    * 实例
    \`\`\`
    // 事件模块对象
    var events = require(&#39;events&#39;);
    // 事件处理对象
    var eventEmitter = new events.EventEmitter();
    // 连接函数
    var connectHandler = function connected() {
    console.log(&#39;连接成功&#39;);
    eventEmitter.emit(&#39;dataReceived&#39;);
    }
    // 注册连接函数
    eventEmitter.on(&#39;connection&#39;, connectHandler);
    // 注册完成匿名函数
    eventEmitter.on(&#39;dataReceived&#39;, function() {
    console.log(&#39;数据接受成功&#39;);
    });
    // 触发连接
    eventEmitter.emit(&#39;connection&#39;);
    // 完成
    console.log(&#39;程序执行完毕&#39;);
    \`\`\`
</code></pre><h3 id="缓冲区-buffer" tabindex="-1"><a class="header-anchor" href="#缓冲区-buffer"><span>缓冲区 Buffer</span></a></h3><pre><code>* 用途 \`处理二进制数据
* 创建
    \`\`\`
    const buf = Buffer.alloc(10);
    console.log(buf);
    const buf = Buffer.from(&#39;wings&#39;, &#39;ascii&#39;);
    console.log(buf.toString(&#39;hex&#39;));
    \`\`\`
* 写入
    \`\`\`
    const buf = Buffer.alloc(10);
    const len = buf.write(&#39;www.baidu.com&#39;);
    console.log(&#39;写入字节数&#39; + len);
    \`\`\`
* 读取
    \`\`\`
    for (let i = 0; i &lt; 5; i++) {
        console.log(buf[i]);
    }
    \`\`\`
* 转JSON
    \`\`\`
    const buf = Buffer.alloc(10);
    const json = buf.toJSON();
    console.log(json);
    \`\`\`
* 合并
    \`\`\`
    const buf1 = Buffer.from(&#39;Hello&#39;);
    const buf2 = Buffer.from(&#39;World&#39;);
    const buf3 = Buffer.concat([buf1, buf2]);
    console.log(buf3.toString());
    \`\`\`
* 比较
    \`\`\`
    const buf1 = Buffer.from(&#39;Hello&#39;);
    const buf2 = Buffer.from(&#39;2Hello3&#39;);
    var result = buf1.compare(buf2);
    if (result &lt; 0) {
    console.log(&#39;之前&#39;);
    } else if (result == 0) {
    console.log(&#39;相等&#39;);
    } else {
    console.log(&#39;之后&#39;);
    }
    \`\`\`
* 拷贝
    \`\`\`
    const buf1 = Buffer.from(&#39;Hello&#39;);
    const buf2 = Buffer.from(&#39;1234567890&#39;);
    buf1.copy(buf2, 2);
    console.log(buf2.toString());
    \`\`\`
* 裁剪
    \`\`\`
    const buf1 = Buffer.from(&#39;Hello&#39;);
    const buf2 = buf1.slice(0, 3);
    console.log(buf2.toString());
    \`\`\`
* 长度
    \`\`\`
    const buf = Buffer.from(&#39;Hello&#39;);
    console.log(buf.length);
    \`\`\`
</code></pre><h3 id="流-stream" tabindex="-1"><a class="header-anchor" href="#流-stream"><span>流 Stream</span></a></h3><pre><code>* 流读取
    \`\`\`
    var fs = require(&#39;fs&#39;);
    var data = &#39;&#39;;
    // 创建流
    var readStream = fs.createReadStream(&#39;input.txt&#39;);
    // 设置编码
    readStream.setEncoding(&#39;UTF8&#39;);
    // 流事件 data end err
    readStream.on(&#39;data&#39;, function(chunk) {
    data += chunk;
    });
    readStream.on(&#39;end&#39;, function() {
    console.log(data);
    });
    readStream.on(&#39;error&#39;, function(err) {
    console.log(err);
    });
    console.log(&#39;程序执行完毕&#39;);
    \`\`\`
* 写入流
    \`\`\`
    var fs = require(&#39;fs&#39;);
    var data = &#39;我就是我&#39;;
    // 创建
    var writeStream = fs.createWriteStream(&#39;output.txt&#39;);
    // 写入
    writeStream.write( data, &#39;UTF8&#39;);
    writeStream.end();
    // 写入流事件监听
    writeStream.on(&#39;finish&#39;, function() {
    console.log(&#39;写入完成&#39;);
    });
    writeStream.on(&#39;error&#39;, function(err) {
    console.log(err.stack);
    });
    console.log(&#39;程序执行完毕&#39;);
    \`\`\`
* 管理流
    \`\`\`
    var fs = require(&#39;fs&#39;);
    var readStream = fs.createReadStream(&#39;input.txt&#39;);
    var writeStream = fs.createWriteStream(&#39;output.txt&#39;);
    readStream.pipe(writeStream);
    console.log(&#39;程序执行完毕&#39;);
    \`\`\`
* 链式流
    \`\`\`
    * 压缩
    var fs = require(&#39;fs&#39;);
    var zlib = require(&#39;zlib&#39;);
    fs.createReadStream(&#39;input.txt&#39;).pipe(zlib.createGzip()).pipe(fs.createWriteStream(&#39;input.txt.gz&#39;));
    console.log(&#39;程序执行完成&#39;);
    * 解压
    var fs = require(&#39;fs&#39;);
    var zlib = require(&#39;zlib&#39;);
    fs.createReadStream(&#39;input.txt.gz&#39;).pipe(zlib.createGunzip()).pipe(fs.createWriteStream(&#39;input2.txt&#39;));
    console.log(&#39;程序执行完毕&#39;);
    \`\`\`
</code></pre><h3 id="模块-1" tabindex="-1"><a class="header-anchor" href="#模块-1"><span>模块</span></a></h3><pre><code>* 方法模块
    * 定义
    \`\`\`
    exports.world = function() {
        console.log(&#39;Hello World&#39;);
    }
    \`\`\`
    * 引用
    \`\`\`
    var hello = require(&#39;./hello.js&#39;);
    hello.world();
    \`\`\`
* 对象模块
    * 定义
    \`\`\`
    function Hello() {
    var name;
    this.setName = function (newname) {
    this.name = newname
    };
    this.sayHello = function() {
    console.log(&#39;hello &#39; + this.name);
    }
    };
    module.exports = Hello;
    \`\`\`
    * 引用
    \`\`\`
    var Hello = require(&#39;./hello.js&#39;);
    var hello = new Hello();
    hello.setName(&#39;Wings&#39;);
    hello.sayHello();
    \`\`\`
* 原生模块
    * 网络 \`http\`
    * 路由 \`url\`
    * 文件 \`fs\`
</code></pre><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h3><pre><code>* 匿名函数参数实例
    \`\`\`
    function say(name) {
    console.log(&#39;hello&#39; + name);
    }
    // 接受匿名函数参数
    function execure(someFunction, name) {
    someFunction(name);
    }
    execure(say, &#39;Wings&#39;);
    \`\`\`
</code></pre><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由"><span>路由</span></a></h3><pre><code>* 服务器
    \`\`\`
    var http = require(&#39;http&#39;);
    var url = require(&#39;url&#39;);
    function start(route) {
    function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    route(pathname);
    response.writeHead(200, {&#39;Content-Type&#39;:&#39;text/plain&#39;});
    response.write(&#39;Hello World&#39;);
    response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log(&#39;Server has started.&#39;);
    }
    exports.start = start;
    \`\`\`
* 路由
    \`\`\`
    function route(pathname) {
    console.log(pathname);
    }
    exports.route = route;
    \`\`\`
* 启用
    \`\`\`
    var server = require(&#39;./server&#39;);
    var router = require(&#39;./router&#39;);
    server.start(router.route);
    \`\`\`
</code></pre><h3 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量"><span>全局变量</span></a></h3><pre><code>* 文件名
    \`\`\`
    console.log(__filename);
    \`\`\`
* 目录
    \`\`\`
    console.log(__dirname);
    \`\`\`
* 延时执行
    \`\`\`
    function sayHello () {
    console.log(&#39;hello&#39;);
    }
    var t = setTimeout(sayHello, 2000);
    clearTimeout(t);
    \`\`\`
* 定时器
    \`\`\`
    function sayHello () {
    console.log(&#39;hello&#39;);
    }
    var t = setInterval(sayHello, 2000);
    clearInterval(t);
    \`\`\`
* 控制台
    \`\`\`
    console.log(&#39;Hello World&#39;);
    \`\`\`
* 进程
    \`\`\`
    process.on(&#39;exit&#39;, function(code){
    console.log(&#39;退出码&#39; + code);
    });
    console.log(&#39;程序执行结束&#39;);
    \`\`\`
</code></pre><h3 id="常用工具" tabindex="-1"><a class="header-anchor" href="#常用工具"><span>常用工具</span></a></h3><pre><code>* 文件系统（fs）
* 读取文件同步 \`fs.readFileSync(path)
* 读取文件异步 \`fs.readFile(path, callback) fs.read(fd, buffer, offset, length, position, callback)
* 打开文件 \`fs.open(path, r+, callback)
* 获取文件信息 \`fs.stat(path, callback)
* 写入文件 \`fs.writeFile(file, data, callback)
* 关闭文件 \`fs.close(fd, callback)
* 截取文件 \`fs.ftruncate(fd, len, callback)
* 删除文件 \`fs.unlink(path, callback)
* 创建目录 \`fs.mkdir(path, callback)
* 读取目录 \`fs.readir(path, callback)
* 删除目录 \`fs.rmdir(path, callback)
* GET\\POST请求
* Web模块
* Express模块
* RESTful
* 多线程
</code></pre>`,36)]))}const c=e(o,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/%E8%AF%AD%E8%A8%80/9k2npeo9/","title":"Node.js","lang":"zh-CN","frontmatter":{"title":"Node.js","createTime":"2020/05/06","tags":["Node.js"],"categories":["前端","Web","语言"],"permalink":"/语言/9k2npeo9/","description":"安装 linux mac 模块 全局环境配置 window npm config set prefix \\"D:\\\\Program Files\\\\nodejs\\\\node_global\\" npm config set cache \\"D:\\\\Program Files\\\\nodejs\\\\node_cache\\" PATH D:\\\\Program Files\\\\nodejs\\\\...","head":[["meta",{"property":"og:url","content":"https://orthogonalandparallel.github.io/%E8%AF%AD%E8%A8%80/9k2npeo9/"}],["meta",{"property":"og:site_name","content":"万里任禅游"}],["meta",{"property":"og:title","content":"Node.js"}],["meta",{"property":"og:description","content":"安装 linux mac 模块 全局环境配置 window npm config set prefix \\"D:\\\\Program Files\\\\nodejs\\\\node_global\\" npm config set cache \\"D:\\\\Program Files\\\\nodejs\\\\node_cache\\" PATH D:\\\\Program Files\\\\nodejs\\\\..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-12T08:13:49.000Z"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:modified_time","content":"2025-06-12T08:13:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node.js\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-06-12T08:13:49.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":4.09,"words":1226},"git":{"updatedTime":1749716029000,"contributors":[{"name":"靳琛","email":"jinchenj@yonyou.com","commits":1,"avatar":"https://avatars.githubusercontent.com/靳琛?v=4","url":"https://github.com/靳琛"}]},"autoDesc":true,"filePathRelative":"笔记/语言/前端/node.md","categoryList":[{"id":"7051dc","sort":10000,"name":"笔记"},{"id":"d592ad","sort":10015,"name":"语言"},{"id":"a3eb3f","sort":10020,"name":"前端"}],"bulletin":false}');export{c as comp,d as data};
