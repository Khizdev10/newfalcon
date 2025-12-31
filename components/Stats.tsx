import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import art from "../media/high.jpg";

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animation runs only once
    threshold: 0.3,    // trigger when 30% of section is visible
  });

  return (
    <div
      ref={ref}
      className="min-h-[60vh] text-white flex flex-wrap justify-around items-center text-center gap-6"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${art.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
    >

      <div className="flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-delay="100">
        <h1 className="text-blue-700 text-3xl font-bold">
          {inView ? <CountUp start={0} end={20} duration={2} /> : 0}+
        </h1>
        <p className="text-lg">Years of Experience</p>
      </div>

      <div className="flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-delay="200">
        <h1 className="text-blue-700 text-3xl font-bold">
          {inView ? <CountUp start={0} end={100000} duration={2.5} separator="," /> : 0}+
        </h1>
        <p className="text-lg">Successful Deliveries</p>
      </div>

      <div className="flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-delay="300">
        <h1 className="text-blue-700 text-3xl font-bold">
          {inView ? <CountUp start={0} end={50} duration={2} /> : 0}+
        </h1>
        <p className="text-lg">Fleet Vehicles</p>
      </div>

      <div className="flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-delay="400">
        <h1 className="text-blue-700 text-3xl font-bold">
          {inView ? <CountUp start={0} end={100} duration={2.5} /> : 0}%
        </h1>
        <p className="text-lg">Nationwide Coverage</p>
      </div>
    </div>
  );
};

export default Stats;
