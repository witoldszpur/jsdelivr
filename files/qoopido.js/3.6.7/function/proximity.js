/*! Qoopido.js library 3.6.7, 2015-07-08 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(t){window.qoopido.register("function/proximity",t)}(function(t,a,o,r,e,y,x){"use strict";return function(t,a){var o=!1;return t="object"==typeof t&&null!==t?t:{x:x,y:x},a="object"==typeof a&&null!==a?a:{x:x,y:x},t.x!==x&&t.y!==x&&a.x!==x&&a.y!==x&&(t.x=parseFloat(t.x),t.y=parseFloat(t.y),a.x=parseFloat(a.x),a.y=parseFloat(a.y),o={x:parseFloat(Math.abs(a.x-t.x)),y:parseFloat(Math.abs(a.y-t.y)),total:parseFloat(Math.sqrt(Math.pow(a.x-t.x,2)+Math.pow(a.y-t.y,2)))}),o}});