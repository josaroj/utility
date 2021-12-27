import  { query } from "../../../lib/db";
import jwt from "jsonwebtoken";

const secretKEY = "MySecretKey";

export default async function handler(req, res){
    if(req.method === "POST"){
        const {user_username, user_password} = req.body;
        const results = await query("SELECT * from user WHERE username=? AND password=?",
        [user_username, user_password]);

        console.log(results);
        const results2 = JSON.stringify(results);
        console.log(results2);
        const results3 = JSON.parse(results2);
        console.log(results3);

        const data = results.data[0];
        if(data){
            const payload = {
                id: data.id,
                username: data.username,
                role: data.role,
                createdat: data.createdat
            }
            jwt.sign(payload, secretKEY, {expiresIn: "1d"}, (err, token) => {
                return res.status(200).json({status: {code: 200, message: "Authorized"}, data: payload, token:token})
            })
        }else{
            res.status(401).json({status: {code: 401, message: "Unauthorized"}})
        }
    }else{
        res.status(405).json({status: {code: 405, message: "Method Not Allowed"}});
    }
}