"use strict";(self.webpackChunkarena_game=self.webpackChunkarena_game||[]).push([[220],{7220:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(9439),s=n(2791),r=n(9434),i=n(6220),o=n(1026),c=n(7850),d=n(8232);var u=function(){var e=(0,r.v9)((function(e){return e})),t=(0,r.I0)(),n=(0,s.useState)(""),u=(0,a.Z)(n,2),m=u[0],l=u[1],f=(0,s.useState)(!1),h=(0,a.Z)(f,2),k=h[0],p=h[1];return function(n){if(e.parameters.health>0){var a=0;a=e.items.armed.firstHand.attack.length>1?e.items.armed.firstHand.attack[0]+Math.floor((e.items.armed.firstHand.attack[1]-e.items.armed.firstHand.attack[0]+1)*Math.random()):e.items.armed.firstHand.attack[0];var s,r=0;"second weapon"==e.items.armed.secondHand.type&&(r=e.items.armed.secondHand.attack.length>1?e.items.armed.secondHand.attack[0]+Math.floor((e.items.armed.secondHand.attack[1]-e.items.armed.secondHand.attack[0]+1)*Math.random()):e.items.armed.secondHand.attack[0]),s="Fatal strike"==m?2*e.skills[0].amount+2.5*a:2*e.skills[0].amount+2.5*a-1.5*e.oponentSkils.defense,"shield"==e.items.armed.secondHand.type?"shield"==e.oponentItems.armed.secondHand.type&&(s-=2*e.oponentItems.armed.secondHand.stat[0]):"shield"==e.oponentItems.armed.secondHand.type?s+=2*(r-e.oponentItems.armed.secondHand.stat[0]):s+=2*r,s<1&&(s=1);var u=Math.random();"Giant smash"==m?s+=2*e.skills[2].amount:"Counterattack"==m&&(s+=s),"rest"==n?(t((0,d.Z)(["rest"])),e.parameters.energy>=75?100==e.parameters.energy?t((0,d.Z)(["full energy"])):t((0,i.ux)()):(t((0,i.YG)(25)),t((0,d.Z)(["rest"])))):"deff"==n?(t((0,d.Z)(["defense"])),t((0,o.ch)(.5)),e.parameters.energy>=85?t((0,i.ux)()):t((0,i.YG)(15))):"Giant smash"==n&&0==k?(t((0,d.Z)(["Giant smash"])),l("Giant smash"),p(!0)):"Counterattack"==n&&0==k?(t((0,d.Z)(["Counterattack"])),l("Counterattack"),t((0,o.ch)(.5)),p(!0),e.parameters.energy>=85?t((0,i.ux)()):t((0,i.YG)(15))):"Fatal strike"==n&&0==k?(t((0,d.Z)(["Fatal strike"])),l("Fatal strike"),p(!0)):"light"==n&&e.parameters.energy>=10?(t((0,i.YG)(-10)),u<.9?(t((0,c.qy)(-Math.round(s))),t((0,d.Z)(["attack",Math.round(s)]))):(console.log("miss"),t((0,d.Z)(["block"]))),l("")):"normal"==n&&e.parameters.energy>=15?(t((0,i.YG)(-15)),u<.7?(t((0,c.qy)(-Math.round(2*s))),t((0,d.Z)(["attack",Math.round(2*s)]))):t((0,d.Z)(["block"])),l("")):"strong"==n&&e.parameters.energy>=25?(t((0,i.YG)(-25)),u<.37?(t((0,c.qy)(-Math.round(5*s))),t((0,d.Z)(["attack",Math.round(5*s)]))):t((0,d.Z)(["block"])),l("")):t((0,d.Z)(["no energy"]))}}},m=n(7733),l=n(2715),f=n(8569),h=n(2137),k=n(9643),p=n(6630),v=n(3680),g=n(184);var x=function(){var e=(0,r.v9)((function(e){return e})),t=m.Z.find((function(t){return t.name==e.profesion})).img,n=m.Z.find((function(t){return t.name==e.profesion})).superpower,i=(0,s.useState)(!1),o=(0,a.Z)(i,2),c=o[0],d=o[1],x=(0,s.useState)(!1),y=(0,a.Z)(x,2),j=y[0],Z=y[1],H=(0,s.useState)(1),C=(0,a.Z)(H,2),M=C[0],N=C[1],B=(0,s.useState)({}),G=(0,a.Z)(B,2),w=G[0],S=G[1];(0,s.useEffect)((function(){S(1==j&&1==c?{opacity:1,visibility:"visible"}:{opacity:0,visibility:"hidden"})}),[j]);var b=(0,s.useState)(!0),Y=(0,a.Z)(b,2),I=Y[0],F=Y[1],q=u();function E(e){I&&e!==n&&q(e),I&&0==c&&e==n&&(N(.2),d(!0),q(n))}return(0,s.useEffect)((function(){F(!1)}),[e.skills[1].amount,e.parameters.energy]),(0,s.useEffect)((function(){setTimeout((function(){F(!0)}),2e3)}),[e.oponentParameters.energy]),(0,g.jsxs)("div",{className:"actionsContainer",children:[(0,g.jsxs)("div",{className:"defenseButtons",children:[(0,g.jsxs)("div",{className:"actionButton",children:[(0,g.jsx)("img",{alt:"deffensive move",src:v,onClick:function(){return E("deff")}}),(0,g.jsx)("div",{children:"Defense"})]}),(0,g.jsxs)("div",{className:"actionButton",children:[(0,g.jsx)("img",{alt:"rest move",src:p,onClick:function(){return E("rest")}}),(0,g.jsx)("div",{children:"Rest"})]})]}),(0,g.jsx)("img",{alt:"character look",className:"characterFightImg",src:t}),(0,g.jsx)("div",{className:"attackButtonsContainer",children:(0,g.jsxs)("div",{className:"attackButtons",children:[(0,g.jsxs)("div",{className:"actionButton",children:[(0,g.jsx)("img",{alt:"strong attack",src:h,onClick:function(){return E("strong")}}),(0,g.jsx)("div",{children:"Strong"})]}),(0,g.jsxs)("div",{className:"actionButton",children:[(0,g.jsx)("img",{alt:"normal attack",src:f,onClick:function(){return E("normal")}}),(0,g.jsx)("div",{children:"Medium"})]}),(0,g.jsxs)("div",{className:"actionButton",children:[(0,g.jsx)("img",{alt:"light attack",src:l,onClick:function(){return E("light")}}),(0,g.jsx)("div",{children:"Light"})]}),(0,g.jsxs)("div",{className:"superpowerButton",children:[(0,g.jsxs)("div",{className:"actionButton",children:[(0,g.jsx)("img",{alt:"superpower move",src:k,style:{opacity:M},onMouseOver:function(){return Z(!0)},onMouseLeave:function(){return Z(!1)},onClick:function(){return E(n)}}),(0,g.jsx)("div",{children:m.Z.find((function(t){return t.name==e.profesion})).superpower})]}),(0,g.jsxs)("div",{style:w,className:"superpowerUsed",children:["You can use"," ",m.Z.find((function(t){return t.name==e.profesion})).superpower," only once."]})]})]})})]})}}}]);
//# sourceMappingURL=220.3b68327d.chunk.js.map