(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],[,,,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var s=t(0),n=t(1),l=t.n(n),o=t(5),a=t.n(o),i=(t(11),t(12),t(3)),r=(t(13),t(14),t.p+"static/media/ftlogo.b7581287.png"),u=function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("img",{src:r,alt:"company logo",className:"header__logo"}),Object(s.jsx)("div",{children:""})]})},b=(t(15),t(2)),m=t.n(b),_=(t(16),t(17),t(18),function(e){var c=e.team;return Object(s.jsx)("div",{className:"team",children:c?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"team__text",children:[Object(s.jsx)("div",{className:"team__title",children:"C. Williamson"}),Object(s.jsx)("div",{className:"team__extra",children:"Dnipro region"}),Object(s.jsx)("div",{className:"team__extra"})]}),Object(s.jsxs)("div",{className:"team__results",children:[Object(s.jsxs)("div",{className:"team__coef",children:[Object(s.jsx)("div",{className:"team__coef-block team__coef-block--first",children:"0"}),Object(s.jsx)("div",{className:"team__coef-block team__coef-block--second",children:"24"}),Object(s.jsx)("div",{className:"team__coef-block team__coef-block--third",children:"0"})]}),Object(s.jsx)("div",{className:"team__score",children:"1"})]})]}):Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"team__text",children:[Object(s.jsx)("div",{className:"team__title",children:"NA"}),Object(s.jsx)("div",{className:"team__extra team__extra--empty"}),Object(s.jsx)("div",{className:"team__extra team__extra--empty"})]})})})}),j=(t(19),function(e){var c=e.team;return Object(s.jsx)("div",{className:"score",children:c?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"score__flag score__flag--first score__flag--first--fill"}),Object(s.jsx)("div",{className:"score__number",children:"31"}),Object(s.jsx)("div",{className:"score__flag score__flag--second score__flag--second--fill"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"score__flag score__flag--first score__flag--empty"}),Object(s.jsx)("div",{className:"score__number score__number--empty",children:"00"}),Object(s.jsx)("div",{className:"score__flag score__flag--second score__flag--empty"})]})})}),d=function(e){var c=e.team;return Object(s.jsxs)(s.Fragment,{children:[c&&Object(s.jsx)("div",{className:"cell__court",children:"Court 3 | 1:45 pm"}),Object(s.jsxs)("div",{className:"cell",children:[Object(s.jsx)("div",{className:"cell__score",children:Object(s.jsx)(j,{team:c})}),Object(s.jsxs)("div",{className:"cell__team-box",children:[Object(s.jsx)("div",{className:"cell__team",children:Object(s.jsx)(_,{team:c})}),Object(s.jsx)("div",{className:"cell__team cell__team--second",children:Object(s.jsx)(_,{team:c})})]})]})]})},O=function(e){return Object(n.useEffect)((function(){!0===e.team&&4===e.columnId&&e.setShowFinals(!0)})),Object(s.jsx)("div",{className:"column",children:Object(s.jsx)("ul",{className:"column__cells",children:e.blocksQuant.map((function(c){return Object(s.jsx)("li",{className:"column__cell",children:e.team?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(d,{team:e.team})}):Object(s.jsx)(d,{})},c)}))})})},x=(t(20),function(e){return Object(s.jsx)("div",{className:m()({buttons:!0,"buttons--start":!e.quarterVisibility}),children:e.quarterVisibility?Object(s.jsxs)("button",{type:"button",className:"buttons__button buttons__button--prev",onClick:function(){e.setQuarterVisibility(!1)},children:[Object(s.jsx)("div",{className:"buttons__icon buttons__icon--prev"}),Object(s.jsx)("div",{className:"buttons__text",children:"Previous Stage"})]}):Object(s.jsxs)("button",{type:"button",className:"buttons__button buttons__button--next",onClick:function(){e.setQuarterVisibility(!0)},children:[Object(s.jsx)("div",{className:"buttons__text",children:"Next Stage"}),Object(s.jsx)("div",{className:"buttons__icon buttons__icon--next"})]})})}),h=(t(21),function(e){e.showPanel;var c=e.setShowPanel;return Object(s.jsxs)("div",{className:"gridtopbar",children:[Object(s.jsx)("div",{className:"gridtopbar__text",children:"\u042e\u041d\u0406\u041e\u0420\u0418, \u042e\u041d\u0406\u041e\u0420\u0418, \u041c\u0443\u0436\u0447\u0438\u043d\u044b, -59"}),Object(s.jsx)("button",{className:"gridtopbar__button",type:"button",onClick:function(){c(!1)}})]})}),f=function(e){var c=e.showPanel,t=e.setShowPanel,l=Object(n.useState)(!1),o=Object(i.a)(l,2),a=o[0],r=o[1],u=Object(n.useState)(!0),b=Object(i.a)(u,2),_=b[0],j=(b[1],Object(n.useState)(!0)),d=Object(i.a)(j,2),f=d[0],k=d[1],N=Object(n.useState)(!1),v=Object(i.a)(N,2),p=v[0],g=v[1],S=Object(n.useState)(!1),w=Object(i.a)(S,2),y=w[0],C=w[1],P=Object(n.useState)(!1),F=Object(i.a)(P,2),Q=F[0],I=F[1],q=Object(n.useState)(!1),V=Object(i.a)(q,2),E=V[0],J=V[1],A=Object(n.useState)(!1),B=Object(i.a)(A,2),D=B[0],G=B[1],M=Object(n.useState)(!1),W=Object(i.a)(M,2),z=W[0],H=W[1],K=Object(n.useState)(!1),L=Object(i.a)(K,2),R=L[0],T=L[1];return Object(s.jsxs)("div",{className:"columns-block",children:[Object(s.jsx)(h,{showPanel:c,setShowPanel:t}),Object(s.jsxs)("div",{className:m()({"round-setters":!0,"round-setters--bigger-margin":!f}),children:[Object(s.jsx)("button",{onClick:function(){k(!0),g(!1),C(!1),I(!1),J(!1),G(!1),H(!1)},className:m()({"round-setters__button":!0,"round-setters__button--all":f}),children:"all"}),Object(s.jsx)("button",{onClick:function(){g(!0),k(!1),C(!1),I(!1),J(!1),G(!1),H(!1)},className:"round-setters__button round-setters__button--thtw",children:"1/32 finals"}),Object(s.jsx)("button",{onClick:function(){C(!0),k(!1),g(!1),I(!1),J(!1),G(!1),H(!1)},className:"round-setters__button round-setters__button--sxtn",children:"1/16 finals"}),Object(s.jsx)("button",{onClick:function(){I(!0),k(!1),g(!1),C(!1),J(!1),G(!1),H(!1)},className:"round-setters__button round-setters__button--eight",children:"1/8 finals"}),Object(s.jsx)("button",{onClick:function(){J(!0),k(!1),g(!1),C(!1),I(!1),G(!1),H(!1)},className:"round-setters__button round-setters__button--quarter",children:"1/4 finals"}),Object(s.jsx)("button",{onClick:function(){J(!1),k(!1),g(!1),C(!1),I(!1),G(!0),H(!1)},className:"round-setters__button round-setters__button--semi",children:"Semi-finals"}),Object(s.jsx)("button",{onClick:function(){J(!1),k(!1),g(!1),C(!1),I(!1),G(!1),H(!0)},className:"round-setters__button round-setters__button--final",children:"Final"})]}),Object(s.jsxs)("div",{className:m()({"columns-block__column":!0,"columns-block__column--first":!0,"columns-block__column--hide":y||Q||E||p||z||!1===R,"columns-block__column--first-position":D}),children:[Object(s.jsx)("div",{className:m()({"columns-block__rounds":!0,"columns-block__rounds--mar":_}),children:"Semi-final 1"}),Object(s.jsx)(O,{blocksQuant:[1],columnId:5,team:_})]}),Object(s.jsxs)("div",{className:m()({"columns-block__column":!0,"columns-block__column--second":!0,"columns-block__column--hide":y||Q||E||p||z||!1===R,"columns-block__column--first-position":D}),children:[Object(s.jsx)("div",{className:m()({"columns-block__rounds":!0,"columns-block__rounds--mar":_}),children:"Semi-final 2"}),Object(s.jsx)(O,{blocksQuant:[1],columnId:6,team:_})]}),Object(s.jsxs)("div",{className:m()({"columns-block__column":!0,"columns-block__column--third":!0,"columns-block__column--hide":y||Q||E||p||D||!1===R,"columns-block__column--first-position":z}),children:[Object(s.jsx)("div",{className:m()({"columns-block__rounds":!0,"columns-block__rounds--mar":_}),children:"Final"}),Object(s.jsx)(O,{blocksQuant:[1],columnId:7,team:_})]}),f&&Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(x,{all:f,quarterVisibility:a,setQuarterVisibility:r})}),Object(s.jsxs)("div",{className:m()({"columns-block__column":!0,"columns-block__column--first":!0,"columns-block__column--first--quarter":a,"columns-block__column--hide":y||Q||E||D||z,"columns-block__column--first-position":p}),children:[Object(s.jsx)("div",{className:m()({"columns-block__rounds":!0,"columns-block__rounds--mar":_}),children:"1/32 finals"}),Object(s.jsx)(O,{blocksQuant:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],columnId:1,team:_})]}),Object(s.jsxs)("div",{className:m()({"columns-block__column":!0,"columns-block__column--second":!0,"columns-block__column--second--quarter":a,"columns-block__column--hide":p||Q||E||D||z,"columns-block__column--first-position":y}),children:[Object(s.jsx)("div",{className:m()({"columns-block__rounds":!0,"columns-block__rounds--mar":_}),children:"1/16 finals"}),Object(s.jsx)(O,{blocksQuant:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],columnId:2,team:_})]}),Object(s.jsxs)("div",{className:m()({"columns-block__column":!0,"columns-block__column--third":!0,"columns-block__column--third--quarter":a,"columns-block__column--hide":y||E||p||D||z,"columns-block__column--first-position":Q}),children:[Object(s.jsx)("div",{className:m()({"columns-block__rounds":!0,"columns-block__rounds--mar":_}),children:"1/8 finals"}),Object(s.jsx)(O,{blocksQuant:[1,2,3,4,5,6,7,8],columnId:3,team:_})]}),Object(s.jsxs)("div",{className:m()({"columns-block__column":!0,"columns-block__column--fourth":!0,"columns-block__column--fourth--quarter":a,"columns-block__column--hide":y||Q||p||D||z,"columns-block__column--first-position":E}),children:[Object(s.jsx)("div",{className:m()({"columns-block__rounds":!0,"columns-block__rounds--mar":_}),children:"Quarter finals"}),Object(s.jsx)(O,{columnId:4,team:_,blocksQuant:[1,2,3,4],showFinals:R,setShowFinals:T})]})]})},k=(t(22),function(e){var c=e.showPanel,t=e.setShowPanel;return c?null:Object(s.jsx)("div",{className:"topbar",children:Object(s.jsx)("button",{className:"topbar__show",type:"button",onClick:function(){t(!0)},children:"Show Grid"})})}),N=function(){var e=Object(n.useState)(!1),c=Object(i.a)(e,2),t=c[0],l=c[1];return Object(s.jsxs)("div",{className:"page-container",children:[Object(s.jsx)(u,{}),Object(s.jsx)(k,{showPanel:t,setShowPanel:l}),t&&Object(s.jsx)(f,{showPanel:t,setShowPanel:l})]})},v=function(){return Object(s.jsx)("div",{className:"page",children:Object(s.jsx)(N,{})})};a.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.bd96d481.chunk.js.map