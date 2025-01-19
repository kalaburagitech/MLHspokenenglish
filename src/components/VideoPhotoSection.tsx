import Image from "next/image";

const VideoPhotoSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary">Our Learning Experience</h2>
        <p className="mt-4 text-lg text-gray-700">
          Watch real students learning English and explore our interactive classes!
        </p>

        {/* Video Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-primary">Watch Our Students Speak</h3>
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-6">
            <iframe
              className="w-full md:w-1/2 aspect-video rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Student Speaking Testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full md:w-1/2 aspect-video rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/YOUR_ANOTHER_VIDEO_ID"
              title="Live English Class"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-primary">Explore Our Classes</h3>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative w-full h-52">
              <Image src="/gallery1.jpg" alt="Class Session" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
            <div className="relative w-full h-52">
              <Image src="/gallery2.jpg" alt="Online Learning" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
            <div className="relative w-full h-52">
              <Image src="/gallery3.jpg" alt="Group Speaking" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
            <div className="relative w-full h-52">
              <Image src="/gallery4.jpg" alt="Live Class" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
            <div className="relative w-full h-52">
              <Image src="/gallery5.jpg" alt="Interactive Lesson" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
            <div className="relative w-full h-52">
              <Image src="/gallery6.jpg" alt="Confidence Building" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPhotoSection;
