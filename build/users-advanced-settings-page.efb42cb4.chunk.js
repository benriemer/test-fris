(self["webpackChunkfriseursalon"] = self["webpackChunkfriseursalon"] || []).push([[9460],{

/***/ 62031:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(59525);
  } else {}
  

/***/ }),

/***/ 59525:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(67294),__webpack_require__(78384)):0}(this,(function(n,e){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=108)}({0:function(n,e,t){n.exports=t(16)()},1:function(e,t){e.exports=n},10:function(n,e,t){var r=t(22),o=t(23),i=t(19),a=t(24);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},108:function(n,e,t){"use strict";t.r(e),t.d(e,"Main",(function(){return y})),t.d(e,"SkipToContent",(function(){return _}));var r,o=t(5),i=t.n(o),a=t(6),u=t.n(a),s=t(3),c=t.n(s),f=t(1),d=t.n(f),p=t(0),l=t.n(p),h=t(2),m=t.n(h),b=["labelledBy"],v=m.a.main(r||(r=c()(["\n  // To prevent global outline on focus visible to force an outline when Main is focused\n  &:focus-visible {\n    outline: none;\n  }\n"]))),y=function(n){var e=n.labelledBy,t=u()(n,b),r=e||"main-content-title";return d.a.createElement(v,i()({"aria-labelledby":r,id:"main-content",tabIndex:-1},t))};y.defaultProps={labelledBy:void 0},y.propTypes={labelledBy:l.a.string};var g,x=t(4),O=m()(x.Box)(g||(g=c()(["\n  text-decoration: none;\n  position: absolute;\n  z-index: 9999;\n  left: -100%;\n  top: -100%;\n\n  &:focus {\n    left: ",";\n    top: ",";\n  }\n"])),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.spaces[3]})),_=function(n){var e=n.children;return d.a.createElement(O,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},e)};_.propTypes={children:l.a.node.isRequired}},16:function(n,e,t){"use strict";var r=t(17);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},17:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},18:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,e,t){var r=t(18);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},2:function(n,t){n.exports=e},21:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},23:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return p}));var r,o=t(3),i=t.n(o),a=t(0),u=t.n(a),s=t(2),c=t.n(s),f=t(7),d={color:!0},p=c.a.div.withConfig({shouldForwardProp:function(n,e){return!d[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(f.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(f.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(f.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(f.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(f.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(f.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(f.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(f.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(f.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.sizes[e]||e}),(function(n){var e=n.maxWidth;return n.theme.sizes[e]||e}),(function(n){var e=n.minWidth;return n.theme.sizes[e]||e}),(function(n){var e=n.height;return n.theme.sizes[e]||e}),(function(n){var e=n.maxHeight;return n.theme.sizes[e]||e}),(function(n){var e=n.minHeight;return n.theme.sizes[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));p.displayName="Box",p.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},p.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},5:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e,t){var r=t(21);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},7:function(n,e,t){"use strict";var r=t(10),o=t.n(r);e.a=function(n,e,t){if(void 0!==e){if(Array.isArray(e)){var r=o()(e,3),i=r[0],a=r[1],u=r[2],s="".concat(n,": ").concat(t.spaces[i],";");return void 0!==a&&(s+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[a],";\n        }")),void 0!==u&&(s+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[u],";\n        }")),s}var c=t.spaces[e]||e;return"".concat(n,": ").concat(c,";")}}}})}));

/***/ }),

