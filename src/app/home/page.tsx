"use client";

import Image from "next/image";
import PieChart from "../../components/common/PieChart";
import React, { useState } from "react";
import { testimonials } from "@/utils/utils";
import Teams from "../../components/common/Teams";
import CTO from "../../components/common/CTO";

export default function HomeContent() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Navigation functions for testimonials
    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="pt-4">
            {/* Hero Section */}
            <section className="bg-[#efece3] pt-[6.25rem] pb-[6.25rem]">
                <div className="mx-auto pl-[1.5rem] pr-[1.5rem]">
                    <div className="flex gap-[3.75rem] justify-center md:flex-row items-center max-w-[75rem] ml-auto mr-auto">
                        <div className="max-w-[43rem]">
                            <h1 className="text-[4.25rem] mb-4">
                                <span className="text-[4.5rem] font-semibold">LuckStack </span>
                                turns your vision into reality
                            </h1>
                            <p className="text-gray-700 mb-6">
                                {"Our world's most passionate and highly skilled team will turn your ideas into reality."}
                            </p>
                            <button
                                onClick={() => console.log("Redirect to contact page")}
                                className="bg-black text-white px-5 py-2 rounded-md"
                            >
                                Contact Us
                            </button>

                            <div className="flex mt-10 space-x-6">
                                <div className="bg-white p-3 pr-8 pl-8 rounded-md shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <div className="mr-2">
                                            <span className="flex items-center justify-center w-7 h-7 bg-teal-600 text-white rounded-md text-sm font-bold">
                                                A
                                            </span>
                                        </div>
                                        <span className="font-medium text-xl font-semibold">LuckStack</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex mr-2">
                                            {[1, 2, 3, 4, 5].map((star, index) => (
                                                <svg
                                                    key={index}
                                                    className={`w-5 h-5 ${index < 4 ? "text-gray-400" : "text-gray-300"}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-md text-gray-600">5.0/4.50</span>
                                    </div>
                                </div>

                                <div className="bg-white p-3 rounded-md shadow-sm items-center justify-center flex flex-col">
                                    <div className="flex items-center mb-2">
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        <span className="text-md">Call us</span>
                                    </div>
                                    <div>
                                        <span className="text-md">+1 (904) 490-0180</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 relative">
                            <div className="relative" style={{ width: "100%" }}>
                                <Image
                                    src="/images/recruiter.png"
                                    alt="Recruiter of LuckStack"
                                    width={500}
                                    height={450}
                                    style={{ objectFit: "cover", borderRadius: "0.375rem" }}
                                    priority
                                />

                                {/* Circular chart - positioned absolutely */}
                                <div className="absolute bottom-1/4 transform -translate-x-1/2">
                                    <PieChart />
                                </div>

                                {/* Right side bar stats */}
                                <div className="absolute top-3/4 right-0 transform translate-x-1/3 -translate-y-1/2 bg-white p-3 rounded-md shadow-md w-56">
                                    <div className="mb-2">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm">Success in IRS Audits</span>
                                            <span className="text-sm font-semibold">98%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-teal-700 rounded-full"
                                                style={{ width: "98%" }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm">Tax Optimization</span>
                                            <span className="text-sm font-semibold">70%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-teal-700 rounded-full"
                                                style={{ width: "70%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12">
                <div className="bg-[#f8f7f3] container mx-auto p-8 max-w-[75rem]">
                    <div className="mx-auto p-8 relative">
                        <div className="flex">
                            <div className="mr-6">
                                <Image
                                    src={testimonials[currentTestimonial].image}
                                    alt={testimonials[currentTestimonial].name}
                                    width={150}
                                    height={200}
                                    style={{ objectFit: "cover", borderRadius: "0.375rem" }}
                                />
                            </div>

                            <div className="flex-1 pl-8 pr-16">
                                <h3 className="text-2xl font-bold">{testimonials[currentTestimonial].name}</h3>
                                <p className="text-gray-600 mb-4">{testimonials[currentTestimonial].position}</p>

                                <p className="text-xl">{testimonials[currentTestimonial].text}</p>
                            </div>
                        </div>

                        <div className="absolute top-0 right-8 flex gap-2">
                            <button
                                onClick={prevTestimonial}
                                className="w-10 h-10 rounded-xl bg-white text-black hover:bg-teal-800 hover:text-white transition-colors duration-200 flex items-center justify-center"
                            >
                                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-10 h-10 rounded-xl bg-white text-black hover:bg-teal-800 hover:text-white transition-colors duration-200 flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path
                                        d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTO Section */}
            <section className="py-12">
                <CTO />
            </section>

            {/* Team Section */}
            <section className="py-12">
                <Teams />
            </section>
        </div>
    );
}