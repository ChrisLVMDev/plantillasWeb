
import { Button } from "./Button.tsx"

export const NavbarTipo = () => {
    return <>
    {/*Barra de navegacion superior*/}
    <nav className="bg-amber-500 backdrop-blur-md sticky top-0 z-50 flex justify-center items-center gap-8
     text-white p-4 shadow-2xl">

      {/*accesos directos en la barra de navegacion*/}
      
      <ul className="flex space-x-4 gap-5">
        <li><a href="#" className="hover:text-gray-300 truncate">Lujo</a></li>
        <li><a href="#" className="hover:text-gray-300 truncate">Costa</a></li>
        <li><a href="#" className="hover:text-gray-300 truncate">urbano</a></li>
        <li><a href="#" className="hover:text-gray-300">rustico</a></li>
      </ul>
      <div className="flex gap-4">
        <Button 
        name="Alquilar" 
        color="red"
      />
        <Button 
        name="Comprar" 
        color="black"
      />
        
      </div>
    </nav>
        
    </>
}