import { Globe, Mail, Phone } from "lucide-react";
const Footer = () => {
    return (
        <>
        <footer id="contact" className="w-full lg:px-6 py- md:py-12 bg-white dark:bg-zinc-950 border-t border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col gap-4">
        <div className=" text-[32px] font-bold text-[#00236F]">
            ProService
        </div>
        <p className="text-base leading-[25px] text-[#444651] ">
            Precision in every service. We empower businesses to reach their full potential through excellence.
        </p>
        </div>
        <div className="flex flex-col gap-4">
        <h4 className="font-bold text-[#00236F]">
            Quick Links
        </h4>
        <nav className="flex flex-col gap-2">
         <a className="text-[#444651] hover:text-primary transition-opacity opacity-80 hover:opacity-100" href="#">
            Home
        </a>
        <a className="text-[#444651] hover:text-primary transition-opacity opacity-80 hover:opacity-100" href="#">
            Services
        </a>
        <a className="text-[#444651] hover:text-primary transition-opacity opacity-80 hover:opacity-100" href="#">
            About Us
        </a>
        <a className="text-[#444651] hover:text-primary transition-opacity opacity-80 hover:opacity-100" href="#">
            Mission
        </a>
        <a className="text-[#444651] hover:text-primary transition-opacity opacity-80 hover:opacity-100" href="#">
            Careers
        </a>
        </nav>
        </div>
        <div className="flex flex-col gap-4">
        <h4 className="font-bold text-[#00236F]">
            Legal
        </h4>
        <nav className="flex flex-col gap-2">
        <a className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100 font-label-md text-label-md" href="#">Privacy Policy</a>
        <a className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100 font-label-md text-label-md" href="#">Terms of Service</a>
        <a className="text-[#444651] hover:text-primary transition-opacity opacity-80 hover:opacity-100 font-label-md text-label-md" href="#">Cookie Policy</a>
        <a className="text-[#444651] hover:text-primary transition-opacity opacity-80 hover:opacity-100 font-label-md text-label-md" href="#">Global Offices</a>
        </nav>
        </div>
        <div className="flex flex-col gap-4">
        <h4 className="font-bold text-[#00236F]">
            Office
        </h4>
        <p className="text-on-surface-variant font-body-md text-body-md">Sudirman Central Business District (SCBD)<br/>Jakarta, Indonesia 12190</p>
        <div className="flex gap-4 mt-2">
        <Globe className="text-[#0058BE] dark:text-blue-400 cursor-pointer hover:scale-110 transition-transform" size={20} />
        <Mail className="text-[#0058BE] dark:text-blue-400 cursor-pointer hover:scale-110 transition-transform" size={20} />
        <Phone className="text-[#0058BE] dark:text-blue-400 cursor-pointer hover:scale-110 transition-transform" size={20} />
        </div>
        </div>
        </div>
        <div className="max-w-container-max mx-auto px-gutter mt-12 pt-8 border-t border-outline-variant text-center">
        <p className="text-on-surface-variant font-label-md text-label-md">© 2024 ProService. All rights reserved. Precision in every service.</p>
        </div>
        </footer>
        </>
    )
}
export default Footer;