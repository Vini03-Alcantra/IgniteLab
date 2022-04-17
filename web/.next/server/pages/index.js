"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home() {\n    return null;\n};\nconst getServerSideProps = async ({ req , res  })=>{\n    const session = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/api/auth/login\",\n                permanent: false\n            }\n        };\n    } else {\n        return {\n            redirect: {\n                destination: \"/app\",\n                permanent: false\n            }\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Q7QUFHakMsU0FBU0MsSUFBSSxHQUFHO0lBQzdCLE9BQU8sSUFBSTtDQUNaO0FBRU0sTUFBTUMsa0JBQWtCLEdBQXVCLE9BQU8sRUFBRUMsR0FBRyxHQUFFQyxHQUFHLEdBQUUsR0FBSztJQUM1RSxNQUFNQyxPQUFPLEdBQUdMLCtEQUFVLENBQUNHLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBRXBDLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1FBQ1osT0FBTztZQUNMQyxRQUFRLEVBQUU7Z0JBQ1JDLFdBQVcsRUFBRSxpQkFBaUI7Z0JBQzlCQyxTQUFTLEVBQUUsS0FBSzthQUNqQjtTQUNGO0tBQ0YsTUFBTTtRQUNMLE9BQU87WUFDTEYsUUFBUSxFQUFFO2dCQUNSQyxXQUFXLEVBQUUsTUFBTTtnQkFDbkJDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1NBQ0Y7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJ1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGdldFNlc3Npb24ocmVxLCByZXMpXHJcblxyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICBkZXN0aW5hdGlvbjogJy9hcGkvYXV0aC9sb2dpbicsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246ICcvYXBwJyxcclxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJIb21lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();