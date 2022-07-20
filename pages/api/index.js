// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import crypto from "crypto";

let images = {};

export default function handler(req, res) {
  if (req.method == "GET") {
    res.redirect("/");
  } else if (req.method == "POST") {
    if (req.body.retrieve)
      return res.status(200).send({ image: images[req.body.retrieve] });
    let code = crypto.randomBytes(10).toString("hex");
    images[code] = req.body.data;
    res.status(200).send({ code: code });
  }
}
