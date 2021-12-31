import { query } from "../../../lib/db";
import { verifyToken } from "../../../lib/auth";

export default async function handler(req, res){
    if(req.method === "POST"){
        const token = req.headers.authorization;
        const verifiedToken = verifyToken(token);
        //console.log(verifiedToken)
        if(verifiedToken && verifiedToken.role === "admin"){
            //console.log(req.body);
            const {id, userid, meterelec, meterwater, meteraircomp1, meteraircomp2} = req.body;
            const results = await query(
                "UPDATE meterdata SET userid = ?, meterelec = ?, meterwater = ?, meteraircomp1 = ?, meteraircomp2 =? WHERE id = ?", 
                [userid, meterelec, meterwater, meteraircomp1, meteraircomp2, id]);
            //console.log(results);
            res.status(results.status.code).json(results);
        }else{
            res.status(401).json({status: {code: 401, message: 'Unauthorized'}});
        }
    }else {
        res.status(405).json({ status: { code: 405, message: "Method Not Allowed" } });
    }
}