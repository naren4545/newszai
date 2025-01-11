// src/components/ProfileDropDown.tsx

import Link from "next/link";
import UploadConten from  "../../../public/flowbite_upload-solid.svg"
import draft from "../../../public/ri_draft-line.svg"
import PublishNewArticle from '../../../public/icon-park-outline_upload-logs.svg'
import manage from '../../../public/mdi_account-cog.svg'

import Image from "next/image";
import {
   
    DropdownMenuSeparator,
    
  } from "@/components/ui/dropdown-menu"


interface ProfileLink {
  href: string;
  label: string;
   // Replace with the actual icon component or an <img> tag
}

interface ProfileDropDownProps {
  name: string;
  email: string;
  
}
const links=[
    { href: "/editors-login/uploaded-content", label: "Your Uploaded Content", icon: UploadConten },
    { href: "/editors-login/your-draft", label: "Your Draft", icon: draft },
    { href: "/editors-login/publish-new-article", label: "Publish New Article", icon: PublishNewArticle },
    { href: "/", label: "Manage Account ", icon: manage  },
    
  ]
export default function ProfileDropDown({ name, email }: ProfileDropDownProps) {


  
  return (
    <div className=" bg-white rounded-lg py-5 ">
      {/* <div className="pb-2 px-4 ">
        <h3 className="md:text-3xl text-xl font-medium mb-2">user Name</h3>
        <p className="md:text-2xl text-base mb-2">user email</p>
      </div> */}
     
      <ul className="space-y-6 pt-4">
        {links.map((link, index) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<li key={link.href} >
            <Link href={link.href} className="flex justify-start  px-4 items-center space-x-3 md:text-2xl text-base hover:text-blue-600">
              <span className=""><Image src={link.icon} alt=""/></span> {/* Use icon dynamically */}
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
