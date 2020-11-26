import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.tellmann.co.za",
  port: 587,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

const mailer = (body) => {
  
  const message = {
    from: `TELLMANN.co.za --- CONTACT FORM - <contact-form@tellmann.co.za>`,
    to: `${process.env.MAIL_CONTACT_FORM_RECEIVER}`,
    subject: `CONTACT-FORM --- ${body.email}`,
    text: JSON.stringify(body, null, 2),
    replyTo: body.email
  };
  
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
  
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(transporter);
  const mailerRes = await mailer(req.body);
  res.send(mailerRes);
}

