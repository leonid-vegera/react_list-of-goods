(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),o=n(6),r=n.n(o),c=n(1),l=n(2),i=n(4),u=n(3),h=(n(12),function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={isReversed:!1,sortBy:""},t.reset=function(){t.setState({isReversed:!1,sortBy:""})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByAlphabet=function(){t.setState({sortBy:"alphabet"})},t.sortByLength=function(){t.setState({sortBy:"length"})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.goods,e=this.state,n=e.isReversed,a=e.sortBy,o=t.concat();return o.sort((function(t,e){switch(a){case"alphabet":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),n&&o.reverse(),s.a.createElement("div",{className:"field"},s.a.createElement("button",{className:"button",type:"button",onClick:this.reverse},"Reverse"),s.a.createElement("button",{className:"button",type:"button",onClick:this.sortByAlphabet},"Alphabet"),s.a.createElement("button",{className:"button",type:"button",onClick:this.reset},"Reset"),s.a.createElement("button",{className:"button",type:"button",onClick:this.sortByLength},"Length"),s.a.createElement("h1",null,"Goods"),s.a.createElement("ul",{className:"goods"},o.map((function(t){return s.a.createElement("li",{key:t,className:"list"},t)}))))}}]),n}(s.a.Component)),p=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={showGoodsList:!1},t.toShowList=function(){t.setState({showGoodsList:!0})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.showGoodsList;return s.a.createElement("div",{className:"App"},t?s.a.createElement(h,{goods:p}):s.a.createElement("button",{className:"button",type:"button",onClick:this.toShowList},"Start"))}}]),n}(s.a.Component);r.a.render(s.a.createElement(b,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.6eaa79d9.chunk.js.map