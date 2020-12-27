//third_party/javascript/dscc/version_14bb54d/dscc.min.js
/**
 * @license
 *  Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("dscc",[],t):"object"==typeof exports?exports.dscc=t():e.dscc=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/index.ts")}({"./node_modules/querystringify/index.js":function(e,t,n){"use strict";var o=Object.prototype.hasOwnProperty;function r(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}t.stringify=function(e,t){t=t||"";var n,r,R=[];for(r in"string"!=typeof t&&(t="?"),e)if(o.call(e,r)){if((n=e[r])||null!=n&&!isNaN(n)||(n=""),r=encodeURIComponent(r),n=encodeURIComponent(n),null===r||null===n)continue;R.push(r+"="+n)}return R.length?t+R.join("&"):""},t.parse=function(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,o={};t=n.exec(e);){var R=r(t[1]),C=r(t[2]);null===R||null===C||R in o||(o[R]=C)}return o}},"./node_modules/requires-port/index.js":function(e,t,n){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},"./node_modules/url-parse/index.js":function(e,t,n){"use strict";(function(t){var o=n("./node_modules/requires-port/index.js"),r=n("./node_modules/querystringify/index.js"),R=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,C=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,s=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function i(e){return(e||"").toString().replace(s,"")}var a=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],E={hash:1,query:1};function u(e){var n,o=("undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).location||{},r={},C=typeof(e=e||o);if("blob:"===e.protocol)r=new N(unescape(e.pathname),{});else if("string"==C)for(n in r=new N(e,{}),E)delete r[n];else if("object"==C){for(n in e)n in E||(r[n]=e[n]);void 0===r.slashes&&(r.slashes=R.test(e.href))}return r}function c(e){e=i(e);var t=C.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function N(e,t,n){if(e=i(e),!(this instanceof N))return new N(e,t,n);var R,C,s,E,f,_,p=a.slice(),l=typeof t,U=this,Y=0;for("object"!=l&&"string"!=l&&(n=t,t=null),n&&"function"!=typeof n&&(n=r.parse),t=u(t),R=!(C=c(e||"")).protocol&&!C.slashes,U.slashes=C.slashes||R&&t.slashes,U.protocol=C.protocol||t.protocol||"",e=C.rest,C.slashes||(p[3]=[/(.*)/,"pathname"]);Y<p.length;Y++)"function"!=typeof(E=p[Y])?(s=E[0],_=E[1],s!=s?U[_]=e:"string"==typeof s?~(f=e.indexOf(s))&&(e="number"==typeof E[2]?(U[_]=e.slice(0,f),e.slice(f+E[2])):(U[_]=e.slice(f),e.slice(0,f))):(f=s.exec(e))&&(U[_]=f[1],e=e.slice(0,f.index)),U[_]=U[_]||R&&E[3]&&t[_]||"",E[4]&&(U[_]=U[_].toLowerCase())):e=E(e);n&&(U.query=n(U.query)),R&&t.slashes&&"/"!==U.pathname.charAt(0)&&(""!==U.pathname||""!==t.pathname)&&(U.pathname=function(e,t){if(""===e)return t;for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=n.length,r=n[o-1],R=!1,C=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),C++):C&&(0===o&&(R=!0),n.splice(o,1),C--);return R&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}(U.pathname,t.pathname)),o(U.port,U.protocol)||(U.host=U.hostname,U.port=""),U.username=U.password="",U.auth&&(E=U.auth.split(":"),U.username=E[0]||"",U.password=E[1]||""),U.origin=U.protocol&&U.host&&"file:"!==U.protocol?U.protocol+"//"+U.host:"null",U.href=U.toString()}N.prototype={set:function(e,t,n){var R=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||r.parse)(t)),R[e]=t;break;case"port":R[e]=t,o(t,R.protocol)?t&&(R.host=R.hostname+":"+t):(R.host=R.hostname,R[e]="");break;case"hostname":R[e]=t,R.port&&(t+=":"+R.port),R.host=t;break;case"host":R[e]=t,/:\d+$/.test(t)?(t=t.split(":"),R.port=t.pop(),R.hostname=t.join(":")):(R.hostname=t,R.port="");break;case"protocol":R.protocol=t.toLowerCase(),R.slashes=!n;break;case"pathname":case"hash":if(t){var C="pathname"===e?"/":"#";R[e]=t.charAt(0)!==C?C+t:t}else R[e]=t;break;default:R[e]=t}for(var s=0;s<a.length;s++){var i=a[s];i[4]&&(R[i[1]]=R[i[1]].toLowerCase())}return R.origin=R.protocol&&R.host&&"file:"!==R.protocol?R.protocol+"//"+R.host:"null",R.href=R.toString(),R},toString:function(e){e&&"function"==typeof e||(e=r.stringify);var t,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var R=o+(n.slashes?"//":"");return n.username&&(R+=n.username,n.password&&(R+=":"+n.password),R+="@"),R+=n.host+n.pathname,(t="object"==typeof n.query?e(n.query):n.query)&&(R+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(R+=n.hash),R}},N.extractProtocol=c,N.location=u,N.trimLeft=i,N.qs=r,e.exports=N}).call(this,n("./node_modules/webpack/buildin/global.js"))},"./node_modules/webpack/buildin/global.js":function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"./src/index.ts":function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/url-parse/index.js"),R=n("./src/types.ts");!function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n("./src/types.ts")),t.getWidth=function(){return document.body.clientWidth},t.getHeight=function(){return document.documentElement.clientHeight},t.getComponentId=function(){var e=r(window.location.href,!0).query;if(e.dscId)return e.dscId;throw new Error("dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new")},t.parseImage=function(e){var t=e.split("  "),n=t[0],o=t[1];return{altText:t[2],originalUrl:n,proxiedUrl:o}};var C=function(e){return e.type===R.ConfigDataElementType.DIMENSION||e.type===R.ConfigDataElementType.METRIC},s=function(e){return e===R.ConfigDataElementType.DIMENSION?-1:1},i=function(e){var t=[];e.config.data.forEach(function(e){e.elements.forEach(function(e){t.push(e)})});var n=function(e,t){return e.map(function(e,t){return{item:e,index:t}}).sort(function(e,t){return function(e,t){return s(e.type)-s(t.type)}(e.item,t.item)||e.index-t.index}).map(function(e){return e.item})}(t.filter(C)),o=[];return n.forEach(function(e){e.value||(e.value=Array(0)),e.value.forEach(function(){return o.push(e.id)})}),o};t.fieldsByConfigId=function(e){var t=function(e){return e.fields.reduce(function(e,t){return e[t.id]=t,e},{})}(e),n={};return e.config.data.forEach(function(e){e.elements.forEach(function(e){n[e.id]=e.value.map(function(e){return t[e]})})}),n};var a=function(e){var t={};return(e.config.style||[]).forEach(function(e){e.elements.forEach(function(e){if(void 0!==t[e.id])throw new Error("styleIds must be unique. Your styleId: '"+e.id+"' is used more than once.");t[e.id]={value:e.value,defaultValue:e.defaultValue}})},{}),t},E=function(e){return e.config.themeStyle},u=function(e){switch(e){case R.DSInteractionType.FILTER:return R.InteractionType.FILTER}},c=function(e){var t=e.config.interactions;return void 0===t?{}:t.reduce(function(e,t){var n=t.supportedActions.map(u),o={type:u(t.value.type),data:t.value.data};return e[t.id]={value:o,supportedActions:n},e},{})};t.tableTransform=function(e){return{tables:function(e){var n,r=t.fieldsByConfigId(e),C=i(e),s={},a=C.map(function(e){void 0===s[e]?s[e]=0:s[e]++;var t=s[e],n=r[e][t];return o({},n,{configId:e})}),E=((n={})[R.TableType.DEFAULT]={headers:[],rows:[]},n);return e.dataResponse.tables.forEach(function(e){E[e.id]={headers:a,rows:e.rows}}),E}(e),fields:t.fieldsByConfigId(e),style:a(e),theme:E(e),interactions:c(e)}},t.objectTransform=function(e){return{tables:function(e){var t,n=i(e),o=((t={})[R.TableType.DEFAULT]=[],t);return e.dataResponse.tables.forEach(function(e){var t=e.rows.map(function(e){return function(t){var n={};return function(e,t){return e.length<t.length?e.map(function(e,n){return[e,t[n]]}):t.map(function(t,n){return[e[n],t]})}(t,e).forEach(function(e){var t=e[0],o=e[1];void 0===n[o]&&(n[o]=[]),n[o].push(t)},{}),n}}(n));o[e.id]=t}),o}(e),fields:t.fieldsByConfigId(e),style:a(e),theme:E(e),interactions:c(e)}},t.subscribeToData=function(e,n){if(n.transform!==t.tableTransform&&n.transform!==t.objectTransform)throw new Error("Only the built in transform functions are supported.");var o=function(t){t.data.type===R.MessageType.RENDER?e(n.transform(t.data)):console.error("MessageType: "+t.data.type+" is not supported by this version of the library.")};window.addEventListener("message",o);var r={componentId:t.getComponentId(),type:R.ToDSMessageType.VIZ_READY};return window.parent.postMessage(r,"*"),function(){return window.removeEventListener("message",o)}},t.sendInteraction=function(e,n,o){var r=t.getComponentId(),C={type:R.ToDSMessageType.INTERACTION,id:e,data:o,componentId:r};window.parent.postMessage(C,"*")},t.clearInteraction=function(e,n){t.sendInteraction(e,n,void 0)}},"./src/types.ts":function(e,t,n){"use strict";var o,r,R,C,s,i;Object.defineProperty(t,"__esModule",{value:!0}),(o=t.ConceptType||(t.ConceptType={})).METRIC="METRIC",o.DIMENSION="DIMENSION",(t.MessageType||(t.MessageType={})).RENDER="RENDER",(r=t.FieldType||(t.FieldType={})).YEAR="YEAR",r.YEAR_QUARTER="YEAR_QUARTER",r.YEAR_MONTH="YEAR_MONTH",r.YEAR_WEEK="YEAR_WEEK",r.YEAR_MONTH_DAY="YEAR_MONTH_DAY",r.YEAR_MONTH_DAY_HOUR="YEAR_MONTH_DAY_HOUR",r.QUARTER="QUARTER",r.MONTH="MONTH",r.WEEK="WEEK",r.MONTH_DAY="MONTH_DAY",r.DAY_OF_WEEK="DAY_OF_WEEK",r.DAY="DAY",r.HOUR="HOUR",r.MINUTE="MINUTE",r.DURATION="DURATION",r.COUNTRY="COUNTRY",r.COUNTRY_CODE="COUNTRY_CODE",r.CONTINENT="CONTINENT",r.CONTINENT_CODE="CONTINENT_CODE",r.SUB_CONTINENT="SUB_CONTINENT",r.SUB_CONTINENT_CODE="SUB_CONTINENT_CODE",r.REGION="REGION",r.REGION_CODE="REGION_CODE",r.CITY="CITY",r.CITY_CODE="CITY_CODE",r.METRO_CODE="METRO_CODE",r.LATITUDE_LONGITUDE="LATITUDE_LONGITUDE",r.NUMBER="NUMBER",r.PERCENT="PERCENT",r.TEXT="TEXT",r.BOOLEAN="BOOLEAN",r.URL="URL",r.IMAGE="IMAGE",r.CURRENCY_AED="CURRENCY_AED",r.CURRENCY_ALL="CURRENCY_ALL",r.CURRENCY_ARS="CURRENCY_ARS",r.CURRENCY_AUD="CURRENCY_AUD",r.CURRENCY_BDT="CURRENCY_BDT",r.CURRENCY_BGN="CURRENCY_BGN",r.CURRENCY_BOB="CURRENCY_BOB",r.CURRENCY_BRL="CURRENCY_BRL",r.CURRENCY_CAD="CURRENCY_CAD",r.CURRENCY_CDF="CURRENCY_CDF",r.CURRENCY_CHF="CURRENCY_CHF",r.CURRENCY_CLP="CURRENCY_CLP",r.CURRENCY_CNY="CURRENCY_CNY",r.CURRENCY_COP="CURRENCY_COP",r.CURRENCY_CRC="CURRENCY_CRC",r.CURRENCY_CZK="CURRENCY_CZK",r.CURRENCY_DKK="CURRENCY_DKK",r.CURRENCY_DOP="CURRENCY_DOP",r.CURRENCY_EGP="CURRENCY_EGP",r.CURRENCY_ETB="CURRENCY_ETB",r.CURRENCY_EUR="CURRENCY_EUR",r.CURRENCY_GBP="CURRENCY_GBP",r.CURRENCY_HKD="CURRENCY_HKD",r.CURRENCY_HRK="CURRENCY_HRK",r.CURRENCY_HUF="CURRENCY_HUF",r.CURRENCY_IDR="CURRENCY_IDR",r.CURRENCY_ILS="CURRENCY_ILS",r.CURRENCY_INR="CURRENCY_INR",r.CURRENCY_IRR="CURRENCY_IRR",r.CURRENCY_ISK="CURRENCY_ISK",r.CURRENCY_JMD="CURRENCY_JMD",r.CURRENCY_JPY="CURRENCY_JPY",r.CURRENCY_KRW="CURRENCY_KRW",r.CURRENCY_LKR="CURRENCY_LKR",r.CURRENCY_LTL="CURRENCY_LTL",r.CURRENCY_MNT="CURRENCY_MNT",r.CURRENCY_MVR="CURRENCY_MVR",r.CURRENCY_MXN="CURRENCY_MXN",r.CURRENCY_MYR="CURRENCY_MYR",r.CURRENCY_NOK="CURRENCY_NOK",r.CURRENCY_NZD="CURRENCY_NZD",r.CURRENCY_PAB="CURRENCY_PAB",r.CURRENCY_PEN="CURRENCY_PEN",r.CURRENCY_PHP="CURRENCY_PHP",r.CURRENCY_PKR="CURRENCY_PKR",r.CURRENCY_PLN="CURRENCY_PLN",r.CURRENCY_RON="CURRENCY_RON",r.CURRENCY_RSD="CURRENCY_RSD",r.CURRENCY_RUB="CURRENCY_RUB",r.CURRENCY_SAR="CURRENCY_SAR",r.CURRENCY_SEK="CURRENCY_SEK",r.CURRENCY_SGD="CURRENCY_SGD",r.CURRENCY_THB="CURRENCY_THB",r.CURRENCY_TRY="CURRENCY_TRY",r.CURRENCY_TWD="CURRENCY_TWD",r.CURRENCY_TZS="CURRENCY_TZS",r.CURRENCY_UAH="CURRENCY_UAH",r.CURRENCY_USD="CURRENCY_USD",r.CURRENCY_UYU="CURRENCY_UYU",r.CURRENCY_VEF="CURRENCY_VEF",r.CURRENCY_VND="CURRENCY_VND",r.CURRENCY_YER="CURRENCY_YER",r.CURRENCY_ZAR="CURRENCY_ZAR",(R=t.TableType||(t.TableType={})).DEFAULT="DEFAULT",R.COMPARISON="COMPARISON",R.SUMMARY="SUMMARY",(C=t.ConfigDataElementType||(t.ConfigDataElementType={})).METRIC="METRIC",C.DIMENSION="DIMENSION",C.SORT="SORT",C.MAX_RESULTS="MAX_RESULTS",(s=t.ConfigStyleElementType||(t.ConfigStyleElementType={})).TEXTINPUT="TEXTINPUT",s.SELECT_SINGLE="SELECT_SINGLE",s.CHECKBOX="CHECKBOX",s.FONT_COLOR="FONT_COLOR",s.FONT_SIZE="FONT_SIZE",s.FONT_FAMILY="FONT_FAMILY",s.FILL_COLOR="FILL_COLOR",s.BORDER_COLOR="BORDER_COLOR",s.AXIS_COLOR="AXIS_COLOR",s.GRID_COLOR="GRID_COLOR",s.OPACITY="OPACITY",s.LINE_WEIGHT="LINE_WEIGHT",s.LINE_STYLE="LINE_STYLE",s.BORDER_RADIUS="BORDER_RADIUS",s.INTERVAL="INTERVAL",s.SELECT_RADIO="SELECT_RADIO",(t.DSInteractionType||(t.DSInteractionType={})).FILTER="FILTER",(i=t.ToDSMessageType||(t.ToDSMessageType={})).VIZ_READY="vizReady",i.INTERACTION="vizAction",(t.InteractionType||(t.InteractionType={})).FILTER="FILTER"}})});

// The above DS library was modified from the original to resolve a bug which was occuring when new metrics with "min:0" were added to the visualisation config. The fix involved checking for metric values in the config an initialising them to an empty array, as is the default value for metrics.

// LH credits the following author in their source
// https://codepen.io/xgad/post/svg-radial-progress-meters

// Featured Gauge Visualisation
// https://www.gstatic.com/analytics-lego/communityviz/devrel/googlecharts/gauge/gauge.js

const gaugeDivId = 'gauge_div';

const progressBackgroundCircleId = "progress__background";
const progressArcCircleId = "progress__arc";
const progressValueDivId = "progress__value";

const SVG_SIZE = 240;

const ranges = {
    LOW: 'low',
    MIDDLE: 'mid',
    HIGH: 'high',
    DEFAULT: 'default'
};

/**
 * Draws the chart viz.
 * The data config for the viz only allows for 1 metric. JSON options take
 * precedence over UI style options.
 *
 * @param {!Object} vizMsg The post message from Data Studio that contains the
 * the user selected metric, style options and the data to render.
 */
