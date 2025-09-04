"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import logo from '../assets/Auto Layout Horizontal.svg'



export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut", // use a valid string for ease
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const linkVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeOut
      },
    }),
  }

  const navigationLinks = [
    { href: "#", label: "Acceuil" },
    { href: "#", label: "Features" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "About" },
  ]

  return (
    <header className="w-full relative">
      <div className="w-[80%] md:w-[90%] lg:w-[60%]  rounded-2xl mx-auto shadow-lg fixed top-1 left-0 right-0 z-50 border-[5px] border-[#0000000D]">
        <nav className="w-full bg-white p-2 rounded-2xl">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-3">
               <img src={logo || "/placeholder.svg"} alt="Logo" className="w-12 h-12 object-contain" />
              <h1 className="text-2xl font-extrabold font-inter bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
                Kombineo
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 font-inter">
              {navigationLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isMenuOpen ? "open" : "closed"}
                  className="w-6 h-6 flex flex-col justify-center items-center"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 },
                    }}
                    className="w-6 h-0.5 bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] block mb-1.5"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    className="w-6 h-0.5 bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] block mb-1.5"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 },
                    }}
                    className="w-6 h-0.5 bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] block"
                  />
                </motion.div>
              </button>
            </div>

            {/* Desktop CTA Button */}
            <button className="hidden md:block text-white bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] px-6 py-2 rounded-lg font-medium shadow-md hover:opacity-90 transition cursor-pointer">
              Demander une démo
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-2 space-y-2">
                  {navigationLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      custom={index}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      href={link.href}
                      className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent font-inter"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <motion.div
                    custom={navigationLinks.length}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="px-4 pt-2"
                  >
                    <button className="w-full text-white bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] px-6 py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition cursor-pointer">
                      Demander une démo
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  )
}
