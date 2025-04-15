"use client";

import Image from 'next/image';
import Teams from '../../components/common/Teams';
import CTO from '../../components/common/CTO';
import Blogs from '../../components/common/Blogs';

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

    // Brand partners data
    const brandPartners = [
        { id: 1, name: "LexisNexis", logo: "/partner-1.png" },
        { id: 2, name: "Cognizant", logo: "/partner-2.png" },
        { id: 3, name: "Zoom", logo: "/partner-3.png" },
        { id: 4, name: "Salesforce", logo: "/partner-4.png" },
        { id: 5, name: "CapGemini", logo: "/partner-5.png" },
        { id: 6, name: "Intuit", logo: "/partner-6.png" },
    ];

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-12">
                <div className="container mx-auto max-w-[75rem]">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-8 md:mb-0">
                            <Image
                                src="/images/about-1.png"
                                alt="Financial professionals"
                                width={320}
                                height={450}
                                className="rounded-md"
                            />
                        </div>

                        <div className="md:w-1/3 text-center px-8">
                            <h1 className="text-3xl font-bold mb-4">Building trust through financial excellence</h1>
                            <p className="text-gray-600 mb-6">
                                Financial consultants of your side, delivering forward-thinking expertise. An iconic partnership for clarity and lasting results.
                            </p>
                            <button className="bg-black text-white px-6 py-2 rounded-md">
                                Learn more
                            </button>
                        </div>

                        <div className="md:w-1/3 flex flex-row-reverse">
                            <div className="flex-col">
                                <Image
                                    src="/images/about-2.png"
                                    alt="Financial professionals meeting"
                                    width={320}
                                    height={160}
                                    className="rounded-md mb-8"
                                />
                                <Image
                                    src="/images/about-3.png"
                                    alt="Financial professionals meeting"
                                    width={320}
                                    height={300}
                                    className="rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Partners Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-xl font-medium text-center mb-10">Our brand your financial success</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {brandPartners.map((partner) => (
                            <div key={partner.id} className="w-24 grayscale hover:grayscale-0 transition-all">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={96}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-[75rem]">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 mr-20 ml-20">
                            <Image
                                src="/images/journey.jpg"
                                alt="Financial professionals"
                                width={500}
                                height={400}
                                style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">Our journey towards financial excellence</h2>
                            <p className="text-gray-600 mb-4">
                                Unleash more of what is possible for your business. Partner with us to access expert-level industry insights and achieve greater financial value.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Partner with us for greater financial value and expert-level industry insights.
                            </p>
                            <p className="text-gray-600">
                                Take a look at our blog for tips!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-[75rem]">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-3xl font-bold mb-4">Guiding your financial success values</h2>
                            <p className="text-gray-600 mb-8">
                                Core values in driving exceptional outcomes. Build financial resilience, implement growth-focused strategies, and navigate complex regulatory environments with confidence.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {companyValues.map((value) => (
                                    <div key={value.id} className="bg-white p-4 rounded-md">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white mr-3">
                                                {value.icon === "integrity" && <span>I</span>}
                                                {value.icon === "trust" && <span>T</span>}
                                                {value.icon === "clarity" && <span>C</span>}
                                                {value.icon === "excellence" && <span>E</span>}
                                            </div>
                                            <h3 className="font-medium">{value.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="md:w-1/2 md:pl-12 flex items-center justify-center flex-row-reverse">
                            <Image
                                src="/images/trust.png"
                                alt="Financial growth illustration"
                                width={500}
                                height={450}
                                className="rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-12">
                <Teams />
            </section>

            {/* CTO Section */}
            <section className="py-16">
                <CTO />
            </section>

            {/* Blog Preview Section */}
            <section className="py-16">
                <Blogs />
            </section>
        </div>
    );
}