function drawChart(vizMsg) {

    clearChartDiv();

    const metricType = vizMsg.fields.metricValue[0].type;
    const metricValue = getMetricValueFromTable(vizMsg, "metricValue");
    if(!metricValue){
        return;
    }

    const options = getUiOptions(vizMsg);

    drawGauge(metricValue, metricType, options);
}

/**
 * 
 * @param {!Object} vizMsg The post message from Data Studio that contains the
 * the user selected metric, style options and the data to render.
 * @param {!String} metricId The metric id value as listed in the lhGauge.json config.
 */
function getMetricValueFromTable(vizMsg, metricId) {

    let metricValue;

    if (vizMsg.tables.DEFAULT.length > 0 && vizMsg.tables.DEFAULT[0][metricId]) {
        metricValue = Number.parseFloat(vizMsg.tables.DEFAULT[0][metricId][0]);
    } else {
        return undefined;
    }

    if (Number.isNaN(metricValue)) {
        return undefined;
    }

    return metricValue;
}

/**
 * Draws a Google Charts gauge.
 *
 * @param {number} metricValue The value of the metric.
 * @param {!String} metricType The metric type, which affects how it will be formatted.
 * @param {!Object} gaugeOptions The chart options based on user input.
 **/
function drawGauge(metricValue, metricType, gaugeOptions) {

    var gaugeDiv = document.getElementById(gaugeDivId);
    var gaugeDivExists = true && gaugeDiv

    var lineWidth = gaugeOptions['lineThickness']

    if (!gaugeDivExists) {
        gaugeDiv = document.createElement('div');
        gaugeDiv.id = gaugeDivId;
    }

    var progressSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    progressSvg.id = "progress";
    progressSvg.width = SVG_SIZE;
    progressSvg.height = SVG_SIZE;
    progressSvg.setAttribute("viewBox", "0 0 " + (SVG_SIZE/2) + " " + (SVG_SIZE/2));

    var progressBackgroundCircle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    progressBackgroundCircle.id = progressBackgroundCircleId;
    progressBackgroundCircle.setAttribute("cx", (SVG_SIZE/4));
    progressBackgroundCircle.setAttribute("cy", (SVG_SIZE/4));
    progressBackgroundCircle.setAttribute("r", ((SVG_SIZE/4) - (lineWidth/2)));
    progressBackgroundCircle.setAttribute("stroke-width", lineWidth);

    var progressArcCircle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    progressArcCircle.id = progressArcCircleId;
    progressArcCircle.setAttribute("cx", (SVG_SIZE/4));
    progressArcCircle.setAttribute("cy", (SVG_SIZE/4));
    progressArcCircle.setAttribute("r", ((SVG_SIZE/4) - (lineWidth/2)));
    progressArcCircle.setAttribute("stroke-width", lineWidth);

    progressSvg.appendChild(progressBackgroundCircle);
    progressSvg.appendChild(progressArcCircle);

    var progressValueDiv = document.createElement('div');
    progressValueDiv.id = progressValueDivId;
    progressValueDiv.style.fontFamily = gaugeOptions.fontFamily;
    progressValueDiv.style.fontSize = gaugeOptions.fontSize + "px";

    gaugeDiv.appendChild(progressSvg);
    gaugeDiv.appendChild(progressValueDiv);

    if (!gaugeDivExists) {
        document.body.appendChild(gaugeDiv);
    }

    progress(metricValue, metricType, gaugeOptions);
}

