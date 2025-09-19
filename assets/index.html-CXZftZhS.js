import{_ as n,c as a,a as e,o as i}from"./app-DUomSOUZ.js";const l={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载"><span>卸载</span></a></h2><ol><li>停止Oracle所有相关服务。</li><li>Oracle Universal Installer卸载产品页面，卸载产品-全部展开，OraDb11g_home1外的全部目录删除。</li><li>删除注册表信息： HKEY_LOCAL_MACHINE\\SOFTWARE\\ORACLE。 HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services下的所有ORA开头的。 HKEY_LOCAL_MACHINE\\SYSTEM\\Cur​rentControlSet\\Services\\Eventlog\\Application下的所有ORA开头的 HKEY_CLASSES_ROOT下所有ORA、ORCL等相关的。 HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\MenuOrder\\Start Menu\\Programs下ORA开头的。 HKEY_LOCAL_MACHINE\\SOFTWARE\\ODBC\\ODBCINST.INI中除Microsoft ODBC for Oracle注册表键以外的所有含有Oracle的键。</li><li>删除环境变量中有关Oracle的设定。</li><li>删除所有与Oracle相关的目录(如果删不掉，重启计算机后再删就可以了)包括： C:\\Program file\\Oracle目录。 ORACLE_BASE目录(oracle的安装目录)。 C:\\WINDOWS\\system32\\config\\systemprofile\\Oracle目录。 C:\\Users\\Administrator\\Oracle或C:\\Documents and Settings\\Administrator\\Oracle目录。 C:\\WINDOWS下删除以下文件ORACLE.INI、oradim73.INI、oradim80.INI、oraodbc.ini等等。 C:\\WINDOWS下的WIN.INI文件中若有[ORACLE]的标记段，删除该段。</li></ol><h2 id="ddl" tabindex="-1"><a class="header-anchor" href="#ddl"><span>DDL</span></a></h2><h3 id="表空间" tabindex="-1"><a class="header-anchor" href="#表空间"><span>表空间</span></a></h3><ul><li>创建临时表空间 <code>create temporary tablespace tablespace_name tempfile &#39;C:\\...&#39; size 50m autoextend on next 50m maxsize 20480m extent management local</code></li><li>创建表空间 <code>create tablespace tablespace_name datafile &#39;C:\\&#39; size 50m autoextend on next 50m maxsize 2048m extent management local</code></li><li>删除表空间 <code>drop tablespace tablespace_name including contents and datafiles</code></li><li>修改表空间名 <code>alter tablespace tablespace_name1 rename to tablespace_name2</code></li></ul><h3 id="用户" tabindex="-1"><a class="header-anchor" href="#用户"><span>用户</span></a></h3><ul><li>创建用户 <code>create user user_name identified by password default tablespace JC_DATA temporary tablespace JC_TEMP</code></li><li>创建和system相同表空间的用户 <code>create user bqft identified by crmoracle default tablespace SYSTEM temporary tablespace TEMP profile DEFAULT</code></li><li>删除用户 <code>drop user user_name [cascade]</code></li><li>解锁用户 <code>alter user user_name account unlock</code></li><li>修改用户密码 <code>alter user old_password identified by new_passord</code></li><li>修改用户表空间 <code>alter user user_name defalut tablespace tablespace_name</code></li><li>修改用户表空间限额 <code>alter user user_name quota unlimited on tablespace_name</code></li></ul><h3 id="角色" tabindex="-1"><a class="header-anchor" href="#角色"><span>角色</span></a></h3><ul><li>创建角色 <code>create role role_name</code></li><li>删除角色 <code>drop role role_name</code></li></ul><h3 id="表" tabindex="-1"><a class="header-anchor" href="#表"><span>表</span></a></h3><ul><li>修改表名 <code>rename table_old to table_new</code></li><li>创建表 <code>create table table_name ( id int primary key not null, name varchar(32) )</code></li><li>删除表 <code>drop table table_name</code></li><li>修改表名 <code>alter table table_name rename table_name_new</code></li><li>添加字段 <code>alter table table_name add column_name column_type</code></li><li>修改字段名 <code>alter table table_name rename column column_name to column_name_new</code></li><li>修改字段类型 <code>alter table table_name modify column_name coumn_type</code></li><li>删除字段 <code>alter table table_name drop column column_name</code></li><li>添加注释 <code>comment on column/table is &#39;&#39;</code></li><li>展示表 <code>show table</code></li><li>查询表结构 <code>desc table_name</code></li><li>内部写法表关联 <code>a foreign key (cid) references (id)</code></li><li>外部写法表关联 <code>alter table table_name1 add constraint fk_name foreign key(column_name1) references table_name2(column_name_2)</code></li><li>新增主键约束 <code>alter table ECC_FND.RESOURCE_TYPE_CFG add constraint P_RESOURCE_TYPE_CFG primary key (RESOURCE_CODE, RSRC_LOOKUP_TYPE, RSRC_LOOKUP_CODE, REGISTER_ID) using index tablespace ECC_FND pctfree 10 initrans 2 maxtrans 255 storage ( initial 448K next 128K minextents 1 maxextents unlimited pctincrease 0 )</code></li><li>删除约束 <code>alter table table_name drop constraint constraint_name</code></li></ul><h3 id="同义词" tabindex="-1"><a class="header-anchor" href="#同义词"><span>同义词</span></a></h3><ul><li>创建 <code>CREATE SYNONYM T_YCPORDER_FLOW FOR TELECOM.T_YCPORDER_FLOW</code> ###视图</li><li>创建 <code>create [or replace] view view_name[(a, b, c)] as select ...</code></li><li>删除 <code>drop view veiw_name</code></li><li>创建物化视图 <code>create [or replace] materialized view view_name refresh force on demand start with sysdate next to_date(concat(to_char(sysdate +1, &#39;yyyy-mm-dd&#39;), &#39;10:25:00&#39;), &#39;yyyy-mm-dd hh24:mi:ss&#39;)) as select * from table_name</code></li></ul><h3 id="序列" tabindex="-1"><a class="header-anchor" href="#序列"><span>序列</span></a></h3><ul><li>创建 <code>create sequence sequence_name minvalue 1 maxvalue 9999999 increment by 1 start with 1 nocahe noorder nocycle</code></li><li>删除 <code>drop sequence sequence_name</code></li><li>修改 <ul><li>查询序列接下来的值 <code>select sequence_name.nextval from dual</code></li><li>修改序列增量 <code>alter sequence sequence_name increment by 80</code></li><li>再次查询 <code>select sequence_name.nextval from dual</code></li><li>还原序列增量 <code>alter sequence sequence_name increment by 1</code></li><li>再次查询 <code>select sequence_name.nextval from dual</code></li></ul></li></ul><h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h3><ul><li>用途 <ul><li>提高对表select速度</li><li>降低insert,update,delete速度</li><li>对有关联的字段取值进行检查</li><li>索引可以为空</li></ul></li><li>创建 <code>CREATE INDEX IDX_TZMS_CD ON T_ZNFX_MRZJ_SNAP(CREATE_DATE)</code></li><li>修改 <code>alter [unique] index [user.]index_name [initrans n] [maxtrans n] rebuild [storage n]</code></li><li>删除 <code>drop index index_name</code></li></ul><h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h3><ul><li>创建 <code>create directory directory_name as &#39;file_address&#39;</code></li></ul><h2 id="dml" tabindex="-1"><a class="header-anchor" href="#dml"><span>DML</span></a></h2><ul><li>新增 <code>insert into tabe_name （...,...,...）values (...,...,...);</code></li><li>更新 <code>update tabe_name set table_column=&#39;...&#39; where</code></li><li>删除 <code>delete from tabe_name where ...</code></li><li>清空 <code>truncate table table_name</code></li><li>融合 * <code>merge into table_name t1 using table_name t2 on (ti.id = t2.id) when matched then update set t1.column1 = t2.column1, t1.column2 = t2.column2 when not matched then insert (t1.column1, t1.column2 ) values (t2.column1， t2.column2)</code></li></ul><h2 id="dql" tabindex="-1"><a class="header-anchor" href="#dql"><span>DQL</span></a></h2><ul><li>查询 <code>select * from table_name</code></li><li>去重 <code>select distinct table_column from table_name</code></li><li>大小 <code>select table_column from tabe_name where table_column = &#39;&#39; = &lt;&gt; &gt; &lt; &gt;= &lt;= between in</code></li><li>逻辑 <code>select table_column from tabe_name where table_column1 = &#39;&#39; and table_column2 = &#39;&#39; and or</code></li><li>排序 <code>select table_column from tabe_name order by table_column（desc）</code></li><li>条数 <code>select column_name from table_name where rownum &lt;= number</code></li><li>模糊 <code>select * number from table_name where table_column like &#39;a%&#39; -- 通配符 字符：[] [!] 数量：% _</code></li><li>递归 * <code>select t.subid, t.parentid from table_name t start with t.subid = &#39;1&#39; connect by prior t.subid = t.parentid</code></li></ul><h3 id="多表操作" tabindex="-1"><a class="header-anchor" href="#多表操作"><span>多表操作</span></a></h3><ul><li>别名 <code>select column_name as cn number from table_name as tn</code></li><li>多表关联 <code>select number from table_name as tn1 join table_name as tn2 on t1.column = t2.column -- left join | right join | full join | inner join</code></li><li>合并结果 * <code>select * from table_name tn1 where ... union (all) select * from table_name tn2 where ...</code></li><li>查询插入 <code>select into table_name_new from table_name_old</code></li></ul><h3 id="约束" tabindex="-1"><a class="header-anchor" href="#约束"><span>约束</span></a></h3><ul><li>查询约束 <code>select TABLE_NAME from all_constraints where CONSTRAINT_NAME=&#39;Reference_460&#39;</code></li></ul><h3 id="用户-1" tabindex="-1"><a class="header-anchor" href="#用户-1"><span>用户</span></a></h3><ul><li>查询用户下的表 <code>select * from user_tables</code><code>select * from dba_tables dt where dt.owner=&#39;owner_name&#39;</code></li><li>查询用户下的索引 <code>select * from user_indexs</code><code>select * from dba_indexes di where di.owner = &#39;owner_name&#39;</code></li><li>查询用户下的视图 <code>select * from user_views</code><code>select * from dba_views dv where dv.owner = &#39;owner_name&#39;</code></li><li>查询用户下的约束 <code>select * from user_constraints</code></li></ul><h2 id="dcl" tabindex="-1"><a class="header-anchor" href="#dcl"><span>DCL</span></a></h2><ul><li>登陆权限 create session</li><li>使用表空间 unlimited tablespace</li><li>创建表 create table</li><li>删除表 drop table</li><li>插入字段 insert table</li><li>修改表 update table</li><li>所有权限 all</li><li>角色授予用户 <code>grant role_name to user_name;</code></li><li>权限授予用户/角色 <code>grant create session to {use_name/role_name};</code></li><li>操作特定表的权限 <code>grant select on table_name to {use_name/role_name};</code></li><li>权限从用户撤销 <code>revoke create session to {use_name/role_name};</code></li></ul><h2 id="存储过程" tabindex="-1"><a class="header-anchor" href="#存储过程"><span>存储过程</span></a></h2><h3 id="输出" tabindex="-1"><a class="header-anchor" href="#输出"><span>输出</span></a></h3><ul><li>输出语句 <code>dbms_output.put_line(&#39;Hello World&#39;);</code></li><li>设置输出打印 <code>set serveroutput on;</code></li></ul><h3 id="创建存储过程" tabindex="-1"><a class="header-anchor" href="#创建存储过程"><span>创建存储过程</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>create or replace procedure test_procedure is</span></span>
<span class="line"><span>begin</span></span>
<span class="line"><span>  dbms_output.put_line(&#39;测试存储过程&#39;);</span></span>
<span class="line"><span>end test_procedure;</span></span>
<span class="line"><span>参数、变量</span></span>
<span class="line"><span>create or replace proceduce proceduce_name (param1 in type, param2 out type) -- 参数不需要取值范围，in传入，out传出</span></span>
<span class="line"><span>as --定义变量</span></span>
<span class="line"><span>vs_msg varchar2(512);</span></span>
<span class="line"><span>vs_ym_begin char(6);</span></span>
<span class="line"><span>vs_ym_end char(6);</span></span>
<span class="line"><span>vs_ym_sn_begin char(6);</span></span>
<span class="line"><span>vs_ym_sn_end char(6);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if判断" tabindex="-1"><a class="header-anchor" href="#if判断"><span>if判断</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>create or replace procedure test(x in number) is</span></span>
<span class="line"><span>begin</span></span>
<span class="line"><span>  if x &gt; 0 then</span></span>
<span class="line"><span>    begin</span></span>
<span class="line"><span>      x := 0 - x;</span></span>
<span class="line"><span>    end;</span></span>
<span class="line"><span>  end if;</span></span>
<span class="line"><span>  if x = 0 then</span></span>
<span class="line"><span>    begin</span></span>
<span class="line"><span>      x := 1;</span></span>
<span class="line"><span>    end;</span></span>
<span class="line"><span>  end if;</span></span>
<span class="line"><span>end test;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环"><span>for循环</span></a></h3><ul><li>遍历游标</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>create or replace proceduce test()</span></span>
<span class="line"><span>as</span></span>
<span class="line"><span>  Cursor cursor is</span></span>
<span class="line"><span>    select</span></span>
<span class="line"><span>    from student;</span></span>
<span class="line"><span>  name varchar(20);</span></span>
<span class="line"><span>begin</span></span>
<span class="line"><span>  for name in cursor LOOP</span></span>
<span class="line"><span>    begin</span></span>
<span class="line"><span>      dbms_output.putline(name);</span></span>
<span class="line"><span>    end;</span></span>
<span class="line"><span>  end LOOP;</span></span>
<span class="line"><span>end test;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>遍历数组</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>create or replace proceduce test(varArray in myPackage, TestArray)</span></span>
<span class="line"><span>as</span></span>
<span class="line"><span>  i number;</span></span>
<span class="line"><span>begin</span></span>
<span class="line"><span>  i := 1;</span></span>
<span class="line"><span>  for i in i.varArray.count LOOP</span></span>
<span class="line"><span>    dbms_output.putline(&#39;The No.&#39;||i||&#39;reoord in varArray is:&#39;||varArray(i));</span></span>
<span class="line"><span>  end LOOP;</span></span>
<span class="line"><span>end test;</span></span>
<span class="line"><span>while循环</span></span>
<span class="line"><span>create or replace proceduce test(i in number) as</span></span>
<span class="line"><span>begin</span></span>
<span class="line"><span>  while i &lt; 0 LOOP</span></span>
<span class="line"><span>    begin</span></span>
<span class="line"><span>      i := i + 1;</span></span>
<span class="line"><span>    end;</span></span>
<span class="line"><span>  end LOOP;</span></span>
<span class="line"><span>end test;</span></span>
<span class="line"><span>CASE</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义数组" tabindex="-1"><a class="header-anchor" href="#定义数组"><span>定义数组</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>-- Oracle自带的数组类型</span></span>
<span class="line"><span>create or replace procedure test(y out array) is</span></span>
<span class="line"><span>x array;</span></span>
<span class="line"><span>begin</span></span>
<span class="line"><span>  x := new array();</span></span>
<span class="line"><span>  y := x;</span></span>
<span class="line"><span>end test;</span></span>
<span class="line"><span>-- 自定义数组类型</span></span>
<span class="line"><span>create or replace package myPackage is --创建包</span></span>
<span class="line"><span>Public type declarations info is record( name varchar(20), y number ); --type声明了两个字段</span></span>
<span class="line"><span>type TestArray is table of info index by binary_integer; --TestArray是一张表，一条记录就是type,index by binary_integer是表的索引。没有索引时，使用需要初始化：varArray := new myPackage.TestArray();</span></span>
<span class="line"><span>end TestArray;</span></span>
<span class="line"><span>-- 生命数组</span></span>
<span class="line"><span>DECLARE</span></span>
<span class="line"><span>  TYPE V_ARRY_TYPE IS VARRAY(2) OF VARCHAR2(10);</span></span>
<span class="line"><span>  V_ARRY_NAME V_ARRY_TYPE;</span></span>
<span class="line"><span>BEGIN</span></span>
<span class="line"><span>  V_ARRY_NAME := V_ARRY_TYPE(&#39;tom&#39;, &#39;jim&#39;,&#39;tim&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  DBMS_OUTPUT.PUT_LINE(V_ARRY_NAME(1));</span></span>
<span class="line"><span>  DBMS_OUTPUT.PUT_LINE(V_ARRY_NAME(2));</span></span>
<span class="line"><span>END;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="游标" tabindex="-1"><a class="header-anchor" href="#游标"><span>游标</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>declare</span></span>
<span class="line"><span>  -- 声明静态游标</span></span>
<span class="line"><span>  cursor c_test is select id,name from t_user t where  t.id =id ;</span></span>
<span class="line"><span>  c_t c_test%rowtype; --定义游标变量，该变量的类型为基于游标c_test的记录</span></span>
<span class="line"><span>-- 声明动态游标</span></span>
<span class="line"><span>  type my_cur_type is ref cursor;</span></span>
<span class="line"><span>  my_sql long;</span></span>
<span class="line"><span>  my_cur my_cur_type;</span></span>
<span class="line"><span>  my_obj my_cur%rowtype;</span></span>
<span class="line"><span>begin</span></span>
<span class="line"><span>--for 循环</span></span>
<span class="line"><span>  for c_t in c_test</span></span>
<span class="line"><span>  loop</span></span>
<span class="line"><span>    dbms_output.put_line(c_t.id|| &#39;-1-&#39; || c_t.name);</span></span>
<span class="line"><span>  end loop;</span></span>
<span class="line"><span>--while 循环</span></span>
<span class="line"><span>  open c_test;--必须要明确的打开游标</span></span>
<span class="line"><span>    fetch c_test into c_t; while c_test%found</span></span>
<span class="line"><span>    loop</span></span>
<span class="line"><span>      dbms_output.put_line(c_t.id|| &#39;-3-&#39; || c_t.name);</span></span>
<span class="line"><span>      fetch c_test into c_t;</span></span>
<span class="line"><span>    end loop;</span></span>
<span class="line"><span>  close c_test;   --必须要明确的关闭游标</span></span>
<span class="line"><span>--fetch 循环</span></span>
<span class="line"><span>  open c_test;--必须要明确的打开游标</span></span>
<span class="line"><span>  loop</span></span>
<span class="line"><span>    fetch c_test into c_t;</span></span>
<span class="line"><span>    exit when c_test%notfound;</span></span>
<span class="line"><span>    dbms_output.put_line(c_t.id|| &#39;-2-&#39; || c_t.name);  --必须要明确的关闭游标</span></span>
<span class="line"><span>  end loop;</span></span>
<span class="line"><span>-- 执行动态sql</span></span>
<span class="line"><span>  execute immediate v_sql into v_data;</span></span>
<span class="line"><span>close c_test;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行存储过程" tabindex="-1"><a class="header-anchor" href="#执行存储过程"><span>执行存储过程</span></a></h3><p><code>execute test_procedure;</code></p><h3 id="删除存储过程" tabindex="-1"><a class="header-anchor" href="#删除存储过程"><span>删除存储过程</span></a></h3><p><code>drop procedure test_procedure;</code></p><h3 id="查询存储过程" tabindex="-1"><a class="header-anchor" href="#查询存储过程"><span>查询存储过程</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>-- 查询所有存储过程</span></span>
<span class="line"><span>select</span></span>
<span class="line"><span>  name</span></span>
<span class="line"><span>from</span></span>
<span class="line"><span>  user_source</span></span>
<span class="line"><span>where</span></span>
<span class="line"><span>  type = &#39;PROCEDURE&#39;;</span></span>
<span class="line"><span>-- 查询存储过程内容</span></span>
<span class="line"><span>select</span></span>
<span class="line"><span>  text</span></span>
<span class="line"><span>from</span></span>
<span class="line"><span>  user_source</span></span>
<span class="line"><span>where</span></span>
<span class="line"><span>  name = &#39;XXX&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>round(1234.3565, 2) -- 四舍五入保留精度</span></span>
<span class="line"><span>trunc() -- 截取字符</span></span>
<span class="line"><span>to_char() -- 转字符串</span></span>
<span class="line"><span>trim() -- 去除空格</span></span>
<span class="line"><span>EXISTS() NOT EXISTS() -- 判断是否存在</span></span>
<span class="line"><span>decode(value,&#39;a&#39;,&#39;b&#39;&#39;c&#39;,value) -- 如果value==a,return a;如果value==b,return b;...;else return value。</span></span>
<span class="line"><span>over(order by salary) -- 按照salary顺序排序</span></span>
<span class="line"><span>over(partition by deptno) -- 安装部门分区</span></span>
<span class="line"><span>row_number() OVER(PARTITION BY fldphy ORDER BY flddate desc) as row_flg -- 分组设置编号</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定时" tabindex="-1"><a class="header-anchor" href="#定时"><span>定时</span></a></h2><ul><li>查询 <code>SELECT * FROM ALL_JOBS WHERE LOWER(WHAT) LIKE &#39;%PRO_USER_ACCESS%&#39;;</code></li><li>新增</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>DECLARE JOB_USER_ACCESSNUMBER;</span></span>
<span class="line"><span>BEGIN</span></span>
<span class="line"><span>DBMS_JOB.SUBMIT(JOB_USER_ACCESS,&#39;PRO_USER_ACCESS;&#39;,SYSDATE+14/24,&#39;TRUNC(SYSDATE+1)&#39;);</span></span>
<span class="line"><span>COMMIT;</span></span>
<span class="line"><span>END;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>BEGIN</span></span>
<span class="line"><span>DBMS_JOB.REMOVE(696391);</span></span>
<span class="line"><span>COMMIT;</span></span>
<span class="line"><span>END;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用遇到的情况解决" tabindex="-1"><a class="header-anchor" href="#常用遇到的情况解决"><span>常用遇到的情况解决</span></a></h2><h3 id="dblink" tabindex="-1"><a class="header-anchor" href="#dblink"><span>DBLink</span></a></h3><p>tnsnames.ora中配置数据库连接 SELECT * FROM ALL_DB_LINKS; select * from dba_db_links;</p><h3 id="闪回" tabindex="-1"><a class="header-anchor" href="#闪回"><span>闪回</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>-- 更新删除操作的闪回查询</span></span>
<span class="line"><span>SELECT</span></span>
<span class="line"><span>  *</span></span>
<span class="line"><span>FROM</span></span>
<span class="line"><span>  ecc_oc.order_header</span></span>
<span class="line"><span>as of timestamp</span></span>
<span class="line"><span>  to_timestamp(&#39;2017-08-14 16:41:00&#39;, &#39;yyyy-mm-dd hh24:mi:ss&#39;)</span></span>
<span class="line"><span>minus  -- 取交集</span></span>
<span class="line"><span>select</span></span>
<span class="line"><span>  *</span></span>
<span class="line"><span>from</span></span>
<span class="line"><span>  ecc_oc.order_header</span></span>
<span class="line"><span>-- 插入操作的闪回查询</span></span>
<span class="line"><span>select</span></span>
<span class="line"><span>  *</span></span>
<span class="line"><span>from</span></span>
<span class="line"><span>  ecc_oc.order_header</span></span>
<span class="line"><span>minus</span></span>
<span class="line"><span>select</span></span>
<span class="line"><span>  *</span></span>
<span class="line"><span>from</span></span>
<span class="line"><span>  ecc_oc.order_header</span></span>
<span class="line"><span>as of timestamp</span></span>
<span class="line"><span>  to_timestamp(&#39;2017-08-14 16:41:00&#39;, &#39;yyyy-mm-dd hh24:mi:ss&#39;)</span></span>
<span class="line"><span>-- 更新删除操作的闪回</span></span>
<span class="line"><span>MERGE INTO</span></span>
<span class="line"><span>  tab a</span></span>
<span class="line"><span>USING</span></span>
<span class="line"><span>  (</span></span>
<span class="line"><span>    SELECT</span></span>
<span class="line"><span>      *</span></span>
<span class="line"><span>    FROM</span></span>
<span class="line"><span>      tab</span></span>
<span class="line"><span>    AS OF TIMESTAMP</span></span>
<span class="line"><span>      to_timestamp(&#39;time_point&#39;, &#39;yyyy-mm-dd hh24:mi:ss&#39;)</span></span>
<span class="line"><span>    MINUS</span></span>
<span class="line"><span>    SELECT</span></span>
<span class="line"><span>      *</span></span>
<span class="line"><span>    FROM</span></span>
<span class="line"><span>      tab</span></span>
<span class="line"><span>  ) b</span></span>
<span class="line"><span>ON</span></span>
<span class="line"><span>  (a.unique_id = b.unique_id)</span></span>
<span class="line"><span>WHEN MATCHED THEN</span></span>
<span class="line"><span>  UPDATE</span></span>
<span class="line"><span>  SET</span></span>
<span class="line"><span>    a.col1 = b.col1,</span></span>
<span class="line"><span>    a.col2 = b.col2,</span></span>
<span class="line"><span>WHEN NOT MATCHED THEN</span></span>
<span class="line"><span>  INSERT</span></span>
<span class="line"><span>  VALUES</span></span>
<span class="line"><span>  (</span></span>
<span class="line"><span>    b.unique_id,</span></span>
<span class="line"><span>    b.col1,</span></span>
<span class="line"><span>    b.col2</span></span>
<span class="line"><span>  );</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户锁死" tabindex="-1"><a class="header-anchor" href="#用户锁死"><span>用户锁死</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>-- 查询锁死语句的相关信息</span></span>
<span class="line"><span>select</span></span>
<span class="line"><span>  vs.&quot;USERNAME&quot;,  -- 锁死语句所用的数据库用户</span></span>
<span class="line"><span>  vs.&quot;LOCKWAIT&quot;,  -- 锁死状态</span></span>
<span class="line"><span>  vs.&quot;STATUS&quot;,  -- 状态，active表示被锁死</span></span>
<span class="line"><span>  vs.&quot;MACHINE&quot;,  -- 锁死语句所在机器</span></span>
<span class="line"><span>  vs.&quot;PROGRAM&quot;  -- 锁死语句应用来源</span></span>
<span class="line"><span>from</span></span>
<span class="line"><span>  v$session vs</span></span>
<span class="line"><span>where</span></span>
<span class="line"><span>  vs.&quot;SID&quot; in</span></span>
<span class="line"><span>  (</span></span>
<span class="line"><span>    select</span></span>
<span class="line"><span>      session_id</span></span>
<span class="line"><span>    from</span></span>
<span class="line"><span>      v$locked_object</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>-- 查询锁死的语句 (dba用户登录)</span></span>
<span class="line"><span>select</span></span>
<span class="line"><span> vsql.&quot;SQL_TEXT&quot;</span></span>
<span class="line"><span>from</span></span>
<span class="line"><span>  v$sql vsql</span></span>
<span class="line"><span>where</span></span>
<span class="line"><span>  vsql.&quot;HASH_VALUE&quot; in</span></span>
<span class="line"><span>  (</span></span>
<span class="line"><span>    select</span></span>
<span class="line"><span>      vsession.&quot;SQL_HASH_VALUE&quot;</span></span>
<span class="line"><span>    from</span></span>
<span class="line"><span>      v$session vsession</span></span>
<span class="line"><span>    where</span></span>
<span class="line"><span>      vsession.&quot;SID&quot; in</span></span>
<span class="line"><span>      (</span></span>
<span class="line"><span>        select</span></span>
<span class="line"><span>          vl.&quot;SESSION_ID&quot;</span></span>
<span class="line"><span>        from</span></span>
<span class="line"><span>          v$locked_object vl</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>-- 查询锁定时间</span></span>
<span class="line"><span>select</span></span>
<span class="line"><span>  username,</span></span>
<span class="line"><span>  lock_date</span></span>
<span class="line"><span>from</span></span>
<span class="line"><span>  dba_users</span></span>
<span class="line"><span>where</span></span>
<span class="line"><span>  username=&#39;TEST&#39;;</span></span>
<span class="line"><span>-- 查询允许失败次数</span></span>
<span class="line"><span>select</span></span>
<span class="line"><span>  *</span></span>
<span class="line"><span>from</span></span>
<span class="line"><span>  dba_profiles;</span></span>
<span class="line"><span>-- 修改允许失败次数</span></span>
<span class="line"><span>alter profile default limit FAILED_LOGIN_ATTEMPTS 30;</span></span>
<span class="line"><span>-- 解锁用户</span></span>
<span class="line"><span>alter user</span></span>
<span class="line"><span>  user_name</span></span>
<span class="line"><span>account unlock;</span></span>
<span class="line"><span>用户表锁死</span></span>
<span class="line"><span>-- 查看被锁的表</span></span>
<span class="line"><span>select b.owner,b.object_name,a.session_id,a.locked_mode from v$locked_object a,dba_objects b where b.object_id = a.object_id;</span></span>
<span class="line"><span>-- 查看哪个用户或进程造成的锁表</span></span>
<span class="line"><span>select b.username,b.sid,b.serial#,logon_time from v$locked_object a,v$session b where a.session_id = b.sid order by b.logon_time;</span></span>
<span class="line"><span>-- 杀死进程</span></span>
<span class="line"><span>alter system kill session &#39;651,11757&#39;;</span></span>
<span class="line"><span>--查看连接的进程</span></span>
<span class="line"><span>sELECT sid, serial#, username, osuser FROM v$session;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oracle版本" tabindex="-1"><a class="header-anchor" href="#oracle版本"><span>oracle版本</span></a></h3><p><code>select * from v$version;</code></p><h3 id="测试连接" tabindex="-1"><a class="header-anchor" href="#测试连接"><span>测试连接</span></a></h3><p><code>tnping tnsname</code></p><h3 id="修改错误次数限制" tabindex="-1"><a class="header-anchor" href="#修改错误次数限制"><span>修改错误次数限制</span></a></h3><p><code>alter profile default limit FAILED_LOGIN_ATTEMPTS number|unlimited; -- 次数|无限制</code></p><h3 id="分组去重去第一条" tabindex="-1"><a class="header-anchor" href="#分组去重去第一条"><span>分组去重去第一条</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>SELECT *</span></span>
<span class="line"><span>FROM</span></span>
<span class="line"><span>  (</span></span>
<span class="line"><span>    SELECT ROW_NUMBER() OVER(PARTITION BY fi.account_no ORDER BY fi.fldid DESC) rn, fi.*</span></span>
<span class="line"><span>    FROM telecom.t_fix_importaccount fi</span></span>
<span class="line"><span>    where fi.account_no is not null</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>WHERE rn = 1;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储过程中dblink效率慢" tabindex="-1"><a class="header-anchor" href="#存储过程中dblink效率慢"><span>存储过程中dblink效率慢</span></a></h3><p>表分区查询 3123548 * 367 = 1146342116 SELECT COUNT(1) from user_tab_partitions where table_name=&#39;IPTV_ZTE_DATA SELECT t.partition_name,t.num_rows from user_tab_partitions t where table_name=&#39;IPTV_ZTE_DATA&#39; select COUNT(1) from IPTV_ZTE_DATA PARTITION (SYS_P1146)</p><h3 id="常用函数" tabindex="-1"><a class="header-anchor" href="#常用函数"><span>常用函数</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>-- md5加密函数</span></span>
<span class="line"><span>create or replace function md5(in_src in varchar2) return varchar2 is</span></span>
<span class="line"><span>retval varchar2(128);</span></span>
<span class="line"><span>begin</span></span>
<span class="line"><span>  retval := convert(in_src,&#39;ZHS16GBK&#39;);</span></span>
<span class="line"><span>  retval := convert(retval,&#39;UTF8&#39;);</span></span>
<span class="line"><span>  retval := Utl_Raw.Cast_To_Raw(sys.dbms_obfuscation_toolkit.md5(INPUT_STRING  =&gt; retval));</span></span>
<span class="line"><span>RETURN upper(retval);</span></span>
<span class="line"><span>end md5;</span></span>
<span class="line"><span>-- 按中文首字母排序</span></span>
<span class="line"><span>nlssort(worker,&#39;NLS_SORT=SCHINESE_PINYIN_M&#39;)</span></span>
<span class="line"><span>-- 特殊字符</span></span>
<span class="line"><span>select ascii(&#39;&amp;&#39;) from dual</span></span>
<span class="line"><span>Nvl() -- 空值判断</span></span>
<span class="line"><span>常用表、视图</span></span>
<span class="line"><span>dba_users -- 用户信息</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="去除表中重复数据" tabindex="-1"><a class="header-anchor" href="#去除表中重复数据"><span>去除表中重复数据</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>DELETE</span></span>
<span class="line"><span>FROM T_FIX_COMMUNICATION_GZLTJINFO</span></span>
<span class="line"><span>WHERE (RID) IN (</span></span>
<span class="line"><span>  SELECT RID FROM T_FIX_COMMUNICATION_GZLTJINFO WHERE FLDYEAR = &#39;2019&#39; AND FLDMONTH = &#39;01&#39; GROUP BY RID HAVING COUNT(RID) &gt; 1</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>AND ROWID NOT IN (SELECT MIN(ROWID) FROM T_FIX_COMMUNICATION_GZLTJINFO WHERE FLDYEAR = &#39;2019&#39; AND FLDMONTH = &#39;01&#39; GROUP BY RID HAVING COUNT(*) &gt; 1);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="并行" tabindex="-1"><a class="header-anchor" href="#并行"><span>并行</span></a></h3><p><code>/*+parallel(T,8)*/</code></p><h3 id="文件导出" tabindex="-1"><a class="header-anchor" href="#文件导出"><span>文件导出</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>CREATE OR REPLACE DIRECTORY MYDIR AS &#39;D:\\test&#39;;</span></span>
<span class="line"><span>DECLARE</span></span>
<span class="line"><span>FILE_NAME VARCHAR2(32) := &#39;装机单&#39;;</span></span>
<span class="line"><span>COUNT_NUMBER NUMBER; -- 定义总量，接收每次根据组织名称查询时 RYXX 表中匹配的数据总量</span></span>
<span class="line"><span>LOOP_TIMES NUMBER; -- 定义每个组织名称关联的数据需要循环次数（因为每次导出只能导出30000条数据，需要多次导出）</span></span>
<span class="line"><span>LOOP_I NUMBER; -- 定义当前循环到第几次（同上）</span></span>
<span class="line"><span>DATA_CUR SYS_REFCURSOR; -- 定义根据 ORG_NAME 匹配查询出的具体数据，为SYS_REFCURSOR类型，即动态游标</span></span>
<span class="line"><span>COUNT_CUR SYS_REFCURSOR; -- 定义匹配查询出的具体数据的总量（同上）</span></span>
<span class="line"><span>CSV_OUTPUT UTL_FILE.FILE_TYPE; -- 定义文件输出</span></span>
<span class="line"><span>DATA_ROW T_FIX_COMMUNICATION%ROWTYPE; -- 定义 RYXX 的行类型</span></span>
<span class="line"><span>MAX_LINE NUMBER := 30000; -- 每个文件导出的最大行数</span></span>
<span class="line"><span>DIR VARCHAR(20) := &#39;MYDIR&#39;; -- 输出位置</span></span>
<span class="line"><span>BEGIN</span></span>
<span class="line"><span>  -- 查询数据总量</span></span>
<span class="line"><span>  OPEN COUNT_CUR FOR</span></span>
<span class="line"><span>  &#39;SELECT COUNT(1) &#39; ||</span></span>
<span class="line"><span>  &#39;FROM T_FIX_COMMUNICATION TFC &#39; ||</span></span>
<span class="line"><span>  &#39;WHERE TFC.COMPLETE_DATE BETWEEN TO_DATE(&#39;&#39;2018-06-16 00:00:00&#39;&#39;, &#39;&#39;YYYY-MM-DD HH24:MI:SS&#39;&#39;) AND TO_DATE(&#39;&#39;2018-07-15 23:59:59&#39;&#39;, &#39;&#39;YYYY-MM-DD HH24:MI:SS&#39;&#39;) &#39; ||</span></span>
<span class="line"><span>  &#39;AND TFC.SUB_ORDER_STATUS = &#39;&#39;已完成&#39;&#39; &#39;||</span></span>
<span class="line"><span>  &#39;AND TFC.BUSI_TYPE_NAME IN (&#39;&#39;新增用户&#39;&#39;, &#39;&#39;外移-装&#39;&#39;) ORDER BY COMPLETE_DATE DESC&#39;;</span></span>
<span class="line"><span>  FETCH COUNT_CUR INTO COUNT_NUMBER;</span></span>
<span class="line"><span>  CLOSE COUNT_CUR;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -- 计算此单位的数据总共需要导出几次</span></span>
<span class="line"><span>  LOOP_TIMES := COUNT_NUMBER/MAX_LINE;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -- 开始循环导出数据</span></span>
<span class="line"><span>  LOOP_I := 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  LOOP</span></span>
<span class="line"><span>    EXIT WHEN LOOP_I &gt; LOOP_TIMES;</span></span>
<span class="line"><span>    IF LOOP_I &lt;= LOOP_TIMES THEN</span></span>
<span class="line"><span>      -- 打开查询数据的DATA_CUR游标，导出数据（需要分页查询，所以外层不能直接用*，否则不能把数据放入DATA_ROW）</span></span>
<span class="line"><span>      OPEN DATA_CUR FOR --&#39;SELECT id, name, age FROM (SELECT t.*, rownum rn FROM ryxx WHERE ST_CODE_NAME LIKE :org_name_like) WHERE rn &lt;= &#39; || TO_CHAR((LOOP_I) * MAX_LINE) || &#39; AND rn &gt; &#39; || TO_CHAR(LOOP_I * MAX_LINE) USING ORG_NAME_LIKE;</span></span>
<span class="line"><span>      &#39;SELECT * FROM ( &#39; ||</span></span>
<span class="line"><span>        &#39;SELECT TAL.ACCOUNT, TFC.*, ROWNUM AS RN &#39; ||</span></span>
<span class="line"><span>        &#39;FROM T_FIX_COMMUNICATION TFC &#39; ||</span></span>
<span class="line"><span>        &#39;LEFT JOIN TELECOM.T_ACCOUNT_LIST TAL ON TFC.ACCOUNT_ID = TAL.ACCOUNTID &#39; ||</span></span>
<span class="line"><span>        &#39;WHERE TFC.COMPLETE_DATE BETWEEN TO_DATE(&#39;&#39;2018-06-16 00:00:00&#39;&#39;, &#39;&#39;YYYY-MM-DD HH24:MI:SS&#39;&#39;) AND TO_DATE(&#39;&#39;2018-07-15 23:59:59&#39;&#39;, &#39;&#39;YYYY-MM-DD HH24:MI:SS&#39;&#39;) &#39; ||</span></span>
<span class="line"><span>        &#39;AND TFC.SUB_ORDER_STATUS = &#39;&#39;已完成&#39;&#39; &#39; ||</span></span>
<span class="line"><span>        &#39;AND TFC.BUSI_TYPE_NAME IN (&#39;&#39;新增用户&#39;&#39;, &#39;&#39;外移-装&#39;&#39;) ORDER BY COMPLETE_DATE DESC &#39; ||</span></span>
<span class="line"><span>      &#39;) WHERE RN &lt;= &#39; || TO_CHAR((LOOP_I) * MAX_LINE) || &#39; AND RN &gt; &#39; || TO_CHAR(LOOP_I * MAX_LINE);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      CSV_OUTPUT := UTL_FILE.FOPEN(&#39;MYDIR&#39;, FILE_NAME || LOOP_I || &#39;.csv&#39;, &#39;W&#39;, MAX_LINE);</span></span>
<span class="line"><span>      LOOP</span></span>
<span class="line"><span>        FETCH DATA_CUR INTO DATA_ROW;</span></span>
<span class="line"><span>        EXIT WHEN DATA_CUR%NOTFOUND;</span></span>
<span class="line"><span>        UTL_FILE.PUT_LINE(CSV_OUTPUT, DATA_ROW.RID || &#39;,&#39; || DATA_ROW.ORDER_NUMBER || &#39;,&#39; || DATA_ROW.ORDER_VERSION);</span></span>
<span class="line"><span>      END LOOP;</span></span>
<span class="line"><span>      LOOP_I := LOOP_I + 1;</span></span>
<span class="line"><span>      UTL_FILE.FCLOSE(CSV_OUTPUT);</span></span>
<span class="line"><span>      CLOSE DATA_CUR;</span></span>
<span class="line"><span>    END IF;</span></span>
<span class="line"><span>  END LOOP;</span></span>
<span class="line"><span>END;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空位0补全" tabindex="-1"><a class="header-anchor" href="#空位0补全"><span>空位0补全</span></a></h3><p><code>REPLACE(LPAD(SUBSTR(ACCOUNT_NO, 2, 3) + 1，3), &#39; &#39;, &#39;0&#39;)</code></p><h3 id="转义" tabindex="-1"><a class="header-anchor" href="#转义"><span>转义</span></a></h3><p><code>&amp; &#39; || chr(38) || &#39;</code></p><h3 id="触发器" tabindex="-1"><a class="header-anchor" href="#触发器"><span>触发器</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>CREATE OR REPLACE TRIGGER TEST_TRIGGER</span></span>
<span class="line"><span> AFTER DELETE OR INSERT OR UPDATE ON TEST</span></span>
<span class="line"><span>DECLARE</span></span>
<span class="line"><span> V_TYPE TEST_LOG.L_TYPE%TYPE;</span></span>
<span class="line"><span>BEGIN</span></span>
<span class="line"><span> IF INSERTING THEN</span></span>
<span class="line"><span>  --INSERT触发</span></span>
<span class="line"><span>  V_TYPE := &#39;INSERT&#39;;</span></span>
<span class="line"><span>  DBMS_OUTPUT.PUT_LINE(&#39;记录已经成功插入，并已记录到日志&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ELSIF UPDATING THEN</span></span>
<span class="line"><span>  --UPDATE触发</span></span>
<span class="line"><span>  V_TYPE := &#39;UPDATE&#39;;</span></span>
<span class="line"><span>  DBMS_OUTPUT.PUT_LINE(&#39;记录已经成功更新，并已记录到日志&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ELSIF DELETING THEN</span></span>
<span class="line"><span>  --DELETE触发</span></span>
<span class="line"><span>  V_TYPE := &#39;DELETE&#39;;</span></span>
<span class="line"><span>  DBMS_OUTPUT.PUT_LINE(&#39;记录已经成功删除，并已记录到日志&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> END IF;</span></span>
<span class="line"><span>END;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h3><p><code>SELECT * FROM USER_TAB_COMMENTS;</code></p><h3 id="blob-字符串-转换" tabindex="-1"><a class="header-anchor" href="#blob-字符串-转换"><span>BLOB 字符串 转换</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>TO_BLOB(UTL_RAW.CAST_TO_RAW(&#39;&#39;))</span></span>
<span class="line"><span>utl_raw.cast_to_varchar2(&#39;&#39;)</span></span>
<span class="line"><span>hextoraw(&#39;&#39;)</span></span>
<span class="line"><span>rawtohex(&#39;&#39;)</span></span>
<span class="line"><span>-- 拼接</span></span>
<span class="line"><span>create or replace function blob_join(i_blob1 in blob, i_blob2 in blob) return blob is</span></span>
<span class="line"><span>v_rt blob := empty_blob();</span></span>
<span class="line"><span>begin</span></span>
<span class="line"><span>dbms_lob.createtemporary(v_rt, TRUE);  -- 分配临时的 blob .</span></span>
<span class="line"><span>dbms_lob.append(v_rt, i_blob1);        -- 拼接 i_blob1 .</span></span>
<span class="line"><span>dbms_lob.append(v_rt, i_blob2);        -- 拼接 i_blob2 .</span></span>
<span class="line"><span>return v_rt;</span></span>
<span class="line"><span>end;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xmltype字段" tabindex="-1"><a class="header-anchor" href="#xmltype字段"><span>XMLTYPE字段</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>-- 查询</span></span>
<span class="line"><span>SELECT EXTRACTVALUE(VALUE(I),&#39;/string&#39;) AS GLPSZ</span></span>
<span class="line"><span>FROM I_TKJT_XXJS_XMGLBGS_ITXMJXPFB T1, TABLE(XMLSEQUENCE(EXTRACT(T1.GLPSZ,&#39;/ArrayOfString/string&#39;))) I</span></span>
<span class="line"><span>WHERE T1.OBJECTID = #{params.OBJECTID}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="保留一位小数" tabindex="-1"><a class="header-anchor" href="#保留一位小数"><span>保留一位小数</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>DECODE(TO_CHAR(ROUND(T4.FINISHTIME - E.CREATEDTIME,2),&#39;FM99999999999990.0&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="分组聚合" tabindex="-1"><a class="header-anchor" href="#分组聚合"><span>分组聚合</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>LISTAGG(TO_CHAR(IZ.ZZDJJWT),&#39;,&#39;) within GROUP (ORDER BY IZ.PARENTOBJECTID) AS ZZDJJWT</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="表空间调整" tabindex="-1"><a class="header-anchor" href="#表空间调整"><span>表空间调整</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>-- 查看表空间使用情况</span></span>
<span class="line"><span>SELECT</span></span>
<span class="line"><span>B.FILE_ID                                 文件ID号,</span></span>
<span class="line"><span>B.TABLESPACE_NAME                         表空间名,</span></span>
<span class="line"><span>B.BYTES                                 字节数,</span></span>
<span class="line"><span>(B.BYTES-SUM(NVL(A.BYTES,0)))                 已使用,</span></span>
<span class="line"><span>SUM(NVL(A.BYTES,0))                         剩余空间,</span></span>
<span class="line"><span>SUM(NVL(A.BYTES,0))/(B.BYTES)*100         剩余百分比</span></span>
<span class="line"><span>FROM DBA_FREE_SPACE A,DBA_DATA_FILES B</span></span>
<span class="line"><span>WHERE A.FILE_ID=B.FILE_ID&quot;田胜&quot;</span></span>
<span class="line"><span>GROUP BY B.TABLESPACE_NAME,B.FILE_ID,B.BYTES</span></span>
<span class="line"><span>ORDER BY B.FILE_ID;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查看表空间的名字及文件所在位置</span></span>
<span class="line"><span>SELECT</span></span>
<span class="line"><span>TABLESPACE_NAME,</span></span>
<span class="line"><span>FILE_ID,</span></span>
<span class="line"><span>FILE_NAME,</span></span>
<span class="line"><span>ROUND(BYTES / (1024 * 1024), 0) TOTAL_SPACE</span></span>
<span class="line"><span>FROM SYS.DBA_DATA_FILES</span></span>
<span class="line"><span>ORDER BY TABLESPACE_NAME;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 扩展表空间</span></span>
<span class="line"><span>ALTER DATABASE DATAFILE &#39;/u01/app/oracle/oradata/XE/tkbpm.dbf&#39; RESIZE 4048M;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链接数调整" tabindex="-1"><a class="header-anchor" href="#链接数调整"><span>链接数调整</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>-- 数据库允许的最大连接数</span></span>
<span class="line"><span>select value from v$parameter where name =&#39;processes&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查看当前的数据库连接数</span></span>
<span class="line"><span>select count(*) from v$process;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查看连接消耗情况</span></span>
<span class="line"><span>SELECT  B.MACHINE, B.PROGRAM, B.USERNAME, COUNT(*) FROM V$PROCESS A, V$SESSION B</span></span>
<span class="line"><span>WHERE A.ADDR = B.PADDR AND  B.USERNAME IS NOT NULL</span></span>
<span class="line"><span>GROUP BY  B.MACHINE, B.PROGRAM, B.USERNAME</span></span>
<span class="line"><span>ORDER BY COUNT(*) DESC;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,105)]))}const r=n(l,[["render",p],["__file","index.html.vue"]]),t=JSON.parse('{"path":"/%E8%AF%AD%E8%A8%80/wl94mew9/","title":"Oracle","lang":"zh-CN","frontmatter":{"title":"Oracle","createTime":"2020/05/06","tags":["Oracle"],"categories":["数据库"],"permalink":"/语言/wl94mew9/","description":"卸载 停止Oracle所有相关服务。 Oracle Universal Installer卸载产品页面，卸载产品-全部展开，OraDb11g_home1外的全部目录删除。 删除注册表信息： HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\ORACLE。 HKEY_LOCAL_MACHINE\\\\SYSTEM\\\\CurrentControlSet\\\\Se...","head":[["meta",{"property":"og:url","content":"https://orthogonalandparallel.github.io/%E8%AF%AD%E8%A8%80/wl94mew9/"}],["meta",{"property":"og:site_name","content":"万里任禅游"}],["meta",{"property":"og:title","content":"Oracle"}],["meta",{"property":"og:description","content":"卸载 停止Oracle所有相关服务。 Oracle Universal Installer卸载产品页面，卸载产品-全部展开，OraDb11g_home1外的全部目录删除。 删除注册表信息： HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\ORACLE。 HKEY_LOCAL_MACHINE\\\\SYSTEM\\\\CurrentControlSet\\\\Se..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-12T08:13:49.000Z"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:modified_time","content":"2025-06-12T08:13:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-06-12T08:13:49.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":11.74,"words":3521},"git":{"updatedTime":1749716029000,"contributors":[{"name":"靳琛","email":"jinchenj@yonyou.com","commits":1,"avatar":"https://avatars.githubusercontent.com/靳琛?v=4","url":"https://github.com/靳琛"}]},"autoDesc":true,"filePathRelative":"笔记/语言/数据库/oracle.md","categoryList":[{"id":"7051dc","sort":10000,"name":"笔记"},{"id":"d592ad","sort":10015,"name":"语言"},{"id":"7ca39d","sort":10017,"name":"数据库"}],"bulletin":false}');export{r as comp,t as data};
