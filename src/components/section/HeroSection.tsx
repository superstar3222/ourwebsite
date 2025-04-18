"use client";

import Image from "next/image";
import PieChart from "../../components/common/PieChart";
import Button from "../common/Button";

export default function HeroSection() {
    return (
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

                    <Button
                        content="Contact Us"
                        onClick={() => console.log("Redirect to contact page")}
                    />

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

                <div className="relative">
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
    )
}