/**
 * Sets the gauge to the correct value, updating the colours and progress arc accordingly.
 *
 * @param {!Float} value The current value of the data to display
 * @param {!String} metricType The metric type, which affects how it will be formatted.
 * @param {!Object} gaugeOptions The object containing config values configured by the user.
 */
function progress(value, metricType, gaugeOptions) {

    var progressArc = document.querySelector('#progress__arc');
    var progressValue = document.querySelector('#progress__value');

    var lowFrom = gaugeOptions.lowFrom
    var lowTo = gaugeOptions.lowTo
    var midFrom = gaugeOptions.midFrom
    var midTo = gaugeOptions.midTo
    var highFrom = gaugeOptions.highFrom
    var highTo = gaugeOptions.highTo

    // Line thickness alters required circle radius
    var lineWidth = gaugeOptions['lineThickness']
    var radius = (SVG_SIZE/4) - (lineWidth/2)
    var circumference = 2 * Math.PI * radius;

    // Set progress stroke offset to (0-360) value based on value/max figures.
    var progress = Math.min(((value - gaugeOptions.min) / gaugeOptions.max), 1.0);
    var dashoffset = circumference * (1 - progress);
    progressArc.style.strokeDasharray = circumference;
    progressArc.style.strokeDashoffset = dashoffset;

    // Change guage colours depending on value
    if (value >= lowFrom && value <= lowTo) {
        updateProgressClasses(ranges.LOW, gaugeOptions);
    } else if (value >= midFrom && value <= midTo) {
        updateProgressClasses(ranges.MIDDLE, gaugeOptions);
    } else if (value >= highFrom && value <= highTo) {
        updateProgressClasses(ranges.HIGH, gaugeOptions);
    } else {
        updateProgressClasses(ranges.DEFAULT, gaugeOptions);
    }

    // Set additional style options.
    progressArc.style.setProperty('stroke-linecap', ((gaugeOptions['roundedLineEdge']) ? 'round' : 'butt'));

    progressValue.innerHTML = formatValue(value, metricType, gaugeOptions);

}

