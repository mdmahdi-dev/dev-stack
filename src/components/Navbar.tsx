import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-2xl md:hidden"
                    aria-label="Open menu"
                >
                    ☰
                </button>

                {/* Logo */}
                <div className="text-xl font-bold text-gray-900 md:text-2xl">
                    Dev Stack
                </div>

                {/* Navigation Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <a href="#" className="text-gray-700 hover:text-black">
                        Home
                    </a>

                    <a href="#" className="text-gray-700 hover:text-black">
                        Technologies
                    </a>

                    <a href="#" className="text-gray-700 hover:text-black">
                        Projects
                    </a>

                    <a href="#" className="text-gray-700 hover:text-black">
                        About
                    </a>

                    <a href="#" className="text-gray-700 hover:text-black">
                        Contact
                    </a>
                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <div className="absolute left-0 top-full w-full border-b border-gray-200 bg-white p-6 md:hidden">
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-gray-700 hover:text-black">
                                Home
                            </a>

                            <a href="#" className="text-gray-700 hover:text-black">
                                Technologies
                            </a>

                            <a href="#" className="text-gray-700 hover:text-black">
                                Projects
                            </a>

                            <a href="#" className="text-gray-700 hover:text-black">
                                About
                            </a>

                            <a href="#" className="text-gray-700 hover:text-black">
                                Contact
                            </a>
                        </div>
                    </div>
                )}

                {/* Authentication */}
                <div className="flex items-center gap-3">
                    <button className="hidden text-gray-700 sm:block">
                        Sign In
                    </button>

                    <button className="rounded-full bg-black px-5 py-2 font-semibold text-white hover:bg-gray-800">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;