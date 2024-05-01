// API Handler
import { validateForm, validationRules } from "@/src/utils/validateForm";
import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string); // Ensure your API key is securely stored and accessed

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  //honeypot
  if (req.body.fax) {
    console.log("Honeypot field filled");
    return res.status(400).json({ message: "Bot detected" });
  }

  const inputs = [
    {
      name: "Name",
      value: "name",
      validation: validationRules.name,
    },
    {
      name: "Email",
      value: "email",
      validation: validationRules.email,
    },
    {
      name: "Message",
      value: "message",
      validation: validationRules.message,
    },
  ];

  validateForm(inputs, req, res, async () => {
    const { name, email, message } = req.body;
    const content = {
      to: "toolatech@gmail.com",
      from: "hello@toolatech.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<strong>Message from ${name} @ ${email}</strong><p>${message} </p>`,
    };

    try {
      await sgMail.send(content);
      return res.status(200).send("Message sent");
    } catch (error: any) {
      console.error("SendGrid Error:", error);
      if (error.response) {
        console.error(error.response.body);
      }
      res
        .status(500)
        .json({ message: "Failed to send message due to server error." });
    }
  });
}