/**
 * Sets the guage colour based on the currently enabled section, determined by ranges defined by user.
 *
 * @param {!String} range The name given to each coloured range/section of the gauge.
 */
function updateProgressClasses(range, gaugeOptions) {

    var progressBackground = document.querySelector('#progress__background');
    var progressArc = document.querySelector('#progress__arc');
    var progressValue = document.querySelector('#progress__value');

    var primaryColorKey = range + 'PrimaryColor';
    var secondaryColorKey = range + 'SecondaryColor';

    progressArc.style.stroke = gaugeOptions[primaryColorKey];

    if(gaugeOptions['fillGaugeCenter']) {
        progressBackground.style.fill = gaugeOptions[secondaryColorKey]
    } else {
        progressBackground.style.fill = "rgba(255, 0, 0, 0.0)";
    }

    if(gaugeOptions['fillGaugeOuterRing']) {
        progressBackground.style.stroke = gaugeOptions[secondaryColorKey]
    } else {
        progressBackground.style.stroke = "rgba(255, 0, 0, 0.0)";
    }
   
    if(gaugeOptions['fontMatchColor']) {
        progressValue.style.color = gaugeOptions[primaryColorKey]
    } else {
        progressValue.style.color = gaugeOptions['fontDefaultColor'];
    }
}

