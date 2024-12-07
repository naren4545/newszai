'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"


import { Mail } from 'lucide-react'

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <div className="w-full max-w-[976px] py-10 mx-auto shadow-none border-none">
      <div className="p-0">
        <div className="text-center space-y-2 mb-4">
          <h2 className="text-4xl font-semibold">
            Stay Updated with NewsZai!
          </h2>
          <p className="text-[28px] leading-[40px]  px-4">
            Subscribe to our daily newsletter for the latest headlines, in-depth reports,
            and exclusive video stories tailored to your interests. Get the
            news that matters delivered straight to your inbox.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative  flex border md:h-[108px] rounded-xl border-black">
            <Mail className="w-7 h-7  absolute left-2 top-[49px] transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Enter Your Email ID..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 w-full py-6 text-sm rounded-xl placeholder:text-2xl"
            />
          </div>
          <div className="text-center">
          <Button 
            type="submit" 
            className="mx-auto  bg-black text-white hover:bg-black/90 py-10 px-6 rounded-sm text-[28px] leading-[40px] font-semibold"
          >
            Get Updates
          </Button></div>
        </form>
      </div>
    </div>
  )
}

