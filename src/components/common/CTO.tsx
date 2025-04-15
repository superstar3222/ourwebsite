import Image from 'next/image';

export default function CTO() {

    return (
        <div className="container mx-auto max-w-[75rem]">
            <div className="bg-teal-800 text-white rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3 p-30">
                        <h2 className="text-4xl font-bold mb-6">Get expert Development assistance now</h2>
                        <button className="bg-white text-black mt-4 px-5 py-2 rounded-md font-medium font-semibold">
                            Get Started
                        </button>
                    </div>
                    <div className="md:w-1/3 relative">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-700 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-700 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
                        <div className="absolute top-30 right-100 w-48 h-48 bg-white rounded-full transform -translate-x-1/8 translate-y-1/8"></div>
                        <div className="relative h-full flex items-center justify-center right-60">
                            <Image
                                src={"/images/CTO.png"}
                                alt="CTO"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}