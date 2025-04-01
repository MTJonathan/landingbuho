const AboutItem = ({title, description}) => {
  return (
    <article className="grid gap-5 bg-[#FFF4EB] p-6 rounded-3xl">
      <h2 className="text-[#ffa61e] text-xl font-[LeagueSpartan] font-[900]">{title}</h2>
      <p className="text-[#908b85] text-sm">{description}</p>  
      <a className="text-[#ffa61e] text-sm" href="#">Leer más</a>
    </article>
  )
}

export default AboutItem
