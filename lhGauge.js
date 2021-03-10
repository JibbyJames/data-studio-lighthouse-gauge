!function(e,R){"object"==typeof exports&&"object"==typeof module?module.exports=R():"function"==typeof define&&define.amd?define("dscc",[],R):"object"==typeof exports?exports.dscc=R():e.dscc=R()}(window,function(){return t={},n.m=C={"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */function(e,N,R){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var R,C=1,t=arguments.length;C<t;C++)for(var n in R=arguments[C])Object.prototype.hasOwnProperty.call(R,n)&&(e[n]=R[n]);return e}).apply(this,arguments)};Object.defineProperty(N,"__esModule",{value:!0});
/*!
  @license
  Copyright 2019 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

// The below DS library was modified from the original to resolve a bug which was occuring when new metrics with "min:0" were added to the visualisation config. The fix involved checking for metric values in the config and initialising them to an empty array, as is the default value for metrics.
var _=R(/*! ./types */"./src/types.ts");!function(e){for(var R in e)N.hasOwnProperty(R)||(N[R]=e[R])}(R(/*! ./types */"./src/types.ts")),N.getWidth=function(){return document.body.clientWidth},N.getHeight=function(){return document.documentElement.clientHeight},N.getComponentId=function(){var e=new URLSearchParams(window.location.search);if(null!==e.get("dscId"))return e.get("dscId");throw new Error("dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new")};function E(e){return e.type===_.ConfigDataElementType.DIMENSION||e.type===_.ConfigDataElementType.METRIC}function r(e){return e===_.ConfigDataElementType.DIMENSION?-1:1}function a(e){var R=[];e.config.data.forEach(function(e){e.elements.filter(E).forEach(function(e){R.push(e)})});var C,t=(C=function(e,R){return r(e.type)-r(R.type)},R.map(function(e,R){return{item:e,index:R}}).sort(function(e,R){return C(e.item,R.item)||e.index-R.index}).map(function(e){return e.item})),n=[];return t.forEach(function(e){e.value||(e.value=Array(0)),e.value.forEach(function() {return n.push(e.id)})}),n}function o(R){return function(e){var C,t,n={};return t=R,((C=e).length<t.length?C.map(function(e,R){return[e,t[R]]}):t.map(function(e,R){return[C[R],e]})).forEach(function(e){var R=e[0],C=e[1];void 0===n[C]&&(n[C]=[]),n[C].push(R)},{}),n}}N.fieldsByConfigId=function(e){var R=e.fields.reduce(function(e,R){return e[R.id]=R,e},{}),C={};return e.config.data.forEach(function(e){e.elements.filter(E).forEach(function(e){C[e.id]=e.value.map(function(e){return R[e]})})}),C};function U(e){var R={};return(e.config.style||[]).forEach(function(e){e.elements.forEach(function(e){if(void 0!==R[e.id])throw new Error("styleIds must be unique. Your styleId: '"+e.id+"' is used more than once.");R[e.id]={value:e.value,defaultValue:e.defaultValue}})},{}),R}function Y(e){return e.config.themeStyle}function n(e){switch(e){case _.DSInteractionType.FILTER:return _.InteractionType.FILTER}}function s(e){var R=e.config.interactions;return void 0===R?{}:R.reduce(function(e,R){var C=R.supportedActions.map(n),t={type:n(R.value.type),data:R.value.data};return e[R.id]={value:t,supportedActions:C},e},{})}N.tableTransform=function(e){return{tables:(R=e,t=N.fieldsByConfigId(R),n=a(R),E={},r=n.map(function(e){void 0===E[e]?E[e]=0:E[e]++;var R=E[e],C=t[e][R];return i(i({},C),{configId:e})}),(C={})[_.TableType.DEFAULT]={headers:[],rows:[]},o=C,R.dataResponse.tables.forEach(function(e){o[e.id]={headers:r,rows:e.rows}}),o),fields:N.fieldsByConfigId(e),style:U(e),theme:Y(e),interactions:s(e)};var R,C,t,n,E,r,o},N.objectTransform=function(e){return{tables:(t=a(R=e),(C={})[_.TableType.DEFAULT]=[],n=C,R.dataResponse.tables.forEach(function(e){var R=e.rows.map(o(t));e.id===_.TableType.DEFAULT?n[e.id]=R:(void 0===n[e.id]&&(n[e.id]=[]),n[e.id]=n[e.id].concat(R))}),n),fields:N.fieldsByConfigId(e),style:U(e),theme:Y(e),interactions:s(e)};var R,C,t,n};function u(e){var R,C=!1;return e===N.tableTransform||e===N.objectTransform?C=!0:(R=!1,"identity"===e("identity")&&(R=!0,console.warn("This is an unsupported data format. Please use one of the supported transforms:\n       dscc.objectFormat or dscc.tableFormat.")),R&&(C=!0)),C}N.subscribeToData=function(R,C){if(u(C.transform)){var e=function(e){e.data.type===_.MessageType.RENDER?R(C.transform(e.data)):console.error("MessageType: "+e.data.type+" is not supported by this version of the library.")};window.addEventListener("message",e);var t={componentId:N.getComponentId(),type:_.ToDSMessageType.VIZ_READY};return window.parent.postMessage(t,"*"),function(){return window.removeEventListener("message",e)}}throw new Error("Only the built in transform functions are supported.")},N.sendInteraction=function(e,R,C){var t=N.getComponentId(),n={type:_.ToDSMessageType.INTERACTION,id:e,data:C,componentId:t};window.parent.postMessage(n,"*")},N.clearInteraction=function(e,R){N.sendInteraction(e,R,void 0)}},"./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */function(e,R,C){"use strict";var t,n,E,r,o,N;Object.defineProperty(R,"__esModule",{value:!0}),(t=R.ConceptType||(R.ConceptType={})).METRIC="METRIC",t.DIMENSION="DIMENSION",(R.MessageType||(R.MessageType={})).RENDER="RENDER",(n=R.FieldType||(R.FieldType={})).YEAR="YEAR",n.YEAR_QUARTER="YEAR_QUARTER",n.YEAR_MONTH="YEAR_MONTH",n.YEAR_WEEK="YEAR_WEEK",n.YEAR_MONTH_DAY="YEAR_MONTH_DAY",n.YEAR_MONTH_DAY_HOUR="YEAR_MONTH_DAY_HOUR",n.QUARTER="QUARTER",n.MONTH="MONTH",n.WEEK="WEEK",n.MONTH_DAY="MONTH_DAY",n.DAY_OF_WEEK="DAY_OF_WEEK",n.DAY="DAY",n.HOUR="HOUR",n.MINUTE="MINUTE",n.DURATION="DURATION",n.COUNTRY="COUNTRY",n.COUNTRY_CODE="COUNTRY_CODE",n.CONTINENT="CONTINENT",n.CONTINENT_CODE="CONTINENT_CODE",n.SUB_CONTINENT="SUB_CONTINENT",n.SUB_CONTINENT_CODE="SUB_CONTINENT_CODE",n.REGION="REGION",n.REGION_CODE="REGION_CODE",n.CITY="CITY",n.CITY_CODE="CITY_CODE",n.METRO_CODE="METRO_CODE",n.LATITUDE_LONGITUDE="LATITUDE_LONGITUDE",n.NUMBER="NUMBER",n.PERCENT="PERCENT",n.TEXT="TEXT",n.BOOLEAN="BOOLEAN",n.URL="URL",n.IMAGE="IMAGE",n.CURRENCY_AED="CURRENCY_AED",n.CURRENCY_ALL="CURRENCY_ALL",n.CURRENCY_ARS="CURRENCY_ARS",n.CURRENCY_AUD="CURRENCY_AUD",n.CURRENCY_BDT="CURRENCY_BDT",n.CURRENCY_BGN="CURRENCY_BGN",n.CURRENCY_BOB="CURRENCY_BOB",n.CURRENCY_BRL="CURRENCY_BRL",n.CURRENCY_CAD="CURRENCY_CAD",n.CURRENCY_CDF="CURRENCY_CDF",n.CURRENCY_CHF="CURRENCY_CHF",n.CURRENCY_CLP="CURRENCY_CLP",n.CURRENCY_CNY="CURRENCY_CNY",n.CURRENCY_COP="CURRENCY_COP",n.CURRENCY_CRC="CURRENCY_CRC",n.CURRENCY_CZK="CURRENCY_CZK",n.CURRENCY_DKK="CURRENCY_DKK",n.CURRENCY_DOP="CURRENCY_DOP",n.CURRENCY_EGP="CURRENCY_EGP",n.CURRENCY_ETB="CURRENCY_ETB",n.CURRENCY_EUR="CURRENCY_EUR",n.CURRENCY_GBP="CURRENCY_GBP",n.CURRENCY_HKD="CURRENCY_HKD",n.CURRENCY_HRK="CURRENCY_HRK",n.CURRENCY_HUF="CURRENCY_HUF",n.CURRENCY_IDR="CURRENCY_IDR",n.CURRENCY_ILS="CURRENCY_ILS",n.CURRENCY_INR="CURRENCY_INR",n.CURRENCY_IRR="CURRENCY_IRR",n.CURRENCY_ISK="CURRENCY_ISK",n.CURRENCY_JMD="CURRENCY_JMD",n.CURRENCY_JPY="CURRENCY_JPY",n.CURRENCY_KRW="CURRENCY_KRW",n.CURRENCY_LKR="CURRENCY_LKR",n.CURRENCY_LTL="CURRENCY_LTL",n.CURRENCY_MNT="CURRENCY_MNT",n.CURRENCY_MVR="CURRENCY_MVR",n.CURRENCY_MXN="CURRENCY_MXN",n.CURRENCY_MYR="CURRENCY_MYR",n.CURRENCY_NOK="CURRENCY_NOK",n.CURRENCY_NZD="CURRENCY_NZD",n.CURRENCY_PAB="CURRENCY_PAB",n.CURRENCY_PEN="CURRENCY_PEN",n.CURRENCY_PHP="CURRENCY_PHP",n.CURRENCY_PKR="CURRENCY_PKR",n.CURRENCY_PLN="CURRENCY_PLN",n.CURRENCY_RON="CURRENCY_RON",n.CURRENCY_RSD="CURRENCY_RSD",n.CURRENCY_RUB="CURRENCY_RUB",n.CURRENCY_SAR="CURRENCY_SAR",n.CURRENCY_SEK="CURRENCY_SEK",n.CURRENCY_SGD="CURRENCY_SGD",n.CURRENCY_THB="CURRENCY_THB",n.CURRENCY_TRY="CURRENCY_TRY",n.CURRENCY_TWD="CURRENCY_TWD",n.CURRENCY_TZS="CURRENCY_TZS",n.CURRENCY_UAH="CURRENCY_UAH",n.CURRENCY_USD="CURRENCY_USD",n.CURRENCY_UYU="CURRENCY_UYU",n.CURRENCY_VEF="CURRENCY_VEF",n.CURRENCY_VND="CURRENCY_VND",n.CURRENCY_YER="CURRENCY_YER",n.CURRENCY_ZAR="CURRENCY_ZAR",(E=R.TableType||(R.TableType={})).DEFAULT="DEFAULT",E.COMPARISON="COMPARISON",E.SUMMARY="SUMMARY",(r=R.ConfigDataElementType||(R.ConfigDataElementType={})).METRIC="METRIC",r.DIMENSION="DIMENSION",r.MAX_RESULTS="MAX_RESULTS",(o=R.ConfigStyleElementType||(R.ConfigStyleElementType={})).TEXTINPUT="TEXTINPUT",o.SELECT_SINGLE="SELECT_SINGLE",o.CHECKBOX="CHECKBOX",o.FONT_COLOR="FONT_COLOR",o.FONT_SIZE="FONT_SIZE",o.FONT_FAMILY="FONT_FAMILY",o.FILL_COLOR="FILL_COLOR",o.BORDER_COLOR="BORDER_COLOR",o.AXIS_COLOR="AXIS_COLOR",o.GRID_COLOR="GRID_COLOR",o.OPACITY="OPACITY",o.LINE_WEIGHT="LINE_WEIGHT",o.LINE_STYLE="LINE_STYLE",o.BORDER_RADIUS="BORDER_RADIUS",o.INTERVAL="INTERVAL",o.SELECT_RADIO="SELECT_RADIO",(R.DSInteractionType||(R.DSInteractionType={})).FILTER="FILTER",(N=R.ToDSMessageType||(R.ToDSMessageType={})).VIZ_READY="vizReady",N.INTERACTION="vizAction",(R.InteractionType||(R.InteractionType={})).FILTER="FILTER"}},n.c=t,n.d=function(e,R,C){n.o(e,R)||Object.defineProperty(e,R,{enumerable:!0,get:C})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(R,e){if(1&e&&(R=n(R)),8&e)return R;if(4&e&&"object"==typeof R&&R&&R.__esModule)return R;var C=Object.create(null);if(n.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:R}),2&e&&"string"!=typeof R)for(var t in R)n.d(C,t,function(e){return R[e]}.bind(null,t));return C},n.n=function(e){var R=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(R,"a",R),R},n.o=function(e,R){return Object.prototype.hasOwnProperty.call(e,R)},n.p="",n(n.s="./src/index.ts");function n(e){if(t[e])return t[e].exports;var R=t[e]={i:e,l:!1,exports:{}};return C[e].call(R.exports,R,R.exports,n),R.l=!0,R.exports}var C,t});

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
    if(metricValue == null){
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
 * Draws the gauge.
 *
 * @param {number} metricValue The value of the metric.
 * @param {!String} metricType The metric type, which affects how it will be formatted.
 * @param {!Object} gaugeOptions The chart options based on user input.
 **/
function drawGauge(metricValue, metricType, gaugeOptions) {

    var gaugeDiv = document.getElementById(gaugeDivId);
    var gaugeDivExists = true && gaugeDiv

    var lineWidth = gaugeOptions['lineThickness'];
    var rotation = gaugeOptions['progressStartingPoint'];
    var lineCap = gaugeOptions['roundedLineEdge'];

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
    progressBackgroundCircle.style.setProperty('transform-box', 'fill-box');
    progressBackgroundCircle.style.setProperty('transform-origin', 'center');
    progressBackgroundCircle.style.setProperty('transform', 'rotate(' + rotation + 'deg)');

    var progressArcCircle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    progressArcCircle.id = progressArcCircleId;
    progressArcCircle.setAttribute("cx", (SVG_SIZE/4));
    progressArcCircle.setAttribute("cy", (SVG_SIZE/4));
    progressArcCircle.setAttribute("r", ((SVG_SIZE/4) - (lineWidth/2)));
    progressArcCircle.setAttribute("stroke-width", lineWidth);
    progressArcCircle.style.setProperty('transform-box', 'fill-box');
    progressArcCircle.style.setProperty('transform-origin', 'center');
    progressArcCircle.style.setProperty('transform', 'rotate(' + rotation + 'deg)');
    progressArcCircle.style.setProperty('stroke-linecap', (lineCap ? 'round' : 'butt'));

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

    var progressBackground = document.querySelector('#progress__background');
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
    progressArc.style.strokeDasharray = circumference;
    progressBackground.style.strokeDasharray = circumference;

    // Set initial progress value to (0-360) value based on value/max figures.
    var progress = Math.min(((value - gaugeOptions.min) / gaugeOptions.max), 1.0);

    // Reduce progress given size chosen in style.
    progress = progress * (gaugeOptions['progressArcLength'] / 360); 

    // Set the progress offset based on progress and circumference value.
    var dashoffset = circumference * (1 - progress);
    var backgroundOffset = circumference * (1 - (gaugeOptions['progressArcLength'] / 360))

    // Check if offset should be reversed for anti-clockwise rotation
    if(gaugeOptions['anticlockwiseProgress']) {
        dashoffset = dashoffset * -1;
        backgroundOffset = backgroundOffset * -1;
    }

    // Set the offset value to the circle arc
    progressArc.style.strokeDashoffset = dashoffset;   
    progressBackground.style.strokeDashoffset = backgroundOffset;

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
    options['anticlockwiseProgress'] = style['anticlockwiseProgress'].value || style['anticlockwiseProgress'].defaultValue;
    options['lineThickness'] = style['lineThickness'].value || style['lineThickness'].defaultValue;
    options['progressStartingPoint'] = style['progressStartingPoint'].value || style['progressStartingPoint'].defaultValue;
    options['progressArcLength'] = style['progressArcLength'].value || style['progressArcLength'].defaultValue;

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