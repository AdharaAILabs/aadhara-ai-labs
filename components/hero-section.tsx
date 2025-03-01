"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Cpu, Database, Code, Network, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      containerRef.current.style.setProperty("--x", `${x}`);
      containerRef.current.style.setProperty("--y", `${y}`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-background/90 pt-16"
      style={{
        backgroundPosition: "calc(50% + calc(var(--x, 0.5) * 20px)) calc(50% + calc(var(--y, 0.5) * 20px))",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5 dark:bg-primary/10"
            initial={{
              x: Math.random() * 100 - 50 + "%",
              y: Math.random() * 100 - 50 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * 100 - 50 + "%",
              y: Math.random() * 100 - 50 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemAnimation} className="inline-flex items-center mb-6 bg-muted px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Pioneering the Future of AI
          </motion.div>
          
          <motion.h1 variants={itemAnimation} className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Ādhāra AI Labs
          </motion.h1>
          
          <motion.p variants={itemAnimation} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Advancing artificial intelligence through innovative research and cutting-edge solutions.
          </motion.p>
          
          <motion.div variants={itemAnimation} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/services">
                Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </motion.div>
          
          <motion.div variants={container} className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Database className="h-6 w-6" />, title: "RAG-Based Systems" },
              { icon: <Brain className="h-6 w-6" />, title: "LLMs & Agentic Systems" },
              { icon: <Cpu className="h-6 w-6" />, title: "Machine & Deep Learning"},
              { icon: <Code className="h-6 w-6" />, title: "AI Code Optimization"},
              { icon: <Network className="h-6 w-6" />, title: "Neural Network Research" },
              { icon: <Zap className="h-6 w-6" />, title: "Model Compression" },
            ].map((featureItem, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="bg-card hover:bg-card/80 border border-border rounded-xl p-4 text-center transition-all hover:shadow-md"
              >
                <div className="bg-primary/10 rounded-full p-3 inline-flex mb-3">
                  {featureItem.icon}
                </div>
                <h3 className="font-medium">{featureItem.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}