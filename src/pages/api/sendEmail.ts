import { validateForm, validationRules } from "@/src/utils/validateForm";
import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  "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"
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("handler Ran");

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
    // Prepare email content
    const content = {
      to: "toolatech@gmail.com",
      from: "hello@toolatech.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<strong>Message from ${name}</strong><p>${message}</p>`,
    };
    try {
      await sgMail.send(content);
      res.status(200).json({ message: "Message sent successfully." });
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
