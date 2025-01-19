import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-secondary text-center py-16">
      <h2 className="text-4xl font-bold text-black">Start Your English Journey Today!</h2>
      <p className="text-lg mt-4 text-black">
        Enroll now and enhance your fluency.
      </p>
      <Link href="/contact">
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg">
          Contact Us
        </button>
      </Link>
    </section>
  );
};

export default CTA;
