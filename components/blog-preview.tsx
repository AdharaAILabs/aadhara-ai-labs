"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// const blogPosts = [
//   {
//     id: 1,
//     title: "Advancements in Retrieval-Augmented Generation",
//     excerpt: "Exploring the latest techniques in RAG systems and how they're improving context-aware AI responses.",
//     date: "May 15, 2025",
//     author: "Prathamesh Devadiga",
//     image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     category: "Research"
//   },
//   {
//     id: 2,
//     title: "Optimizing Large Language Models for Specific Domains",
//     excerpt: "How domain-specific fine-tuning can dramatically improve LLM performance for specialized applications.",
//     date: "May 8, 2025",
//     author: "Prathamesh Devadiga",
//     image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     category: "Tutorials"
//   },
//   {
//     id: 3,
//     title: "The Future of Neural Network Compression",
//     excerpt: "New techniques for making neural networks smaller and faster without sacrificing accuracy.",
//     date: "April 29, 2025",
//     author: "Prathamesh Devadiga",
//     image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     category: "Innovation"
//   }
// ];

export default function BlogPreview() {
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, research findings, and tutorials from our team of AI experts.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* {blogPosts.map((post) => (
            <motion.div key={post.id} variants={item}>
              <Card className="h-full overflow-hidden hover:shadow-md transition-all border-border hover:border-primary/20">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                  </Link>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                </CardFooter>
              </Card>
            </motion.div>
          ))} */}
          <div className="text-center col-span-full">
            <p className="text-xl font-semibold">Coming Soon!</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}