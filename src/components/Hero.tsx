import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Hero Text */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 mb-4">
            Build Your Perfect Stack
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Explore the
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              {" "}Dev Stack
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Discover modern technologies, compare tools, and build your
            perfect development stack for your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-lg text-white font-semibold bg-linear-to-r from-orange-500 via-pink-500 to-violet-600">
              Explore Technologies
            </button>

            <button className="px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Developer illustration"
            className="w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;