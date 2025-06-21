"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"




export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#7dc0ba] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Have a question or ready to transform your ideas into reality? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 text-gray-900">
              Send Us a Message
            </motion.h3>

            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input id="name" type="text" placeholder="John Doe" className="w-full bg-white" />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@example.com" className="w-full bg-white" />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 ">
                  Subject
                </label>
                <Input id="subject" type="text" placeholder="How can we help you?" className="w-full bg-white" />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message here..." className="w-full min-h-[150px] bg-white" />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button type="submit" className="w-full bg-[#7dc0ba] hover:bg-[#7dc0ba] rounded-full flex py-3 items-center justify-center text-white">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-between"
          >
            <div>
              <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 text-gray-900">
                Contact Information
              </motion.h3>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#cee9e6] rounded-full p-3">
                    <MapPin className="h-6 w-6 text-[#7dc0ba]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Our Location</h4>
                    <p className="text-gray-700 mt-1">
                      123 Art Street, Creative District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#cee9e6]  rounded-full p-3">
                    <Phone className="h-6 w-6 text-[#7dc0ba]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Phone Number</h4>
                    <p className="text-gray-700 mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#cee9e6]  rounded-full p-3">
                    <Mail className="h-6 w-6 text-[#7dc0ba]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Email Address</h4>
                    <p className="text-gray-700 mt-1">info@frameit.com</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div variants={itemVariants} className="mt-8 h-64 rounded-xl overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">Interactive Map Would Be Embedded Here</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
