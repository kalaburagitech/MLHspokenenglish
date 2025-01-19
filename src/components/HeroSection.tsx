import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-800 text-white text-center py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold">Master Spoken English with Confidence</h1>
        <p className="text-lg mt-4">Join our interactive courses and become fluent in English.</p>
        <Link href="/pricing">
          <button className="mt-6 bg-secondary text-black px-6 py-3 rounded-lg font-semibold">
            Get Started Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
