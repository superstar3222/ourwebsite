"use client";

interface HeaderProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white z-50">
            <div className="container mx-auto px-12 py-6 flex justify-between items-center">
                <div className="flex items-center">
                    <button
                        onClick={() => setCurrentPage('home')}
                        className="text-3xl font-bold text-teal-600"
                    >
                        LuckStack
                    </button>
                </div>

                <nav className="hidden md:flex space-x-8 text-xl">
                    <button
                        onClick={() => setCurrentPage('home')}
                        className={`${currentPage === 'home' ? 'text-teal-600 font-medium' : 'text-gray-700'} hover:text-teal-600 cursor-pointer`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => setCurrentPage('team')}
                        className={`${currentPage === 'team' ? 'text-teal-600 font-medium' : 'text-gray-700'} hover:text-teal-600 cursor-pointer`}
                    >
                        Team
                    </button>
                    <button
                        onClick={() => setCurrentPage('service')}
                        className={`${currentPage === 'service' ? 'text-teal-600 font-medium' : 'text-gray-700'} hover:text-teal-600 cursor-pointer`}
                    >
                        Services
                    </button>
                    <button
                        onClick={() => setCurrentPage('faq')}
                        className={`${currentPage === 'faq' ? 'text-teal-600 font-medium' : 'text-gray-700'} hover:text-teal-600 cursor-pointer`}
                    >
                        FAQ
                    </button>
                    <button
                        onClick={() => setCurrentPage('contact')}
                        className={`${currentPage === 'contact' ? 'text-teal-600 font-medium' : 'text-gray-700'} hover:text-teal-600 cursor-pointer`}
                    >
                        Contact
                    </button>
                </nav>

                <div>
                    <button
                        onClick={() => setCurrentPage('contact')}
                        className="bg-black text-white px-4 py-2 rounded-md"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </header>
    );
}