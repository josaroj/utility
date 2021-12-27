"use strict";
(() => {
var exports = {};
exports.id = 35;
exports.ids = [35];
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

/***/ 718:
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
            const results0 = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT * FROM meterdata ORDER BY id DESC LIMIT 1");
            //console.log(results0);
            const LastElec = results0.data[0].meterelec;
            const LastWater = results0.data[0].meterwater;
            const LastAirComp1 = results0.data[0].meteraircomp1;
            const LastAirComp2 = results0.data[0].meteraircomp2;
            const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT AVG(meterelec) AS AvgElec FROM meterdata");
            //console.log(results);
            const AvgElec = results.data[0].AvgElec;
            //console.log(AvgElec);
            const results1 = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT MAX(meterelec) AS MaxElec FROM meterdata");
            //console.log(results1);
            const MaxElec = results1.data[0].MaxElec;
            //console.log(MaxElec);
            const results2 = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT MIN(meterelec) AS MinElec FROM meterdata");
            //console.log(results2);
            const MinElec = results2.data[0].MinElec;
            //console.log(MinElec);
            const results3 = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT AVG(meterwater) AS AvgWater FROM meterdata");
            //console.log(results3);
            const AvgWater = results3.data[0].AvgWater;
            //console.log(AvgWater);
            const results4 = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT MAX(meterwater) AS MaxWater FROM meterdata");
            //console.log(results4);
            const MaxWater = results4.data[0].MaxWater;
            //console.log(MaxWater);
            const results5 = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT MIN(meterwater) AS MinWater FROM meterdata");
            //console.log(results5);
            const MinWater = results5.data[0].MinWater;
            //console.log(MinWater);
            const results6 = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT AVG(meteraircomp1) AS AvgAirComp1 FROM meterdata");
            //console.log(results6);
            const AvgAirComp1 = results6.data[0].AvgAirComp1;
            //console.log(AvgAirComp1);
            const results7 = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT MAX(meteraircomp1) AS MaxAirComp1 FROM meterdata");
            //console.log(results7);
            const MaxAirComp1 = results7.data[0].MaxAirComp1;
            //console.log(MaxAirComp1);
            const results8 = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT MIN(meteraircomp1) AS MinAirComp1 FROM meterdata");
            //console.log(results8);
            const MinAirComp1 = results8.data[0].MinAirComp1;
            //console.log(MinAirComp1);
            const results9 = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT AVG(meteraircomp2) AS AvgAirComp2 FROM meterdata");
            //console.log(results9);
            const AvgAirComp2 = results9.data[0].AvgAirComp2;
            //console.log(AvgAirComp2);
            const results10 = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT MAX(meteraircomp2) AS MaxAirComp2 FROM meterdata");
            //console.log(results10);
            const MaxAirComp2 = results10.data[0].MaxAirComp2;
            //console.log(MaxAirComp2);
            const results11 = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT MIN(meteraircomp2) AS MinAirComp2 FROM meterdata");
            //console.log(results11);
            const MinAirComp2 = results11.data[0].MinAirComp2;
            //console.log(MinAirComp2);
            const test = {
                LastElec: LastElec,
                AvgElec: AvgElec,
                MaxElec: MaxElec,
                MinElec: MinElec,
                LastWater: LastWater,
                AvgWater: AvgWater,
                MaxWater: MaxWater,
                MinWater: MinWater,
                LastAirComp1: LastAirComp1,
                AvgAirComp1: AvgAirComp1,
                MaxAirComp1: MaxAirComp1,
                MinAirComp1: MinAirComp1,
                LastAirComp2: LastAirComp2,
                AvgAirComp2: AvgAirComp2,
                MaxAirComp2: MaxAirComp2,
                MinAirComp2: MinAirComp2
            };
            console.log(test);
            res.status(200).json(test);
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
var __webpack_exports__ = __webpack_require__.X(0, [808], () => (__webpack_exec__(718)));
module.exports = __webpack_exports__;

})();