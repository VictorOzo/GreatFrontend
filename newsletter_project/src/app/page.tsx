"use client";
import React from "react";
import Image from "next/image";
import abstract from "@/assets/image/abstract.jpg";
import check from "@/assets/image/check.png";
import toast from "react-hot-toast";
import { useState, FormEvent } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email address is required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/projects/challenges/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        const errorMessage =
          data.error === "Email format is invalid."
            ? "Please enter a valid email address."
            : "Failed to subscribe. Please ensure that the email is correct or try again later.";

        throw new Error(errorMessage);
      }

      toast.success(
        data.message ||
          "Subscription successful! Please check your email to confirm.",
      );
      setEmail("");
    } catch (err) {
      const error = err as Error;
      toast.error(
        error.message ||
          "Failed to subscribe.Please ensure that the email is correct or try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="flex items-center justify-center ">
        <div className="newLetterContainer shadow-lg w-full max-w-[1440px] h-auto md:h-[768px] flex flex-col md:flex-row items-center justify-center p-4 md:p-0">
          <div className="textContainer p-6 md:p-[61px]  ">
            <h1 className="text-[32px] md:text-[48px] font-bold text-black w-full md:w-[495px] leading-tight md:leading-12 mb-6 md:mb-[61px]">
              Get the finest curated abstracts delivered weekly to your inbox
            </h1>
            <div className="keyItems">
              <ul className="flex flex-col my-0 mx-0 mb-8 md:mb-12 p-0 gap-4 md:gap-[1.25rem]">
                <li className="flex items-start md:items-center gap-3 md:gap-[1rem] text-[16px] md:text-[18px] font-normal">
                  <Image src={check} alt="" className="mt-1 md:mt-0" />
                  Exclusive access to new abstract images and collections
                </li>
                <li className="flex items-start md:items-center gap-3 md:gap-[1rem] text-[16px] md:text-[18px] font-normal">
                  <Image src={check} alt="" className="mt-1 md:mt-0" />
                  Unlock special promotion only for subscribers
                </li>
                <li className="flex items-start md:items-center gap-3 md:gap-[1rem] text-[16px] md:text-[18px] font-normal">
                  <Image src={check} alt="" className="mt-1 md:mt-0" />
                  Regular dose of artistic inspiration
                </li>
              </ul>
            </div>
            <div className="form">
              <form
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-5 md:mb-[20px]"
                onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-[290px] h-10 px-3.5 py-2.5 font-normal text-sm leading-5 text-[#737373] bg-[#fafafa] rounded border border-[#e5e5e5]"
                />
                <input
                  type="submit"
                  disabled={isSubmitting}
                  className={`h-10 bg-[#4338ca] px-[14px] py-[10px] rounded shadow-sm text-white border-none cursor-pointer w-full sm:w-auto ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-[#4338ca]/90"
                  }`}
                  value={isSubmitting ? "Subscribing..." : "Subscribe"}
                />
              </form>
              {error && (
                <span className="error-message text-[#dc2626] text-sm block mb-2">
                  {error}
                </span>
              )}
              <p className="mt-3 md:mt-[20px] text-sm md:text-base">
                We only send you the best! No spam.
              </p>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <Image
              src={abstract}
              alt="Abstract art"
              className="rounded-[20px] h-auto w-full max-w-[592px] md:h-[608px] md:w-[592px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
