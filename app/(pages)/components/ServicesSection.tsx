import {Activity,Cpu,Waypoints} from 'lucide-react';
const ServicesSection = () => {
        return (
            <>
        <section 
        className=" py-[70px] md:py-[120px] px-6" id="services ">
        <div 
        className="max-w-[1280px] mx-auto px-gutter">
        <div 
        className="text-center mb-16">
        <h2 
        className="font-semibold text-[32px] text-[#00236F] mb-4">
            Layanan Unggulan Kami
        </h2>
        <div 
        className="w-20 h-1 bg-[#0058BE] mx-auto rounded-full"></div>
        </div>
        <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
        className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#C5C5D3]  hover:-translate-y-2 transition-transform duration-300">
        <div 
        className="w-14 h-14 bg-[#D8E2FF] rounded-lg flex items-center justify-center mb-6 ">
        <Activity 
        className="text-[#0058BE]" size={24} />
        </div>
        <h3 
        className="font- text-2xl text-[#00236F] mb-4">
            Consulting
        </h3>
        <p 
        className="text-on-surface-variant leading-relaxed">
         Analisis strategis mendalam untuk mengidentifikasi peluang pertumbuhan dan efisiensi operasional dalam ekosistem bisnis Anda.
         </p>
        </div>
        <div 
        className="bg-white  p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#C5C5D3] hover:-translate-y-2 transition-transform duration-300">
        <div 
        className="w-14 h-14 bg-[#D8E2FF] rounded-lg flex items-center justify-center mb-6">
        <Cpu 
        className="text-[#0058BE]" size={24} />
        </div>
        <h3 
        className=" text-2xl text-[#00236F] mb-4">
            Technology
        </h3>
        <p 
        className="text-on-surface-variant leading-relaxed">
        Implementasi solusi IT mutakhir, mulai dari infrastruktur cloud hingga otomatisasi proses bisnis yang aman dan andal.
        </p>
        </div>

        <div 
        className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#C5C5D3]  hover:-translate-y-2 transition-transform duration-300">
        <div 
        className="w-14 h-14 bg-[#D8E2FF] rounded-lg flex items-center justify-center mb-6">
        <Waypoints 
        className="text-[#0058BE]" size={24} />
        </div>
        <h3 
        className="text-[#00236F] text-2xl mb-4">
            Management
        </h3>
        <p 
        className="text-on-surface-variant leading-relaxed">
        Layanan pengelolaan proyek dan operasional terpadu untuk memastikan target bisnis tercapai dengan standar kualitas tertinggi.
        </p>
        </div>
        </div>
        </div>
        </section>
                    </>
        )
}
export default ServicesSection;