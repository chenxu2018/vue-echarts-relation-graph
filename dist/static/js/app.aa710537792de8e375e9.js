webpackJsonp([1],{"8nqC":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("5C5s"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i,r,l,c,s,u,m,d,p=n("Z0/y")({name:"App"},o,!1,function(e){n("8nqC")},null,null).exports,y=n("zO6J"),g=n("a3Yh"),h=n.n(g),f=n("XMw0"),v=n.n(f),S=function(){for(var e in s={x:"center",show:!0,data:l.legend},u=l.node,m=l.relation)for(var t in l.relation_category)if(m[e].value==t){m[e].lineStyle=l.relation_category[t].lineStyle;break}d=l.node_category},b=function(){var e,t;t={title:{text:""},tooltip:{show:!0},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",label:{normal:{show:!0,textStyle:{fontSize:12}}},legend:s,series:[(e={type:"graph",layout:"force",symbolSize:45,categories:d,force:{repulsion:1e3},data:u,links:m,draggable:!0,label:{normal:{show:!0,textStyle:{fontSize:12}}},edgeSymbol:["none","none"],edgeSymbolSize:[4,50],edgeLabel:{normal:{show:!0,textStyle:{fontSize:10},formatter:"{c}"}},lineStyle:{normal:{opacity:.9,width:1,curveness:0}}},h()(e,"force",{repulsion:800,gravity:.4,edgeLength:300}),h()(e,"focusNodeAdjacency",!0),h()(e,"roam",!0),h()(e,"nodeScaleRatio",.6),e)],animation:!1,animationThreshold:2e3,animationDuration:1e3,animationEasing:"cubicOut",animationDelay:0},h()(t,"animationDurationUpdate",1500),h()(t,"animationEasingUpdate","quinticInOut"),h()(t,"animationDelayUpdate",0),c=t},_=function(){var e=l.style.height;document.getElementById("echarts").innerHTML='<div id="myChart" style="width:100%;height:'+e+'px;"></div>',i=document.getElementById("myChart"),r=v.a.init(i),i.style.height=e+"px"},w={name:"RelationGraph",data:function(){return{dataInput:{style:{height:800},node:[{name:"徐贱云",category:"男性"},{name:"冯可梁",category:"女性"},{name:"邓志荣",category:"未知",draggable:!1}],relation:[{source:0,target:1,value:"丈夫"},{source:1,target:0,value:"妻子"},{source:1,target:2,value:"朋友"},{source:0,target:2,value:"同学"}],node_category:[{name:"男性",itemStyle:{normal:{color:"blue"}}},{name:"女性",itemStyle:{normal:{color:"pink"}}},{name:"未知",itemStyle:{normal:{color:"#FFA500"}}}],relation_category:{"朋友":{lineStyle:{normal:{opacity:.9,width:2,curveness:0,type:"solid",color:"rgba(0,0,0,0.6)"},emphasis:{color:"rgba(0,0,0,1)"}}},"丈夫":{lineStyle:{normal:{curveness:.4}}},"妻子":{lineStyle:{normal:{curveness:.4}}}},legend:["男性","女性","未知"]}}},mounted:function(){var e=this;setTimeout(function(){var t;t=e.dataInput,l=t,S(),b(),_(),setTimeout(function(){r.setOption(c)},300)},300)},methods:{}},x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{attrs:{id:"echarts"}})])}]};var E=n("Z0/y")(w,x,!1,function(e){n("NgGQ")},"data-v-c23a5804",null).exports;a.a.use(y.a);var R=new y.a({routes:[{path:"/",redirect:"/RelationGraph"},{path:"/RelationGraph",name:"RelationGraph",component:E}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:R,components:{App:p},template:"<App/>"})},NgGQ:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.aa710537792de8e375e9.js.map