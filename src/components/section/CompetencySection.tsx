import { competencies } from "@/utils/utils";
import { motion, Variants } from "framer-motion";
import React from "react";

// Define itemVariants here since it's referenced in the component
const itemVariants: Variants = {
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

interface CompetencySectionProps {
    containerVariants: Variants;
}

export const CompetencySection: React.FC<CompetencySectionProps> = ({ containerVariants }) => {
    return (
        <div className="container mx-auto max-w-[75rem] rounded">
            <motion.div
                className="flex justify-center text-4xl font-bold mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Engineering services and featured competencies
            </motion.div>

            <motion.div
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {competencies.map((competency) => (
                    <motion.div
                        key={competency.id}
                        className="relative rounded-xl h-[280px] group perspective"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.3 }
                        }}
                    >
                        {/* Card container with preserve-3d */}
                        <div className="relative w-full h-full preserve-3d transition-all duration-500 ease-out transform-style-3d">
                            {/* Card Front */}
                            <div
                                className={`absolute inset-0 p-8 rounded-xl bg-gradient-to-br ${competency.color} text-white shadow-lg
                                flex flex-col justify-between backface-hidden group-hover:rotate-y-180`}
                            >
                                <div className="bg-white/20 p-4 rounded-full w-fit">
                                    {competency.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{competency.title}</h3>
                                    <p className="text-white/80">{competency.description}</p>
                                </div>
                            </div>

                            {/* Card Back */}
                            <div
                                className={`absolute inset-0 p-8 rounded-xl bg-white shadow-lg
                                flex flex-col justify-between backface-hidden rotate-y-180 group-hover:rotate-y-0`}
                            >
                                <div className="flex justify-between items-start">
                                    <div className={`bg-gradient-to-br ${competency.color} p-3 rounded-full text-white`}>
                                        {competency.icon}
                                    </div>
                                    <motion.div
                                        className="rounded-full bg-gray-100 p-2 cursor-pointer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </motion.div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{competency.title}</h3>
                                    <p className="text-gray-600 mb-4">{competency.description}</p>
                                    <motion.button
                                        className={`bg-gradient-to-r ${competency.color} text-white px-4 py-2 rounded-lg`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Learn More
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};