"use strict";var production="false"===$("#appjs").data("mode"),friendo_url=$("#appjs").data("site"),device=deviceCheck();Vue.config.devtools=!production,Vue.config.debug=!production,Vue.config.silent=production;var md=new MobileDetect(window.navigator.userAgent),isMobile=null!=md.phone()||null!=md.tablet()||window.innerWidth<=768,iPhone=md.is("iPhone"),Android=md.is("AndroidOS"),tag=document.createElement("script");function findGetParameter(t){var o,n=null;return location.search.substr(1).split("&").forEach(function(e){(o=e.split("="))[0]===t&&(n=decodeURIComponent(o[1]))}),n}function checkCookie(t){var o,n=null;return document.cookie.split(";").forEach(function(e){" "==e.charAt(0)&&(e=e.substring(1)),(o=e.split("="))[0]===t&&(n=o[1])}),n}function deviceCheck(){var e={},t=new MobileDetect(window.navigator.userAgent);return t.match(/android/i)?(e.os="android",e.version=t.version("android")):t.match(/(iphone|ipad|ipod);?/i)?(e.os="ios",e.version=t.version("iOS")):(e.os="pc",e.version=t.version("Chrome")),e}$(function(){console.log("v1.0"),console.log(device),$(".nav").menu()}),Vue.mixin({data:function(){return{status:"",startDate:"",endDate:"",projectStatus:null,errorMsg:"",envMode:production?"Started":"Testing",loading:!1,mainToken:"",transPage:!1,popup:!1,poPage:"",awarditem:!1,playon:!1,lotcun:!1,winaward:!1,getAward:"",shareLink:"",reCaptcha:"",ballColor:["./images/ball-b.png","./images/ball-g.png","./images/ball-r.png"],lotBall:"",fbData:{fbName:"",fbtoken:"",fbId:"",fbPic:""},userlottery:{invited:0,total:0,used:0,available:0},isNew:!0,fbLink:"https://www.spring-trees.com/",awardUrl:"",loseWordarr:["殘念...確認過眼神<br/>你不是中獎的人...","哎呀...沒中<br/>莫非是水逆又來!?<br/>快向春神許願再抽一次~","Hen遺憾..這次沒中獎<br/>根據研究顯示多邀請朋友賞櫻<br/>就有更多抽獎機會~","不可能~~滷蛋都沒這麼魯過<br/>再抽一次試試看~","你知道嗎? 每60秒就有1分鐘過去<br/>每抽一次就有人中獎有人沒中<br/>再抽一次試試唄?"],loseWord:""}},computed:{},watch:{errorMsg:function(){$("body").toggleClass("_freeze")},popup:function(e){1==e?$("body").addClass("_freeze"):$("body").removeClass("_freeze")}},methods:{gaEvant:function(e){dataLayer.push({event:e}),console.log("ga:",e)},server_busy:function(){var e=this;e.errorMsg="系統忙碌中，請稍後在試!",e.loading=!1,e.errorCou=6},setCookie:function(e,t,o){var n=new Date;n.setTime(n.getTime()+1e3*o);n="expires="+n.toUTCString();document.cookie=e+"="+t+";"+n+";"},logger:function(e,t,o){production&&_LTracker.push({level:["ERROR","DEBUG","WARNING","INFO","ALL"][e],content:JSON.stringify(t),path:window.location.href,tag:o||null,device:device,timestamp:Date.now()})},checkOnline:function(){navigator.onLine||alert("Internet 連線已斷開，請確認您的網路狀態。")},scrollTo:function(e){$("html,body").animate({scrollTop:$(e).offset().top-this.navHeight},500)},getToken:function(){var t=this;return $.ajax({url:"".concat(friendo_url,"auth/login?campaignId=78"),headers:{webtoken:"9bwWRN4gbFWRyIPfRgPbFtiVPRIuon3jSZ7QfOPEVXo="},method:"GET",dataType:"json"}).done(function(e){t.mainToken=e.token,t.startDate=e.startDate,t.endDate=e.endDate,t.projectStatus=e.projectStatus})},grecaptcha:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(o){var n=this;return new Promise(function(t,e){grecaptcha.execute("6Ldcxt8UAAAAAE7pAW_QhpvYaP3QB2hLsHaFStaA",{action:o}).then(function(e){n.reCaptcha=e,t()},function(){alert("Google驗證失敗，請再次嘗試\n如無法排除此問題，建議重新整理此頁面"),e()})})}),popClose:function(){this.popup=!1,this.poPage=""},noteOpen:function(){this.popup=!0,this.poPage="note"},lottery:function(){var e=this;e.playon=!0;var t=Math.floor(Math.random()*e.ballColor.length);e.lotBall=e.ballColor[t];t=new TimelineMax({onComplete:function(){e.getToken().then(function(){e.raffleOff()})}});t.set(".ball",{x:10,y:-10}),t.set(".handle",{rotation:90}),t.set(".handle",{rotation:180},"+=0.3"),t.set(".handle",{rotation:270},"+=0.3"),t.set(".handle",{rotation:360},"+=0.3"),t.to(".ball",.6,{x:30,y:90}),t.to(".ball",.2,{x:30,y:85}),t.to(".ball",.2,{x:40,y:90}),t.to(".ball",.6,{x:60,y:90,rotation:45})},userGift:function(){this.popup=!0,this.poPage="nodata"},userRecord:function(){this.popup=!0,this.poPage="nodata"},fbLogin:function(){this.popup=!0,this.poPage="loading",window.location.href="./game.html"},gameRecord:function(){var e=this;e.getToken().then(function(){e.getRecord()})},getWinRec:function(){var e=this;e.getToken().then(function(){e.getWinningRecord()})},invfriend:function(){this.poPage="yourlink"},fbShare:function(){var e=Date.now(),t=this.fbLink;return window.open("https://www.facebook.com/sharer/sharer.php?u="+t+"?v"+e+"&hashtag=%23Visa線上賞櫻團"),!1},tofbShare:function(){this.fbShare(),this.poPage="suc"},tolineShare:function(){var e=encodeURIComponent("".concat(this.fbLink));window.open("http://line.naver.jp/R/msg/text/?全台最夯的線上賞櫻團開團啦!%0D%0A今年讓我們一起在Visa線上賞櫻%0D%0A還有機會抽到最高百元超商購物金～!%0D%0A".concat(e),"_blank"),this.poPage="suc"},checkBrowse:function(){},userLogin:function(){var t=this,e=new FormData;return e.append("fbToken",t.fbData.fbtoken),e.append("inviter",t.inviter),$.ajax({url:"".concat(friendo_url,"VISASakuraMatsuri/login"),headers:{Authorization:"Bearer "+t.mainToken},data:e,method:"POST",processData:!1,contentType:!1}).done(function(e){200===e.code&&(t.isInvited=e.data.isInvited,t.inviter=e.data.memberCode,t.isNew=e.data.isNew,t.fbLink=e.data.sharingUrl,window.location.href="./game.html")})},getWinningRecord:function(){var t=this;t.popup=!0,t.poPage="loading";var e=new FormData;return e.append("fbToken",t.fbData.fbtoken),$.ajax({url:"".concat(friendo_url,"VISASakuraMatsuri/winningRecord"),headers:{Authorization:"Bearer "+t.mainToken},data:e,method:"POST",processData:!1,contentType:!1}).done(function(e){t.popup=!0,t.poPage="ticket",void 0===e?t.awarditem=!1:200===e.code&&(t.awarditem=!0,t.awardUrl=e.data.awards[0].url)})},getRecord:function(){var t=this;t.popup=!0,t.poPage="loading";var e=new FormData;return e.append("fbToken",t.fbData.fbtoken),$.ajax({url:"".concat(friendo_url,"VISASakuraMatsuri/record"),headers:{Authorization:"Bearer "+t.mainToken},data:e,method:"POST",processData:!1,contentType:!1}).done(function(e){200===e.code&&(t.userlottery.invited=e.data.invited,t.userlottery.total=e.data.total,t.userlottery.used=e.data.used,t.userlottery.available=e.data.available,t.popup=!0,t.poPage="lottery",0===t.userlottery.available?t.lotcun=!1:t.lotcun=!0)})},raffleOff:function(){var o=this,e=new FormData;return e.append("fbToken",o.fbData.fbtoken),$.ajax({url:"".concat(friendo_url,"VISASakuraMatsuri/raffleOff"),headers:{Authorization:"Bearer "+o.mainToken},data:e,method:"POST",processData:!1,contentType:!1}).done(function(e){var t;o.poPage="result","78coupon0"===e.data.result&&(o.playon=!1,o.winaward=!1,t=Math.floor(Math.random()*o.loseWordarr.length),o.loseWord=o.loseWordarr[t]),"78coupon25"===e.data.result&&(o.playon=!1,o.winaward=!0,o.getAward="超商購物金25元"),"78coupon50"===e.data.result&&(o.playon=!1,o.winaward=!0,o.getAward="超商購物金50元"),"78coupon100"===e.data.result&&(o.playon=!1,o.winaward=!0,o.getAward="超商購物金100元")})}},mounted:function(){}});