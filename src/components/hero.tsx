"use client"

import { useEffect, useRef, useState, } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import { Button } from "./ui/button"

function FrameModel({ mouseX, mouseY }: { mouseX: number, mouseY: number }) {
  const frameRef = useRef(null)


  useEffect(() => {
    if (frameRef.current) {
      frameRef.current.rotation.y = mouseX * 0.1
      frameRef.current.rotation.x = mouseY * 0.1
    }
  }, [mouseX, mouseY])

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={frameRef}>
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[5, 7, 0.5]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0, 0, 0.3]} castShadow receiveShadow>
          <boxGeometry args={[4, 6, 0.1]} />
          <meshStandardMaterial color="#F5F5DC" />
        </mesh>
      </group>
    </Float>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // Normalize mouse position between -1 and 1
    const x = (e.clientX / window.innerWidth) * 2 - 1
    const y = (e.clientY / window.innerHeight) * 2 - 1
    setMousePosition({ x, y })
  }

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#d8f0f1] to-white" />

      {/* Content */}
      <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-center px-6 pt-24 md:pt-0">
        <motion.div
          className="md:w-1/2 z-10 text-center md:text-left"
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Craft Your{" "}
            <motion.span
              className="text-[#7dc0ba]"
              animate={{
                color: ["#7dc0ba", "#26767CFF", "#206064FF"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              Masterpiece
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Exquisite portrait making and custom framing services that transform your memories into timeless works of
            art.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-[#7dc0ba] hover:bg-[#26767CFF] text-white rounded-full px-8 py-3">
              Explore Our Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#19524d] text-[#7dc0ba] hover:bg-[#d8f0f1] rounded-full px-8 py-3"
            >
              Get a Quote
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 h-[400px] md:h-[600px] mt-12 md:mt-0 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <FrameModel mouseX={mousePosition.x} mouseY={mousePosition.y} />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </motion.div>
      </div>


      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center">
          <div className="w-1.5 h-3 bg-gray-700 rounded-full mt-2" />
        </div>
      </motion.div>
    </section >
  )
}
