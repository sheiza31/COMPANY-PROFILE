import { TrendingUp, CheckCircle2, Monitor,Building2 } from "lucide-react";
import Image from "next/image";
const LayananKami = () => {
 return (
        <>
        <section id="solutions" className="bg-gray-50 dark:bg-zinc-950 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#00236F] dark:text-blue-400 mb-4">Solusi Menyeluruh untuk Pertumbuhan</h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">Kami merancang setiap layanan dengan pendekatan berbasis data untuk memastikan keberhasilan jangka panjang bagi setiap klien kami.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7 bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-800 group hover:shadow-lg transition-all">
        <div className="w-12 h-12 bg-[#0058BE]/10 text-[#0058BE] dark:bg-blue-500/10 dark:text-blue-400 rounded-lg flex items-center justify-center mb-8">
        <TrendingUp size={24} />
        </div>
        <h3 className="font-bold text-2xl text-[#00236F] dark:text-blue-400 mb-6">Konsultasi Strategis</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-base md:text-lg leading-relaxed">Analisis mendalam mengenai ekosistem bisnis Anda. Kami membantu identifikasi hambatan operasional, peluang ekspansi pasar, dan optimalisasi rantai pasok untuk efisiensi maksimal.</p>
        <ul className="space-y-4">
        <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
        <CheckCircle2 className="text-[#0058BE] dark:text-blue-400" size={18} />
        Audit Operasional Komprehensif
        </li>
        <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
        <CheckCircle2 className="text-[#0058BE] dark:text-blue-400" size={18} />
        Perencanaan Strategis 5-Tahun
        </li>
        </ul>
        </div>
        <div className="md:col-span-5 bg-[#00236F] text-white dark:bg-blue-950/40 p-8 md:p-12 rounded-xl shadow-sm border border-transparent dark:border-zinc-800 group hover:scale-[1.02] transition-transform">
        <div className="w-12 h-12 bg-white/20 text-white rounded-lg flex items-center justify-center mb-8">
        <Monitor size={24} />
        </div>
        <h3 className="font-bold text-2xl mb-6">Inovasi Teknologi</h3>
        <p className="text-blue-100 dark:text-blue-200 mb-8 text-base leading-relaxed">Implementasi infrastruktur digital yang aman dan skalabel. Kami fokus pada Cloud Management, Keamanan Siber, dan Otomasi Proses Bisnis.</p>
        </div>
        <div className="md:col-span-12 bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-800 flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
        <div className="w-12 h-12 bg-[#0058BE]/10 text-[#0058BE] dark:bg-blue-500/10 dark:text-blue-400 rounded-lg flex items-center justify-center mb-8">
        <Building2 size={24} />
        </div>
        <h3 className="font-bold text-2xl text-[#00236F] dark:text-blue-400 mb-6">
            Manajemen Terkelola
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6">Fokus pada bisnis inti Anda sementara kami mengelola operasional harian. Layanan manajemen kami mencakup pengelolaan aset, SDM, hingga kepatuhan regulasi internasional.</p>
        </div>
        <div className="flex-1 w-full h-full min-h-[300px]">
        <Image alt="Management Team Collaboration" 
        className="w-full h-full object-cover rounded-xl"
        width={500} height={500}
        data-alt="A diverse team of professionals in business attire collaborating in a bright, modern open-plan office. They are gathered around a large white table with laptops and digital tablets, engaged in a productive discussion. The lighting is natural and soft, creating a transparent and trustworthy professional atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWgbPT9eD4y2dKBrsnzC3p-Jbqpf9yTL7_Y_paotOhFWfLT9AGev2DkhMx2RHGdHC_g7u1CdTkOGFGu5na2F-ZtkYDI3JL6In2NEfzUvL2Tuj1eIsTw-rQpeKe8D52PG61ESBkPIggtRwy3FJfTOVn9D_L_saQw6N_xvpH6omMzbatIkQ6bhPNKkqfPyGGN6_cibiDEyXv-nKyseHvC1q--7f_vtfu3Q-RiZ_MT8aYNaqG74RrY_AeubqsUi2oigLWsLEMAYUqVb8"/>
        </div>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}
export default LayananKami;