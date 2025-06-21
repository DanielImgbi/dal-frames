"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"

const categories = ["All", "Portraits", "Frames", "Prints", "Custom Items"]

const works = [
  {
    title: "Vintage Frame Collection",
    category: "Frames",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Family Portrait",
    category: "Portraits",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Abstract Art Print",
    category: "Prints",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Custom Monogram Bag",
    category: "Custom Items",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Wedding Portrait",
    category: "Portraits",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Minimalist Frame Design",
    category: "Frames",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Nature Photography Print",
    category: "Prints",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Custom Decorative Plate",
    category: "Custom Items",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function Works() {
  const [activeCategory, setActiveCategory] = useState("All")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const filteredWorks = activeCategory === "All" ? works : works.filter((work) => work.category === activeCategory)

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
    <section id="works" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Portfolio</h2>
          <div className="w-20 h-1 bg-[#7dc0ba] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Explore our collection of handcrafted artwork and custom creations.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category ? "bg-[#7dc0ba] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredWorks.map((work, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-4 text-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-white text-xl font-bold mb-2">{work.title}</h3>
                      <p className="text-[#9cccc8]">{work.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
