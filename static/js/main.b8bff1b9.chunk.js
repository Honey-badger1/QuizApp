(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(5),o=n.n(r),c=(n(15),n(1)),i=n(2),l=n(9),u=n(7),m=(n(16),function(e){var t=e.classNames,n=e.closeModal;return s.a.createElement("div",{className:t},s.a.createElement("h1",null,"Do you want to start the Quiz?"),s.a.createElement("button",{onClick:n},"Yes"))}),f=n(3),p=n.n(f),h=n(6),d=function(){function e(){var t=this;Object(c.a)(this,e),this.GetInform=Object(h.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch +"+", received ".concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)}))),this._apiBase="https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple"}return Object(i.a)(e,[{key:"getQuestion",value:function(){return this.GetInform()}}]),e}(),v=n(8),w=function(e){var t=e.question,n=e.id,r=e.incorrect_answers,o=e.selected,c=e.classn;n&&(c="");var i=Object(a.useState)(r),l=Object(v.a)(i,2),u=(l[0],l[1]);return s.a.createElement("div",{key:n,className:c},s.a.createElement("h2",null,t),s.a.createElement("ul",null,r.filter((function(e,t){return r.indexOf(e)==t})).map((function(e,t){return s.a.createElement("li",null," ",s.a.createElement("button",{key:t,className:"answerBtn",onClick:function(){u(),o(e)}},e)," ")}))))},k=function(e){var t=e.playAgain,n=e.classNames;return s.a.createElement("div",{className:n},s.a.createElement("button",{className:"playBtn",onClick:t}," Play Again "))},E=(n(18),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).GetInform=new d,a.askQuestion=function(){a.GetInform.getQuestion().then((function(e){a.setState({questionBank:e.results})}))},a.cons=function(){console.log(a.state.questionBank)},a.compareAnswer=function(e,t){e===t&&a.setState({score:a.state.score+1}),a.setState({responses:a.state.responses<10?a.state.responses+1:5})},a.playAgain=function(){a.askQuestion(),a.setState({score:0,responses:0})},a.closeModal=function(){a.setState({isClose:!0})},a.state={questionBank:[],score:0,responses:0,isClose:!1},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.askQuestion()}},{key:"render",value:function(){for(var e=this,t=this.state,n=t.questionBank,a=t.isClose,r=t.score,o=t.responses,c=0;c<n.length;c++)n[c].id=c;var i="form-start",l="app";a&&(i+=" isClose",l+=" show");n.map((function(e){e.incorrect_answers=e.incorrect_answers.concat(e.correct_answer)}));return s.a.createElement(s.a.Fragment,null,s.a.createElement(m,{classNames:i,closeModal:this.closeModal}),s.a.createElement("div",{className:l},s.a.createElement("h1",null,"Quiz"),s.a.createElement("div",{className:"score"}," Your score is ",r," / ",n.length),n.map((function(t){var n=t.question,a=t.incorrect_answers,r=t.correct_answer,c=t.id;return s.a.createElement(w,{question:n,incorrect_answers:a,key:c,selected:function(t){return e.compareAnswer(t,r)},classn:c==o?"":"isClose"})})),s.a.createElement(k,{playAgain:this.playAgain,classNames:o==n.length?"":"isClose"})))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.Fragment,null,s.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.b8bff1b9.chunk.js.map