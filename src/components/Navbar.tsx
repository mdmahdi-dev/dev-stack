function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold">
          Dev Stack
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block">
            Sign In
          </button>

          <button className="px-5 py-2 rounded-full bg-black text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;