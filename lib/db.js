import mysql from "serverless-mysql";


export const db = mysql({
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

export async function query(query, params){
    try{
        const results = await db.query(query, params);
        await db.end();
        return {status: {code: 200, message: 'OK'}, data: results}
    }catch (e) {
        console.log(e)
        return{status: {code: 400, message: 'Bad Request'}};
    }
}