/***/ 86289:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _extends2=_interopRequireDefault(__webpack_require__(67154));var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactQuery=__webpack_require__(23724);var _reactIntl=__webpack_require__(97132);var _formik=__webpack_require__(80831);var _helperPlugin=__webpack_require__(68547);var _LiveRegions=__webpack_require__(84686);var _Main=__webpack_require__(62031);var _Layout=__webpack_require__(78862);var _Button=__webpack_require__(19408);var _Box=__webpack_require__(5493);var _Stack=__webpack_require__(9008);var _Select=__webpack_require__(43808);var _Typography=__webpack_require__(49425);var _Grid=__webpack_require__(34626);var _Check=_interopRequireDefault(__webpack_require__(84734));var _permissions=_interopRequireDefault(__webpack_require__(94920));var _utils=__webpack_require__(26270);var _layout=_interopRequireDefault(__webpack_require__(24497));var _schema=_interopRequireDefault(__webpack_require__(79022));var _api=__webpack_require__(69416);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}var ProtectedAdvancedSettingsPage=function ProtectedAdvancedSettingsPage(){return/*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions,{permissions:_permissions["default"].readAdvancedSettings},/*#__PURE__*/_react["default"].createElement(AdvancedSettingsPage,null));};var AdvancedSettingsPage=function AdvancedSettingsPage(){var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var toggleNotification=(0,_helperPlugin.useNotification)();var _useOverlayBlocker=(0,_helperPlugin.useOverlayBlocker)(),lockApp=_useOverlayBlocker.lockApp,unlockApp=_useOverlayBlocker.unlockApp;var _useNotifyAT=(0,_LiveRegions.useNotifyAT)(),notifyStatus=_useNotifyAT.notifyStatus;var queryClient=(0,_reactQuery.useQueryClient)();(0,_helperPlugin.useFocusWhenNavigate)();var updatePermissions=(0,_react.useMemo)(function(){return{update:_permissions["default"].updateAdvancedSettings};},[]);var _useRBAC=(0,_helperPlugin.useRBAC)(updatePermissions),isLoadingForPermissions=_useRBAC.isLoading,canUpdate=_useRBAC.allowedActions.canUpdate;var _useQuery=(0,_reactQuery.useQuery)('advanced',function(){return(0,_api.fetchData)();},{onSuccess:function onSuccess(){notifyStatus(formatMessage({id:(0,_utils.getTrad)('Form.advancedSettings.data.loaded'),defaultMessage:'Advanced settings data has been loaded'}));},onError:function onError(){toggleNotification({type:'warning',message:{id:(0,_utils.getTrad)('notification.error'),defaultMessage:'An error occured'}});}}),isLoadingData=_useQuery.status,data=_useQuery.data;var isLoading=isLoadingForPermissions||isLoadingData!=='success';var submitMutation=(0,_reactQuery.useMutation)(function(body){return(0,_api.putAdvancedSettings)(body);},{onSuccess:function(){var _onSuccess=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return queryClient.invalidateQueries('advanced');case 2:toggleNotification({type:'success',message:{id:(0,_utils.getTrad)('notification.success.saved'),defaultMessage:'Saved'}});unlockApp();case 4:case"end":return _context.stop();}}},_callee);}));function onSuccess(){return _onSuccess.apply(this,arguments);}return onSuccess;}(),onError:function onError(){toggleNotification({type:'warning',message:{id:(0,_utils.getTrad)('notification.error'),defaultMessage:'An error occured'}});unlockApp();},refetchActive:true});var isSubmittingForm=submitMutation.isLoading;var handleSubmit=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(body){var urlConfirmation;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:lockApp();urlConfirmation=body.email_confirmation?body.email_confirmation_redirection:'';_context2.next=4;return submitMutation.mutateAsync(_objectSpread(_objectSpread({},body),{},{email_confirmation_redirection:urlConfirmation}));case 4:case"end":return _context2.stop();}}},_callee2);}));return function handleSubmit(_x){return _ref.apply(this,arguments);};}();if(isLoading){return/*#__PURE__*/_react["default"].createElement(_Main.Main,{"aria-busy":"true"},/*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle,{name:formatMessage({id:(0,_utils.getTrad)('HeaderNav.link.advancedSettings'),defaultMessage:'Advanced Settings'})}),/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{title:formatMessage({id:(0,_utils.getTrad)('HeaderNav.link.advancedSettings'),defaultMessage:'Advanced Settings'})}),/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null)));}return/*#__PURE__*/_react["default"].createElement(_Main.Main,{"aria-busy":isSubmittingForm},/*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle,{name:formatMessage({id:(0,_utils.getTrad)('HeaderNav.link.advancedSettings'),defaultMessage:'Advanced Settings'})}),/*#__PURE__*/_react["default"].createElement(_formik.Formik,{onSubmit:handleSubmit,initialValues:data.settings,validateOnChange:false,validationSchema:_schema["default"],enableReinitialize:true},function(_ref2){var errors=_ref2.errors,values=_ref2.values,handleChange=_ref2.handleChange,isSubmitting=_ref2.isSubmitting;return/*#__PURE__*/_react["default"].createElement(_helperPlugin.Form,null,/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{title:formatMessage({id:(0,_utils.getTrad)('HeaderNav.link.advancedSettings'),defaultMessage:'Advanced Settings'}),primaryAction:/*#__PURE__*/_react["default"].createElement(_Button.Button,{loading:isSubmitting,type:"submit",disabled:!canUpdate,startIcon:/*#__PURE__*/_react["default"].createElement(_Check["default"],null),size:"L"},formatMessage({id:(0,_utils.getTrad)('Form.save'),defaultMessage:'Save'}))}),/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,/*#__PURE__*/_react["default"].createElement(_Box.Box,{background:"neutral0",hasRadius:true,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:4},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"delta",as:"h2"},formatMessage({id:(0,_utils.getTrad)('Form.title.advancedSettings'),defaultMessage:'Settings'})),/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:6},/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,s:12},/*#__PURE__*/_react["default"].createElement(_Select.Select,{label:formatMessage({id:(0,_utils.getTrad)('EditForm.inputSelect.label.role'),defaultMessage:'Default role for authenticated users'}),value:values.default_role,hint:formatMessage({id:(0,_utils.getTrad)('EditForm.inputSelect.description.role'),defaultMessage:'It will attach the new authenticated user to the selected role.'}),onChange:function onChange(e){return handleChange({target:{name:'default_role',value:e}});}},data.roles.map(function(role){return/*#__PURE__*/_react["default"].createElement(_Select.Option,{key:role.type,value:role.type},role.name);}))),_layout["default"].map(function(input){var value=values[input.name];if(!value){value=input.type==='bool'?false:'';}return/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,(0,_extends2["default"])({key:input.name},input.size),/*#__PURE__*/_react["default"].createElement(_helperPlugin.GenericInput,(0,_extends2["default"])({},input,{value:value,error:errors[input.name],disabled:input.name==='email_confirmation_redirection'&&values.email_confirmation===false,onChange:handleChange})));}))))));}));};var _default=ProtectedAdvancedSettingsPage;exports.default=_default;

