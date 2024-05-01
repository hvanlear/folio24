import { NextApiRequest, NextApiResponse } from "next";

interface Input {
  name: string;
  value: string;
  validation?: (value: string) => string | null;
}

export const validationRules = {
  name: (value: string) =>
    !value || value.length < 3 ? "must be at least 3 characters long" : null,
  email: (value: string) =>
    !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)
      ? "is not valid"
      : null,
  message: (value: string) =>
    !value || value.length < 4 ? "must be at least 4 characters long" : null,
};

export function validateForm(
  inputs: Input[],
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  for (const input of inputs) {
    const { name, value, validation } = input;
    if (validation) {
      const error = validation(req.body[value]);
      if (error) {
        return res
          .status(400)
          .json({ message: `Form Validation Error: ${name} ${error}` });
      }
    }
  }
  next();
}
