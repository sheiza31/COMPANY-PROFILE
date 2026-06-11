import Link from 'next/link';
const Header = () => {
return (
    <>
    <header 
     className="sticky px-6 py-4 top-0 z-50 w-full bg-white shadow-xs shadow-gray-300">
    <nav 
    className="max-w-7xl mx-auto flex justify-between items-center px-gutter py-4 w-full">
    <div 
    className=" text-4xl font-bold text-[#00236F]">
    ProService
    </div>
    <div 
    className="flex flex-items-center gap-4 md:flex items-center md:gap-8">
        <Link 
     className="text-black font-medium hover:text-[#00236F] transition-colors duration-200" 
     href="/">
     Home
    </Link>
    <Link 
     className="text-black font-medium hover:text-[#00236F] transition-colors duration-200" 
     href="#services">
     Layanan
    </Link>
    <Link 
    className="text-black font-medium hover:text-[#00236F] transition-colors duration-200" 
    href="#solutions">
    Solusi
    </Link>
    <Link 
        className="text-black font-medium hover:text-[#00236F] transition-colors duration-200" 
        href="#about">
    Tentang
    </Link>
    <Link 
        className="text-black font-medium hover:text-[#00236F] transition-colors duration-200" 
        href="#contact">
    Kontak
    </Link>
    </div>
    </nav>
    </header>
    </>
)

}

export default Header;