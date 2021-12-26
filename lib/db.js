import mysql from "serverless-mysql";


export const db = mysql({
    config: {
        host: "localhost",
        database: "utility",
        user: "root",
        password: "",
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