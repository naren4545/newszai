import Image from "next/image"
import Link from "next/link"
import logo from '../../../public/Final_NewsZai_Logo_Png[1] 1.svg'
import linkdin from '../../../public/linkden.svg'
import facebook from '../../../public/faceBook.svg'
import twitter from '../../../public/twitter.svg'
import instagram from '../../../public/instagram.svg'
export default function Footer() {
  const socialLinks = [
    { icon: linkdin, href: "#", label: "LinkedIn" },
    { icon: facebook, href: "#", label: "Facebook" },
    { icon: twitter, href: "#", label: "Twitter" },
    { icon: instagram, href: "#", label: "Instagram" },
  ]

  const footerLinks = {
    about: {
      title: "About",
      links: [
        { label: "National Edition", href: "#" },
        { label: "Local Edition", href: "#" },
        { label: "How It Works", href: "#" },
      ],
    },
    help: {
      title: "Help",
      links: [
        { label: "Support", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Security", href: "#" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { label: "About NewsZai", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Terms & Conditions", href: "#" },
      ],
    },
  }

  return (
    <footer className="w-full bg-gray-100">
      <div className="mx-auto   py-12">



      <div className="flex items-center max-w-7xl mx-auto justify-center space-x-2 py-10">
              <Image
                src={logo}
                alt="NewsZa Logo"
              
                className=""
              />
             
            </div>
            <hr/>
        <div className="flex flex-col items-start  py-5 max-w-7xl mx-auto justify-between gap-12 md:flex-row">
          {/* Logo and Social Links */}
          <div className="">
            <p className="text-3xl font-bold mb-3">Follow us</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={50}
                    height={50}
                    className=""
                  />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-base text-gray-600 hover:text-gray-900"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12  border-t border-gray-200 pt-8">
          <div className="flex max-w-7xl mx-auto px-3 flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-600">
              Copyright © 2024 PressZai, All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

