import{_ as n,c as a,a as e,o as i}from"./app-DUomSOUZ.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><h3 id="webservice" tabindex="-1"><a class="header-anchor" href="#webservice"><span>WebService</span></a></h3><ul><li>使用XML编解码数据，使用SOAP传输数据</li><li>三种基本元素：SOAP、WSDL、UUDI</li></ul><h3 id="wsdl" tabindex="-1"><a class="header-anchor" href="#wsdl"><span>WSDL</span></a></h3><ul><li>基于XML描述WebService的一种语言,描述接口列表和信息</li><li>WSDL文档 <ul><li>定义WebService执行的操作</li><li>定义WebService执行操作的参数（消息）</li><li>定义WebService使用的数据类型</li><li>定义消息的格式和细节</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;definitions&gt;</span></span>
<span class="line"><span>    &lt;types&gt;</span></span>
<span class="line"><span>      definition of types........</span></span>
<span class="line"><span>    &lt;/types&gt;</span></span>
<span class="line"><span>    &lt;binding&gt;</span></span>
<span class="line"><span>      definition of a binding....</span></span>
<span class="line"><span>    &lt;/binding&gt;</span></span>
<span class="line"><span>    &lt;message name=&quot;getTermRequest&quot;&gt;</span></span>
<span class="line"><span>        &lt;part name=&quot;term&quot; type=&quot;xs:string&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/message&gt;</span></span>
<span class="line"><span>    &lt;message name=&quot;getTermResponse&quot;&gt;</span></span>
<span class="line"><span>        &lt;part name=&quot;value&quot; type=&quot;xs:string&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/message&gt;</span></span>
<span class="line"><span>    &lt;portType name=&quot;glossaryTerms&quot;&gt;</span></span>
<span class="line"><span>        &lt;operation name=&quot;getTerm&quot;&gt;</span></span>
<span class="line"><span>            &lt;input message=&quot;getTermRequest&quot;/&gt;</span></span>
<span class="line"><span>            &lt;output message=&quot;getTermResponse&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/operation&gt;</span></span>
<span class="line"><span>    &lt;/portType&gt;</span></span>
<span class="line"><span>&lt;/definitions&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>WSDL端口</li><li>WSDL绑定</li><li>WSDL语法</li></ul><h3 id="soap" tabindex="-1"><a class="header-anchor" href="#soap"><span>SOAP</span></a></h3><ul><li>使程序可用基于HTTP传输XML的协议，是一种传输协议。</li></ul><h3 id="rss" tabindex="-1"><a class="header-anchor" href="#rss"><span>RSS</span></a></h3><h2 id="cxf框架" tabindex="-1"><a class="header-anchor" href="#cxf框架"><span>CXF框架</span></a></h2><ul><li>SpringBoot + cxf</li><li>引包</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>&lt;groupId&gt;org.apache.cxf&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;cxf-rt-frontend-jaxws&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;version&gt;3.2.6&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>&lt;groupId&gt;org.apache.cxf&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;cxf-rt-transports-http&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;version&gt;3.2.6&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>cxf配置</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>publicclassCxfConfig {</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    publicServletRegistrationBean&lt;CXFServlet&gt;dispatcherServlet(){</span></span>
<span class="line"><span>        ServletRegistrationBean&lt;CXFServlet&gt;servletRegistrationBean=newServletRegistrationBean&lt;&gt;(newCXFServlet(),&quot;/dpkshinterface/*&quot;);</span></span>
<span class="line"><span>        servletRegistrationBean.setName(&quot;webService&quot;);</span></span>
<span class="line"><span>        return servletRegistrationBean;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Bean(name=Bus.DEFAULT_BUS_ID)</span></span>
<span class="line"><span>    publicSpringBusspringBus(){</span></span>
<span class="line"><span>        return new SpringBus();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    publicDpkshGzOrderWebServicedpkshGzOrderJsonService(){</span></span>
<span class="line"><span>        return new DpkshGzOrderWebServiceImpl();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    publicEndpointendpoint(){</span></span>
<span class="line"><span>        EndpointImplendpoint=newEndpointImpl(springBus(),dpkshGzOrderJsonService());</span></span>
<span class="line"><span>        endpoint.publish(&quot;/api&quot;);</span></span>
<span class="line"><span>        endpoint.getInInterceptors().add(newWsInterceptor());//addwebserviceinteceptor</span></span>
<span class="line"><span>        returnendpoint;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>拦截器</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>publicclassWsInterceptorextendsAbstractLoggingInterceptor{</span></span>
<span class="line"><span>    privatestaticfinalorg.slf4j.LoggerLOGGER=LoggerFactory.getLogger(WsInterceptor.class);</span></span>
<span class="line"><span>    publicWsInterceptor(){</span></span>
<span class="line"><span>        super(Phase.RECEIVE);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    publicvoidhandleMessage(Messagemessage)throwsFault{</span></span>
<span class="line"><span>        InputStreamis=message.getContent(InputStream.class);</span></span>
<span class="line"><span>        if(is!=null){</span></span>
<span class="line"><span>            CachedOutputStreambos=newCachedOutputStream();</span></span>
<span class="line"><span>            if(threshold&gt;0){</span></span>
<span class="line"><span>                bos.setThreshold(threshold);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            try{</span></span>
<span class="line"><span>                InputStreambis=isinstanceofDelegatingInputStream?((DelegatingInputStream)is).getInputStream():is;</span></span>
<span class="line"><span>                IOUtils.copyAtLeast(bis,bos,limit==-1?Integer.MAX_VALUE:limit);</span></span>
<span class="line"><span>                bos.flush();</span></span>
<span class="line"><span>                bis=newSequenceInputStream(bos.getInputStream(),bis);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if(isinstanceofDelegatingInputStream){</span></span>
<span class="line"><span>                    ((DelegatingInputStream)is).setInputStream(bis);</span></span>
<span class="line"><span>                }else{</span></span>
<span class="line"><span>                    message.setContent(InputStream.class,bis);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                bos.close();</span></span>
<span class="line"><span>            }catch(Exceptione){</span></span>
<span class="line"><span>                thrownewFault(e);</span></span>
<span class="line"><span>            }finally{</span></span>
<span class="line"><span>                LOGGER.info(bos.toString());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protectedLoggergetLogger(){</span></span>
<span class="line"><span>        returnnull;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>客户端生成 <code>wsdl2java -p com.jc -d D:\\demo_project\\src -client -encoding utf-8 -noAddressBinding http://10.62.233.167:8080/dpkshinterface/api?wsdl</code></li></ul><h2 id="axis2" tabindex="-1"><a class="header-anchor" href="#axis2"><span>Axis2</span></a></h2><ul><li>报文 http://localhost:8080/testaxis2webservice/services/Testservice?wsdl</li><li>客户端</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>public void test() {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        RPCServiceClient sender = new RPCServiceClient();</span></span>
<span class="line"><span>        // 连接</span></span>
<span class="line"><span>        String loc = &quot;http://localhost/myWS/services/AxisService&quot;;</span></span>
<span class="line"><span>        EndpointReference er = new EndpointReference(loc);</span></span>
<span class="line"><span>        Options options = sender.getOptions();</span></span>
<span class="line"><span>        options.setTimeOutInMilliSeconds(2*20000L);</span></span>
<span class="line"><span>        options.setTo(er);</span></span>
<span class="line"><span>        // 调用</span></span>
<span class="line"><span>        String targetNamespace = &quot;http://service.jc.com&quot;;</span></span>
<span class="line"><span>        String name = &quot;sayHello&quot;;</span></span>
<span class="line"><span>        QName qName = new QName(targetNamespace, name);</span></span>
<span class="line"><span>        Object[] params = new Object[]{&quot;客户端调用成功！&quot;};</span></span>
<span class="line"><span>        Class&lt;?&gt;[] types = new Class[]{String.class};</span></span>
<span class="line"><span>        Object[] respObj = sender.invokeBlocking(qName, params, types);</span></span>
<span class="line"><span>        System.out.println(respObj[0]);</span></span>
<span class="line"><span>    } catch (AxisFault e) {</span></span>
<span class="line"><span>        e.printStackTrace();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)]))}const d=n(l,[["render",p],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/%E8%AF%AD%E8%A8%80/ocx3onb4/","title":"WebService","lang":"zh-CN","frontmatter":{"title":"WebService","createTime":"2020/09/06 10:46:49","permalink":"/语言/ocx3onb4/","description":"简介 WebService 使用XML编解码数据，使用SOAP传输数据 三种基本元素：SOAP、WSDL、UUDI WSDL 基于XML描述WebService的一种语言,描述接口列表和信息 WSDL文档 定义WebService执行的操作 定义WebService执行操作的参数（消息） 定义WebService使用的数据类型 定义消息的格式和细节 W...","head":[["meta",{"property":"og:url","content":"https://orthogonalandparallel.github.io/%E8%AF%AD%E8%A8%80/ocx3onb4/"}],["meta",{"property":"og:site_name","content":"万里任禅游"}],["meta",{"property":"og:title","content":"WebService"}],["meta",{"property":"og:description","content":"简介 WebService 使用XML编解码数据，使用SOAP传输数据 三种基本元素：SOAP、WSDL、UUDI WSDL 基于XML描述WebService的一种语言,描述接口列表和信息 WSDL文档 定义WebService执行的操作 定义WebService执行操作的参数（消息） 定义WebService使用的数据类型 定义消息的格式和细节 W..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-07-01T13:12:17.000Z"}],["meta",{"property":"article:modified_time","content":"2025-07-01T13:12:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WebService\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-07-01T13:12:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.46,"words":437},"git":{"updatedTime":1751375537000,"contributors":[{"name":"靳琛","email":"jinchenj@yonyou.com","commits":1,"avatar":"https://avatars.githubusercontent.com/靳琛?v=4","url":"https://github.com/靳琛"}]},"autoDesc":true,"filePathRelative":"笔记/语言/后端/webservice.md","categoryList":[{"id":"7051dc","sort":10000,"name":"笔记"},{"id":"d592ad","sort":10015,"name":"语言"},{"id":"83a577","sort":10018,"name":"后端"}],"bulletin":false}');export{d as comp,r as data};
