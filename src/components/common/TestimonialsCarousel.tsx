"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/utils/utils";

export default function TestimonialsCarousel() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [direction, setDirection] = useState(0); // 1 for right, -1 for left

    // Navigation functions for testimonials
    const nextTestimonial = () => {
        setDirection(1);
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Animation variants
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -500 : 500,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeIn",
            },
        }),
    };

    // Button hover animation
    const buttonHoverVariants = {
        hover: {
            backgroundColor: "#115e59", // teal-800
            color: "#ffffff",
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <section className="pt-12">
            <div className="bg-[#efece3] p-4 sm:p-8 container mx-auto max-w-[75rem] rounded-lg overflow-hidden">
                <div className="mx-auto p-4 sm:p-8 relative w-full">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentTestimonial}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="flex w-full overflow-visible flex-col sm:flex-row"
                        >
                            <motion.div
                                className="mr-0 sm:mr-6 mb-4 sm:mb-0 flex justify-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <Image
                                    src={testimonials[currentTestimonial].image}
                                    alt={testimonials[currentTestimonial].name}
                                    width={120}
                                    height={160}
                                    style={{ objectFit: "cover", borderRadius: "0.375rem" }}
                                />
                            </motion.div>

                            <div className="flex-1 pl-0 sm:pl-8 pr-4 sm:pr-16">
                                <motion.h3
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                    className="text-2xl font-bold"
                                >
                                    {testimonials[currentTestimonial].name}
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                    className="text-gray-600 mb-4"
                                >
                                    {testimonials[currentTestimonial].position}
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="text-xl"
                                >
                                    {testimonials[currentTestimonial].text}
                                </motion.p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute top-0 right-8 flex gap-2">
                        <motion.button
                            onClick={prevTestimonial}
                            className="w-10 h-10 rounded-xl bg-white text-black transition-colors duration-200 flex items-center justify-center"
                            variants={buttonHoverVariants}
                            whileHover="hover"
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"
                                    fill="currentColor"
                                />
                            </svg>
                        </motion.button>
                        <motion.button
                            onClick={nextTestimonial}
                            className="w-10 h-10 rounded-xl bg-white text-black transition-colors duration-200 flex items-center justify-center"
                            variants={buttonHoverVariants}
                            whileHover="hover"
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path
                                    d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"
                                    fill="currentColor"
                                />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Use existing dots indicator from the design */}
                </div>
            </div>
        </section>
    );
}