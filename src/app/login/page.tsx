'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/Final_NewsZai_Logo_Png[1] 1.svg'

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { tr } from 'framer-motion/client'

async function login(username: string, password:string) {
  const apiUrl = "https:api.newszai.com/api/auth/login"; // Replace with your API URL

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to log in. Please check your credentials.");
    }

    const data = await response.json();

    // Assuming the API response contains fields `message` and `authToken`
    const { message, authToken } = data;

    if (authToken) {
      // Store the auth token in cookies
      Cookies.set("authToken", authToken, { expires: 7 }); // Expires in 7 days
      console.log("Login successful:", message);
    } else {
      console.error("Login failed: No auth token received");
    }
return true
    
  } catch (error:any) {
    console.error("Error during login:", error.message);
    return null;
  }
}







export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const router =useRouter()
  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here

    const response = await login(formData.username, formData.password)
    console.log('Login submitted:', response)
    if(response){
      router.push('/')
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden w-1/2 flex-col justify-center text-center p-12 lg:flex">
        <div className="mb-8">
          <Image
            src={logo}
            alt="NewsZa!"
            width={525}
           
            className="dark:invert inline"
          />
        </div>
        <h2 className="mb-4 text-4xl font-bold">Welcome to NewsZa!</h2>
        <p className="text-2xl">
          Whether it's breaking news, in-depth analysis, or engaging video reports, we have all the information tailored to your interests.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex w-full flex-col justify-center rounded-bl-[57px] rounded-tl-[57px] bg-black  text-white px-8 lg:w-1/2">
        <div className="mx-auto w-full max-w-[521px] space-y-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">Login</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="mb-2 block text-2xl ">
                Enter Username 
              </label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full md:h-[90px] bg-white  rounded-xl border border-gray-700  px-4 py-2 text-black placeholder-gray-400 focus:border-white focus:outline-none"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-2xl ">
                Enter Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full md:h-[90px] rounded-xl bg-white border border-gray-700  px-4 py-2 text-black placeholder-gray-400 focus:border-white focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="text-right">
              <Link href="/forgot-password" className="text-sm text-gray-400 hover:text-white">
                Forgot Password?
              </Link>
            </div>

<div className='text-center'>
            <button className="relative px-8 py-3 text-white text-3xl font-medium bg-black rounded-md shadow-[0_0_10px_2px_rgba(255,255,255,0.4)]">
      <div className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-gray-400 via-white to-gray-400 -z-10"></div>
      Login
    </button>
    </div>
          </form>
        </div>
      </div>
    </div>
  )
}

