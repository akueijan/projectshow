"use strict";var game_view=new Vue({el:"#app",data:{game:{},loading:!1,invoToken:"",gToken:"",fbData:{fbtoken:"",fbId:"",fbName:"",fbPic:"",mb_id:""},gamePage:"fblogin",ticket:"",gcode:0,top100Arr:[],person:{id:0,img:"",name:"",score:0},mobile:"",agree:!1,fbslink:"",start_date:"",mode_status:""},methods:{fblogin:function(){var o=this;FB.login(function(t){"connected"===t.status&&(o.fbData.fbtoken=t.authResponse.accessToken,o.fbData.fbId=t.authResponse.userID,FB.api("/me","GET",{fields:"id,name,picture"},function(e){console.log(e),o.person.name=e.name,o.person.img="http://graph.facebook.com/"+e.id+"/picture?width=140&height=140",o.popup=!0,o.popPage="gameload",o.gamePage="game",initGame(t)}))})},fbRegister:function(){var e=this;e.GameToken().then(function(){e.register()})},sendFb:function(){var e=this;e.GameToken().then(function(){e.fbshare()})},getTop100:function(){var t=this;t.GameToken().then(function(){t.top100().then(function(){for(var e=0;e<t.top100Arr.length;e++)t.top100Arr[e].is_me&&(t.person.id=t.top100Arr[e].seq,t.person.img=t.top100Arr[e].pic_url,t.person.name=t.top100Arr[e].fb_name,t.person.score=t.top100Arr[e].score,100<t.top100Arr[e].seq&&(t.person.id="未進榜"))})})},gameagain:function(){window.location="./game.html"},lottery:function(){var e=this;if(!e.loading){e.loading=!0;if(""==e.mobile||!e.mobile.match(/^09[0-9]{8}$/))return alert("請輸入手機正確格式"),void(e.loading=!1);if(!e.agree)return alert("請勾選我已詳閱"),void(e.loading=!1);e.popup=!0,e.popPage="lotterySuc",e.loading=!1}},fbLink:function(){var e=this;e.sendFb();var t=e.fbslink;return e.gamePage="lottery",window.ActiveXObject||"ActiveXObject"in window?window.open("https://www.facebook.com/sharer/sharer.php?u="+t):window.open("https://www.facebook.com/sharer/sharer.php?u="+t+"&hashtag=%23PowerBOMB人生不斷電馬拉松"),!1}},computed:{},watch:{},mounted:function(){var e,t,o,n,a,i=this;setTimeout(function(){i.getIe()},1e3),$(".nav").hide(),$(".footer").hide(),i.popup=!0,i.popPage="gameload",i.gamePage="game",initGame("0000"),window.fbAsyncInit=function(){FB.init({appId:"2114580888842549",status:!0,cookie:!0,xfbml:!1,version:"v5.0"})},e=document,t="script",o="facebook-jssdk",a=e.getElementsByTagName(t)[0],e.getElementById(o)||((n=e.createElement(t)).id=o,n.src="https://connect.facebook.net/en_US/sdk.js",a.parentNode.insertBefore(n,a))}});function initGame(e){game_view.game=new Game({memberData:e})}