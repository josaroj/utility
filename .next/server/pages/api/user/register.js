"use strict";
(() => {
var exports = {};
exports.id = 310;
exports.ids = [310];
exports.modules = {

/***/ 344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ query1)
});

// UNUSED EXPORTS: db

;// CONCATENATED MODULE: external "serverless-mysql"
const external_serverless_mysql_namespaceObject = require("serverless-mysql");
var external_serverless_mysql_default = /*#__PURE__*/__webpack_require__.n(external_serverless_mysql_namespaceObject);
;// CONCATENATED MODULE: ./lib/db.js

const db = external_serverless_mysql_default()({
    config: {
        host: "localhost",
        database: "utility",
        user: "root",
        password: "",
        port: 3306
    }
});
async function query1(query, params) {
    try {
        const results = await db.query(query, params);
        await db.end();
        return {
            status: {
                code: 200,
                message: 'OK'
            },
            data: results
        };
    } catch (e) {
        console.log(e);
        return {
            status: {
                code: 400,
                message: 'Bad Request'
            }
        };
    }
}



/***/ }),

/***/ 349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


const secretKEY = "MySecretKey";
async function handler(req, res) {
    if (req.method === "POST") {
        const { user_username , user_password  } = req.body;
        const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT * from user WHERE username=? AND password=?", [
            user_username,
            user_password
        ]);
        //console.log(results);
        const data = results.data[0];
        if (data) {
            res.status(401).json({
                status: {
                    code: 401,
                    message: "Unauthorized : Repeated username"
                }
            });
        } else {
            const results1 = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("INSERT INTO user (username, password, role) VALUES (?, ?, ?)", [
                user_username,
                user_password,
                "user"
            ]);
            console.log(results1);
            const results2 = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT * from user WHERE username=? AND password=?", [
                user_username,
                user_password
            ]);
            console.log(results2);
            const data2 = results2.data[0];
            const payload2 = {
                id: data2.id,
                username: data2.username,
                role: data2.role,
                createdat: data2.createdat
            };
            jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(payload2, secretKEY, {
                expiresIn: "1d"
            }, (err, token)=>{
                return res.status(200).json({
                    status: {
                        code: 200,
                        message: "Authorized"
                    },
                    data: payload2,
                    token: token
                });
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
var __webpack_exports__ = (__webpack_exec__(349));
module.exports = __webpack_exports__;

})();