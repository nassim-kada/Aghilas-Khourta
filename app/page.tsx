"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Youtube, Instagram, Linkedin, Twitter } from "lucide-react"
import { SiTiktok } from "react-icons/si"

export default function PortfolioPage() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
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
          className="text-base sm:text-xl tracking-[0.2em] sm:tracking-[0.3em] text-foreground/90 font-orbitron"
        >
          AGHILAS
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-3 sm:gap-8"
        >
          <Button
            variant="ghost"
            onClick={() => setAboutOpen(true)}
            className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-foreground/70 hover:text-foreground hover:bg-transparent transition-all duration-300 font-rajdhani font-medium px-2 sm:px-4"
          >
            ABOUT
          </Button>
          <Button
            variant="ghost"
            onClick={() => setContactOpen(true)}
            className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-foreground/70 hover:text-foreground hover:bg-transparent transition-all duration-300 font-rajdhani font-medium px-2 sm:px-4"
          >
            CONTACT
          </Button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <div className="flex h-full items-center justify-center px-4 sm:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center max-w-6xl">
          <motion.div variants={itemVariants} className="mb-8 sm:mb-16 flex justify-center">
            <div className="relative h-40 w-40 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72">
              {/* Multiple glowing points around border */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear"
                }}
              >
                {/* Main glowing point */}
                <motion.div
                  className="absolute top-0 left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: "transparent",
                    boxShadow: "0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.5)"
                  }}
                />
              </motion.div>

              {/* Additional glowing trail points */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear"
                }}
              >
                <motion.div
                  className="absolute top-1/2 right-0 w-2 h-2 sm:w-3 sm:h-3 rounded-full -translate-y-1/2 translate-x-1/2"
                  animate={{
                    opacity: [0, 0.7, 0],
                    scale: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  style={{
                    background: "transparent",
                    boxShadow: "0 0 10px rgba(255,255,255,0.6), 0 0 20px rgba(255,255,255,0.3)"
                  }}
                />
              </motion.div>

              {/* Profile image container */}
              <div 
                className="relative h-full w-full overflow-hidden rounded-full border-2 border-foreground/30"
                style={{
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.15), 0 0 60px rgba(255, 255, 255, 0.1)"
                }}
              >
                <img 
                  src="/img1.jpg" 
                  alt="Profile Avatar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-orbitron tracking-tight text-foreground mb-8 sm:mb-12 leading-[1.1] text-balance font-bold px-2"
          >
            I CREATE{" "}
            <motion.span 
              className="relative"
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
              LIGHT
            </motion.span>
            <br />
            <span className="text-foreground">FROM THE </span>
          <motion.span 
  className="relative"
  animate={{
    textShadow: [
      "0 0 8px rgba(128,0,0,0.6)",
      "0 0 18px rgba(165,0,0,0.8)",
      "0 0 28px rgba(255,0,0,1)",
      "0 0 38px rgba(255,0,0,1)",
      "0 0 28px rgba(165,0,0,0.9)",
      "0 0 18px rgba(128,0,0,0.8)",
      "0 0 8px rgba(128,0,0,0.6)",
    ],
    scale: [1, 1.02, 1.04, 1.02, 1],
  }}
  transition={{
    duration: 3.5,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  }}
>
  DARK.
</motion.span>
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
            <p className="text-base sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.3em] text-foreground font-rajdhani font-medium">
              CONTENT CREATOR
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-foreground px-4">
              <div className="h-px w-8 sm:w-12 bg-foreground/30" />
              <span className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-rajdhani font-medium">MOTIVATOR</span>
              <div className="h-px w-8 sm:w-12 bg-foreground/30" />
              <span className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-rajdhani font-medium">VIDEO EDITOR</span>
              <div className="h-px w-8 sm:w-12 bg-foreground/30" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* About Modal */}
      <AnimatePresence>
        {aboutOpen && (
          <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
            <DialogContent className="bg-card/95 backdrop-blur-xl border-border/50 max-w-2xl sm:mx-4 mx-2 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto w-[calc(100vw-16px)] sm:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl sm:text-4xl font-orbitron tracking-tight mb-6 sm:mb-8 text-foreground">
                    ABOUT ME
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-4 sm:space-y-6">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-foreground/80 leading-relaxed text-base sm:text-lg font-rajdhani font-light"
                  >
                    I'm a content creator, motivator, and video editor on a mission to inspire positivity and emotion
                    through powerful visual storytelling. Every frame I craft is designed to transform darkness into
                    light, bringing hope and motivation to those who need it most.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-foreground/80 leading-relaxed text-base sm:text-lg font-rajdhani font-light"
                  >
                    Through cinematic editing, compelling narratives, and authentic connection, I create content that
                    resonates deeply and sparks meaningful change in people's lives.
                  </motion.p>

                  {/* Social Media Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-6 sm:pt-8 border-t border-border/50"
                  >
                    <h3 className="text-xs sm:text-sm tracking-[0.2em] text-muted-foreground mb-4 sm:mb-6 font-rajdhani font-medium">
                      CONNECT WITH ME
                    </h3>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      {[
                        { icon: Youtube, href: "https://youtube.com" },
                        { icon: Instagram, href: "https://instagram.com" },
                        { icon: SiTiktok, href: "https://tiktok.com", isSvg: true },
                        { icon: Twitter, href: "https://twitter.com" },
                        { icon: Linkedin, href: "https://linkedin.com" },
                      ].map((social, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-accent/50 transition-all duration-300 border border-border/30 hover:border-foreground/30"
                            asChild
                          >
                            <a href={social.href} target="_blank" rel="noopener noreferrer">
                              {social.isSvg ? <social.icon className="w-5 h-5" /> : <social.icon className="w-5 h-5" />}
                            </a>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
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
                    GET IN TOUCH
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 sm:space-y-8">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-foreground/80 leading-relaxed text-base sm:text-lg font-rajdhani font-light"
                  >
                    Ready to collaborate or bring your vision to life? Let's create something extraordinary together.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4 sm:space-y-6 pt-4"
                  >
                    <div>
                      <h3 className="text-xs sm:text-sm tracking-[0.2em] text-muted-foreground mb-2 sm:mb-3 font-rajdhani font-medium">
                        EMAIL
                      </h3>
                      <a
                        href="mailto:contact@example.com"
                        className="text-foreground hover:text-foreground/70 transition-colors text-lg sm:text-xl font-rajdhani font-light tracking-wide break-all"
                      >
                        contact@example.com
                      </a>
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm tracking-[0.2em] text-muted-foreground mb-3 sm:mb-4 font-rajdhani font-medium">
                        DIRECT MESSAGE
                      </h3>
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-border/50 hover:bg-accent/50 transition-all duration-300 bg-transparent font-rajdhani tracking-wide text-xs sm:text-sm"
                            asChild
                          >
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                              Instagram DM
                            </a>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-border/50 hover:bg-accent/50 transition-all duration-300 bg-transparent font-rajdhani tracking-wide text-xs sm:text-sm"
                            asChild
                          >
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                              X/Twitter DM
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
    
  )
}