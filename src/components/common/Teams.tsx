import { teamMembers } from '@/utils/utils';
import Image from 'next/image';

export default function Teams() {

    return (
        <div className="container mx-auto px-4 text-center max-w-[75rem]">
            <h2 className="text-3xl font-bold mb-16">Dedicated professionals ready to help</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                    <div key={member.id} className="group cursor-pointer" style={{ height: '450px' }}>
                        {/* Fixed size container for both states */}
                        <div className="h-full w-full relative">
                            {/* Normal state - just the image */}
                            <div className="absolute inset-0 rounded-md overflow-hidden group-hover:opacity-0 transition-opacity duration-300">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: '0.375rem'
                                    }}
                                    priority
                                />
                            </div>

                            {/* Hover state - card with name, position and image */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#f9f9f7] rounded-md overflow-hidden flex flex-col">
                                <div className="py-6 px-4 text-center">
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-gray-600 mt-1">{member.position}</p>
                                </div>

                                <div className="flex-1 relative">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        style={{
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}