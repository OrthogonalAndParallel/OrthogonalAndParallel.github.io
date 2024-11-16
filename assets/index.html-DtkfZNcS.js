import{_ as a,a as s}from"./home-CxxYyxX7.js";import{_ as e,c as t,e as n,o as r}from"./app-Dx7DFBWe.js";const l={};function o(p,i){return r(),t("div",null,i[0]||(i[0]=[n(`<h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提"><span>前提</span></a></h2><ol><li>刷机前先确认设备是否支持刷机</li><li>本教程仅适用于官方miui系统，非miui系统请勿使用</li></ol><h2 id="解锁" tabindex="-1"><a class="header-anchor" href="#解锁"><span>解锁</span></a></h2><ul><li><a href="https://www.miui.com/unlock/download.html" target="_blank" rel="noopener noreferrer">小米官方解锁工具</a> ⚠️解锁需要等待168小时</li></ul><h2 id="刷机包" tabindex="-1"><a class="header-anchor" href="#刷机包"><span>刷机包</span></a></h2><ul><li><a href="https://sourceforge.net/projects/paranoidandroid-markakash/files/Star/" target="_blank" rel="noopener noreferrer">paranoidandroid</a></li><li><a href="https://sourceforge.net/projects/crdroid/files/mars/10.x/" target="_blank" rel="noopener noreferrer">crdroid</a></li></ul><h2 id="gapps" tabindex="-1"><a class="header-anchor" href="#gapps"><span>gapps</span></a></h2><ul><li><a href="https://bitgapps.io/" target="_blank" rel="noopener noreferrer">bitgapps</a></li></ul><h2 id="教程" tabindex="-1"><a class="header-anchor" href="#教程"><span>教程</span></a></h2><ol><li>手机多次点击版本号，打开开发者模式</li><li>开发者模式中打开OEM解锁</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">adb</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> reboot</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> fastboot</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 进入fastboot模式</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># fastboot --set-active=a</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># fastboot flash boot_a [boot image]</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fastboot</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> flash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> boot</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [boot </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">image]</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fastboot</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> flash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vendor_boot</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [vendor_boot </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">image]</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># fastboot flash boot magisk_patched.img</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fastboot</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> reboot</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> recovery</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 进入recovery模式，打开sideload开关</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">adb</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sideload</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> crDroidAndroid-14.0-20241113-mars-v10.9.zip</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">adb</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sideload</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> BiTGApps-arm64-14.0.0-v4.2-CORE.zip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="google相机" tabindex="-1"><a class="header-anchor" href="#google相机"><span>Google相机</span></a></h2><ul><li><a href="https://pan.baidu.com/s/1gJf3O0CVdyGSfq1DgLPZbA#/home/%2F/%2F" target="_blank" rel="noopener noreferrer">下载</a></li></ul><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果"><span>效果</span></a></h2><p><img src="`+a+'" alt="锁屏" width="100" height="150"><img src="'+s+'" alt="桌面" width="100" height="150"></p>',15)]))}const c=e(l,[["render",o],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/article/sgopprf6/","title":"小米11U类原生刷机教程","lang":"zh-CN","frontmatter":{"title":"小米11U类原生刷机教程","tags":["刷机","小米"],"createTime":"2024/11/14 09:36:04","permalink":"/article/sgopprf6/","description":"前提 刷机前先确认设备是否支持刷机 本教程仅适用于官方miui系统，非miui系统请勿使用 解锁 小米官方解锁工具 ⚠️解锁需要等待168小时 刷机包 paranoidandroid crdroid gapps bitgapps 教程 手机多次点击版本号，打开开发者模式 开发者模式中打开OEM解锁 Google相机 下载 效果 锁屏 桌面","head":[["meta",{"property":"og:url","content":"https://orthogonalandparallel.github.io/article/sgopprf6/"}],["meta",{"property":"og:site_name","content":"万里任禅游"}],["meta",{"property":"og:title","content":"小米11U类原生刷机教程"}],["meta",{"property":"og:description","content":"前提 刷机前先确认设备是否支持刷机 本教程仅适用于官方miui系统，非miui系统请勿使用 解锁 小米官方解锁工具 ⚠️解锁需要等待168小时 刷机包 paranoidandroid crdroid gapps bitgapps 教程 手机多次点击版本号，打开开发者模式 开发者模式中打开OEM解锁 Google相机 下载 效果 锁屏 桌面"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-15T06:11:12.000Z"}],["meta",{"property":"article:tag","content":"刷机"}],["meta",{"property":"article:tag","content":"小米"}],["meta",{"property":"article:modified_time","content":"2024-11-15T06:11:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"小米11U类原生刷机教程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-15T06:11:12.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.71,"words":212},"git":{"updatedTime":1731651072000,"contributors":[{"name":"靳琛","email":"jinchenj@yonyou.com","commits":1,"avatar":"https://avatars.githubusercontent.com/靳琛?v=4","url":"https://github.com/靳琛"}]},"autoDesc":true,"filePathRelative":"preview/brush/miu11/mi11u.md","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"},{"id":"e91980","sort":10001,"name":"brush"},{"id":"f20c3e","sort":10004,"name":"miu11"}],"bulletin":false}');export{c as comp,k as data};