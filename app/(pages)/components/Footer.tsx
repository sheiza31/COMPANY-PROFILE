import Link from "next/link";

const Footer = () => {

    return (
        <>
        <footer 
        className="bg-gray-50 dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800 px-6 py-12">
        <div 
        className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div 
        className="flex flex-col items-center md:items-start gap-4">
        <div 
        className="font-bold text-[#00236F] dark:text-blue-400 text-lg">ProService</div>
        <p 
        className="text-gray-600 dark:text-gray-300 text-sm text-center md:text-left leading-relaxed">
        Mitra strategis Anda dalam akselerasi bisnis dan teknologi <br /> profesional.
        </p>
        </div>
        <div 
        className="flex flex-wrap justify-center gap-8">
        <Link 
        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#0058BE] dark:hover:text-blue-400 transition-colors" href="#">Privacy Policy</Link>
        <Link 
        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#0058BE] dark:hover:text-blue-400 transition-colors" href="#">Terms of Service</Link>
        <Link 
        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#0058BE] dark:hover:text-blue-400 transition-colors" href="#">Cookie Policy</Link>
        <Link 
        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#0058BE] dark:hover:text-blue-400 transition-colors" href="#">Support</Link>
        </div>
        <div 
        className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-right leading-relaxed">
            © 2024 ProService Inc. All rights <br />reserved.
        </div>
        </div>
        </footer>
        </>
    )
}

export default Footer;
