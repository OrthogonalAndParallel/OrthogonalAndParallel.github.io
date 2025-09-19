import{_ as n,c as a,a as i,o as l}from"./app-DUomSOUZ.js";const e={};function t(p,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h2 id="定时" tabindex="-1"><a class="header-anchor" href="#定时"><span>定时</span></a></h2><p><strong>Quartz</strong></p><ul><li>spring-quartz.xml</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;</span></span>
<span class="line"><span>  xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>  xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.0.xsd&quot;&gt;</span></span>
<span class="line"><span>  &lt;!-- 添加调度的任务bean 配置对应的class--&gt;</span></span>
<span class="line"><span>  &lt;bean id=&quot;myScheduleTest&quot; class=&quot;com.osy.task.MyScheduleTest&quot; /&gt;这个是我们要执行任务的类</span></span>
<span class="line"><span>  &lt;!--配置调度具体执行的方法--&gt;</span></span>
<span class="line"><span>  &lt;bean id=&quot;myPrintDetail&quot;</span></span>
<span class="line"><span>    class=&quot;org.springframework.scheduling.quartz.MethodInvokingJobDetailFactoryBean&quot;&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;targetObject&quot; ref=&quot;myScheduleTest&quot; /&gt;执行的类名</span></span>
<span class="line"><span>    &lt;property name=&quot;targetMethod&quot; value=&quot;mySchedule&quot; /&gt;执行的方法</span></span>
<span class="line"><span>    &lt;property name=&quot;concurrent&quot; value=&quot;false&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/bean&gt;</span></span>
<span class="line"><span>  &lt;!--配置调度执行的触发的时间--&gt;</span></span>
<span class="line"><span>  &lt;bean id=&quot;myPrintTrigger&quot; class=&quot;org.springframework.scheduling.quartz.CronTriggerFactoryBean&quot;&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;jobDetail&quot; ref=&quot;myPrintDetail&quot; /&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;cronExpression&quot;&gt;</span></span>
<span class="line"><span>      &lt;!-- 每天早上8点执行任务调度 --&gt;</span></span>
<span class="line"><span>      &lt;value&gt;0/5 * * * * ? &lt;/value&gt;</span></span>
<span class="line"><span>    &lt;/property&gt;</span></span>
<span class="line"><span>  &lt;/bean&gt;</span></span>
<span class="line"><span>  &lt;!-- quartz的调度工厂 调度工厂只能有一个，多个调度任务在list中添加 --&gt;</span></span>
<span class="line"><span>  &lt;bean class=&quot;org.springframework.scheduling.quartz.SchedulerFactoryBean&quot;&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;triggers&quot;&gt;</span></span>
<span class="line"><span>      &lt;list&gt;</span></span>
<span class="line"><span>         &lt;!-- 所有的调度列表--&gt;</span></span>
<span class="line"><span>        &lt;ref local=&quot;myPrintTrigger&quot; /&gt;</span></span>
<span class="line"><span>      &lt;/list&gt;</span></span>
<span class="line"><span>    &lt;/property&gt;</span></span>
<span class="line"><span>  &lt;/bean&gt;</span></span>
<span class="line"><span>&lt;/beans&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>class</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>public class MyScheduleTest {</span></span>
<span class="line"><span>    public void mySchedule(){</span></span>
<span class="line"><span>        System.out.println(&quot;spring-quqrz的使用&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>web.xml</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;!-- Spring MVC servlet --&gt;</span></span>
<span class="line"><span>    &lt;servlet&gt;</span></span>
<span class="line"><span>        &lt;servlet-name&gt;SpringMVC&lt;/servlet-name&gt;</span></span>
<span class="line"><span>        &lt;servlet-class&gt;org.springframework.web.servlet.DispatcherServlet&lt;/servlet-class&gt;</span></span>
<span class="line"><span>        &lt;init-param&gt;</span></span>
<span class="line"><span>            &lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;</span></span>
<span class="line"><span>            &lt;param-value&gt;classpath:spring-mvc.xml,classpath:spring-quartz.xml&lt;/param-value&gt;</span></span>
<span class="line"><span>        &lt;/init-param&gt;</span></span>
<span class="line"><span>        &lt;load-on-startup&gt;1&lt;/load-on-startup&gt;</span></span>
<span class="line"><span>        &lt;async-supported&gt;true&lt;/async-supported&gt;</span></span>
<span class="line"><span>    &lt;/servlet&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>spring task</strong></p><ul><li>spring-mvc.xml</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;beans xmlns:task=&quot;http://www.springframework.org/schema/task&quot;</span></span>
<span class="line"><span>    xsi:schemaLocation=&quot;http://www.springframework.org/schema/task  </span></span>
<span class="line"><span>    http://www.springframework.org/schema/task/spring-task-3.1.xsd &quot;&gt;</span></span>
<span class="line"><span>    &lt;context:component-scan base-package=&quot;com.osy&quot;/&gt;</span></span>
<span class="line"><span>    &lt;task:annotation-driven scheduler=&quot;scheduler&quot; executor=&quot;executor&quot;/&gt; </span></span>
<span class="line"><span>    &lt;task:executor id=&quot;executor&quot; pool-size=&quot;5&quot; /&gt;</span></span>
<span class="line"><span>    &lt;task:scheduler id=&quot;scheduler&quot; pool-size=&quot;10&quot; /&gt;</span></span>
<span class="line"><span>&lt;/beans&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>class</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class FlightTrainTask {</span></span>
<span class="line"><span>    @Scheduled(cron = &quot;0/5 * * * * ? &quot;) // 间隔5秒执行</span></span>
<span class="line"><span>    public void taskCycle() {</span></span>
<span class="line"><span>        System.out.println(&quot;使用SpringMVC框架配置定时任务&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uncode Schedule（分布式定时）</strong></p><ul><li>spring-task</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;!-- 分布式任务管理器 --&gt;</span></span>
<span class="line"><span>&lt;bean id=&quot;zkScheduleManager&quot; class=&quot;cn.uncode.schedule.ZKScheduleManager&quot;</span></span>
<span class="line"><span>	init-method=&quot;init&quot;&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;zkConfig&quot;&gt;</span></span>
<span class="line"><span>		   &lt;map&gt;</span></span>
<span class="line"><span>			  &lt;entry key=&quot;zkConnectString&quot; value=&quot;127.0.0.1:2181&quot; /&gt;</span></span>
<span class="line"><span>			  &lt;entry key=&quot;rootPath&quot; value=&quot;/uncode/schedule&quot; /&gt;</span></span>
<span class="line"><span>			  &lt;entry key=&quot;zkSessionTimeout&quot; value=&quot;60000&quot; /&gt;</span></span>
<span class="line"><span>			  &lt;entry key=&quot;userName&quot; value=&quot;ScheduleAdmin&quot; /&gt;</span></span>
<span class="line"><span>			  &lt;entry key=&quot;password&quot; value=&quot;password&quot; /&gt;</span></span>
<span class="line"><span>			  &lt;entry key=&quot;isCheckParentPath&quot; value=&quot;true&quot; /&gt;</span></span>
<span class="line"><span>			  &lt;entry key=&quot;ipBlacklist&quot; value=&quot;127.0.0.2,127.0.0.3&quot; /&gt;</span></span>
<span class="line"><span>		   &lt;/map&gt;</span></span>
<span class="line"><span>	&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span>
<span class="line"><span>&lt;!-- Spring bean配置 --&gt;</span></span>
<span class="line"><span>&lt;bean id=&quot;taskObj&quot; class=&quot;cn.uncode.schedule.SimpleTask&quot;/&gt;</span></span>
<span class="line"><span>&lt;!-- Spring task配置 --&gt;</span></span>
<span class="line"><span>&lt;task:scheduled-tasks scheduler=&quot;zkScheduleManager&quot;&gt;</span></span>
<span class="line"><span>	&lt;task:scheduled ref=&quot;taskObj&quot; method=&quot;print&quot;  fixed-rate=&quot;5000&quot;/&gt;</span></span>
<span class="line"><span>&lt;/task:scheduled-tasks&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>管理后台</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;servlet&gt;</span></span>
<span class="line"><span>    &lt;servlet-name&gt;UncodeSchedule&lt;/servlet-name&gt;</span></span>
<span class="line"><span>    &lt;servlet-class&gt;cn.uncode.schedule.web.ManagerServlet&lt;/servlet-class&gt;</span></span>
<span class="line"><span>&lt;/servlet&gt;</span></span>
<span class="line"><span>&lt;servlet-mapping&gt;</span></span>
<span class="line"><span>    &lt;servlet-name&gt;UncodeSchedule&lt;/servlet-name&gt;</span></span>
<span class="line"><span>    &lt;url-pattern&gt;/uncode/schedule&lt;/url-pattern&gt;</span></span>
<span class="line"><span>&lt;/servlet-mapping&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Quartz</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;bean id=&quot;zkScheduleManager&quot; class=&quot;cn.uncode.schedule.ZKScheduleManager&quot;</span></span>
<span class="line"><span>		init-method=&quot;init&quot;&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;zkConfig&quot;&gt;</span></span>
<span class="line"><span>		   &lt;map&gt;</span></span>
<span class="line"><span>			  &lt;entry key=&quot;zkConnectString&quot; value=&quot;183.131.76.147:2181&quot; /&gt;</span></span>
<span class="line"><span>			  &lt;entry key=&quot;rootPath&quot; value=&quot;/uncode/schedule&quot; /&gt;</span></span>
<span class="line"><span>			  &lt;entry key=&quot;zkSessionTimeout&quot; value=&quot;60000&quot; /&gt;</span></span>
<span class="line"><span>			  &lt;entry key=&quot;userName&quot; value=&quot;ScheduleAdmin&quot; /&gt;</span></span>
<span class="line"><span>			  &lt;entry key=&quot;password&quot; value=&quot;password&quot; /&gt;</span></span>
<span class="line"><span>			  &lt;entry key=&quot;autoRegisterTask&quot; value=&quot;true&quot; /&gt;</span></span>
<span class="line"><span>			  &lt;entry key=&quot;ipBlacklist&quot; value=&quot;127.0.0.2,127.0.0.3&quot; /&gt;</span></span>
<span class="line"><span>		   &lt;/map&gt;</span></span>
<span class="line"><span>	&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;	</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;bean id=&quot;taskObj&quot; class=&quot;cn.uncode.schedule.SimpleTask&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 定义调用对象和调用对象的方法 --&gt;</span></span>
<span class="line"><span>&lt;bean id=&quot;jobtask&quot; class=&quot;cn.uncode.schedule.quartz.MethodInvokingJobDetailFactoryBean&quot;&gt;</span></span>
<span class="line"><span>	&lt;!-- 调用的类 --&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;targetObject&quot; ref=&quot;taskObj&quot; /&gt;</span></span>
<span class="line"><span>	&lt;!-- 调用类中的方法 --&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;targetMethod&quot; value=&quot;print&quot; /&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span>
<span class="line"><span>&lt;!-- 定义触发时间 --&gt;</span></span>
<span class="line"><span>&lt;bean id=&quot;doTime&quot; class=&quot;org.springframework.scheduling.quartz.CronTriggerFactoryBean&quot;&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;jobDetail&quot;&gt;</span></span>
<span class="line"><span>		&lt;ref bean=&quot;jobtask&quot;/&gt;</span></span>
<span class="line"><span>	&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;!-- cron表达式 --&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;cronExpression&quot;&gt;</span></span>
<span class="line"><span>		&lt;value&gt;0/3 * * * * ?&lt;/value&gt;</span></span>
<span class="line"><span>	&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span>
<span class="line"><span>&lt;!-- 总管理类 如果将lazy-init=&#39;false&#39;那么容器启动就会执行调度程序  --&gt;</span></span>
<span class="line"><span>&lt;bean id=&quot;startQuertz&quot; lazy-init=&quot;false&quot; autowire=&quot;no&quot; class=&quot;org.springframework.scheduling.quartz.SchedulerFactoryBean&quot;&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;triggers&quot;&gt;</span></span>
<span class="line"><span>		&lt;list&gt;</span></span>
<span class="line"><span>			&lt;ref bean=&quot;doTime&quot;/&gt;</span></span>
<span class="line"><span>		&lt;/list&gt;</span></span>
<span class="line"><span>	&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>redis（分布式定时)</strong></p><ul><li>spring.xml</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;task:executor id=&quot;taskExecutor&quot; pool-size=&quot;10&quot; /&gt;</span></span>
<span class="line"><span>&lt;task:annotation-driven&gt;&lt;/task:annotation-driven&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>java</li></ul><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Component</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Slf4j</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> RedisTaskControl</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    //@Resource</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> RedisTemplate</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> redisTemplate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> final</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> LOCK</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">task-job-lock</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> final</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> KEY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">tasklock</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     * 判断是否能开始任务</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> boolean</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> isStart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        boolean</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> result</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">null</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> !=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> redisTemplate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">opsForValue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">KEY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &amp;&amp;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> !</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">redisTemplate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">opsForValue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">KEY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">equals</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">LOCK</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            result</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> else</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            redisTemplate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">opsForValue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">set</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">KEY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> LOCK</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            result</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> result</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     * 关闭任务锁</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> colse</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">null</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> !=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> redisTemplate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">opsForValue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">KEY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &amp;&amp;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> redisTemplate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">opsForValue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">KEY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">equals</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">LOCK</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            redisTemplate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">delete</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">KEY</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Scheduled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">cron</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">00 00 01  * * ?</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> synchronizeMain</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">redisTaskControl</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">isStart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">())</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日志lombok" tabindex="-1"><a class="header-anchor" href="#日志lombok"><span>日志lombok</span></a></h2><ul><li>pom.xml</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;plugin&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;3.8.1&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;configuration&gt;</span></span>
<span class="line"><span>        &lt;source&gt;1.8&lt;/source&gt;</span></span>
<span class="line"><span>        &lt;target&gt;1.8&lt;/target&gt;</span></span>
<span class="line"><span>        &lt;encoding&gt;UTF-8&lt;/encoding&gt;</span></span>
<span class="line"><span>        &lt;compilerArgs&gt;</span></span>
<span class="line"><span>            &lt;arg&gt;-verbose&lt;/arg&gt;</span></span>
<span class="line"><span>            &lt;arg&gt;-Xlint:unchecked&lt;/arg&gt;</span></span>
<span class="line"><span>            &lt;arg&gt;-Xlint:deprecation&lt;/arg&gt;</span></span>
<span class="line"><span>            &lt;arg&gt;-extdirs&lt;/arg&gt;</span></span>
<span class="line"><span>            &lt;arg&gt;\${project.basedir}/src/main/webapp/WEB-INF/lib&lt;/arg&gt;</span></span>
<span class="line"><span>        &lt;/compilerArgs&gt;</span></span>
<span class="line"><span>        &lt;annotationProcessorPaths&gt;</span></span>
<span class="line"><span>            &lt;path&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;lombok&lt;/artifactId&gt;</span></span>
<span class="line"><span>                &lt;version&gt;1.18.8&lt;/version&gt;</span></span>
<span class="line"><span>            &lt;/path&gt;</span></span>
<span class="line"><span>        &lt;/annotationProcessorPaths&gt;</span></span>
<span class="line"><span>    &lt;/configuration&gt;</span></span>
<span class="line"><span>&lt;/plugin&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>logback.xml</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;configuration&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 项目名称 --&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;projectname&quot; value=&quot;taikang&quot; /&gt;</span></span>
<span class="line"><span>    &lt;!-- 日志存放路径 --&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;log.path&quot; value=&quot;../logs/TaiKang&quot; /&gt;</span></span>
<span class="line"><span>    &lt;!-- 日志输出格式 --&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;log.pattern&quot; value=&quot;%d{yyy-MM-dd HH:mm:ss.SSS} [%X{X-B3-TraceId:-},%X{X-B3-SpanId:-}] [%thread] %-5level %logger{20} - [%method,%line] - %msg%n&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 控制台输出 --&gt;</span></span>
<span class="line"><span>    &lt;appender name=&quot;console&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;</span></span>
<span class="line"><span>        &lt;encoder&gt;</span></span>
<span class="line"><span>            &lt;pattern&gt;\${log.pattern}&lt;/pattern&gt;</span></span>
<span class="line"><span>        &lt;/encoder&gt;</span></span>
<span class="line"><span>    &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- INFO系统日志输出 --&gt;</span></span>
<span class="line"><span>    &lt;appender name=&quot;file_info&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span>        &lt;file&gt;\${log.path}/\${projectname}.log&lt;/file&gt;</span></span>
<span class="line"><span>        &lt;!-- 循环政策：基于时间创建日志文件 --&gt;</span></span>
<span class="line"><span>        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;</span></span>
<span class="line"><span>            &lt;!-- 日志文件名格式 --&gt;</span></span>
<span class="line"><span>            &lt;fileNamePattern&gt;\${log.path}/\${projectname}.log&lt;/fileNamePattern&gt;</span></span>
<span class="line"><span>            &lt;!-- 日志最大的历史 60天 --&gt;</span></span>
<span class="line"><span>            &lt;maxHistory&gt;60&lt;/maxHistory&gt;</span></span>
<span class="line"><span>        &lt;/rollingPolicy&gt;</span></span>
<span class="line"><span>        &lt;encoder&gt;</span></span>
<span class="line"><span>            &lt;pattern&gt;\${log.pattern}&lt;/pattern&gt;</span></span>
<span class="line"><span>        &lt;/encoder&gt;</span></span>
<span class="line"><span>        &lt;filter class=&quot;ch.qos.logback.classic.filter.LevelFilter&quot;&gt;</span></span>
<span class="line"><span>            &lt;!-- 过滤的级别 --&gt;</span></span>
<span class="line"><span>            &lt;level&gt;INFO&lt;/level&gt;</span></span>
<span class="line"><span>            &lt;!-- 匹配时的操作：接收（记录） --&gt;</span></span>
<span class="line"><span>            &lt;onMatch&gt;ACCEPT&lt;/onMatch&gt;</span></span>
<span class="line"><span>            &lt;!-- 不匹配时的操作：拒绝（不记录） --&gt;</span></span>
<span class="line"><span>            &lt;onMismatch&gt;DENY&lt;/onMismatch&gt;</span></span>
<span class="line"><span>        &lt;/filter&gt;</span></span>
<span class="line"><span>    &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- ERROR系统日志输出 --&gt;</span></span>
<span class="line"><span>    &lt;appender name=&quot;file_error&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span>        &lt;file&gt;\${log.path}/\${projectname}.log&lt;/file&gt;</span></span>
<span class="line"><span>        &lt;!-- 循环政策：基于时间创建日志文件 --&gt;</span></span>
<span class="line"><span>        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;</span></span>
<span class="line"><span>            &lt;!-- 日志文件名格式 --&gt;</span></span>
<span class="line"><span>            &lt;fileNamePattern&gt;\${log.path}/\${projectname}.log&lt;/fileNamePattern&gt;</span></span>
<span class="line"><span>            &lt;!-- 日志最大的历史 60天 --&gt;</span></span>
<span class="line"><span>            &lt;maxHistory&gt;60&lt;/maxHistory&gt;</span></span>
<span class="line"><span>        &lt;/rollingPolicy&gt;</span></span>
<span class="line"><span>        &lt;encoder&gt;</span></span>
<span class="line"><span>            &lt;pattern&gt;\${log.pattern}&lt;/pattern&gt;</span></span>
<span class="line"><span>        &lt;/encoder&gt;</span></span>
<span class="line"><span>        &lt;filter class=&quot;ch.qos.logback.classic.filter.LevelFilter&quot;&gt;</span></span>
<span class="line"><span>            &lt;!-- 过滤的级别 --&gt;</span></span>
<span class="line"><span>            &lt;level&gt;ERROR&lt;/level&gt;</span></span>
<span class="line"><span>            &lt;!-- 匹配时的操作：接收（记录） --&gt;</span></span>
<span class="line"><span>            &lt;onMatch&gt;ACCEPT&lt;/onMatch&gt;</span></span>
<span class="line"><span>            &lt;!-- 不匹配时的操作：拒绝（不记录） --&gt;</span></span>
<span class="line"><span>            &lt;onMismatch&gt;DENY&lt;/onMismatch&gt;</span></span>
<span class="line"><span>        &lt;/filter&gt;</span></span>
<span class="line"><span>    &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 系统模块日志级别控制  --&gt;</span></span>
<span class="line"><span>    &lt;logger name=&quot;com.loop&quot; level=&quot;info&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- Spring日志级别控制  --&gt;</span></span>
<span class="line"><span>    &lt;logger name=&quot;org.springframework&quot; level=&quot;warn&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;root level=&quot;info&quot;&gt;</span></span>
<span class="line"><span>        &lt;appender-ref ref=&quot;console&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/root&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!--系统操作日志--&gt;</span></span>
<span class="line"><span>    &lt;root level=&quot;info&quot;&gt;</span></span>
<span class="line"><span>        &lt;appender-ref ref=&quot;file_info&quot; /&gt;</span></span>
<span class="line"><span>        &lt;appender-ref ref=&quot;file_error&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/root&gt;</span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31)]))}const r=n(e,[["render",t],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/%E8%AF%AD%E8%A8%80/jze118vy/","title":"Spring","lang":"zh-CN","frontmatter":{"title":"Spring","createTime":"2020/09/06 10:46:49","permalink":"/语言/jze118vy/","description":"定时 Quartz spring-quartz.xml class web.xml spring task spring-mvc.xml class Uncode Schedule（分布式定时） spring-task 管理后台 Quartz redis（分布式定时) spring.xml java 日志lombok pom.xml logback.xml","head":[["meta",{"property":"og:url","content":"https://orthogonalandparallel.github.io/%E8%AF%AD%E8%A8%80/jze118vy/"}],["meta",{"property":"og:site_name","content":"万里任禅游"}],["meta",{"property":"og:title","content":"Spring"}],["meta",{"property":"og:description","content":"定时 Quartz spring-quartz.xml class web.xml spring task spring-mvc.xml class Uncode Schedule（分布式定时） spring-task 管理后台 Quartz redis（分布式定时) spring.xml java 日志lombok pom.xml logback.xml"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-07-01T13:12:17.000Z"}],["meta",{"property":"article:modified_time","content":"2025-07-01T13:12:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-07-01T13:12:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":4.07,"words":1220},"git":{"updatedTime":1751375537000,"contributors":[{"name":"靳琛","email":"jinchenj@yonyou.com","commits":1,"avatar":"https://avatars.githubusercontent.com/靳琛?v=4","url":"https://github.com/靳琛"}]},"autoDesc":true,"filePathRelative":"笔记/语言/后端/spring.md","categoryList":[{"id":"7051dc","sort":10000,"name":"笔记"},{"id":"d592ad","sort":10015,"name":"语言"},{"id":"83a577","sort":10018,"name":"后端"}],"bulletin":false}');export{r as comp,c as data};
