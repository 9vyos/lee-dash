'use client'
import {signIn} from "next-auth/react"

const LoginBtn = () => {
    return (
        <button onClick={()=>{signIn()}} className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
        로그인
      </button>
    )
};

export default LoginBtn