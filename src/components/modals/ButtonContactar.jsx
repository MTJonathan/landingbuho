const ButtonContactar = ({closeDialog}) => {
    const numero = "51964677899";
    const mensaje = encodeURIComponent("Hola, estoy interesado en la guia de Fundamentos de JavaScript");
    const enlacewsp = `https://wa.me/${numero}?text=${mensaje}`

    const handleClick = () =>{
      window.open(enlacewsp, "_blank")
      closeDialog()
    }
    return (
    <button
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full py-3 px-14 bg-[#ef5532] rounded-3xl text-white"
    >
      Contactar ahora
    </button>
  )
}

export default ButtonContactar
