import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-between'>
      <ul>
        <li className='text-xl font-[900]'>GuiaJS</li>
      </ul>
      <ul className='hidden md:flex gap-12 text-[#908b85] text-sm'>
        <li><a href="">Producto</a></li>
        <li><a href="">Caracteristicas</a></li>
        <li><a href="">Reseñas</a></li>
        <li><a href="">Sobre nosotros</a></li>
      </ul>
    </nav>
  )
}

export default Nav
