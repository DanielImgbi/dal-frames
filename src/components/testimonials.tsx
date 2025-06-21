"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Interior Designer",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Destiny's Art Lab transformed my clients' family photos into stunning wall art. The quality of their frames and attention to detail is unmatched. I recommend them to all my clients.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Art Collector",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "As someone who values quality craftsmanship, I'm impressed by Destiny's Art Lab's work. Their custom frames have enhanced my collection significantly. The team truly understands art preservation.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Wedding Photographer",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "I partner with Destiny's Art Lab to offer my wedding clients premium framing options. My customers are always thrilled with the results, and it's added significant value to my photography packages.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Homeowner",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "We ordered custom monogrammed pillows and framed family portraits for our new home. The quality exceeded our expectations, and the customer service was exceptional throughout the process.",
    rating: 4,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-[#7dc0ba] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about our services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >

            <div className="overflow-hidden">
              <motion.div
                className="flex"
                initial={false}
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-lg">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="relative w-24 h-24 rounded-full overflow-hidden">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                          {/* <div className="flex justify-center md:justify-start mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                  }`}
                              />
                            ))}
                          </div> */}
                          <blockquote className="text-lg md:text-xl italic text-gray-700 mb-4">
                            &quot;{testimonial.quote}&quot;
                          </blockquote>
                          <div>
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-[#7dc0ba]">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>


            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </motion.div>


          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? "bg-[#7dc0ba]" : "bg-gray-300"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