/***/ }),

/***/ 69416:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.putAdvancedSettings=exports.fetchData=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _utils=__webpack_require__(26270);var fetchData=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){var _yield$axiosInstance$,data;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _utils.axiosInstance.get((0,_utils.getRequestURL)('advanced'));case 2:_yield$axiosInstance$=_context.sent;data=_yield$axiosInstance$.data;return _context.abrupt("return",data);case 5:case"end":return _context.stop();}}},_callee);}));return function fetchData(){return _ref.apply(this,arguments);};}();exports.fetchData=fetchData;var putAdvancedSettings=function putAdvancedSettings(body){return _utils.axiosInstance.put((0,_utils.getRequestURL)('advanced'),body);};exports.putAdvancedSettings=putAdvancedSettings;

/***/ }),

/***/ 24497:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _utils=__webpack_require__(26270);var layout=[{intlLabel:{id:(0,_utils.getTrad)('EditForm.inputToggle.label.email'),defaultMessage:'One account per email address'},description:{id:(0,_utils.getTrad)('EditForm.inputToggle.description.email'),defaultMessage:'Disallow the user to create multiple accounts using the same email address with different authentication providers.'},name:'unique_email',type:'bool',size:{col:12,xs:12}},{intlLabel:{id:(0,_utils.getTrad)('EditForm.inputToggle.label.sign-up'),defaultMessage:'Enable sign-ups'},description:{id:(0,_utils.getTrad)('EditForm.inputToggle.description.sign-up'),defaultMessage:'When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider.'},name:'allow_register',type:'bool',size:{col:12,xs:12}},{intlLabel:{id:(0,_utils.getTrad)('EditForm.inputToggle.label.email-reset-password'),defaultMessage:'Reset password page'},description:{id:(0,_utils.getTrad)('EditForm.inputToggle.description.email-reset-password'),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,_utils.getTrad)('EditForm.inputToggle.placeholder.email-reset-password'),defaultMessage:'ex: https://youtfrontend.com/reset-password'},name:'email_reset_password',type:'text',size:{col:6,xs:12}},{intlLabel:{id:(0,_utils.getTrad)('EditForm.inputToggle.label.email-confirmation'),defaultMessage:'Enable email confirmation'},description:{id:(0,_utils.getTrad)('EditForm.inputToggle.description.email-confirmation'),defaultMessage:'When enabled (ON), new registered users receive a confirmation email.'},name:'email_confirmation',type:'bool',size:{col:12,xs:12}},{intlLabel:{id:(0,_utils.getTrad)('EditForm.inputToggle.label.email-confirmation-redirection'),defaultMessage:'Redirection url'},description:{id:(0,_utils.getTrad)('EditForm.inputToggle.description.email-confirmation-redirection'),defaultMessage:'After you confirmed your email, choose where you will be redirected.'},placeholder:{id:(0,_utils.getTrad)('EditForm.inputToggle.placeholder.email-reset-password'),defaultMessage:'ex: https://youtfrontend.com/reset-password'},name:'email_confirmation_redirection',type:'text',size:{col:6,xs:12}}];var _default=layout;exports.default=_default;

