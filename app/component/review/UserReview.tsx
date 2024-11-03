"use client"

import { Button } from "../Button"
import { email, message, submit } from "../constanta"

const UserReview = () => (
    <div className='flex flex-col justify-around items-start w-4/5 mt-10 mx-auto gap-4'>
        <label htmlFor="input1" className="text-whiteSecond">{email}</label>
        <input type="text" id="input1" placeholder="Value" className="py-3 px-4 rounded-lg w-1/5 disabled:opacity-65"/>
        <label htmlFor="input2" className="text-whiteSecond">{message}</label>
        <input type="text" id="input2" placeholder="Value" className="py-3 px-4 rounded-lg w-1/3 disabled:opacity-65"/>
        <Button widthStyle='w-1/3'>
          <span>{submit}</span>
        </Button>
    </div>
)

export default UserReview
