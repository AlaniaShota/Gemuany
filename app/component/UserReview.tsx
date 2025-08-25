"use client";

import { Lobster, Montserrat } from "next/font/google";
import { Button } from "./Button";
import { email, message, submit } from "./constanta";
const lobster = Lobster({ weight: "400", subsets: ["latin"], preload: false });

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: false,
});
const UserReview = () => (
  <div className="flex flex-col justify-around items-start w-4/5 max-sm:w-11/12 mt-10 mx-auto gap-4">
    <div className="form__group field">
      <div className="form__group">
        <input
          id="email"
          type="text"
          className={`${montserrat.className} form__field`}
          placeholder="Email"
          required
        />
        <label htmlFor="email" className={`${lobster.className} form__label`}>
          {email}
        </label>
      </div>

      <div className="form__group">
        <input
          id="message"
          type="text"
          className={`${montserrat.className} form__field`}
          placeholder="Message"
          required
        />
        <label htmlFor="message" className={`${lobster.className} form__label`}>
          {message}
        </label>
      </div>
      <Button widthStyle="w-1/2 self-start">
        <span>{submit}</span>
      </Button>
    </div>
  </div>
);

export default UserReview;
