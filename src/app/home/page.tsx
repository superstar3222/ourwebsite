import Image from 'next/image';
import PieChart from '../../components/common/PieChart';
import React, { useState } from 'react';
import { testimonials } from '@/utils/utils';
import Teams from '../../components/common/Teams';
import CTO from '../../components/common/CTO';

interface HomeContentProps {
    setCurrentPage: (page: string) => void;
}

export default function HomeContent({ setCurrentPage }: HomeContentProps) {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Navigation functions
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
                                onClick={() => setCurrentPage('contact')}
                                className="bg-black text-white px-5 py-2 rounded-md"
                            >
                                Contact Us
                            </button>

                            <div className="flex mt-10 space-x-6">
                                <div className="bg-white p-3 pr-8 pl-8 rounded-md shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <div className="mr-2">
                                            <span className="flex items-center justify-center w-7 h-7 bg-teal-600 text-white rounded-md text-sm font-bold">A</span>
                                        </div>
                                        <span className="font-medium text-xl font-semibold">LuckStack</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex mr-2">
                                            {[1, 2, 3, 4, 5].map((star, index) => (
                                                <svg key={index} className={`w-5 h-5 ${index < 4 ? "text-gray-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-md text-gray-600">5.0/4.50</span>
                                    </div>
                                </div>

                                <div className="bg-white p-3 rounded-md shadow-sm items-center justify-center flex flex-col">
                                    <div className="flex items-center mb-2">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="text-md">Call us</span>
                                    </div>
                                    <div>
                                        <span className="text-md">+1 (904) 490-0180</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" mt-8 relative">
                            <div className="relative" style={{ width: '100%' }}>
                                <Image
                                    src="/images/recruiter.png"  // Try without the 'images/' folder
                                    alt="Recruiter of LuckStack"
                                    width={500}
                                    height={450}
                                    style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
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
                                            <div className="h-full bg-teal-700 rounded-full" style={{ width: '98%' }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm">Tax Optimization</span>
                                            <span className="text-sm font-semibold">70%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-teal-700 rounded-full" style={{ width: '70%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Transforming Ideas into real success</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2">96%</div>
                            <div className="text-gray-600 text-sm">Client Satisfaction Rate</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2">20+</div>
                            <div className="text-gray-600 text-sm">Years of Experience</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2">500</div>
                            <div className="text-gray-600 text-sm">Successful Tax Filings Annually</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-gray-600 text-sm">Tax Professionals on Team</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Partner Section */}
            <section className="py-12 mb-[2rem]">
                <div className="container mx-auto px-4 max-w-[75rem]">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 relative">
                            <Image
                                src={"/images/Olivia.png"}
                                alt="Olivia"
                                width={400}
                                height={300}
                                style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
                            />
                            <button
                                onClick={() => setCurrentPage('service')}
                                className="bg-black text-white px-5 py-2 rounded-md mt-8"
                            >
                                Learn More
                            </button>
                            <Image
                                src={"/images/67848fc0a223458325524541_Image.png"}
                                alt="Olivia2"
                                width={350}
                                height={300}
                                style={{ objectFit: 'cover', borderRadius: '0.375rem', position: 'absolute', zIndex: 1, right: 0, bottom: 0 }}
                            />
                        </div>

                        <div className="md:w-1/2 md:pl-10">
                            <h2 className="text-3xl font-bold mb-6">Your trusted accounting partner awaits</h2>
                            <p className="text-gray-700 mb-6">
                                We are experts in financial consulting, compliance, and management. Our professional advisors offer comprehensive services that focus on growth-oriented solutions for your business.
                            </p>

                            <ul className="space-y-4 mb-6">
                                <li className="flex items-center text-gray-700">
                                    <svg className="w-5 h-5 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Expert Team of Professionals
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <svg className="w-5 h-5 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    24/7 Online Support
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <svg className="w-5 h-5 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Trusted by Industry Leaders
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <svg className="w-5 h-5 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Rapid Financing Solutions
                                </li>
                            </ul>

                            <div className="grid grid-cols-2 gap-8 mt-8">
                                <div>
                                    <div className="text-3xl font-bold mb-1">20+</div>
                                    <div className="text-gray-600 text-sm">Years of Experience</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-1">8K</div>
                                    <div className="text-gray-600 text-sm">Happy Clients</div>
                                </div>
                            </div>

                            <button
                                onClick={() => setCurrentPage('service')}
                                className="bg-black text-white px-5 py-2 rounded-md mt-8"
                            >
                                Explore Services
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-12">
                <div className="container mx-auto max-w-[75rem]">
                    <h2 className="text-3xl font-bold mb-16">Achieving financial clarity through services</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className='flex flex-col gap-12'>
                            <div className="bg-white p-6 rounded-md shadow-sm flex items-start">
                                <div className="bg-blue-100 p-2 rounded-md mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-2">Personalized Tax Solutions</h3>
                                    <p className="text-gray-600 text-sm">Algorand IOTA solana Tezos chainlink filecoin, celo TRON chainlink cosmos. Harmony polygon nem icp algorand.</p>
                                    <div className="mt-4 flex justify-end">
                                        <button className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-md shadow-sm flex items-start">
                                <div className="bg-green-100 p-2 rounded-md mr-4">
                                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-2">Bookkeeping Services</h3>
                                    <p className="text-gray-600 text-sm">Algorand IOTA solana Tezos chainlink filecoin, celo TRON chainlink cosmos. Harmony polygon nem icp algorand.</p>
                                    <div className="mt-4 flex justify-end">
                                        <button className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row-reverse'>
                            <Image
                                src={"/images/66be5343fec05a83403151ed_Process 03.png"}
                                alt='services'
                                width={500}
                                height={500}
                                style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Financial Approaches Section */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-[75rem]">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                            <h2 className="text-3xl font-bold mb-6">Smart approaches to financial success</h2>
                            <p className="text-gray-700 mb-8">
                                At eget sapien ultricies risus sed laoreet ultrices rhoncus turpis. Et donec ut arcu nulla suspendisse egestas tellus. USD ox solana BitTorrent stellar UTXO compound binance.
                            </p>
                        </div>

                        <div className="flex flex-row-reverse md:w-1/2">
                            <div className="relative">
                                <Image
                                    src={"/images/678210f637b9ced4ce916682_Story Image.png"}
                                    alt='services'
                                    width={400}
                                    height={400}
                                    style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
                                />
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