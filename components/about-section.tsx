"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://static.vecteezy.com/system/resources/previews/035/996/815/large_2x/ai-generated-programming-code-abstract-background-programming-and-coding-concept-close-up-of-program-code-coding-programming-developing-typing-script-source-languages-symbols-project-data-free-photo.jpg"
                alt="AI Research Lab"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">About Ādhāra AI Labs</h2>
            
            <p className="text-muted-foreground mb-6">
              Founded by Prathamesh Devadiga, Ādhāra AI Labs is at the forefront of artificial intelligence research and development. Our name "Ādhāra" (आधार) means "foundation" in Sanskrit, reflecting our commitment to building robust AI foundations that support transformative technologies.
            </p>
            
            <p className="text-muted-foreground mb-6">
              We specialize in cutting-edge AI technologies including Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), Machine Learning, AI-driven Code Optimization, Neural Network Research, and Model Compression techniques.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Our mission is to advance the field of artificial intelligence through innovative research while developing practical solutions that address real-world challenges across industries.
            </p>
            
            <Button asChild>
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}