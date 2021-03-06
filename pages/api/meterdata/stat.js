import { query } from "../../../lib/db";
import { verifyToken } from "../../../lib/auth";

export default async function handler(req, res){
    if(req.method === "POST"){
        //console.log(req);
        console.log(req.body);
        const token = req.headers.authorization;
        const verifiedToken = verifyToken(token);
        console.log(token)
        if(verifiedToken){
        
            const {fromDate, toDate} = req.body;
            console.log(fromDate);
            console.log(toDate);
            const results = await query("SELECT * FROM meterdata WHERE date BETWEEN ? AND ? ORDER BY date DESC", [fromDate, toDate]);
            // console.log(results);
            res.status(results.status.code).json(results);
        }else{
            res.status(401).json({status: {code: 401, message: 'Unauthorized'}});
        }
    }else {
        res.status(405).json({ status: { code: 405, message: "Method Not Allowed" } });
    }
}