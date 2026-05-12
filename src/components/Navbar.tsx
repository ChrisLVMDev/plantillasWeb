export const Navbar = () => {
    return <>
    {/*Barra de navegacion superior*/}
    <nav className="bg-gray-800 backdrop-blur-md sticky top-0 z-50 flex justify-around  text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold">InmoRes</h1>
      </div>

      {/*accesos directos en la barra de navegacion*/}

      <ul className="flex space-x-4 gap-5">
        <li><a href="/Welcome" className="hover:text-gray-300">Inicio</a></li>
        <li><a href="/SobreNosotros" className="hover:text-gray-300 truncate">sobre nosotros</a></li>
        <li><a href="/Contacto" className="hover:text-gray-300">Contacto</a></li>
      </ul>
    </nav>
    
    
    
    
    </>
}
