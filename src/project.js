require=function t(e,i,n){function o(c,s){if(!i[c]){if(!e[c]){var p="function"==typeof require&&require;if(!s&&p)return p(c,!0);if(r)return r(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var a=i[c]={exports:{}};e[c][0].call(a.exports,function(t){var i=e[c][1][t];return o(i||t)},a,a.exports,t,e,i,n)}return i[c].exports}for(var r="function"==typeof require&&require,c=0;c<n.length;c++)o(n[c]);return o}({cameraScript:[function(t,e,i){"use strict";cc._RF.push(e,"20fc3KfprFCY67Tuk9wARFG","cameraScript"),cc.Class({extends:cc.Component,properties:{target:cc.Node},start:function(){},update:function(t){this.node.setPosition(this.node.getPositionX(),cc.clampf(this.target.getPositionY()+this.node.getPositionY(),-30,60))}}),cc._RF.pop()},{}],enemyScript:[function(t,e,i){"use strict";cc._RF.push(e,"e634fhLKOlOOZbzz9ubt92M","enemyScript"),cc.Class({extends:cc.Component,properties:{},start:function(){},onBeginContact:function(t,e,i){this.node.destroy()}}),cc._RF.pop()},{}],gameController:[function(t,e,i){"use strict";cc._RF.push(e,"280c3rsZJJKnZ9RqbALVwtK","gameController"),cc.Class({extends:cc.Component,properties:{flipperLeft:cc.Node,flipperRight:cc.Node,ball:cc.Node},onLoad:function(){cc.view.enableAntiAlias(!1),cc.director.getPhysicsManager().enabled=!0,this.flipperLeft.rotation=20,this.flipperRight.rotation=-20,cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,function(){this.flipperLeft.rotation=-20,this.flipperRight.rotation=20},this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,function(){this.flipperLeft.rotation=20,this.flipperRight.rotation=-20},this),this.node.on(cc.Node.EventType.TOUCH_START,function(){this.flipperLeft.rotation=-20,this.flipperRight.rotation=20},this),this.node.on(cc.Node.EventType.TOUCH_END,function(){this.flipperLeft.rotation=20,this.flipperRight.rotation=-20},this)},update:function(){this.ball.getPositionY()<-250&&this.ball.setPosition(-40,0)}}),cc._RF.pop()},{}]},{},["cameraScript","enemyScript","gameController"]);