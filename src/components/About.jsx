import about from "../about.json";
const About = () => (
  <div
    id="about"
    className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
  >
    <section className="w-full">
      <h2 className="secondary-title">私について</h2>
      <div>
        <p className="text-secondary font-serif font-semibold pt-4 leading-loose">
          {about.sentence}
        </p>
      </div>
    </section>
  </div>
);

export default About;
