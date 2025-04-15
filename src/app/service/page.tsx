"use client";

import React, { useState } from 'react';
import { testimonials } from '@/utils/utils';
import Image from 'next/image';
import CTO from '../../components/common/CTO';
import Blogs from '../../components/common/Blogs';

export default function ServiceContent() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Navigation functions
    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Service cards data
    const serviceCards = [
        {
            id: 1,
            icon: "chart",
            title: "Bookkeeping and Reporting",
            image: "/images/recruiter.png",
            description: "At eget sapien ultricies risus sed laoreet ultrices rhoncus turpis. Et donec ut arcu nulla suspendisse egestas tellus."
        },
        {
            id: 2,
            icon: "money",
            title: "Cash Flow Management",
            image: "/images/Liam.png",
            description: "BitTorrent THETA solana sectionn celo avalanche. Decred BitTorrent polygon flow fantom. Vechain maker dai TRON."
        },
        {
            id: 3,
            icon: "tax",
            title: "Personalized Tax Solutions",
            image: "/images/service3.png",
            description: "Filecoin celo TRON chainlink cosmos Harmony polygon nem icp algorand EOS monero. THE-TA stellar."
        },
        {
            id: 4,
            icon: "assistance",
            title: "Tax Filing Assistance",
            image: "/images/Olivia.png",
            description: "USD ox solana BitTorrent stellar UTXO compound binance secret. Serum near celo TRON quant vechain Pancakeswap."
        },
        {
            id: 5,
            icon: "payroll",
            title: "Custom Payroll Solutions",
            image: "/images/Miranda.png",
            description: "BitTorrent hedra kaleno greezer dogma polygon smart flow halo hedara golem Pancakeswap Paracelswap amp."
        },
        {
            id: 6,
            icon: "statement",
            title: "Financial Statement",
            image: "/images/Elijah.png",
            description: "At eget sapien ultricies risus sed laoreet ultrices rhoncus turpis. Et donec ut arcu nulla suspendisse egestas tellus."
        }
    ];

    return (
        <div className="pt-16">
            {/* Services Header */}
            <section className="py-12 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-2">Achieving financial clarity</h1>
                    <h2 className="text-4xl font-bold mb-10">through services</h2>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-16">
                <div className="container mx-auto px-4 max-w-[75rem]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {serviceCards.map((service) => (
                            <div key={service.id} className="bg-stone-100 rounded-md overflow-hidden">
                                <div>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={400}
                                        height={400}
                                        style={{ objectFit: 'cover', borderRadius: '0.375rem', height: '400px' }}
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center mb-2">
                                        <div className="w-8 h-8 bg-teal-600 text-white rounded-md flex items-center justify-center mr-2">
                                            {service.icon === "chart" && (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            )}
                                            {service.icon === "money" && (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            )}
                                            {service.icon === "tax" && (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                                                </svg>
                                            )}
                                            {service.icon === "assistance" && (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            )}
                                            {service.icon === "payroll" && (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            )}
                                            {service.icon === "statement" && (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            )}
                                        </div>
                                        <h3 className="font-medium">{service.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                                    <button className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white rounded-full ml-auto">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
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
                                    style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
                                />
                            </div>

                            <div className="flex-1 pl-8 pr-16">
                                <h3 className="text-2xl font-bold">{testimonials[currentTestimonial].name}</h3>
                                <p className="text-gray-600 mb-4">{testimonials[currentTestimonial].position}</p>

                                <p className="text-xl">
                                    {testimonials[currentTestimonial].text}
                                </p>
                            </div>
                        </div>

                        <div className="absolute top-0 right-8 flex gap-2">
                            <button onClick={prevTestimonial} className="w-10 h-10 rounded-xl bg-white text-black hover:bg-teal-800 hover:text-white transition-colors duration-200 flex items-center justify-center">
                                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" fill="currentColor" />
                                </svg>
                            </button>
                            <button onClick={nextTestimonial} className="w-10 h-10 rounded-xl bg-white text-black hover:bg-teal-800 hover:text-white transition-colors duration-200 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-16">
                <Blogs />
            </section>

            {/* CTO Section */}
            <section className="py-8">
                <CTO />
            </section>
        </div>
    );
}