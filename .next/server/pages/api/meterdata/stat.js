"use strict";
(() => {
var exports = {};
exports.id = 353;
exports.ids = [353];
exports.modules = {

/***/ 344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 261:
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ 599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ verifyToken)
/* harmony export */ });
/* unused harmony export checkapiKey */
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const APIKEY = "3d7d052a031e864ee9c1b04b5a4d0f11";
const secretKEY = "MySecretKey";
function checkapiKey(apikey) {
    if (apikey === APIKEY) {
        return true;
    } else {
        return false;
    }
}
function verifyToken(token) {
    const jwtToken = token.split(' ')[1];
    try {
        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(jwtToken, secretKEY);
    } catch  {
        return false;
    }
}


/***/ }),

/***/ 934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(808);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(599);


async function handler(req, res) {
    if (req.method === "GET") {
        const token = req.headers.authorization;
        const verifiedToken = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__/* .verifyToken */ .W)(token);
        if (verifiedToken) {
            //console.log(req.body);
            const { fromdate , todate  } = req.body;
            const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT * FROM meterdata WHERE date BETWEEN ? AND ?", [
                fromdate,
                todate
            ]);
            //console.log(results);
            res.status(results.status.code).json(results);
        } else {
            res.status(401).json({
                status: {
                    code: 401,
                    message: 'Unauthorized'
                }
            });
        }
    } else {
        res.status(405).json({
            status: {
                code: 405,
                message: "Method Not Allowed"
            }
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [808], () => (__webpack_exec__(934)));
module.exports = __webpack_exports__;

})();