/**
 * Clear the div that holds charts and messages.
 */
function clearChartDiv() {
    let div = document.getElementById(gaugeDivId);
    if (div) {
        for (let c = div.firstChild; c !== null; c = div.firstChild) {
            div.removeChild(c);
        }
    }
}

/**
 * Returns The UI style control options set by the user.
 *
 * @param {!Object} vizMsg The post message from Data Studio that contains the
 * the user selected metric, style options and the data to render.
 * @return {!Object} Config object containing values used to draw gauge.
 */
function getUiOptions(vizMsg) {

    const style = vizMsg.style;

    let options = {
        min: getMetricValueFromTable(vizMsg, "min") || style.min.value || style.min.defaultValue,
        max: getMetricValueFromTable(vizMsg, "max") || style.max.value || style.max.defaultValue,
        precision: style.precision.value || style.precision.defaultValue,
        fontFamily: style.fontFamily.value || style.fontFamily.defaultValue,
        fontSize: style.fontSize.value || style.fontSize.defaultValue,
        fontMatchColor: (style.fontMatchColor.value == undefined) ? style.fontMatchColor.defaultValue : style.fontMatchColor.value,
        fontDefaultColor: (style.fontDefaultColor.value == undefined) ? style.fontDefaultColor.defaultValue : style.fontDefaultColor.value.color,
        fontCommas: (style.fontCommas.value == undefined) ? style.fontCommas.defaultValue : style.fontCommas.value
    };
    return Object.assign(
        options,
        getRangeOptions(ranges.LOW, vizMsg),
        getRangeOptions(ranges.MIDDLE, vizMsg),
        getRangeOptions(ranges.HIGH, vizMsg),
        getRangeOptions(ranges.DEFAULT, vizMsg),
        getVisualOptions(style),
        getGaugeDimensions()
    );
}

