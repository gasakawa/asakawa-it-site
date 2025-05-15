"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      value: "200+",
      label: "Clientes",
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      value: "15+",
      label: "Anos de experiência",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
      value: "500+",
      label: "Projetos entregues",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      value: "24/7",
      label: "Suporte técnico",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We are constantly looking for new technologies and approaches to offer cutting-edge solutions.",
    },
    {
      title: "Excellence",
      description:
        "Comprometidos com a qualidade em cada linha de código e em cada interação com o cliente.",
    },
    {
      title: "Collaboration",
      description:
        "We work closely with our clients to understand their needs.",
    },
    {
      title: "Integrity",
      description:
        "Transparency and honesty are fundamental in all our relationships.",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/men-at-work.jpg"
                width={750}
                height={500}
                alt="People working"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10 opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-600 rounded-full -z-10 opacity-20"></div>

            {/* <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
                >
                  <div className="mb-2">{stat.icon}</div>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm">
              About us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Transforming business through{" "}
              <span className="gradient-text">technology</span>
            </h2>
            <p className="text-lg text-gray-600">
              With over 21 years of experience in the IT field, our mission is
              to drive innovation and digital transformation across essential
              economic sectors, including finance, industry, construction,
              pharmaceuticals, and government. We have successfully assisted our
              clients in achieving remarkable results.
            </p>
            <p className="text-lg text-gray-600">
              Our team consists of highly skilled professionals who are
              passionate about technology and dedicated to delivering
              exceptional results in every project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-blue-600 mt-2.5 shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
