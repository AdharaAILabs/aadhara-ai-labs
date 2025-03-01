"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Brain, Cpu, Code, Network, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: <Database className="h-10 w-10" />,
      title: "Retrieval-Augmented Generation (RAG)",
      description: "Enhance LLM outputs with external knowledge retrieval systems for more accurate and contextually relevant responses."
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Large Language Models (LLMs)",
      description: "Custom fine-tuning and deployment of state-of-the-art language models tailored to your specific domain and use cases."
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "Machine & Deep Learning",
      description: "End-to-end ML/DL solutions from data preparation to model deployment with continuous monitoring and improvement."
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "AI-driven Code Optimization",
      description: "Automated code analysis, optimization, and security enhancement powered by advanced AI techniques."
    },
    {
      icon: <Network className="h-10 w-10" />,
      title: "Neural Network Research",
      description: "Cutting-edge research in neural architectures, training methodologies, and novel applications across domains."
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Model Compression",
      description: "Optimize AI models for deployment on resource-constrained devices without sacrificing performance."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of AI solutions and research services to help organizations leverage the power of artificial intelligence.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border border-border hover:shadow-md transition-all hover:border-primary/20">
                <CardHeader>
                  <div className="bg-primary/10 rounded-full p-3 inline-flex mb-3">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}