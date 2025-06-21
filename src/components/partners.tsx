"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const partners = [
  {
    name: "ArtSupply Co.",
    logo: "/placeholder-logo.svg",
    description: "Premium art supply provider",
  },
  {
    name: "GallerySpace",
    logo: "/placeholder-logo.svg",
    description: "Exhibition partner",
  },
  {
    name: "DesignStudio",
    logo: "/placeholder-logo.svg",
    description: "Interior design collaboration",
  },
  {
    name: "PrintMasters",
    logo: "/placeholder-logo.svg",
    description: "Printing technology partner",
  },
  {
    name: "ArtisanWood",
    logo: "/placeholder-logo.svg",
    description: "Sustainable frame materials",
  },
]

export default function Partners() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Partners</h2>
          <div className="w-20 h-1 bg-[#7dc0ba] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            We collaborate with industry leaders to ensure the highest quality in all our services.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {partners.map((partner, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 mb-4 transition-transform duration-300 group-hover:scale-110">
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{partner.name}</h3>
              <p className="text-sm text-gray-600">{partner.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
