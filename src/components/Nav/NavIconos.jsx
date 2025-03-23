import { Busqueda, Shop, Menu } from "./svg/svg"

const NavIconos = () => {
  return (
    <nav>
      <ul className='flex justify-between'>
        <li><Busqueda /></li>
        <li><Shop /></li>
        <li><Menu /></li>
      </ul>
    </nav>
  )
}

export default NavIconos
