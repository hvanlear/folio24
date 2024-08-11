"use client";
import React, { useRef, useState } from "react";
import { Label } from "../ui/Label";
import Button from "../ui/Button";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { cn } from "../../utils/cn";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the honeypot field is filled
    if (honeypotRef.current && honeypotRef.current.value !== "") {
      console.log("Bot detected");
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error(`HTTP Error: ${response.status}`);
      }
    } catch (error) {
      console.error("Network or other error", error);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <div
      id="contact-container"
      className=" relative z-10  w-full sm:w-3/4 lg:w-1/2 max-w-5xl rounded-3xl shadow-input  dark:bg-black"
    >
      <div className="flex flex-col items-start w-full">
        <h2 className="font-bold text-h2-clamp md:text-4xl sm:text-5xl text-neutral-50 dark:text-neutral-200  md:text-left">
          Drop me a line!
        </h2>
        <div className="mt-4 text-xl w-full  md:text-left">
          Delivered straight to
          <span className="font-bold"> hvanlear@gmail.com</span>
        </div>
      </div>
      <div className="bg-neutral-300 my-8 h-[1px] w-full" />
      {isSubmitted ? (
        <div className="p-4">
          <h2 className="font-bold text-3xl text-neutral-50 dark:text-neutral-200">
            Message Sent!
          </h2>
          <p className="text-neutral-500 mb-4">
            Someone will be in touch shortly.
          </p>
          <Button
            text="Drop Another Line"
            id="contactResetBtn"
            variant="backdropBlur"
            onClick={resetForm}
          />
        </div>
      ) : (
        <form className="my-8" onSubmit={handleSubmit}>
          <input
            ref={honeypotRef}
            type="text"
            name="fax"
            style={{ display: "none" }}
            autoComplete="off"
          />
          <div className="flex flex-col  space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer className="">
              <Label className="text-white" htmlFor="message">
                Message
              </Label>
              <TextArea
                id="message"
                placeholder="Say hello!"
                rows={5}
                cols={50}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer className="mb-4">
              <Label className="text-white" htmlFor="name">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label className="text-white" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </LabelInputContainer>
          </div>
          <button
            className="w-1/4 bg-gradient-to-br relative group/btn block dark:bg-zinc-800  text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send &rarr;
            <BottomGradient />
          </button>
        </form>
      )}
      <div className="bg-neutral-300 my-8 h-[1px] w-full" />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
