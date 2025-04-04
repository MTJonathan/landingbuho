import FeaturesHeader from "./FeaturesHeader";
import FeatureContent from "./FeatureContent";
import principal from "../Banner/img/principal.png";

const Features = () => {
  return (
    <section className="pb-20 sm:px-20 bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="hidden lg:grid place-items-center">
          <img src={principal} alt="Imagen Producto" className="w-4/5"/>
        </div>
        <article className="px-5 w-full lg:mx-8">
          <FeaturesHeader />
          <FeatureContent />
        </article>
      </div>
    </section>
  );
};

export default Features;
