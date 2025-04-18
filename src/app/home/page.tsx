"use client";

import React, { useEffect } from "react";
import { motion, useAnimation, useScroll, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroSection from "@/components/section/HeroSection";
import VideoSection from "@/components/section/VideoSection";
import TestimonialsCarousel from "@/components/common/TestimonialsCarousel";
import { CompetencySection } from "@/components/section/CompetencySection";
import ContactSection from "@/components/section/ContactSection";

// Animation variants for sections entering from different directions
const fromLeftVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -100,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
};

const fromRightVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 100,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
};

const fromBottomVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 100,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
};

const expandVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
};

// Animation variants for staggered children
const containerVariants: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
            duration: 0.5
        }
    }
};

// Animating Section component with direction option
const AnimatedSection = ({
    children,
    className = "",
    threshold = 0.2,
    id = "",
    direction = "bottom", // "left", "right", "bottom", "expand"
}: {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
    id?: string;
    direction?: string;
}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold,
        triggerOnce: true
    });

    // Select the appropriate variants based on direction
    const getVariants = () => {
        switch (direction) {
            case "left":
                return fromLeftVariants;
            case "right":
                return fromRightVariants;
            case "bottom":
                return fromBottomVariants;
            case "expand":
                return expandVariants;
            default:
                return fromBottomVariants;
        }
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.section
            id={id}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={getVariants()}
            className={className}
        >
            {children}
        </motion.section>
    );
};

// Enhanced CTO component with animation
const EnhancedCTO = () => {
    return (
        <div className="container mx-auto max-w-[75rem]">
            <motion.div
                className="bg-teal-800 text-white rounded-lg overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.5,
                            delayChildren: 0.2,
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                <div className="flex flex-col md:flex-row">
                    <motion.div
                        className="md:w-2/3 p-8"
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.5 }
                            }
                        }}
                    >
                        <motion.h2
                            className="text-5xl font-bold mb-6 p-8"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, delay: 0.2 }
                                }
                            }}
                        >
                            Get expert Development assistance now
                        </motion.h2>
                        <motion.button
                            className="text-xl text-green-800 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2 ml-12"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, delay: 0.3 }
                                }
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get Started
                        </motion.button>
                    </motion.div>
                    <motion.div
                        className="md:w-1/3 relative"
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: { duration: 0.6, delay: 0.3 }
                            }
                        }}
                    >
                        {/* Original CTO component circles and image */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-700 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-700 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
                        <div className="absolute top-30 right-100 w-48 h-48 bg-white rounded-full transform -translate-x-1/8 translate-y-1/8"></div>
                        <div className="relative h-full flex items-center justify-center right-60">
                            <motion.img
                                src="/images/CTO.png"
                                alt="CTO"
                                width={300}
                                height={300}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

// Enhanced Navigation Component for Section Navigation
const SectionNavigation = () => {
    const sections = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "testimonials", label: "Testimonials" },
        { id: "contact", label: "Contact" }
    ];

    const handleSectionClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md rounded-full px-2 py-1 shadow-lg hidden md:block"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
        >
            <ul className="flex space-x-2">
                {sections.map((section) => (
                    <motion.li key={section.id}>
                        <motion.button
                            onClick={() => handleSectionClick(section.id)}
                            className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium rounded-full transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {section.label}
                        </motion.button>
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default function HomeContent() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-teal-600 z-50"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Section Navigation */}
            <SectionNavigation />

            {/* Video Section - Expand from center */}
            <AnimatedSection direction="expand" id="home">
                <VideoSection />
            </AnimatedSection>

            {/* Hero Section - Elements enter from left and right */}
            <AnimatedSection className="bg-[#efece3] pt-[6.25rem] pb-[6.25rem]" direction="expand" threshold={0.1} id="about">
                <HeroSection />
            </AnimatedSection>

            {/* CTO Section - Custom animation with staggered children */}
            <AnimatedSection className="pt-12" threshold={0.2}>
                <EnhancedCTO />
            </AnimatedSection>

            {/* Competency Section - From right */}
            <AnimatedSection className="pt-12" threshold={0.3} direction="right" id="services">
                <CompetencySection containerVariants={containerVariants} />
            </AnimatedSection>

            {/* Testimonials Section - From bottom */}
            <AnimatedSection className="pt-12" threshold={0.1} direction="bottom" id="testimonials">
                <TestimonialsCarousel />
            </AnimatedSection>

            {/* Contact Section - Split animation from both sides */}
            <AnimatedSection className="pt-12 pb-20" threshold={0.1} direction="bottom" id="contact">
                <ContactSection />
            </AnimatedSection>

            {/* Floating back to top button */}
            <motion.button
                className="fixed bottom-8 right-8 bg-teal-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.1, backgroundColor: "#115e59" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </motion.button>
        </motion.div>
    );
}