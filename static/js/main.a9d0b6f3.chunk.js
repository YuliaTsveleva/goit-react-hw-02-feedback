(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={StatisticsList:"Statistics_StatisticsList__37fCT",Stats:"Statistics_Stats__2SQWA",Good:"Statistics_Good__3A0Fe Statistics_Stats__2SQWA",Neutral:"Statistics_Neutral__s119e Statistics_Stats__2SQWA",Bad:"Statistics_Bad__lfoaw Statistics_Stats__2SQWA",Total:"Statistics_Total__Iwzdj Statistics_Stats__2SQWA",Percentage:"Statistics_Percentage__5ej1y Statistics_Stats__2SQWA"}},function(t,e,a){t.exports={FeedbackButtonList:"FeedbackOptions_FeedbackButtonList__2edy5",FeedbackListItem:"FeedbackOptions_FeedbackListItem__hG34B",Button:"FeedbackOptions_Button__E45Gc",Good:"FeedbackOptions_Good__1-t3L FeedbackOptions_Button__E45Gc",Neutral:"FeedbackOptions_Neutral__GFzw_ FeedbackOptions_Button__E45Gc",Bad:"FeedbackOptions_Bad__1h4u1 FeedbackOptions_Button__E45Gc"}},,function(t,e,a){t.exports={Section:"Section_Section__Gtmph",Title:"Section_Title__1Jpc5"}},,,,,function(t){t.exports=JSON.parse('[{"id":"field-1","name":"good"},{"id":"field-2","name":"neutral"},{"id":"field-3","name":"bad"},{"id":"field-4","name":"total"},{"id":"field-5","name":"positive feedback"}]')},function(t){t.exports=JSON.parse('[{"id":"btn-1","name":"good"},{"id":"btn-2","name":"neutral"},{"id":"btn-3","name":"bad"}]')},function(t,e,a){t.exports={Message:"Notification_Message__NR_1n",pulse:"Notification_pulse__2qx1E"}},,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),s=a(6),i=a.n(s),o=(a(19),a(7)),r=a(8),d=a(9),l=a(14),_=a(13),u=(a(20),a(3)),b=a.n(u),j=a(0),p=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:b.a.FeedbackButtonList,children:e.map((function(t){var e=t.name.charAt(0).toUpperCase()+t.name.slice(1);return Object(j.jsx)("li",{className:b.a.FeedbackListItem,children:Object(j.jsx)("button",{type:"button",onClick:a,className:b.a[e],children:e})},t.id)}))})})},f=a(2),m=a.n(f),S=a(10),h=function(t){return Object(j.jsx)("ul",{className:m.a.StatisticsList,children:S.map((function(e){if("positive feedback"!==e.name){var a=e.name.charAt(0).toUpperCase()+e.name.slice(1);return console.log(a),Object(j.jsxs)("li",{className:m.a[a],children:[e.name,":",Object(j.jsx)("span",{children:t[e.name]})]},e.id)}return Object(j.jsxs)("li",{className:m.a.Percentage,children:[e.name,":",Object(j.jsxs)("span",{children:[t.percentage,"%"]})]},e.id)}))})},O=a(11),k=a(5),x=a.n(k),F=function(t){var e=t.title,a=t.children;return Object(j.jsxs)("section",{className:x.a.Section,children:[e&&Object(j.jsx)("h1",{className:x.a.Title,children:e}),a]})},g=a(12),v=a.n(g),N=function(t){var e=t.message;return Object(j.jsx)("p",{className:v.a.Message,children:e})},L=function(t){Object(l.a)(a,t);var e=Object(_.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){var a=e.target.textContent.toLowerCase();t.setState((function(t){return Object(o.a)({},a,t[a]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good,a=t.countTotalFeedback();return a?+(e/a*100).toFixed():0},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,n=t.bad;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(F,{title:"Please leave feedback",children:Object(j.jsx)(p,{options:O,onLeaveFeedback:this.onLeaveFeedback})}),Object(j.jsx)(F,{title:"Statistics",children:this.countTotalFeedback()>0?Object(j.jsx)(h,{good:e,neutral:a,bad:n,total:this.countTotalFeedback(),percentage:this.countPositiveFeedbackPercentage()}):Object(j.jsx)(N,{message:"There is no feedback"})})]})}}]),a}(c.a.Component),B=L;i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.a9d0b6f3.chunk.js.map