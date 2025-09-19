import{_ as m,c as v,b as n,d as p,w as a,r,o as t,e as s}from"./app-DUomSOUZ.js";const b="/assets/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE-DbG65d2D.gif",d="/assets/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F-9rKS8xnT.gif",o="/assets/%E7%BA%A2%E9%BB%91%E6%A0%91%E6%8F%92%E5%85%A5-BbCiVS6j.webp",h="/assets/%E7%BA%A2%E9%BB%91%E6%A0%91%E6%9F%A5%E6%89%BE-B1ooLi6h.webp",g="/assets/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F-B8GwndZy.gif",x="/assets/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F-CZ-z1IVg.gif",f="/assets/%E5%B9%B6%E5%BD%92%E6%8E%92%E5%BA%8F-Bguw-KQu.gif",y="/assets/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F-DD28bswc.gif",k={};function N(j,l){const u=r("CodeTabs"),c=r("Tabs");return t(),v("div",null,[l[50]||(l[50]=n("h2",{id:"数据结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数据结构"},[n("span",null,"数据结构")])],-1)),l[51]||(l[51]=n("h3",{id:"基础数据结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础数据结构"},[n("span",null,"基础数据结构")])],-1)),p(u,{id:"6",data:[{id:"背包"},{id:"定容栈"},{id:"下压栈（数组实现）"},{id:"下压栈（链表实现）"},{id:"队列"},{id:"优先队列"},{id:"二分二叉树"},{id:"平衡二叉树"},{id:"图"}]},{title0:a(({value:e,isActive:i})=>l[0]||(l[0]=[n("span",null,"背包",-1)])),title1:a(({value:e,isActive:i})=>l[1]||(l[1]=[n("span",null,"定容栈",-1)])),title2:a(({value:e,isActive:i})=>l[2]||(l[2]=[n("span",null,"下压栈（数组实现）",-1)])),title3:a(({value:e,isActive:i})=>l[3]||(l[3]=[n("span",null,"下压栈（链表实现）",-1)])),title4:a(({value:e,isActive:i})=>l[4]||(l[4]=[n("span",null,"队列",-1)])),title5:a(({value:e,isActive:i})=>l[5]||(l[5]=[n("span",null,"优先队列",-1)])),title6:a(({value:e,isActive:i})=>l[6]||(l[6]=[n("span",null,"二分二叉树",-1)])),title7:a(({value:e,isActive:i})=>l[7]||(l[7]=[n("span",null,"平衡二叉树",-1)])),title8:a(({value:e,isActive:i})=>l[8]||(l[8]=[n("span",null,"图",-1)])),tab0:a(({value:e,isActive:i})=>l[9]||(l[9]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 背包")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class Bag<Item> implements Iterable<Item> {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node first;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private int N; // 维护背包中元素的数量")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private class Node {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Item item;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Node next;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 添加元素到背包头部")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param item 要添加的元素")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void add(Item item) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Node oldfirst = first;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        first = new Node();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        first.item = item;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        first.next = oldfirst;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        N++; // 元素数量加一")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 删除背包头部的元素")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return 被删除的元素")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @throws NoSuchElementException 如果背包为空")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Item remove() throws NoSuchElementException {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (isEmpty()) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            throw new NoSuchElementException("Bag is empty");')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Item item = first.item; // 获取头部元素")]),s(`
`),n("span",{class:"line"},[n("span",null,"        first = first.next;    // 移动头指针到下一个节点")]),s(`
`),n("span",{class:"line"},[n("span",null,"        N--; // 元素数量减一")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return item;           // 返回被删除的元素")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 检查背包是否为空")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return 如果背包为空则返回 true，否则返回 false")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public boolean isEmpty() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return first == null;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 获取背包中元素的数量")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return 元素的数量")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public int size() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return N;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Iterator<Item> iterator() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return new ListIterator();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private class ListIterator implements Iterator<Item> {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        private Node current = first;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public boolean hasNext() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            return current != null;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public Item next() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (!hasNext()) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                throw new NoSuchElementException();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            Item item = current.item;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            current = current.next;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            return item;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:a(({value:e,isActive:i})=>l[10]||(l[10]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 定容栈")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class FixedCapacityStack<Item> {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Item[] a;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private int N;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public FixedCapacityStack(int cap) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a = (Item[]) new Object[cap];")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public boolean isEmpty() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return N == 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public int size() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return N;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void push(Item item) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (N == a.length) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            resize(2 * a.length);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a[N++] = item;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Item pop() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Item item = a[--N];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a[N] = null; // 游离对象")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (N > 0 && N == a.length / 4) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            resize(a.length/2);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return item;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private void resize(int max) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Item[] temp = (Item[]) new Object[max];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < N; i ++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            temp[i] = a[i];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a = temp;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab2:a(({value:e,isActive:i})=>l[11]||(l[11]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 下压栈（数组实现）")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class ResizingArrayStack<Item> {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Item[] a = (Item[]) new Object[1];")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private int N;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public boolean isEmpty() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return N == 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public int size() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return N;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private void resize(int max) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Item[] temp = (Item[]) new Object[max];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < N; i ++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            temp[i] = a[i];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a = temp;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void push(Item item) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (N == a.length) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            resize(2 * a.length);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a[N++] = item;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Item pop() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Item item = a[--N];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a[N] = null; // 游离对象")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (N > 0 && N == a.length / 4) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            resize(a.length/2);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return item;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Iterator<Item> iterator() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return new ReverseArrayIterator();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private class ReverseArrayIterator implements Iterator<Item> {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        private int i = N;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public boolean hasNext() { return i > 0; }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public Item next() {return a[--i];}")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public void  remove() {}")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab3:a(({value:e,isActive:i})=>l[12]||(l[12]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 下压栈（链表实现）")]),s(`
`),n("span",{class:"line"},[n("span",null," * @param <Item>")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class Stack<Item> {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node first;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private int N;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private class Node {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Item item;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Node next;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public boolean isEmpty() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return first == null;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public int size() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return N;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void push(Item item) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Node oldfirst = first;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        first = new Node();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        first.item = item;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        first.next = oldfirst;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        N++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab4:a(({value:e,isActive:i})=>l[13]||(l[13]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 队列")]),s(`
`),n("span",{class:"line"},[n("span",null," * @param <Item>")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class Queue<Item> {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node first;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node last;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private int N;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private class Node {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Item item;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Node next;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public boolean isEmpty() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return first == null;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public int size() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return N;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void enqueue(Item item) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Node oldlast = last;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        last = new Node();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        last.item = item;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        last.next = null;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (isEmpty()) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            first = last;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            oldlast.next = last;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        N++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Item dequeue() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Item item = first.item;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        first = first.next;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (isEmpty()) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            last = null;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        N--;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return item;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab5:a(({value:e,isActive:i})=>l[14]||(l[14]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 优先队列模板")]),s(`
`),n("span",{class:"line"},[n("span",null," * 时间复杂度：")]),s(`
`),n("span",{class:"line"},[n("span",null," * 1、无序数组 插入：1 删除最大元素：N")]),s(`
`),n("span",{class:"line"},[n("span",null," * 2、有序数组 插入：M 删除最大元素：1")]),s(`
`),n("span",{class:"line"},[n("span",null," * 3、链表 插入：NlogN 删除最大元素：NlogN")]),s(`
`),n("span",{class:"line"},[n("span",null," * @param <Key>")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class MaxPQExample<Key extends Comparable<Key>> {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public MaxPQExample() {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 创建初始容量为max的优先队列")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param max")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public MaxPQExample(int max) {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 用a中的元素创建优先队列")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public MaxPQExample(Key[] a) {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 插入元素")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param v")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void insert(Key v) {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 删除元素")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Key delMax() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return null;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 是否为空")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public boolean isEmpty() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return false;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 返回最大元素")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Key max() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return null;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 返回元素个数")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public int size() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab6:a(({value:e,isActive:i})=>l[15]||(l[15]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 二分二叉树")]),s(`
`),n("span",{class:"line"},[n("span",null," * 构造说明：小于根节点放左边，大于根节点放右边")]),s(`
`),n("span",{class:"line"},[n("span",null," * 时间复杂度：随机构建的N个节点的二分二叉树，查找比较次数~2lgN")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class BST<Key extends Comparable<Key>, Value> {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node root;               // 二叉查找树的根结点")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private class Node {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        private Key key;              // 键")]),s(`
`),n("span",{class:"line"},[n("span",null,"        private Value val;            // 值")]),s(`
`),n("span",{class:"line"},[n("span",null,"        private Node left, right;     // 指向子树的链接")]),s(`
`),n("span",{class:"line"},[n("span",null,"        private int N;                // 以该结点为根的子树中的结点总数")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        public Node(Key key, Value val, int N) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            this.key = key;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            this.val = val;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            this.N = N;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public int size() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return size(root);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private int size(Node x) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (x == null) return 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else return x.N;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Value get(Key key) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return get(root, key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Value get(Node x, Key key) {  // 在以x为根结点的子树中查找并返回key所对应的值；")]),s(`
`),n("span",{class:"line"},[n("span",null,"        // 如果找不到则返回null")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (x == null) return null;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int cmp = key.compareTo(x.key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (cmp < 0) return get(x.left, key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if (cmp > 0) return get(x.right, key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else return x.val;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void put(Key key, Value val) {  // 查找key，找到则更新它的值，否则为它创建一个新的结点")]),s(`
`),n("span",{class:"line"},[n("span",null,"        root = put(root, key, val);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node put(Node x, Key key, Value val) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        // 如果key存在于以x为根结点的子树中则更新它的值；")]),s(`
`),n("span",{class:"line"},[n("span",null,"        // 否则将以key和val为键值对的新结点插入到该子树中")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (x == null) return new Node(key, val, 1);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int cmp = key.compareTo(x.key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (cmp < 0) x.left = put(x.left, key, val);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if (cmp > 0) x.right = put(x.right, key, val);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else x.val = val;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        x.N = size(x.left) + size(x.right) + 1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return x;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Key max() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return max(root).key;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node max(Node x) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (x.right == null) return x;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return max(x.right);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Key min() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return min(root).key;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node min(Node x) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (x.left == null) return x;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return min(x.left);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Key floor(Key key) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Node x = floor(root, key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (x == null) return null;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return x.key;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node floor(Node x, Key key) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (x == null) return null;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int cmp = key.compareTo(x.key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (cmp == 0) return x;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (cmp < 0) return floor(x.left, key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Node t = floor(x.right, key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (t != null) return t;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else return x;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Key select(int k) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return select(root, k).key;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node select(Node x, int k) {   // 返回排名为k的结点")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (x == null) return null;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int t = size(x.left);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (t > k) return select(x.left, k);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if (t < k) return select(x.right, k - t - 1);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else return x;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public int rank(Key key) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return rank(key, root);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private int rank(Key key, Node x) {  // 返回以x为根结点的子树中小于x.key的键的数量")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (x == null) return 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int cmp = key.compareTo(x.key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (cmp < 0) return rank(key, x.left);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if (cmp > 0) return 1 + size(x.left) + rank(key, x.right);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else return size(x.left);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void deleteMin() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        root = deleteMin(root);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node deleteMin(Node x) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (x.left == null) return x.right;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        x.left = deleteMin(x.left);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        x.N = size(x.left) + size(x.right) + 1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return x;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void delete(Key key) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        root = delete(root, key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node delete(Node x, Key key) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (x == null) return null;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int cmp = key.compareTo(x.key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (cmp < 0) x.left = delete(x.left, key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if (cmp > 0) x.right = delete(x.right, key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (x.right == null) return x.left;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (x.left == null) return x.right;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            Node t = x;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            x = min(t.right);  // 请见算法3.3（续2）")]),s(`
`),n("span",{class:"line"},[n("span",null,"            x.right = deleteMin(t.right);")]),s(`
`),n("span",{class:"line"},[n("span",null,"            x.left = t.left;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        x.N = size(x.left) + size(x.right) + 1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return x;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Iterable<Key> keys() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return keys(min(), max());")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public Iterable<Key> keys(Key lo, Key hi) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Queue<Key> queue = new Queue<Key>();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        keys(root, queue, lo, hi);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return queue;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private void keys(Node x, Queue<Key> queue, Key lo, Key hi) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (x == null) return;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int cmplo = lo.compareTo(x.key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int cmphi = hi.compareTo(x.key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (cmplo < 0) keys(x.left, queue, lo, hi);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (cmplo <= 0 && cmphi >= 0) queue.enqueue(x.key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (cmphi > 0) keys(x.right, queue, lo, hi);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    // 请见算法3.3（续1）")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    // max()、min()、floor()、ceiling()方法请见算法3.3（续2）")]),s(`
`),n("span",{class:"line"},[n("span",null,"    // select()、rank()方法请见算法3.3（续3）")]),s(`
`),n("span",{class:"line"},[n("span",null,"    // delete()、deleteMin()、deleteMax()方法请见算法3.3（续4）")]),s(`
`),n("span",{class:"line"},[n("span",null,"    // keys()方法请见算法3.3（续5）")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab7:a(({value:e,isActive:i})=>l[16]||(l[16]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 平衡二叉树")]),s(`
`),n("span",{class:"line"},[n("span",null," * 目标：N个节点的树，树高为lgN")]),s(`
`),n("span",{class:"line"},[n("span",null," * 1：2-3查找树")]),s(`
`),n("span",{class:"line"},[n("span",null," * 2：红黑查找树，两个 2- 表示 3- 的2-3查找树")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class RedBlackBST<Key extends Comparable<Key>, Value> {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static final boolean RED = true;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static final boolean BLACK = false;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node root;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private class Node {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Key key;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Value val;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Node left, right;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int N;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        boolean color;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Node(Key key, Value val, int N, boolean color) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            this.key = key;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            this.val = val;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            this.N = N;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            this.color = color;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private boolean isRed(Node x) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (x == null) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            return false;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            return x.color == RED;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 红左旋转")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param h")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node rotateLeft(Node h) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Node x = h.right;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        h.right = x.left;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        x.left = h;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        x.color = h.color;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        h.color = RED;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        x.N = h.N;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        h.N = 1 + size(h.left) + size(h.right);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return x;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 红佑旋转")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param h")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node rotateRight(Node h) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Node x = h.left;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        h.left = x.right;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        x.right = h;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        x.color = h.color;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        h.color = RED;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        x.N = h.N;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        h.N = 1 + size(h.left) + size(h.right);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return x;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 分割双红")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param h")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private void flipColors(Node h) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        h.color = RED;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        h.left.color = BLACK;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        h.right.color = BLACK;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private int size() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return size(root);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private int size(Node x) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (x == null) return 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else return x.N;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void put(Key key, Value val) {  // 查找key，找到则更新其值，否则为它新建一个结点")]),s(`
`),n("span",{class:"line"},[n("span",null,"        root = put(root, key, val);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        root.color = BLACK;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Node put(Node h, Key key, Value val) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (h == null)  // 标准的插入操作，和父结点用红链接相连")]),s(`
`),n("span",{class:"line"},[n("span",null,"            return new Node(key, val, 1, RED);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int cmp = key.compareTo(h.key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (cmp < 0) h.left = put(h.left, key, val);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if (cmp > 0) h.right = put(h.right, key, val);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else h.val = val;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (isRed(h.right) && !isRed(h.left)) h = rotateLeft(h);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (isRed(h.left) && isRed(h.left.left)) h = rotateRight(h);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (isRed(h.left) && isRed(h.right)) flipColors(h);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        h.N = size(h.left) + size(h.right) + 1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return h;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab8:a(({value:e,isActive:i})=>l[17]||(l[17]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * @author jinchenj")]),s(`
`),n("span",{class:"line"},[n("span",null," * @description 图：用临接表表达，程序用由顶点索引的整形链表数组表示")]),s(`
`),n("span",{class:"line"},[n("span",null," * @create:2024-12-1614:00:11")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class Graph {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private final int V;          // 顶点数目")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private int E;                // 边的数目")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private Bag<Integer>[] adj;   // 邻接表")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 创建一个含有  个顶点但不含有边的图")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param V")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    Graph(int V) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        this.V = V;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        this.E = 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        adj = (Bag<Integer>[]) new Bag[V];      // 创建邻接表")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int v = 0; v < V; v++)             // 将所有链表初始化为空")]),s(`
`),n("span",{class:"line"},[n("span",null,"            adj[v] = new Bag<Integer>();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 从标准输入流 in 读入一幅图")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param in")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    Graph(In in) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        this(in.readInt());          // 读取V并将图初始化")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int E = in.readInt();        // 读取E")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < E; i++)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {  // 添加一条边")]),s(`
`),n("span",{class:"line"},[n("span",null,"            int v = in.readInt();        // 读取一个顶点")]),s(`
`),n("span",{class:"line"},[n("span",null,"            int w = in.readInt();        // 读取另一个顶点")]),s(`
`),n("span",{class:"line"},[n("span",null,"            addEdge(v, w);               // 添加一条连接它们的边")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 顶点数")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    int V() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return V;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 边数")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    int E() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return E;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 向图中添加一条边 v-w")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param v")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param w")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void addEdge(int v, int w) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        adj[v].add(w);                            // 将w添加到v的链表中")]),s(`
`),n("span",{class:"line"},[n("span",null,"        adj[w].add(v);                            // 将v添加到w的链表中")]),s(`
`),n("span",{class:"line"},[n("span",null,"        E++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 和 v 相邻的所有顶点")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param v")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    Iterable<Integer> adj(int v) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return adj[v];")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public String toString() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return null;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),l[52]||(l[52]=n("h3",{id:"应用数据结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#应用数据结构"},[n("span",null,"应用数据结构")])],-1)),p(u,{id:"38",data:[{id:"自定义计时器"},{id:"可视化累加器"}]},{title0:a(({value:e,isActive:i})=>l[18]||(l[18]=[n("span",null,"自定义计时器",-1)])),title1:a(({value:e,isActive:i})=>l[19]||(l[19]=[n("span",null,"可视化累加器",-1)])),tab0:a(({value:e,isActive:i})=>l[20]||(l[20]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 自定义计时器")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class StopWatch {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private final long start;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public StopWatch() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        start = System.currentTimeMillis();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public String getStart() {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        String startStr  = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(start));')]),s(`
`),n("span",{class:"line"},[n("span",null,"        return startStr;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public double elapsedTime () {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        long now = System.currentTimeMillis();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return (now - start) / 1000.0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:a(({value:e,isActive:i})=>l[21]||(l[21]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 可视化累加器")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class VisualAccumlator {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private double x;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private int n;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private double sum;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private double pow2sum;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public VisualAccumlator(int trials, double max) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdDraw.setXscale(0, trials);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdDraw.setYscale(0, max);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdDraw.setPenRadius(0.005);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public void addDataValue (double in) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        x = in;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        n++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        sum();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        pow2sum();")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdDraw.setPenColor(StdDraw.DARK_GRAY);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdDraw.point(n, x);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdDraw.setPenColor(StdDraw.YELLOW);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdDraw.point(n, sum);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdDraw.setPenColor(StdDraw.RED);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdDraw.point(n, mean() * 1000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdDraw.setPenColor(StdDraw.BLUE);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdDraw.point(n, stddev() * 1000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 和")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public double sum () {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        sum += x;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return sum;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 平方和")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public double pow2sum() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        pow2sum = Math.pow(x - mean(), 2);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return pow2sum;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 期望")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public double mean () {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        double mean = BigDecimal.valueOf(sum).divide(BigDecimal.valueOf(n), 2).doubleValue();")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return mean;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 标准差")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public double var () {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        double var = pow2sum/n;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return var;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 方差")]),s(`
`),n("span",{class:"line"},[n("span",null,"      * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public double stddev () {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return Math.sqrt(this.var());")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    @Override")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public String toString() {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        return "VisualAccumlator{" +')]),s(`
`),n("span",{class:"line"},[n("span",null,'                "x=" + x +')]),s(`
`),n("span",{class:"line"},[n("span",null,'                ", n=" + n +')]),s(`
`),n("span",{class:"line"},[n("span",null,'                ", sum=" + sum +')]),s(`
`),n("span",{class:"line"},[n("span",null,'                ", pow2sum=" + pow2sum +')]),s(`
`),n("span",{class:"line"},[n("span",null,"                '}';")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),l[53]||(l[53]=n("h2",{id:"算法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法"},[n("span",null,"算法")])],-1)),l[54]||(l[54]=n("h3",{id:"查找",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#查找"},[n("span",null,"查找")])],-1)),p(u,{id:"52",data:[{id:"二分法查找"}]},{title0:a(({value:e,isActive:i})=>l[22]||(l[22]=[n("span",null,"二分法查找",-1)])),tab0:a(({value:e,isActive:i})=>l[23]||(l[23]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 二分法查找")]),s(`
`),n("span",{class:"line"},[n("span",null," * 时间复杂度：O(log2n)")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class BinarySearch {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private int[] a;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public BinarySearch(int[] keys) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a = new int[keys.length];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < keys.length; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            a[i] = keys[i]; // 保护性复制")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Arrays.sort(a);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public boolean contains(int key) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return rank(key) != -1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 二分法")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param key")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private int rank(int key) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int lo = 0; // 小索引")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int hi = a.length - 1; // 大索引")]),s(`
`),n("span",{class:"line"},[n("span",null,"        while (lo <= hi) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            int mid = lo + (hi - lo) / 2; // 中间索引")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (key < a[mid]) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                hi = mid - 1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } else if (key > a[mid]) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                lo = mid + 1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                return mid;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return -1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),p(c,{id:"57",data:[{id:"二分查找"},{id:"二叉查找树（BST）"},{id:"红黑树"}]},{title0:a(({value:e,isActive:i})=>l[24]||(l[24]=[s("二分查找")])),title1:a(({value:e,isActive:i})=>l[25]||(l[25]=[s("二叉查找树（BST）")])),title2:a(({value:e,isActive:i})=>l[26]||(l[26]=[s("红黑树")])),tab0:a(({value:e,isActive:i})=>l[27]||(l[27]=[n("ul",null,[n("li",null,[s("时间复杂度：O(log2n) "),n("img",{src:b,alt:"二分查找"})])],-1)])),tab1:a(({value:e,isActive:i})=>l[28]||(l[28]=[n("ul",null,[n("li",null,"时间复杂度："),n("li",null,"查找：平均时间复杂度为 O(log N)，最坏情况下为 O(N)（当树退化为链表时）。"),n("li",null,"插入：平均时间复杂度为 O(log N)，最坏情况下为 O(N)。"),n("li",null,[s("删除：平均时间复杂度为 O(log N)，最坏情况下为 O(N) "),n("img",{src:d,alt:"插入排序"})])],-1)])),tab2:a(({value:e,isActive:i})=>l[29]||(l[29]=[n("ul",null,[n("li",null,"时间复杂度："),n("li",null,"查找：平均时间复杂度为 O(log N)"),n("li",null,"插入：平均时间复杂度为 O(log N)"),n("li",null,[s("删除：平均时间复杂度为 O(log N) "),n("img",{src:o,alt:"红黑树插入"}),n("img",{src:h,alt:"红黑树查找"})])],-1)])),_:1}),l[55]||(l[55]=n("h3",{id:"排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#排序"},[n("span",null,"排序")])],-1)),p(u,{id:"119",data:[{id:"选择排序"},{id:"插入排序"},{id:"希尔排序"},{id:"并归排序"},{id:"快速排序"}]},{title0:a(({value:e,isActive:i})=>l[30]||(l[30]=[n("span",null,"选择排序",-1)])),title1:a(({value:e,isActive:i})=>l[31]||(l[31]=[n("span",null,"插入排序",-1)])),title2:a(({value:e,isActive:i})=>l[32]||(l[32]=[n("span",null,"希尔排序",-1)])),title3:a(({value:e,isActive:i})=>l[33]||(l[33]=[n("span",null,"并归排序",-1)])),title4:a(({value:e,isActive:i})=>l[34]||(l[34]=[n("span",null,"快速排序",-1)])),tab0:a(({value:e,isActive:i})=>l[35]||(l[35]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 选择排序：第i个元素和剩余元素比较选出最小的")]),s(`
`),n("span",{class:"line"},[n("span",null," * 时间复杂度：上下界 n^2，N^2/2次比较，N次交换，幂函数增长")]),s(`
`),n("span",{class:"line"},[n("span",null," * 空间复杂度：原地排序算法")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class Selection {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 排序")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void sort(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int N = a.length;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < N; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            int min = i;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            for (int j = i+1; j < N; j++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                if (less(a[j], a[min])) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    min = j;")]),s(`
`),n("span",{class:"line"},[n("span",null,"                }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            exch(a, i, min);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 判断大小")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param v")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param w")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static boolean less(Comparable v, Comparable w) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return v.compareTo(w) < 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 交换元素")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param i")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param j")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static void exch(Comparable[] a, int i, int j) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Comparable t = a[i];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a[i] = a[j];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a[j] = t;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 打印数组")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static void show(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < a.length; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            StdOut.print(a[i] + " ");')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdOut.println();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 测试数组是否有顺序")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static boolean isSorted(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 1; i < a.length; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (less(a[i], a[i-1])) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                return false;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        String filePath = System.getProperty("user.dir") + "/src/txt/" + "Example.txt";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        String[] a = In.readStrings(filePath);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        sort(a);")]),s(`
`),n("span",{class:"line"},[n("span",null,'        StdOut.println("是否排序：" + isSorted(a));')]),s(`
`),n("span",{class:"line"},[n("span",null,"        show(a);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:a(({value:e,isActive:i})=>l[36]||(l[36]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 插入排序：依次判相邻的元素中最小的")]),s(`
`),n("span",{class:"line"},[n("span",null," * 时间复杂度： 上下界 n^2，平均N^2/4次比较，N^2/4次交换，最坏N^2/2 次比较，N^2/2次交换，最好N-1次比较，0次交换")]),s(`
`),n("span",{class:"line"},[n("span",null," * 空间复杂度：原地排序算法")]),s(`
`),n("span",{class:"line"},[n("span",null," * 说明：和集合的初始状态关联性较大")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class Insertion {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 排序")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void sort(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int N = a.length;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 1; i < N; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            for (int j = i; j >0 && less(a[j], a[j -1]); j--) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                exch(a, j, j-1);")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 判断大小")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param v")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param w")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static boolean less(Comparable v, Comparable w) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return v.compareTo(w) < 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 交换元素")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param i")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param j")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static void exch(Comparable[] a, int i, int j) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Comparable t = a[i];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a[i] = a[j];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a[j] = t;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 打印数组")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static void show(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < a.length; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            StdOut.print(a[i] + " ");')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdOut.println();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 测试数组是否有顺序")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static boolean isSorted(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 1; i < a.length; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (less(a[i], a[i-1])) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                return false;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        String filePath = System.getProperty("user.dir") + "/src/txt/" + "Example.txt";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        String[] a = In.readStrings(filePath);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        sort(a);")]),s(`
`),n("span",{class:"line"},[n("span",null,'        StdOut.println("是否排序：" + isSorted(a));')]),s(`
`),n("span",{class:"line"},[n("span",null,"        show(a);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab2:a(({value:e,isActive:i})=>l[37]||(l[37]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 希尔排序：缩小增量的插入排序")]),s(`
`),n("span",{class:"line"},[n("span",null," * 时间复杂度：上界 n^(3/2)、下界 n*log2n")]),s(`
`),n("span",{class:"line"},[n("span",null," * 空间复杂度：原地排序算法")]),s(`
`),n("span",{class:"line"},[n("span",null," * 说明：在插入排序基础上新增增幅h的概念，大幅提高效率")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class Shell {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 排序")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void sort(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int N = a.length;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int h = 1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        while (h < N/3) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            h = 3*h + 1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        while (h >= 1) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            for (int i = h; i < N; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                for (int j = i; j >= h && less(a[j], a[j-h]); j -= h) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    exch(a, j, j-h);")]),s(`
`),n("span",{class:"line"},[n("span",null,"                }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            h = h/3;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 判断大小")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param v")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param w")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static boolean less(Comparable v, Comparable w) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return v.compareTo(w) < 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 交换元素")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param i")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param j")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static void exch(Comparable[] a, int i, int j) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Comparable t = a[i];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a[i] = a[j];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a[j] = t;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 打印数组")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static void show(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < a.length; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            StdOut.print(a[i] + " ");')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdOut.println();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 测试数组是否有顺序")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static boolean isSorted(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 1; i < a.length; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (less(a[i], a[i-1])) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                return false;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        String filePath = System.getProperty("user.dir") + "/src/txt/" + "Example.txt";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        String[] a = In.readStrings(filePath);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        sort(a);")]),s(`
`),n("span",{class:"line"},[n("span",null,'        StdOut.println("是否排序：" + isSorted(a));')]),s(`
`),n("span",{class:"line"},[n("span",null,"        show(a);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab3:a(({value:e,isActive:i})=>l[38]||(l[38]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 并归排序")]),s(`
`),n("span",{class:"line"},[n("span",null," * 时间复杂度：NlogN")]),s(`
`),n("span",{class:"line"},[n("span",null," * 空间复杂度：N")]),s(`
`),n("span",{class:"line"},[n("span",null," * 说明：")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class Merge {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static Comparable[] aux; // 辅助数组")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 原地并归：将a[lo..mid] 和 a[mid+1..hi] 归并")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param lo")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param mid")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param hi")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static void merge(Comparable[] a, int lo, int mid, int hi) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int i = lo;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int j = mid + 1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int k = lo; k <= hi; k++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            aux[k] = a[k];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int k = lo; k <= hi; k++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (i > mid) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                a[k] = aux[j++];")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } else if (j > hi) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                a[k] = aux[i++];")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } else if (less(aux[j], aux[i])) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                a[k] = aux[j++];")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                a[k] = aux[i++];")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 自上向下的并归排序")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param lo")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param hi")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static void sort(Comparable[] a, int lo, int hi) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (hi <= lo) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            return;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int mid = lo + (hi - lo) / 2;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        sort(a, lo, mid);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        sort(a, mid+1, hi);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        merge(a, lo, mid, hi);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 排序")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void sort(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        aux = new Comparable[a.length];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        sort(a, 0, a.length - 1);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 判断大小")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param v")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param w")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static boolean less(Comparable v, Comparable w) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return v.compareTo(w) < 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 交换元素")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param i")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param j")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static void exch(Comparable[] a, int i, int j) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Comparable t = a[i];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a[i] = a[j];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a[j] = t;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 打印数组")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static void show(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < a.length; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            StdOut.print(a[i] + " ");')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdOut.println();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 测试数组是否有顺序")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static boolean isSorted(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 1; i < a.length; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (less(a[i], a[i-1])) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                return false;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        String filePath = System.getProperty("user.dir") + "/src/txt/" + "Example.txt";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        String[] a = In.readStrings(filePath);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        sort(a);")]),s(`
`),n("span",{class:"line"},[n("span",null,'        StdOut.println("是否排序：" + isSorted(a));')]),s(`
`),n("span",{class:"line"},[n("span",null,"        show(a);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab4:a(({value:e,isActive:i})=>l[39]||(l[39]=[n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"/**")]),s(`
`),n("span",{class:"line"},[n("span",null," * 快速排序")]),s(`
`),n("span",{class:"line"},[n("span",null," * 时间复杂度：NlogN")]),s(`
`),n("span",{class:"line"},[n("span",null," * 空间复杂度：原地排序")]),s(`
`),n("span",{class:"line"},[n("span",null," * 说明：循环（按第一个元素切分，左侧是小的，右侧是大的），当两个指针相等时，排序完成。")]),s(`
`),n("span",{class:"line"},[n("span",null," */")]),s(`
`),n("span",{class:"line"},[n("span",null,"public class Quick {")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 切分")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param lo")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param hi")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static int partition(Comparable[] a, int lo, int hi) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int i = lo, j = hi + 1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Comparable v = a[lo];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        while (true) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            while (less(a[++i], v)) { // 比v小的数不做处理")]),s(`
`),n("span",{class:"line"},[n("span",null,"                if (i == hi) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    break;")]),s(`
`),n("span",{class:"line"},[n("span",null,"                }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            while (less(v, a[--j])) { // 比v大的数不做处理")]),s(`
`),n("span",{class:"line"},[n("span",null,"                if (j == lo) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    break;")]),s(`
`),n("span",{class:"line"},[n("span",null,"                }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (i >= j) { // 索引 i >= j，切分完成")]),s(`
`),n("span",{class:"line"},[n("span",null,"                break;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            exch(a, i, j);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        exch(a, lo, j);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return j;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 快速排序")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static void sort(Comparable[] a, int lo, int hi) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (hi <= lo) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            return;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        int j = partition(a, lo, hi);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        sort(a, lo, j-1);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        sort(a, j+1, hi);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 排序")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void sort(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdRandom.shuffle(a);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        sort(a, 0, a.length - 1);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 判断大小")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param v")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param w")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static boolean less(Comparable v, Comparable w) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return v.compareTo(w) < 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 交换元素")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param i")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param j")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static void exch(Comparable[] a, int i, int j) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Comparable t = a[i];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a[i] = a[j];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        a[j] = t;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 打印数组")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static void show(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 0; i < a.length; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            StdOut.print(a[i] + " ");')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        StdOut.println();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * 测试数组是否有顺序")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @param a")]),s(`
`),n("span",{class:"line"},[n("span",null,"     * @return")]),s(`
`),n("span",{class:"line"},[n("span",null,"     */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    private static boolean isSorted(Comparable[] a) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        for (int i = 1; i < a.length; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (less(a[i], a[i-1])) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                return false;")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    public static void main(String[] args) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        String filePath = System.getProperty("user.dir") + "/src/txt/" + "Example.txt";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        String[] a = In.readStrings(filePath);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        sort(a);")]),s(`
`),n("span",{class:"line"},[n("span",null,'        StdOut.println("是否排序：" + isSorted(a));')]),s(`
`),n("span",{class:"line"},[n("span",null,"        show(a);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),p(c,{id:"139",data:[{id:"选择排序"},{id:"插入排序"},{id:"希尔排序"},{id:"并归排序"},{id:"快速排序"}]},{title0:a(({value:e,isActive:i})=>l[40]||(l[40]=[s("选择排序")])),title1:a(({value:e,isActive:i})=>l[41]||(l[41]=[s("插入排序")])),title2:a(({value:e,isActive:i})=>l[42]||(l[42]=[s("希尔排序")])),title3:a(({value:e,isActive:i})=>l[43]||(l[43]=[s("并归排序")])),title4:a(({value:e,isActive:i})=>l[44]||(l[44]=[s("快速排序")])),tab0:a(({value:e,isActive:i})=>l[45]||(l[45]=[n("ul",null,[n("li",null,"时间复杂度：O(n^2)"),n("li",null,"空间复杂度：O(1)"),n("li",null,[s("稳定性：不稳定 "),n("img",{src:g,alt:"选择排序"})])],-1)])),tab1:a(({value:e,isActive:i})=>l[46]||(l[46]=[n("ul",null,[n("li",null,[s("时间复杂度：最坏 O(n"),n("sup",null,"2)、平均O(n"),s("2)、最好 O(n)")]),n("li",null,"空间复杂度：O(1)"),n("li",null,[s("稳定性：不稳定 "),n("img",{src:d,alt:"插入排序"})])],-1)])),tab2:a(({value:e,isActive:i})=>l[47]||(l[47]=[n("ul",null,[n("li",null,[s("时间复杂度：最坏 O(n"),n("sup",null,"1.3)、平均O(n"),s("2)、最好 O(n)")]),n("li",null,"空间复杂度：O(1)"),n("li",null,[s("稳定性：不稳定 "),n("img",{src:x,alt:"希尔排序"})])],-1)])),tab3:a(({value:e,isActive:i})=>l[48]||(l[48]=[n("ul",null,[n("li",null,"时间复杂度：最坏 O(nlogn)、平均O(nlogn)、最好 O(nlogn)"),n("li",null,"空间复杂度：O(n)"),n("li",null,[s("稳定性：稳定 "),n("img",{src:f,alt:"并归排序"})])],-1)])),tab4:a(({value:e,isActive:i})=>l[49]||(l[49]=[n("ul",null,[n("li",null,"时间复杂度：最坏 O(n^2)、平均O(nlogn)、最好 O(nlogn)"),n("li",null,"空间复杂度：O(nlogn)"),n("li",null,[s("稳定性：不稳定 "),n("img",{src:y,alt:"快速排序"})])],-1)])),_:1})])}const w=m(k,[["render",N],["__file","index.html.vue"]]),E=JSON.parse('{"path":"/%E8%AF%AD%E8%A8%80/%E7%AE%97%E6%B3%95/","title":"算法","lang":"zh-CN","frontmatter":{"title":"算法","createTime":"2025/06/20 08:35:38","permalink":"/语言/算法/","description":"数据结构 基础数据结构 应用数据结构 算法 查找 排序","head":[["meta",{"property":"og:url","content":"https://orthogonalandparallel.github.io/%E8%AF%AD%E8%A8%80/%E7%AE%97%E6%B3%95/"}],["meta",{"property":"og:site_name","content":"万里任禅游"}],["meta",{"property":"og:title","content":"算法"}],["meta",{"property":"og:description","content":"数据结构 基础数据结构 应用数据结构 算法 查找 排序"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-07-05T06:42:56.000Z"}],["meta",{"property":"article:modified_time","content":"2025-07-05T06:42:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"算法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-07-05T06:42:56.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":15.47,"words":4642},"git":{"updatedTime":1751697776000,"contributors":[{"name":"靳琛","email":"jinchenj@yonyou.com","commits":3,"avatar":"https://avatars.githubusercontent.com/靳琛?v=4","url":"https://github.com/靳琛"}]},"autoDesc":true,"filePathRelative":"笔记/语言/后端/算法.md","categoryList":[{"id":"7051dc","sort":10000,"name":"笔记"},{"id":"d592ad","sort":10015,"name":"语言"},{"id":"83a577","sort":10018,"name":"后端"}],"bulletin":false}');export{w as comp,E as data};
