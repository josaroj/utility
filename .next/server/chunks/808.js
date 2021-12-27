"use strict";
exports.id = 808;
exports.ids = [808];
exports.modules = {

/***/ 808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ query1)
/* harmony export */ });
/* unused harmony export db */
/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);
/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);

const db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({
    // config: {
    //     host: "localhost",
    //     database: "utility",
    //     user: "root",
    //     password: "",
    //     port: 3306
    // }
    config: {
        host: "ble5mmo2o5v9oouq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        database: "ssz1gd4jnbtyhoks",
        user: "ipwnhkvhj2nltaod",
        password: "m38q2ziz4z7fu08c",
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



/***/ })

};
;