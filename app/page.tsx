"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Users,
  Lock,
  Github,
  Youtube,
  Play,
  Award,
  Sparkles,
  Network,
  Home,
  Briefcase,
  Wallet,
  Code,
  FileText,
  PenTool,
  Database,
  Eye,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Enhanced Animated Background
const AnimatedBackground = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 800 800"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="glow1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </radialGradient>
            <radialGradient id="glow2" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.25)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </radialGradient>
            <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
            </filter>
          </defs>

          <g filter="url(#blur)">
            <motion.circle
              cx="150"
              cy="150"
              r="100"
              fill="url(#glow1)"
              animate={{
                cx: [150, 250, 450, 650, 550, 350, 150],
                cy: [150, 350, 250, 450, 650, 550, 150],
                scale: [1, 1.2, 1.5, 1.2, 1, 1.3, 1],
              }}
              transition={{
                duration: 60,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx="650"
              cy="650"
              r="120"
              fill="url(#glow2)"
              animate={{
                cx: [650, 550, 350, 150, 250, 450, 650],
                cy: [650, 450, 550, 350, 150, 250, 650],
                scale: [1, 1.3, 1, 1.2, 1.5, 1.2, 1],
              }}
              transition={{
                duration: 50,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx="400"
              cy="200"
              r="80"
              fill="url(#glow1)"
              animate={{
                cx: [400, 300, 500, 600, 400, 200, 400],
                cy: [200, 400, 500, 300, 600, 400, 200],
                scale: [1, 1.4, 1.2, 1, 1.3, 1.1, 1],
              }}
              transition={{
                duration: 40,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </g>
        </svg>
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "30px 30px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 10,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Enhanced Floating Dock
const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: React.ReactNode
    externalLink?: string
  }[]
  className?: string
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed bottom-10 inset-x-0 mx-auto z-50 flex justify-center ${className}`}
    >
      <div className="relative">
        {/* Enhanced glow effect */}
        <motion.div
          className="absolute inset-0 -m-4 rounded-full blur-2xl bg-white/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-full p-2 px-4 shadow-lg">
          {navItems.map((navItem, idx) => (
            <button
              key={`nav-${idx}`}
              className={`relative flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-white/25 text-white border border-white/40 shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => {
                setActiveIndex(idx)
                if (navItem.externalLink) {
                  window.open(navItem.externalLink, '_blank', 'noopener,noreferrer')
                } else if (navItem.name === "Home") {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                } else {
                  document.getElementById(navItem.link)?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              {activeIndex === idx && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                />
              )}
              <span className="relative z-10">{navItem.icon}</span>
            </button>
          ))}

          <div className="h-8 w-px bg-white/20 mx-2" />

          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Button
              size="sm"
              className="bg-white/15 backdrop-blur-xl text-white hover:bg-white/25 border border-white/30 rounded-full px-4 py-2 text-sm"
              onClick={() => window.open('https://coinbasecdphack.vercel.app/', '_blank')}
            >
              Launch App
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// Smooth Scroll Reveal Component
const SmoothScrollReveal = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Glass Card Component
const GlassCard = ({
  children,
  className,
  hoverEffect = true,
}: {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}) => {
  return (
    <motion.div
      className={cn(
        "bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 transition-all duration-500 h-full",
        hoverEffect && "hover:bg-white/10 hover:border-white/30",
        className,
      )}
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  )
}

export default function WorkProofPlatform() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navItems = [
    {
      name: "Home",
      link: "home",
      icon: <Home className="w-4 h-4" />,
    },
    {
      name: "How It Works",
      link: "how-it-works",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      name: "Features",
      link: "features",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      name: "Networks",
      link: "networks",
      icon: <Network className="w-4 h-4" />,
    },
    {
      name: "Wallet",
      link: "wallet",
      icon: <Wallet className="w-4 h-4" />,
      externalLink: "https://sepolia.basescan.org/address/0xEaFfef4549D2d92a3E2802D9E588bFfF2e442a3f"
    },
  ]

  return (
    <div
      className="min-h-screen bg-black text-white relative overflow-hidden"
      style={{
        cursor: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='glow' x='-20%25' y='-20%25' width='140%25' height='140%25'%3E%3CfeGaussianBlur stdDeviation='1.5' result='coloredBlur'/%3E%3CfeMerge%3E%3CfeMergeNode in='coloredBlur'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cpath d='M9.5 27L9.5 5L23 18.5L15.5 18.5L9.5 27Z' fill='rgba(255,255,255,0.15)' stroke='rgba(255,255,255,0.8)' strokeWidth='1' filter='url(%23glow)' /%3E%3C/svg%3E") 9.5 5, auto`,
      }}
    >
      {/* Enhanced Animated Background */}
      <AnimatedBackground />

      {/* Aceternity UI Floating Dock */}
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center space-y-12 max-w-6xl mx-auto">
            {/* Floating Status */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="inline-flex items-center space-x-4 bg-white/8 backdrop-blur-2xl border border-white/30 rounded-full px-8 py-4"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.12)",
                  borderColor: "rgba(255,255,255,0.4)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <motion.div
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{ willChange: "transform, opacity" }}
                />
                <span className="text-white/90 font-medium">Built on Base • Live on Testnet</span>
                <Sparkles className="w-5 h-5 text-white/60" />
              </motion.div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extralight leading-tight tracking-tight">
                <motion.div
                  className="overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.span
                    className="block text-white"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                  >
                    Work Proof
                  </motion.span>
                </motion.div>
                <motion.div
                  className="overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.span
                    className="block text-white/90"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                  >
                    An Onchain 
                  </motion.span>
                </motion.div>
                <motion.div
                  className="overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.span
                    className="block text-white/80"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
                  >
                    Freelace Platform
                  </motion.span>
                </motion.div>
              </h1>

              <motion.p
                className="text-2xl sm:text-3xl text-white/70 leading-relaxed max-w-4xl mx-auto font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
              >
                Connect, Collaborate, and Get Paid Securely on Base
              </motion.p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 1 }}
            >
              {[
                { icon: Lock, text: "Smart Contract Escrow" },
                { icon: Zap, text: "AI-Powered Task Verification" },
                { icon: Shield, text: "Secure Payments" },
                { icon: Award, text: "Agentkit's Agentic review with x402 transactions" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 bg-white/8 backdrop-blur-2xl border border-white/30 rounded-full px-8 py-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderColor: "rgba(255,255,255,0.4)",
                  }}
                  transition={{
                    delay: 2.4 + index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                >
                  <motion.div
                    className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center border border-white/40"
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                  >
                    <feature.icon className="w-3 h-3 text-white" />
                  </motion.div>
                  <span className="text-white/90 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 1 }}
            >
              <Button
                size="lg"
                className="bg-white/20 backdrop-blur-2xl text-white hover:bg-white/30 text-lg px-10 py-6 border border-white/40 rounded-2xl font-light"
                onClick={() => {
                  const url = 'https://coinbasecdphack.vercel.app/';
                  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
                  if (newWindow) newWindow.focus();
                }}
              >
                Start Posting Tasks
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-6 border-white/30 text-white hover:bg-white/20 hover:text-white/90 backdrop-blur-2xl bg-white/5 rounded-2xl font-light"
                onClick={() => {
                  const url = 'https://www.youtube.com/watch?v=a4JUMAPp9A0';
                  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
                  if (newWindow) newWindow.focus();
                }}
              >
                <Play className="mr-3 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <SmoothScrollReveal className="text-center space-y-4 mb-20">
            <h2 className="text-5xl font-extralight text-white">How It Works</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              Three simple steps to secure, verified freelance work
            </p>
          </SmoothScrollReveal>

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Post a Task",
                description: "Set budget and requirements with smart contract escrow",
                features: ["Set budget & requirements", "Smart contract escrow", "AI verification setup"],
              },
              {
                step: "02",
                title: "Look for tasks",
                description: "Browse verified tasks to be completed and earn some money",
                features: ["Browse verified Tasks", "Choose tasks of your own interest", "Earn some money"],
              },
              {
                step: "03",
                title: "Complete & Verify",
                description: "AI verification and automatic payment release",
                features: ["Submit work via IPFS", "AI-powered verification", "Smart contract release"],
              },
            ].map((step, index) => (
              <SmoothScrollReveal key={index} delay={index * 0.2}>
                <GlassCard>
                  <motion.div
                    className="text-6xl font-extralight text-white/20 mb-6 group-hover:text-white/30 transition-colors duration-500"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: index * 0.2 + 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    viewport={{ once: true }}
                  >
                    {step.step}
                  </motion.div>

                  <h3 className="text-2xl font-light text-white mb-4">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-6 font-light">{step.description}</p>

                  <div className="space-y-3">
                    {step.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.2 + idx * 0.1 + 0.4,
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                        <span className="text-white/80 text-sm font-light">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </SmoothScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-32 border-t border-white/10 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <SmoothScrollReveal className="text-center space-y-4 mb-20">
            <h2 className="text-5xl font-extralight text-white">Key Features</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              Built for security, powered by innovation
            </p>
          </SmoothScrollReveal>

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Smart Contract Escrow",
                description: "Escrowed funds with automated release via Coinbase Agentic review",
                icon: Lock,
                features: ["Funds locked until completion", "Automated payment release", "Agentic review"],
              },
              {
                title: "AI Verification",
                description: "Automated quality assurance with fraud prevention",
                icon: Zap,
                features: ["Automated task verification", "Quality assurance", "Fraud prevention"],
              },
              {
                title: "Decentralized Transactions",
                description: "On-chain transactions with verified submissions",
                icon: Award,
                features: ["On-chain task submissions", "Verified work history", "Trust metrics"],
              },
            ].map((feature, index) => (
              <SmoothScrollReveal key={index} delay={index * 0.2}>
                <GlassCard>
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div
                      className="w-12 h-12 bg-white/15 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <feature.icon className="w-6 h-6 text-white/80" />
                    </motion.div>
                    <h3 className="text-xl font-light text-white">{feature.title}</h3>
                  </div>

                  <p className="text-white/70 leading-relaxed mb-6 font-light">{feature.description}</p>

                  <div className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.2 + idx * 0.1 + 0.3,
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-4 h-4 text-white/40" />
                        <span className="text-white/80 text-sm font-light">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </SmoothScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Task Categories Section */}
      <section className="py-32 border-t border-white/10 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <SmoothScrollReveal className="text-center space-y-4 mb-20">
            <h2 className="text-5xl font-extralight text-white">Task Categories</h2>
            <p className="text-xl text-white/70 font-light">
              Explore the diverse range of tasks available on our platform
            </p>
          </SmoothScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { label: "Development", icon: Code, description: "Web, mobile, and blockchain development" },
              { label: "Content Creation", icon: FileText, description: "Articles, blogs, and technical writing" },
              { label: "Design", icon: PenTool, description: "UI/UX, graphics, and visual assets" },
              { label: "Data Services", icon: Database, description: "Analysis, management, and visualization" },
            ].map((category, index) => (
              <SmoothScrollReveal key={index} delay={index * 0.1}>
                <GlassCard className="text-center">
                  <category.icon className="w-8 h-8 text-white/60 mx-auto mb-4" />
                  <motion.div
                    className="text-xl font-light text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {category.label}
                  </motion.div>
                  <div className="text-white/70 text-sm font-light">{category.description}</div>
                </GlassCard>
              </SmoothScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* User Benefits Section */}
      <section className="py-32 border-t border-white/10 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <SmoothScrollReveal className="text-center space-y-4 mb-20">
            <h2 className="text-5xl font-extralight text-white">User Benefits</h2>
            <p className="text-xl text-white/70 font-light">Advantages for both clients and freelancers</p>
          </SmoothScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <SmoothScrollReveal delay={0.1}>
              <GlassCard>
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    className="w-12 h-12 bg-white/15 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
                  >
                    <Users className="w-6 h-6 text-white/80" />
                  </motion.div>
                  <h3 className="text-xl font-light text-white">For Clients</h3>
                </div>

                <div className="space-y-3">
                  {["Secure escrow", "AI verification", "Quality assurance", "Access to verified talent"].map(
                    (feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: idx * 0.1 + 0.3,
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                        <span className="text-white/80 text-sm font-light">{feature}</span>
                      </motion.div>
                    ),
                  )}
                </div>
              </GlassCard>
            </SmoothScrollReveal>

            <SmoothScrollReveal delay={0.2}>
              <GlassCard>
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    className="w-12 h-12 bg-white/15 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
                  >
                    <Award className="w-6 h-6 text-white/80" />
                  </motion.div>
                  <h3 className="text-xl font-light text-white">For Freelancers</h3>
                </div>

                <div className="space-y-3">
                  {[
                    "Secure payments",
                    "Reputation building",
                    "Direct client connection",
                    "Fair work chances",
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: idx * 0.1 + 0.3,
                        duration: 0.5,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                      <span className="text-white/80 text-sm font-light">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </SmoothScrollReveal>
          </div>
        </div>
      </section>

      {/* Supported Networks */}
      <section id="networks" className="py-32 border-t border-white/10 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <SmoothScrollReveal className="text-center space-y-4 mb-20">
            <h2 className="text-5xl font-extralight text-white">Supported Networks</h2>
            <p className="text-xl text-white/70 font-light">Built on Base for optimal performance</p>
          </SmoothScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                title: "Base Sepolia",
                subtitle: "Testnet",
                status: "Live",
                statusColor: "bg-green-500",
                features: ["Low gas fees", "Fast transactions", "Full testing suite"],
              },
              {
                title: "Base Mainnet",
                subtitle: "Production",
                status: "Soon",
                statusColor: "bg-white/40",
                features: ["Production ready", "Enhanced security", "Full ecosystem"],
              },
            ].map((network, index) => (
              <SmoothScrollReveal key={index} delay={index * 0.2}>
                <GlassCard>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className="w-12 h-12 bg-white/15 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
                      >
                        <Network className="w-6 h-6 text-white/80" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-light text-white">{network.title}</h3>
                        <p className="text-white/60 text-sm font-light">{network.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <motion.div
                        className={`w-2 h-2 ${network.statusColor} rounded-full`}
                        animate={{
                          scale: network.status === "Live" ? [1, 1.2, 1] : 1,
                          opacity: network.status === "Live" ? [0.6, 1, 0.6] : 0.4,
                        }}
                        transition={{
                          duration: 2,
                          repeat: network.status === "Live" ? Number.POSITIVE_INFINITY : 0,
                        }}
                        style={{ willChange: "transform, opacity" }}
                      />
                      <span className="text-white/80 text-sm font-light">{network.status}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {network.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.2 + idx * 0.1 + 0.3,
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                        <span className="text-white/80 text-sm font-light">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </SmoothScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-32 border-t border-white/10 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <SmoothScrollReveal className="text-center space-y-4 mb-20">
            <h2 className="text-5xl font-extralight text-white">Security Features</h2>
            <p className="text-xl text-white/70 font-light">Enterprise-grade security for peace of mind</p>
          </SmoothScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Smart Contract Audits",
                description: "Thoroughly audited to ensure maximum security",
                icon: Shield,
              },
              {
                title: "Escrow Protection",
                description: "Funds secured until work completion with automated smart contract release",
                icon: Lock,
              },
              {
                title: "AI Verification",
                description: "Automated quality assurance and fraud detection using LLMs",
                icon: Eye,
              },
              {
                title: "Decentralized Storage",
                description: "IPFS-based secure file storage with distributed redundancy",
                icon: Database,
              },
            ].map((feature, index) => (
              <SmoothScrollReveal key={index} delay={index * 0.1}>
                <GlassCard className="text-center">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <feature.icon className="w-8 h-8 text-white/60 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-lg font-light text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70 text-sm font-light leading-relaxed">{feature.description}</p>
                </GlassCard>
              </SmoothScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="py-32 border-t border-white/10 relative">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <SmoothScrollReveal>
            <GlassCard className="max-w-4xl mx-auto rounded-[3rem] p-16">
              <h2 className="text-5xl font-extralight text-white mb-8">Ready to Transform Freelancing?</h2>
              <p className="text-xl text-white/70 font-light mb-12 max-w-3xl mx-auto">
                Join the decentralized future of work. Secure, transparent, and powered by blockchain.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-2xl text-white hover:bg-white/30 text-lg px-10 py-6 border border-white/40 rounded-2xl font-light"
                  onClick={() => {
                    const url = 'https://coinbasecdphack.vercel.app/';
                    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
                    if (newWindow) newWindow.focus();
                  }}
                >
                  Start Posting Tasks
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-6 border-white/30 text-white hover:bg-white/20 hover:text-white/90 backdrop-blur-2xl bg-white/5 rounded-2xl font-light"
                  onClick={() => {
                    const url = 'https://www.youtube.com/watch?v=a4JUMAPp9A0';
                    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
                    if (newWindow) newWindow.focus();
                  }}
                >
                  <Play className="mr-3 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>
            </GlassCard>
          </SmoothScrollReveal>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 border-t border-white/10 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <motion.a
              href="https://www.youtube.com/watch?v=a4JUMAPp9A0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Youtube className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/chrsnikhil/coinbasecdphack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  )
}
