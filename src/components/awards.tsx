"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const awards = [
  {
    title: "Excellence in Craftsmanship",
    organization: "International Art & Frame Association",
    year: "2023",
    image: "/placeholder.svg?height=200&width=200",
    quote: "Destiny's Art Lab demonstrates exceptional skill and attention to detail in every piece they create.",
  },
  {
    title: "Best Custom Framing Service",
    organization: "National Design Awards",
    year: "2022",
    image: "/placeholder.svg?height=200&width=200",
    quote: "Their innovative approach to custom framing sets a new standard in the industry.",
  },
  {
    title: "Innovation in Art Preservation",
    organization: "Art Conservation Institute",
    year: "2021",
    image: "/placeholder.svg?height=200&width=200",
    quote: "Destiny's Art Lab's techniques for preserving and enhancing artwork are truly revolutionary.",
  },
]

export default function Awards() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Recognition</h2>
          <div className="w-20 h-1 bg-[#7dc0ba] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            We&apos;re proud to be recognized for our commitment to excellence and innovation in art crafting.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg p-6 text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="relative w-24 h-24">
                  <Image src={award.image || "/placeholder.svg"} alt={award.title} fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
              <p className="text-[#7dc0ba] mb-2">{award.organization}</p>
              <p className="text-gray-500 mb-4">{award.year}</p>
              <blockquote className="italic text-gray-700 border-l-4 border-[#9ac9c5] pl-4 text-left">
                &quot{award.quote}&quot
              </blockquote>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
