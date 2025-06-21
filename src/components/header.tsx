"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import logo from '../../public/Primary logo 4@11x.png'
import Image from "next/image";
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.header
      className={
        `fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12  ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"}`
      }
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div className="text-2xl font-bold text-black" whileHover={{ scale: 1.05 }}>

            <Image
              src={logo}
              alt="DAL logo"
              className="h-10  w-[5rem] lg:w-[8rem]"
            />

          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-800 hover:text-[#7dc0ba] transition-colors"
            >
              <motion.span whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                {item.name}
              </motion.span>
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#7dc0ba] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#7dc0ba] transition-colors"
          >
            Get Started
          </motion.button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-[#7dc0ba] py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-[#7dc0ba] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#7dc0ba] transition-colors w-full">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
