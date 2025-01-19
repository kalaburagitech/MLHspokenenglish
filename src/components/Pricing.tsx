const Pricing = () => {
    return (
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary">Choose Your Plan</h2>
          <p className="mt-2 text-lg text-gray-700">
            Select a pricing plan that fits your learning goals.
          </p>
  
          {/* Pricing Cards */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {/* Basic Plan */}
            <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-300">
              <h3 className="text-2xl font-semibold">Basic Plan</h3>
              <p className="text-gray-600 mt-2">$10/month</p>
              <ul className="mt-4 text-gray-600">
                <li>✔️ Access to all beginner lessons</li>
                <li>✔️ Weekly live Q&A</li>
              </ul>
              <button className="mt-6 bg-primary text-white px-6 py-2 rounded-lg">
                Get Started
              </button>
            </div>
  
            {/* Pro Plan */}
            <div className="p-6 bg-white rounded-lg shadow-lg border border-primary">
              <h3 className="text-2xl font-semibold text-primary">Pro Plan</h3>
              <p className="text-gray-600 mt-2">$30/month</p>
              <ul className="mt-4 text-gray-600">
                <li>✔️ Everything in Basic</li>
                <li>✔️ 1-on-1 Mentorship</li>
                <li>✔️ Advanced courses</li>
              </ul>
              <button className="mt-6 bg-primary text-white px-6 py-2 rounded-lg">
                Get Pro
              </button>
            </div>
  
            {/* Custom Plan */}
            <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-300">
              <h3 className="text-2xl font-semibold">Custom Plan</h3>
              <p className="text-gray-600 mt-2">Contact Us</p>
              <ul className="mt-4 text-gray-600">
                <li>✔️ Tailored learning experience</li>
                <li>✔️ Corporate & group training</li>
              </ul>
              <button className="mt-6 bg-primary text-white px-6 py-2 rounded-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Pricing;
  