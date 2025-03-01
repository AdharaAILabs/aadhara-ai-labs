"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

// Sample blog data
// const blogPosts = [
//   {
//     id: 1,
//     title: "Advancements in Retrieval-Augmented Generation",
//     excerpt: "Exploring the latest techniques in RAG systems and how they're improving context-aware AI responses.",
//     date: "May 15, 2025",
//     author: "Prathamesh Devadiga",
//     image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     category: "Research",
//     tags: ["RAG", "LLMs", "Knowledge Retrieval"]
//   },
//   // ... other blog posts
// ];

// All unique categories
// const categories = [...new Set(blogPosts.map(post => post.category))];

// All unique tags
// const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Filter posts based on search, category, and tags
  // const filteredPosts = blogPosts.filter(post => {
  //   const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
  //                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
  //   const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
  //   const matchesTags = selectedTags.length > 0 
  //     ? selectedTags.every(tag => post.tags.includes(tag))
  //     : true;
    
  //   return matchesSearch && matchesCategory && matchesTags;
  // });

  // Toggle tag selection
  // const toggleTag = (tag: string) => {
  //   setSelectedTags(prev => 
  //     prev.includes(tag) 
  //       ? prev.filter(t => t !== tag) 
  //       : [...prev, tag]
  //   );
  // };

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
              Our Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Insights, research findings, and tutorials from our team of AI experts.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Search */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search articles..."
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Categories</h3>
                  <div className="space-y-2">
                    <Button
                      variant={selectedCategory === null ? "default" : "outline"}
                      size="sm"
                      className="mr-2 mb-2"
                      onClick={() => setSelectedCategory(null)}
                    >
                      All
                    </Button>
                    {/* {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        className="mr-2 mb-2"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))} */}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Tags</h3>
                  <div>
                    {/* {allTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className="mr-2 mb-2 cursor-pointer"
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">Coming Soon!</h3>
                <p className="text-muted-foreground">
                  Stay tuned for our latest articles and updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
