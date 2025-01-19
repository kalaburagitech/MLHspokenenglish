const Features = () => {
    return (
      <section className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">Our Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Live Classes</h3>
              <p className="text-gray-600 mt-2">Interactive classes with expert tutors.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Real Conversations</h3>
              <p className="text-gray-600 mt-2">Practice English with real-life scenarios.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Flexible Timing</h3>
              <p className="text-gray-600 mt-2">Learn at your own pace.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  