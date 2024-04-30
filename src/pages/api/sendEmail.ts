import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  "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"
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;

  const content = {
    to: "toolatech@gmail.com",
    from: "hello@toolatech.com",
    subject: `New message from ${name} ${email}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  console.log(content);

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
