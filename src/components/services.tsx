"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Cloud, LineChart } from "lucide-react";

export default function Service() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-blue-600" />,
      title: "Software Development",
      description:
        "We create tailored solutions that meet the specific needs of your business, ranging from web applications to complex enterprise systems",
      features: [
        "Web Applications",
        "Business Systems",
        "API Integrations",
        "REST APIs",
      ],
    },
    {
      icon: <Cloud className="h-10 w-10 text-indigo-600" />,
      title: "Cloud Solutions",
      description:
        "We offer comprehensive end-to-end cloud solutions designed to enhance efficiency, scalability, and cost-effectiveness for businesses. By leveraging cloud-native architectures and the latest technologies, we craft and implement secure, resilient cloud infrastructures tailored to your needs.",
      features: [
        "Cloud Migration",
        "Cloud-Native Architecture",
        "DevOps Services",
        "Cost Optimization",
      ],
    },
    {
      icon: <LineChart className="h-10 w-10 text-purple-600" />,
      title: "IT Consultancy",
      description:
        "We provide strategic guidance to help your business make technology decisions that align with your organizational goals.",
      features: [
        "Strategic Planning",
        "Digital Transformation",
        "Training and Qualification",
        "Governance",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Technology Solutions for{" "}
            <span className="gradient-text">your Business Needs</span>
          </h2>
          <p className="text-lg text-gray-600">
            We provide a comprehensive suite of IT services designed to help
            your business grow, innovate, and excel in today's competitive
            landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card"
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors duration-300"></div>
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
