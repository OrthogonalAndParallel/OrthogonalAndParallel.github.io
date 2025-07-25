import{c as v}from"./chunk-4KE642ED-ZqFNNk_d.js";import{p as B}from"./radar-VG2SY3DT-YD637NEH-DdPnPhiU.js";import{p as S,m as n,l as m,E as F,S as P,t as $,aN as z,T,v as W,w as E,L,b as A,F as D,B as R}from"./mermaid.esm.min-CJk4vxWD.js";import"./chunk-5ZJXQJOJ-DuAWjRaO.js";import"./app-B2MuoNit.js";var x={packet:[]},w=structuredClone(x),Y=S.packet,H=n(()=>{let t=m({...Y,...F().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),M=n(()=>w.packet,"getPacket"),N=n(t=>{t.length>0&&w.packet.push(t)},"pushWord"),I=n(()=>{P(),w=structuredClone(x)},"clear"),u={pushWord:N,getPacket:M,getConfig:H,clear:I,setAccTitle:W,getAccTitle:E,setDiagramTitle:L,getDiagramTitle:A,getAccDescription:D,setAccDescription:R},X=1e4,q=n(t=>{v(t,u);let e=-1,l=[],o=1,{bitsPerRow:i}=u.getConfig();for(let{start:a,end:r,bits:d,label:k}of t.blocks){if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a??(a=e+1),a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);if(d===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(r??(r=a+(d??1)-1),d??(d=r-a+1),e=r,$.debug(`Packet block ${a} - ${e} with label ${k}`);l.length<=i+1&&u.getPacket().length<X;){let[c,p]=G({start:a,end:r,bits:d,label:k},o,i);if(l.push(c),c.end+1===o*i&&(u.pushWord(l),l=[],o++),!p)break;({start:a,end:r,bits:d,label:k}=p)}}u.pushWord(l)},"populate"),G=n((t,e,l)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*l)return[t,void 0];let o=e*l-1,i=e*l;return[{start:t.start,end:o,label:t.label,bits:o-t.start},{start:i,end:t.end,label:t.label,bits:t.end-i}]},"getNextFittingBlock"),K={parse:n(async t=>{let e=await B("packet",t);$.debug(e),q(e)},"parse")},O=n((t,e,l,o)=>{let i=o.db,a=i.getConfig(),{rowHeight:r,paddingY:d,bitWidth:k,bitsPerRow:c}=a,p=i.getPacket(),s=i.getDiagramTitle(),f=r+d,b=f*(p.length+1)-(s?0:r),h=k*c+2,g=z(e);g.attr("viewbox",`0 0 ${h} ${b}`),T(g,b,h,a.useMaxWidth);for(let[y,C]of p.entries())U(g,C,y,a);g.append("text").text(s).attr("x",h/2).attr("y",b-f/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),U=n((t,e,l,{rowHeight:o,paddingX:i,paddingY:a,bitWidth:r,bitsPerRow:d,showBits:k})=>{let c=t.append("g"),p=l*(o+a)+a;for(let s of e){let f=s.start%d*r+1,b=(s.end-s.start+1)*r-i;if(c.append("rect").attr("x",f).attr("y",p).attr("width",b).attr("height",o).attr("class","packetBlock"),c.append("text").attr("x",f+b/2).attr("y",p+o/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(s.label),!k)continue;let h=s.end===s.start,g=p-2;c.append("text").attr("x",f+(h?b/2:0)).attr("y",g).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",h?"middle":"start").text(s.start),h||c.append("text").attr("x",f+b).attr("y",g).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(s.end)}},"drawWord"),V={draw:O},_={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},j=n(({packet:t}={})=>{let e=m(_,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),at={parser:K,db:u,renderer:V,styles:j};export{at as diagram};
