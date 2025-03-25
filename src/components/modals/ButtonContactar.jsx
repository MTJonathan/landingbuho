const ButtonContactar = () => {
    const numero = "51964677899";
    const mensaje = encodeURIComponent("Hola, estoy interesado en la guia de Fundamentos de JavaScript");
    const enlacewsp = `https://wa.me/${numero}?text=${mensaje}`
    return (
    <a 
      href={enlacewsp}
      target="_blank"
      rel="noopener noreferrer"
    >
      Contactar ahora
    </a>
  )
}

export default ButtonContactar
