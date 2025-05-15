"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="hero-pattern min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
                Experience and Expertise You Can Trust
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Transforming Your Business{" "}
              <span className="gradient-text">with Innovative Technology</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 max-w-xl"
            >
              We transform businesses with cloud computing solutions and
              strategic consulting, driving innovation and efficiency for
              sustainable growth.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#contact">
                <Button className="gradient-bg text-white px-6 py-6 rounded-lg flex items-center gap-2 text-lg">
                  Contact us
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/people-working-at-office.jpg"
                alt="IT office"
                width={600}
                height={400}
                className="rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
