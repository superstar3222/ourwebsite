// components/Footer.tsx
"use client";

interface FooterProps {
    setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
    return (
        <footer className="bg-[#efece3] py-16 mt-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                        <span className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white rounded-md mr-1 text-lg font-bold">A</span>
                        <span className="text-lg font-bold">ccruefy</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                        />
                        <button className="bg-black text-white px-4 py-2 rounded-r-md">
                            Sign Up
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-4 mb-12">
                    <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
                        <h4 className="text-sm font-bold mb-4">Main page</h4>
                        <ul className="space-y-2 text-sm">
                            <li><button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-teal-600">Home</button></li>
                            <li><button onClick={() => setCurrentPage('about')} className="text-gray-600 hover:text-teal-600">About</button></li>
                            <li><button onClick={() => setCurrentPage('contact')} className="text-gray-600 hover:text-teal-600">Contact</button></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
                        <h4 className="text-sm font-bold mb-4">Inner page</h4>
                        <ul className="space-y-2 text-sm">
                            <li><button onClick={() => setCurrentPage('service')} className="text-gray-600 hover:text-teal-600">Service</button></li>
                            <li><button className="text-gray-600 hover:text-teal-600">Blog</button></li>
                            <li><button onClick={() => setCurrentPage('pricing')} className="text-gray-600 hover:text-teal-600">Price</button></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
                        <h4 className="text-sm font-bold mb-4">Inner page</h4>
                        <ul className="space-y-2 text-sm">
                            <li><button className="text-gray-600 hover:text-teal-600">Service details</button></li>
                            <li><button className="text-gray-600 hover:text-teal-600">Team</button></li>
                            <li><button className="text-gray-600 hover:text-teal-600">Team details</button></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
                        <h4 className="text-sm font-bold mb-4">Utility page</h4>
                        <ul className="space-y-2 text-sm">
                            <li><button className="text-gray-600 hover:text-teal-600">Style guide</button></li>
                            <li><button className="text-gray-600 hover:text-teal-600">License</button></li>
                            <li><button className="text-gray-600 hover:text-teal-600">404 not found</button></li>
                            <li><button className="text-gray-600 hover:text-teal-600">Password protected</button></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/5 px-4">
                        <h4 className="text-sm font-bold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center text-gray-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                hello@accruefy.com
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                555-123-7334
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                7840 Columbia Avenue
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t">
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Powered by</span>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span>Webflow</span>
                            <span className="mx-2">·</span>
                            <span>Designed by</span>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span>WebClown</span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white rounded-full">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </button>
                        <button className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white rounded-full">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </button>
                        <button className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white rounded-full">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </button>
                        <button className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white rounded-full">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}