"use client";

import Image from 'next/image';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Teams from '../../components/common/Teams';

// Animation variants for different directions
const fromLeftVariants = {
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

const fromRightVariants = {
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

const fromBottomVariants = {
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

const expandVariants = {
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

// Stagger variants for grid items
const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const staggerItemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 12
        }
    }
};

export default function AboutContent() {
    // Company values data
    const companyValues = [
        {
            id: 1,
            icon: "integrity",
            title: "Integrity",
            description: "Consistently good ethical standards",
        },
        {
            id: 2,
            icon: "trust",
            title: "Trust",
            description: "Customer peace of mind guarantee",
        },
        {
            id: 3,
            icon: "clarity",
            title: "Client Centricity",
            description: "Customized plans to every need",
        },
        {
            id: 4,
            icon: "excellence",
            title: "Excellence",
            description: "Excellence in every single detail",
        },
    ];

    // Home section animation
    const [homeRef, homeInView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    // Hero section animations
    const [heroRef, heroInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // Journey section animations
    const [journeyRef, journeyInView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    // Values section animations
    const [valuesRef, valuesInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <motion.div
            className="pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Home Section - Expand from center */}
            <motion.section
                className="pt-12"
                ref={homeRef}
                initial="hidden"
                animate={homeInView ? "visible" : "hidden"}
                variants={expandVariants}
            >
                <motion.div
                    className="relative w-full h-[500px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={homeInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src="/images/home.png"
                        alt="Team image"
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: 'cover'
                        }}
                    />
                </motion.div>
            </motion.section>

            {/* Hero Section - Elements slide in from sides */}
            <motion.section
                className="pt-12"
                ref={heroRef}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={fromBottomVariants}
            >
                <div className="container mx-auto max-w-[75rem]">
                    <div className="flex flex-col md:flex-row items-center">
                        <motion.div
                            className="md:w-1/3 mb-8 md:mb-0"
                            variants={fromLeftVariants}
                            initial="hidden"
                            animate={heroInView ? "visible" : "hidden"}
                            transition={{ delay: 0.2 }}
                        >
                            <Image
                                src="/images/about-1.png"
                                alt="Financial professionals"
                                width={320}
                                height={450}
                                className="rounded-md"
                            />
                        </motion.div>

                        <motion.div
                            className="md:w-1/3 text-center px-8"
                            variants={expandVariants}
                            initial="hidden"
                            animate={heroInView ? "visible" : "hidden"}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.h1
                                className="text-3xl font-bold mb-4"
                                initial={{ opacity: 0, y: -20 }}
                                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Building trust through financial excellence
                            </motion.h1>
                            <motion.p
                                className="text-gray-600 mb-6"
                                initial={{ opacity: 0 }}
                                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                Financial consultants of your side, delivering forward-thinking expertise. An iconic partnership for clarity and lasting results.
                            </motion.p>
                            <motion.button
                                className="bg-black text-white px-6 py-2 rounded-md"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.7, duration: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Learn more
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="md:w-1/3 flex flex-row-reverse"
                            variants={fromRightVariants}
                            initial="hidden"
                            animate={heroInView ? "visible" : "hidden"}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex-col">
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                    transition={{ delay: 0.5, duration: 0.7 }}
                                >
                                    <Image
                                        src="/images/about-2.png"
                                        alt="Financial professionals meeting"
                                        width={320}
                                        height={160}
                                        className="rounded-md mb-8"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                    transition={{ delay: 0.7, duration: 0.7 }}
                                >
                                    <Image
                                        src="/images/about-3.png"
                                        alt="Financial professionals meeting"
                                        width={320}
                                        height={300}
                                        className="rounded-md"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Journey Section - Alternate sides */}
            <motion.section
                className="pt-12"
                ref={journeyRef}
                initial="hidden"
                animate={journeyInView ? "visible" : "hidden"}
                variants={fromBottomVariants}
            >
                <div className="container mx-auto px-4 max-w-[75rem]">
                    <div className="flex flex-col md:flex-row items-center">
                        <motion.div
                            className="md:w-1/2 mb-8 md:mb-0 mr-20 ml-20"
                            variants={fromLeftVariants}
                            initial="hidden"
                            animate={journeyInView ? "visible" : "hidden"}
                            transition={{ delay: 0.2 }}
                        >
                            <Image
                                src="/images/journey.jpg"
                                alt="Financial professionals"
                                width={500}
                                height={400}
                                style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
                            />
                        </motion.div>
                        <motion.div
                            className="md:w-1/2"
                            variants={fromRightVariants}
                            initial="hidden"
                            animate={journeyInView ? "visible" : "hidden"}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.h2
                                className="text-3xl font-bold mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={journeyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Our journey towards financial excellence
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                animate={journeyInView ? "visible" : "hidden"}
                                variants={staggerContainerVariants}
                            >
                                <motion.p
                                    className="text-gray-600 mb-4"
                                    variants={staggerItemVariants}
                                >
                                    Unleash more of what is possible for your business. Partner with us to access expert-level industry insights and achieve greater financial value.
                                </motion.p>
                                <motion.p
                                    className="text-gray-600 mb-4"
                                    variants={staggerItemVariants}
                                >
                                    Partner with us for greater financial value and expert-level industry insights.
                                </motion.p>
                                <motion.p
                                    className="text-gray-600"
                                    variants={staggerItemVariants}
                                >
                                    Take a look at our blog for tips!
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Values Section - Grid with staggered animations */}
            <motion.section
                className="mt-12 py-12 bg-gray-50"
                ref={valuesRef}
                initial="hidden"
                animate={valuesInView ? "visible" : "hidden"}
                variants={expandVariants}
            >
                <div className="container mx-auto px-4 max-w-[75rem]">
                    <div className="flex flex-col md:flex-row">
                        <motion.div
                            className="md:w-1/2 mb-8 md:mb-0"
                            variants={fromLeftVariants}
                            initial="hidden"
                            animate={valuesInView ? "visible" : "hidden"}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.h2
                                className="text-3xl font-bold mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Guiding your financial success values
                            </motion.h2>
                            <motion.p
                                className="text-gray-600 mb-8"
                                initial={{ opacity: 0 }}
                                animate={valuesInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Core values in driving exceptional outcomes. Build financial resilience, implement growth-focused strategies, and navigate complex regulatory environments with confidence.
                            </motion.p>

                            <motion.div
                                className="grid grid-cols-2 gap-4"
                                variants={staggerContainerVariants}
                                initial="hidden"
                                animate={valuesInView ? "visible" : "hidden"}
                            >
                                {companyValues.map((value) => (
                                    <motion.div
                                        key={value.id}
                                        className="bg-white p-4 rounded-md"
                                        variants={staggerItemVariants}
                                        whileHover={{
                                            scale: 1.03,
                                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                                        }}
                                    >
                                        <div className="flex items-center mb-3">
                                            <motion.div
                                                className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white mr-3"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                {value.icon === "integrity" && <span>I</span>}
                                                {value.icon === "trust" && <span>T</span>}
                                                {value.icon === "clarity" && <span>C</span>}
                                                {value.icon === "excellence" && <span>E</span>}
                                            </motion.div>
                                            <h3 className="font-medium">{value.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600">{value.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="md:w-1/2 md:pl-12 flex items-center justify-center flex-row-reverse"
                            variants={fromRightVariants}
                            initial="hidden"
                            animate={valuesInView ? "visible" : "hidden"}
                            transition={{ delay: 0.5 }}
                        >
                            <Image
                                src="/images/trust.png"
                                alt="Financial growth illustration"
                                width={500}
                                height={450}
                                className="rounded-md"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Team Section */}
            <motion.section
                className="pt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fromBottomVariants}
            >
                <Teams />
            </motion.section>
        </motion.div>
    );
}