/**
 * Get the section color style options from user selections for the given color.
 *
 * @param {string} range The range options to return.
 * @param {!Object} vizMsg The post message from Data Studio that contains the
 * the user selected metric, style options and the data to render.
 * @return {!Object} The color options.
 */
function getRangeOptions(range, vizMsg) {

    const style = vizMsg.style;

    let options = {};
    const primaryColorKey = range + 'PrimaryColor';
    const secondaryColorKey = range + 'SecondaryColor';
    const fromKey = range + 'From';
    const toKey = range + 'To';

    options[primaryColorKey] = style[primaryColorKey].value && style[primaryColorKey].value.color
        || style[primaryColorKey].defaultValue;
    options[secondaryColorKey] = style[secondaryColorKey].value && style[secondaryColorKey].value.color
        || style[secondaryColorKey].defaultValue;

    if (style[fromKey] && style[toKey]) {
        options[fromKey] = getMetricValueFromTable(vizMsg, fromKey) || style[fromKey].value || style[fromKey].defaultValue;
        options[toKey] = getMetricValueFromTable(vizMsg, toKey) || style[toKey].value || style[toKey].defaultValue;
    }

    return options;
}

/**
 * Get the color style options from user selections for the given color.
 *
 * @param {!Object} style The style options configured by the user.
 * @return {!Object} The visual style options.
 */
