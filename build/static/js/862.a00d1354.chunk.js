"use strict";(self.webpackChunkarena_game=self.webpackChunkarena_game||[]).push([[862],{5949:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(9439),s=a(2791),r=a(9434),i=a(6220),c=a(1026),o=a(7850),d=a(8232);var u=function(){var e=(0,r.v9)((function(e){return e})),t=(0,r.I0)(),a=(0,s.useState)(""),u=(0,n.Z)(a,2),m=u[0],l=u[1],f=(0,s.useState)(!1),p=(0,n.Z)(f,2),h=p[0],k=p[1];return function(a){if(e.parameters.health>0){var n=0;n=e.items.armed.firstHand.attack.length>1?e.items.armed.firstHand.attack[0]+Math.floor((e.items.armed.firstHand.attack[1]-e.items.armed.firstHand.attack[0]+1)*Math.random()):e.items.armed.firstHand.attack[0];var s,r=0;"second weapon"==e.items.armed.secondHand.type&&(r=e.items.armed.secondHand.attack.length>1?e.items.armed.secondHand.attack[0]+Math.floor((e.items.armed.secondHand.attack[1]-e.items.armed.secondHand.attack[0]+1)*Math.random()):e.items.armed.secondHand.attack[0]),s="Fatal strike"==m?2*e.skills[0].amount+2.5*n:2*e.skills[0].amount+2.5*n-1.5*e.oponentSkils.defense,"shield"==e.items.armed.secondHand.type?"shield"==e.oponentItems.armed.secondHand.type&&(s-=2*e.oponentItems.armed.secondHand.stat[0]):"shield"==e.oponentItems.armed.secondHand.type?s+=2*(r-e.oponentItems.armed.secondHand.stat[0]):s+=2*r,s<1&&(s=1);var u=Math.random();"Giant smash"==m?s+=2*e.skills[2].amount:"Counterattack"==m&&(s+=s),"rest"==a?(t((0,d.Z)(["rest"])),e.parameters.energy>=75?100==e.parameters.energy?t((0,d.Z)(["full energy"])):t((0,i.ux)()):(t((0,i.YG)(25)),t((0,d.Z)(["rest"])))):"deff"==a?(t((0,d.Z)(["defense"])),t((0,c.ch)(.5)),e.parameters.energy>=85?t((0,i.ux)()):t((0,i.YG)(15))):"Giant smash"==a&&0==h?(t((0,d.Z)(["Giant smash"])),l("Giant smash"),k(!0)):"Counterattack"==a&&0==h?(t((0,d.Z)(["Counterattack"])),l("Counterattack"),t((0,c.ch)(.5)),k(!0),e.parameters.energy>=85?t((0,i.ux)()):t((0,i.YG)(15))):"Fatal strike"==a&&0==h?(t((0,d.Z)(["Fatal strike"])),l("Fatal strike"),k(!0)):"light"==a&&e.parameters.energy>=10?(t((0,i.YG)(-10)),u<.9?(t((0,o.qy)(-Math.round(s))),t((0,d.Z)(["attack",Math.round(s)]))):(console.log("miss"),t((0,d.Z)(["block"]))),l("")):"normal"==a&&e.parameters.energy>=15?(t((0,i.YG)(-15)),u<.7?(t((0,o.qy)(-Math.round(2*s))),t((0,d.Z)(["attack",Math.round(2*s)]))):t((0,d.Z)(["block"])),l("")):"strong"==a&&e.parameters.energy>=25?(t((0,i.YG)(-25)),u<.37?(t((0,o.qy)(-Math.round(5*s))),t((0,d.Z)(["attack",Math.round(5*s)]))):t((0,d.Z)(["block"])),l("")):t((0,d.Z)(["no energy"]))}}},m=a(1213),l=a.p+"static/media/lightAttack.93fa0da4dc8f1e24aca8.png",f=a.p+"static/media/mediumAttack.c19202650b568285452c.png",p=a.p+"static/media/strongAttack.b0d9fb6a77f2c483a717.png",h=a.p+"static/media/superpower.361015096c4d3781878e.png",k=a(6630),g=a(3680),v=a(184);var x=function(){var e=(0,r.v9)((function(e){return e})),t=m.Z.find((function(t){return t.name==e.profesion})).img,a=m.Z.find((function(t){return t.name==e.profesion})).superpower,i=(0,s.useState)(!1),c=(0,n.Z)(i,2),o=c[0],d=c[1],x=(0,s.useState)(!1),y=(0,n.Z)(x,2),j=y[0],Z=y[1],H=(0,s.useState)(1),C=(0,n.Z)(H,2),M=C[0],N=C[1],b=(0,s.useState)({}),w=(0,n.Z)(b,2),B=w[0],G=w[1];(0,s.useEffect)((function(){G(1==j&&1==o?{opacity:1,visibility:"visible"}:{opacity:0,visibility:"hidden"})}),[j]);var S=(0,s.useState)(!0),Y=(0,n.Z)(S,2),I=Y[0],F=Y[1],q=u();function A(e){I&&e!==a&&q(e),I&&0==o&&e==a&&(N(.2),d(!0),q(a))}return(0,s.useEffect)((function(){F(!1)}),[e.skills[1].amount,e.parameters.energy]),(0,s.useEffect)((function(){setTimeout((function(){F(!0)}),2e3)}),[e.oponentParameters.energy]),(0,v.jsxs)("div",{className:"actionsContainer",children:[(0,v.jsxs)("div",{className:"defenseButtons",children:[(0,v.jsxs)("div",{className:"actionButton",children:[(0,v.jsx)("img",{alt:"deffensive move",src:g,onClick:function(){return A("deff")}}),(0,v.jsx)("div",{children:"Defense"})]}),(0,v.jsxs)("div",{className:"actionButton",children:[(0,v.jsx)("img",{alt:"rest move",src:k,onClick:function(){return A("rest")}}),(0,v.jsx)("div",{children:"Rest"})]})]}),(0,v.jsx)("img",{alt:"character look",className:"characterFightImg",src:t}),(0,v.jsx)("div",{className:"attackButtonsContainer",children:(0,v.jsxs)("div",{className:"attackButtons",children:[(0,v.jsxs)("div",{className:"actionButton",children:[(0,v.jsx)("img",{alt:"strong attack",src:p,onClick:function(){return A("strong")}}),(0,v.jsx)("div",{children:"Strong"})]}),(0,v.jsxs)("div",{className:"actionButton",children:[(0,v.jsx)("img",{alt:"normal attack",src:f,onClick:function(){return A("normal")}}),(0,v.jsx)("div",{children:"Medium"})]}),(0,v.jsxs)("div",{className:"actionButton",children:[(0,v.jsx)("img",{alt:"light attack",src:l,onClick:function(){return A("light")}}),(0,v.jsx)("div",{children:"Light"})]}),(0,v.jsxs)("div",{className:"superpowerButton",children:[(0,v.jsxs)("div",{className:"actionButton",children:[(0,v.jsx)("img",{alt:"superpower move",src:h,style:{opacity:M},onMouseOver:function(){return Z(!0)},onMouseLeave:function(){return Z(!1)},onClick:function(){return A(a)}}),(0,v.jsx)("div",{children:m.Z.find((function(t){return t.name==e.profesion})).superpower})]}),(0,v.jsxs)("div",{style:B,className:"superpowerUsed",children:["You can use"," ",m.Z.find((function(t){return t.name==e.profesion})).superpower," only once."]})]})]})})]})}},6630:function(e,t,a){e.exports=a.p+"static/media/rest.dd46442dc898f2060a48.png"}}]);
//# sourceMappingURL=862.a00d1354.chunk.js.map