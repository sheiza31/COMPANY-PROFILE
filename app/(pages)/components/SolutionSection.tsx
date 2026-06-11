import {Smartphone,Zap,Package2} from 'lucide-react';
const SolutionsSection = () => {
    return (
        <>
       <section
        className=" py-[70px] md:py-[120px] px-6" id="solutions">
        <div 
        className="max-w-[1280px] mx-auto px-gutter">
        <div 
        className="text-center mb-16">
        <h2 
        className="font-semibold text-[32px] text-[#00236F] mb-4">
            Layanan Solusi Kami
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
        <Smartphone
        className="text-[#0058BE]" size={24} />
        </div>
        <h3 
        className="font- text-2xl text-[#00236F] mb-4">
            Digitalisasi
        </h3>
        <p 
        className="text-on-surface-variant leading-relaxed">
         Transformasi Digital sebagai fondasi adaptasi bisnis di era modern.
         </p>
        </div>
        <div 
        className="bg-white  p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#C5C5D3] hover:-translate-y-2 transition-transform duration-300">
        <div 
        className="w-14 h-14 bg-[#D8E2FF] rounded-lg flex items-center justify-center mb-6">
        <Package2
        className="text-[#0058BE]" size={24} />
        </div>
        <h3 
        className=" text-2xl text-[#00236F] mb-4">
            ERP
        </h3>
        <p 
        className="text-on-surface-variant leading-relaxed">
         Optimasi operasional menyeluruh melalui implementasi sistem ERP yang terintegrasi.
         </p>
        </div>

        <div 
        className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#C5C5D3]  hover:-translate-y-2 transition-transform duration-300">
        <div 
        className="w-14 h-14 bg-[#D8E2FF] rounded-lg flex items-center justify-center mb-6">
        <Zap
        className="text-[#0058BE]" size={24} />
        </div>
        <h3 
        className="text-[#00236F] text-2xl mb-4">
            Optimasi Sop Dan Workflow Business
        </h3>
        <p 
        className="text-on-surface-variant leading-relaxed">
       Membangun dan memelihara sistem informasi strategis untuk mendukung operasional dan pertumbuhan bisnis yang berkelanjutan
        </p>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}
export default SolutionsSection;