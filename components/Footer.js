import Link from "next/link"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export function Footer () {
    return (
          <footer className="grid grid-cols-1 py*5 bg-gray-100 md:grid-cols-2 md:px-8 md:py-5 lg:grid-cols-4 lg:px-20 lg:px-10">
            <div>
                <p className="text-3xl font-bold text-blue-500">QWIIKORDER</p>
                <p className="font-thin">About us</p>
                <p className="font-thin">Contact us</p>
                <p className="font-thin">Location</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-blue-500">Legal</p>
                <p className="font-thin">Privacy policy</p>
                <p className="font-thin">Disclaimer</p>
                <p className="font-thin">Term of use</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-blue-500">Customer</p>
                <p className="font-thin">Customer Tracking</p>
                <p className="font-thin">Order Management</p>
                <p className="font-thin">Walk in`s</p>
            </div>
             <div>   
                <p className="text-3xl font-bold text-blue-500">Socials</p>
                <div className="flex flex-cols gap-3">
                  <Link href="#"><FaFacebookF className="text-xl"/></Link>
                  <Link href="#"><FaInstagram className="text-xl"/></Link>
                  <Link href="#"><FaLinkedinIn className="text-xl"/></Link>
                </div>
             </div>
          </footer>
    )
}