function getVisualOptions(style) {
    let options = {};

    options['fillGaugeCenter'] = (style['fillGaugeCenter'].value == undefined) ? style['fillGaugeCenter'].defaultValue : style['fillGaugeCenter'].value;
    options['fillGaugeOuterRing'] = (style['fillGaugeOuterRing'].value == undefined) ? style['fillGaugeOuterRing'].defaultValue : style['fillGaugeOuterRing'].value;
    options['roundedLineEdge'] = (style['roundedLineEdge'].value == undefined) ? style['roundedLineEdge'].defaultValue : style['roundedLineEdge'].value;
    options['lineThickness'] = style['lineThickness'].value || style['lineThickness'].defaultValue;

    return options;
}

/**
 * Get the height and width options for the viz.
 *
 * @return {!Object} Dimension options.
 **/
function getGaugeDimensions() {
    return {
        height: dscc.getHeight(),
        width: dscc.getWidth()
    };
}

/**
 * Returns a formatted value based on the metric type to be displayed.
 *
 * @param {!Float} value The current value of the data to display
 * @param {!String} metricType The metric type, which affects how it will be formatted.
 * @param {!Object} gaugeOptions The object containing config values configured by the user.
 */
function formatValue(value, metricType, gaugeOptions) {

    var result = undefined;

    if(metricType.indexOf("CURRENCY") > -1) {
        var currency = metricType.split("_ ")[1];
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,          
            minimumFractionDigits: gaugeOptions.precision,
            maximumFractionDigits: gaugeOptions.precision
          });
        result = formatter.format(value);
    } else {
        switch(metricType) {
            case "NUMBER":
                result = value.toFixed(gaugeOptions.precision);

                // Apply commas to number formats only.
                if(gaugeOptions['fontCommas']) {
                    result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }

                break;
            case "PERCENT":    
                result = (parseFloat(value) * 100).toFixed(gaugeOptions.precision) + "%";
                break;
            case "DURATION":
                result = new Date(parseInt(value) * 1000).toISOString().substr(11, 8)
                break;
            default:
                result = value.toFixed(gaugeOptions.precision);
        }
    }
    return result;
}

dscc.subscribeToData(drawChart, {
    transform: dscc.objectTransform
});