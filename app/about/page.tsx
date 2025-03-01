"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Lightbulb, Target, Users } from "lucide-react";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-6"
            >
              About Ādhāra AI Labs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Pioneering the future of artificial intelligence through innovative research and practical solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              
                <p className="text-muted-foreground mb-6">
                Ādhāra AI Labs was founded in 2025 by Prathamesh Devadiga with a vision to advance the field of artificial intelligence through innovative research and practical applications. The name "Ādhāra" (आधार) means "foundation" in Sanskrit, reflecting our commitment to building robust AI foundations.
                </p>
                
                <p className="text-muted-foreground mb-6">
                As a newly established lab, we are rapidly growing with a strong focus on deep tech, cutting-edge research, and open-source AI projects. Our mission is to push the boundaries of AI and make significant contributions to the field.
                </p>
                
                <p className="text-muted-foreground">
                Today, Ādhāra AI Labs works in the domains of Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), Machine Learning, AI-driven Code Optimization, Neural Network Research, and Model Compression techniques.
                </p>
            </motion.div>

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
                  src="https://miro.medium.com/v2/resize:fit:1400/1*pbQ-FuqOn05F6MC8nUjDmw.png"
                  alt="Ādhāra AI Labs Team"
                  width={700}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Foundation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The core principles that guide our research and development.
            </p>
          </motion.div>

          <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="mt-6">
              <Card>
                <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-primary/10 p-6 rounded-full">
                    <Target className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To advance the field of artificial intelligence through innovative research while developing practical solutions that address real-world challenges across industries. We aim to make AI more accessible, efficient, and beneficial for humanity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="vision" className="mt-6">
              <Card>
                <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-primary/10 p-6 rounded-full">
                    <Lightbulb className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be at the forefront of AI innovation, creating technologies that augment human capabilities and solve complex problems. We envision a future where AI systems are more intelligent, interpretable, efficient, and aligned with human values.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="values" className="mt-6">
              <Card>
                <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-primary/10 p-6 rounded-full">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Innovation:</strong> Pushing boundaries and exploring new frontiers in AI research.</li>
                      <li><strong>Integrity:</strong> Conducting research with the highest ethical standards.</li>
                      <li><strong>Collaboration:</strong> Working together across disciplines to achieve breakthroughs.</li>
                      <li><strong>Impact:</strong> Focusing on research and solutions that make a meaningful difference.</li>
                      <li><strong>Responsibility:</strong> Developing AI that is safe, fair, and beneficial for all.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
          >
        <h2 className="text-3xl font-bold mb-4">Our Founder</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The visionary behind Ādhāra AI Labs.
        </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Prathamesh Devadiga</h3>
            <p className="text-primary font-medium mb-4">Founder & Lead Researcher</p>
            <p className="text-muted-foreground mb-4">
              Prathamesh Devadiga is an AI researcher and entrepreneur with a passion for advancing the field of artificial intelligence. With a background in computer science and machine learning, Prathamesh founded Ādhāra AI Labs to bridge the gap between cutting-edge research and practical applications. His research interests include large language models, neural network optimization, and AI alignment.
            </p>
          </div>
            </div>
          </CardContent>
        </Card>
          </div>
        </div>
      </section>
    </div>
  );
}