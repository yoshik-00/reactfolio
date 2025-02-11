import about from "../assets/data/about.json";
import image6 from "../assets/image6.jpg";
const About = () => (
  <div
    id="about"
    className="container mt-64 flex justify-between items-center mx-auto px-8 lg:px-14 w-full"
  >
    <section className="w-full">
      <h2 className="secondary-title">私について</h2>
      <div className="flex flex-col lg:flex-row gap-8 mt-8 items-start">
        <div className="w-full lg:w-1/3">
          <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
            <img
              src={image6}
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <p className="text-secondary font-serif font-semibold pt-4 leading-loose">
            {about.sentence}
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default About;
