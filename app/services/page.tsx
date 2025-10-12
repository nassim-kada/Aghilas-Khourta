"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Check, Sparkles, Crown, Gem } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [contactOpen, setContactOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", { ...formData, package: selectedPackage })
      setIsSubmitting(false)
      setContactOpen(false)
      setFormData({ fullName: "", email: "", phone: "" })
      // You can add actual form submission logic here
    }, 1000)
  }

  const packages = [
    {
      id: "simple",
      name: "SIMPLE",
      icon: Sparkles,
      price: "$99",
      description: "Perfect for quick, engaging content",
      features: [
        "Video editing up to 2 minutes",
        "Basic color correction",
        "Simple transitions & effects",
        "Background music",
        "2 rounds of revisions",
        "3-5 day delivery",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGlow: "rgba(59, 130, 246, 0.5)",
    },
    {
      id: "premium",
      name: "PREMIUM",
      icon: Crown,
      price: "$299",
      description: "Advanced editing for impactful stories",
      popular: true,
      features: [
        "Video editing up to 5 minutes",
        "Advanced color grading",
        "Dynamic transitions & effects",
        "Custom motion graphics",
        "Sound design & mixing",
        "3 rounds of revisions",
        "1-3 day delivery",
        "Subtitles/captions included",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGlow: "rgba(168, 85, 247, 0.5)",
    },
    {
      id: "diamond",
      name: "DIAMOND",
      icon: Gem,
      price: "$599",
      description: "Cinematic masterpiece creation",
      features: [
        "Video editing up to 10 minutes",
        "Professional color grading",
        "Cinematic transitions & effects",
        "Advanced motion graphics & VFX",
        "Professional sound design",
        "Custom animations",
        "Unlimited revisions",
        "24-48 hour delivery",
        "Subtitles/captions in multiple languages",
        "Thumbnail design included",
      ],
      gradient: "from-amber-500/20 to-orange-500/20",
      borderGlow: "rgba(245, 158, 11, 0.5)",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const handleGetStarted = (packageName: string) => {
    setSelectedPackage(packageName)
    setContactOpen(true)
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background">
      {/* Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent pointer-events-none"
      />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/" className="text-base sm:text-xl tracking-[0.2em] sm:tracking-[0.3em] text-foreground/90 font-orbitron hover:text-foreground transition-colors">
            AGHILAS
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/">
            <Button
              variant="ghost"
              className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-foreground/70 hover:text-foreground hover:bg-transparent transition-all duration-300 font-rajdhani font-medium px-2 sm:px-4"
            >
              BACK TO HOME
            </Button>
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 sm:pt-32 pb-6 sm:pb-20 px-4 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-6xl md:text-7xl font-orbitron tracking-tight text-foreground mb-3 sm:mb-6 leading-[1.1] font-bold"
          >
            MY{" "}
            <motion.span
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 30px rgba(255,255,255,0.9)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 10px rgba(255,255,255,0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              SERVICES
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-lg md:text-xl text-foreground/70 font-rajdhani font-light tracking-wide max-w-2xl mx-auto"
          >
            Transform your raw footage into captivating stories that inspire and engage
          </motion.p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-4 sm:px-8 pb-12 sm:pb-20 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              className={`relative group ${pkg.popular ? 'lg:-mt-6' : 'lg:mt-0'}`}
            >
              {pkg.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10"
                >
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs tracking-[0.15em] sm:tracking-[0.2em] px-3 sm:px-4 py-1 rounded-full font-rajdhani font-medium">
                    MOST POPULAR
                  </span>
                </motion.div>
              )}

              <div
                className={`relative h-full bg-gradient-to-br ${pkg.gradient} backdrop-blur-sm border-2 border-foreground/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-500 hover:scale-[1.02] hover:border-foreground/40 ${pkg.popular ? 'lg:scale-105' : ''}`}
                style={{
                  boxShadow: `0 0 30px ${pkg.borderGlow}`,
                }}
              >
                {/* Icon */}
                <div className="mb-3 sm:mb-4 md:mb-6 flex justify-center">
                  <div className="relative">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <pkg.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-foreground" />
                    </motion.div>
                  </div>
                </div>

                {/* Package Name */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-orbitron tracking-tight text-foreground text-center mb-1 sm:mb-2">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="text-center mb-2 sm:mb-3 md:mb-4">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-orbitron">
                    {pkg.price}
                  </span>
                  <span className="text-foreground/60 text-xs sm:text-sm font-rajdhani ml-1 sm:ml-2">per video</span>
                </div>

                {/* Description */}
                <p className="text-center text-foreground/70 font-rajdhani text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 mb-4 sm:mb-6 md:mb-8">
                  {pkg.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.2 + i * 0.05 }}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-foreground/70 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-rajdhani text-xs sm:text-sm md:text-base font-light leading-tight">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => handleGetStarted(pkg.name)}
                    className="w-full bg-foreground text-background hover:bg-foreground/90 font-rajdhani tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm md:text-base font-medium py-3 sm:py-4 md:py-5 lg:py-6 transition-all duration-300"
                  >
                    GET STARTED
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="px-4 sm:px-8 pb-10 sm:pb-20 max-w-4xl mx-auto text-center"
      >
        <div className="bg-gradient-to-br from-foreground/5 to-foreground/10 backdrop-blur-sm border border-foreground/20 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12">
          <h2 className="text-lg sm:text-2xl md:text-4xl font-orbitron tracking-tight text-foreground mb-2 sm:mb-3 md:mb-4">
            NOT SURE WHICH PACKAGE?
          </h2>
          <p className="text-foreground/70 font-rajdhani text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => {
                setSelectedPackage("Custom")
                setContactOpen(true)
              }}
              variant="outline"
              className="border-foreground/30 hover:bg-foreground/10 font-rajdhani tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm md:text-base font-medium px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 lg:py-6"
            >
              CONTACT FOR CUSTOM QUOTE
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Modal with Form */}
      <AnimatePresence>
        {contactOpen && (
          <Dialog open={contactOpen} onOpenChange={setContactOpen}>
            <DialogContent className="bg-card/95 backdrop-blur-xl border-border/50 max-w-2xl sm:mx-4 mx-2 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto w-[calc(100vw-16px)] sm:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl sm:text-4xl font-orbitron tracking-tight mb-6 sm:mb-8 text-foreground">
                    LET'S GET STARTED
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 sm:space-y-8">
                  {selectedPackage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-foreground/5 to-foreground/10 rounded-lg p-4 border border-foreground/20"
                    >
                      <p className="text-xs sm:text-sm tracking-[0.2em] text-muted-foreground mb-2 font-rajdhani font-medium">
                        SELECTED PACKAGE
                      </p>
                      <p className="text-lg sm:text-xl font-orbitron text-foreground">
                        {selectedPackage}
                      </p>
                    </motion.div>
                  )}

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-foreground/80 leading-relaxed text-base sm:text-lg font-rajdhani font-light"
                  >
                    Fill out the form below and I'll get back to you within 24 hours to discuss your project.
                  </motion.p>

                  {/* Contact Form */}
                  <motion.form
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 sm:space-y-6"
                  >
                    {/* Full Name */}
                    <div>
                      <label 
                        htmlFor="fullName" 
                        className="block text-xs sm:text-sm tracking-[0.2em] text-muted-foreground mb-2 sm:mb-3 font-rajdhani font-medium"
                      >
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-foreground/5 border border-foreground/20 rounded-lg px-4 py-3 sm:py-4 text-foreground font-rajdhani text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:border-foreground/40 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-xs sm:text-sm tracking-[0.2em] text-muted-foreground mb-2 sm:mb-3 font-rajdhani font-medium"
                      >
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-foreground/5 border border-foreground/20 rounded-lg px-4 py-3 sm:py-4 text-foreground font-rajdhani text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:border-foreground/40 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Phone/WhatsApp */}
                    <div>
                      <label 
                        htmlFor="phone" 
                        className="block text-xs sm:text-sm tracking-[0.2em] text-muted-foreground mb-2 sm:mb-3 font-rajdhani font-medium"
                      >
                        PHONE / WHATSAPP *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-foreground/5 border border-foreground/20 rounded-lg px-4 py-3 sm:py-4 text-foreground font-rajdhani text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:border-foreground/40 transition-all duration-300"
                        placeholder="+1 (000) 000-0000"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="pt-2"
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className="w-full bg-foreground text-background hover:bg-foreground/90 disabled:bg-foreground/50 disabled:cursor-not-allowed font-rajdhani tracking-[0.2em] text-sm sm:text-base font-medium py-4 sm:py-5 rounded-lg transition-all duration-300 relative overflow-hidden group"
                      >
                        {/* Button glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{
                            x: isSubmitting ? ["-100%", "100%"] : "-100%",
                          }}
                          transition={{
                            duration: 1,
                            repeat: isSubmitting ? Number.POSITIVE_INFINITY : 0,
                            ease: "linear",
                          }}
                        />
                        <span className="relative">
                          {isSubmitting ? "SUBMITTING..." : "SUBMIT REQUEST"}
                        </span>
                      </motion.button>
                    </motion.div>
                  </motion.form>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}