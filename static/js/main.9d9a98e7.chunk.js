(this["webpackJsonpreact-messenger"]=this["webpackJsonpreact-messenger"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={comment:"Comment_comment__lbK_I",left:"Comment_left__2xve6",avatar:"Comment_avatar__3ilhB",right:"Comment_right__1oP5A",top:"Comment_top__2UFsY",label:"Comment_label__2uyWa",bottom:"Comment_bottom__3S3ng",timestamp:"Comment_timestamp__3l9lE"}},,,,,,,,,function(e,a,t){e.exports={chat:"Chat_chat__i58WX",main:"Chat_main__3gims",messages:"Chat_messages__2Lcp8",blank:"Chat_blank__bWBQa",select:"Chat_select__V17K7"}},,,function(e,a,t){e.exports={content:"Message_content__17Doq",avatar:"Message_avatar__3m-P-",imgAvatar:"Message_imgAvatar__2gEAY"}},,function(e,a,t){e.exports={messagelist:"MessageList_messagelist__2O4Ns",timestampSeparator:"MessageList_timestampSeparator__2LOXf"}},function(e,a,t){e.exports={item:"ChatItem_item__1Ldvj",content:"ChatItem_content__2Egfm"}},function(e,a,t){e.exports={user:"UserPanel_user__7hhyG",exit:"UserPanel_exit__FFyLw"}},function(e,a,t){e.exports={sidebar:"Sidebar_sidebar__3qUkX",active:"Sidebar_active__9wFJE"}},function(e,a,t){e.exports={loginForm:"Form_loginForm__1xR7n",errorText:"Form_errorText__CIr1r"}},,,,,,function(e,a,t){e.exports={messageform:"MessageForm_messageform__1qPFW"}},function(e,a,t){e.exports={formWrapper:"LoginForm_formWrapper__O1FYG"}},,,function(e,a,t){e.exports={formWrapper:"RegForm_formWrapper__UOqGr"}},,function(e,a,t){e.exports=t(47)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n,r=t(0),m=t.n(r),s=t(29),o=t.n(s),c=t(12),h=t(2),l=Object(h.b)(),i=(t(41),t(7)),u=t(8),d=t(10),p=t(9),f=t(35),g=t(4),b=t(49),v=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return e.getFullYear()===a.getFullYear()&&e.getMonth()===a.getMonth()&&e.getDate()===a.getDate()},W=t(14),I=function(e){var a=e.children,t=Object(W.a)(e,["children"]);return m.a.createElement("div",t,a)},_=t(6),E=t.n(_),y=function(e){var a=e.avatar,t=e.label,n=e.content,r=e.timestamp,s=e.isCenterTimestamp,o=m.a.createElement("div",{className:E.a.left},"string"===typeof a?m.a.createElement("img",{className:E.a.avatar,src:a,alt:""}):a),c=m.a.createElement("div",{className:E.a.right},m.a.createElement("p",{className:E.a.top},t&&m.a.createElement("span",{className:E.a.label},t),r&&!s&&m.a.createElement("span",{className:E.a.timestamp},r)),s&&r?m.a.createElement("div",{className:E.a.bottom},n,m.a.createElement("span",{className:E.a.timestamp},r)):n);return m.a.createElement("div",{className:E.a.comment},o,c)},C=t(18),w=t.n(C),x=function(e){var a=e.ava,t=e.username,n=e.text,r=e.timestamp,s=m.a.createElement("div",{className:w.a.avatar},m.a.createElement("img",{className:w.a.imgAvatar,src:a,alt:""})),o=m.a.createElement("p",{className:w.a.content},n),c=r?r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):null;return m.a.createElement(y,{avatar:s,label:t,timestamp:c,content:o,isCenterTimestamp:!0})},k=t(20),T=t.n(k),j=function(e){var a=e.data,t=e.style,n={ava:"https://s3.amazonaws.com/uifaces/faces/twitter/rahmeen/128.jpg",name:"\u0423\u0434\u0430\u043b\u0435\u043d\u043e"},r=function(e){return m.a.createElement("p",{className:T.a.timestampSeparator},function(e){var a=(new Date).getFullYear();return e.toLocaleDateString([],{weekday:"short",year:e.getFullYear()===a?"numeric":void 0,month:"long",day:"numeric"}).replace(/\s*\u0433\./,"")}(e))};return m.a.createElement(I,{className:T.a.messagelist,style:Object(g.a)({height:"100%"},t)},a.messages.map((function(e,t,s){var o=e.messageId,c=e.authorId,h=e.text,l=e.timestamp,i=s[t-1]||{},u=c===i.authorId,d=v(l,i.timestamp),p=a.users[c]||n;return m.a.createElement("div",{key:o},!d&&r(l),m.a.createElement(x,{id:o,ava:u&&d?void 0:p.ava,username:u&&d?void 0:p.name,text:h,timestamp:l}))})))},O=t(30),D=t.n(O),N=function(e){var a=e.handleKeyPress,t=e.onChange,n=e.value,s=Object(r.useRef)(null);return m.a.createElement("textarea",{rows:1,value:n,name:"messagearea",onChange:t(s),onKeyDown:a(s),className:D.a.messageform,ref:s})},S=t(21),Z=t.n(S);!function(e){e[e.personal=0]="personal",e[e.group=1]="group",e[e.channel=2]="channel"}(n||(n={}));var A,M=function(e){var a=e.chatType,t=e.ava,n=e.label,r=e.username,s=e.shortmessage,o=e.timestamp,c=e.className,h=e.onClick,l=m.a.createElement("p",{className:Z.a.content},0!==a?"".concat(r,": "):null,s),i=o?v(o)?o.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):o.toLocaleDateString():null;return m.a.createElement("div",{className:"".concat(Z.a.item," ").concat(c),onClick:h},m.a.createElement(y,{avatar:t,label:n,timestamp:i,content:l}))},L=t(22),F=t.n(L),P=function(e){var a=e.userId,t=e.Logout;return m.a.createElement("div",{className:F.a.user},m.a.createElement("p",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: ",a),m.a.createElement("p",{onClick:t,className:F.a.exit},"\u0412\u044b\u0439\u0442\u0438"))},z=t(23),J=t.n(z),U=function(e){var a=e.userId,t=e.chatsData,n=e.handleClickCreator,r=e.Logout,s=e.activeChat;return m.a.createElement("div",{className:J.a.sidebar},m.a.createElement(I,null,t.map((function(e){var a=e.chatId,t=e.chatType,r=e.ava,o=e.label,c=e.username,h=e.shortmessage,l=e.timestamp;return m.a.createElement(M,{key:a,className:s===a?J.a.active:"",onClick:n(a),chatId:a,chatType:t,ava:r,label:o,username:c,shortmessage:h,timestamp:l})}))),m.a.createElement(P,{userId:a,Logout:r}))};!function(e){e[e.personal=0]="personal",e[e.group=1]="group",e[e.channel=2]="channel"}(A||(A={}));var q={test:[{chatId:"021b797c-72f9-4e7b-8cc3-b57fb2d1eedb",chatType:0,ava:"https://s3.amazonaws.com/uifaces/faces/twitter/dixchen/128.jpg",label:"\u0410\u043d\u0442\u043e\u043d",username:"\u0410\u043d\u0442\u043e\u043d",shortmessage:"We need to bypass the mobile HDD port!",timestamp:new Date("2020-05-04T16:57:31.338Z")},{chatId:"24e0b6ed-9046-483a-b35d-7ef66cc3c1b8",chatType:0,ava:"https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg",label:"\u041d\u0438\u043a\u0438\u0442\u0430",username:"\u041d\u0438\u043a\u0438\u0442\u0430",shortmessage:"I'll bypass the virtual PCI bandwidth, that should panel the CSS program!",timestamp:new Date("2020-03-22T16:57:31.338Z")}],default:[{chatId:"aed5afa3-df62-4f8f-9320-cc552a781f6a",chatType:2,ava:"https://picsum.photos/id/282/48",label:"value-added Configurable synthesize",username:"\u042d\u0434\u0443\u0430\u0440\u0434",shortmessage:"Use the mobile IB circuit, then you can synthesize the auxiliary driver!",timestamp:new Date("2020-03-22T16:57:31.338Z")},{chatId:"8a906a89-3e0b-4836-82bf-0ace982faa96",chatType:1,ava:"https://s3.amazonaws.com/uifaces/faces/twitter/rahmeen/128.jpg",label:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",username:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",shortmessage:"We need to program the mobile IB sensor!",timestamp:new Date("2020-03-22T16:57:31.338Z")}]},B={"24e0b6ed-9046-483a-b35d-7ef66cc3c1b8":{users:{test:{name:"Jack Johnson",ava:"https://picsum.photos/id/252/48"},"shrek@ya.ru":{name:"Shrek",ava:"https://picsum.photos/id/232/48"}},messages:[{messageId:"4f82c4ce-57a6-4619-84b8-add5be27d207",authorId:"test",text:"Hey, We here!",timestamp:new Date("2020-01-04T13:22:03.338Z")},{messageId:"4fd57ff3-86c9-4c55-9303-e2d235efdaf7",authorId:"shrek@ya.ru",text:"We at home We at home  We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home",timestamp:new Date("2020-02-02T09:04:33.338Z")},{messageId:"82529ed0-9684-4885-8215-7c4b209509d2",authorId:"shrek@ya.ru",text:"I am at home",timestamp:new Date("2020-02-02T09:30:33.338Z")},{messageId:"f744c554-dfb8-44c4-8cb5-37eef05ad743",authorId:"test",text:"Welcome!",timestamp:new Date("2020-02-02T10:00:50.338Z")},{messageId:"da36f52f-4ba1-44bf-907f-df60e76e6bef",authorId:"test",text:"Welcome!",timestamp:new Date("2020-02-02T12:02:50.338Z")}]},"021b797c-72f9-4e7b-8cc3-b57fb2d1eedb":{users:{test:{name:"Jack Johnson",ava:"https://picsum.photos/id/252/48"},"shrek@ya.ru":{name:"Shrek",ava:"https://picsum.photos/id/232/48"}},messages:[{messageId:"4f82c4ce-57a6-4619-84b8-add5be27d207",authorId:"shrek@ya.ru",text:"Hey, We here!",timestamp:new Date("2020-01-04T13:22:03.338Z")},{messageId:"4fd57ff3-86c9-4c55-9303-e2d235efdaf7",authorId:"shrek@ya.ru",text:"I am at home I am at home  I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home I am at home",timestamp:new Date("2020-02-02T09:04:33.338Z")},{messageId:"82529ed0-9684-4885-8215-7c4b209509d2",authorId:"test",text:"We at home",timestamp:new Date("2020-02-02T09:30:33.338Z")},{messageId:"f744c554-dfb8-44c4-8cb5-37eef05ad743",authorId:"test",text:"Welcome!",timestamp:new Date("2020-02-02T10:00:50.338Z")},{messageId:"da36f52f-4ba1-44bf-907f-df60e76e6bef",authorId:"test",text:"Welcome!",timestamp:new Date("2020-02-02T12:02:50.338Z")}]},"8a906a89-3e0b-4836-82bf-0ace982faa96":{users:{default:{name:"Jack Johnson",ava:"https://picsum.photos/id/252/48"},"shrek@ya.ru":{name:"Shrek",ava:"https://picsum.photos/id/232/48"}},messages:[{messageId:"4f82c4ce-57a6-4619-84b8-add5be27d207",authorId:"default",text:"Hey, We here!",timestamp:new Date("2020-01-04T13:22:03.338Z")},{messageId:"4fd57ff3-86c9-4c55-9303-e2d235efdaf7",authorId:"shrek@ya.ru",text:"We at home We at home  We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home",timestamp:new Date("2020-02-02T09:04:33.338Z")},{messageId:"82529ed0-9684-4885-8215-7c4b209509d2",authorId:"shrek@ya.ru",text:"We at home",timestamp:new Date("2020-02-02T09:30:33.338Z")},{messageId:"f744c554-dfb8-44c4-8cb5-37eef05ad743",authorId:"default",text:"Welcome!",timestamp:new Date("2020-02-02T10:00:50.338Z")},{messageId:"da36f52f-4ba1-44bf-907f-df60e76e6bef",authorId:"default",text:"Welcome!",timestamp:new Date("2020-02-02T12:02:50.338Z")}]},"aed5afa3-df62-4f8f-9320-cc552a781f6a":{users:{default:{name:"Jack Johnson",ava:"https://picsum.photos/id/252/48"},"shrek@ya.ru":{name:"Shrek",ava:"https://picsum.photos/id/232/48"}},messages:[{messageId:"4f82c4ce-57a6-4619-84b8-add5be27d207",authorId:"default",text:"Hey, We here!",timestamp:new Date("2020-01-04T13:22:03.338Z")},{messageId:"4fd57ff3-86c9-4c55-9303-e2d235efdaf7",authorId:"shrek@ya.ru",text:"We at home We at home  We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home We at home",timestamp:new Date("2020-02-02T09:04:33.338Z")},{messageId:"82529ed0-9684-4885-8215-7c4b209509d2",authorId:"shrek@ya.ru",text:"We at home",timestamp:new Date("2020-02-02T09:30:33.338Z")},{messageId:"f744c554-dfb8-44c4-8cb5-37eef05ad743",authorId:"default",text:"Welcome!",timestamp:new Date("2020-02-02T10:00:50.338Z")},{messageId:"da36f52f-4ba1-44bf-907f-df60e76e6bef",authorId:"default",text:"Welcome!",timestamp:new Date("2020-02-02T12:02:50.338Z")}]}},V=function(e){return q[e]||q.default},K=function(e){return B[e]},H=function(e,a){return!!(B[a]||{}).users[e]},Y=function(e,a){return B[e].messages.push(a)},$=t(15),R=t.n($),G=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(e=a.call.apply(a,[this].concat(r))).state={currentChat:e.props.currentChat&&H(e.props.userId,e.props.currentChat)?e.props.currentChat:void 0,chatMessages:{users:{},messages:[]},message:""},e.handleClickCreator=function(a){return function(){e.setState((function(){return{currentChat:a,chatMessages:K(a)}}))}},e.autosizer=function(e){var a=e.current;(null===a||void 0===a?void 0:a.style.height)!==(null===a||void 0===a?void 0:a.scrollHeight)&&(null===a||void 0===a||a.style.setProperty("height","auto"),null===a||void 0===a||a.style.setProperty("height","".concat(null===a||void 0===a?void 0:a.scrollHeight,"px")))},e.handleMessageKeyPress=function(a){return function(t){if("Enter"===t.key&&!t.shiftKey){t.preventDefault();var n={messageId:Object(b.a)(),authorId:Object.keys(e.state.chatMessages.users)[0],text:t.currentTarget.value,timestamp:new Date};e.setState((function(e){return{message:"",chatMessages:Object(g.a)({},e.chatMessages,{messages:[].concat(Object(f.a)(e.chatMessages.messages),[Object(g.a)({},n)])})}}),(function(){e.autosizer(a),e.state.currentChat&&Y(e.state.currentChat,n)}))}}},e.onMessageChange=function(a){return function(t){var n=t.currentTarget.value;e.setState((function(){return{message:n}})),e.autosizer(a)}},e.chatsDataSort=function(e){return e.sort((function(e,a){return a.timestamp.getTime()-e.timestamp.getTime()}))},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){if(this.props.currentChat){var e=this.props.currentChat;this.setState((function(){return{chatMessages:K(e)}}))}}},{key:"render",value:function(){var e=this.state,a=e.currentChat,t=e.chatMessages,n=e.message,r=this.props,s=r.userId,o=r.Logout;return m.a.createElement("div",{className:R.a.chat},m.a.createElement(U,{userId:s,activeChat:a,chatsData:this.chatsDataSort(V(s)),handleClickCreator:this.handleClickCreator,Logout:o}),m.a.createElement("div",{className:R.a.main},a?m.a.createElement("div",{className:R.a.messages},m.a.createElement(j,{data:t}),m.a.createElement(N,{handleKeyPress:this.handleMessageKeyPress,onChange:this.onMessageChange,value:n})):m.a.createElement("div",{className:R.a.blank},m.a.createElement("p",{className:R.a.select},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0442..."))))}}]),t}(m.a.Component),X=t(11),Q=t(17),ee=t(24),ae=t.n(ee),te=function(e){var a=e.children,t=e.errors,n=e.onBlur,s=Object(W.a)(e,["children","errors","onBlur"]);return m.a.createElement("form",Object.assign({className:ae.a.loginForm},s),r.Children.map(a,(function(e){return m.a.createElement(m.a.Fragment,null,m.a.cloneElement(e,{onBlur:n}),t[null===e||void 0===e?void 0:e.props.name]&&m.a.createElement("span",{className:ae.a.errorText},t[null===e||void 0===e?void 0:e.props.name]))})))},ne=function(e){var a=e.label,t=Object(W.a)(e,["label"]);return m.a.createElement("label",null,m.a.createElement("b",null,a),m.a.createElement("input",Object.assign({type:"text"},t)))},re=t(31),me=t.n(re),se=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(e=a.call.apply(a,[this].concat(r))).state={uname:"",pwd:"",errors:{}},e.getAuth=function(a,t){var n=e.props.checkAuth(a,t);return e.setState((function(e){return{errors:Object(g.a)({},e.errors,{uname:!n.uValid&&"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",pwd:n.uValid&&!n.pValid&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"})}})),n.uValid&&n.pValid},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState((function(e){return Object(g.a)({},e,Object(X.a)({},n,r))}))},e.handleSubmit=function(a){a.preventDefault();var t=e.state,n=t.uname,r=t.pwd;if(e.getAuth(n,r)){var m=e.props.location.state.previousPage;e.props.onAuth(n,m)}},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,a=e.errors,t=e.uname,n=e.pwd;return m.a.createElement("div",{className:me.a.formWrapper},m.a.createElement(te,{errors:a,onSubmit:this.handleSubmit},m.a.createElement(ne,{name:"uname",type:"text",value:t,label:"\u041b\u043e\u0433\u0438\u043d:",onChange:this.handleChange,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d (test)",required:!0}),m.a.createElement(ne,{name:"pwd",type:"password",value:n,onChange:this.handleChange,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c (test)",label:"\u041f\u0430\u0440\u043e\u043b\u044c:",required:!0}),m.a.createElement("button",{id:"submit",type:"submit"},"\u0412\u0445\u043e\u0434")),m.a.createElement(Q.a,{to:"/register"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))}}]),t}(m.a.Component),oe=t(34),ce=t.n(oe),he=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(e=a.call.apply(a,[this].concat(r))).state={errors:{},validate:{},uname:"",fname:"",lname:"",pwd:""},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState((function(e){return Object(g.a)({},e,Object(X.a)({},n,r))}))},e.regSubmit=function(a){a.preventDefault();var t=e.state,n=t.uname,r=t.fname,m=t.lname,s=t.pwd;e.props.createUser(n,r,m,s)},e.onValidate=function(a){a.preventDefault();var t={uname:{regExp:/^[a-z0-9_-]{3,16}$/,errText:"\u0426\u0438\u0444\u0440\u044b, \u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0435 \u0431\u0443\u043a\u0432\u044b, \u0441\u0438\u043c\u0432\u043e\u043b\u044b - \u0438 _. 3-16 \u0434\u043b\u0438\u043d\u0430."},fname:{regExp:/^[A-\u042f\u0401][\u0430-\u044f\u0451]{1,}$/,errText:"\u0417\u0430\u0433\u043b\u0430\u0432\u043d\u0430\u044f, \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u044b\u0435, 2+ \u0434\u043b\u0438\u043d\u0430."},lname:{regExp:/^[A-\u042f\u0401][\u0430-\u044f\u0451]{1,}$/,errText:"\u0417\u0430\u0433\u043b\u0430\u0432\u043d\u0430\u044f, \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u044b\u0435, 2+ \u0434\u043b\u0438\u043d\u0430."},pwd:{regExp:/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,errText:"8+ \u0434\u043b\u0438\u043d\u0430, \u0441\u043f\u0435\u0446\u0441\u0438\u043c\u0432\u043e\u043b\u044b."}},n=a.target;if("INPUT"===n.nodeName){var r=t[n.name]&&t[n.name].regExp.test(n.value);e.setState((function(e){return{errors:Object(g.a)({},e.errors,Object(X.a)({},n.name,r?null:t[n.name].errText)),validate:Object(g.a)({},e.validate,Object(X.a)({},n.name,r))}}))}},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,a=e.errors,t=e.validate,n=e.uname,r=e.fname,s=e.lname,o=e.pwd;return m.a.createElement("div",{className:ce.a.formWrapper},m.a.createElement(te,{errors:a,onSubmit:this.regSubmit,onBlur:this.onValidate},m.a.createElement(ne,{name:"uname",type:"text",value:n,label:"\u041b\u043e\u0433\u0438\u043d:",onChange:this.handleChange,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",required:!0}),m.a.createElement(ne,{name:"fname",type:"text",value:r,label:"\u0418\u043c\u044f:",onChange:this.handleChange,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",required:!0}),m.a.createElement(ne,{name:"lname",type:"text",value:s,label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:",onChange:this.handleChange,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e",required:!0}),m.a.createElement(ne,{name:"pwd",type:"password",value:o,onChange:this.handleChange,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",label:"\u041f\u0430\u0440\u043e\u043b\u044c:",required:!0}),m.a.createElement("button",{name:"submit",type:"submit",disabled:!(t.uname&&t.fname&&t.lname&&t.pwd)},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))}}]),t}(m.a.Component);var le=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(e=a.call.apply(a,[this].concat(r))).state={userId:null},e.users={test:{fname:"Test",lname:"Testov",pwd:"test"}},e.onAuth=function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/";e.setState((function(){return{userId:a}}),(function(){return l.push(t)}))},e.checkAuth=function(a,t){var n=!!e.users[a];return{uValid:n,pValid:n&&e.users[a].pwd===t}},e.createUser=function(a,t,n,r){e.users[a]={fname:t,lname:n,pwd:r},e.onAuth(a)},e.Logout=function(){e.setState((function(){return{userId:null}}))},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=this.state.userId,t=Object.assign({},this.props);return m.a.createElement("div",{className:"App"},m.a.createElement(c.d,null,m.a.createElement(c.b,{exact:!0,path:"/login",component:function(){return m.a.createElement(se,Object.assign({onAuth:e.onAuth,checkAuth:e.checkAuth},t))}}),m.a.createElement(c.b,{exact:!0,path:"/register",component:function(){return m.a.createElement(he,{createUser:e.createUser})}}),m.a.createElement(c.b,{path:"/",component:function(){return a?m.a.createElement(c.d,null,m.a.createElement(c.b,{exact:!0,path:"/",component:function(){return m.a.createElement(G,{Logout:e.Logout,userId:a})}}),m.a.createElement(c.b,{path:"/chat/:id",component:(t=function(t){return m.a.createElement(G,Object.assign({Logout:e.Logout,userId:a},t))},function(e){return m.a.createElement(t,Object.assign({currentChat:e.match.params.id},e))})})):m.a.createElement(c.a,{to:{pathname:"/login",state:{previousPage:e.props.location.pathname}}});var t}})))}}]),t}(m.a.Component),ie=Object(c.g)(le);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(c.c,{history:l},m.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[36,1,2]]]);
//# sourceMappingURL=main.9d9a98e7.chunk.js.map