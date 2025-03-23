import { Shopify, MercadoLibre, AliExpres, Temu } from "./svg/svg"

const Logos = () => {
    //Logos de Empresas distribudoras
  return (
    <section className="flex justify-around py-10 bg-[#F4E6D8]">
      <Shopify />
      <MercadoLibre />
      <AliExpres />
      <Temu />
    </section>
  )
}

export default Logos
