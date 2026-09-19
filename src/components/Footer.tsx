function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 py-12">

                {/* Top Footer */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Dev Stack
                        </h2>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
                            Discover modern technologies and build your
                            perfect development stack for your next project.
                        </p>

                        <div className="mt-5 flex gap-4">
                            <a href="#" className="text-gray-500 hover:text-black">
                                GitHub
                            </a>

                            <a href="#" className="text-gray-500 hover:text-black">
                                LinkedIn
                            </a>

                            <a href="#" className="text-gray-500 hover:text-black">
                                Twitter
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-gray-900">
                            Product
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-gray-600">
                            <a href="#" className="block hover:text-black">
                                Technologies
                            </a>

                            <a href="#" className="block hover:text-black">
                                Your Stack
                            </a>

                            <a href="#" className="block hover:text-black">
                                Projects
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-gray-900">
                            Company
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-gray-600">
                            <a href="#" className="block hover:text-black">
                                About
                            </a>

                            <a href="#" className="block hover:text-black">
                                Contact
                            </a>

                            <a href="#" className="block hover:text-black">
                                Careers
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-gray-900">
                            Legal
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-gray-600">
                            <a href="#" className="block hover:text-black">
                                Privacy Policy
                            </a>

                            <a href="#" className="block hover:text-black">
                                Terms of Service
                            </a>

                            <a href="#" className="block hover:text-black">
                                Cookie Policy
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="mt-12 flex flex-col gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <a href="#" className="hover:text-black">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-black">
                            Terms
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;