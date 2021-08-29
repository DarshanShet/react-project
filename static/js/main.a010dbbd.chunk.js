(this["webpackJsonpreact-application"]=this["webpackJsonpreact-application"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);n(40);var a=n(0),c=n.n(a),r=n(19),s=n.n(r),l=(n(45),n(46),n(14)),o=n(7),i=n(61),u=n(56),j=n(63),b=n(1),O=function(){return Object(b.jsx)(i.a,{collapseOnSelect:!0,expand:"md",bg:"dark",variant:"dark",children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(i.a.Brand,{children:"Projects"}),Object(b.jsx)(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsx)(i.a.Collapse,{id:"responsive-navbar-nav",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(l.b,{className:"nav-link",to:"/",children:"Stock average calculator"}),Object(b.jsx)(l.b,{className:"nav-link",to:"/cagr-calculator",children:"CAGR calculator"}),Object(b.jsx)(l.b,{className:"nav-link",to:"/percentage-calculator",children:"Percentage calculator"}),Object(b.jsx)(l.b,{className:"nav-link",to:"/number-to-word",children:"Number to word"}),Object(b.jsx)(l.b,{className:"nav-link",to:"/about",children:"About"})]})})]})})},d=n(12),x=n(6),h=n(15),m=n(64),f=n(62),p=n(57),v=n(58),g=n(38),y=function(e){var t=e.text,n=e.name,a=e.value,c=e.size,r=e.onChangeHandler;return Object(b.jsx)(g.a,{lg:c,xs:12,children:Object(b.jsxs)(f.a.Group,{controlId:n,children:[Object(b.jsx)(f.a.Label,{children:t}),Object(b.jsx)(f.a.Control,{type:"number",placeholder:t,name:n,value:a,onChange:r})]})})};y.defaultProps={value:0,size:6};var w=y,C=function(){var e=Object(a.useState)({priceOne:0,qtyOne:0,priceTwo:0,qtyTwo:0,totalInvestment:0,totalQty:0}),t=Object(h.a)(e,2),n=t[0],c=t[1],r=function(e){c((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))})),c((function(e){return Object(x.a)(Object(x.a)({},e),{},{totalInvestment:+e.priceOne*+e.qtyOne+ +e.priceTwo*+e.qtyTwo,totalQty:+e.qtyOne+ +e.qtyTwo})}))};return Object(b.jsxs)(m.a,{border:"success",children:[Object(b.jsx)(m.a.Header,{as:"h5",children:"Stock average calculator"}),Object(b.jsx)(m.a.Body,{children:Object(b.jsxs)(f.a,{onSubmit:function(e){e.preventDefault(),n.priceOne<=0||n.priceTwo<=0?alert("Please add a price"):n.qtyOne<=0||n.qtyTwo<=0?alert("Please add a Quantity"):c((function(e){return Object(x.a)(Object(x.a)({},e),{},{totalInvestment:+e.priceOne*+e.qtyOne+ +e.priceTwo*+e.qtyTwo,totalQty:+e.qtyOne+ +e.qtyTwo})}))},children:[Object(b.jsxs)(p.a,{children:[Object(b.jsxs)(m.a,{children:[Object(b.jsx)(m.a.Header,{as:"h5",children:"First Buy"}),Object(b.jsx)(m.a.Body,{children:Object(b.jsxs)(f.a.Row,{children:[Object(b.jsx)(w,{text:"Buy Price",name:"priceOne",value:n.priceOne,size:"6",onChangeHandler:r}),Object(b.jsx)(w,{text:"Buy Quantity",name:"qtyOne",value:n.qtyOne,size:"6",onChangeHandler:r})]})}),Object(b.jsxs)(m.a.Footer,{className:"text-muted",children:["Total Investment ",n.priceOne*n.qtyOne]})]}),Object(b.jsxs)(m.a,{children:[Object(b.jsx)(m.a.Header,{as:"h5",children:"Second Buy"}),Object(b.jsx)(m.a.Body,{children:Object(b.jsxs)(f.a.Row,{children:[Object(b.jsx)(w,{text:"Buy Price",name:"priceTwo",value:n.priceTwo,size:"6",onChangeHandler:r}),Object(b.jsx)(w,{text:"Buy Quantity",name:"qtyTwo",value:n.qtyTwo,size:"6",onChangeHandler:r})]})}),Object(b.jsxs)(m.a.Footer,{className:"text-muted",children:["Total Investment ",n.priceTwo*n.qtyTwo]})]})]}),Object(b.jsx)(v.a,{variant:"success",type:"submit",children:"Calculate Average"})," ",Object(b.jsx)(v.a,{variant:"warning",type:"reset",onClick:function(e){e.preventDefault(),c({priceOne:0,qtyOne:0,priceTwo:0,qtyTwo:0,totalInvestment:0,totalQty:0})},children:"Clear"})]})}),Object(b.jsxs)(m.a.Footer,{className:"text-success",children:[Object(b.jsxs)("p",{children:[Object(b.jsxs)("span",{children:["Total Investment ",n.totalInvestment,",  "]}),Object(b.jsxs)("span",{children:["Total Quantity ",n.totalQty,"  "]})]}),Object(b.jsxs)("p",{className:"text-result",children:["Average ",n.totalQty>0?n.totalInvestment/n.totalQty:0," "]})]})]})},T=n(59),V=function(){var e=Object(a.useState)({firstValue:0,finalValue:0,noOfYears:0,cagr:0}),t=Object(h.a)(e,2),n=t[0],c=t[1],r=function(e){c((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))})),c((function(t){return+t.noOfYears>0&&+t.finalValue>0&&+t.firstValue>0?Object(x.a)(Object(x.a)({},t),{},{cagr:100*(Math.pow(+t.finalValue/+t.firstValue,1/+t.noOfYears)-1)}):Object(x.a)(Object(x.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))}))};return Object(b.jsxs)(m.a,{border:"success",children:[Object(b.jsx)(m.a.Header,{as:"h5",children:"CAGR calculator"}),Object(b.jsx)(m.a.Body,{children:Object(b.jsxs)(f.a,{onSubmit:function(e){e.preventDefault(),n.firstValue<=0?alert("Please enter a Initial Value"):n.finalValue<=0?alert("Please enter a Final Value"):n.noOfYears<=0?alert("Please enter a no of years"):c((function(e){return Object(x.a)(Object(x.a)({},e),{},{cagr:100*(Math.pow(+e.finalValue/+e.firstValue,1/+e.noOfYears)-1)})}))},children:[Object(b.jsxs)(T.a,{children:[Object(b.jsx)(w,{text:"Initial Value",name:"firstValue",value:n.firstValue,size:"4",onChangeHandler:r}),Object(b.jsx)(w,{text:"Final Value",name:"finalValue",value:n.finalValue,size:"4",onChangeHandler:r}),Object(b.jsx)(w,{text:"Years",name:"noOfYears",value:n.noOfYears,size:"4",onChangeHandler:r})]}),Object(b.jsx)(v.a,{variant:"success",type:"submit",children:"Calculate CAGR"})," ",Object(b.jsx)(v.a,{variant:"warning",type:"reset",onClick:function(e){e.preventDefault(),c({firstValue:0,finalValue:0,noOfYears:0,cagr:0})},children:"Clear"})]})}),Object(b.jsxs)(m.a.Footer,{className:"text-success text-result",children:["CAGR ",n.cagr,"%"]})]})},q=n(60),B=function(){var e=Object(a.useState)({percentage:0,amount:0,result:0,amountOne:0,amountTwo:0,result2:0}),t=Object(h.a)(e,2),n=t[0],c=t[1],r=function(e){c((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))})),c((function(t){return+t.percentage>0&&+t.amount>0?Object(x.a)(Object(x.a)({},t),{},{result:+t.percentage>0&&+t.amount>0?+t.amount*+t.percentage/100:0,result2:+t.amountOne>0&&+t.amountTwo>0?+t.amountOne/+t.amountTwo*100:0}):Object(x.a)(Object(x.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))}))};return Object(b.jsxs)(m.a,{border:"success",children:[Object(b.jsx)(m.a.Header,{as:"h5",children:"Percentage calculator"}),Object(b.jsx)(m.a.Body,{children:Object(b.jsxs)(f.a,{onSubmit:function(e){e.preventDefault(),+n.percentage<=0?alert("Please enter a percentage"):+n.amount<=0?alert("Please enter a Amount"):(+n.percentage>0&&+n.amount>0&&c((function(e){return Object(x.a)(Object(x.a)({},e),{},{result:+e.amount*+e.percentage/100})})),+n.amountOne>0&&+n.amountTwo>0&&c((function(e){return Object(x.a)(Object(x.a)({},e),{},{result2:+e.amountOne/+e.amountTwo*100})})))},children:[Object(b.jsxs)(p.a,{children:[Object(b.jsx)(m.a,{children:Object(b.jsx)(m.a.Body,{children:Object(b.jsxs)(f.a.Row,{children:[Object(b.jsx)(g.a,{lg:6,xs:12,children:Object(b.jsxs)(f.a.Group,{controlId:"firstValue",children:[Object(b.jsx)(f.a.Label,{children:"What is"}),Object(b.jsxs)(q.a,{className:"mb-2",children:[Object(b.jsx)(f.a.Control,{type:"number",name:"percentage",value:n.percentage,onChange:r}),Object(b.jsx)(q.a.Prepend,{children:Object(b.jsx)(q.a.Text,{children:"%"})})]})]})}),Object(b.jsx)(w,{text:"of",name:"amount",value:n.amount,size:"6",onChangeHandler:r})]})})}),Object(b.jsx)(m.a,{children:Object(b.jsx)(m.a.Body,{children:Object(b.jsxs)(f.a.Row,{children:[Object(b.jsx)(w,{text:"amount",name:"amountOne",value:n.amountOne,size:"6",onChangeHandler:r}),Object(b.jsx)(w,{text:"is what % of",name:"amountTwo",value:n.amountTwo,size:"6",onChangeHandler:r})]})})})]}),Object(b.jsx)(v.a,{variant:"success",type:"submit",children:"Calculate"})," ",Object(b.jsx)(v.a,{variant:"warning",type:"reset",onClick:function(e){e.preventDefault(),c({percentage:0,amount:0,result:0,amountOne:0,amountTwo:0,result2:0})},children:"Clear"})]})}),Object(b.jsxs)(m.a.Footer,{className:"text-success text-result",children:[Object(b.jsx)("p",{children:0!==n.result?n.result+" is "+n.percentage+"% of "+n.amount:""}),Object(b.jsx)("p",{children:0!==n.result2?n.amountOne+" is "+n.result2+"% of "+n.amountTwo:""})]})]})},H=n(39),N=function(){var e=Object(a.useState)({numberValue:0,wordValue:"zero"}),t=Object(h.a)(e,2),n=t[0],c=t[1],r=function(e){return Number(e)||0},s=function(e){return 0===e.length},l=function(e){return function(t){return t.slice(0,e)}},o=function(e){return e.slice(0).reverse()},i=function(e){return function(t){return function(n){return e(t(n))}}},u=function(e){return!e},j=function e(t){return function(n){return s(n)?[]:[l(t)(n)].concat(Object(H.a)(e(t)(function(e){return function(t){return t.slice(e)}}(t)(n))))}},O=["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],p=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],g=["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion"],y=function e(t){var n;return"number"===typeof t?e(String(t)):"0"===t?"zero":i(j(3))(o)((n=t,Array.from(n))).map((function(e){var t=Object(h.a)(e,3),n=t[0],a=t[1],c=t[2];return[0===r(c)?"":O[c]+" hundred ",0===r(n)?p[a]:p[a]&&p[a]+"-"||"",O[a+n]||O[n]].join("")})).map((function(e,t){return""===e?e:"".concat(e," ").concat(g[t])})).filter(i(u)(s)).reverse().join(" ")};return Object(b.jsxs)(m.a,{border:"success",children:[Object(b.jsx)(m.a.Header,{as:"h5",children:"Number to word"}),Object(b.jsx)(m.a.Body,{children:Object(b.jsxs)(f.a,{onSubmit:function(e){e.preventDefault(),c((function(e){return Object(x.a)(Object(x.a)({},e),{},{wordValue:y(+e.numberValue)})}))},children:[Object(b.jsx)(T.a,{children:Object(b.jsx)(w,{text:"Number",name:"numberValue",value:n.numberValue,size:"4",onChangeHandler:function(e){c((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))})),c((function(e){return Object(x.a)(Object(x.a)({},e),{},{wordValue:y(+e.numberValue)})}))}})}),Object(b.jsx)(v.a,{variant:"success",type:"submit",children:"Convert"})," ",Object(b.jsx)(v.a,{variant:"warning",type:"reset",onClick:function(e){e.preventDefault(),c({numberValue:0,wordValue:"zero"})},children:"Clear"})]})}),Object(b.jsx)(m.a.Footer,{className:"text-success text-result",children:n.wordValue})]})},k=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Version 1.0.0"}),Object(b.jsx)(l.b,{to:"/",children:"Go Back"})]})},z=function(){return Object(b.jsx)("footer",{className:"text-center",children:Object(b.jsx)("p",{children:"Copyright \xa9 2021"})})};var P=function(){return Object(b.jsxs)(l.a,{basename:"/",children:[Object(b.jsx)(O,{}),Object(b.jsx)(o.a,{path:"/",exact:!0,component:C}),Object(b.jsx)(o.a,{path:"/cagr-calculator",exact:!0,component:V}),Object(b.jsx)(o.a,{path:"/percentage-calculator",exact:!0,component:B}),Object(b.jsx)(o.a,{path:"/number-to-word",exact:!0,component:N}),Object(b.jsx)(o.a,{path:"/about",component:k}),Object(b.jsx)(z,{})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root")),I()}},[[54,1,2]]]);
//# sourceMappingURL=main.a010dbbd.chunk.js.map