"use strict";
(() => {
var exports = {};
exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 51:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(344);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
;// CONCATENATED MODULE: ./lib/auth.js

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
        return external_jsonwebtoken_default().verify(jwtToken, secretKEY);
    } catch  {
        return false;
    }
}

;// CONCATENATED MODULE: ./pages/api/user/verify.js

async function handler(req, res) {
    if (req.method === "GET") {
        const token = req.headers.authorization;
        const verifiedToken = verifyToken(token);
        if (verifiedToken) {
            res.status(200).json(verifiedToken);
        } else {
            res.status(401).json({
                status: {
                    code: 401,
                    message: "Unauthorized"
                }
            });
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(51));
module.exports = __webpack_exports__;

})();