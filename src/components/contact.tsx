"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Address",
      details: "2100 14th St Ste 107 Plano, TX 75074",
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      details: "hello@asakawa-it.com",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Office Hours",
      details: "Mon - Fri 8:00 AM – 7:45 PM",
    },
  ];

  const faqs = [
    {
      question: "What technologies do you use?",
      answer:
        "We work with a wide range of modern technologies, including React, Node.js, Python, Amazon AWS, Azure, Google Cloud, and more. We choose the most suitable stack for each specific project.",
    },
    {
      question: "How long does it take to develop a project?",
      answer:
        "Development time varies depending on the complexity of the project. Simple projects may take a few weeks, while more complex projects may take several months. We provide detailed estimates after analyzing the requirements.",
    },
    {
      question: "Do you offer support after project delivery?",
      answer:
        "Yes, we offer different support and maintenance plans after the project is completed. Our goal is to ensure that your solution continues to function perfectly and can evolve as your business needs change.",
    },
    {
      question: "How does the software development process work?",
      answer:
        "Our development process follows agile methodologies, with incremental deliveries and continuous feedback. We start with requirements analysis, followed by design, development, testing, deployment and support. We keep the client involved at every stage.",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">talk</span>
          </h2>
          <p className="text-lg text-gray-600">
            Contact us to discuss how we can help drive your business forward
            with our technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 contact-card">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe your project or question..."
                  ></textarea>
                </div>
                <Button className="w-full gradient-bg text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
                >
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.details}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left font-medium py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
