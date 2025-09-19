import{_ as p,c as r,b as n,d as u,w as a,r as t,o as d,e as s}from"./app-DUomSOUZ.js";const m={};function v(b,l){const c=t("CodeTabs");return d(),r("div",null,[l[42]||(l[42]=n("h2",{id:"线程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#线程"},[n("span",null,"线程")])],-1)),l[43]||(l[43]=n("h3",{id:"属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#属性"},[n("span",null,"属性")])],-1)),u(c,{id:"6",data:[{id:"守护"},{id:"优先级"},{id:"等待、通知"},{id:"通知"},{id:"对象锁"}]},{title0:a(({value:e,isActive:i})=>l[0]||(l[0]=[n("span",null,"守护",-1)])),title1:a(({value:e,isActive:i})=>l[1]||(l[1]=[n("span",null,"优先级",-1)])),title2:a(({value:e,isActive:i})=>l[2]||(l[2]=[n("span",null,"等待、通知",-1)])),title3:a(({value:e,isActive:i})=>l[3]||(l[3]=[n("span",null,"通知",-1)])),title4:a(({value:e,isActive:i})=>l[4]||(l[4]=[n("span",null,"对象锁",-1)])),tab0:a(({value:e,isActive:i})=>l[5]||(l[5]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 守护线程例子：主线程关闭 -> 子线程关闭")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class DaemonDemo {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static class T1 extends Thread{")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            while (true) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'                System.out.println("I am alive");')]),s(`
`),n("span",{class:"line"},[n("span",null,"                try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    Thread.sleep(1000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"                } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"                }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) throws InterruptedException {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread thread = new T1();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        thread.setDaemon(true);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        thread.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread.sleep(5000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:a(({value:e,isActive:i})=>l[6]||(l[6]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 线程优先权：优先级大先执行")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class PriorityDemo {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static class HightPriority extends Thread {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        static int count = 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            while (true) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                synchronized (PriorityDemo.class) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    count ++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    if (count > 1000000) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'                        System.out.println("HightPriority is complete");')]),s(`
`),n("span",{class:"line"},[n("span",null,"                        break;")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static class LowPriority extends Thread {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        static int count = 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            while (true) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                synchronized (PriorityDemo.class) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    count ++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    if (count > 1000000) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'                        System.out.println("LowPriority is complete");')]),s(`
`),n("span",{class:"line"},[n("span",null,"                        break;")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread high = new HightPriority();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread low = new LowPriority();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        high.setPriority(Thread.MAX_PRIORITY);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        low.setPriority(Thread.MIN_PRIORITY);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        low.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        high.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab2:a(({value:e,isActive:i})=>l[7]||(l[7]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 等待线程：主线程等待子线程执行完再执行")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class JoinDemo {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public volatile static int i = 0;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static class T1 extends Thread {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            while (i < 10000) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                i++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) throws InterruptedException {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread thread = new T1();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        thread.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        thread.join();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        System.out.println(i);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab3:a(({value:e,isActive:i})=>l[8]||(l[8]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 线程等待、通知")]),s(`
`),n("span",{class:"line"},[n("span",null," * 适用情况：一个线程中有一个子任务，子任务执行结束再继续")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class WNDemo {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    final static Object object = new Object();")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static class T1 extends Thread {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            synchronized (object) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'                System.out.println("T1 start " + System.currentTimeMillis());')]),s(`
`),n("span",{class:"line"},[n("span",null,"                try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    object.wait();")]),s(`
`),n("span",{class:"line"},[n("span",null,"                } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"                }")]),s(`
`),n("span",{class:"line"},[n("span",null,'                System.out.println("T1 end " + System.currentTimeMillis());')]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static class T2 extends Thread {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            synchronized (object) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'                System.out.println("T2 start " + System.currentTimeMillis());')]),s(`
`),n("span",{class:"line"},[n("span",null,"                object.notify();")]),s(`
`),n("span",{class:"line"},[n("span",null,'                System.out.println("T2 end " + System.currentTimeMillis());')]),s(`
`),n("span",{class:"line"},[n("span",null,"                try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    Thread.sleep(2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"                } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"                }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread t1 = new T1();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread t2 = new T2();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t1.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t2.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab4:a(({value:e,isActive:i})=>l[9]||(l[9]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 线程执行方法同步（对象锁）：不同线程执行同一代码段不并行")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class SyncDemo implements Runnable {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    static SyncDemo syncDemo = new SyncDemo();")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    static int i = 0;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public synchronized void  increase() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        i++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int j = 0; j < 10000; j++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            increase();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) throws InterruptedException {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread t1 = new Thread(syncDemo);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread t2 = new Thread(syncDemo);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t1.start(); t2.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t1.join(); t2.join();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        System.out.println(i);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),l[44]||(l[44]=n("h3",{id:"创建",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建"},[n("span",null,"创建")])],-1)),u(c,{id:"26",data:[{id:"方式1"},{id:"方式2"},{id:"方式3"},{id:"方式4"},{id:"方式5"}]},{title0:a(({value:e,isActive:i})=>l[10]||(l[10]=[n("span",null,"方式1",-1)])),title1:a(({value:e,isActive:i})=>l[11]||(l[11]=[n("span",null,"方式2",-1)])),title2:a(({value:e,isActive:i})=>l[12]||(l[12]=[n("span",null,"方式3",-1)])),title3:a(({value:e,isActive:i})=>l[13]||(l[13]=[n("span",null,"方式4",-1)])),title4:a(({value:e,isActive:i})=>l[14]||(l[14]=[n("span",null,"方式5",-1)])),tab0:a(({value:e,isActive:i})=>l[15]||(l[15]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 创建线程")]),s(`
`),n("span",{class:"line"},[n("span",null," * 方式：继承 Thread")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class CreateThread1 extends Thread {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        super.run();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread thread = new CreateThread1();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        thread.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread.yield(); // 让出CPU")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:a(({value:e,isActive:i})=>l[16]||(l[16]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 创建线程")]),s(`
`),n("span",{class:"line"},[n("span",null," * 方式：实现 Runnable")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class CreateThread2 implements Runnable {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        System.out.println("开始运行这个线程");')]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread thread = new Thread();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        thread.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread.yield(); // 让出CPU")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab2:a(({value:e,isActive:i})=>l[17]||(l[17]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 创建线程")]),s(`
`),n("span",{class:"line"},[n("span",null," * 方式：CompletableFuture 创建")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class CreateThread3 {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void exec() throws ExecutionException, InterruptedException {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        CompletableFuture completableFuture1 = CompletableFuture")]),s(`
`),n("span",{class:"line"},[n("span",null,"                .runAsync(() -> {")]),s(`
`),n("span",{class:"line"},[n("span",null,'                    System.out.println("方法1 开始");')]),s(`
`),n("span",{class:"line"},[n("span",null,"                    try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        Thread.sleep(1000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    }")]),s(`
`),n("span",{class:"line"},[n("span",null,'                    System.out.println("方法1 执行");')]),s(`
`),n("span",{class:"line"},[n("span",null,"                });")]),s(`
`),n("span",{class:"line"},[n("span",null,"        CompletableFuture completableFuture2 = CompletableFuture")]),s(`
`),n("span",{class:"line"},[n("span",null,"                .runAsync(() -> {")]),s(`
`),n("span",{class:"line"},[n("span",null,'                    System.out.println("方法2 开始");')]),s(`
`),n("span",{class:"line"},[n("span",null,"                    try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        Thread.sleep(3000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    }")]),s(`
`),n("span",{class:"line"},[n("span",null,'                    System.out.println("方法2 执行");')]),s(`
`),n("span",{class:"line"},[n("span",null,"                });")]),s(`
`),n("span",{class:"line"},[n("span",null,"        CompletableFuture completableFuture3 = CompletableFuture")]),s(`
`),n("span",{class:"line"},[n("span",null,"                .runAsync(() -> {")]),s(`
`),n("span",{class:"line"},[n("span",null,'                    System.out.println("方法3 开始");')]),s(`
`),n("span",{class:"line"},[n("span",null,"                    try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        Thread.sleep(2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    }")]),s(`
`),n("span",{class:"line"},[n("span",null,'                    System.out.println("方法3 执行");')]),s(`
`),n("span",{class:"line"},[n("span",null,"                });")]),s(`
`),n("span",{class:"line"},[n("span",null,"        List<CompletableFuture> completableFutureList = new ArrayList<CompletableFuture>();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        completableFutureList.add(completableFuture1);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        completableFutureList.add(completableFuture2);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        completableFutureList.add(completableFuture3);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (CompletableFuture completableFuture : completableFutureList) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            completableFuture.get();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Test")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void test() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            exec();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        } catch (Exception e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab3:a(({value:e,isActive:i})=>l[18]||(l[18]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 创建线程")]),s(`
`),n("span",{class:"line"},[n("span",null," * 方式：通过FutureTask、Callable 创建")]),s(`
`),n("span",{class:"line"},[n("span",null," * 说明：")]),s(`
`),n("span",{class:"line"},[n("span",null," * (1)创建Callable接口的实现类，并重写call()方法,该call()方法作为线程的执行体，且有返回值")]),s(`
`),n("span",{class:"line"},[n("span",null," * (2)创建了Callable接口的实现类的实例，并用FutureTask()方法包装对象，该FutureTask()对象实现了将对象的返回值包装的功能")]),s(`
`),n("span",{class:"line"},[n("span",null," * (3)使用FutureTask对象将Thread对象的target，创建并启动线程")]),s(`
`),n("span",{class:"line"},[n("span",null," * (4)调用FutureTask对象的get()方法获得子线程执行结束后的返回值")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class CreateThread4 implements Callable<Integer> {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Integer call() throws Exception {   // 重写Callable接口中的call()方法")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int i = 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (; i < 100; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            System.out.println(Thread.currentThread().getName() + " " + i);')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return i;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) throws InterruptedException, ExecutionException {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        // 创建Callable的对象")]),s(`
`),n("span",{class:"line"},[n("span",null,"        CreateThread4 thread4 = new CreateThread4();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        FutureTask<Integer> ft = new FutureTask<Integer>(thread4);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < 100; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            // 返回值主线程的名称和执行代号")]),s(`
`),n("span",{class:"line"},[n("span",null,'            System.out.println(Thread.currentThread().getName() + " " + i);')]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (i == 20) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'                new Thread(ft, "Callable线程").start();')]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        try {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            System.out.println("子线程的返回值" + ft.get());')]),s(`
`),n("span",{class:"line"},[n("span",null,"        } catch (Exception e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab4:a(({value:e,isActive:i})=>l[19]||(l[19]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 创建线程")]),s(`
`),n("span",{class:"line"},[n("span",null," * 方式：线程组")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class CreateThread5 implements Runnable {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        String groupName = Thread.currentThread().getThreadGroup().getName();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        String name = Thread.currentThread().getName();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        while (true) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            System.out.println("I am " + groupName + " " + name);')]),s(`
`),n("span",{class:"line"},[n("span",null,"            try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                Thread.sleep(2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        ThreadGroup threadGroup = new ThreadGroup("ThreadGroup1");')]),s(`
`),n("span",{class:"line"},[n("span",null,'        Thread thread1 = new Thread(threadGroup, new CreateThread5(), "thread1");')]),s(`
`),n("span",{class:"line"},[n("span",null,'        Thread thread2 = new Thread(threadGroup, new CreateThread5(), "thread2");')]),s(`
`),n("span",{class:"line"},[n("span",null,"        thread1.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        thread2.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        System.out.println(threadGroup.activeCount());")]),s(`
`),n("span",{class:"line"},[n("span",null,"        threadGroup.list();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),l[45]||(l[45]=n("h3",{id:"分组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分组"},[n("span",null,"分组")])],-1)),u(c,{id:"46",data:[{id:"线程组"}]},{title0:a(({value:e,isActive:i})=>l[20]||(l[20]=[n("span",null,"线程组",-1)])),tab0:a(({value:e,isActive:i})=>l[21]||(l[21]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 线程组")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class ThreadGroupName implements Runnable {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        String groupName = Thread.currentThread().getThreadGroup().getName();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        String name = Thread.currentThread().getName();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        while (true) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            System.out.println("I am " + groupName + " " + name);')]),s(`
`),n("span",{class:"line"},[n("span",null,"            try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                Thread.sleep(2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        ThreadGroup threadGroup = new ThreadGroup("ThreadGroup1");')]),s(`
`),n("span",{class:"line"},[n("span",null,'        Thread thread1 = new Thread(threadGroup, new ThreadGroupName(), "thread1");')]),s(`
`),n("span",{class:"line"},[n("span",null,'        Thread thread2 = new Thread(threadGroup, new ThreadGroupName(), "thread2");')]),s(`
`),n("span",{class:"line"},[n("span",null,"        thread1.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        thread2.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        System.out.println(threadGroup.activeCount());")]),s(`
`),n("span",{class:"line"},[n("span",null,"        threadGroup.list();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),l[46]||(l[46]=n("h3",{id:"方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法"},[n("span",null,"方法")])],-1)),u(c,{id:"54",data:[{id:"中断线程"}]},{title0:a(({value:e,isActive:i})=>l[22]||(l[22]=[n("span",null,"中断线程",-1)])),tab0:a(({value:e,isActive:i})=>l[23]||(l[23]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 中断线程")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class InterruptedThread implements Runnable {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        while (true) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (Thread.currentThread().isInterrupted()) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'                System.out.println("Interrupted");')]),s(`
`),n("span",{class:"line"},[n("span",null,"                break;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                Thread.sleep(2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } catch (Exception e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'                System.out.println("Error When sleep");')]),s(`
`),n("span",{class:"line"},[n("span",null,"                Thread.currentThread().interrupt();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            Thread.yield();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) throws InterruptedException {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread thread = new Thread(new InterruptedThread());")]),s(`
`),n("span",{class:"line"},[n("span",null,"        thread.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread.sleep(2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        thread.interrupt(); // 中断")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),l[47]||(l[47]=n("h3",{id:"问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#问题"},[n("span",null,"问题")])],-1)),u(c,{id:"62",data:[{id:"HashMap多线程问题"},{id:"ArrayList多线程问题"}]},{title0:a(({value:e,isActive:i})=>l[24]||(l[24]=[n("span",null,"HashMap多线程问题",-1)])),title1:a(({value:e,isActive:i})=>l[25]||(l[25]=[n("span",null,"ArrayList多线程问题",-1)])),tab0:a(({value:e,isActive:i})=>l[26]||(l[26]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"public class HashMapProblem implements Callable<Integer> {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static ExecutorService exec = Executors.newFixedThreadPool(10);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static Map<Integer, Integer> results = new HashMap<Integer, Integer>();")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Integer call() throws Exception {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < 1000; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            results.put(i, i);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        /*")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread.sleep(100);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < 1000; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            results.remove(i);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        */")]),s(`
`),n("span",{class:"line"},[n("span",null,'        System.out.println(" ---- " + Thread.currentThread().getName() + "		" + results.size());')]),s(`
`),n("span",{class:"line"},[n("span",null,"        return results.get(1);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) throws InterruptedException {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Stopwatch stopwatch = new Stopwatch();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < 200; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            HashMapProblem hashMapProblem = new HashMapProblem();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            exec.submit(hashMapProblem);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        exec.shutdown();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        while(true){")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if(exec.isTerminated()){")]),s(`
`),n("span",{class:"line"},[n("span",null,'                System.out.println("所有的子线程都结束了！");')]),s(`
`),n("span",{class:"line"},[n("span",null,"                break;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        System.out.println(stopwatch.elapsedTime());")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:a(({value:e,isActive:i})=>l[27]||(l[27]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * ArrayList多线程问题")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class ArrayListMultiThread {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    static ArrayList<Integer> arrayList = new ArrayList<Integer>(10); // 线程不安全")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    static Vector<Integer> vector = new Vector<Integer>(10); // 线程安全")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static class AddThread implements Runnable {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            for (int i = 0; i < 1000000; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                vector.add(i);")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) throws InterruptedException {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread t1 = new Thread(new AddThread());")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread t2 = new Thread(new AddThread());")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t1.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t2.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t1.join();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t2.join();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        System.out.println(vector.size());")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),l[48]||(l[48]=n("h2",{id:"锁",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#锁"},[n("span",null,"锁")])],-1)),u(c,{id:"73",data:[{id:"重入锁"},{id:"重入锁条件"},{id:"信号量"},{id:"读写锁"},{id:"倒计时器（线程池执行完成指定线程后执行）"},{id:"循环栏珊"},{id:"线程阻塞"}]},{title0:a(({value:e,isActive:i})=>l[28]||(l[28]=[n("span",null,"重入锁",-1)])),title1:a(({value:e,isActive:i})=>l[29]||(l[29]=[n("span",null,"重入锁条件",-1)])),title2:a(({value:e,isActive:i})=>l[30]||(l[30]=[n("span",null,"信号量",-1)])),title3:a(({value:e,isActive:i})=>l[31]||(l[31]=[n("span",null,"读写锁",-1)])),title4:a(({value:e,isActive:i})=>l[32]||(l[32]=[n("span",null,"倒计时器（线程池执行完成指定线程后执行）",-1)])),title5:a(({value:e,isActive:i})=>l[33]||(l[33]=[n("span",null,"循环栏珊",-1)])),title6:a(({value:e,isActive:i})=>l[34]||(l[34]=[n("span",null,"线程阻塞",-1)])),tab0:a(({value:e,isActive:i})=>l[35]||(l[35]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 重入锁（显性的 synchronized）：代码段线程安全")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class ReenterLock implements Runnable{")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static ReentrantLock lock = new ReentrantLock(true);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static int i = 0;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int j = 0; j < 100; j++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            lock.lock();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                i++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } finally {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                lock.unlock();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) throws InterruptedException {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ReenterLock reenterLock = new ReenterLock();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread t1 = new Thread(reenterLock);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread t2 = new Thread(reenterLock);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t1.start(); t2.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t1.join(); t2.join();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        System.out.println(i);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:a(({value:e,isActive:i})=>l[36]||(l[36]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 重入锁条件：暂停、唤醒")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class ReenterLockCondition implements Runnable {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static ReentrantLock lock = new ReentrantLock();")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static Condition condition = lock.newCondition();")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            lock.lock();")]),s(`
`),n("span",{class:"line"},[n("span",null,'            System.out.println("Thread is wait");')]),s(`
`),n("span",{class:"line"},[n("span",null,"            condition.await();")]),s(`
`),n("span",{class:"line"},[n("span",null,'            System.out.println("Thread is going on");')]),s(`
`),n("span",{class:"line"},[n("span",null,"        } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        } finally {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            lock.unlock();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) throws InterruptedException {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ReenterLockCondition reenterLockCondition = new ReenterLockCondition();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread t1 = new Thread(reenterLockCondition);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t1.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread.sleep(2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        lock.lock();")]),s(`
`),n("span",{class:"line"},[n("span",null,'        System.out.println("Thread is notify");')]),s(`
`),n("span",{class:"line"},[n("span",null,"        condition.signal();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        lock.unlock();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab2:a(({value:e,isActive:i})=>l[37]||(l[37]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 信号量：线程池中每次执行的线程数")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class SemapDemo implements Runnable {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    final Semaphore semaphore = new Semaphore(5); // 信号量")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            semaphore.acquire();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            Thread.sleep(2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,'            System.out.println(Thread.currentThread().getId() + ":done!");')]),s(`
`),n("span",{class:"line"},[n("span",null,"            semaphore.release();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ExecutorService executorService = Executors.newFixedThreadPool(20); // 创建线程池")]),s(`
`),n("span",{class:"line"},[n("span",null,"        final SemapDemo demo = new SemapDemo();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < 20; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            executorService.submit(demo); // 每次创建的信号量")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab3:a(({value:e,isActive:i})=>l[38]||(l[38]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 读写锁：读并行、写不并行，提升效率")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class ReadWriteLockDemo {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static Lock lock = new ReentrantLock();")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static ReentrantReadWriteLock readWriteLock = new ReentrantReadWriteLock();")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static Lock readLock = readWriteLock.readLock();")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static Lock writeLock = readWriteLock.writeLock();")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private int value;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static Stopwatch stopwatch = new Stopwatch();")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Object handleRead(Lock lock) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            lock.lock();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            Thread.sleep(1000);")]),s(`
`),n("span",{class:"line"},[n("span",null,'            System.out.println("读执行时长：" + stopwatch.elapseTime());')]),s(`
`),n("span",{class:"line"},[n("span",null,"        } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        } finally {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            lock.unlock();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return value;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void handleWrite(Lock lock, int index) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            lock.lock();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            Thread.sleep(1000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"            value = index;")]),s(`
`),n("span",{class:"line"},[n("span",null,'            System.out.println("写执行时长：" + stopwatch.elapseTime());')]),s(`
`),n("span",{class:"line"},[n("span",null,"        } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        } finally {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            lock.unlock();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) throws InterruptedException {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        final ReadWriteLockDemo demo = new ReadWriteLockDemo();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Runnable readRunbale = new Runnable() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"            public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                demo.handleRead(readLock);")]),s(`
`),n("span",{class:"line"},[n("span",null,"                //demo.handleRead(lock);")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        };")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Runnable writeRunbale = new Runnable() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"            public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                demo.handleWrite(writeLock, new Random().nextInt());")]),s(`
`),n("span",{class:"line"},[n("span",null,"                //demo.handleWrite(lock, new Random().nextInt());")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        };")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < 10; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            Thread t1 = new Thread(readRunbale);")]),s(`
`),n("span",{class:"line"},[n("span",null,"            t1.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < 10; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            Thread t2 = new Thread(writeRunbale);")]),s(`
`),n("span",{class:"line"},[n("span",null,"            t2.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab4:a(({value:e,isActive:i})=>l[39]||(l[39]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 倒计时：线程一个个执行，线程池中的执行完成指定线程后在执行主线程")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class CountDownLatchDemo implements Runnable {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    static final CountDownLatch end = new CountDownLatch(5);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    static final CountDownLatchDemo demo = new CountDownLatchDemo();")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            Thread.sleep(new Random().nextInt(10) * 1000);")]),s(`
`),n("span",{class:"line"},[n("span",null,'            System.out.println("check complete");')]),s(`
`),n("span",{class:"line"},[n("span",null,"            end.countDown();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) throws InterruptedException {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ExecutorService exec = Executors.newFixedThreadPool(10);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < 10; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            exec.submit(demo);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        end.await(); // 等待检查")]),s(`
`),n("span",{class:"line"},[n("span",null,'        System.out.println("Fire!");')]),s(`
`),n("span",{class:"line"},[n("span",null,"        exec.shutdown();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab5:a(({value:e,isActive:i})=>l[40]||(l[40]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 循环栏珊：一种线程的集合")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class CyclicBarrierDemo {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static class Soldier implements Runnable {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        private String soldier;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        private final CyclicBarrier cyclicBarrier;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public Soldier(CyclicBarrier cyclicBarrier, String soldierName) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            this.cyclicBarrier = cyclicBarrier;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            this.soldier = soldierName;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                cyclicBarrier.await();")]),s(`
`),n("span",{class:"line"},[n("span",null,"                doWork();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } catch (BrokenBarrierException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        void doWork() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            try {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                Thread.sleep(Math.abs(new Random().nextInt()%10000));")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } catch (InterruptedException e) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                e.printStackTrace();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,'            System.out.println(soldier + ":任务完成");')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static class BarrierRun implements Runnable {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        boolean flag;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int N;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public BarrierRun(boolean flag, int N) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            this.flag = flag;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            this.N = N;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (flag) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'                System.out.println("司令:[士兵" + N + "个，任务完成！]");')]),s(`
`),n("span",{class:"line"},[n("span",null,"            } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,'                System.out.println("司令:[士兵" + N + "个，集合完毕！]");')]),s(`
`),n("span",{class:"line"},[n("span",null,"                flag = true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        final int N = 10;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread[] allSoldier = new Thread[N];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        boolean flag = false;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        CyclicBarrier cyclicBarrier = new CyclicBarrier(N, new BarrierRun(flag, N));")]),s(`
`),n("span",{class:"line"},[n("span",null,'        System.out.println("集合队伍！");')]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < N; ++i) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            System.out.println("士兵" + i + "报道！");')]),s(`
`),n("span",{class:"line"},[n("span",null,'            allSoldier[i] = new Thread(new Soldier(cyclicBarrier, "士兵" + i));')]),s(`
`),n("span",{class:"line"},[n("span",null,"            allSoldier[i].start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab6:a(({value:e,isActive:i})=>l[41]||(l[41]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 线程阻塞：不需要获取对象")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class LockSupportDemo {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static Object u = new Object();")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'    static ChangeObjectThread t1 = new ChangeObjectThread("t1");')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'    static ChangeObjectThread t2 = new ChangeObjectThread("t2");')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static class ChangeObjectThread extends Thread {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public ChangeObjectThread (String name) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            super.setName(name);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public void run() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            synchronized (u) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'                System.out.println("in: " + getName());')]),s(`
`),n("span",{class:"line"},[n("span",null,"                LockSupport.park();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) throws InterruptedException {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t1.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Thread.sleep(100);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t2.start();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        LockSupport.unpark(t1);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        LockSupport.unpark(t2);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t1.join();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        t2.join();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1})])}const h=p(m,[["render",v],["__file","index.html.vue"]]),T=JSON.parse('{"path":"/%E8%AF%AD%E8%A8%80/%E5%A4%9A%E7%BA%BF%E7%A8%8B/","title":"多线程","lang":"zh-CN","frontmatter":{"title":"多线程","createTime":"2025/06/20 15:40:38","permalink":"/语言/多线程/","description":"线程 属性 创建 分组 方法 问题 锁","head":[["meta",{"property":"og:url","content":"https://orthogonalandparallel.github.io/%E8%AF%AD%E8%A8%80/%E5%A4%9A%E7%BA%BF%E7%A8%8B/"}],["meta",{"property":"og:site_name","content":"万里任禅游"}],["meta",{"property":"og:title","content":"多线程"}],["meta",{"property":"og:description","content":"线程 属性 创建 分组 方法 问题 锁"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-20T08:30:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-06-20T08:30:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多线程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-06-20T08:30:00.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":7.24,"words":2171},"git":{"updatedTime":1750408200000,"contributors":[{"name":"靳琛","email":"jinchenj@yonyou.com","commits":1,"avatar":"https://avatars.githubusercontent.com/靳琛?v=4","url":"https://github.com/靳琛"}]},"autoDesc":true,"filePathRelative":"笔记/语言/后端/多线程.md","categoryList":[{"id":"7051dc","sort":10000,"name":"笔记"},{"id":"d592ad","sort":10015,"name":"语言"},{"id":"83a577","sort":10018,"name":"后端"}],"bulletin":false}');export{h as comp,T as data};
