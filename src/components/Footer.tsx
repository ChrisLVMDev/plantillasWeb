

export const Footer= () => {
   
  const currentYear = new Date().getFullYear();
 return (

    <footer className="w-full bg-slate-900 text-white py-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <div className="text-sm text-slate-400">
         &copy; {currentYear} MiEmpresa. Todos los derechos reservados.
        </div>

        {/* Enlaces */}
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-400 transition-colors">Inicio</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Servicios</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Privacidad</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Contacto</a>
        </nav>

      </div>
    </footer>
 );
};

