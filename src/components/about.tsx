"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const timelineItems = [
  {
    year: "2010",
    title: "Founded",
    description: "Destiny's Art Lab was established with a vision to transform ordinary portraits into extraordinary art pieces.",
  },
  {
    year: "2013",
    title: "Expanded Services",
    description: "Added custom framing, printing, and monogram services to our portfolio.",
  },
  {
    year: "2016",
    title: "National Recognition",
    description: "Received the National Art & Framing Excellence Award for our innovative designs.",
  },
  {
    year: "2019",
    title: "International Expansion",
    description: "Opened our first international branch and started serving clients worldwide.",
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description: "Launched our online platform to provide seamless art crafting services globally.",
  },
]

const teamMembers = [
  {
    name: "Emma Johnson",
    role: "Lead Artist",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Chen",
    role: "Master Framer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sophia Rodriguez",
    role: "Portrait Specialist",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "David Kim",
    role: "Creative Director",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function About() {
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
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Us</h2>
          <div className="w-20 h-1 bg-[#7dc0ba] mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            We are passionate about transforming your cherished memories into timeless works of art. With over a decade
            of experience, our team of skilled artists and craftsmen are dedicated to delivering exceptional quality and
            personalized service.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#7dc0ba] hidden lg:block" />

            {/* Timeline items */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative flex flex-col items-center lg:block"
            >
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row-reverse mr-6" : ""}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 text-right lg:text-base" : "lg:pl-12 "}`}>
                    <div className="bg-white px-6 rounded-lg shadow-lg">
                      <h4 className=" text-lg lg:text-xl font-bold text-[#7dc0ba] mb-2">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>

                  <div className={`absolute ${index % 2 === 0 ? "-right-4" : ""} lg:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#7dc0ba] flex items-center justify-center text-white font-bold z-10`}>
                    {item.year.slice(2)}
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Meet Our Team</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-[#7dc0ba]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
