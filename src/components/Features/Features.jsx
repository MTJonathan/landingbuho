import FeaturesHeader from "./FeaturesHeader";
import FeatureContent from "./FeatureContent";
import principal from "../Banner/img/principal.png";

const Features = () => {
  return (
    <section className="py-8 px-20 bg-white">
      <div className="grid grid-cols-2">
        <div className="grid place-items-center">
          <img src={principal} alt="Imagen Producto" className="w-4/5"/>
        </div>
        <article className="mx-8">
          <FeaturesHeader />
          <FeatureContent />
        </article>
      </div>
    </section>
  );
};

export default Features;