/***/ }),

/***/ 79022:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var yup=_interopRequireWildcard(__webpack_require__(53209));var _helperPlugin=__webpack_require__(68547);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var URL_REGEX=new RegExp('(^$)|((https?://.*)(d*)/?(.*))');var schema=yup.object().shape({email_confirmation_redirection:yup.string(_helperPlugin.translatedErrors.string).matches(URL_REGEX,_helperPlugin.translatedErrors.regex).nullable().when('email_confirmation',{is:true,then:yup.string().required(_helperPlugin.translatedErrors.required),otherwise:yup.string()}),email_reset_password:yup.string(_helperPlugin.translatedErrors.string).matches(URL_REGEX,_helperPlugin.translatedErrors.regex).nullable()});var _default=schema;exports.default=_default;

/***/ }),

/***/ 27778:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _axios=_interopRequireDefault(__webpack_require__(9669));var _helperPlugin=__webpack_require__(68547);var instance=_axios["default"].create({baseURL:""});instance.interceptors.request.use(/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(config){return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:config.headers={Authorization:"Bearer ".concat(_helperPlugin.auth.getToken()),Accept:'application/json','Content-Type':'application/json'};return _context.abrupt("return",config);case 2:case"end":return _context.stop();}}},_callee);}));return function(_x){return _ref.apply(this,arguments);};}(),function(error){Promise.reject(error);});instance.interceptors.response.use(function(response){return response;},function(error){var _error$response;// whatever you want to do with the error
if(((_error$response=error.response)===null||_error$response===void 0?void 0:_error$response.status)===401){_helperPlugin.auth.clearAppStorage();window.location.reload();}throw error;});var _default=instance;exports.default=_default;

/***/ }),

/***/ 42539:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _lodash=__webpack_require__(96486);var cleanPermissions=function cleanPermissions(permissions){return Object.keys(permissions).reduce(function(acc,current){var currentPermission=permissions[current].controllers;var cleanedControllers=Object.keys(currentPermission).reduce(function(acc2,curr){if((0,_lodash.isEmpty)(currentPermission[curr])){return acc2;}acc2[curr]=currentPermission[curr];return acc2;},{});if((0,_lodash.isEmpty)(cleanedControllers)){return acc;}acc[current]={controllers:cleanedControllers};return acc;},{});};var _default=cleanPermissions;exports.default=_default;

/***/ }),

/***/ 85317:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var formatPolicies=function formatPolicies(policies){return policies.reduce(function(acc,current){acc.push({label:current,value:current});return acc;},[]);};var _default=formatPolicies;exports.default=_default;

/***/ }),

/***/ 12132:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _pluginId=_interopRequireDefault(__webpack_require__(10576));var getRequestURL=function getRequestURL(endPoint){return"/".concat(_pluginId["default"],"/").concat(endPoint);};var _default=getRequestURL;exports.default=_default;

/***/ }),

/***/ 26270:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "axiosInstance", ({enumerable:true,get:function get(){return _axiosInstance["default"];}}));Object.defineProperty(exports, "cleanPermissions", ({enumerable:true,get:function get(){return _cleanPermissions["default"];}}));Object.defineProperty(exports, "formatPolicies", ({enumerable:true,get:function get(){return _formatPolicies["default"];}}));Object.defineProperty(exports, "getRequestURL", ({enumerable:true,get:function get(){return _getRequestURL["default"];}}));Object.defineProperty(exports, "getTrad", ({enumerable:true,get:function get(){return _getTrad["default"];}}));var _axiosInstance=_interopRequireDefault(__webpack_require__(27778));var _cleanPermissions=_interopRequireDefault(__webpack_require__(42539));var _getRequestURL=_interopRequireDefault(__webpack_require__(12132));var _getTrad=_interopRequireDefault(__webpack_require__(30078));var _formatPolicies=_interopRequireDefault(__webpack_require__(85317));

/***/ })

}]);