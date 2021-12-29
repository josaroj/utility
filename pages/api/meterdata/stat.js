import { query } from "../../../lib/db";
import { verifyToken } from "../../../lib/auth";

export default async function handler(req, res){
    if(req.method === "GET"){
        const token = req.headers.authorization;
        const verifiedToken = verifyToken(token);
        if(verifiedToken){
            // console.log(req);
            console.log(req.body);
            const {fromdate, todate} = req.body;
            const results = await query("SELECT * FROM meterdata WHERE date BETWEEN ? AND ?", [fromdate, todate]);
            // console.log(results);
            res.status(results.status.code).json(results);
        }else{
            res.status(401).json({status: {code: 401, message: 'Unauthorized'}});
        }
    }else {
        res.status(405).json({ status: { code: 405, message: "Method Not Allowed" } });
    }
}