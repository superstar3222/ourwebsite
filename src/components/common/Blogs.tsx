import Image from 'next/image';

export default function CTO() {

    return (
        <div className="container mx-auto px-4 max-w-[75rem]">
            <h2 className="text-3xl font-bold text-center text-gray-600 mb-16">Essential accounting advice and insights</h2>
            <div className="flex flex-col md:flex-row gap-8 w-[100%]">
                <div className="flex flex-col bg-[#efece3] shadow-sm rounded-md overflow-hidden justify-center items-center pt-0 pl-4 pr-4">
                    <div className="relative">
                        <Image
                            src="/images/advice.jpg"
                            alt="Cash Flow Statement"
                            width={720}
                            height={450}
                            style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
                        />
                    </div>
                    <div className="pt-8">
                        <h3 className="font-semibold text-xl mb-8">Understanding the Cash Flow Statement</h3>
                        <div className='flex bg-gray-300 h-[1px] mb-8' />
                        <div className="flex justify-between text-sm text-gray-500">
                            <span className='p-2 bg-white rounded-md text-black font-semibold'>Cash Flow</span>
                            <span>December 05, 2024</span>
                        </div>
                    </div>
                </div>
                <div className="w-full gap-6 flex flex-col">
                    <div className="flex shadow-sm rounded-md overflow-hidden p-4 ml-8 w-[100%] bg-[#efece3]">
                        <div className="relative ">
                            <Image
                                src="/images/Elijah.png"
                                alt="Cash Flow Statement"
                                width={280}
                                height={200}
                                style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
                            />
                        </div>
                        <div className="flex flex-col align-center justify-center p-10 w-[100%]">
                            <h3 className="text-[1.25rem] mb-4">Top Audit Preparation Tips for Businesses</h3>
                            <div className='flex bg-gray-300 h-[1px] mb-4' />
                            <div className="flex justify-between text-sm text-gray-500">
                                <span className='p-2 bg-white rounded-md text-black font-semibold'>Auditing</span>
                                <span>December 10, 2024</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex shadow-sm rounded-md overflow-hidden p-4 ml-8 w-[100%] bg-[#efece3]">
                        <div className="relative ">
                            <Image
                                src="/images/compliance.png"
                                alt="Cash Flow Statement"
                                width={280}
                                height={200}
                                style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
                            />
                        </div>
                        <div className="flex flex-col align-center justify-center p-10 w-[100%]">
                            <h3 className="text-[1.25rem] mb-4">Top Audit Preparation Tips for Businesses</h3>
                            <div className='flex bg-gray-300 h-[1px] mb-4' />
                            <div className="flex justify-between text-sm text-gray-500">
                                <span className='p-2 bg-white rounded-md text-black font-semibold'>Auditing</span>
                                <span>December 10, 2024</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex shadow-sm rounded-md overflow-hidden p-4 ml-8 w-[100%] bg-[#efece3]">
                        <div className="relative ">
                            <Image
                                src="/images/cash.png"
                                alt="Cash Flow Statement"
                                width={280}
                                height={200}
                                style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
                            />
                        </div>
                        <div className="flex flex-col align-center justify-center p-10 w-[100%]">
                            <h3 className="text-[1.25rem] mb-4">Top Audit Preparation Tips for Businesses</h3>
                            <div className='flex bg-gray-300 h-[1px] mb-4' />
                            <div className="flex justify-between text-sm text-gray-500">
                                <span className='p-2 bg-white rounded-md text-black font-semibold'>Auditing</span>
                                <span>December 10, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}