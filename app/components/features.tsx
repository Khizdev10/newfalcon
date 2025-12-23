import truck from '../../media/high.jpg'
import FeaturesFlex from './Shipicon';

const Features = () => {
  return (
    <section className="bg-blue-50">
      <div className="flex flex-col md:flex-row min-h-[80vh]">

        {/* LEFT CONTENT */}
        <div
          className="w-full md:w-1/2 px-6 md:px-10 py-10 md:py-20 flex flex-col justify-center"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <h1
            className="text-2xl md:text-3xl font-semibold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Services
          </h1>

          <p
            className="text-md md:text-lg opacity-60 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            With more than 30 years of experience in the logistics industry, we deliver reliable transport solutions, efficient supply chain management, and customer-focused services tailored to meet your business needs.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FeaturesFlex />
          </div>
        </div>

        {/* RIGHT IMAGE (hidden on small screens) */}
        <div
          className="hidden md:block w-1/2 relative"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <img
            src={truck.src}
            alt="Truck showing services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(15,23,42,0.8)]"></div>
        </div>

      </div>
    </section>
  );
};

export default Features;
