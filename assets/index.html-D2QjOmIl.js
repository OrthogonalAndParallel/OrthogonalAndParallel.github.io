import{_ as n,c as a,a as e,o as i}from"./app-DUomSOUZ.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签"><span>标签</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@SpringBootApplication -- springboot应用</span></span>
<span class="line"><span>@MapperScan -- mapper扫描</span></span>
<span class="line"><span>@EnableScheduling -- 允许定时</span></span>
<span class="line"><span>@Componet -- 组件</span></span>
<span class="line"><span>@Controller -- 控制</span></span>
<span class="line"><span>@RestController -- 不能返回页面</span></span>
<span class="line"><span>@Service -- 服务</span></span>
<span class="line"><span>@Mapper -- 映射</span></span>
<span class="line"><span>@Entity -- 实体</span></span>
<span class="line"><span>@Autowired -- Type注入</span></span>
<span class="line"><span>@Resource -- Name注入</span></span>
<span class="line"><span>@RequestMapping -- 请求映射</span></span>
<span class="line"><span>@ResponseBody -- 返回页面</span></span>
<span class="line"><span>@Api</span></span>
<span class="line"><span>@ApiOperation</span></span>
<span class="line"><span>@ApiImplicitParam</span></span>
<span class="line"><span>@Slf4j -- 日志</span></span>
<span class="line"><span>@WebService -- web服务</span></span>
<span class="line"><span>@WebMethod -- web方法</span></span>
<span class="line"><span>@Configuration -- 配置</span></span>
<span class="line"><span>@Scheduled(cron=&#39;&#39;) -- 安排</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用配置" tabindex="-1"><a class="header-anchor" href="#常用配置"><span>常用配置</span></a></h2><h3 id="热部署" tabindex="-1"><a class="header-anchor" href="#热部署"><span>热部署</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;</span></span>
<span class="line"><span>	&lt;optional&gt;true&lt;/optional&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集成mybatis" tabindex="-1"><a class="header-anchor" href="#集成mybatis"><span>集成mybatis</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;2.1.0&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集成myabtis-plus" tabindex="-1"><a class="header-anchor" href="#集成myabtis-plus"><span>集成myabtis-plus</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;mybatis-plus&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;latest-version&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集成通用tk-mapper" tabindex="-1"><a class="header-anchor" href="#集成通用tk-mapper"><span>集成通用tk-mapper</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;tk.mybatis&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;mapper-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;2.1.5&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集成mysql" tabindex="-1"><a class="header-anchor" href="#集成mysql"><span>集成mysql</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;8.0.17&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集成oracle" tabindex="-1"><a class="header-anchor" href="#集成oracle"><span>集成oracle</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.oracle&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;ojdbc6&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;11.2.0.3&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  jpa:</span></span>
<span class="line"><span>    database: oracle</span></span>
<span class="line"><span>    show-sql: true</span></span>
<span class="line"><span>  datasource:</span></span>
<span class="line"><span>    type: com.zaxxer.hikari.HikariDataSource</span></span>
<span class="line"><span>    #数据库驱动:</span></span>
<span class="line"><span>    #ORACLE  oracle.jdbc.OracleDriver,</span></span>
<span class="line"><span>    #MYSQL   com.mysql.jdbc.Driver, org.mariadb.jdbc.Driver</span></span>
<span class="line"><span>    driver-class-name: com.mysql.jdbc.Driver</span></span>
<span class="line"><span>    #数据库连接：</span></span>
<span class="line"><span>    #ORACLE   jdbc:oracle:thin:@127.0.0.1:1521:orcl,</span></span>
<span class="line"><span>    #MYSQL    jdbc:mysql://127.0.0.1:3306/cloudpivot, jdbc:mariadb://127.0.0.1:3306/cloudpivot</span></span>
<span class="line"><span>    url: jdbc:mysql://121.36.91.215:3306/cloudpivot_hbb</span></span>
<span class="line"><span>    username: dev</span></span>
<span class="line"><span>    password: 123456</span></span>
<span class="line"><span>    hikari:</span></span>
<span class="line"><span>      maximum-pool-size: 30                #根据系统并发用户数</span></span>
<span class="line"><span>      data-source-properties:</span></span>
<span class="line"><span>        cachePrepStmts: true</span></span>
<span class="line"><span>        prepStmtCacheSize: 1024</span></span>
<span class="line"><span>        prepStmtCacheSqlLimit: 4096</span></span>
<span class="line"><span>        useServerPrepStmts: true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const c=n(l,[["render",p],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/%E8%AF%AD%E8%A8%80/cudfxc1a/","title":"SpringBoot","lang":"zh-CN","frontmatter":{"title":"SpringBoot","createTime":"2020/09/06 10:46:49","permalink":"/语言/cudfxc1a/","description":"标签 常用配置 热部署 集成mybatis 集成myabtis-plus 集成通用tk-mapper 集成mysql 集成oracle","head":[["meta",{"property":"og:url","content":"https://orthogonalandparallel.github.io/%E8%AF%AD%E8%A8%80/cudfxc1a/"}],["meta",{"property":"og:site_name","content":"万里任禅游"}],["meta",{"property":"og:title","content":"SpringBoot"}],["meta",{"property":"og:description","content":"标签 常用配置 热部署 集成mybatis 集成myabtis-plus 集成通用tk-mapper 集成mysql 集成oracle"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-07-01T13:12:17.000Z"}],["meta",{"property":"article:modified_time","content":"2025-07-01T13:12:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-07-01T13:12:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.9,"words":271},"git":{"updatedTime":1751375537000,"contributors":[{"name":"靳琛","email":"jinchenj@yonyou.com","commits":1,"avatar":"https://avatars.githubusercontent.com/靳琛?v=4","url":"https://github.com/靳琛"}]},"autoDesc":true,"filePathRelative":"笔记/语言/后端/springboot.md","categoryList":[{"id":"7051dc","sort":10000,"name":"笔记"},{"id":"d592ad","sort":10015,"name":"语言"},{"id":"83a577","sort":10018,"name":"后端"}],"bulletin":false}');export{c as comp,r as data};
