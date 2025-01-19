const AboutSection = () => {
    return (
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary">About MLH Spoken English</h2>
          <p className="mt-4 text-lg text-gray-700">
            Learn spoken English with interactive courses and expert guidance.
          </p>
  
          {/* Content */}
          <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
                    <img
                    src="/mlh_wite.png"
                    alt="Spoken English Class"
                    width="300"
                    height="400"
                    className="rounded-lg shadow-lg"
                     />
                     </div>
  
            {/* Text */}
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-semibold text-primary">Why Choose Us?</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li>✔️ Live classes with expert tutors</li>
                <li>✔️ Real conversation practice</li>
                <li>✔️ Personalized learning plans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  