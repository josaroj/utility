import { query } from "../../../lib/db";
import jwt from "jsonwebtoken";

const secretKEY = "MySecretKey";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { user_username } = req.body;
    const results = await query("SELECT * from user WHERE username=?",
      [user_username]
    );

    console.log(results);
    const data = results.data[0];
    if (data) {
      res.status(401).json({ status: { code: 401, message: "Unauthorized : Repeated username" } });
    } else {
      const results1 = await query("INSERT INTO user (username, password, role) VALUES (?, ?, ?)",
        [user_username, user_password, "user"]
      );
      console.log(results1);
      const results2 = await query("SELECT * from user WHERE username=? AND password=?",
        [user_username, user_password]
      );
      console.log(results2);
      const data2 = results2.data[0];
      const payload2 = {
        id: data2.id,
        username: data2.username,
        role: data2.role,
        createdat: data2.createdat,
      };
      jwt.sign(payload2, secretKEY, { expiresIn: "1d" }, (err, token) => {
        return res.status(200).json({
          status: { code: 200, message: "Authorized" },
          data: payload2,
          token: token,
        });
      });
    }
  } else {
    res.status(405).json({ status: { code: 405, message: "Method Not Allowed" } });
  }
}
