import AboutItem from "./AboutItem";
import { txt } from "./aboutTxt";

const AboutCuadros = () => {
  return (
    <div className="grid md:grid-cols-[1fr_1fr_1fr] mt-10 mb-20 gap-5">
      {txt.map((item) => (
        <AboutItem
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default AboutCuadros;
