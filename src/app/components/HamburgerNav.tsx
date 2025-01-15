'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronRight, Settings, HelpCircle, MessageSquare, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavItem {
  icon: React.ReactNode
  label: string
  href: string
}

export default function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems: NavItem[] = [
    { icon: <img src="/faceBook.svg" height={24} width={24} alt="All News" />, label: 'All News', href: '/all-news' },
    { icon: <img src="/faceBook.svg" height={24} width={24} alt="Recent News" />, label: 'Recent News', href: '/recent' },
    { icon: <img src="/faceBook.svg" height={24} width={24} alt="Video News" />, label: 'Video News', href: '/videos' },
    { icon: <img src="/faceBook.svg" height={24} width={24} alt="Trending News" />, label: 'Trending News', href: '/trending' },
    { icon: <Settings className="h-5 w-5" />, label: 'Settings', href: '/settings' },
    { icon: <HelpCircle className="h-5 w-5" />, label: 'Help Centre', href: '/help' },
    { icon: <MessageSquare className="h-5 w-5" />, label: 'Feedback', href: '/feedback' },
  ]

  return (
    <div className="relative md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="fixed top-0 left-0 h-full w-[300px] bg-background shadow-lg z-50 overflow-auto">
            <div className="p-4 border-b">
              <div className="flex items-center gap-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cTfvAdT1NOVlfYK7O1JHyDuamkGqvi.png"
                  alt="User avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-semibold">Hi, Tanvi Parab</span>
                  <span className="text-sm text-muted-foreground">tanviparab06@gmail.com</span>
                </div>
              </div>
            </div>

            <nav className="flex flex-col p-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 px-2 py-3 rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <ChevronRight className="h-5 w-5 ml-auto" />
                </Link>
              ))}
              <Button
                variant="ghost"
                className="flex items-center gap-3 px-2 py-6 w-full justify-start hover:bg-accent mt-2"
                onClick={() => {
                  console.log('Logout clicked')
                  setIsOpen(false)
                }}
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Button>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}

