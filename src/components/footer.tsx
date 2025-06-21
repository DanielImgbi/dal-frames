"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import logo from '../../public/Primary logo 4@11x.png'

import Image from "next/image";
// import { Input } from "./ui/input"
// import { Button } from "./ui/button"
import { Facebook, Twitter, Instagram, Linkedin, } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center">
              <motion.div className="text-2xl font-bold text-black" whileHover={{ scale: 1.05 }}>

                <Image
                  src={logo}
                  alt="DAL logo"
                  className="h-10  w-[5rem] lg:w-[8rem]"
                />

              </motion.div>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming memories into timeless works of art since 2010. We specialize in custom framing, printing,
              and portrait making.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#7dc0ba]transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#7dc0ba] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#7dc0ba] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#7dc0ba] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7dc0ba] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-[#7dc0ba] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#7dc0ba] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#works" className="text-gray-400 hover:text-[#7dc0ba] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#7dc0ba] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7dc0ba] transition-colors">
                  Frame Making
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7dc0ba] transition-colors">
                  Portrait Making
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7dc0ba] transition-colors">
                  Printing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7dc0ba] transition-colors">
                  Custom Items
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7dc0ba] transition-colors">
                  Monogram
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-r-none bg-gray-800 border-gray-700 text-white"
                />
                <Button type="submit" className="rounded-l-none bg-rose-600 hover:bg-rose-700">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} DAL. All rights reserved.</p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-[#7dc0ba] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#7dc0ba] transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#7dc0ba] transition-colors text-sm">
              Cookie Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
