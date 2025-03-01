"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Brain, Cpu, Code, Network, Zap, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "rag",
      icon: <Database className="h-10 w-10" />,
      title: "Retrieval-Augmented Generation (RAG)",
      description: "Enhance LLM outputs with external knowledge retrieval systems for more accurate and contextually relevant responses.",
      benefits: [
        "Improved factual accuracy in AI responses",
        "Reduced hallucinations in language models",
        "Domain-specific knowledge integration",
        "Real-time information retrieval capabilities",
        "Customizable knowledge sources"
      ],
      useCases: [
        "Enterprise knowledge management",
        "Customer support automation",
        "Research assistance systems",
        "Legal and compliance documentation",
        "Medical information retrieval"
      ]
    },
    {
      id: "llm",
      icon: <Brain className="h-10 w-10" />,
      title: "Large Language Models (LLMs)",
      description: "Custom fine-tuning and deployment of state-of-the-art language models tailored to your specific domain and use cases.",
      benefits: [
        "Domain-specific language understanding",
        "Improved performance on specialized tasks",
        "Reduced training data requirements",
        "Cost-effective deployment options",
        "Continuous model improvement"
      ],
      useCases: [
        "Content generation and summarization",
        "Sentiment analysis and market research",
        "Multilingual support systems",
        "Code generation and documentation",
        "Creative writing assistance"
      ]
    },
    {
      id: "ml",
      icon: <Cpu className="h-10 w-10" />,
      title: "Machine & Deep Learning",
      description: "End-to-end ML/DL solutions from data preparation to model deployment with continuous monitoring and improvement.",
      benefits: [
        "Custom model architectures for specific problems",
        "Data preprocessing and augmentation",
        "Hyperparameter optimization",
        "Model explainability and interpretability",
        "Scalable deployment pipelines"
      ],
      useCases: [
        "Predictive analytics for business intelligence",
        "Computer vision for quality control",
        "Time series forecasting for finance",
        "Recommendation systems for e-commerce",
        "Anomaly detection for security"
      ]
    },
    {
      id: "code",
      icon: <Code className="h-10 w-10" />,
      title: "AI-driven Code Optimization",
      description: "Automated code analysis, optimization, and security enhancement powered by advanced AI techniques.",
      benefits: [
        "Improved code performance and efficiency",
        "Automated bug detection and fixing",
        "Security vulnerability identification",
        "Code refactoring suggestions",
        "Consistent code style enforcement"
      ],
      useCases: [
        "Legacy code modernization",
        "Continuous integration pipelines",
        "Technical debt reduction",
        "Security compliance automation",
        "Developer productivity enhancement"
      ]
    },
    {
      id: "neural",
      icon: <Network className="h-10 w-10" />,
      title: "Neural Network Research",
      description: "Cutting-edge research in neural architectures, training methodologies, and novel applications across domains.",
      benefits: [
        "Access to state-of-the-art neural architectures",
        "Custom research for specific problem domains",
        "Knowledge transfer from academic research",
        "Novel solution approaches for complex problems",
        "Collaborative research opportunities"
      ],
      useCases: [
        "Advanced natural language understanding",
        "Multimodal learning systems",
        "Reinforcement learning for optimization",
        "Graph neural networks for relationship analysis",
        "Self-supervised learning applications"
      ]
    },
    {
      id: "compression",
      icon: <Zap className="h-10 w-10" />,
      title: "Model Compression",
      description: "Optimize AI models for deployment on resource-constrained devices without sacrificing performance.",
      benefits: [
        "Reduced model size and memory footprint",
        "Faster inference times",
        "Lower computational requirements",
        "Edge device compatibility",
        "Reduced operational costs"
      ],
      useCases: [
        "Mobile application AI features",
        "IoT device intelligence",
        "Real-time processing systems",
        "Embedded systems integration",
        "Cloud cost optimization"
      ]
    }
  ];

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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Comprehensive AI solutions tailored to your specific needs and challenges.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of AI solutions and research services to help organizations leverage the power of artificial intelligence.
            </p>
          </motion.div>

          <Tabs defaultValue="rag" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id}>
                  <span className="hidden md:inline">{service.title.split(' ')[0]}</span>
                  <span className="md:hidden">{service.icon}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 rounded-full p-3 inline-flex">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription className="mt-2">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Key Benefits</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-4">Use Cases</h3>
                        <ul className="space-y-2">
                          {service.useCases.map((useCase, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How we approach each project to ensure successful outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We begin by understanding your specific challenges, goals, and requirements through in-depth consultations."
              },
              {
                number: "02",
                title: "Research & Design",
                description: "Our team researches and designs a tailored solution approach, selecting the most appropriate AI technologies."
              },
              {
                number: "03",
                title: "Development",
                description: "We develop and implement the solution, with regular check-ins and iterative improvements based on feedback."
              },
              {
                number: "04",
                title: "Deployment & Support",
                description: "After thorough testing, we deploy the solution and provide ongoing support and optimization."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border border-border hover:border-primary/20 transition-all">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary/50 mb-4">{step.number}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}