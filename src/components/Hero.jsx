export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 text-white flex items-center justify-center text-center px-4 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Welcome to Osumare
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          Converge, Collaborate & Change... Build your marketing power with our internal tools.
        </p>
        <button className="mt-8 px-5 sm:px-6 md:px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
