"use client";

import { Button } from "./Button";
import { email, message, submit } from "./constanta";

const UserReview = () => (
  <div className="flex flex-col justify-around items-start w-4/5 max-sm:w-11/12 mt-10 mx-auto gap-4">
    <label htmlFor="input1" className="text-whiteSecond">
      {email}
    </label>
    <input
      type="text"
      id="input1"
      placeholder="Value"
      className="py-3 px-4 rounded-lg w-1/6 max-sm:w-full disabled:opacity-65"
    />
    <label htmlFor="input2" className="text-whiteSecond">
      {message}
    </label>
    <input
      type="text"
      id="input2"
      placeholder="Value"
      className="py-3 px-4 rounded-lg w-1/4 max-sm:w-full disabled:opacity-65"
    />
    <Button widthStyle="w-1/4 max-sm:w-full">
      <span>{submit}</span>
    </Button>
  </div>
);

export default UserReview;
