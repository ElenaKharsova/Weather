!function(){"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var n;t.g.importScripts&&(n=t.g.location+"");var c=t.g.document;if(!n&&c&&(c.currentScript&&(n=c.currentScript.src),!n)){var e=c.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n}();const n=t.p+"static/ce44d683213bfc5bece2.svg",c=t.p+"static/b8af4360f0795bb64a3b.png";document.querySelector("#weatherApp").innerHTML='\n  <header class = "header">\n    <div class = "location">\n      <img src = '.concat(n,' alt ="images location" \n        class = "img-location"/> \n      <p>Your location</p>\n    </div>\n    <div class = "block data">\n      <img src = ').concat(c,' alt ="images weather" \n        class = "img-weather"/> \n      <p class = "temperature" >31</p>\n    </div>\n    <p class = "block">Mapa</p>\n  </header>\n  <nav class = "block cities">\n    <div>\n      <input></input>\n      <button>Enter</button>\n    </div>\n    <ul>\n      <li>First city</li>\n    </ul>\n  </nav>\n  ')}();
//# sourceMappingURL=main-0c99256eae5446aee275.js.map