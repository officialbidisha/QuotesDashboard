(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={form:"QuoteForm_form__3pbZ5",loading:"QuoteForm_loading__3XgZl",control:"QuoteForm_control__2G2-O",actions:"QuoteForm_actions__bkaCk"}},,function(e,t,n){e.exports={header:"MainNavigation_header__3HEvJ",logo:"MainNavigation_logo__2f8Xc",nav:"MainNavigation_nav__BZVto",active:"MainNavigation_active__3Gkn4"}},function(e,t,n){e.exports={form:"NewCommentForm_form__2Qqlu",loading:"NewCommentForm_loading__3bm4D",control:"NewCommentForm_control__3rR5d",actions:"NewCommentForm_actions__1ZBDt"}},,,,function(e,t,n){e.exports={list:"QuoteList_list__18CnS",sorting:"QuoteList_sorting__1oLX7"}},,function(e,t,n){e.exports={main:"Layout_main__1VTEb"}},,,function(e,t,n){e.exports={item:"QuoteItem_item__9oGxf"}},function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__IaVgf"}},function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__9wKdj"}},function(e,t,n){e.exports={card:"Card_card__F5orl"}},function(e,t,n){e.exports={comments:"Comments_comments__2Gb18"}},function(e,t,n){e.exports={item:"CommentItem_item__1EWzR"}},function(e,t,n){e.exports={comments:"CommentsList_comments__3kUvz"}},function(e,t,n){e.exports={quote:"HighlightedQuote_quote__3D2R3"}},,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(21),r=n.n(c),s=n(4),a=(n(37),n(0)),o=function(){return Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)("p",{children:"Oops! The page requested is not found!"})})},i=n(2),u=n(1),j=n(22),d=n.n(j),l=n(15),b=n.n(l),m=function(){return Object(a.jsxs)("header",{className:b.a.header,children:[Object(a.jsx)("div",{children:" Great Quotes"}),Object(a.jsx)("div",{className:b.a.nav,children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(s.c,{to:"/quotes",activeClassName:b.a.active,children:" All Quotes"})}),Object(a.jsx)("li",{children:Object(a.jsx)(s.c,{to:"/new-quote",activeClassName:b.a.active,children:" Add a quote"})})]})})]})},h=function(e){return Object(a.jsxs)(u.Fragment,{children:[Object(a.jsx)(m,{}),Object(a.jsx)("main",{className:d.a.main,children:e.children})]})},x=n(25),f=n.n(x),O=function(e){return Object(a.jsxs)("li",{className:f.a.item,children:[Object(a.jsxs)("figure",{children:[Object(a.jsx)("blockquote",{children:Object(a.jsx)("p",{children:e.text})}),Object(a.jsx)("figcaption",{children:e.author})]}),Object(a.jsx)(s.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},p=n(20),v=n.n(p),_=function(e){var t,n,c=Object(i.g)(),r=Object(i.h)(),s="asc"===new URLSearchParams(r.search).get("sort"),o=(t=e.quotes,n=s,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(a.jsxs)(u.Fragment,{children:[Object(a.jsx)("div",{className:v.a.sorting,children:Object(a.jsxs)("button",{onClick:function(){c.push("".concat(r.pathname,"?sort=").concat(s?"desc":"asc"))},children:["Sort ",s?"Descending":"Ascending"]})}),Object(a.jsx)("ul",{className:v.a.list,children:o.map((function(e){return Object(a.jsx)(O,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},g=n(12),N=n(5),q=n.n(N),w=n(9),C=n(11);function y(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}var k=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(u.useReducer)(y,{status:t?"pending":null,data:null,error:null}),c=Object(C.a)(n,2),r=c[0],s=c[1],a=Object(u.useCallback)(function(){var t=Object(w.a)(q.a.mark((function t(n){var c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,s({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(g.a)({sendRequest:a},r)},S="https://quote-dashboard-default-rtdb.firebaseio.com/";function E(){return F.apply(this,arguments)}function F(){return(F=Object(w.a)(q.a.mark((function e(){var t,n,c,r,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(r in c=[],n)s=Object(g.a)({id:r},n[r]),c.push(s);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(w.a)(q.a.mark((function e(t){var n,c,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return r=Object(g.a)({id:t},c),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return D.apply(this,arguments)}function D(){return(D=Object(w.a)(q.a.mark((function e(t){var n,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){return L.apply(this,arguments)}function L(){return(L=Object(w.a)(q.a.mark((function e(t,n){var c,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return c=e.sent,e.next=5,c.json();case 5:if(r=e.sent,c.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return M.apply(this,arguments)}function M(){return(M=Object(w.a)(q.a.mark((function e(t){var n,c,r,s,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(s in r=[],c)a=Object(g.a)({id:s},c[s]),r.push(a);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=n(26),J=n.n(G),U=function(){return Object(a.jsx)("div",{className:J.a.spinner})},V=n(27),Z=n.n(V),B=function(){return Object(a.jsxs)("div",{className:Z.a.noquotes,children:[Object(a.jsx)("p",{children:"No quotes found!"}),Object(a.jsx)(s.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},P=function(){var e=k(E,!0),t=e.sendRequest,n=e.status,c=e.data,r=e.error;return Object(u.useEffect)((function(){t()}),[t]),"pending"===n?Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(U,{})}):r?Object(a.jsx)("p",{className:"centered focused",children:r}):"completed"!==n||c&&0!==c.length?Object(a.jsx)(_,{quotes:c,children:" "}):Object(a.jsx)(B,{})},X=n(28),z=n.n(X),H=function(e){return Object(a.jsx)("div",{className:z.a.card,children:e.children})},K=n(13),W=n.n(K),Y=function(e){var t=Object(u.useState)(!1),n=Object(C.a)(t,2),c=n[0],r=n[1],s=Object(u.useRef)(),o=Object(u.useRef)();return Object(a.jsxs)(u.Fragment,{children:[Object(a.jsx)(i.a,{when:c,message:function(e){return"Are you sure you want to leave? All your data will be lost?"}}),Object(a.jsx)(H,{children:Object(a.jsxs)("form",{onFocus:function(){r(!0),console.log("Focus")},className:W.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=o.current.value;e.onAddQuote({author:n,text:c})},children:[e.isLoading&&Object(a.jsx)("div",{className:W.a.loading,children:Object(a.jsx)(U,{})}),Object(a.jsxs)("div",{className:W.a.control,children:[Object(a.jsx)("label",{htmlFor:"author",children:"Author"}),Object(a.jsx)("input",{type:"text",id:"author",ref:s})]}),Object(a.jsxs)("div",{className:W.a.control,children:[Object(a.jsx)("label",{htmlFor:"text",children:"Text"}),Object(a.jsx)("textarea",{id:"text",rows:"5",ref:o})]}),Object(a.jsx)("div",{className:W.a.actions,children:Object(a.jsx)("button",{onClick:function(){r(!1)},className:"btn",children:"Add Quote"})})]})})]})},$=function(){var e=k(A),t=e.sendRequest,n=e.status,c=Object(i.g)();Object(u.useEffect)((function(){"completed"===n&&c.push("/quotes")}),[n,c]);return Object(a.jsx)(Y,{isLoading:"pending"===n,onAddQuote:function(e){t(e)}})},ee=n(29),te=n.n(ee),ne=n(16),ce=n.n(ne),re=function(e){var t=Object(u.useRef)(),n=k(I),c=n.sendRequest,r=n.status,s=n.error,o=e.onAddedComment;Object(u.useEffect)((function(){"completed"!==r||s||o()}),[r,s,o]);var i=function(n){n.preventDefault();var r=t.current.value;c({commentData:{text:r},quoteId:e.quoteId.toString()})};return Object(a.jsxs)("form",{className:ce.a.form,onSubmit:i,children:["pending"===r&&Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(U,{})}),Object(a.jsxs)("div",{className:ce.a.control,onSubmit:i,children:[Object(a.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(a.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(a.jsx)("div",{className:ce.a.actions,children:Object(a.jsx)("button",{className:"btn",children:"Add Comment"})})]})},se=n(30),ae=n.n(se),oe=function(e){return Object(a.jsx)("li",{className:ae.a.item,children:Object(a.jsx)("p",{children:e.text})})},ie=n(31),ue=n.n(ie),je=function(e){return Object(a.jsx)("ul",{className:ue.a.comments,children:e.comments.map((function(e){return Object(a.jsx)(oe,{text:e.text},e.id)}))})},de=function(){var e=Object(u.useState)(!1),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(i.i)().quoteId,s=k(T),o=s.sendRequest,j=s.status,d=s.data;Object(u.useEffect)((function(){o(r)}),[r,o]);var l,b=Object(u.useCallback)((function(){o(r)}),[o,r]);return"pending"===j&&(l=Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(U,{})})),"completed"===j&&d&&d.length>0&&(l=Object(a.jsx)(je,{comments:d})),"completed"!==j||d&&0!==d.length||(l=Object(a.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(a.jsxs)("section",{className:te.a.comments,children:[Object(a.jsx)("h2",{children:"User Comments"}),!n&&Object(a.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&Object(a.jsx)(re,{quoteId:r,onAddedComment:b}),l]})},le=n(32),be=n.n(le),me=function(e){return Object(a.jsxs)("figure",{className:be.a.quote,children:[Object(a.jsx)("p",{children:e.text}),Object(a.jsx)("figcaption",{children:e.author})]})},he=function(){var e=Object(i.i)(),t=Object(i.j)(),n=k(R,!0),c=n.sendRequest,r=n.status,o=n.data,j=n.error;return Object(u.useEffect)((function(){c(e.quoteId)}),[c,e.quoteId]),"pending"===r?Object(a.jsx)("div",{className:"centered",children:j}):o.text?Object(a.jsxs)(u.Fragment,{children:[Object(a.jsx)(me,{text:o.text,author:o.author}),Object(a.jsx)(i.b,{path:t.path,exact:!0,children:Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(s.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load Comments"})})}),Object(a.jsx)(i.b,{path:"".concat(t.path,"/comments"),children:Object(a.jsx)(de,{})})]}):Object(a.jsx)("p",{children:"No quote found"})};var xe=function(){return Object(a.jsx)(h,{children:Object(a.jsxs)(i.d,{children:[Object(a.jsx)(i.b,{path:"/",exact:!0,children:Object(a.jsx)(P,{})}),Object(a.jsx)(i.b,{path:"/quotes",exact:!0,children:Object(a.jsx)(P,{})}),Object(a.jsx)(i.b,{path:"/quotes/:quoteId",children:Object(a.jsx)(he,{})}),Object(a.jsx)(i.b,{path:"/new-quote",children:Object(a.jsx)($,{})}),Object(a.jsx)(i.b,{path:"*",children:Object(a.jsx)(o,{})})]})})};r.a.render(Object(a.jsx)(s.a,{basename:"/QuotesDashboard",children:Object(a.jsx)(xe,{})}),document.getElementById("root"))}],[[48,1,2]]]);
//# sourceMappingURL=main.07715262.chunk.js.map