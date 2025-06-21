"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Frame Making",
    description: "Custom handcrafted frames tailored to complement your artwork perfectly.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-rose-100",
  },
  {
    title: "Printing",
    description: "High-quality printing services using state-of-the-art technology for vibrant, long-lasting prints.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-amber-100",
  },
  {
    title: "Portrait Making",
    description: "Professional portrait creation by our talented artists, capturing the essence of your subject.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-emerald-100",
  },
  {
    title: "Monogram",
    description: "Personalized monogram designs that add a unique touch to your items.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-sky-100",
  },
  {
    title: "Stickers",
    description: "Custom stickers designed to your specifications, perfect for branding or personal use.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-violet-100",
  },
  {
    title: "Customize Bags",
    description: "Transform ordinary bags into personalized works of art with our customization services.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-rose-100",
  },
  {
    title: "Shirts",
    description: "Custom-designed shirts featuring your artwork, photos, or designs.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-amber-100",
  },
  {
    title: "Plates",
    description: "Decorative plates customized with your designs, perfect for display or special occasions.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-emerald-100",
  },
  {
    title: "Pillows",
    description: "Custom-printed pillows that add a personal touch to your home decor.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-sky-100",
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

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
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <div className="w-20 h-1 bg-[#7dc0ba] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Discover our wide range of art crafting services designed to transform your ideas into reality.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 opacity-20 ${service.color}`}></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <button className="flex items-center text-[#7dc0ba] font-medium group-hover:text-[#7dc0ba] transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
