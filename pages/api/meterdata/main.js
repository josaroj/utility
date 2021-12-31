import { query } from "../../../lib/db";
import { verifyToken } from "../../../lib/auth";


export default async function handler(req, res){
    if(req.method === "POST"){
        const token = req.headers.authorization;
        console.log(token);
        const verifiedToken = verifyToken(token);
        if(verifiedToken){
            const results0 = await query("SELECT * FROM meterdata WHERE date IN (SELECT MAX(date) FROM meterdata)");
            // const results0 = await query("SELECT * FROM meterdata ORDER BY DATE_FORMAT(date, '%Y%m%d') DESC LIMIT 1");
            console.log(results0);
            const LastDate = results0.data[0].date;
            const LastElec = results0.data[0].meterelec;
            const LastWater = results0.data[0].meterwater;
            const LastAirComp1 = results0.data[0].meteraircomp1;
            const LastAirComp2 = results0.data[0].meteraircomp2;

            const results = await query("SELECT AVG(meterelec) AS AvgElec FROM meterdata");
            //console.log(results);
            const AvgElec = results.data[0].AvgElec;
            //console.log(AvgElec);

            const results1 = await query("SELECT MAX(meterelec) AS MaxElec FROM meterdata");
            //console.log(results1);
            const MaxElec = results1.data[0].MaxElec;
            //console.log(MaxElec);

            const results2 = await query("SELECT MIN(meterelec) AS MinElec FROM meterdata");
            //console.log(results2);
            const MinElec = results2.data[0].MinElec;
            //console.log(MinElec);

            const results3 = await query("SELECT AVG(meterwater) AS AvgWater FROM meterdata");
            //console.log(results3);
            const AvgWater = results3.data[0].AvgWater;
            //console.log(AvgWater);

            const results4 = await query("SELECT MAX(meterwater) AS MaxWater FROM meterdata");
            //console.log(results4);
            const MaxWater = results4.data[0].MaxWater;
            //console.log(MaxWater);

            const results5 = await query("SELECT MIN(meterwater) AS MinWater FROM meterdata");
            //console.log(results5);
            const MinWater = results5.data[0].MinWater;
            //console.log(MinWater);

            const results6 = await query("SELECT AVG(meteraircomp1) AS AvgAirComp1 FROM meterdata");
            //console.log(results6);
            const AvgAirComp1 = results6.data[0].AvgAirComp1;
            //console.log(AvgAirComp1);

            const results7 = await query("SELECT MAX(meteraircomp1) AS MaxAirComp1 FROM meterdata");
            //console.log(results7);
            const MaxAirComp1 = results7.data[0].MaxAirComp1;
            //console.log(MaxAirComp1);

            const results8 = await query("SELECT MIN(meteraircomp1) AS MinAirComp1 FROM meterdata");
            //console.log(results8);
            const MinAirComp1 = results8.data[0].MinAirComp1;
            //console.log(MinAirComp1);

            const results9 = await query("SELECT AVG(meteraircomp2) AS AvgAirComp2 FROM meterdata");
            //console.log(results9);
            const AvgAirComp2 = results9.data[0].AvgAirComp2;
            //console.log(AvgAirComp2);

            const results10 = await query("SELECT MAX(meteraircomp2) AS MaxAirComp2 FROM meterdata");
            //console.log(results10);
            const MaxAirComp2 = results10.data[0].MaxAirComp2;
            //console.log(MaxAirComp2);

            const results11 = await query("SELECT MIN(meteraircomp2) AS MinAirComp2 FROM meterdata");
            //console.log(results11);
            const MinAirComp2 = results11.data[0].MinAirComp2;
            //console.log(MinAirComp2);

            const test = {LastDate : LastDate, LastElec : LastElec, AvgElec : AvgElec, MaxElec : MaxElec, MinElec : MinElec, 
                LastWater : LastWater, AvgWater : AvgWater, MaxWater : MaxWater, MinWater : MinWater, 
                LastAirComp1 : LastAirComp1, AvgAirComp1 : AvgAirComp1, MaxAirComp1 : MaxAirComp1, MinAirComp1 : MinAirComp1, 
                LastAirComp2 : LastAirComp2, AvgAirComp2 : AvgAirComp2, MaxAirComp2 : MaxAirComp2, MinAirComp2 : MinAirComp2};

            console.log(test);

            res.status(200).json(test);
        }else{
            res.status(401).json({status: {code: 401, message: 'Unauthorized'}});
        }
    }else {
        res.status(405).json({ status: { code: 405, message: "Method Not Allowed" } });
    }
}