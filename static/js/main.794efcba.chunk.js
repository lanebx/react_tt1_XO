(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{17:function(e,t,r){},18:function(e,t,r){},20:function(e,t,r){},21:function(e,t,r){},22:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),i=r(10),s=r.n(i),c=(r(17),r(2)),l=r(3),o=r(5),u=r(4),d=(r(18),r(12)),b=r(9),m=r(0),h=function(){return Object(m.jsx)("svg",{viewBox:"0 0 100 100",children:Object(m.jsx)("circle",{cx:"50",cy:"50",r:"40",fill:"transparent",stroke:"#c4c5c5",strokeWidth:"7"})})},f=function(){return Object(m.jsx)("svg",{viewBox:"10 10 35 40",children:Object(m.jsx)("path",{className:"close-x",d:"M 15,15 L 40,40 M 40,15 L 15,40"})})},j=(r(20),function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var e=this.props,t=e.firstPlayerScore,r=e.secondPlayerScore,a=e.firstPlayerName,n=e.secondPlayerName;return Object(m.jsxs)("div",{className:"Result",children:[Object(m.jsx)("div",{className:"Result__title",children:"Score"}),Object(m.jsxs)("div",{className:"Result__playerScore",children:[a,": ",t]}),Object(m.jsxs)("div",{className:"Result__playerScore",children:[n,": ",r]})]})}}]),r}(n.a.Component)),y=(r(21),function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(c.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={fieldArray:[0,0,0,0,0,0,0,0,0],atributeChecker:0,firstPlayerScore:0,secondPlayerScore:0,winnerLine:0,disabled:!1},e.scoreChecer=function(t){"x"===t?e.setState((function(t){var r=e.calculateWinner(t.fieldArray);return{firstPlayerScore:t.firstPlayerScore+1,winnerLine:null===r||void 0===r?void 0:r.pop(),disabled:!0}})):e.setState((function(t){var r=e.calculateWinner(t.fieldArray);return{secondPlayerScore:t.firstPlayerScore+1,winnerLine:null===r||void 0===r?void 0:r.pop(),disabled:!0}}))},e.drowAtribure=function(t){0===e.state.fieldArray[t]&&(e.state.atributeChecker%2===0?e.setState((function(e){var r=Object(b.a)(e.fieldArray);return r[t]=1,{fieldArray:r,atributeChecker:e.atributeChecker+1}})):e.setState((function(e){var r=Object(b.a)(e.fieldArray);return r[t]=2,{fieldArray:r,atributeChecker:e.atributeChecker+1}})))},e.calculateWinner=function(e){for(var t=[[0,1,2,1],[3,4,5,2],[6,7,8,3],[0,3,6,4],[1,4,7,5],[2,5,8,6],[0,4,8,7],[2,4,6,8]],r=0;r<t.length;r+=1){var a=Object(d.a)(t[r],3),n=a[0],i=a[1],s=a[2];if(Number(e[n])===Number(e[i])&&Number(e[i])&&Number(e[n])&&Number(e[s])&&Number(e[n])===Number(e[s])&&Number(e[i])===Number(e[s]))return t[r]}return null},e.clearField=function(){e.setState({fieldArray:[0,0,0,0,0,0,0,0,0],atributeChecker:0,winnerLine:0,disabled:!1})},e.newGame=function(){e.setState({fieldArray:[0,0,0,0,0,0,0,0,0],atributeChecker:0,firstPlayerScore:0,secondPlayerScore:0,winnerLine:0,disabled:!1}),e.props.newGame()},e}return Object(l.a)(r,[{key:"componentDidUpdate",value:function(e,t){t.fieldArray.toString()!==this.state.fieldArray.toString()&&(null!==this.calculateWinner(this.state.fieldArray)&&((this.state.atributeChecker-1)%2===0?this.scoreChecer("x"):this.scoreChecer("o")),this.state.fieldArray.every((function(e){return 0!==e}))&&this.setState({disabled:!0}))}},{key:"render",value:function(){var e=this,t=this.state,r=t.fieldArray,a=t.firstPlayerScore,n=t.secondPlayerScore,i=this.props,s=i.firstPlayerName,c=i.secondPlayerName;return Object(m.jsxs)("div",{className:"Field",children:[Object(m.jsx)("div",{className:"Field-container winner".concat(this.state.winnerLine),children:r.map((function(t,r){return Object(m.jsxs)("div",{onClick:function(){return!e.state.disabled&&e.drowAtribure(r)},className:"Field__block",children:[1===t&&Object(m.jsx)(f,{}),2===t&&Object(m.jsx)(h,{})]},r)}))}),Object(m.jsxs)("div",{className:"nav-info-container",children:[Object(m.jsx)(j,{firstPlayerScore:a,secondPlayerScore:n,firstPlayerName:s,secondPlayerName:c}),this.state.disabled&&Object(m.jsxs)("div",{className:"button-container",children:[Object(m.jsx)("button",{type:"button",onClick:function(){return e.newGame()},className:"button-nav button",children:"New game"}),Object(m.jsx)("button",{type:"button",onClick:function(){return e.clearField()},className:"button-nav button",children:"New round"})]})]})]})}}]),r}(n.a.Component)),p=r(11),N=(r(22),function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(c.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={userFName:"",userSName:"",isFNameValid:!0,isSNameValid:!0},e.inputHandler=function(t){var r=t.target,a=r.name,n=r.value;"userFName"===a&&(n.trim().length===n.length?e.setState({isFNameValid:!0}):e.setState({isFNameValid:!1})),"userSName"===a&&(n.trim().length===n.length?e.setState({isSNameValid:!0}):e.setState({isSNameValid:!1})),e.setState(Object(p.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault();var r=e.state,a=r.userFName,n=r.userSName;return a&&n&&e.props.onLogin(a,n),!0},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state,t=e.userFName,r=e.userSName;return Object(m.jsx)("div",{className:"Login",children:Object(m.jsxs)("form",{className:"Login__form",onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{className:"Login__input-container",children:[Object(m.jsx)("div",{className:"Login__lable",children:"Type the name of the first player:"}),Object(m.jsx)("input",{type:"text",name:"userFName",className:this.state.isFNameValid?"Login__input":"Login__input noValid",value:t,onChange:this.inputHandler,autoComplete:"off",required:!0})]}),Object(m.jsxs)("div",{className:"Login__input-container",children:[Object(m.jsx)("div",{className:"Login__lable",children:"Type the name of the second player:"}),Object(m.jsx)("input",{type:"text",name:"userSName",className:this.state.isSNameValid?"Login__input":"Login__input noValid",value:r,onChange:this.inputHandler,autoComplete:"off",required:!0})]}),Object(m.jsx)("button",{type:"submit",className:"Login__button button",children:Object(m.jsx)("span",{children:"Start the game"})})]})})}}]),r}(n.a.Component)),v=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(c.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={firstPlayerName:"",secondPlayerName:"",loggedIn:!1},e.login=function(t,r){e.setState({firstPlayerName:t,secondPlayerName:r,loggedIn:!0})},e.newGame=function(){e.setState({firstPlayerName:"",secondPlayerName:"",loggedIn:!1})},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state,t=e.loggedIn,r=e.firstPlayerName,a=e.secondPlayerName;return Object(m.jsx)("div",{className:"Aplication",children:t?Object(m.jsx)(y,{firstPlayerName:r,secondPlayerName:a,newGame:this.newGame}):Object(m.jsx)(N,{onLogin:this.login})})}}]),r}(n.a.Component);s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.794efcba.chunk.js.map